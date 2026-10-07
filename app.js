(function () {
  'use strict';

  const { CATS, TECH, FASES, WEEKS, NIVEIS } = window.PLANO;
  const KEY = 'meiaGuarda.v1';
  const DIAS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
  const TOTAL = WEEKS.length * 7;
  const $ = (s, r = document) => r.querySelector(s);

  /* ---------- Datas ---------- */
  const pad = n => String(n).padStart(2, '0');
  const toISO = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const fromISO = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  function mondayOf(date) {
    const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
    return d;
  }

  /* ---------- Estado ---------- */
  function defaults() {
    return { start: toISO(mondayOf(new Date())), mode: 'seq', done: {}, notes: {}, mastery: {}, videos: {}, cycle: 1 };
  }
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) return Object.assign(defaults(), JSON.parse(raw));
    } catch (e) { /* armazenamento indisponível */ }
    return defaults();
  }
  let state = load();
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); }
    catch (e) { toast('Não deu para salvar. Verifique se o navegador não está em modo privado.'); }
  }

  let lastDate = null;
  const ui = { tab: 'hoje', cursor: null, cat: 'todas', q: '', openWeeks: {} };

  /* ---------- Plano ---------- */
  function todayIndex() {
    if (state.mode === 'cal') {
      const diff = Math.floor((new Date().setHours(0, 0, 0, 0) - fromISO(state.start)) / 86400000);
      return Math.max(0, Math.min(TOTAL - 1, diff));
    }
    for (let i = 0; i < TOTAL; i++) if (!state.done[i]) return i;
    return TOTAL - 1;
  }
  const weekTechs = w => [...new Set(w.dias.flat())];

  function dayContent(i) {
    const wi = Math.floor(i / 7), d = i % 7, w = WEEKS[wi];
    const base = { i, wi, d, w, dia: DIAS[d], fase: FASES[w.fase] };
    if (d <= 3) {
      const techs = w.dias[d];
      const kind = d === 2 ? 'Defesa e contra-ataque' : (techs.length > 1 ? 'Técnicas novas' : 'Técnica nova');
      return Object.assign(base, {
        type: 'tecnica', kind, techs,
        titulo: techs.map(id => TECH[id].nome).join(' + '),
        meta: 'Assista antes do treino (15 a 20 min). No tatame: drill primeiro, depois o específico.',
        treino: [['Aquecimento', 'Drills solo de quadril: 5 minutos.'], ['Drill', w.drill], ['Específico', w.especifico]]
      });
    }
    if (d === 4) {
      return Object.assign(base, {
        type: 'revisao', kind: 'Revisão da semana', techs: weekTechs(w), titulo: w.titulo,
        meta: 'Reveja os vídeos da semana e marque seu nível em cada técnica.',
        treino: [['Drill', 'Cada técnica da semana: 5 repetições de cada lado.'], ['Específico', w.especifico], ['Rola', 'Dois rolas livres começando da meia.']]
      });
    }
    if (d === 5) {
      return Object.assign(base, {
        type: 'rola', kind: 'Rola com meta', techs: weekTechs(w), titulo: 'Leve a semana para o rola',
        meta: 'Em todo rola, busque a meia guarda. Tente as técnicas abaixo pelo menos 3 vezes cada.',
        treino: [['Meta', 'Chegar na meia em todo rola e tentar a técnica da semana.'], ['Depois', 'Anote o que funcionou, onde travou e como ele passou (se passou).']]
      });
    }
    return Object.assign(base, {
      type: 'descanso', kind: 'Descanso e estudo', techs: [], titulo: 'Descanso ativo',
      meta: 'Recupere o corpo e estude luta. A cabeça também treina.',
      treino: [
        ['Mobilidade', '15 minutos: 90/90 de quadril, borboleta, ponte e rotação de ombro.'],
        ['Estudo', 'Assista a lutas de meia guarda e anote 3 situações: como ele chegou na meia, o que funcionou e como terminou.']
      ],
      estudo: w.estudo
    });
  }

  /* ---------- Utilidades ---------- */
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const yt = q => 'https://www.youtube.com/results?search_query=' + encodeURIComponent(q);
  const level = id => state.mastery[id] || 0;
  const doneCount = () => Object.keys(state.done).filter(k => state.done[k]).length;

  function ytId(url) {
    if (!url) return null;
    const m = String(url).match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/))([\w-]{11})/);
    return m ? m[1] : null;
  }
  function videoUrl(id) {
    return state.videos[id] || yt(TECH[id].videos[0]);
  }

  function beltHTML(fraction, big) {
    const graus = Math.min(4, Math.floor(fraction * 4 + 1e-9));
    const i = [0, 1, 2, 3].map(k => `<i class="${k < graus ? 'on' : ''}"></i>`).join('');
    return `<div class="belt${big ? ' big' : ''}" role="img" aria-label="${graus} de 4 graus no plano">
      <span class="belt-body"></span><span class="belt-bar">${i}</span><span class="belt-tail"></span></div>`;
  }

  const ICON = {
    prev: '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',
    next: '<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>',
    chev: '<svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>',
    play: '<svg viewBox="0 0 24 24"><path d="M7 4.5v15l13-7.5z"/></svg>',
    close: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>'
  };

  function techRow(id, withPlay) {
    const t = TECH[id];
    const row = `<button class="tech" data-act="open-tech" data-id="${id}">
      <span class="tech-stripe" data-level="${level(id)}"></span>
      <span class="tech-main"><span class="tech-name">${esc(t.nome)}</span><span class="tech-cat">${esc(CATS[t.cat])}</span></span>
      <span class="tech-go">${ICON.chev}</span></button>`;
    if (!withPlay) return row;
    const own = !!state.videos[id];
    return `<div class="tech-block">${row}
      <a class="play" href="${esc(videoUrl(id))}" target="_blank" rel="noopener">${ICON.play}${own ? 'Assistir meu vídeo' : 'Assistir no YouTube'}</a></div>`;
  }

  /* ---------- Telas ---------- */
  function renderHoje() {
    const today = todayIndex();
    if (ui.cursor === null) ui.cursor = today;
    const c = dayContent(ui.cursor);
    const done = !!state.done[c.i];
    const allDone = doneCount() >= TOTAL;

    let html = `<section class="day-hero">
      <div class="day-nav">
        <p class="day-where"><strong>Semana ${c.wi + 1} de ${WEEKS.length}</strong><br>${esc(c.fase)}, ${esc(c.w.titulo.toLowerCase())}</p>
        <div class="nav-btns">
          <button class="icon-btn" data-act="prev" aria-label="Dia anterior" ${c.i === 0 ? 'disabled' : ''}>${ICON.prev}</button>
          <button class="icon-btn" data-act="next" aria-label="Próximo dia" ${c.i === TOTAL - 1 ? 'disabled' : ''}>${ICON.next}</button>
        </div>
      </div>
      <p class="day-kind">${esc(c.dia)}, ${esc(c.kind.toLowerCase())}</p>
      <h1>${esc(c.titulo)}</h1>
      <p class="day-meta">${esc(c.meta)}</p>
      ${done ? '<p class="done-flag">✓ Treino feito</p>' : ''}
      ${c.i !== today ? '<button class="back-today" data-act="today">Ir para o treino de hoje</button>' : ''}
    </section>`;

    if (allDone) {
      html += `<section class="section"><h2>Ciclo ${state.cycle} completo</h2>
        <p class="section-note">Você passou pelas ${WEEKS.length} semanas. Recomece com mais resistência dos parceiros; seus níveis e vídeos ficam salvos.</p>
        <button class="secondary" data-act="new-cycle">Começar o ciclo ${state.cycle + 1}</button></section>`;
    }

    if (c.techs.length) {
      const h = c.type === 'rola' ? 'Para tentar hoje' : c.type === 'revisao' ? 'Revisar' : 'Assistir';
      html += `<section class="section"><h2>${h}</h2>
        <p class="section-note">Toque na técnica para ver os detalhes e marcar seu nível.</p>
        <div class="tech-list">${c.techs.map(id => techRow(id, c.type !== 'rola')).join('')}</div></section>`;
    }
    if (c.estudo) {
      html += `<section class="section"><h2>Assistir</h2>
        <div class="video-links"><a class="video-link" href="${esc(yt(c.estudo))}" target="_blank" rel="noopener">${ICON.play}<span>Lutas: ${esc(c.estudo)}</span></a></div></section>`;
    }

    html += `<section class="section"><h2>No tatame</h2><dl class="drill">
      ${c.treino.map(([k, v]) => `<div class="drill-row"><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}
      </dl></section>
      <section class="section"><h2><label for="notes">Anotações do dia</label></h2>
      <textarea id="notes" class="notes" data-day="${c.i}" placeholder="O que funcionou? Onde travou? Quem te passou e como?">${esc(state.notes[c.i] || '')}</textarea>
      <button class="primary${done ? ' is-done' : ''}" data-act="done">${done ? '✓ Feito. Toque para desmarcar' : 'Marcar treino como feito'}</button>
      </section>`;
    return html;
  }

  function renderPlano() {
    const today = todayIndex();
    const curWeek = Math.floor(today / 7);
    if (!(curWeek in ui.openWeeks)) ui.openWeeks[curWeek] = true;
    let html = `<div class="section"><h1>Plano</h1>
      <p class="section-note" style="margin-top:8px">${WEEKS.length} semanas, ${FASES.length} fases. Toque numa semana para ver os dias.</p></div>`;
    FASES.forEach((fase, fi) => {
      const weeks = WEEKS.map((w, wi) => ({ w, wi })).filter(x => x.w.fase === fi);
      html += `<section class="phase"><h2>${esc(fase)}</h2>`;
      weeks.forEach(({ w, wi }) => {
        let n = 0; for (let d = 0; d < 7; d++) if (state.done[wi * 7 + d]) n++;
        const open = ui.openWeeks[wi];
        html += `<div class="week${open ? ' open' : ''}${wi === curWeek ? ' current' : ''}">
          <button class="week-head" data-act="toggle-week" data-week="${wi}" aria-expanded="${!!open}">
            <span class="week-num">${wi + 1}</span><span class="week-title">${esc(w.titulo)}</span><span class="week-count">${n}/7</span>
          </button><div class="week-days">`;
        for (let d = 0; d < 7; d++) {
          const i = wi * 7 + d, c = dayContent(i);
          const what = c.type === 'tecnica' ? c.titulo : c.kind;
          html += `<button class="wday${state.done[i] ? ' is-done' : ''}${i === today ? ' is-today' : ''}" data-act="goto-day" data-day="${i}">
            <span class="wday-check" aria-hidden="true"></span><span class="wday-name">${DIAS[d]}</span><span class="wday-what">${esc(what)}</span></button>`;
        }
        html += `</div></div>`;
      });
      html += `</section>`;
    });
    return html;
  }

  function libList() {
    const q = ui.q.trim().toLowerCase();
    const norm = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const nq = norm(q);
    const groups = Object.keys(CATS).filter(k => ui.cat === 'todas' || ui.cat === k).map(k => ({
      k, items: Object.values(TECH).filter(t => t.cat === k && (!nq || norm(t.nome + ' ' + t.desc).includes(nq)))
    })).filter(g => g.items.length);
    if (!groups.length) return `<p class="empty">Nenhuma técnica encontrada para “${esc(ui.q)}”. Tente outra palavra, como “raspagem” ou “costas”.</p>`;
    return groups.map(g => `<section class="lib-group"><h2>${esc(CATS[g.k])}</h2>
      <div class="tech-list">${g.items.map(t => techRow(t.id, false)).join('')}</div></section>`).join('');
  }

  function renderBiblioteca() {
    const chips = [['todas', 'Todas']].concat(Object.entries(CATS))
      .map(([k, v]) => `<button class="chip" data-act="cat" data-cat="${k}" aria-pressed="${ui.cat === k}">${esc(v)}</button>`).join('');
    return `<div class="section"><h1>Técnicas</h1>
      <input class="search" id="q" type="search" placeholder="Buscar técnica" value="${esc(ui.q)}" aria-label="Buscar técnica">
      <div class="chips" role="group" aria-label="Filtrar por sistema">${chips}</div></div>
      <div id="libList">${libList()}</div>`;
  }

  function renderProgresso() {
    const n = doneCount();
    const techs = Object.values(TECH);
    const counts = NIVEIS.map((_, li) => techs.filter(t => level(t.id) === li).length);
    const notes = Object.keys(state.notes).filter(k => state.notes[k] && state.notes[k].trim())
      .map(Number).sort((a, b) => b - a).slice(0, 30);

    return `<div class="section"><h1>Progresso</h1></div>
      <section class="section">${beltHTML(n / TOTAL, true)}
        <p class="stat-line"><strong>${n}</strong>de ${TOTAL} dias feitos no ciclo ${state.cycle}</p>
        <p class="section-note" style="margin-top:6px">Cada grau na ponteira é um quarto do plano.</p></section>
      <section class="section"><h2>Técnicas por nível</h2>
        <p class="section-note">A cor da faixa mostra o quanto cada técnica já funciona para você.</p>
        <div class="levels">${NIVEIS.map((nv, li) => `<div class="level-row"><span class="level-name">${esc(nv.nome)}</span>
          <span class="level-track"><span class="level-fill fill-${nv.faixa}" style="display:block;width:${(counts[li] / techs.length * 100).toFixed(1)}%"></span></span>
          <span class="level-num">${counts[li]}</span></div>`).join('')}</div></section>
      <section class="section"><h2>Anotações</h2>
        ${notes.length ? notes.map(i => {
          const c = dayContent(i);
          return `<div class="note-item"><button class="note-when" data-act="goto-day" data-day="${i}">Semana ${c.wi + 1}, ${c.dia.toLowerCase()}</button>
            <p class="note-text">${esc(state.notes[i])}</p></div>`;
        }).join('') : '<p class="section-note">Suas anotações dos treinos aparecem aqui. Escreva no fim de cada dia.</p>'}
      </section>
      <section class="section"><h2>Ajustes</h2>
        <div class="setting"><span class="setting-label">Como escolher o dia</span>
          <div class="seg" role="group" aria-label="Modo">
            <button data-act="mode" data-mode="seq" aria-pressed="${state.mode === 'seq'}">Próximo pendente</button>
            <button data-act="mode" data-mode="cal" aria-pressed="${state.mode === 'cal'}">Pela data</button>
          </div>
          <small>${state.mode === 'seq'
            ? 'Hoje mostra o primeiro treino que você ainda não marcou. Se faltar um dia, nada se perde.'
            : 'Hoje segue o calendário a partir da data de início. Semana começa na segunda.'}</small></div>
        ${state.mode === 'cal' ? `<div class="setting"><label for="start">Início do plano</label>
          <input type="date" id="start" value="${state.start}"><small>Ajustado para a segunda-feira daquela semana.</small></div>` : ''}
        <div class="setting"><span class="setting-label">Backup</span>
          <small>O progresso fica salvo neste aparelho. Exporte de vez em quando para não perder.</small>
          <div class="btn-row"><button class="secondary" data-act="export">Exportar backup</button>
          <button class="secondary" data-act="import">Importar backup</button>
          <input type="file" id="importFile" accept="application/json,.json" class="sr-only" tabindex="-1"></div></div>
        <div class="setting"><span class="setting-label">Recomeçar</span>
          <small>Apaga os dias feitos e as anotações. Níveis e vídeos salvos continuam.</small>
          <div class="btn-row"><button class="secondary danger" data-act="reset">Zerar os dias</button></div></div>
      </section>`;
  }

  /* ---------- Folha de técnica ---------- */
  function openTech(id) {
    const t = TECH[id];
    const own = state.videos[id];
    const vid = ytId(own);
    const usedIn = WEEKS.map((w, wi) => w.dias.flat().includes(id) ? wi + 1 : null).filter(Boolean);
    $('#sheetPanel').innerHTML = `<div class="grabber"></div>
      <div class="sheet-top"><div><p class="sheet-cat">${esc(CATS[t.cat])}</p><h2 id="sheetTitle">${esc(t.nome)}</h2></div>
        <button class="close" data-act="close-sheet" aria-label="Fechar">${ICON.close}</button></div>
      <p class="sheet-desc">${esc(t.desc)}</p>
      ${vid ? `<div class="video-wrap"><iframe src="https://www.youtube-nocookie.com/embed/${vid}" title="${esc(t.nome)}" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe></div>` : ''}
      <h3>Pontos-chave</h3><ul class="points">${t.pontos.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
      ${t.erro ? `<h3>Erro comum</h3><p class="mistake">${esc(t.erro)}</p>` : ''}
      <h3>Vídeos</h3>
      <div class="video-links">
        ${own ? `<a class="video-link" href="${esc(own)}" target="_blank" rel="noopener">${ICON.play}<span>Meu vídeo salvo</span></a>` : ''}
        ${t.videos.map(q => `<a class="video-link" href="${esc(yt(q))}" target="_blank" rel="noopener">${ICON.play}<span>Buscar: ${esc(q)}</span></a>`).join('')}
      </div>
      <form class="save-video" data-id="${id}" onsubmit="return false">
        <input type="url" id="vidInput" placeholder="Cole o link do vídeo que você curtiu" value="${esc(own || '')}" aria-label="Link do vídeo">
        <button class="secondary" data-act="save-video" data-id="${id}">${own ? 'Trocar' : 'Salvar'}</button>
      </form>
      ${own ? `<p style="margin-top:8px"><button class="link-btn" data-act="clear-video" data-id="${id}">Remover meu vídeo</button></p>` : ''}
      <h3>Meu nível</h3>
      <div class="level-pick">${NIVEIS.map((nv, li) => `<button class="level-opt" data-act="set-level" data-id="${id}" data-level="${li}" aria-pressed="${level(id) === li}">
        <span class="swatch fill-${nv.faixa}"></span><span>${esc(nv.nome)}</span></button>`).join('')}</div>
      ${usedIn.length ? `<h3>No plano</h3><p class="used-in">Semana${usedIn.length > 1 ? 's' : ''} ${usedIn.join(', ')}</p>` : ''}`;
    const sheet = $('#sheet');
    sheet.hidden = false;
    sheet.dataset.id = id;
    document.body.style.overflow = 'hidden';
    $('#sheetPanel').scrollTop = 0;
    setTimeout(() => $('.close', sheet).focus({ preventScroll: true }), 50);
  }
  function closeSheet() {
    const sheet = $('#sheet');
    if (sheet.hidden) return;
    sheet.hidden = true;
    sheet.querySelector('#sheetPanel').innerHTML = '';
    document.body.style.overflow = '';
    render(false);
  }

  /* ---------- Render ---------- */
  function render(scrollTop = true) {
    const view = $('#view');
    const map = { hoje: renderHoje, plano: renderPlano, biblioteca: renderBiblioteca, progresso: renderProgresso };
    view.innerHTML = map[ui.tab]();
    document.querySelectorAll('.tab').forEach(b => {
      if (b.dataset.tab === ui.tab) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
    });
    lastDate = toISO(new Date());
    $('#topBelt').innerHTML = beltHTML(doneCount() / TOTAL, false);
    if (scrollTop) window.scrollTo(0, 0);
  }

  let toastTimer;
  function toast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
  }

  /* ---------- Ações ---------- */
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-act]');
    if (!el) return;
    const act = el.dataset.act;
    const id = el.dataset.id;

    switch (act) {
      case 'tab':
        ui.tab = el.dataset.tab;
        if (ui.tab === 'hoje') ui.cursor = null;
        render();
        break;
      case 'prev': ui.cursor = Math.max(0, ui.cursor - 1); render(); break;
      case 'next': ui.cursor = Math.min(TOTAL - 1, ui.cursor + 1); render(); break;
      case 'today': ui.cursor = null; render(); break;
      case 'goto-day': ui.tab = 'hoje'; ui.cursor = Number(el.dataset.day); render(); break;
      case 'done': {
        const i = ui.cursor;
        if (state.done[i]) { delete state.done[i]; toast('Treino desmarcado'); }
        else {
          state.done[i] = true;
          toast(doneCount() % 7 === 0 ? 'Treino feito. Mais uma semana na conta!' : 'Treino feito. Oss!');
          if (state.mode === 'seq') { ui.cursor = null; save(); render(true); break; }
        }
        save(); render(false);
        break;
      }
      case 'toggle-week': {
        const w = el.dataset.week;
        ui.openWeeks[w] = !ui.openWeeks[w];
        el.closest('.week').classList.toggle('open', ui.openWeeks[w]);
        el.setAttribute('aria-expanded', !!ui.openWeeks[w]);
        break;
      }
      case 'cat':
        ui.cat = el.dataset.cat;
        document.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', c.dataset.cat === ui.cat));
        $('#libList').innerHTML = libList();
        break;
      case 'open-tech': openTech(id); break;
      case 'close-sheet': closeSheet(); break;
      case 'set-level':
        state.mastery[id] = Number(el.dataset.level);
        if (!state.mastery[id]) delete state.mastery[id];
        save();
        document.querySelectorAll('.level-opt').forEach(b => b.setAttribute('aria-pressed', b === el));
        toast('Nível salvo: ' + NIVEIS[Number(el.dataset.level)].nome);
        break;
      case 'save-video': {
        const url = $('#vidInput').value.trim();
        if (!/^https?:\/\//i.test(url)) { toast('Cole um link que comece com https://'); return; }
        state.videos[id] = url; save(); openTech(id);
        toast(ytId(url) ? 'Vídeo salvo. Ele toca aqui dentro.' : 'Link salvo');
        break;
      }
      case 'clear-video': delete state.videos[id]; save(); openTech(id); toast('Vídeo removido'); break;
      case 'mode':
        state.mode = el.dataset.mode; save(); ui.cursor = null; render(false);
        break;
      case 'export': exportData(); break;
      case 'import': $('#importFile').click(); break;
      case 'reset':
        if (confirm('Zerar todos os dias feitos e as anotações? Níveis e vídeos continuam.')) {
          state.done = {}; state.notes = {}; save(); ui.cursor = null; render(); toast('Dias zerados');
        }
        break;
      case 'new-cycle':
        state.cycle += 1; state.done = {}; save(); ui.cursor = null; render(); toast('Ciclo ' + state.cycle + ' começou');
        break;
    }
  });

  let noteTimer;
  document.addEventListener('input', e => {
    if (e.target.id === 'notes') {
      const i = e.target.dataset.day, v = e.target.value;
      clearTimeout(noteTimer);
      noteTimer = setTimeout(() => { if (v.trim()) state.notes[i] = v; else delete state.notes[i]; save(); }, 400);
    }
    if (e.target.id === 'q') { ui.q = e.target.value; $('#libList').innerHTML = libList(); }
  });

  document.addEventListener('change', e => {
    if (e.target.id === 'start' && e.target.value) {
      state.start = toISO(mondayOf(fromISO(e.target.value)));
      save(); ui.cursor = null; render(false); toast('Início ajustado');
    }
    if (e.target.id === 'importFile' && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const data = JSON.parse(reader.result);
          if (typeof data !== 'object' || !data.done) throw new Error('formato');
          state = Object.assign(defaults(), data); save(); ui.cursor = null; render(); toast('Backup importado');
        } catch (err) { toast('Esse arquivo não é um backup do app.'); }
      };
      reader.readAsText(e.target.files[0]);
    }
  });

  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSheet(); });

  function exportData() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `meia-guarda-backup-${toISO(new Date())}.json`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    toast('Backup exportado');
  }

  // Se o app ficou aberto de um dia para o outro, volta para o treino do dia
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && lastDate !== toISO(new Date()) && $('#sheet').hidden) {
      ui.cursor = null; render(false);
    }
  });

  render();

  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
})();
