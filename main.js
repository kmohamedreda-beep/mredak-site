window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// Consent Mode v2 — déclaration par défaut AVANT config (requis Google)
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  wait_for_update: 500
});

gtag('js', new Date());
gtag('config', 'G-5634FL003H');

const i18n = {
  fr: {
    nav_cta:"Un projet ? Parlons-en.", hero_name:"Mohammed Reda Khiar",
    hero_signature:"Pour mieux dire ce qui compte.",
    hero_subtitle:"Voix-off · Doublage · Narration — FR · AR · EN MENA",
    hero_cta:"Un projet ? Parlons-en.", hero_listen:"Écouter", hero_demos:"Démos",
    videos_title:"Crédits", demos_title:"Écouter",
    reviews_title:"Ils en parlent mieux que moi",
    contact_title:"Contact", contact_info:"Réponse sous 2h · Remote international",
    footer_sig:"Pour mieux dire ce qui compte.",
    nav_reviews:"Avis", nav_credits:"Crédits", nav_demos:"Écouter"
  },
  en: {
    nav_cta:"Got a project? Let's talk.", hero_name:"Mohammed Reda Khiar",
    hero_signature:"For what truly matters, said right.",
    hero_subtitle:"Voice-over · Dubbing · Narration — Arabic MSA · English MENA · Darja · French",
    hero_cta:"Got a project? Let's talk.", hero_listen:"Listen", hero_demos:"Demos",
    videos_title:"Credits", demos_title:"Listen",
    reviews_title:"In their own words",
    contact_title:"Contact", contact_info:"Reply within 2h · Remote worldwide",
    footer_sig:"For what truly matters, said right.",
    nav_reviews:"Reviews", nav_credits:"Credits", nav_demos:"Listen"
  },
  ar: {
    nav_cta:"مشروع في الأفق؟ تحدّث إليّ.", hero_name:"محمد رضا خيار",
    hero_signature:"لأنّ بعض الكلمات تستحق أن تُقال كما ينبغي.",
    hero_subtitle:"تعليق صوتي · دبلجة · سرد — العربية الفصحى · الإنجليزية MENA · الدارجة · الفرنسية",
    hero_cta:"مشروع في الأفق؟ تحدّث إليّ.", hero_listen:"استمع", hero_demos:"الديمو",
    videos_title:"أعمال", demos_title:"استمع",
    reviews_title:"بكلماتهم",
    contact_title:"تواصل معي", contact_info:"ردّ خلال 24 ساعة · عمل عن بُعد",
    footer_sig:"لأنّ بعض الكلمات تستحق أن تُقال كما ينبغي.",
    nav_reviews:"آراء", nav_credits:"أعمال", nav_demos:"استمع"
  }
};

const VIDEOS = [
  { type:'yt', id:'g7FXPHVyp8Y', client:'Châteauroux JO 2024',            lang:'FR', label:'Institutionnel · Événement mondial' },
  { type:'yt', id:'G0yiiFVX00E', client:'Polytex',                         lang:'FR', label:'Corporate · Tech' },
  { type:'yt', id:'Vo_4HoJF_2s', client:'Caprice',                         lang:'FR', label:'Narration · Émotion' },
  { type:'yt', id:'495RNUfeEZM', client:'FF XIV Stormblood · Square Enix', lang:'FR', label:'Gaming · International' },
  { type:'yt', id:'_QC9MFZmtjo', client:'BMW — 100 ans',                   lang:'AR', label:'Prestige · International' },
  { type:'yt', id:'G-ckfG4IKew', client:'BEA — Banque Extérieure d\'Algérie', lang:'AR', label:'Institutionnel · Finance' },
  { type:'yt', id:'mHUKWrDprc0', client:'Bingo — Produit de l\'Année',     lang:'AR', label:'Commercial · Grand public' },
  { type:'yt', id:'BaylCO3FTHs', client:'DP World Djazaïr',                lang:'AR', label:'Institutionnel · MENA' },
  { type:'yt', id:'LacFijkvnsc', client:'Danone — Oikos',                  lang:'DZ', label:'Pub · Grand public' },
  { type:'yt', id:'fuTXXmNKrjw', client:'Timac AGRO',                      lang:'DZ', label:'Institutionnel · Agriculture' },
  { type:'yt', id:'IR9ETaQvacA', client:'Cheezy — Safilait',               lang:'DZ', label:'Pub · Ramadan' },
  { type:'yt', id:'MWD_d9UDuL0', client:'Petrofac',                        lang:'DZ', label:'Corporate · Énergie' },
  { type:'yt', id:'f3VNUbTwb_o', client:'Ponant Explorations',             lang:'EN', label:'Luxury · Sustainability' },
  { type:'yt', id:'XU9xQkr5W8Y', client:'Pharmaceuticals',                 lang:'EN', label:'Medical · Corporate' },
];

const LOGOS = [
  'BMW','DP World','MSF','Danone','Unilever','Total','Stellantis',
  'World Bank','JO Paris 2024','Ponant','Square Enix','NCSoft',
  'Relic/SEGA','Thales','Bardahl','Soundgarden','Trois Prime',
  'MG Motor','KUHN','Merinal','Chemonics/USAID','SAA','Djezzy',
  'Ooredoo','Condor','Safilait','Bellat','Petrofac','Caprice'
];

const DEMOS = {
  fr: { label:'FR', genres:[
    { key:'showreel',  label:'Showreel',      src:'audio/fr/showreel.mp3' },
    { key:'corporate', label:'Corporate',      src:'audio/fr/corporate.mp3' },
    { key:'medical',   label:'Médical/Pharma', src:'audio/fr/medical.mp3' },
    { key:'elearning', label:'E-learning',     src:'audio/fr/elearning.mp3' },
  ]},
  en: { label:'EN', genres:[
    { key:'showreel',   label:'Showreel',   src:'audio/en/showreel.mp3' },
    { key:'corporate',  label:'Corporate',  src:'audio/en/corporate.mp3' },
    { key:'gaming',     label:'Gaming',     src:'audio/en/gaming.mp3' },
    { key:'animation',  label:'Animation',  src:'audio/en/animation.mp3' },
  ]},
  ar: { label:'AR', genres:[
    { key:'showreel',  label:'Showreel',      src:'audio/ar/showreel.mp3' },
    { key:'corporate', label:'Corporate',      src:'audio/ar/corporate.mp3' },
    { key:'medical',   label:'Medical/Pharma', src:'audio/ar/medical.mp3' },
    { key:'gaming',    label:'Gaming',         src:'audio/ar/gaming.mp3' },
  ]},
  dz: { label:'DZ', genres:[
    { key:'showreel',  label:'Showreel',  src:'audio/dz/showreel.mp3' },
  ]},
};

let currentLang  = localStorage.getItem('lang') || 'fr';
let introPlaying = false;
let miniPlaying  = false;
let demoLang     = 'fr';
let demoGenre    = 'showreel';
let demoPlaying  = false;

document.addEventListener('DOMContentLoaded', () => {
  // Scroll to top button
  const scrollBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 400);
  });
  scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Skip intro if seen this session
  if (sessionStorage.getItem('introSeen')) {
    const introEl = document.getElementById('intro');
    introEl.classList.add('hidden');
    introEl.setAttribute('aria-hidden', 'true');
    introEl.querySelectorAll('button, audio').forEach(el => el.setAttribute('tabindex', '-1'));
  }

  document.getElementById('introPlayBtn').addEventListener('click', toggleIntroAudio);
  document.getElementById('introSkipBtn').addEventListener('click', skipIntro);
  document.getElementById('heroMiniPlayer').addEventListener('click', toggleMiniAudio);
  document.getElementById('demoPlayBtn').addEventListener('click', toggleDemoAudio);
  document.getElementById('audBarWrap').addEventListener('click', seekDemoAudio);

  const cookieBanner = document.getElementById('cookieBanner');
  cookieBanner.querySelector('.cookie-decline').addEventListener('click', () => dismissCookies(false));
  cookieBanner.querySelector('.cookie-accept').addEventListener('click', () => dismissCookies(true));

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
  document.querySelectorAll('.brief-lang-btn').forEach(btn => {
    btn.addEventListener('click', () => switchBriefLang(btn.dataset.lang));
  });
  document.querySelectorAll('[data-track]').forEach(el => {
    el.addEventListener('click', () => {
      const props = {};
      if (el.dataset.trackKey) props[el.dataset.trackKey] = el.dataset.trackValue;
      track(el.dataset.track, props);
    });
  });

  document.getElementById('videosGrid').addEventListener('click', (e) => {
    const btn = e.target.closest('.play-btn');
    if (btn) playYT(btn.dataset.videoId, btn.closest('.yt-facade'));
  });
  document.getElementById('demoLangTabs').addEventListener('click', (e) => {
    const btn = e.target.closest('.demo-lang-btn');
    if (btn) switchDemoLang(btn.dataset.lang);
  });
  document.getElementById('demoGenreTabs').addEventListener('click', (e) => {
    const btn = e.target.closest('.demo-genre-btn');
    if (btn) switchDemoGenre(btn.dataset.genre);
  });

  buildTicker();
  initCookieBanner();
  buildVideos();
  buildDemos();
  initVideoFilter();
  applyLang(currentLang);
  document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this || e.target.closest('.lb-close')) closeLightbox();
  });
  // Mini player seeks
  document.getElementById('miniBarWrap').addEventListener('click', function(e) {
    const audio = document.getElementById('introAudio');
    if (!audio || !audio.duration) return;
    const rect = this.getBoundingClientRect();
    audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
  });
});

function skipIntro() {
  document.getElementById('intro').classList.add('hidden');
  const a = document.getElementById('introAudio');
  if (a) { a.pause(); a.currentTime = 0; }
  sessionStorage.setItem('introSeen', '1');
  const introEl = document.getElementById('intro');
  introEl.setAttribute('aria-hidden', 'true');
  introEl.querySelectorAll('button, audio').forEach(el => el.setAttribute('tabindex', '-1'));
}

function toggleIntroAudio() {
  const a = document.getElementById('introAudio');
  const btn = document.getElementById('introPlayBtn');
  const ico = document.getElementById('introBtnIcon');
  const svg = document.getElementById('waveSVG');
  if (!a) return;
  const resetUI = () => {
    introPlaying = false;
    btn.classList.remove('playing');
    if (svg) svg.classList.remove('playing');
    ico.innerHTML = '<path d="M1 1.5L13 8L1 14.5V1.5Z" fill="#378ADD"/>';
  };
  a.onerror = resetUI;
  if (introPlaying) {
    a.pause(); resetUI();
  } else {
    a.play().then(() => {
      introPlaying = true;
      btn.classList.add('playing');
      if (svg) svg.classList.add('playing');
      ico.innerHTML = '<rect x="1" y="1" width="4" height="14" fill="white"/><rect x="9" y="1" width="4" height="14" fill="white"/>';
      a.addEventListener('ended', () => {
        resetUI();
        document.getElementById('intro').classList.add('hidden');
        sessionStorage.setItem('introSeen', '1');
      }, { once: true });
    }).catch(resetUI);
  }
}

function toggleMiniAudio() {
  const a = document.getElementById('introAudio');
  const btn = document.getElementById('miniPlayBtn');
  const ico = document.getElementById('miniBtnIcon');
  if (!a) return;
  const resetMini = () => {
    miniPlaying = false;
    btn.classList.remove('playing');
    ico.innerHTML = '<path d="M0 .5L10 6 0 11.5V.5Z" fill="#378ADD"/>';
    document.getElementById('miniBar').style.width = '0%';
  };
  if (miniPlaying) {
    a.pause(); resetMini();
  } else {
    a.play().then(() => {
      miniPlaying = true;
      btn.classList.add('playing');
      ico.innerHTML = '<rect x="0" y="0" width="3" height="12" fill="white"/><rect x="7" y="0" width="3" height="12" fill="white"/>';
      track('demo_played', { lang: 'intro', genre: 'intro_reel' });
      a.ontimeupdate = () => {
        const pct = a.duration ? (a.currentTime / a.duration) * 100 : 0;
        document.getElementById('miniBar').style.width = pct + '%';
      };
      a.onended = () => resetMini();
    }).catch(resetMini);
  }
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  applyLang(lang);
}

function applyLang(lang) {
  const t = i18n[lang]; if (!t) return;
  const html = document.documentElement;
  if (lang === 'ar') {
    html.lang = 'ar'; html.dir = 'rtl';
    document.body.classList.add('rtl');
  } else {
    html.lang = lang; html.dir = 'ltr';
    document.body.classList.remove('rtl');
  }
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    const active = b.dataset.lang === lang;
    b.classList.toggle('active', active);
    b.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  document.documentElement.lang = lang === 'ar' ? 'ar' : lang;
}

function buildTicker() {
  const track = document.getElementById('tickerTrack');
  const doubled = [...LOGOS, ...LOGOS];
  track.innerHTML = doubled.map(n => `<span class="ticker-item">${n}</span>`).join('');
}

function buildVideos() {
  const grid = document.getElementById('videosGrid');
  grid.innerHTML = VIDEOS.map(v => `
    <div class="vid-card" data-lang="${v.lang}">
      <div class="yt-facade" data-videoid="${v.id}">
        <button type="button" class="play-btn" data-video-id="${v.id}" aria-label="Lire la vidéo : ${v.client}">
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M0 .5 12 7 0 13.5V.5Z" fill="#378ADD"/></svg>
        </button>
      </div>
      <span class="vid-badge">${v.lang}</span>
      <div class="vid-overlay">
        <div></div>
        <div class="vid-meta">
          <div>
            <span class="vid-client">${v.client}</span>
            ${v.label ? `<span class="vid-label">${v.label}</span>` : ''}
          </div>
        </div>
      </div>
    </div>`).join('');
}

function playYT(id, facade) {
  const card = facade.closest('.vid-card');
  const v = VIDEOS.find(x => x.id === id);
  if (v) track('video_played', { client: v.client, lang: v.lang });
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`;
  iframe.setAttribute('allow', 'autoplay; encrypted-media; fullscreen');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('loading', 'lazy');
  card.appendChild(iframe);
  facade.style.display = 'none';
  const overlay = card.querySelector('.vid-overlay');
  if (overlay) overlay.style.display = 'none';
  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'yt-toggle-btn'; toggleBtn.type = 'button';
  toggleBtn.setAttribute('aria-label', 'Pause');
  toggleBtn.innerHTML = `
    <svg class="ico-pause" width="14" height="16" viewBox="0 0 14 16" fill="none">
      <rect x="1" y="1" width="4" height="14" rx="1" fill="white"/>
      <rect x="9" y="1" width="4" height="14" rx="1" fill="white"/>
    </svg>
    <svg class="ico-play" style="display:none" width="14" height="16" viewBox="0 0 14 16" fill="none">
      <path d="M1 1.5L13 8L1 14.5V1.5Z" fill="white"/>
    </svg>`;
  let paused = false;
  toggleBtn.addEventListener('click', () => {
    const msg = paused
      ? '{"event":"command","func":"playVideo","args":""}'
      : '{"event":"command","func":"pauseVideo","args":""}';
    iframe.contentWindow.postMessage(msg, '*');
    paused = !paused;
    toggleBtn.querySelector('.ico-pause').style.display = paused ? 'none' : '';
    toggleBtn.querySelector('.ico-play').style.display  = paused ? '' : 'none';
    toggleBtn.setAttribute('aria-label', paused ? 'Lecture' : 'Pause');
    toggleBtn.classList.toggle('is-paused', paused);
  });
  card.appendChild(toggleBtn);
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  const inner = document.getElementById('lbInner');
  lb.classList.remove('open');
  document.body.style.overflow = '';
  inner.innerHTML = `<button type="button" class="lb-close" aria-label="Fermer">✕</button>`;
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

function initVideoFilter() {
  document.querySelectorAll('.vid-filter-btn').forEach(btn => {
    btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');
    btn.addEventListener('click', () => {
      const f = btn.dataset.filter;
      document.querySelectorAll('.vid-filter-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      document.querySelectorAll('.vid-card').forEach(card => {
        card.classList.toggle('hidden', f !== 'all' && card.dataset.lang !== f);
      });
    });
  });
}

function buildDemos() {
  buildDemoLangTabs(); buildDemoGenreTabs(); loadDemoTrack();
  const panel = document.getElementById('demo-tabpanel');
  if (panel) panel.setAttribute('aria-labelledby', `tab-lang-${demoLang}`);
}

function buildDemoLangTabs() {
  document.getElementById('demoLangTabs').innerHTML =
    Object.keys(DEMOS).map(lang =>
      `<button type="button" role="tab" id="tab-lang-${lang}"
        aria-selected="${lang===demoLang?'true':'false'}" aria-controls="demo-tabpanel"
        class="demo-lang-btn${lang===demoLang?' active':''}"
        data-lang="${lang}">${DEMOS[lang].label}</button>`
    ).join('');
}

function buildDemoGenreTabs() {
  document.getElementById('demoGenreTabs').innerHTML =
    DEMOS[demoLang].genres.map(g =>
      `<button type="button" role="tab" id="tab-genre-${g.key}"
        aria-selected="${g.key===demoGenre?'true':'false'}" aria-controls="demo-tabpanel"
        class="demo-genre-btn${g.key===demoGenre?' active':''}"
        data-genre="${g.key}">${g.label}</button>`
    ).join('');
}

function switchDemoLang(lang) {
  demoLang = lang; demoGenre = DEMOS[lang].genres[0].key;
  stopDemoAudio(); buildDemoLangTabs(); buildDemoGenreTabs(); loadDemoTrack();
  const panel = document.getElementById('demo-tabpanel');
  if (panel) panel.setAttribute('aria-labelledby', `tab-lang-${lang}`);
}

function switchDemoGenre(genre) {
  demoGenre = genre; stopDemoAudio(); buildDemoGenreTabs(); loadDemoTrack();
  const panel = document.getElementById('demo-tabpanel');
  if (panel) panel.setAttribute('aria-labelledby', `tab-genre-${genre}`);
}

function loadDemoTrack() {
  const genre = DEMOS[demoLang].genres.find(g => g.key === demoGenre);
  const audio = document.getElementById('demoAudio');
  if (!audio || !genre) return;
  audio.src = genre.src;
  document.getElementById('demoLabel').textContent = DEMOS[demoLang].label + ' · ' + genre.label;
  document.getElementById('demoBar').style.width  = '0%';
  document.getElementById('demoTime').textContent = '0:00 / --:--';
}

function stopDemoAudio() {
  const audio = document.getElementById('demoAudio');
  if (!audio) return;
  audio.pause(); audio.currentTime = 0;
  demoPlaying = false; setDemoPlayIcon(false);
}

function toggleDemoAudio() {
  const audio = document.getElementById('demoAudio');
  if (!audio) return;
  if (demoPlaying) {
    audio.pause(); demoPlaying = false; setDemoPlayIcon(false);
  } else {
    audio.play().then(() => {
      demoPlaying = true; setDemoPlayIcon(true);
      track('demo_played', { lang: demoLang, genre: demoGenre });
      audio.ontimeupdate = () => {
        const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
        document.getElementById('demoBar').style.width  = pct + '%';
        document.getElementById('demoTime').textContent = fmt(audio.currentTime) + ' / ' + fmt(audio.duration);
      };
      audio.onended = () => { demoPlaying = false; setDemoPlayIcon(false); document.getElementById('demoBar').style.width = '0%'; };
    }).catch(() => {});
  }
}

function setDemoPlayIcon(playing) {
  const btn = document.getElementById('demoPlayBtn');
  if (!btn) return;
  btn.classList.toggle('playing', playing);
  btn.querySelector('.icon-play').style.display  = playing ? 'none' : '';
  btn.querySelector('.icon-pause').style.display = playing ? ''     : 'none';
}

// Cookie consent — Consent Mode v2
function dismissCookies(accepted) {
  localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'declined');
  document.getElementById('cookieBanner').classList.remove('visible');
  if (typeof gtag === 'function') {
    gtag('consent', 'update', {
      analytics_storage: accepted ? 'granted' : 'denied'
    });
  }
}

function initCookieBanner() {
  const consent = localStorage.getItem('cookieConsent');
  if (!consent) {
    setTimeout(() => {
      document.getElementById('cookieBanner').classList.add('visible');
    }, 1500);
  } else if (consent === 'accepted' && typeof gtag === 'function') {
    // Consentement déjà accordé lors d'une session précédente
    gtag('consent', 'update', { analytics_storage: 'granted' });
  } else if (consent === 'declined' && typeof gtag === 'function') {
    gtag('consent', 'update', { analytics_storage: 'denied' });
  }
}

function track(event, props) {
  if (typeof gtag === 'function') gtag('event', event, props || {});
}

function seekDemoAudio(e) {
  const audio = document.getElementById('demoAudio');
  if (!audio || !audio.duration) return;
  const rect = e.currentTarget.getBoundingClientRect();
  audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
}

function fmt(s) {
  if (!s || isNaN(s)) return '--:--';
  return Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0');
}

// ─────────────────────────────────────

(function() {
  var currentLang = 'fr';
  window.switchBriefLang = function(lang) {
    currentLang = lang;
    document.querySelectorAll('.brief-lang-btn').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    ['fr','en','ar'].forEach(function(l) {
      var el = document.getElementById('brief-intro-' + l);
      if (el) el.style.display = l === lang ? '' : 'none';
    });
    document.querySelectorAll('.brief-label-fr, .brief-label-en, .brief-label-ar').forEach(function(el) {
      el.style.display = el.classList.contains('brief-label-' + lang) ? '' : 'none';
    });
    document.querySelectorAll('[data-placeholder-' + lang + ']').forEach(function(el) {
      el.placeholder = el.getAttribute('data-placeholder-' + lang);
    });
    var wrapper = document.querySelector('.brief-form-wrapper');
    if (wrapper) wrapper.style.direction = lang === 'ar' ? 'rtl' : 'ltr';
    var hiddenLang = document.getElementById('brief-lang-value');
    if (hiddenLang) hiddenLang.value = lang;
    ['fr','en','ar'].forEach(function(l) {
      var el = document.getElementById('brief-confirm-' + l);
      if (el) el.style.display = l === lang ? '' : 'none';
    });
  };
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
          ['fr','en','ar'].forEach(function(l) {
            var el = document.getElementById('brief-confirm-' + l);
            if (el) el.style.display = l === currentLang ? '' : 'none';
          });
          if (typeof gtag === 'function') gtag('event', 'brief_submitted', { langue: currentLang });
        } else {
          if (btn) btn.disabled = false;
        }
      })
      .catch(function() { if (btn) btn.disabled = false; });
    });
  });
})();
