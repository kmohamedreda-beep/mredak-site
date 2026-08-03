// Endpoint Formspree xbdnnpvq = fiche technique préalable (ce fichier).
// mzdobakk = brief client (#brief-form sur index.html) — deux flux distincts, ne pas fusionner.
(function () {
  var fields = [], i;
  for (i = 1; i <= 22; i++) { fields.push(document.getElementById('q' + i)); }

  var scale = document.getElementById('scale'), count = document.getElementById('count');
  for (i = 0; i < 22; i++) { var s = document.createElement('div'); s.className = 'seg'; scale.appendChild(s); }
  var segs = scale.children;

  function refresh() {
    var n = 0;
    fields.forEach(function (f) { if (f.value.trim() !== '') n++; });
    for (var j = 0; j < 22; j++) {
      var on = j < n;
      segs[j].className = 'seg' + (on ? ' on' : '') + (on && j >= 14 ? (j >= 19 ? ' hot' : ' warm') : '');
    }
    count.textContent = n;
  }

  fields.forEach(function (f) { f.addEventListener('input', refresh); f.addEventListener('change', refresh); });
  refresh();

  function buildText() {
    var lines = ['FICHE TECHNIQUE PRÉALABLE — MRK Voices', ''];
    fields.forEach(function (f) {
      var v = f.value.trim();
      lines.push(f.dataset.q + ' : ' + (v === '' ? '—' : v));
    });
    lines.push('', '(Photo du poste jointe séparément.)');
    return lines.join('\n');
  }

  document.getElementById('copy').addEventListener('click', function () {
    var txt = buildText();
    var out = document.getElementById('out');
    out.value = txt;

    var btn = this;
    function ok() {
      btn.textContent = 'Réponses copiées';
      btn.classList.add('done');
      setTimeout(function () { btn.textContent = 'Copier mes réponses'; btn.classList.remove('done'); }, 2600);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(ok, function () { out.style.display = 'block'; out.select(); });
    } else {
      out.style.display = 'block'; out.select();
    }
  });

  var form = document.getElementById('fiche-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var btn = document.getElementById('fiche-submit-btn');
    var confirmEl = document.getElementById('fiche-confirm');
    var errorEl = document.getElementById('fiche-error');
    if (btn) { btn.disabled = true; btn.style.display = ''; }
    if (errorEl) errorEl.style.display = 'none';
    if (confirmEl) confirmEl.style.display = 'none';

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
    .then(function (res) {
      if (res.ok) {
        if (btn) btn.style.display = 'none';
        if (confirmEl) confirmEl.style.display = '';
      } else {
        if (btn) btn.disabled = false;
        if (errorEl) errorEl.style.display = '';
      }
    })
    .catch(function () {
      if (btn) btn.disabled = false;
      if (errorEl) errorEl.style.display = '';
    });
  });
})();
