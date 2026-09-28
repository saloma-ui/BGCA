(() => {
  const STORAGE_KEY = "bgca:a01_ud02:v1";

  function llegeixEstat() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") || {};
    } catch (error) {
      return {};
    }
  }

  function desaEstat(estat) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(estat));
      return true;
    } catch (error) {
      return false;
    }
  }

  function inicialitzaClassificacioFonts() {
    document.querySelectorAll("[data-pv-fonts-classification]").forEach((bloc) => {
      if (bloc.dataset.pvReady === "true") return;
      bloc.dataset.pvReady = "true";

      const cards = [...bloc.querySelectorAll("[data-pv-font]")];
      const criteri = bloc.querySelector("[data-pv-classify-criterion]");
      const comprova = bloc.querySelector("[data-pv-classify-check]");
      const estatNode = bloc.querySelector("[data-pv-classify-status]");
      const revela = bloc.querySelector("[data-pv-classify-reveal]");

      if (!cards.length || !criteri || !comprova || !estatNode || !revela) return;

      const seleccio = {};

      function pintaSeleccio() {
        cards.forEach((card) => {
          const id = card.dataset.pvFont;
          const grup = seleccio[id];
          card.dataset.pvSelectedGroup = grup || "";
          card.querySelectorAll("[data-pv-group]").forEach((boto) => {
            const actiu = boto.dataset.pvGroup === grup;
            boto.setAttribute("aria-pressed", actiu ? "true" : "false");
            boto.classList.toggle("pv-grup-actiu", actiu);
          });
        });
      }

      function agrupacioCorrecta() {
        return Boolean(
          seleccio.perforacio &&
          seleccio.xenolit &&
          seleccio.registre &&
          seleccio.perforacio === seleccio.xenolit &&
          seleccio.registre !== seleccio.perforacio
        );
      }

      cards.forEach((card) => {
        const id = card.dataset.pvFont;
        card.querySelectorAll("[data-pv-group]").forEach((boto) => {
          boto.addEventListener("click", () => {
            seleccio[id] = boto.dataset.pvGroup;
            estatNode.textContent = "";
            estatNode.classList.remove("pv-error", "pv-desa");
            pintaSeleccio();
          });
        });
      });

      const desat = llegeixEstat().classificacio;
      if (desat?.grups) {
        Object.assign(seleccio, desat.grups);
        criteri.value = desat.criteri || "";
        pintaSeleccio();
        if (desat.correcta) {
          revela.hidden = false;
          estatNode.textContent = "Classificació recuperada d’aquest dispositiu.";
          estatNode.classList.add("pv-desa");
        }
      }

      comprova.addEventListener("click", () => {
        estatNode.classList.remove("pv-error", "pv-desa");

        if (cards.some((card) => !seleccio[card.dataset.pvFont])) {
          estatNode.textContent = "Assigna les tres fonts a un dels dos grups abans de comprovar.";
          estatNode.classList.add("pv-error");
          return;
        }

        const textCriteri = criteri.value.trim();
        if (!textCriteri) {
          estatNode.textContent = "Explica primer quin criteri has utilitzat per fer l’agrupació.";
          estatNode.classList.add("pv-error");
          return;
        }

        const correcta = agrupacioCorrecta();
        const estat = llegeixEstat();
        estat.classificacio = {
          grups: { ...seleccio },
          criteri: textCriteri,
          correcta
        };
        desaEstat(estat);

        if (!correcta) {
          revela.hidden = true;
          estatNode.textContent = "Aquesta agrupació pot tenir un criteri propi, però no és la classificació que cercam. Fixa’t en què obtenim realment de cada font: material o un efecte mesurat.";
          estatNode.classList.add("pv-error");
          return;
        }

        estatNode.textContent = "Sí. Has separat les fonts segons el tipus de dada que obtenim.";
        estatNode.classList.add("pv-desa");
        revela.hidden = false;
        revela.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
          block: "nearest"
        });
      });
    });
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(inicialitzaClassificacioFonts);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inicialitzaClassificacioFonts);
  } else {
    inicialitzaClassificacioFonts();
  }
})();
