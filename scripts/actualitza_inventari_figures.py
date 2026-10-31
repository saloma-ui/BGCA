#!/usr/bin/env python3
"""Inventari automàtic de BGCA: els fitxers nous resten pendents de verificació."""
from __future__ import annotations

import json
import os
from pathlib import Path
import re
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
DATA = ROOT / "figures/fitxes.json"
BASE = ROOT / "figures/fitxers-inicials.json"
ALL = DOCS / "inventari-visual.md"
EXT = {".png", ".jpg", ".jpeg", ".webp", ".svg"}
START, END = "<!-- FIGURES_AUTO_INICI -->", "<!-- FIGURES_AUTO_FI -->"
NAV_START, NAV_END = "          # FIGURES_AUTO_INICI", "          # FIGURES_AUTO_FI"
GITHUB = "https://github.com/saloma-ui/BGCA/blob/main/"


def read(p):
    return p.read_text(encoding="utf-8")


def save(p, content):
    p.parent.mkdir(parents=True, exist_ok=True)
    if not p.exists() or read(p) != content:
        p.write_text(content, encoding="utf-8")
        print("Actualitzat:", p.relative_to(ROOT))


def section(content, body, start=START, end=END):
    if (start in content) != (end in content):
        raise ValueError("Marcador incomplet")
    block = start + "\n" + body.strip() + "\n" + end
    if start in content:
        if content.count(start) != 1 or content.count(end) != 1:
            raise ValueError("Marcadors duplicats")
        a, rest = content.split(start, 1)
        _, b = rest.split(end, 1)
        return a + block + b
    return content.rstrip() + "\n\n" + block + "\n"


def category(p):
    m = re.match(r"docs/(?:material|activitats)/ud0*(\d+)/", p, re.I)
    if m:
        return "ud" + str(int(m.group(1)))
    if p.startswith("docs/programacio/infografies/"):
        return "programacio"
    return "altres"


def name(k):
    if k == "programacio":
        return "Infografies de programació"
    if k == "altres":
        return "Altres recursos"
    return "UD" + k[2:].zfill(2)


def clean(x):
    return str(x if x not in ("", None) else "—").replace("|", r"\|").replace("\n", " ")


def reviewed(x):
    return x.get("revisat") is True and all(
        x.get(k) not in (None, "", "pendent") for k in ("tipus", "origen", "llicencia")
    ) and bool(x.get("autor") or x.get("font_url"))


def table(paths, records):
    if not paths:
        return "Cap figura nova."
    out = [
        "| Fitxer | Tipus | Origen | Autor | Llicència | Escala / observacions | Estat |",
        "|:--|:--|:--|:--|:--|:--|:--|",
    ]
    for p in sorted(paths):
        x = records[p]
        origin = clean(x.get("origen"))
        source = str(x.get("font_url", ""))
        if source.startswith("https://"):
            origin += " · [Font](" + source + ")"
        status = "**Documentat i revisat**" if reviewed(x) else "**Pendent de verificar**"
        lic = clean(x.get("llicencia"))
        if not reviewed(x):
            lic += " (sense pressuposar drets de tercers)"
        details = clean(x.get("escala")) + "; " + clean(x.get("observacions"))
        link = GITHUB + quote(p, safe="/")
        out.append(
            f"| [{clean(Path(p).name)}]({link}) | {clean(x.get('tipus'))} | "
            f"{origin} | {clean(x.get('autor'))} | {lic} | {details} | {status} |"
        )
    return "\n".join(out)


def warn(s):
    print("::warning::" + s)


def main():
    initial = set(json.loads(read(BASE)))
    if len(initial) != 100:
        raise ValueError("Ha canviat el registre de referència de les 100 figures inicials.")
    current = {p.relative_to(ROOT).as_posix() for p in DOCS.rglob("*")
               if p.is_file() and p.suffix.lower() in EXT}
    root = json.loads(read(DATA))
    if root.get("versio") != 1 or not isinstance(root.get("fitxes"), dict):
        raise ValueError("Fitxes JSON incompatibles.")
    records = root["fitxes"]
    new = sorted(current - records.keys())
    for p in new:
        records[p] = dict(tipus="pendent", origen="pendent", autor="",
                          font_url="", llicencia="pendent", escala="",
                          observacions="", revisat=False)
        warn("Figura nova pendent de verificar: " + p)
    for p in sorted((initial | records.keys()) - current):
        warn("Fitxer absent del repositori però conservat al registre: " + p)
    save(DATA, json.dumps(root, ensure_ascii=False, indent=2) + "\n")

    additions = sorted((current & records.keys()) - initial)
    pending = [p for p in additions if not reviewed(records[p])]
    for p in pending:
        if p not in new:
            warn("Fitxa pendent: " + p)
    groups = sorted({category(p) for p in additions})
    newunits = sorted(
        (g for g in groups if re.fullmatch(r"ud\d+", g) and int(g[2:]) > 4),
        key=lambda k: int(k[2:])
    )
    general = ("## Incorporacions posteriors (registre automàtic)\n\n"
               "El sistema registra les figures noves, però no n'infereix "
               "l'autoria ni la llicència.\n\n"
               f"**Fitxers actuals:** {len(current)} · "
               f"**Incorporacions:** {len(additions)} · "
               f"**Pendents de verificar:** {len(pending)}.\n\n"
               + table(additions, records))
    if newunits:
        general += "\n\n### Unitats noves\n\n" + "\n".join(
            f"- [{name(g)}](registre-figures-{g}.md)" for g in newunits
        )
    save(ALL, section(read(ALL), general))

    for g in sorted(set(groups) | {"ud1", "ud2", "ud3", "ud4", "programacio"}):
        page = DOCS / ("registre-figures-" + g + ".md")
        own = [p for p in additions if category(p) == g]
        body = ("## Incorporacions posteriors (registre automàtic)\n\n"
                "Les fonts i els drets de les figures noves requereixen "
                "una revisió individual.\n\n" + table(own, records))
        if page.exists():
            save(page, section(read(page), body))
        else:
            prolog = (f"---\ntitle: Figures de {name(g)}\n---\n\n"
                      f"# Figures de {name(g)}\n\n"
                      "Registre de procedència i de drets de les imatges.\n")
            save(page, section(prolog, body))
    nav = ROOT / "mkdocs.yml"
    links = "\n".join(
        f"          - {name(g)}: registre-figures-{g}.md" for g in newunits
    )
    save(nav, section(read(nav), links, NAV_START, NAV_END))
    about = DOCS / "sobre/index.md"
    links = "\n".join(
        f"- [{name(g)}](../registre-figures-{g}.md) — Procedència de les figures."
        for g in newunits
    )
    save(about, section(read(about), links))
    dest = os.getenv("GITHUB_STEP_SUMMARY")
    if dest:
        with open(dest, "a", encoding="utf-8") as f:
            f.write("### Inventari visual\n\n")
            f.write(f"- Fitxers actuals: **{len(current)}**.\n")
            f.write(f"- Nous detectats: **{len(new)}**.\n")
            f.write(f"- Pendents entre les incorporacions: **{len(pending)}**.\n")
    print(f"Figures: {len(current)}; noves: {len(new)}; pendents: {len(pending)}.")


if __name__ == "__main__":
    main()
