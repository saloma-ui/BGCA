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

<!-- DOCENT: La pàgina funciona com a guió d'aula i com a itinerari autònom per a alumnat absent. El material guia continua essent el manual complet de consulta. -->

</section>

<section class="pv-seccio" markdown>

# 1 · Un planeta gairebé inaccessible

La Terra té un radi d’uns **6.371 km**.

Però, fins on creus que hem estat capaços d’arribar perforant-la?

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
<h3>12,3 km</h3>
<p>La <strong>perforació superprofunda de Kola</strong> va arribar aproximadament als <strong>12,3 km</strong>.</p>
<p data-pv-depth-comparison></p>
<div class="pv-cadena"><strong>12,3 km ≈ 0,19 % del radi terrestre</strong></div>
<p>Representada a escala de tota la Terra, aquesta profunditat és gairebé imperceptible.</p>
</div>
</div>

<!-- DOCENT: 2–3 min. No és una evidència ni una nota. La funció és provocar una predicció i fer perceptible l'escala del problema. -->

## Miram-ho en context

Les perforacions ens permeten obtenir **mostres de roca**, mesurar la **temperatura en profunditat** i recollir dades dels materials que travessam. Però només exploren una part extraordinàriament superficial del planeta.

<a class="pv-infografia-link" href="figures/estacio_perforacio.png" target="_blank" rel="noopener">
<img src="figures/estacio_perforacio.png" alt="Infografia sobre la perforació com a mètode directe d'estudi de l'interior terrestre">
<span>Obre la infografia en gran ↗</span>
</a>

> **Idea clau**  
> Podem obtenir mostres directes de les zones més superficials de la Terra, però la immensa majoria del planeta és inaccessible.

<!-- DOCENT: 2 min. Observar i comentar la infografia. No demanar una resposta escrita. Preguntes orals possibles: què obtenim realment?, quina és la limitació?, què no podem saber simplement perforant? -->

## I aleshores, com ho sabem?

<p class="pv-pregunta"><strong>Si no podem arribar físicament a gairebé cap part de l’interior terrestre, d’on pot venir la informació que ens permet construir-ne un model?</strong></p>

**Pensa-hi uns segons i comenta una possibilitat amb la persona del costat.** Després en posarem algunes en comú.

No cercam encara una classificació ni una definició. Només intentam identificar **quines coses podríem observar o mesurar sense haver d’arribar físicament a les zones profundes**.

Les perforacions no són l’única font d’informació. Algunes dades provenen de **materials que arriben fins a nosaltres**; d’altres, d’**efectes que podem mesurar des de la superfície**.

Al bloc següent veurem alguns exemples i ens centrarem en la font que més informació ha aportat sobre l’estructura profunda de la Terra: **les ones sísmiques**.

> **Per ampliar o repassar:** [Material guia · 2.1 · Mètodes directes i indirectes](../../../material/ud2/ud2/#21-metodes-directes-i-indirectes)

<!-- DOCENT: 30 s individual + 1 min en parella + posada en comú breu. No es recull cap resposta. -->

</section>

<section class="pv-seccio" markdown>

# 2 · Com obtenim informació de l’interior?

No totes les dades sobre l’interior terrestre s’obtenen de la mateixa manera.

De vegades podem estudiar **materials que procedeixen de l’interior**. En altres casos no obtenim el material mateix, sinó que **mesuram algun efecte produït per l’interior** i interpretam què significa.

## 2.1 · Materials que podem estudiar

Les **perforacions** i els **xenòlits** són exemples de **mètodes directes**.

En una perforació podem extreure roques i mesurar propietats dels materials que travessam, però només arribam a profunditats molt petites.

Un **xenòlit** és un fragment de roca que un magma ha arrencat durant el seu ascens i ha transportat cap a zones més superficials. Podem analitzar-ne directament els minerals, la composició i la textura.

<a class="pv-infografia-link" href="figures/estacio_xenolit.png" target="_blank" rel="noopener">
<img src="figures/estacio_xenolit.png" alt="Infografia sobre els xenòlits com a mostres de roca transportades cap a la superfície pel magma">
<span>Obre la infografia en gran ↗</span>
</a>

<p class="pv-nota-local"><strong>Infografia de consulta:</strong> no cal respondre les preguntes que hi apareixen. Observa sobretot què obtenim directament, què ens pot indicar la mostra i quines limitacions té.</p>

> **Important**  
> «Directe» no significa «perfecte». Tenim una mostra real, però encara hem d’interpretar d’on prové exactament i fins a quin punt representa la regió profunda.

## 2.2 · Quan només podem mesurar efectes

En altres casos no tenim cap mostra de la regió que volem estudiar.

Un **sismògraf**, per exemple, no observa el mantell ni el nucli. Registra el moviment del sòl provocat per l’arribada de les ones sísmiques.

A partir del comportament d’aquestes ones podem inferir propietats dels materials que han travessat. Això és un **mètode indirecte**.

<a class="pv-infografia-link" href="figures/estacio_registre_sismic.png" target="_blank" rel="noopener">
<img src="figures/estacio_registre_sismic.png" alt="Infografia sobre el registre sísmic com a mètode indirecte d'estudi de l'interior terrestre">
<span>Obre la infografia en gran ↗</span>
</a>

<p class="pv-nota-local"><strong>Infografia de consulta:</strong> no cal respondre les preguntes que hi apareixen. Fixa't especialment en la diferència entre allò que mesura el sismògraf i allò que inferim a partir del registre.</p>

> **Altres evidències indirectes**  
> També podem obtenir informació de l’interior estudiant la **gravetat**, el **flux de calor**, el **camp magnètic** o el comportament de minerals sotmesos a pressions i temperatures elevades.

## 2.3 · Una idea més important que els noms

> **Els models de l’interior terrestre no depenen d’una única prova.**  
> Són fiables perquè **evidències diferents i independents encaixen en una mateixa explicació**.

### Comparam dues fonts

<p class="pv-pregunta"><strong>Quina diferència fonamental hi ha entre la informació que ens proporciona un xenòlit i la que ens proporciona un sismògraf?</strong></p>

**Pensa-hi uns segons. Després comenta-ho amb la persona del costat i preparau una resposta oral breu.**

Quan ho posem en comú, ens fixarem sobretot en aquesta diferència:

<div class="pv-cadena">
<strong>material que podem estudiar</strong> → mètode directe<br>
<strong>efecte que podem mesurar</strong> → mètode indirecte
</div>

No cal memoritzar ara una llista de mètodes. El que ens interessa és entendre **quin tipus de dada obtenim i què podem inferir a partir d’ella**.

> **Per ampliar o repassar:** [Material guia · 2.1 · Mètodes directes i indirectes](../../../material/ud2/ud2/#21-metodes-directes-i-indirectes)

D’entre els mètodes indirectes, les **ones sísmiques** han aportat informació especialment detallada sobre l’estructura profunda de la Terra.

Per entendre què ens poden revelar, primer hem de saber **com es comporten les ones P i S**.

<!-- DOCENT: 8–10 min. 4–5 min d'explicació visual amb les dues infografies, 30 s individual + 1–2 min en parelles + 2–3 intervencions en veu alta. Formalitzar directe/indirecte al final. No es recull cap resposta ni es qualifica. -->

</section>

<section class="pv-seccio" markdown>

# 3 · Les ones com a font d’informació

Quan es produeix un terratrèmol, part de l’energia alliberada es propaga per l’interior de la Terra en forma d’**ones sísmiques**.

No podem veure directament per on passen, però podem registrar **quan arriben, com es propaguen i com canvien la velocitat o la trajectòria**. Aquests canvis ens donen informació sobre els materials que han travessat.

## 3.1 · Miram com es propaguen

Selecciona un tipus d’ona i observa **com es mouen les partícules del material respecte de la direcció de propagació**.

<div class="pv-ones-demo">
<input class="pv-ona-radio" type="radio" name="tipus-ona" id="pv-ona-p" checked>
<input class="pv-ona-radio" type="radio" name="tipus-ona" id="pv-ona-s">
<div class="pv-ona-controls" role="group" aria-label="Selecciona el tipus d'ona sísmica">
<label for="pv-ona-p">Ona P</label>
<label for="pv-ona-s">Ona S</label>
</div>
<div class="pv-ona-panells">
<div class="pv-ona-panell pv-panell-p" aria-label="Animació conceptual d'una ona P">
<div class="pv-particules pv-particules-p" aria-hidden="true">
<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
</div>
<div class="pv-direccio">direcció de propagació →</div>
<p><strong>Ona P · compressió</strong></p>
</div>
<div class="pv-ona-panell pv-panell-s" aria-label="Animació conceptual d'una ona S">
<div class="pv-particules pv-particules-s" aria-hidden="true">
<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
</div>
<div class="pv-direccio">direcció de propagació →</div>
<p><strong>Ona S · cisalla</strong></p>
</div>
</div>
</div>

<p class="pv-pregunta"><strong>Quina diferència observes entre el moviment de les partícules en una ona P i en una ona S?</strong></p>

<!-- DOCENT: Projectar l'animació. 30 s d'observació i comentaris espontanis. Formalitzar després, sense recollir resposta escrita. -->

Després de l’observació, podem resumir-ho així:

- **Ones P:** les partícules vibren en la mateixa direcció en què avança l’ona. Es propaguen per **sòlids i líquids**.
- **Ones S:** les partícules vibren perpendicularment a la direcció de propagació. Es propaguen pels **sòlids**, però **no pels líquids**.

> **Per ampliar o repassar:** [Material guia · 2.2 · Els terratrèmols ens permeten explorar l’interior](../../../material/ud2/ud2/#22-els-terratremols-ens-permeten-explorar-linterior)

## 3.2 · Una primera predicció

<p class="pv-pregunta"><strong>Una ona P entra en una regió profunda i continua propagant-se. Una ona S, en canvi, deixa de detectar-se després d’arribar-hi. Quina hipòtesi formularies sobre aquesta regió?</strong></p>

<div data-pv-quiz>
<div class="pv-opcions">
<button type="button" class="pv-opcio" data-feedback="p-solida" aria-pressed="false">A · És sòlida</button>
<button type="button" class="pv-opcio" data-feedback="p-liquida" aria-pressed="false">B · És líquida</button>
<button type="button" class="pv-opcio" data-feedback="p-cap" aria-pressed="false">C · No tenim cap informació</button>
</div>
<p class="pv-feedback" data-feedback-id="p-solida" hidden>No és la hipòtesi més compatible amb aquestes dades: les ones S sí que es poden propagar pels sòlids.</p>
<p class="pv-feedback" data-feedback-id="p-liquida" hidden><strong>És la hipòtesi més compatible.</strong> Les ones P poden travessar líquids, però les ones S no.</p>
<p class="pv-feedback" data-feedback-id="p-cap" hidden>Les dades sí que ens aporten informació: la desaparició de les ones S és una evidència rellevant sobre l’estat físic del material.</p>
</div>

<!-- DOCENT: Si es fa presencialment, abans de clicar es pot fer una votació A/B/C amb dits o targetes. Demanar: «quina dada justifica la resposta?». Introduir explícitament la cadena dada → inferència. -->

<div class="pv-cadena"><strong>dada observada</strong> → <strong>inferència sobre el material</strong></div>

## 3.3 · Quan l’ona canvia de direcció

Observa ara què pot passar quan una ona arriba al límit entre dos materials amb propietats diferents.

<a class="pv-infografia-link" href="../../../material/ud2/figures/00-01_sistema_i_interior/f03_ones_p_s_i_refraccio.png" target="_blank" rel="noopener">
<img src="../../../material/ud2/figures/00-01_sistema_i_interior/f03_ones_p_s_i_refraccio.png" alt="Comparació conceptual entre ones P i S i refracció quan una ona canvia de medi">
<span>Obre la figura en gran ↗</span>
</a>

Una ona que passa d’un material a un altre pot canviar de **velocitat** i de **direcció**. Aquest canvi de direcció s’anomena **refracció**.

Si detectam un canvi brusc en la velocitat o la trajectòria d’una ona, tenim una evidència que **han canviat les propietats del material que travessa**.

> **Discontinuïtat**  
> Una zona de l’interior terrestre on es produeix un canvi important en les propietats dels materials.

### Observació i inferència

<div class="pv-dos-passos">
<div><strong>OBSERVACIÓ</strong><br>L’ona canvia de velocitat o de direcció.</div>
<div><strong>INFERÈNCIA</strong><br>Ha travessat una frontera entre materials amb propietats diferents.</div>
</div>

> **Per ampliar o repassar:** [Material guia · 2.3 · Les ones canvien quan canvia el medi](../../../material/ud2/ud2/#23-les-ones-canvien-quan-canvia-el-medi)

<!-- DOCENT: 30–60 s d'observació silenciosa de la figura. Després distingir oralment què observam i què inferim. Escriure a la pissarra OBSERVACIÓ → INFERÈNCIA. -->

## 3.4 · Ara posa-ho junt

<div class="pv-repte">
<p><strong>Repte en parelles</strong></p>
<p>En una zona de l’interior terrestre s’observen aquestes dues dades:</p>
<ol>
<li>Les <strong>ones S deixen de detectar-se</strong>.</li>
<li>Les <strong>ones P canvien bruscament de velocitat i de trajectòria</strong>.</li>
</ol>
<p><strong>Explica què podem inferir sobre aquesta zona i indica quines dades sustenten la teva interpretació.</strong></p>
<p class="pv-nota-local">Per aquesta primera explicació pots utilitzar l’estructura: <strong>«Observam que... Això permet inferir que... perquè...»</strong></p>
</div>

<!-- DOCENT: 4–5 min en parelles. Llegir dues respostes i millorar-les col·lectivament. No es qualifica. -->

<details class="pv-contrast">
<summary>Si treballes a distància, contrasta el teu raonament</summary>
<p>Les ones S desapareixen, fet compatible amb una regió líquida. A més, el canvi brusc de velocitat i trajectòria de les ones P indica que hi ha una frontera entre materials amb propietats diferents. Les dues observacions, interpretades conjuntament, permeten formular un model sobre aquesta regió interna.</p>
</details>

## Final de la primera sessió

Ja sabem que les ones **responen als materials que travessen**.

Per tant, si estudiam les seves trajectòries a escala planetària, podem intentar reconstruir **com és l’interior terrestre**.

<p class="pv-pregunta"><strong>Què ens indiquen les trajectòries reals de les ones sísmiques?</strong></p>

Aquesta serà la pregunta de partida de la sessió següent.

<!-- DOCENT: El conjunt dels blocs 1–3 està pensat per ocupar aproximadament 40–45 minuts, deixant marge per transicions i participació oral. -->

</section>

<section class="pv-seccio" markdown>

# 4 · De les trajectòries a l’interior

Les ones sísmiques poden canviar de velocitat i de trajectòria quan canvien les propietats dels materials que travessen.

Per tant, **la trajectòria d’una ona conté informació sobre l’interior terrestre**.

## 4.1 · Primer, només observam

Mira la figura durant aproximadament un minut. **No intentis explicar-la encara.** Fixa’t només en què fan les diferents trajectòries.

<a class="pv-infografia-link" href="figures/a01_fig04_trajectories_sismiques.png" target="_blank" rel="noopener">
<img src="figures/a01_fig04_trajectories_sismiques.png" alt="Esquema conceptual de trajectòries sísmiques que arriben als punts A, B, C i D">
<span>Obre la figura en gran ↗</span>
</a>

<p class="pv-pregunta"><strong>Què hi observes?</strong></p>

<!-- DOCENT: 1 min de silenci. Recollir oralment observacions sense interpretar-les. Si apareix una conclusió («hi ha una capa líquida»), demanar: «això ho veus a la figura o ho estàs inferint?». -->

<div class="pv-cadena"><strong>OBSERVACIÓ</strong> ≠ <strong>INTERPRETACIÓ</strong></div>

## 4.2 · Quines trajectòries són diferents?

<div class="pv-repte">
<p><strong>En parelles</strong></p>
<p>Compareu les trajectòries que arriben als punts <strong>A, B, C i D</strong>.</p>
<p>Identificau <strong>dues diferències que es puguin observar directament a la figura</strong>.</p>
</div>

No cal escriure una explicació llarga. L’objectiu d’aquesta passa és aprendre a **descriure la representació abans d’interpretar-la**.

<!-- DOCENT: 2–3 min en parelles + 4–5 min de posada en comú. Exemples d'observacions vàlides: una trajectòria es corba, una altra canvia de direcció en una frontera, algunes no travessen la mateixa regió. Evitar posar noms de capes encara. -->

## 4.3 · Ara sí: què podem inferir?

<p class="pv-pregunta"><strong>Quina hipòtesi sobre l’interior terrestre podria explicar aquestes diferències entre les trajectòries?</strong></p>

No cercam encara els noms de les capes. Cercam **la inferència mínima que les dades permeten justificar**.

> **Inferència provisional**  
> Si les trajectòries canvien de manera sistemàtica, l’interior terrestre **no pot ser homogeni**. Hi ha regions o fronteres internes amb propietats diferents.

<div class="pv-cadena"><strong>trajectòria observada</strong> → <strong>canvi de propietats</strong> → <strong>frontera o regió interna</strong></div>

## 4.4 · Construïm el model més senzill possible

<div class="pv-repte">
<p><strong>Repte en parelles</strong></p>
<p>Dibuixau un cercle que representi la Terra i construïu <strong>el model més senzill de l’interior que pugui explicar les trajectòries observades</strong>.</p>
<p>No heu de reproduir el model del llibre. Representau només les regions o fronteres que considereu que podeu <strong>justificar amb les evidències disponibles</strong>.</p>
</div>

Feis el dibuix **al quadern, en una pissarreta o damunt un full**. La web no necessita un editor de dibuix: el que importa és poder explicar per què heu situat cada frontera.

### Quan posem els models en comú

Ens farem tres preguntes:

1. **Quina dada justifica cada frontera que heu dibuixat?**
2. **Podríem explicar les observacions amb menys regions?**
3. **Què és dada i què és una decisió del nostre model?**

<!-- DOCENT: 5–7 min de construcció + uns 5 min de contrast col·lectiu. Projectar un cercle buit i reconstruir un model comú a partir de les justificacions de l'alumnat. -->

## 4.5 · De la dada al model

<div class="pv-dos-passos">
<div><strong>DADA</strong><br>Les ones segueixen trajectòries diferents, canvien de velocitat o no arriben a determinades zones.</div>
<div><strong>INFERÈNCIA</strong><br>Els materials que travessen no tenen les mateixes propietats.</div>
</div>

<div class="pv-cadena"><strong>DADA</strong> → <strong>INFERÈNCIA</strong> → <strong>MODEL</strong></div>

> **Model**  
> Representam l’interior terrestre mitjançant regions separades per fronteres perquè aquesta representació permet explicar les observacions disponibles.

> **Per ampliar o repassar:** [Material guia · 2.3 · Les ones canvien quan canvia el medi](../../../material/ud2/ud2/#23-les-ones-canvien-quan-canvia-el-medi) · [2.4 · Les zones d’ombra](../../../material/ud2/ud2/#24-les-zones-dombra-una-evidencia-dun-nucli-diferent-del-mantell)

<!-- DOCENT: Bloc 4: aproximadament 25–30 min. No introduir encara formalment els models geoquímic i geodinàmic. El bloc 5 començarà contrastant el model construït per l'alumnat amb els models geològics actuals. -->

</section>

<section class="pv-seccio" markdown>

# 5 · Comparam el nostre model amb el model científic

Al bloc anterior hem intentat explicar les trajectòries de les ones construint **el model més senzill possible**.

Ara podem comparar aquella proposta amb el model que utilitza actualment la geologia.

## 5.1 · Què havíem aconseguit inferir?

Recupera el model que heu construït en parelles.

<p class="pv-pregunta"><strong>Quines dues idees principals intentava explicar?</strong></p>

No cal una resposta escrita llarga. Recuperarem oralment les idees que havíem justificat amb les dades: que l’interior **no és homogeni**, que hi ha **regions amb propietats diferents** i que les fronteres internes poden modificar el comportament de les ones.

<!-- DOCENT: 2–3 min. Recuperació oral del model propi abans de mostrar el model científic. -->

### Contrast visual

Observa ara una representació de com es propaguen les ones P i S a través d’un interior estructurat en regions.

<a class="pv-infografia-link" href="figures/geo04_04_ones_p_s_interior.png" target="_blank" rel="noopener">
<img src="figures/geo04_04_ones_p_s_interior.png" alt="Esquema de propagació de les ones P i S a través de diferents regions de l'interior terrestre">
<span>Obre la figura en gran ↗</span>
</a>

<p class="pv-pregunta"><strong>En què s’assembla aquesta representació al model que havíeu proposat?</strong></p>

**1 minut individual → 2 minuts en parelles → posada en comú breu.**

No cercam encara noms de capes: ens interessa comprovar si el nostre model intentava explicar **les mateixes observacions**.

## 5.2 · Què aporta aquesta representació?

Les trajectòries de les ones no són rectes perquè la velocitat de propagació **canvia amb la profunditat**.

Quan les ones arriben a fronteres entre materials amb propietats diferents, poden **refractar-se**. El comportament diferent de les ones P i S permet identificar regions internes i inferir-ne algunes propietats.

<div class="pv-cadena"><strong>observacions sísmiques</strong> → <strong>inferències</strong> → <strong>model de l’interior</strong></div>

No necessitam memoritzar les trajectòries exactes de la figura. El que interessa és entendre **per què aquestes trajectòries constitueixen evidències sobre l’estructura interna**.

## 5.3 · Posam nom a les regions

Ara podem formalitzar el model.

<a class="pv-infografia-link" href="figures/geo04_08_model_interior_terra.png" target="_blank" rel="noopener">
<img src="figures/geo04_08_model_interior_terra.png" alt="Model de l'estructura interna de la Terra amb les principals regions i discontinuïtats">
<span>Obre la figura en gran ↗</span>
</a>

A partir de moltes dades sísmiques i d’altres evidències, podem distingir grans regions segons la seva **composició**:

- **escorça**;
- **mantell**;
- **nucli extern**;
- **nucli intern**.

Les principals fronteres sísmiques són:

- **discontinuïtat de Mohorovičić (Moho)** → separa l’escorça del mantell;
- **discontinuïtat de Gutenberg** → separa el mantell del nucli extern;
- **discontinuïtat de Lehmann** → separa el nucli extern del nucli intern.

> **Dues precisions importants**  
> El **mantell és majoritàriament sòlid**, encara que es pugui deformar molt lentament a escala geològica. El **nucli extern és líquid** i el **nucli intern és sòlid**.

<!-- DOCENT: 5–7 min d'explicació amb la figura projectada. No fer copiar definicions. Relacionar cada regió amb les evidències treballades abans. -->

## 5.4 · Dos models per descriure la mateixa Terra

La Terra es pot dividir de maneres diferents segons **quina propietat ens interessa descriure**.

### Model geoquímic

Es basa sobretot en la **composició** dels materials:

<div class="pv-cadena"><strong>escorça</strong> → <strong>mantell</strong> → <strong>nucli</strong></div>

### Model geodinàmic

Es basa sobretot en el **comportament mecànic** dels materials:

<div class="pv-cadena"><strong>litosfera</strong> → <strong>astenosfera</strong> → <strong>mantell inferior</strong> → <strong>nucli extern</strong> → <strong>nucli intern</strong></div>

> **No són dos models rivals.**  
> Descriuen la mateixa Terra fixant-se en propietats diferents.

<p class="pv-pregunta"><strong>Per què l’escorça i la litosfera no són sinònims?</strong></p>

Aquesta pregunta la discutirem oralment. No cal convertir-la en una definició per memoritzar.

> **Per ampliar o repassar:** [Material guia · Models de l’interior terrestre](../../../material/ud2/ud2/)

<!-- DOCENT: 5–6 min. Si es disposa d'una figura comparativa geoquímic/geodinàmic, projectar-la aquí. L'objectiu és evitar la confusió escorça = litosfera. -->

## 5.5 · Tornam a les dades

Ara que coneixem el model, tornem a la pregunta científica que el sustenta.

<p class="pv-pregunta"><strong>Quina evidència sísmica és compatible amb un nucli extern líquid?</strong></p>

Recorda que:

- les **ones S no travessen líquids**;
- les **ones P sí que poden travessar-los**, però poden canviar de velocitat i de trajectòria.

Després plantejarem una segona pregunta:

<p class="pv-pregunta"><strong>Què esperaríem observar si el nucli extern fos sòlid?</strong></p>

No cercam només recordar una dada. Volem comprovar si el model ens permet **fer una predicció**.

<!-- DOCENT: 4–5 min. Discussió oral o en parelles. Fer explícita la relació model → predicció. -->

## 5.6 · Síntesi

> **Idea clau**  
> Les capes internes de la Terra no són una classificació arbitrària. Les distingim perquè **diverses dades indiquen canvis en les propietats dels materials amb la profunditat**.

<div class="pv-cadena"><strong>dades</strong> → <strong>inferència</strong> → <strong>model</strong> → <strong>prediccions</strong></div>

Al bloc següent hauràs d’interpretar **unes dades noves sense que el model ja estigui dibuixat**.

<!-- DOCENT: Bloc 5: 25–29 min aproximadament. Si la discussió del bloc 4 s'allarga, es pot començar 5.1–5.3 al final de la sessió 2 i reprendre 5.4–5.6 a l'inici de la sessió 3. -->

</section>

</div>
