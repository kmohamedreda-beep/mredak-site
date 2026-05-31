/* ── BRIEF FORM SCRIPT ── */
(function() {

  var currentLang = 'fr';

  window.switchBriefLang = function(lang) {
    currentLang = lang;

    // Toggle boutons
    document.querySelectorAll('.brief-lang-btn').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Toggle intros
    ['fr','en','ar'].forEach(function(l) {
      var el = document.getElementById('brief-intro-' + l);
      if (el) el.style.display = l === lang ? '' : 'none';
    });

    // Toggle labels
    document.querySelectorAll('.brief-label-fr, .brief-label-en, .brief-label-ar').forEach(function(el) {
      var isTarget = el.classList.contains('brief-label-' + lang);
      el.style.display = isTarget ? '' : 'none';
    });

    // Placeholders dynamiques
    document.querySelectorAll('[data-placeholder-' + lang + ']').forEach(function(el) {
      el.placeholder = el.getAttribute('data-placeholder-' + lang);
    });

    // RTL
    var wrapper = document.querySelector('.brief-form-wrapper');
    if (wrapper) wrapper.style.direction = lang === 'ar' ? 'rtl' : 'ltr';

    // Valeur cachée
    var hiddenLang = document.getElementById('brief-lang-value');
    if (hiddenLang) hiddenLang.value = lang;

    // Confirmation langue
    ['fr','en','ar'].forEach(function(l) {
      var el = document.getElementById('brief-confirm-' + l);
      if (el) el.style.display = l === lang ? '' : 'none';
    });
  };

  // Soumission AJAX — pas de redirection Formspree
  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('brief-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = document.getElementById('brief-submit-btn');
      if (btn) btn.disabled = true;

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      })
      .then(function(res) {
        if (res.ok) {
          form.style.display = 'none';
          var confirm = document.getElementById('brief-confirm');
          if (confirm) confirm.style.display = '';
          // Afficher la bonne langue de confirmation
          ['fr','en','ar'].forEach(function(l) {
            var el = document.getElementById('brief-confirm-' + l);
            if (el) el.style.display = l === currentLang ? '' : 'none';
          });
        } else {
          if (btn) btn.disabled = false;
        }
      })
      .catch(function() {
        if (btn) btn.disabled = false;
      });
    });
  });

})();
