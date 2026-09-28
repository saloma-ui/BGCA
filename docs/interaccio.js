const PV_A01_UD02_STORAGE_KEY = "bgca:a01_ud02:v1";

function pvA01LlegeixEstat() {
  try {
    const raw = localStorage.getItem(PV_A01_UD02_STORAGE_KEY);
    const estat = raw ? JSON.parse(raw) : {};
    if (!estat.hipotesis) estat.hipotesis = {};
    if (!estat.estacions) estat.estacions = {};
    return estat;
  } catch (error) {
    return { hipotesis: {}, estacions: {} };
  }
}

function pvA01DesaEstat(estat) {
  try {
    localStorage.setItem(PV_A01_UD02_STORAGE_KEY, JSON.stringify(estat));
    return true;
  } catch (error) {
    return false;
  }
}

function pvA01ActualitzaResum() {
  const estat = pvA01LlegeixEstat();
  const ids = ["perforacio", "xenolit", "registre"];
  const completades = ids.filter((id) => estat.estacions[id]?.complet).length;

  document.querySelectorAll("[data-pv-stations-count]").forEach((node) => {
    node.textContent = `${completades} de 3 estacions completades`;
  });

  document.querySelectorAll("[data-pv-stations-bar]").forEach((node) => {
    node.style.width = `${(completades / 3) * 100}%`;
  });

  document.querySelectorAll("[data-pv-summary]").forEach((cell) => {
    const [id, camp] = cell.dataset.pvSummary.split(".");
    const valor = estat.estacions[id]?.[camp]?.trim();
    cell.textContent = valor || "—";
  });

  document.querySelectorAll("[data-pv-summary-status]").forEach((node) => {
    if (completades === 3) {
      node.textContent = "Has completat les tres estacions. Ara ja pots comparar les fonts d’informació.";
      node.classList.add("pv-desa");
    } else {
      node.textContent = `Completa i desa les tres estacions per tenir la síntesi sencera (${completades}/3).`;
      node.classList.remove("pv-desa");
    }
  });
}

function inicialitzaInteraccionsPresentacio() {
  document.querySelectorAll("[data-pv-quiz]").forEach((quiz) => {
    if (quiz.dataset.pvReady === "true") return;
    quiz.dataset.pvReady = "true";

    const opcions = quiz.querySelectorAll(".pv-opcio");
    const feedbacks = quiz.querySelectorAll(".pv-feedback");

    opcions.forEach((boto) => {
      boto.addEventListener("click", () => {
        opcions.forEach((opcio) => {
          const seleccionada = opcio === boto;
          opcio.classList.toggle("pv-seleccionada", seleccionada);
          opcio.setAttribute("aria-pressed", seleccionada ? "true" : "false");
        });

        feedbacks.forEach((feedback) => {
          feedback.hidden = feedback.dataset.feedbackId !== boto.dataset.feedback;
        });
      });
    });
  });

  document.querySelectorAll("[data-pv-classificacio]").forEach((bloc) => {
    if (bloc.dataset.pvReady === "true") return;
    bloc.dataset.pvReady = "true";

    bloc.querySelectorAll(".pv-terme").forEach((boto) => {
      boto.setAttribute("aria-expanded", "false");

      boto.addEventListener("click", () => {
        if (boto.dataset.pvResolved === "true") return;

        const etiqueta = document.createElement("span");
        etiqueta.className = "pv-etiqueta";
        etiqueta.textContent = boto.dataset.resposta;
        boto.appendChild(etiqueta);
        boto.dataset.pvResolved = "true";
        boto.setAttribute("aria-expanded", "true");
      });
    });
  });

  document.querySelectorAll("[data-pv-profunditat]").forEach((bloc) => {
    if (bloc.dataset.pvReady === "true") return;
    bloc.dataset.pvReady = "true";

    const rang = bloc.querySelector("[data-pv-depth-range]");
    const numero = bloc.querySelector("[data-pv-depth-number]");
    const comprova = bloc.querySelector("[data-pv-depth-check]");
    const sortida = bloc.querySelector("[data-pv-depth-output]");
    const validacio = bloc.querySelector("[data-pv-depth-validation]");
    const resultat = bloc.querySelector("[data-pv-depth-result]");
    const comparacio = bloc.querySelector("[data-pv-depth-comparison]");
    const linia = bloc.querySelector("[data-pv-depth-line]");
    const punt = bloc.querySelector("[data-pv-depth-dot]");
    const visual = bloc.querySelector(".pv-profunditat-visual");
    const svg = visual?.querySelector("svg");

    if (!rang || !numero || !comprova || !sortida || !resultat || !linia || !punt || !svg) return;

    let bloquejat = false;
    let arrossegant = false;

    punt.setAttribute("r", "11");
    punt.setAttribute("tabindex", "0");
    punt.setAttribute("role", "slider");
    punt.setAttribute("aria-valuemin", "0");
    punt.setAttribute("aria-valuemax", "6371");
    punt.setAttribute("aria-label", "Profunditat estimada");

    const limita = (valor) => Math.max(0, Math.min(6371, Number.isFinite(valor) ? valor : 0));

    const pinta = (valor, origen) => {
      const v = limita(valor);
      const teValor = v > 0;

      if (origen !== "rang") rang.value = String(Math.round(v));
      if (origen !== "numero") numero.value = teValor ? String(Math.round(v)) : "";

      comprova.disabled = !teValor || bloquejat;
      sortida.textContent = teValor ? `${Math.round(v).toLocaleString("ca-ES")} km` : "";
      sortida.setAttribute("x", "160");
      punt.setAttribute("aria-valuenow", String(Math.round(v)));
      punt.setAttribute("aria-valuetext", `${Math.round(v).toLocaleString("ca-ES")} quilòmetres`);

      const y = 28 + (132 * v / 6371);
      linia.setAttribute("y2", String(y));
      punt.setAttribute("cy", String(y));

      if (validacio) validacio.textContent = "";
    };

    const valorDesDePointer = (event) => {
      const rect = svg.getBoundingClientRect();
      if (!rect.height) return 0;
      const ySvg = ((event.clientY - rect.top) / rect.height) * 320;
      const yLimitat = Math.max(28, Math.min(160, ySvg));
      return ((yLimitat - 28) / 132) * 6371;
    };

    const mouDesDePointer = (event) => {
      if (bloquejat) return;
      pinta(valorDesDePointer(event), "drag");
    };

    punt.addEventListener("pointerdown", (event) => {
      if (bloquejat) return;
      arrossegant = true;
      visual?.classList.add("pv-arrossegant");
      punt.setPointerCapture?.(event.pointerId);
      mouDesDePointer(event);
      event.preventDefault();
    });

    punt.addEventListener("pointermove", (event) => {
      if (!arrossegant || bloquejat) return;
      mouDesDePointer(event);
    });

    const acabaArrossegament = (event) => {
      if (!arrossegant) return;
      arrossegant = false;
      visual?.classList.remove("pv-arrossegant");
      if (punt.hasPointerCapture?.(event.pointerId)) punt.releasePointerCapture(event.pointerId);
    };

    punt.addEventListener("pointerup", acabaArrossegament);
    punt.addEventListener("pointercancel", acabaArrossegament);

    punt.addEventListener("keydown", (event) => {
      if (bloquejat) return;
      const actual = Number(numero.value || rang.value || 0);
      let nou = actual;
      if (event.key === "ArrowDown" || event.key === "ArrowRight") nou += 100;
      else if (event.key === "ArrowUp" || event.key === "ArrowLeft") nou -= 100;
      else if (event.key === "Home") nou = 0;
      else if (event.key === "End") nou = 6371;
      else return;
      event.preventDefault();
      pinta(nou, "teclat");
    });

    rang.addEventListener("input", () => {
      if (bloquejat) return;
      pinta(Number(rang.value), "rang");
      numero.value = rang.value === "0" ? "" : rang.value;
    });

    numero.addEventListener("input", () => {
      if (bloquejat) return;
      if (numero.value === "") {
        pinta(0, "numero");
        rang.value = "0";
        return;
      }

      const v = Number(numero.value);
      if (!Number.isFinite(v) || v < 0 || v > 6371) {
        if (validacio) validacio.textContent = "Introdueix un valor entre 0 i 6.371 km.";
        comprova.disabled = true;
        return;
      }

      pinta(v, "numero");
      rang.value = String(Math.round(v));
    });

    comprova.addEventListener("click", () => {
      const estimacio = limita(Number(numero.value || rang.value));
      if (!(estimacio > 0) || bloquejat) return;

      bloquejat = true;
      bloc.classList.add("pv-revelat");
      numero.disabled = true;
      rang.disabled = true;
      comprova.disabled = true;

      const diferencia = Math.abs(estimacio - 12.3);
      const factor = estimacio / 12.3;

      if (comparacio) {
        if (diferencia < 5) {
          comparacio.textContent = `La teva estimació (${estimacio.toLocaleString("ca-ES")} km) era molt propera als 12,3 km de Kola.`;
        } else if (estimacio > 12.3) {
          const decimals = factor < 10 ? 1 : 0;
          comparacio.textContent = `La teva estimació era aproximadament ${factor.toFixed(decimals).replace(".", ",")} vegades més profunda que la perforació de Kola.`;
        } else {
          comparacio.textContent = `La teva estimació era inferior als 12,3 km assolits a Kola.`;
        }
      }

      if (!resultat.querySelector(".pv-zoom-kola")) {
        const zoom = document.createElement("div");
        zoom.className = "pv-zoom-kola";
        zoom.innerHTML = `
          <strong>Ampliam només els primers 15 km</strong>
          <div class="pv-zoom-escala" aria-label="Escala dels primers quinze quilòmetres">
            <span class="pv-zoom-zero">0 km · superfície</span>
            <span class="pv-zoom-kola-marca">Kola · 12,3 km</span>
            <span class="pv-zoom-quinze">15 km</span>
          </div>`;
        resultat.appendChild(zoom);
      }

      resultat.hidden = false;
      resultat.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "nearest"
      });
    });

    pinta(0, "rang");
  });

  document.querySelectorAll("[data-pv-hipotesis]").forEach((bloc) => {
    if (bloc.dataset.pvReady === "true") return;
    bloc.dataset.pvReady = "true";

    const h1 = bloc.querySelector('[data-pv-hyp="1"]');
    const h2 = bloc.querySelector('[data-pv-hyp="2"]');
    const desa = bloc.querySelector("[data-pv-hyp-save]");
    const estatNode = bloc.querySelector("[data-pv-hyp-status]");
    if (!h1 || !h2 || !desa || !estatNode) return;

    const estat = pvA01LlegeixEstat();
    h1.value = estat.hipotesis?.h1 || "";
    h2.value = estat.hipotesis?.h2 || "";
    if (h1.value && h2.value) {
      estatNode.textContent = "Hipòtesis recuperades d’aquest dispositiu.";
      estatNode.classList.add("pv-desa");
    }

    desa.addEventListener("click", () => {
      const v1 = h1.value.trim();
      const v2 = h2.value.trim();
      estatNode.classList.remove("pv-error", "pv-desa");

      if (!v1 || !v2) {
        estatNode.textContent = "Escriu dues possibilitats abans de desar.";
        estatNode.classList.add("pv-error");
        return;
      }

      const nouEstat = pvA01LlegeixEstat();
      nouEstat.hipotesis = { h1: v1, h2: v2 };
      const ok = pvA01DesaEstat(nouEstat);
      estatNode.textContent = ok
        ? "Hipòtesis desades en aquest dispositiu. Les recuperarem més endavant."
        : "No s’han pogut desar al navegador. Mantén aquesta pàgina oberta o copia les respostes.";
      estatNode.classList.add(ok ? "pv-desa" : "pv-error");
    });
  });

  document.querySelectorAll("[data-pv-station]").forEach((bloc) => {
    if (bloc.dataset.pvReady === "true") return;
    bloc.dataset.pvReady = "true";

    const id = bloc.dataset.pvStation;
    const inputs = {
      directe: bloc.querySelector('[data-pv-station-answer="directe"]'),
      inferencia: bloc.querySelector('[data-pv-station-answer="inferencia"]'),
      clau: bloc.querySelector('[data-pv-station-answer="clau"]')
    };
    const desa = bloc.querySelector("[data-pv-station-save]");
    const estatNode = bloc.querySelector("[data-pv-station-status]");
    const seguent = bloc.querySelector("[data-pv-station-next]");

    if (!id || !inputs.directe || !inputs.inferencia || !inputs.clau || !desa || !estatNode) return;

    const estat = pvA01LlegeixEstat();
    const desada = estat.estacions?.[id];
    if (desada) {
      inputs.directe.value = desada.directe || "";
      inputs.inferencia.value = desada.inferencia || "";
      inputs.clau.value = desada.clau || "";
      if (desada.complet) {
        estatNode.textContent = "Estació recuperada d’aquest dispositiu.";
        estatNode.classList.add("pv-desa");
        if (seguent) seguent.hidden = false;
      }
    }

    desa.addEventListener("click", () => {
      const resposta = {
        directe: inputs.directe.value.trim(),
        inferencia: inputs.inferencia.value.trim(),
        clau: inputs.clau.value.trim()
      };
      estatNode.classList.remove("pv-error", "pv-desa");

      if (!resposta.directe || !resposta.inferencia || !resposta.clau) {
        estatNode.textContent = "Respon les tres preguntes abans de continuar.";
        estatNode.classList.add("pv-error");
        return;
      }

      const nouEstat = pvA01LlegeixEstat();
      nouEstat.estacions[id] = { ...resposta, complet: true };
      const ok = pvA01DesaEstat(nouEstat);

      estatNode.textContent = ok
        ? "Estació desada. Pots continuar."
        : "No s’ha pogut desar al navegador. Mantén aquesta pàgina oberta o copia les respostes.";
      estatNode.classList.add(ok ? "pv-desa" : "pv-error");
      if (ok && seguent) seguent.hidden = false;
      pvA01ActualitzaResum();
    });
  });

  pvA01ActualitzaResum();
}

if (typeof document$ !== "undefined") {
  document$.subscribe(inicialitzaInteraccionsPresentacio);
} else if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", inicialitzaInteraccionsPresentacio);
} else {
  inicialitzaInteraccionsPresentacio();
}
