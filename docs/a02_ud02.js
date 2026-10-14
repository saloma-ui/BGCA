/* BGCA · A02 UD02. Reveals remain teacher-controlled; answers never leave this browser. */
(() => {
  "use strict";
  const KEY = "bgca:a02_ud02:web:v1";
  const read = () => {
    try { const d=JSON.parse(localStorage.getItem(KEY)||"{}");return {notes:d.notes||{},open:d.open||[],paper:d.paper||{},locked:d.locked||{}}; }
    catch { return {notes:{},open:[],paper:{},locked:{}}; }
  };
  const save = (d) => { try {localStorage.setItem(KEY,JSON.stringify(d));return true;} catch{return false;} };
  function initA02() {
    const root=document.querySelector("[data-a02-web]");
    if(!root || root.dataset.a02Ready==="1") return;
    root.dataset.a02Ready="1";
    const state=read();
    const updateStatus=()=>{
      const opened=root.querySelectorAll('.a02-revela[aria-expanded="true"]').length;
      const el=root.querySelector('[data-a02-estat]');
      if(el) el.textContent=opened ? `${opened} revelacions obertes en aquest dispositiu. Pots tornar-hi més endavant o reiniciar-les.` : 'Les dades apareixeran progressivament. Primer discutim, després revelam.';
    };
    root.querySelectorAll('[data-a02-resposta]').forEach(el=>{
      const id=el.dataset.a02Resposta;
      el.value=state.notes[id]||"";
      if(state.locked[id]) el.readOnly=true;
      el.addEventListener('input',()=>{
        if(el.readOnly) return;
        state.notes[id]=el.value;
        save(state);
      });
    });
    root.querySelectorAll('[data-a02-paper]').forEach(el=>{
      const id=el.dataset.a02Paper;
      el.checked=!!state.paper[id];
      if(state.locked[id]) el.disabled=true;
      el.addEventListener('change',()=>{state.paper[id]=el.checked;save(state);});
    });
    const openReveal=(b, id, restore=false)=>{
      const target=document.getElementById(id);
      if(!target || !root.contains(target)) return;
      target.hidden=false;
      b.setAttribute('aria-expanded','true');
      b.textContent=(b.dataset.a02OpenLabel||'Dades revelades')+' · '+(b.dataset.a02Initial||b.textContent);
      if(!state.open.includes(id)){state.open.push(id);save(state);}
      if(!restore){target.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'nearest'});}
      updateStatus();
    };
    root.querySelectorAll('.a02-revela[data-a02-target]').forEach(button=>{
      button.dataset.a02Initial=button.textContent;
      const id=button.dataset.a02Target;
      if(state.open.includes(id)) openReveal(button,id,true);
      button.addEventListener('click',()=>{
        const req=button.dataset.a02Requires;
        if(req && !state.open.includes(id)){
          const note=root.querySelector(`[data-a02-resposta="${req}"]`);
          const paper=root.querySelector(`[data-a02-paper="${req}"]`);
          const error=root.querySelector(`[data-a02-error="${req}"]`);
          if(!(note?.value.trim() || paper?.checked)){
            if(error) error.textContent='Abans de revelar les dades, escriu una predicció o confirma que l’heu anotada al quadern.';
            note?.focus();return;
          }
          if(error) error.textContent='Predicció registrada abans de veure les dades.';
          state.notes[req]=note?.value||"";
          state.paper[req]=!!paper?.checked;
          state.locked[req]=true;
          if(note)note.readOnly=true;
          if(paper)paper.disabled=true;
        }
        openReveal(button,id);
      });
    });
    const reset=root.querySelector('[data-a02-reset]');
    reset?.addEventListener('click',()=>{
      if(!window.confirm('Vols reiniciar les revelacions i esborrar les anotacions locals de l’A02 en aquest dispositiu?')) return;
      try{localStorage.removeItem(KEY);}catch{}
      root.querySelectorAll('.a02-revelacio[id]').forEach(el=>{el.hidden=true;});
      root.querySelectorAll('.a02-revela[data-a02-target]').forEach(b=>{b.setAttribute('aria-expanded','false');b.textContent=b.dataset.a02Initial;});
      root.querySelectorAll('[data-a02-resposta]').forEach(el=>{el.value='';el.readOnly=false;});
      root.querySelectorAll('[data-a02-paper]').forEach(el=>{el.checked=false;el.disabled=false;});
      root.querySelectorAll('[data-a02-error]').forEach(el=>{el.textContent='';});
      Object.assign(state,{notes:{},paper:{},open:[],locked:{}});
      updateStatus();
      root.scrollIntoView({behavior:'smooth',block:'start'});
    });
    updateStatus();
  }
  if(typeof document$!=='undefined') document$.subscribe(initA02);
  else if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initA02);
  else initA02();
})();
