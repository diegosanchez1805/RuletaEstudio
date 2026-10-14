// Ruleta de Estudio - Lógica Completa, i18n, Temas, Validación y Microinteracciones
(() => {
  // Storage Keys
  const STORAGE_KEY = 'se_roulette_study_data_v1';
  const SOUND_KEY = 'se_roulette_sound_enabled';
  const THEME_KEY = 'se_roulette_theme_pref';
  const LANG_KEY = 'se_roulette_lang_pref';

  // i18n Dictionary
  const translations = {
    es: {
      navSubtitle: 'Ingeniería de Software',
      navWheel: 'Ruleta',
      navStats: 'Progreso',
      navCurriculum: 'Temario (24)',
      navTestimonials: 'Testimonios',
      navContact: 'Contacto',
      btnData: 'Datos JSON',
      btnSpinCTA: '¡Girar!',
      heroBadge: 'Preparación para Entrevistas y Maestría Técnica',
      heroTitlePart1: '¿Qué deberías estudiar hoy?',
      heroTitlePart2: 'Deja que la ruleta decida tu reto.',
      heroSubtitle: 'Elimina la fatiga de decisión. Gira entre 24 áreas críticas de la ingeniería de software con temporizador Pomodoro integrado y registro de progreso automático.',
      shareLabel: 'Compartir con amigos dev:',
      filterAll: 'Todos',
      filterUnstudied: 'Sin estudiar',
      filterLeast: 'Menos repasados',
      weightedLabel: 'Ponderar por olvido',
      spinDisc: 'GIRAR',
      spacebarHint: 'para girar rápidamente',
      mainSpinBtn: '¡GIRAR RULETA!',
      idleTitle: '¡Tu ruleta está lista!',
      idleDesc: 'Haz clic en <strong>GIRAR</strong> o presiona la barra espaciadora para seleccionar al azar un tema de ingeniería de software.',
      pillTopics: '24 temas integrados',
      pillTimer: 'Cronómetro integrado',
      pillStorage: 'Guardado automático',
      suggestedLabel: 'Enfoque sugerido para hoy',
      btnReroll: 'Cambiar',
      subtopicsLabel: 'Subtemas a explorar:',
      timerLabel: 'Temporizador de Enfoque',
      timerStart: 'Iniciar',
      timerPause: 'Pausar',
      btnCompleteStudy: 'Completar Estudio (+1)',
      btnSpinAgain: 'Otro tema',
      statSessions: 'Sesiones totales',
      statCovered: 'Temas cubiertos',
      statPending: 'Por empezar',
      statProgress: 'Progreso global',
      curriculumTitle: 'Temario de Ingeniería de Software',
      curriculumSubtitle: 'Personaliza qué temas entran a la ruleta o inicia una sesión de repaso directo.',
      searchPlaceholder: 'Buscar categoría o subtema...',
      btnToggleAllDeselect: 'Deseleccionar todos',
      btnToggleAllSelect: 'Seleccionar todos',
      ctaBannerBadge: 'Constancia y Repetición Espaciada',
      ctaBannerTitle: '¿Listo para subir de nivel tus habilidades técnicas?',
      ctaBannerDesc: 'Dedicarle solo 25 minutos al día a un tema aleatorio multiplica tus conocimientos en menos de un mes.',
      ctaBannerButton: '¡Girar la ruleta ahora!',
      testimTitle: 'Lo que dicen otros desarrolladores',
      testimSubtitle: 'Estudiantes y profesionales que usan la ruleta para prepararse para entrevistas técnicas y solidificar fundamentos.',
      testim1Quote: '"Siempre procrastinaba decidir qué estudiar entre arquitectura o sistemas operativos. La ruleta me quitó esa duda y hoy superé con éxito mi entrevista técnica para Senior Frontend."',
      testim2Quote: '"El temporizador de 25 minutos y la selección de subtemas es perfecto para hacer sesiones de estudio de alta intensidad sin distracciones."',
      testim3Quote: '"El modo ponderado por olvido es brillante. Me saca los temas que menos he tocado y así mantengo un conocimiento equilibrado en backend y DevOps."',
      contactBadge: 'Buzón de Sugerencias',
      contactTitle: '¿Quieres sugerir nuevos temas o mejoras?',
      contactDesc: 'Este proyecto está pensado para la comunidad de desarrolladores. Si consideras que falta alguna categoría crucial de la ingeniería de software, ¡envíanosla!',
      formName: 'Tu Nombre',
      formEmail: 'Correo Electrónico',
      formType: 'Motivo del mensaje',
      opt1: 'Sugerir un nuevo tema de estudio',
      opt2: 'Comentario sobre la experiencia de usuario',
      opt3: 'Reportar un problema o error',
      opt4: 'Otro asunto',
      formMsg: 'Mensaje o Sugerencia',
      btnSubmit: 'Enviar Mensaje',
      btnSubmitting: 'Enviando...',
      mobileBarTitle: '¿Listo para estudiar?',
      mobileBarDesc: 'Gira la ruleta',
      modalTitle: 'Importar / Exportar Datos JSON',
      modalDesc: 'Puedes respaldar tu historial de estudio o restaurar tus temas pegando el arreglo JSON a continuación:',
      btnCopy: 'Copiar al portapapeles',
      btnRestore: 'Cargar originales',
      btnSaveData: 'Guardar cambios',
      studyTimesSingular: 'Estudiado: 1 vez',
      studyTimesPlural: 'Estudiado: {n} veces',
      neverStudied: '¡Nunca antes estudiado! Excelente momento para comenzar.',
      lastStudied: 'Último repaso: {date}',
      toastStudySuccess: '¡Sesión de estudio registrada (+1)!',
      toastContactSuccess: '¡Mensaje enviado con éxito! Gracias por tu retroalimentación.',
      toastEmptyFilter: 'No hay temas en el filtro seleccionado.',
      timerFinishedAlert: '⏰ ¡Tiempo de estudio completado! Excelente sesión de concentración.'
    },
    en: {
      navSubtitle: 'Software Engineering',
      navWheel: 'Roulette',
      navStats: 'Progress',
      navCurriculum: 'Curriculum (24)',
      navTestimonials: 'Testimonials',
      navContact: 'Contact',
      btnData: 'JSON Data',
      btnSpinCTA: 'Spin now!',
      heroBadge: 'Interview Prep & Technical Mastery',
      heroTitlePart1: 'What should you study today?',
      heroTitlePart2: 'Let the wheel pick your challenge.',
      heroSubtitle: 'Eliminate decision fatigue. Spin across 24 critical software engineering domains with built-in Pomodoro focus timer and automatic progress tracking.',
      shareLabel: 'Share with dev peers:',
      filterAll: 'All',
      filterUnstudied: 'Unstudied',
      filterLeast: 'Least reviewed',
      weightedLabel: 'Spaced repetition weight',
      spinDisc: 'SPIN',
      spacebarHint: 'to spin immediately',
      mainSpinBtn: 'SPIN WHEEL!',
      idleTitle: 'Your wheel is ready!',
      idleDesc: 'Click <strong>SPIN</strong> or press the spacebar to pick a random software engineering topic.',
      pillTopics: '24 built-in topics',
      pillTimer: 'Built-in focus timer',
      pillStorage: 'Auto local save',
      suggestedLabel: 'Suggested focus for today',
      btnReroll: 'Reroll',
      subtopicsLabel: 'Subtopics to explore:',
      timerLabel: 'Focus Timer',
      timerStart: 'Start',
      timerPause: 'Pause',
      btnCompleteStudy: 'Mark as Studied (+1)',
      btnSpinAgain: 'Another topic',
      statSessions: 'Total sessions',
      statCovered: 'Topics covered',
      statPending: 'Pending',
      statProgress: 'Global progress',
      curriculumTitle: 'Software Engineering Curriculum',
      curriculumSubtitle: 'Customize which topics appear on the wheel or start a direct study session.',
      searchPlaceholder: 'Search category or subtopic...',
      btnToggleAllDeselect: 'Deselect all',
      btnToggleAllSelect: 'Select all',
      ctaBannerBadge: 'Consistency & Spaced Repetition',
      ctaBannerTitle: 'Ready to level up your engineering skills?',
      ctaBannerDesc: 'Spending just 25 minutes a day on a random topic multiplies your knowledge in under a month.',
      ctaBannerButton: 'Spin the wheel now!',
      testimTitle: 'Loved by fellow developers',
      testimSubtitle: 'Students and software engineers who use the roulette to prepare for system design, coding interviews and technical mastery.',
      testim1Quote: '"I used to procrastinate choosing between distributed systems and operating systems. The roulette solved that, and today I passed my Senior Frontend interview!"',
      testim2Quote: '"The 25-minute timer and subtopic suggestion are perfect for high-intensity, distraction-free study sessions."',
      testim3Quote: '"The spaced-repetition weighting mode is brilliant. It surfaces topics I haven\'t reviewed in a while, keeping my knowledge balanced."',
      contactBadge: 'Feedback & Suggestions',
      contactTitle: 'Have topics or improvements to suggest?',
      contactDesc: 'This project is built for the developer community. If you think an essential software engineering area is missing, let us know!',
      formName: 'Your Name',
      formEmail: 'Email Address',
      formType: 'Message Subject',
      opt1: 'Suggest a new study topic',
      opt2: 'User experience feedback',
      opt3: 'Report a bug or issue',
      opt4: 'Other inquiry',
      formMsg: 'Message or Suggestion',
      btnSubmit: 'Send Message',
      btnSubmitting: 'Sending...',
      mobileBarTitle: 'Ready to study?',
      mobileBarDesc: 'Spin the wheel',
      modalTitle: 'Import / Export JSON Data',
      modalDesc: 'Back up your study history or restore topics by pasting the JSON array below:',
      btnCopy: 'Copy to clipboard',
      btnRestore: 'Load originals',
      btnSaveData: 'Save changes',
      studyTimesSingular: 'Studied: 1 time',
      studyTimesPlural: 'Studied: {n} times',
      neverStudied: 'Never studied before! Great time to start.',
      lastStudied: 'Last reviewed: {date}',
      toastStudySuccess: 'Study session recorded (+1)!',
      toastContactSuccess: 'Message sent successfully! Thanks for your feedback.',
      toastEmptyFilter: 'No topics in the current filter.',
      timerFinishedAlert: '⏰ Focus time finished! Excellent study session.'
    }
  };

  // State
  let currentLang = 'es';
  let currentTheme = 'dark';
  let topics = [];
  let enabledIds = new Set();
  let currentFilter = 'all'; // 'all', 'unstudied', 'least'
  let isWeighted = false;
  let isSoundEnabled = true;
  let isSpinning = false;
  let currentRotation = 0;
  let currentWinner = null;
  let timerInterval = null;
  let timerSecondsLeft = 15 * 60;
  let timerInitialSeconds = 15 * 60;
  let isTimerRunning = false;

  // Canvas
  const canvas = document.getElementById('wheelCanvas');
  const ctx = canvas.getContext('2d');
  const pointerEl = document.getElementById('wheelPointer');

  // DOM Elements
  const loadingScreen = document.getElementById('loadingScreen');
  const toastContainer = document.getElementById('toastContainer');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const mobileStickyCta = document.getElementById('mobileStickyCta');

  // Nav & Header Controls
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langLabel = document.getElementById('langLabel');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  const soundIcon = document.getElementById('soundIcon');
  
  // Mobile Nav Drawer
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenuIcon = document.getElementById('mobileMenuIcon');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileThemeBtn = document.getElementById('mobileThemeBtn');
  const mobileLangBtn = document.getElementById('mobileLangBtn');
  const mobileLangLabel = document.getElementById('mobileLangLabel');
  const mobileSoundBtn = document.getElementById('mobileSoundBtn');
  const mobileSoundIcon = document.getElementById('mobileSoundIcon');
  const mobileDataBtn = document.getElementById('mobileDataBtn');

  // Wheel Elements
  const centerSpinBtn = document.getElementById('centerSpinBtn');
  const mainSpinBtn = document.getElementById('mainSpinBtn');
  const weightedToggle = document.getElementById('weightedToggle');
  const filterBtns = document.querySelectorAll('.filter-btn');

  // Stats Elements
  const statTotalSessions = document.getElementById('statTotalSessions');
  const statCoveredTopics = document.getElementById('statCoveredTopics');
  const statPendingTopics = document.getElementById('statPendingTopics');
  const statPercentProgress = document.getElementById('statPercentProgress');
  const countAll = document.getElementById('countAll');
  const countUnstudied = document.getElementById('countUnstudied');

  // Active Card Elements
  const studyIdleState = document.getElementById('studyIdleState');
  const studyActiveState = document.getElementById('studyActiveState');
  const cardCategoryBadge = document.getElementById('cardCategoryBadge');
  const cardCategoryTitle = document.getElementById('cardCategoryTitle');
  const cardStudyTimes = document.getElementById('cardStudyTimes');
  const cardLastDate = document.getElementById('cardLastDate');
  const suggestedSubtopicText = document.getElementById('suggestedSubtopicText');
  const subtopicsChecklist = document.getElementById('subtopicsChecklist');
  const btnRerollSubtopic = document.getElementById('btnRerollSubtopic');
  const btnMarkStudied = document.getElementById('btnMarkStudied');
  const btnSpinAgain = document.getElementById('btnSpinAgain');

  // Focus Timer Elements
  const timerDisplay = document.getElementById('timerDisplay');
  const btnTimerToggle = document.getElementById('btnTimerToggle');
  const timerPlayIcon = document.getElementById('timerPlayIcon');
  const timerPlayText = document.getElementById('timerPlayText');
  const btnTimerReset = document.getElementById('btnTimerReset');
  const timerPresets = document.querySelectorAll('.timer-preset');

  // Topics Grid & Search
  const topicsGrid = document.getElementById('topicsGrid');
  const searchInput = document.getElementById('searchInput');
  const btnToggleAllTopics = document.getElementById('btnToggleAllTopics');

  // Contact Form Elements
  const contactForm = document.getElementById('contactForm');
  const btnSubmitContact = document.getElementById('btnSubmitContact');
  const submitIcon = document.getElementById('submitIcon');
  const submitText = document.getElementById('submitText');

  // JSON Modal Elements
  const dataModal = document.getElementById('dataModal');
  const btnOpenDataModal = document.getElementById('btnOpenDataModal');
  const btnCloseDataModal = document.getElementById('btnCloseDataModal');
  const jsonDataTextarea = document.getElementById('jsonDataTextarea');
  const btnCopyJson = document.getElementById('btnCopyJson');
  const btnRestoreInitial = document.getElementById('btnRestoreInitial');
  const btnSaveJson = document.getElementById('btnSaveJson');

  // Web Audio Context Synthesizer
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playTickSound() {
    if (!isSoundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(450 + Math.random() * 80, ctx.currentTime);
      gain.gain.setValueAtTime(0.07, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.045);
    } catch (e) {}
  }

  function playWinSound() {
    if (!isSoundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const notes = [440, 554.37, 659.25, 880];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.1);
        gain.gain.setValueAtTime(0.12, ctx.currentTime + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.1 + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.1);
        osc.stop(ctx.currentTime + idx * 0.1 + 0.38);
      });
    } catch (e) {}
  }

  function playBellSound() {
    if (!isSoundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.2);
    } catch (e) {}
  }

  // Toast Notification System
  function showToast(type = 'info', title = '', message = '', duration = 4000) {
    const toast = document.createElement('div');
    toast.className = 'toast interactive-hover';

    let iconHtml = '<i class="fa-solid fa-circle-info text-sky-400 text-lg"></i>';
    if (type === 'success') {
      iconHtml = '<i class="fa-solid fa-circle-check text-emerald-400 text-lg"></i>';
    } else if (type === 'error') {
      iconHtml = '<i class="fa-solid fa-circle-xmark text-rose-400 text-lg"></i>';
    }

    toast.innerHTML = `
      <div class="flex-shrink-0">${iconHtml}</div>
      <div class="flex-grow">
        ${title ? `<div class="font-bold text-xs text-white">${title}</div>` : ''}
        <div class="text-[11px] text-slate-300 leading-snug">${message}</div>
      </div>
      <button class="text-slate-400 hover:text-white text-xs p-1" onclick="this.parentElement.remove()">&times;</button>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-hiding');
      setTimeout(() => toast.remove(), 250);
    }, duration);
  }

  // i18n Translation Handler
  function t(key, replacements = {}) {
    let str = (translations[currentLang] && translations[currentLang][key]) || translations['es'][key] || key;
    Object.keys(replacements).forEach(k => {
      str = str.replace(`{${k}}`, replacements[k]);
    });
    return str;
  }

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    langLabel.textContent = lang.toUpperCase();
    mobileLangLabel.textContent = `Idioma: ${lang.toUpperCase()}`;

    // Translate all static data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    // Update dynamic text
    if (currentWinner) {
      displayStudyCard(currentWinner);
    }
    updateStats();
    renderTopicsGrid(searchInput.value);
    drawWheel();
  }

  // Theme Handler (Dark / Light)
  function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem(THEME_KEY, theme);
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);

    if (theme === 'dark') {
      root.classList.add('dark');
      themeIcon.className = 'fa-solid fa-moon text-amber-300';
      mobileThemeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
      root.classList.remove('dark');
      themeIcon.className = 'fa-solid fa-sun text-amber-500';
      mobileThemeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
    drawWheel();
  }

  // Data Loading & Persistence
  const COLOR_PALETTE = [
    '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6',
    '#EC4899', '#06B6D4', '#14B8A6', '#F97316', '#EAB308',
    '#6366F1', '#84CC16', '#D946EF', '#0284C7', '#0D9488',
    '#7C3AED', '#DC2626', '#EA580C', '#4F46E5', '#9333EA',
    '#059669', '#475569', '#16A34A', '#2563EB'
  ];

  function loadData() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        topics = JSON.parse(saved);
      } catch (e) {
        topics = JSON.parse(JSON.stringify(INITIAL_TOPICS));
      }
    } else {
      topics = JSON.parse(JSON.stringify(INITIAL_TOPICS));
    }

    topics.forEach((t, i) => {
      if (!t.color) t.color = COLOR_PALETTE[i % COLOR_PALETTE.length];
      if (typeof t.vecesEstudiado !== 'number') t.vecesEstudiado = 0;
      if (!t.subtemas) t.subtemas = [];
    });

    enabledIds = new Set(topics.map(t => t.id));

    // Sound
    const soundPref = localStorage.getItem(SOUND_KEY);
    if (soundPref !== null) {
      isSoundEnabled = soundPref === 'true';
    }
    updateSoundUI();

    // Theme
    const themePref = localStorage.getItem(THEME_KEY) || 'dark';
    applyTheme(themePref);

    // Lang
    const langPref = localStorage.getItem(LANG_KEY) || 'es';
    applyLanguage(langPref);
  }

  function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(topics));
    updateStats();
    renderTopicsGrid(searchInput.value);
    drawWheel();
  }

  function updateSoundUI() {
    if (isSoundEnabled) {
      soundIcon.className = 'fa-solid fa-volume-high text-indigo-400';
      mobileSoundIcon.className = 'fa-solid fa-volume-high text-indigo-400';
      soundToggleBtn.classList.remove('opacity-60');
    } else {
      soundIcon.className = 'fa-solid fa-volume-xmark text-slate-500';
      mobileSoundIcon.className = 'fa-solid fa-volume-xmark text-slate-500';
      soundToggleBtn.classList.add('opacity-60');
    }
  }

  function getActiveTopics() {
    let filtered = topics.filter(t => enabledIds.has(t.id));

    if (currentFilter === 'unstudied') {
      filtered = filtered.filter(t => t.vecesEstudiado === 0);
    } else if (currentFilter === 'least') {
      if (filtered.length > 0) {
        const minCount = Math.min(...filtered.map(t => t.vecesEstudiado));
        filtered = filtered.filter(t => t.vecesEstudiado <= minCount + 1);
      }
    }
    return filtered;
  }

  // Draw Roulette Wheel
  function drawWheel() {
    const active = getActiveTopics();
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = width / 2 - 25;

    ctx.clearRect(0, 0, width, height);

    if (active.length === 0) {
      ctx.save();
      ctx.fillStyle = currentTheme === 'dark' ? '#1e293b' : '#e2e8f0';
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.strokeStyle = currentTheme === 'dark' ? '#334155' : '#cbd5e1';
      ctx.lineWidth = 10;
      ctx.stroke();

      ctx.fillStyle = currentTheme === 'dark' ? '#94a3b8' : '#64748b';
      ctx.font = 'bold 28px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(t('toastEmptyFilter'), centerX, centerY);
      ctx.restore();
      return;
    }

    const totalSegments = active.length;
    const arcSize = (2 * Math.PI) / totalSegments;

    // Outer wheel border & glowing shadow
    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius + 10, 0, 2 * Math.PI);
    ctx.fillStyle = currentTheme === 'dark' ? '#0f172a' : '#ffffff';
    ctx.fill();
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.restore();

    // Slices
    for (let i = 0; i < totalSegments; i++) {
      const topic = active[i];
      const startAngle = currentRotation + i * arcSize;
      const endAngle = startAngle + arcSize;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();

      ctx.fillStyle = topic.color || COLOR_PALETTE[i % COLOR_PALETTE.length];
      ctx.fill();

      ctx.strokeStyle = 'rgba(15, 23, 42, 0.45)';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Text label inside slice
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(startAngle + arcSize / 2);
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';

      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.85)';
      ctx.shadowBlur = 4;

      const fontSize = totalSegments > 18 ? 15 : totalSegments > 12 ? 17 : 21;
      ctx.font = `600 ${fontSize}px "Plus Jakarta Sans", sans-serif`;

      let label = topic.categoria;
      const maxCharLength = totalSegments > 18 ? 32 : 36;
      if (label.length > maxCharLength) {
        label = label.substring(0, maxCharLength - 1) + '…';
      }

      ctx.fillText(label, radius - 24, 0);

      // Star badge if studied
      if (topic.vecesEstudiado > 0) {
        ctx.fillStyle = '#fef08a';
        ctx.font = `bold 12px "JetBrains Mono", monospace`;
        ctx.fillText(`★${topic.vecesEstudiado}`, radius - 8, 14);
      }

      ctx.restore();
      ctx.restore();
    }

    // Outer pegs
    for (let i = 0; i < totalSegments; i++) {
      const angle = currentRotation + i * arcSize;
      const pegX = centerX + Math.cos(angle) * (radius + 2);
      const pegY = centerY + Math.sin(angle) * (radius + 2);

      ctx.save();
      ctx.beginPath();
      ctx.arc(pegX, pegY, 4, 0, 2 * Math.PI);
      ctx.fillStyle = '#f8fafc';
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.restore();
    }

    // Central hub ring
    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, 52, 0, 2 * Math.PI);
    ctx.fillStyle = currentTheme === 'dark' ? '#0f172a' : '#f8fafc';
    ctx.fill();
    ctx.strokeStyle = currentTheme === 'dark' ? '#1e293b' : '#cbd5e1';
    ctx.lineWidth = 6;
    ctx.stroke();
    ctx.restore();
  }

  // Spin Roulette
  function spinRoulette() {
    if (isSpinning) return;
    const active = getActiveTopics();
    if (active.length === 0) {
      showToast('error', 'Error', t('toastEmptyFilter'));
      return;
    }

    getAudioContext();

    isSpinning = true;
    centerSpinBtn.disabled = true;
    mainSpinBtn.disabled = true;

    // Pick target topic
    let targetIndex;
    if (isWeighted) {
      const weights = active.map(t => Math.max(1, 10 - Math.min(9, t.vecesEstudiado)));
      const totalWeight = weights.reduce((sum, w) => sum + w, 0);
      let rand = Math.random() * totalWeight;
      targetIndex = 0;
      for (let i = 0; i < weights.length; i++) {
        if (rand < weights[i]) {
          targetIndex = i;
          break;
        }
        rand -= weights[i];
      }
    } else {
      targetIndex = Math.floor(Math.random() * active.length);
    }

    const totalSegments = active.length;
    const arcSize = (2 * Math.PI) / totalSegments;
    const pointerAngle = (3 * Math.PI) / 2; // 12 o'clock

    const minTurns = 5;
    const extraTurns = Math.floor(Math.random() * 3) + minTurns;
    const targetSliceMidAngle = targetIndex * arcSize + arcSize / 2;
    const randomOffsetInSegment = (Math.random() - 0.5) * (arcSize * 0.7);

    let targetRotation = extraTurns * 2 * Math.PI + (pointerAngle - targetSliceMidAngle - randomOffsetInSegment);
    while (targetRotation <= currentRotation) {
      targetRotation += 2 * Math.PI;
    }

    const startRotation = currentRotation;
    const totalDistance = targetRotation - startRotation;
    const duration = 4800;
    const startTime = performance.now();

    let lastTickAngle = startRotation;
    let pointerTickTimeout = null;

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3.5);

      currentRotation = startRotation + totalDistance * ease;
      drawWheel();

      const anglePassed = Math.abs(currentRotation - lastTickAngle);
      if (anglePassed >= arcSize) {
        playTickSound();
        lastTickAngle = currentRotation;

        pointerEl.classList.add('tick');
        clearTimeout(pointerTickTimeout);
        pointerTickTimeout = setTimeout(() => {
          pointerEl.classList.remove('tick');
        }, 60);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        isSpinning = false;
        centerSpinBtn.disabled = false;
        mainSpinBtn.disabled = false;
        pointerEl.classList.remove('tick');

        const normalizedAngle = (pointerAngle - (currentRotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
        const finalIndex = Math.floor(normalizedAngle / arcSize) % totalSegments;
        const winner = active[finalIndex];

        onSpinComplete(winner);
      }
    }

    requestAnimationFrame(animate);
  }

  // Complete spin & show study card
  function onSpinComplete(topic) {
    currentWinner = topic;
    playWinSound();

    if (typeof confetti === 'function') {
      confetti({
        particleCount: 75,
        spread: 80,
        origin: { y: 0.6 }
      });
    }

    displayStudyCard(topic);
  }

  // Display Study Card
  function displayStudyCard(topic) {
    studyIdleState.classList.add('hidden');
    studyActiveState.classList.remove('hidden');

    cardCategoryBadge.textContent = `#${topic.id}`;
    cardCategoryBadge.style.backgroundColor = topic.color || '#6366f1';
    cardCategoryTitle.textContent = topic.categoria;

    if (topic.vecesEstudiado === 1) {
      cardStudyTimes.textContent = t('studyTimesSingular');
    } else {
      cardStudyTimes.textContent = t('studyTimesPlural', { n: topic.vecesEstudiado });
    }

    if (topic.ultimaFecha) {
      cardLastDate.innerHTML = `<i class="fa-regular fa-calendar-check text-emerald-400"></i> ${t('lastStudied', { date: topic.ultimaFecha })}`;
    } else {
      cardLastDate.innerHTML = `<i class="fa-regular fa-clock text-amber-400"></i> <span class="text-amber-300">${t('neverStudied')}</span>`;
    }

    pickSuggestedSubtopic(topic);

    // Checklist
    subtopicsChecklist.innerHTML = '';
    topic.subtemas.forEach((sub) => {
      const item = document.createElement('label');
      item.className = 'flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 cursor-pointer transition text-xs interactive-hover';
      item.innerHTML = `
        <input type="checkbox" class="w-4 h-4 rounded border-slate-700 text-indigo-600 focus:ring-indigo-500 bg-slate-800">
        <span class="text-slate-300 font-medium">${sub}</span>
      `;
      subtopicsChecklist.appendChild(item);
    });

    resetTimer();
  }

  function pickSuggestedSubtopic(topic) {
    if (!topic || !topic.subtemas || topic.subtemas.length === 0) {
      suggestedSubtopicText.textContent = topic ? topic.categoria : '';
      return;
    }
    const rand = topic.subtemas[Math.floor(Math.random() * topic.subtemas.length)];
    suggestedSubtopicText.textContent = rand;
  }

  function markTopicStudied(topicId) {
    const topic = topics.find(t => t.id === topicId);
    if (!topic) return;

    topic.vecesEstudiado = (topic.vecesEstudiado || 0) + 1;
    
    const now = new Date();
    const dateFormatted = now.toLocaleDateString(currentLang === 'es' ? 'es-ES' : 'en-US', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    }) + ', ' + now.toLocaleTimeString(currentLang === 'es' ? 'es-ES' : 'en-US', { hour: '2-digit', minute: '2-digit' });

    topic.ultimaFecha = dateFormatted;
    saveData();

    if (currentWinner && currentWinner.id === topicId) {
      displayStudyCard(topic);
    }

    if (typeof confetti === 'function') {
      confetti({ particleCount: 110, spread: 85, origin: { y: 0.5 } });
    }

    showToast('success', topic.categoria, t('toastStudySuccess'));
    playWinSound();
  }

  // Update Statistics
  function updateStats() {
    const totalSessions = topics.reduce((acc, t) => acc + (t.vecesEstudiado || 0), 0);
    const coveredCount = topics.filter(t => (t.vecesEstudiado || 0) > 0).length;
    const pendingCount = topics.length - coveredCount;
    const percent = Math.round((coveredCount / topics.length) * 100);

    statTotalSessions.textContent = totalSessions;
    statCoveredTopics.textContent = coveredCount;
    statPendingTopics.textContent = pendingCount;
    statPercentProgress.textContent = `${percent}%`;

    countAll.textContent = topics.length;
    countUnstudied.textContent = pendingCount;
  }

  // Render Curriculum Topics Grid
  function renderTopicsGrid(searchQuery = '') {
    topicsGrid.innerHTML = '';
    const q = searchQuery.trim().toLowerCase();

    const filtered = topics.filter(t => {
      if (!q) return true;
      if (t.categoria.toLowerCase().includes(q)) return true;
      return t.subtemas.some(s => s.toLowerCase().includes(q));
    });

    if (filtered.length === 0) {
      topicsGrid.innerHTML = `
        <div class="col-span-full py-12 text-center text-slate-500">
          <i class="fa-solid fa-magnifying-glass text-2xl mb-2"></i>
          <p class="text-sm">No se encontraron temas con "${searchQuery}"</p>
        </div>
      `;
      return;
    }

    filtered.forEach(topic => {
      const isEnabled = enabledIds.has(topic.id);
      const card = document.createElement('div');
      card.className = `p-4 rounded-2xl border transition-all interactive-hover ${
        isEnabled 
          ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700' 
          : 'bg-slate-950/40 border-slate-900 opacity-60'
      }`;

      card.innerHTML = `
        <div class="flex items-start justify-between gap-2 mb-2">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full flex-shrink-0 shadow-sm" style="background-color: ${topic.color}"></span>
            <h3 class="font-bold text-sm text-white">${topic.categoria}</h3>
          </div>
          <label class="relative inline-flex items-center cursor-pointer" title="Incluir en la ruleta">
            <input type="checkbox" class="sr-only peer topic-wheel-toggle" data-id="${topic.id}" ${isEnabled ? 'checked' : ''}>
            <div class="w-7 h-4 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-indigo-600"></div>
          </label>
        </div>

        <div class="text-[11px] text-slate-400 mb-3 flex items-center justify-between">
          <span>Estudiado: <strong class="text-slate-200">${topic.vecesEstudiado} veces</strong></span>
          <span class="text-slate-500">${topic.ultimaFecha || 'Sin estudiar'}</span>
        </div>

        <div class="flex flex-wrap gap-1.5 mb-3">
          ${topic.subtemas.map(sub => `
            <span class="px-2 py-0.5 rounded-md bg-slate-800 text-[10px] text-slate-300 border border-slate-700/50">
              ${sub}
            </span>
          `).join('')}
        </div>

        <div class="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
          <button class="btn-direct-study btn-micro text-xs px-2.5 py-1 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 hover:text-white transition flex items-center gap-1.5" data-id="${topic.id}">
            <i class="fa-solid fa-book-open"></i> Estudiar
          </button>
          
          <button class="btn-increment-count btn-micro px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition" data-id="${topic.id}" title="Añadir repaso manual (+1)">
            +1
          </button>
        </div>
      `;

      topicsGrid.appendChild(card);
    });

    // Grid Event listeners
    document.querySelectorAll('.topic-wheel-toggle').forEach(input => {
      input.addEventListener('change', (e) => {
        const id = parseInt(e.target.dataset.id, 10);
        if (e.target.checked) enabledIds.add(id);
        else enabledIds.delete(id);
        drawWheel();
      });
    });

    document.querySelectorAll('.btn-direct-study').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.currentTarget.dataset.id, 10);
        const topic = topics.find(t => t.id === id);
        if (topic) {
          displayStudyCard(topic);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });

    document.querySelectorAll('.btn-increment-count').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.currentTarget.dataset.id, 10);
        markTopicStudied(id);
      });
    });
  }

  // Timer Implementation
  function formatTime(totalSeconds) {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  function updateTimerDisplay() {
    timerDisplay.textContent = formatTime(timerSecondsLeft);
  }

  function startTimer() {
    if (isTimerRunning) return;
    isTimerRunning = true;
    timerPlayIcon.className = 'fa-solid fa-pause';
    timerPlayText.textContent = t('timerPause');
    btnTimerToggle.classList.remove('bg-indigo-600', 'hover:bg-indigo-500');
    btnTimerToggle.classList.add('bg-amber-600', 'hover:bg-amber-500');

    timerInterval = setInterval(() => {
      if (timerSecondsLeft > 0) {
        timerSecondsLeft--;
        updateTimerDisplay();
      } else {
        stopTimer();
        playBellSound();
        showToast('info', 'Pomodoro', t('timerFinishedAlert'));
      }
    }, 1000);
  }

  function stopTimer() {
    isTimerRunning = false;
    clearInterval(timerInterval);
    timerInterval = null;
    timerPlayIcon.className = 'fa-solid fa-play';
    timerPlayText.textContent = t('timerStart');
    btnTimerToggle.classList.add('bg-indigo-600', 'hover:bg-indigo-500');
    btnTimerToggle.classList.remove('bg-amber-600', 'hover:bg-amber-500');
  }

  function resetTimer() {
    stopTimer();
    timerSecondsLeft = timerInitialSeconds;
    updateTimerDisplay();
  }

  // Contact Form Validation & Submission
  function initContactForm() {
    if (!contactForm) return;
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const msgInput = document.getElementById('contactMessage');

    function validateField(input, condition) {
      const errorMsg = input.closest('div').parentElement.querySelector('.field-error-msg');
      const icon = input.parentElement.querySelector('.field-icon');
      if (!condition) {
        input.classList.add('input-error');
        if (errorMsg) errorMsg.classList.remove('hidden');
        if (icon) icon.classList.remove('hidden');
        return false;
      } else {
        input.classList.remove('input-error');
        if (errorMsg) errorMsg.classList.add('hidden');
        if (icon) icon.classList.add('hidden');
        return true;
      }
    }

    nameInput.addEventListener('blur', () => {
      validateField(nameInput, nameInput.value.trim().length >= 2);
    });

    emailInput.addEventListener('blur', () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      validateField(emailInput, emailRegex.test(emailInput.value.trim()));
    });

    msgInput.addEventListener('blur', () => {
      validateField(msgInput, msgInput.value.trim().length >= 10);
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateField(nameInput, nameInput.value.trim().length >= 2);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isEmailValid = validateField(emailInput, emailRegex.test(emailInput.value.trim()));
      const isMsgValid = validateField(msgInput, msgInput.value.trim().length >= 10);

      if (!isNameValid || !isEmailValid || !isMsgValid) {
        contactForm.classList.add('shake');
        setTimeout(() => contactForm.classList.remove('shake'), 450);
        showToast('error', 'Formulario', 'Por favor corrige los campos señalados en rojo.');
        return;
      }

      // Simulate sending
      btnSubmitContact.disabled = true;
      submitIcon.className = 'fa-solid fa-spinner animate-spin';
      submitText.textContent = t('btnSubmitting');

      setTimeout(() => {
        btnSubmitContact.disabled = false;
        submitIcon.className = 'fa-solid fa-paper-plane';
        submitText.textContent = t('btnSubmit');
        contactForm.reset();

        showToast('success', '¡Enviado!', t('toastContactSuccess'));
        playWinSound();
      }, 900);
    });
  }

  // Scroll Animations & Back to Top
  function initScrollFeatures() {
    // Reveal on scroll
    const reveals = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));

    // Back to top & Mobile Sticky CTA visibility
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      if (scrollY > 350) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }

      if (scrollY > 500) {
        mobileStickyCta.classList.add('is-active');
      } else {
        mobileStickyCta.classList.remove('is-active');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Social Share Helpers
  window.shareOnTwitter = () => {
    const text = currentWinner 
      ? `🎯 ¡Hoy me toca estudiar "${currentWinner.categoria}" con la Ruleta de Ingeniería de Software! ¿Qué vas a estudiar tú hoy?` 
      : '🎯 Descubre qué tema de ingeniería de software estudiar hoy con esta Ruleta interactiva!';
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  window.shareOnLinkedIn = () => {
    const url = window.location.href;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  };

  window.shareOnWhatsApp = () => {
    const text = currentWinner 
      ? `🎯 ¡Hoy me toca estudiar "${currentWinner.categoria}" en la Ruleta de Ingeniería de Software! ${window.location.href}` 
      : `🎯 Te reto a girar la Ruleta de Ingeniería de Software para estudiar hoy: ${window.location.href}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  // Global CTA helper
  window.triggerSpinFromCTA = (e) => {
    if (e) e.preventDefault();
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
      spinRoulette();
    }, 350);
  };

  // Setup Event Listeners
  function setupEventListeners() {
    // Spin Buttons
    centerSpinBtn.addEventListener('click', spinRoulette);
    mainSpinBtn.addEventListener('click', spinRoulette);
    btnSpinAgain.addEventListener('click', spinRoulette);

    // Spacebar to spin
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        spinRoulette();
      }
    });

    // Theme Switchers
    themeToggleBtn.addEventListener('click', () => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });

    mobileThemeBtn.addEventListener('click', () => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });

    // Language Switchers
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'es' ? 'en' : 'es';
      applyLanguage(nextLang);
    });

    mobileLangBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'es' ? 'en' : 'es';
      applyLanguage(nextLang);
    });

    // Sound Switchers
    soundToggleBtn.addEventListener('click', () => {
      isSoundEnabled = !isSoundEnabled;
      localStorage.setItem(SOUND_KEY, isSoundEnabled);
      updateSoundUI();
      if (isSoundEnabled) playTickSound();
    });

    mobileSoundBtn.addEventListener('click', () => {
      isSoundEnabled = !isSoundEnabled;
      localStorage.setItem(SOUND_KEY, isSoundEnabled);
      updateSoundUI();
      if (isSoundEnabled) playTickSound();
    });

    // Mobile Hamburger Menu
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileDrawer.classList.contains('hidden');
      if (isHidden) {
        mobileDrawer.classList.remove('hidden');
        mobileMenuIcon.className = 'fa-solid fa-xmark';
      } else {
        mobileDrawer.classList.add('hidden');
        mobileMenuIcon.className = 'fa-solid fa-bars';
      }
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.add('hidden');
        mobileMenuIcon.className = 'fa-solid fa-bars';
      });
    });

    // Weighted toggle
    weightedToggle.addEventListener('change', (e) => {
      isWeighted = e.target.checked;
    });

    // Filter Buttons
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => {
          b.classList.remove('bg-indigo-600', 'text-white');
          b.classList.add('text-slate-400');
        });
        e.currentTarget.classList.add('bg-indigo-600', 'text-white');
        e.currentTarget.classList.remove('text-slate-400');
        currentFilter = e.currentTarget.dataset.filter;
        drawWheel();
      });
    });

    // Card Actions
    btnRerollSubtopic.addEventListener('click', () => {
      if (currentWinner) pickSuggestedSubtopic(currentWinner);
    });

    btnMarkStudied.addEventListener('click', () => {
      if (currentWinner) {
        markTopicStudied(currentWinner.id);
      }
    });

    // Timer Controls
    btnTimerToggle.addEventListener('click', () => {
      getAudioContext();
      if (isTimerRunning) stopTimer();
      else startTimer();
    });

    btnTimerReset.addEventListener('click', resetTimer);

    timerPresets.forEach(preset => {
      preset.addEventListener('click', (e) => {
        timerPresets.forEach(p => p.classList.remove('active', 'bg-slate-700', 'text-white'));
        e.currentTarget.classList.add('active', 'bg-slate-700', 'text-white');
        const mins = parseInt(e.currentTarget.dataset.mins, 10);
        timerInitialSeconds = mins * 60;
        resetTimer();
      });
    });

    // Search input
    searchInput.addEventListener('input', (e) => {
      renderTopicsGrid(e.target.value);
    });

    // Toggle All Topics
    btnToggleAllTopics.addEventListener('click', () => {
      if (enabledIds.size === topics.length) {
        enabledIds.clear();
        btnToggleAllTopics.textContent = t('btnToggleAllSelect');
      } else {
        enabledIds = new Set(topics.map(t => t.id));
        btnToggleAllTopics.textContent = t('btnToggleAllDeselect');
      }
      drawWheel();
      renderTopicsGrid(searchInput.value);
    });

    // Modal: Data Import / Export
    const openModal = () => {
      jsonDataTextarea.value = JSON.stringify(topics, null, 2);
      dataModal.classList.remove('hidden');
      dataModal.classList.add('flex');
    };

    btnOpenDataModal.addEventListener('click', openModal);
    mobileDataBtn.addEventListener('click', () => {
      mobileDrawer.classList.add('hidden');
      mobileMenuIcon.className = 'fa-solid fa-bars';
      openModal();
    });

    btnCloseDataModal.addEventListener('click', () => {
      dataModal.classList.add('hidden');
      dataModal.classList.remove('flex');
    });

    dataModal.addEventListener('click', (e) => {
      if (e.target === dataModal) {
        dataModal.classList.add('hidden');
        dataModal.classList.remove('flex');
      }
    });

    btnCopyJson.addEventListener('click', () => {
      navigator.clipboard.writeText(jsonDataTextarea.value).then(() => {
        showToast('success', 'JSON', '¡Copiado al portapapeles!');
      });
    });

    btnRestoreInitial.addEventListener('click', () => {
      if (confirm('¿Restaurar a los 24 temas iniciales con contador de repasos en cero?')) {
        topics = JSON.parse(JSON.stringify(INITIAL_TOPICS));
        jsonDataTextarea.value = JSON.stringify(topics, null, 2);
      }
    });

    btnSaveJson.addEventListener('click', () => {
      try {
        const parsed = JSON.parse(jsonDataTextarea.value);
        if (!Array.isArray(parsed)) throw new Error('El JSON debe ser un arreglo de temas.');
        topics = parsed;
        enabledIds = new Set(topics.map(t => t.id));
        saveData();
        dataModal.classList.add('hidden');
        dataModal.classList.remove('flex');
        showToast('success', 'Guardado', '¡Datos actualizados exitosamente!');
      } catch (err) {
        showToast('error', 'Error en JSON', err.message);
      }
    });

    window.addEventListener('resize', () => {
      drawWheel();
    });
  }

  // App Bootstrap
  function init() {
    loadData();
    setupEventListeners();
    initContactForm();
    initScrollFeatures();
    updateStats();
    renderTopicsGrid();
    drawWheel();

    // Hide loading screen smoothly after initialization
    setTimeout(() => {
      if (loadingScreen) {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => loadingScreen.remove(), 550);
      }
    }, 450);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
