/** A04-UD02 v03: autoavaluació local; no enviam ni desam respostes. */
(function () {
  function init(root) {
    (root || document).querySelectorAll('.bgca-quiz').forEach(function (box) {
      if (box.dataset.initialized === 'yes') return;
      box.dataset.initialized = 'yes';
      var button = box.querySelector('button.bgca-verify');
      var feedback = box.querySelector('.bgca-feedback');
      if (!button || !feedback) return;
      function reset() { feedback.hidden = true; feedback.textContent = ''; feedback.removeAttribute('data-status'); }
      box.addEventListener('change', reset);
      box.addEventListener('input', reset);
      function show(status, message) { feedback.hidden = false; feedback.dataset.status = status; feedback.textContent = message; }
      button.addEventListener('click', function () {
        if (box.dataset.type === 'classify') {
          var selects = Array.from(box.querySelectorAll('select[data-correct]'));
          if (selects.some(function (el) { return !el.value; })) {
            show('pending', 'Selecciona un procés per a cadascuna de les situacions.'); return;
          }
          var errors = selects.map(function (el,i) { return { el:el, i:i+1 }; })
            .filter(function (o) { return o.el.value !== o.el.dataset.correct; });
          var good = selects.length - errors.length;
          if (errors.length === 0) show('correct', good + ' de ' + selects.length + ' situacions ben interpretades. Has distingit l’alteració, l’arrencada, el transport i el dipòsit.');
          else show('incorrect', good + ' de ' + selects.length + ' situacions. Revisa: ' + errors.map(function (o) { return 'situació ' + o.i + ': ' + o.el.dataset.explain; }).join(' '));
          return;
        }
        var selected = box.querySelector('input[type="radio"]:checked');
        if (!selected) { show('pending','Tria una resposta abans de comprovar-la.'); return; }
        if (box.dataset.type === 'justify') {
          var textarea = box.querySelector('textarea');
          if (!textarea || !textarea.value.trim()) { show('pending','Escriu primer la teva justificació breu.'); return; }
          var accurate = selected.value === box.dataset.answer;
          show(accurate ? 'compare' : 'incorrect',
            (accurate ? 'L’opció triada és coherent. ' : 'Revisa l’opció triada. ') +
            (selected.dataset.reason || '') +
            ' La justificació escrita no es puntua automàticament: compara-la amb la pauta desplegable.');
          return;
        }
        var correct = selected.value === box.dataset.answer;
        show(correct ? 'correct' : 'incorrect', (correct ? 'Interpretació coherent. ' : 'Revisa aquesta interpretació. ') + (selected.dataset.reason || 'Consulta l’explicació del bloc.'));
      });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { init(document); });
  else init(document);
  if (typeof document$ !== 'undefined' && document$ && typeof document$.subscribe === 'function') {
    document$.subscribe(function () { init(document); });
  }
})();