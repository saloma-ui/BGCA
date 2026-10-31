# Registre automàtic de figures de BGCA

Els fitxers PNG, JPG, JPEG, WebP i SVG nous publicats dins de docs/ es detecten abans de construir el web. El procés els afegeix al fitxer figures/fitxes.json i als inventaris HTML i Markdown corresponents.

Les 100 figures de referència inicial consten a figures/fitxers-inicials.json. El sistema manté les fitxes inicials i només genera noves entrades per a fitxers posteriors.

Per completar una fitxa nova, cerca la ruta al fitxer JSON i comprova els camps tipus, origen, autor, font_url, llicencia, escala i observacions. El camp revisat només s'ha de canviar a true després de verificar l'origen i els drets. El programa no pressuposa que una fotografia sigui real ni que una imatge sintètica tengui drets exclusius.

Els registres estan agrupats a Sobre aquest web → Inventari visual, separats de la informació acadèmica. Si una nova unitat incorpora figures, apareix automàticament sota l'inventari visual. Les figures incrustades en PDF o carregades de serveis externs no queden cobertes per aquest inventari.

Execució local:

    python scripts/actualitza_inventari_figures.py
