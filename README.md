# BGCA · 1r de Batxillerat

Repositori mínim per publicar materials Markdown amb **Material for MkDocs** i **GitHub Pages**, sense necessitat d'instal·lar MkDocs al Mac o al Windows.

## Primera publicació

1. Crea un repositori de GitHub (per exemple, `bgca`).
2. Copia-hi tot el contingut d'aquesta carpeta, inclosa `.github/`.
3. Comprova que la branca principal es diu `main`.
4. A GitHub ves a **Settings → Pages**.
5. A **Build and deployment → Source**, selecciona **GitHub Actions**.
6. Fes un canvi o un nou commit a `main`.
7. A la pestanya **Actions** podràs veure el procés `Publica BGCA`.
8. Quan acabi, la pàgina quedarà publicada a GitHub Pages.

## Feina habitual

Edita només els fitxers Markdown de `docs/` i afegeix les imatges dins la carpeta `img/` de cada unitat.

Exemple:

```markdown
![Principi de superposició](img/superposicio.png)
```

No cal editar HTML ni la carpeta `site/`: GitHub Actions la genera automàticament.
