# BGCA · 1r de Batxillerat

Repositori de materials de **Biologia, Geologia i Ciències Ambientals de 1r de Batxillerat**, publicats amb Material for MkDocs i GitHub Pages.

## Arquitectura

```text
docs/
├── index.md
├── mathjax.js
├── material/
│   ├── ud1/
│   │   ├── ud1.md
│   │   └── figures/
│   ├── ud2/
│   ├── ud3/
│   └── ud4/
└── activitats/
    ├── ud1/
    │   └── index.md
    ├── ud2/
    ├── ud3/
    └── ud4/
```

Cada unitat de material és autocontinguda: el Markdown principal i les seves figures comparteixen carpeta. Les activitats es creen dins `docs/activitats/udx/`, amb una subcarpeta pròpia per a cada activitat quan sigui necessari.

Els noms de carpetes i fitxers s'escriuen en minúscules, sense espais ni accents.

## Publicació

La branca `main` activa el flux de GitHub Actions. El lloc es construeix amb MkDocs i es publica mitjançant GitHub Pages.

Els PDF es generen amb `mkdocs-exporter`. Les pàgines de `material/` s'exporten per defecte; les activitats que necessitin PDF poden indicar `pdf: true` al front matter.
