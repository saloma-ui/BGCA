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

## Autoria, llicències i inventari visual

La portada conserva quatre targetes i ofereix un enllaç discret a [Sobre aquest web](docs/sobre/index.md). Aquesta secció conté les pàgines d'[autoria](docs/autoria-i-metodologia.md), [llicències](docs/llicencia.md), [crèdits](docs/registre-recursos.md) i [inventari visual](docs/inventari-visual.md).

Les aportacions educatives originals es publiquen sota [CC BY-SA 4.0](LICENSE-CONTINGUTS.md), i el codi informàtic original sota [MIT](LICENSE-MIT), només quan es poden concedir els drets corresponents. Els recursos de tercers conserven les seves condicions.

El registre parteix de **100 fitxers gràfics**, inicialment pendents de verificació de procedència, i detecta automàticament les incorporacions futures. [Instruccions del procés](figures/README.md).
