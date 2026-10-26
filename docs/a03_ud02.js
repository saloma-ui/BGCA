/* BGCA · A03 UD02 · Interacció formativa sense registre de respostes ni notes. */
(() => {
  'use strict';
  function initA03() {
    document.querySelectorAll('[data-a03-web]').forEach(root => {
      root.querySelectorAll('[data-a03-chain]').forEach(chain => {
        if (chain.dataset.a03Ready === '1') return;
        chain.dataset.a03Ready = '1';
        const btn = chain.querySelector('[data-a03-check]');
        const feedback = chain.querySelector('[data-a03-chain-feedback]');
        const expected = {
          pressio: chain.querySelector('.a03-num')?.textContent.includes('Cas 1') ? 'descompressio' : 'aigua',
          material: 'mantell',
          resultat: 'ignees'
        };
        btn?.addEventListener('click', () => {
          const fields = [...chain.querySelectorAll('[data-a03-step]')];
          if (fields.some(field => !field.value)) {
            feedback.textContent = 'Completa les tres passes abans de comprovar la cadena.';
            feedback.className = 'a03-retorn a03-no';
            return;
          }
          const correct = fields.filter(field => field.value === expected[field.dataset.a03Step]);
          if (correct.length === fields.length) {
            feedback.textContent = 'Cadena coherent. El context genera condicions que afavoreixen fusió parcial d’una part del mantell; el magma pot acabar cristal·litzant en roques ígnies.';
            feedback.className = 'a03-retorn a03-ok';
          } else {
            const labels = {pressio:'el canvi físic o químic que inicia la fusió',material:'el material que es pot fondre',resultat:'el resultat geològic'};
            feedback.textContent = 'Revisa: ' + fields.filter(field => field.value !== expected[field.dataset.a03Step]).map(field => labels[field.dataset.a03Step]).join('; ') + '. A una dorsal domina la descompressió; a la subducció, l’aigua redueix la temperatura d’inici de fusió al mantell suprajacent.';
            feedback.className = 'a03-retorn a03-no';
          }
        });
      });
      root.querySelectorAll('[data-a03-quiz]').forEach(quiz => {
        if (quiz.dataset.a03Ready === '1') return;
        quiz.dataset.a03Ready = '1';
        const buttons = [...quiz.querySelectorAll('[data-a03-choice]')];
        const feedback = quiz.querySelector('[data-a03-feedback]');
        buttons.forEach(button => {
          button.setAttribute('aria-pressed', 'false');
          button.addEventListener('click', () => {
            buttons.forEach(candidate => {
              const isSelected = candidate === button;
              candidate.setAttribute('aria-pressed', String(isSelected));
              candidate.classList.toggle('a03-seleccionada', isSelected);
              candidate.classList.toggle('a03-encert', isSelected && button.dataset.a03Choice === 'right');
              candidate.classList.toggle('a03-revisar', isSelected && button.dataset.a03Choice !== 'right');
            });
            if (feedback) {
              const correct = button.dataset.a03Choice === 'right';
              feedback.textContent = `${correct ? 'Coherent. ' : 'Revisa-ho. '}${button.dataset.a03Why || ''}`;
              feedback.classList.toggle('a03-ok', correct);
              feedback.classList.toggle('a03-no', !correct);
            }
          });
        });
      });
    });
  }
  if (typeof document$ !== 'undefined') document$.subscribe(initA03);
  else if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initA03);
  else initA03();
})();