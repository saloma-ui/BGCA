# A03 · Posam edat al registre

**UD01 · Com reconstruïm la història de la Terra?**  
**Durada:** 3 sessions  
**Nucli:** datació radiomètrica i integració amb la datació relativa

**Pregunta guia:** Com podem passar de saber que un esdeveniment és anterior o posterior a assignar-li una edat numèrica?

---

## 1 · El rellotge isotòpic

A A02 hem ordenat esdeveniments aplicant principis de datació relativa. Ara afegirem un nou tipus d'evidència: alguns minerals contenen isòtops radioactius que poden funcionar com a **rellotges geològics**.

Un **isòtop radioactiu pare** es transforma espontàniament en un **producte fill**. La desintegració d'un nucli individual és imprevisible, però el comportament d'un nombre molt gran d'àtoms segueix una regularitat quantitativa.

- **Isòtop pare:** isòtop radioactiu inicial que es va desintegrant.
- **Producte fill:** producte que es forma a mesura que es desintegra l'isòtop pare.
- **Semivida:** temps necessari perquè quedi la meitat de l'isòtop pare que hi havia al començament de l'interval.

### 1.1. Completa el model

| Semivides transcorregudes | Fracció d'isòtop pare | % d'isòtop pare |
|---:|---:|---:|
| 0 | 1 | 100 % |
| 1 |  |  |
| 2 |  |  |
| 3 |  |  |
| 4 |  |  |

### 1.2. Primer repte

Tres minerals contenen el mateix isòtop radioactiu. En A queda el **50 %** de l'isòtop pare; en B, el **25 %**; i en C, el **12,5 %**.

**a)** Ordena els tres minerals de més antic a més recent i justifica-ho.  
**b)** Quina dada ens falta per transformar aquest ordre en edats numèriques?

---

## 2 · Llegim la semivida

**Idea clau.** La semivida no significa que cada àtom es desintegri exactament al cap d'aquest temps. És una regularitat estadística del conjunt: després d'una semivida queda aproximadament la meitat dels àtoms pare inicials.

### 2.1. Interpreta la corba

![Corba de desintegració radioactiva](figures/f02_01_corba_semivida.svg)

**a)** Després de 2 semivides, quina fracció i quin percentatge d'isòtop pare queda?  
**b)** Si queda un 12,5 %, quantes semivides han transcorregut?

### 2.2. Calculam quan el nombre de semivides és exacte

1. Un isòtop té una semivida de **500 Ma**. En un mineral queda el **25 %** de l'isòtop pare. Quina edat indica el rellotge?
2. Un altre isòtop té una semivida de **80 Ma**. En queda el **12,5 %**. Quina edat indica?
3. Han transcorregut **4 semivides** d'un isòtop amb semivida de **150 Ma**. Calcula l'edat i el percentatge d'isòtop pare que queda.
4. Un mineral té **1.200 Ma** i conté un isòtop amb semivida de **400 Ma**. Quina fracció de l'isòtop pare inicial hauria de quedar si el sistema s'ha mantengut tancat?

---

## 3 · Quan la proporció no és exacta

Quan la fracció d'isòtop pare és 1/2, 1/4, 1/8... podem comptar semivides directament. Però si, per exemple, queda un **35 %**, necessitam expressar el mateix model matemàticament.

$$
\frac{N}{N_0}=\left(\frac12\right)^{t/T_{1/2}}
$$

Per calcular directament el temps:

$$
t=T_{1/2}\frac{\ln(N/N_0)}{\ln(1/2)}
$$

**Important:** el percentatge s'ha d'escriure com a fracció decimal. Per exemple, 35 % = 0,35.

### 3.1. Problema guiat

Un isòtop té una semivida de **600 Ma**. En un mineral queda el **35 %** de la quantitat inicial d'isòtop pare. Quina edat indica el rellotge isotòpic?

1. Identifica les dades.
2. Substitueix a l'expressió.
3. Calcula el resultat amb unitats.
4. Escriu una frase que interpreti el resultat.

### 3.2. Abans de confiar en la calculadora

Si queda entre el **50 %** i el **25 %**, han transcorregut entre **1 i 2 semivides**. Per tant, el resultat ha de caure entre aquests dos temps.

**a)** Semivida = **500 Ma**; queda el **40 %**. Sense calcular exactament, entre quines dues edats ha d'estar el resultat?  
**b)** Un alumne obté **1.850 Ma** en el cas anterior. Pot ser correcte? Explica-ho sense repetir tot el càlcul.

### 3.3. Practica amb proporcions no exactes

| Cas | Semivida | Pare restant | Estimació prèvia | Edat calculada |
|---|---:|---:|---|---|
| A | 300 Ma | 42 % |  |  |
| B | 800 Ma | 30 % |  |  |
| C | 125 Ma | 70 % |  |  |

---

## 4 · Problemes de datació radiomètrica

**Procediment recomanat:** identifica les dades → estima l'interval probable → calcula → escriu les unitats → comprova si el resultat té sentit.

### 4.1. Un mineral conté un isòtop amb semivida de **240 Ma**. Actualment queda el **12,5 %** de l'isòtop pare inicial. Calcula l'edat que indica el sistema isotòpic.

### 4.2. En un altre mineral queda el **28 %** de l'isòtop pare. La semivida és de **700 Ma**. Calcula l'edat aproximada i indica entre quantes semivides es troba.

### 4.3. Un mineral té una edat radiomètrica de **900 Ma**. L'isòtop utilitzat té una semivida de **300 Ma**. Quina fracció i quin percentatge de l'isòtop pare inicial haurien de quedar?

### 4.4. Compara dos minerals datats amb isòtops diferents:

| Mineral | Semivida de l'isòtop | Pare restant | Edat |
|---|---:|---:|---:|
| M1 | 200 Ma | 25 % |  |
| M2 | 500 Ma | 50 % |  |

Quin és més antic? Per què **no** podem comparar-ne l'edat mirant només quin percentatge d'isòtop pare queda?

---

## 5 · Una data no parla tota sola

**Una edat radiomètrica només és geològicament útil si sabem què s'ha datat i quin esdeveniment representa.**

### 5.1. Què podem afirmar?

**Cas A · Granit**  
Un mineral que va cristal·litzar amb un magma dona una edat de **310 Ma**. Quin procés pot representar aquesta edat?

**Cas B · Gres**  
Un zircó detrític contingut dins un gres dona una edat de **850 Ma**. Podem afirmar que el gres es va sedimentar fa 850 Ma? Per què?

**Cas C · Sistema alterat**  
Després de formar-se, un mineral ha guanyat o perdut part dels isòtops utilitzats en la datació. Podem interpretar directament l'edat calculada? Justifica-ho.

**Cas D · Intrusió**  
Una intrusió magmàtica datada en **180 Ma** talla tres estrats sedimentaris. Què podem afirmar sobre l'edat dels estrats?

### 5.2. Acotam una edat

Un estrat sedimentari **S** es troba entre dues capes volcàniques datades:

- V2 · **245 Ma**
- S · estrat sedimentari
- V1 · **290 Ma**

**a)** Entre quines edats es va haver de formar S?  
**b)** Podem afirmar que S té 267,5 Ma perquè és el punt mitjà? Explica-ho.

**Recorda:** una datació pot donar una edat per al material analitzat, però altres esdeveniments només es poden situar **abans**, **després** o **dins un interval**. No hem d'afirmar més del que permeten les evidències.

---

## 6 · Tancament individual · CA 6.2

> **Evidència d’avaluació · CA 6.2**  
> Aquest tancament es resol **individualment** i genera evidència de **CA 6.2**, perquè l’alumnat ha de calcular una edat radiomètrica, acotar temporalment un estrat combinant datació absoluta i relativa, interpretar una edat en un gra detrític i distingir entre allò que les evidències permeten afirmar i allò que no es pot determinar.  
> La resta de l’activitat té funció principalment **formativa i de construcció del criteri**.

**CA 6.2.** Resoldre problemes de datació analitzant elements del registre geològic i aplicant mètodes de datació.

Fes aquesta part individualment. Mostra els càlculs, escriu les unitats i diferencia allò que les evidències permeten afirmar d'allò que no podem determinar.

En una successió geològica, la capa volcànica inferior **V1** conté un mineral en què queda el **37 %** de l'isòtop pare. La semivida d'aquest isòtop és de **180 Ma**. Per damunt hi ha un estrat sedimentari **S** i, sobre aquest, una capa volcànica **V2** datada independentment en **220 Ma**.

Dins S s'ha trobat, a més, un **gra detrític** datat en **760 Ma**.

**a)** Calcula l'edat aproximada de V1. Mostra el procediment.  
**b)** A partir de V1 i V2, acota l'edat de sedimentació de S. Escriu l'interval i justifica'l.  
**c)** Explica per què els **760 Ma** del gra detrític no són l'edat de sedimentació de S.  
**d)** Escriu una conclusió de 2-3 frases: **què podem afirmar** sobre la cronologia del registre i **què no podem determinar** amb les dades disponibles?

### Auto-comprovació

- [ ] He escrit les unitats.
- [ ] He justificat l'interval de S.
- [ ] He diferenciat gra i sedimentació.
- [ ] He indicat què no podem saber.
