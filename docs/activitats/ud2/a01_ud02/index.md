---
title: A01 · Com sabem què hi ha dins la Terra?
pdf: false
hide:
  - navigation
  - toc
---

<div class="presentacio-vertical" markdown>

<section class="pv-seccio pv-portada" markdown>

# A01 · Com sabem què hi ha dins la Terra?

## Com podem conèixer l’interior d’un planeta al qual pràcticament no podem accedir?

**UD02 · Una Terra dinàmica**

<!-- DOCENT: Activitat d'aula i també itinerari autònom per a alumnat absent o que s'incorpora més tard. El material guia continua essent autosuficient per a autoestudi; aquesta activitat fa predir, observar, inferir i contrastar. -->

</section>

<section class="pv-seccio" markdown>

# 1 · Un planeta gairebé inaccessible

La Terra té un radi d’uns **6.371 km**.

<p class="pv-pregunta"><strong>Fins a quina profunditat creus que ha arribat la perforació humana més profunda?</strong></p>

<div class="pv-profunditat" data-pv-profunditat>
<div class="pv-profunditat-controls">
<div>
<label class="pv-label" for="estimacio-profunditat">La meva estimació</label>
<div class="pv-profunditat-numero">
<input id="estimacio-profunditat" type="number" min="0" max="6371" step="1" inputmode="numeric" data-pv-depth-number aria-label="Profunditat estimada en quilòmetres">
<span>km</span>
</div>
</div>
<div class="pv-profunditat-slider">
<input type="range" min="0" max="6371" step="1" value="0" data-pv-depth-range aria-label="Profunditat estimada entre la superfície i el centre de la Terra">
<div class="pv-escala"><span>0 km · superfície</span><span>6.371 km · centre</span></div>
</div>
<button type="button" class="pv-opcio pv-boto-comprova" data-pv-depth-check disabled>Comprova-ho</button>
</div>
<div class="pv-profunditat-visual">
<svg viewBox="0 0 320 320" role="img" aria-label="Esquema de la Terra amb la profunditat estimada">
<circle cx="160" cy="160" r="132" class="pv-earth-outline"></circle>
<circle cx="160" cy="28" r="5" class="pv-earth-surface"></circle>
<line x1="160" y1="28" x2="160" y2="160" class="pv-earth-radius"></line>
<line x1="160" y1="28" x2="160" y2="28" class="pv-earth-guess" data-pv-depth-line></line>
<circle cx="160" cy="28" r="6" class="pv-earth-guess-dot" data-pv-depth-dot></circle>
<text x="178" y="43" class="pv-svg-label">superfície</text>
<text x="178" y="164" class="pv-svg-label">centre</text>
<text x="20" y="295" class="pv-svg-value" data-pv-depth-output></text>
</svg>
</div>
<p class="pv-validacio" data-pv-depth-validation aria-live="polite"></p>
<div class="pv-resultat-profunditat" data-pv-depth-result hidden>
<h3>La dada real</h3>
<p>La <strong>perforació superprofunda de Kola</strong> va arribar aproximadament als <strong>12,3 km</strong>.</p>
<p data-pv-depth-comparison></p>
<div class="pv-cadena"><strong>12,3 km ≈ 0,19 % del radi terrestre</strong></div>
<p>Representada a escala de tota la Terra, aquesta profunditat és gairebé imperceptible.</p>
</div>
</div>

<!-- DOCENT: No convertir aquesta estimació en una nota. La funció és provocar una predicció i fer perceptible l'escala del problema. -->

</section>

<section class="pv-seccio" markdown>

# 2 · Formula la teva hipòtesi inicial

Si només hem accedit directament a una fracció diminuta del planeta...

<p class="pv-pregunta"><strong>com podem saber què hi ha a l’interior profund de la Terra?</strong></p>

Abans de consultar cap font, proposa **dues maneres diferents d’obtenir informació** sobre l’interior terrestre.

<div class="pv-respostes" data-pv-hipotesis>
<label class="pv-label" for="hipotesi-1">Possibilitat 1</label>
<textarea id="hipotesi-1" rows="3" data-pv-hyp="1" placeholder="Escriu una primera possibilitat..."></textarea>
<label class="pv-label" for="hipotesi-2">Possibilitat 2</label>
<textarea id="hipotesi-2" rows="3" data-pv-hyp="2" placeholder="Escriu una segona possibilitat..."></textarea>
<div class="pv-accions">
<button type="button" class="pv-boto-principal" data-pv-hyp-save>Desa les meves hipòtesis</button>
<span class="pv-estat" data-pv-hyp-status aria-live="polite"></span>
</div>
<p class="pv-nota-local">Les respostes es desen només en aquest navegador i dispositiu. No s’envien al professor ni a cap servidor.</p>
</div>

> **No cercam encara “la resposta correcta”.** Guardam la teva idea inicial perquè més endavant la puguis revisar a la llum de noves evidències.

<!-- DOCENT: Posada en comú breu si es fa presencialment. No introduir encara les categories directe/indirecte. -->

</section>

<section class="pv-seccio" markdown>

# 3 · Tres estacions d’investigació

Investigaràs **tres maneres d’obtenir informació sobre l’interior terrestre**.

A l’aula podeu treballar amb les infografies impreses en A3. Si fas l’activitat a distància, **les mateixes fonts d’informació són aquí** i pots completar tot l’itinerari de manera autònoma.

<div class="pv-progres-estacions" data-pv-stations-progress>
<div class="pv-progres-text"><strong>Progrés:</strong> <span data-pv-stations-count>0 de 3 estacions completades</span></div>
<div class="pv-progres-pista" aria-hidden="true"><span data-pv-stations-bar></span></div>
</div>

Per a cada estació has de distingir dues coses:

<div class="pv-cadena">
<strong>què obtenim o mesuram directament</strong> → <strong>què podem arribar a inferir</strong>
</div>

Comença per la perforació i avança per les tres estacions.

</section>

<section class="pv-seccio pv-estacio" id="estacio-perforacio" data-pv-station="perforacio" markdown>

# 3.1 · Estació 1 — Perforació

<p class="pv-pregunta"><strong>Què podem saber quan perforam l’escorça terrestre?</strong></p>

<a class="pv-infografia-link" href="figures/estacio_perforacio.png" target="_blank" rel="noopener">
<img src="figures/estacio_perforacio.png" alt="Infografia de l'estació Perforació: profunditat assolida, què obtenim directament i limitacions">
<span>Obre la infografia en gran ↗</span>
</a>

<div class="pv-respostes pv-estacio-form">
<label class="pv-label" for="perforacio-directe">1. Què obtenim o mesuram directament gràcies a una perforació?</label>
<textarea id="perforacio-directe" rows="3" data-pv-station-answer="directe" placeholder="Descriu la dada o mostra que obtenim..."></textarea>
<label class="pv-label" for="perforacio-inferencia">2. Què podem arribar a saber sobre els materials travessats?</label>
<textarea id="perforacio-inferencia" rows="3" data-pv-station-answer="inferencia" placeholder="Explica què podem concloure a partir de les dades..."></textarea>
<label class="pv-label" for="perforacio-clau">3. Quina és la principal limitació d’aquest mètode?</label>
<textarea id="perforacio-clau" rows="3" data-pv-station-answer="clau" placeholder="Identifica la limitació principal..."></textarea>
<div class="pv-accions">
<button type="button" class="pv-boto-principal" data-pv-station-save>Desa i continua</button>
<span class="pv-estat" data-pv-station-status aria-live="polite"></span>
</div>
<a class="pv-seguent" href="#estacio-xenolit" data-pv-station-next hidden>Ves a l’estació 2 · Xenòlit ↓</a>
</div>

</section>

<section class="pv-seccio pv-estacio" id="estacio-xenolit" data-pv-station="xenolit" markdown>

# 3.2 · Estació 2 — Xenòlit

<p class="pv-pregunta"><strong>Com pot arribar fins a nosaltres una roca procedent d’una zona profunda?</strong></p>

<a class="pv-infografia-link" href="figures/estacio_xenolit.png" target="_blank" rel="noopener">
<img src="figures/estacio_xenolit.png" alt="Infografia de l'estació Xenòlit: transport de fragments de roca pel magma i informació que aporten">
<span>Obre la infografia en gran ↗</span>
</a>

<div class="pv-respostes pv-estacio-form">
<label class="pv-label" for="xenolit-directe">1. Què obtenim directament quan estudiam un xenòlit?</label>
<textarea id="xenolit-directe" rows="3" data-pv-station-answer="directe" placeholder="Descriu què tenim físicament davant nosaltres..."></textarea>
<label class="pv-label" for="xenolit-inferencia">2. Què podem arribar a inferir sobre la zona d’on procedeix?</label>
<textarea id="xenolit-inferencia" rows="3" data-pv-station-answer="inferencia" placeholder="Explica què ens pot indicar aquesta mostra..."></textarea>
<label class="pv-label" for="xenolit-clau">3. Com ha pogut arribar aquesta roca fins a la superfície?</label>
<textarea id="xenolit-clau" rows="3" data-pv-station-answer="clau" placeholder="Reconstrueix el procés de transport..."></textarea>
<div class="pv-accions">
<button type="button" class="pv-boto-principal" data-pv-station-save>Desa i continua</button>
<span class="pv-estat" data-pv-station-status aria-live="polite"></span>
</div>
<a class="pv-seguent" href="#estacio-registre" data-pv-station-next hidden>Ves a l’estació 3 · Registre sísmic ↓</a>
</div>

</section>

<section class="pv-seccio pv-estacio" id="estacio-registre" data-pv-station="registre" markdown>

# 3.3 · Estació 3 — Registre sísmic

<p class="pv-pregunta"><strong>Què registra realment un sismògraf?</strong></p>

<a class="pv-infografia-link" href="figures/estacio_registre_sismic.png" target="_blank" rel="noopener">
<img src="figures/estacio_registre_sismic.png" alt="Infografia de l'estació Registre sísmic: terratrèmol, propagació de les ones, sismògraf i inferències">
<span>Obre la infografia en gran ↗</span>
</a>

<div class="pv-respostes pv-estacio-form">
<label class="pv-label" for="registre-directe">1. Què mesura directament un sismògraf?</label>
<textarea id="registre-directe" rows="3" data-pv-station-answer="directe" placeholder="Descriu què queda enregistrat..."></textarea>
<label class="pv-label" for="registre-inferencia">2. Què podem arribar a inferir a partir del registre?</label>
<textarea id="registre-inferencia" rows="3" data-pv-station-answer="inferencia" placeholder="Explica què podem deduir sobre l'interior..."></textarea>
<label class="pv-label" for="registre-clau">3. Quina diferència hi ha entre allò que mesuram i allò que concloem?</label>
<textarea id="registre-clau" rows="3" data-pv-station-answer="clau" placeholder="Diferencia la dada de la interpretació..."></textarea>
<div class="pv-accions">
<button type="button" class="pv-boto-principal" data-pv-station-save>Desa l’estació</button>
<span class="pv-estat" data-pv-station-status aria-live="polite"></span>
</div>
<a class="pv-seguent" href="#sintesi-estacions" data-pv-station-next hidden>Veu la teva síntesi ↓</a>
</div>

</section>

<section class="pv-seccio" id="sintesi-estacions" markdown>

# 3.4 · La teva síntesi de les tres estacions

Quan hagis desat les tres estacions, aquesta taula recuperarà les teves respostes.

<div class="pv-sintesi" data-pv-stations-summary>
<table>
<thead>
<tr><th>Font</th><th>Què obtenim o mesuram directament?</th><th>Què podem arribar a inferir?</th></tr>
</thead>
<tbody>
<tr><th>Perforació</th><td data-pv-summary="perforacio.directe">—</td><td data-pv-summary="perforacio.inferencia">—</td></tr>
<tr><th>Xenòlit</th><td data-pv-summary="xenolit.directe">—</td><td data-pv-summary="xenolit.inferencia">—</td></tr>
<tr><th>Registre sísmic</th><td data-pv-summary="registre.directe">—</td><td data-pv-summary="registre.inferencia">—</td></tr>
</tbody>
</table>
<p class="pv-estat" data-pv-summary-status aria-live="polite">Completa i desa les tres estacions per tenir la síntesi sencera.</p>
</div>

> **Atura’t abans de classificar-les.** Al punt següent compararem les tres fonts i intentarem descobrir quines comparteixen una mateixa manera d’obtenir informació.

</section>

<section class="pv-seccio" id="classificacio-fonts" markdown>

# 4 · Què tenen en comú?

Ara ja tens tres fonts d’informació diferents. **No et donarem encara el nom de les categories.**

<p class="pv-pregunta"><strong>Pots agrupar perforació, xenòlit i registre sísmic en dos grups segons el tipus d’informació que obtenim?</strong></p>

<div class="pv-classifica-fonts" data-pv-fonts-classification>
<p>Assigna cada font a <strong>Grup 1</strong> o <strong>Grup 2</strong>. Els noms dels grups no tenen significat: el criteri l’has de decidir tu.</p>

<div class="pv-fonts-grid">
<article class="pv-font-card" data-pv-font="perforacio">
<h3>Perforació</h3>
<p>Podem extreure mostres i fer mesures a les profunditats que travessa la perforació.</p>
<div class="pv-grup-botons" role="group" aria-label="Assigna Perforació a un grup">
<button type="button" data-pv-group="1" aria-pressed="false">Grup 1</button>
<button type="button" data-pv-group="2" aria-pressed="false">Grup 2</button>
</div>
</article>

<article class="pv-font-card" data-pv-font="xenolit">
<h3>Xenòlit</h3>
<p>Tenim un fragment real de roca que ha estat transportat cap a la superfície.</p>
<div class="pv-grup-botons" role="group" aria-label="Assigna Xenòlit a un grup">
<button type="button" data-pv-group="1" aria-pressed="false">Grup 1</button>
<button type="button" data-pv-group="2" aria-pressed="false">Grup 2</button>
</div>
</article>

<article class="pv-font-card" data-pv-font="registre">
<h3>Registre sísmic</h3>
<p>Mesuram a la superfície un efecte produït per ones que han travessat l’interior.</p>
<div class="pv-grup-botons" role="group" aria-label="Assigna Registre sísmic a un grup">
<button type="button" data-pv-group="1" aria-pressed="false">Grup 1</button>
<button type="button" data-pv-group="2" aria-pressed="false">Grup 2</button>
</div>
</article>
</div>

<label class="pv-label" for="criteri-classificacio">Quin criteri has utilitzat per separar les tres fonts?</label>
<textarea id="criteri-classificacio" rows="3" data-pv-classify-criterion placeholder="Explica en una frase què tenen en comú les fonts que has posat al mateix grup..."></textarea>

<div class="pv-accions">
<button type="button" class="pv-boto-principal" data-pv-classify-check>Comprova l’agrupació</button>
<span class="pv-estat" data-pv-classify-status aria-live="polite"></span>
</div>

<div class="pv-classificacio-revela" data-pv-classify-reveal hidden>
<h3>Ara podem posar nom als dos tipus de mètodes</h3>
<div class="pv-dos-metodes">
<div>
<h4>Mètodes directes</h4>
<p><strong>Perforació · Xenòlit</strong></p>
<p>Obtenim <strong>materials de l’interior terrestre</strong> que podem observar, mesurar o analitzar.</p>
</div>
<div>
<h4>Mètodes indirectes</h4>
<p><strong>Registre sísmic</strong></p>
<p>No obtenim el material profund: <strong>mesuram un efecte</strong> i, a partir d’aquestes dades, inferim propietats de l’interior.</p>
</div>
</div>
<div class="pv-nota-conceptual">
<strong>Important:</strong> «directe» no vol dir «sense interpretació». Un xenòlit és una mostra real, però encara hem d’interpretar d’on prové, si s’ha modificat durant el transport i fins a quin punt representa la regió profunda.
</div>
</div>
</div>

<!-- DOCENT: L'objectiu és que la classificació emergeixi després d'haver distingit dada i inferència a les tres estacions. No donar les etiquetes directe/indirecte abans que l'alumnat hagi intentat construir el criteri. -->

</section>

</div>