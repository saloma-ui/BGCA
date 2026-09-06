from mkdocs.plugins import event_priority


@event_priority(1000)
def on_page_markdown(markdown, page, config, files):
    """Activa el PDF per defecte a les pàgines de material.

    Un valor `pdf` definit explícitament al front matter sempre té prioritat.
    """
    if page.file.src_path.startswith("material/") and "pdf" not in page.meta:
        page.meta["pdf"] = True

    return markdown
