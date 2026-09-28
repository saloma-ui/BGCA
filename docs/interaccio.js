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

    if (!rang || !numero || !comprova || !sortida || !resultat) return;

    const limita = (valor) => Math.max(0, Math.min(6371, Number.isFinite(valor) ? valor : 0));

    const pinta = (valor, origen) => {
      const v = limita(valor);
      const teValor = v > 0;

      if (origen !== "rang") rang.value = String(Math.round(v));
      if (origen !== "numero") numero.value = teValor ? String(Math.round(v)) : "";

      comprova.disabled = !teValor;
      sortida.textContent = teValor
        ? `La teva estimació: ${Math.round(v).toLocaleString("ca-ES")} km`
        : "Fes una estimació";

      if (linia && punt) {
        const y = 28 + (132 * v / 6371);
        linia.setAttribute("y2", String(y));
        punt.setAttribute("cy", String(y));
      }

      if (validacio) validacio.textContent = "";
    };

    rang.addEventListener("input", () => {
      pinta(Number(rang.value), "rang");
      numero.value = rang.value === "0" ? "" : rang.value;
    });

    numero.addEventListener("input", () => {
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
      if (!(estimacio > 0)) return;

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

      resultat.hidden = false;
      resultat.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "nearest"
      });
    });

    pinta(0, "rang");
  });
}

if (typeof document$ !== "undefined") {
  document$.subscribe(inicialitzaInteraccionsPresentacio);
} else if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", inicialitzaInteraccionsPresentacio);
} else {
  inicialitzaInteraccionsPresentacio();
}
