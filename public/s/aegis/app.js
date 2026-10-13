/* ============================================================
   AEGIS — Cinematic Command Core
   Obliq AI × Digital Hammerr
   ============================================================ */
(() => {
  'use strict';
  const $  = (id) => document.getElementById(id);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  /* ============================================================
     BOOT SEQUENCE (cinematic, with progress)
     ============================================================ */
  const BOOT_LINES = [
    { text: '> Initializing Obliq AI Neural Core', cls: 'ok' },
    { text: '> Loading Digital Hammerr Command Interface', cls: 'ok' },
    { text: '> Establishing secure backend bridge', cls: 'ok' },
    { text: '> Checking AI provider configuration', cls: 'ok' },
    { text: '> Checking voice provider configuration', cls: 'ok' },
    { text: '> Calibrating microphone array', cls: 'ok' },
    { text: '> Arming clap wake system', cls: 'ok' },
    { text: '> Loading holographic HUD', cls: 'ok' },
    { text: '> Command Core ready. Standing by', cls: 'ok' },
  ];
  const bootLog = $('bootLog');
  const bootFill = $('bootProgressFill');
  const bootLbl = $('bootProgressLabel');
  const BOOT_TOTAL_MS = 3800;
  const BOOT_INTERVAL = BOOT_TOTAL_MS / BOOT_LINES.length;
  BOOT_LINES.forEach((l, i) => {
    setTimeout(() => {
      const div = document.createElement('div');
      div.className = 'line ' + (l.cls || '');
      div.textContent = l.text;
      bootLog.appendChild(div);
      if (bootLog.children.length > 8) bootLog.removeChild(bootLog.firstChild);
    }, 200 + i * BOOT_INTERVAL);
  });
  const bootStart = performance.now();
  const bootTick = () => {
    const elapsed = performance.now() - bootStart;
    const pct = Math.min(100, (elapsed / BOOT_TOTAL_MS) * 100);
    bootFill.style.width = pct + '%';
    bootLbl.textContent = Math.floor(pct) + '%';
    if (pct < 100) requestAnimationFrame(bootTick);
    else {
      setTimeout(() => $('boot').classList.add('hidden'), 200);
    }
  };
  requestAnimationFrame(bootTick);

  /* ============================================================
     GENERATE SVG: compass ticks + reactor blades
     ============================================================ */
  const compassG = document.getElementById('compassTicks');
  for (let i = 0; i < 72; i++) {
    const angle = (i * 5) - 90;
    const major = i % 6 === 0;
    const len = major ? 16 : 6;
    const r1 = 380;
    const r2 = r1 - len;
    const rad = (angle * Math.PI) / 180;
    const x1 = 400 + r1 * Math.cos(rad);
    const y1 = 400 + r1 * Math.sin(rad);
    const x2 = 400 + r2 * Math.cos(rad);
    const y2 = 400 + r2 * Math.sin(rad);
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1); line.setAttribute('y1', y1);
    line.setAttribute('x2', x2); line.setAttribute('y2', y2);
    line.setAttribute('stroke', 'var(--primary)');
    line.setAttribute('stroke-width', major ? 1.4 : 0.6);
    line.setAttribute('opacity', major ? 0.85 : 0.4);
    compassG.appendChild(line);
  }

  // Reactor turbine blades — trapezoid wedges arranged radially
  const buildBlades = (parentId, count, rOuter, rInner, gap = 6, strokeOnly = false) => {
    const g = document.getElementById(parentId);
    const segAngle = 360 / count;
    for (let i = 0; i < count; i++) {
      const a1 = (i * segAngle + gap / 2) * Math.PI / 180;
      const a2 = ((i + 1) * segAngle - gap / 2) * Math.PI / 180;
      const x1 = 400 + rOuter * Math.cos(a1), y1 = 400 + rOuter * Math.sin(a1);
      const x2 = 400 + rOuter * Math.cos(a2), y2 = 400 + rOuter * Math.sin(a2);
      const x3 = 400 + rInner * Math.cos(a2), y3 = 400 + rInner * Math.sin(a2);
      const x4 = 400 + rInner * Math.cos(a1), y4 = 400 + rInner * Math.sin(a1);
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', `M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} L ${x4} ${y4} Z`);
      if (strokeOnly) {
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', 'var(--primary)');
        path.setAttribute('stroke-width', 1);
        path.setAttribute('opacity', 0.5);
      } else {
        path.setAttribute('fill', 'var(--primary)');
        path.setAttribute('opacity', 0.18 + (i % 2) * 0.08);
        path.setAttribute('stroke', 'var(--primary)');
        path.setAttribute('stroke-width', 0.4);
      }
      g.appendChild(path);
    }
  };
  buildBlades('bladesOuter', 12, 175, 130, 4);
  buildBlades('bladesInner', 8, 120, 85, 6, true);

  /* ============================================================
     SESSION + BACKEND CONFIG
     ============================================================ */
  let sessionId = sessionStorage.getItem('aegis_sid');
  if (!sessionId) {
    sessionId = 's_' + Math.random().toString(36).slice(2, 12);
    sessionStorage.setItem('aegis_sid', sessionId);
  }

  let CONFIG = { backend_voice: false, voice_provider: 'browser', ai_provider: 'openai' };
  let HEALTH = { ai_configured: false, voice_configured: false };

  const refreshHealth = async () => {
    try {
      const r = await fetch('/api/health');
      if (r.ok) {
        HEALTH = await r.json();
        $('hudAi').textContent = (HEALTH.ai_provider || '—').toUpperCase();
        $('hudVoice').textContent = (HEALTH.voice_provider || '—').toUpperCase();
        $('hudStatus').textContent = HEALTH.ai_configured ? 'ONLINE' : 'CONFIG';
        $('hudStatusDot').className = 'mr-dot ' + (HEALTH.ai_configured ? 'ok' : 'warn');
        $('modAiDot').className = 'm-dot ' + (HEALTH.ai_configured ? 'dot-ok' : 'dot-warn');
        $('modVoiceDot').className = 'm-dot ' + (HEALTH.voice_configured ? 'dot-ok' : 'dot-warn');
        $('voiceProvider').textContent = (HEALTH.voice_provider || '—').toUpperCase();
        $('voiceStatus').textContent = HEALTH.voice_configured ? 'READY' : 'NO KEY';
      }
    } catch (_e) {
      $('hudStatus').textContent = 'OFFLINE';
      $('hudStatusDot').className = 'mr-dot bad';
    }
  };
  const refreshConfig = async () => {
    try {
      const r = await fetch('/api/config');
      if (r.ok) CONFIG = await r.json();
    } catch (_e) {}
  };
  refreshConfig();
  refreshHealth();
  setInterval(refreshHealth, 15000);

  /* ============================================================
     CLOCK + UPTIME + CPU DRIFT
     ============================================================ */
  const startTime = Date.now();
  let cpuVal = 42;
  const updateClock = () => {
    const d = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    $('clock').textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    $('utc').textContent   = `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`;
    const up = Math.floor((Date.now() - startTime) / 1000);
    $('uptime').textContent = `${pad(Math.floor(up / 60))}:${pad(up % 60)}`;
  };
  setInterval(() => {
    updateClock();
    cpuVal = Math.max(28, Math.min(68, cpuVal + (Math.random() - 0.5) * 7));
    $('cpuVal').textContent = Math.round(cpuVal) + '%';
    $('cpuBar').style.width = cpuVal + '%';
    if (Math.random() < 0.18) {
      const nets = ['98ms','42ms','112ms','67ms','88ms'];
      $('netVal').textContent = nets[Math.floor(Math.random() * nets.length)];
    }
  }, 1000);
  updateClock();

  /* ============================================================
     DATA STREAM CANVAS (Matrix-style, low opacity)
     ============================================================ */
  const dsCanvas = $('dataStream');
  const dsCtx = dsCanvas.getContext('2d');
  let dsCols = [];
  const DS_CHARS = '01⎈⎊◇◆◢◣◤◥●○';
  const dsResize = () => {
    dsCanvas.width = window.innerWidth;
    dsCanvas.height = window.innerHeight;
    const colWidth = 22;
    const n = Math.ceil(dsCanvas.width / colWidth);
    dsCols = Array.from({ length: n }, () => ({
      x: 0, y: Math.random() * dsCanvas.height,
      speed: 0.4 + Math.random() * 1.4,
      chars: Math.floor(8 + Math.random() * 18),
    }));
    dsCols.forEach((c, i) => c.x = i * colWidth);
  };
  dsResize();
  window.addEventListener('resize', dsResize);

  const drawDataStream = () => {
    dsCtx.fillStyle = 'rgba(2, 5, 10, 0.18)';
    dsCtx.fillRect(0, 0, dsCanvas.width, dsCanvas.height);
    const color = getComputedStyle(document.body).getPropertyValue('--primary').trim() || '#4dd0ff';
    dsCtx.font = '11px JetBrains Mono, monospace';
    dsCols.forEach((c) => {
      for (let i = 0; i < c.chars; i++) {
        const ch = DS_CHARS[(Math.random() * DS_CHARS.length) | 0];
        const y = c.y - i * 16;
        if (y < 0 || y > dsCanvas.height) continue;
        const alpha = i === 0 ? 0.55 : Math.max(0.04, 0.5 - i * 0.04);
        dsCtx.fillStyle = `rgba(${hexToRgb(color)}, ${alpha})`;
        dsCtx.fillText(ch, c.x, y);
      }
      c.y += c.speed;
      if (c.y > dsCanvas.height + c.chars * 16) {
        c.y = -c.chars * 16;
        c.speed = 0.4 + Math.random() * 1.4;
      }
    });
    requestAnimationFrame(drawDataStream);
  };
  function hexToRgb(hex) {
    const m = hex.replace('#', '').match(/.{2}/g);
    if (!m) return '77, 208, 255';
    return m.map((x) => parseInt(x, 16)).join(', ');
  }
  drawDataStream();

  /* ============================================================
     PARTICLES (drifting glow specks)
     ============================================================ */
  const pCanvas = $('particles');
  const pCtx = pCanvas.getContext('2d');
  let particles = [];
  const pResize = () => {
    pCanvas.width = window.innerWidth;
    pCanvas.height = window.innerHeight;
    const count = Math.min(70, Math.floor((pCanvas.width * pCanvas.height) / 28000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * pCanvas.width,
      y: Math.random() * pCanvas.height,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.2,
      vy: -Math.random() * 0.3 - 0.04,
      a: Math.random() * 0.5 + 0.15,
    }));
  };
  pResize();
  window.addEventListener('resize', pResize);
  const drawParticles = () => {
    pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);
    const color = getComputedStyle(document.body).getPropertyValue('--primary').trim() || '#4dd0ff';
    particles.forEach((p) => {
      p.x += p.vx; p.y += p.vy;
      if (p.y < -10) { p.y = pCanvas.height + 10; p.x = Math.random() * pCanvas.width; }
      if (p.x < -10) p.x = pCanvas.width + 10;
      if (p.x > pCanvas.width + 10) p.x = -10;
      pCtx.beginPath();
      pCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      pCtx.fillStyle = color;
      pCtx.globalAlpha = p.a;
      pCtx.shadowBlur = 6;
      pCtx.shadowColor = color;
      pCtx.fill();
    });
    pCtx.globalAlpha = 1;
    requestAnimationFrame(drawParticles);
  };
  drawParticles();

  /* ============================================================
     COMMAND BAR WAVE BARS
     ============================================================ */
  const waveEl = $('wave');
  for (let i = 0; i < 28; i++) {
    const b = document.createElement('div');
    b.className = 'bar';
    waveEl.appendChild(b);
  }
  const waveBars = [...waveEl.children];
  let waveLive = false;
  const animateWave = () => {
    waveBars.forEach((b, i) => {
      const h = waveLive
        ? 4 + Math.random() * 14
        : 3 + Math.sin(Date.now() / 500 + i * 0.35) * 1.5 + 1;
      b.style.height = h + 'px';
    });
    requestAnimationFrame(animateWave);
  };
  animateWave();

  /* ============================================================
     STATE MACHINE
     ============================================================ */
  const core = $('core');
  const stateText = $('stateText');
  const stateIndicator = stateText.parentElement;
  const cbStatus = $('cbStatus');
  let state = 'idle';
  const STATE_LABELS = {
    idle: 'STANDBY',
    listening: 'LISTENING',
    processing: 'THINKING',
    speaking: 'SPEAKING',
    scanning: 'SCANNING',
  };
  const setState = (s, label) => {
    state = s;
    core.classList.remove('listening', 'processing', 'speaking', 'scanning');
    stateIndicator.classList.remove('listening', 'processing', 'speaking');
    if (s !== 'idle') {
      core.classList.add(s);
      if (s !== 'scanning') stateIndicator.classList.add(s);
    }
    waveLive = s === 'listening' || s === 'speaking';
    stateText.textContent = label || STATE_LABELS[s] || s.toUpperCase();
    // Command bar status text
    cbStatus.classList.remove('live','thinking','speaking');
    if (s === 'listening') { cbStatus.classList.add('live'); cbStatus.textContent = '// ◉ LIVE · LISTENING'; }
    else if (s === 'processing') { cbStatus.classList.add('thinking'); cbStatus.textContent = '// ⊛ AI BRAIN PROCESSING'; }
    else if (s === 'speaking') { cbStatus.classList.add('speaking'); cbStatus.textContent = '// ▸ TRANSMITTING'; }
    else if (s === 'scanning') { cbStatus.classList.add('thinking'); cbStatus.textContent = '// ⌬ FULL SYSTEM SCAN'; }
    else cbStatus.textContent = '// STANDBY · CLAP TO WAKE';
  };

  /* ============================================================
     OPS LOG
     ============================================================ */
  let opsCount = 0;
  const ops = (msg, cls = '') => {
    opsCount++;
    $('opsCount').textContent = String(opsCount).padStart(3, '0');
    const d = new Date();
    const t = `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}:${String(d.getSeconds()).padStart(2,'0')}`;
    const div = document.createElement('div');
    div.className = 'ol ' + cls;
    div.innerHTML = `<span class="t">${t}</span><span class="m">${msg}</span>`;
    const log = $('opsLog');
    log.appendChild(div);
    if (log.children.length > 12) log.removeChild(log.firstChild);
    log.scrollTop = log.scrollHeight;
  };
  ops('Command Core initialized', 'ok');

  /* ============================================================
     CONVERSATION LOG
     ============================================================ */
  const convoEl = $('convo');
  let messageCount = 0;
  const addMessage = (who, text, typed = false) => {
    const empty = convoEl.querySelector('.empty-convo');
    if (empty) empty.remove();
    const div = document.createElement('div');
    div.className = 'msg ' + who;
    const whoLabel = who === 'user' ? '◢ OPERATOR' : who === 'assistant' ? '◤ AEGIS' : '◇ SYSTEM';
    div.innerHTML = `<span class="who">${whoLabel}</span><span class="body"></span>`;
    convoEl.appendChild(div);
    convoEl.scrollTop = convoEl.scrollHeight;
    const body = div.querySelector('.body');
    if (typed) typeText(body, text);
    else body.textContent = text;
    messageCount++;
    $('msgCount').textContent = messageCount + ' MSG';
    return div;
  };
  const typeText = (el, text) => {
    el.textContent = '';
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    el.appendChild(cursor);
    let i = 0;
    const tick = () => {
      if (i < text.length) {
        cursor.insertAdjacentText('beforebegin', text[i]);
        i++;
        convoEl.scrollTop = convoEl.scrollHeight;
        setTimeout(tick, 12 + Math.random() * 14);
      } else cursor.remove();
    };
    tick();
  };

  /* ============================================================
     AUDIO ENGINE (mic + analyser + playback)
     ============================================================ */
  let audioCtx = null;
  let micStream = null;
  let micSource = null;
  let analyser = null;
  let activeSource = null; // current source feeding the analyser
  let playbackSource = null;

  const initAudio = async () => {
    if (audioCtx) return;
    try {
      micStream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: false },
      });
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      micSource = audioCtx.createMediaStreamSource(micStream);
      analyser = audioCtx.createAnalyser();
      analyser.fftSize = 1024;
      analyser.smoothingTimeConstant = 0.7;
      micSource.connect(analyser);
      activeSource = 'mic';
      drawFreqBars();
      clapLoop();
      ops('Audio engine online', 'ok');
    } catch (e) {
      ops('Microphone permission denied', 'warn');
      addMessage('system', 'Microphone permission was denied. Voice and clap features will be unavailable. You can still type commands.');
    }
  };

  /* ============================================================
     RADIAL FREQUENCY BARS AROUND THE CORE
     ============================================================ */
  const freqCanvas = $('freqCanvas');
  const fCtx = freqCanvas.getContext('2d');
  const freqResize = () => {
    const r = freqCanvas.getBoundingClientRect();
    freqCanvas.width = r.width * devicePixelRatio;
    freqCanvas.height = r.height * devicePixelRatio;
    fCtx.scale(devicePixelRatio, devicePixelRatio);
  };
  setTimeout(freqResize, 100);
  window.addEventListener('resize', () => setTimeout(freqResize, 100));

  const drawFreqBars = () => {
    if (!analyser) return;
    const w = freqCanvas.width / devicePixelRatio;
    const h = freqCanvas.height / devicePixelRatio;
    fCtx.clearRect(0, 0, w, h);

    const buf = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(buf);

    const cx = w / 2, cy = h / 2;
    const baseR = Math.min(w, h) * 0.42;
    const N = 64;
    const color = getComputedStyle(document.body).getPropertyValue('--primary').trim() || '#4dd0ff';

    // ambient floor — keep some baseline motion
    const ambient = state === 'idle' ? 0.04 : 0.08;

    for (let i = 0; i < N; i++) {
      const binIdx = Math.floor((i / N) * (buf.length * 0.5));
      const v = buf[binIdx] / 255;
      const amp = Math.max(ambient + Math.sin(Date.now() / 600 + i) * 0.02, v);
      const barLen = amp * 70 + 2;
      const angle = (i / N) * Math.PI * 2 - Math.PI / 2;
      const x1 = cx + baseR * Math.cos(angle);
      const y1 = cy + baseR * Math.sin(angle);
      const x2 = cx + (baseR + barLen) * Math.cos(angle);
      const y2 = cy + (baseR + barLen) * Math.sin(angle);
      fCtx.beginPath();
      fCtx.moveTo(x1, y1);
      fCtx.lineTo(x2, y2);
      fCtx.strokeStyle = color;
      fCtx.globalAlpha = 0.3 + amp * 0.7;
      fCtx.lineWidth = 2;
      fCtx.shadowBlur = 8;
      fCtx.shadowColor = color;
      fCtx.stroke();
    }
    fCtx.globalAlpha = 1;
    requestAnimationFrame(drawFreqBars);
  };

  /* ============================================================
     CLAP DETECTION
     ============================================================ */
  let clapEnabled = true;
  let clapThreshold = 0.16;
  let lastClapAt = 0;
  let calibrating = false;

  const clapLoop = () => {
    if (!analyser) return;
    const buf = new Float32Array(analyser.fftSize);
    analyser.getFloatTimeDomainData(buf);
    let sum = 0;
    for (let i = 0; i < buf.length; i++) sum += buf[i] * buf[i];
    const rms = Math.sqrt(sum / buf.length);

    // update vital bars
    const micPct = Math.min(100, Math.round(rms * 280));
    $('micBar').style.width = micPct + '%';
    $('micVal').textContent = rms.toFixed(2);
    const clapPct = Math.min(100, Math.round(rms * 250));
    $('clapBar').style.width = clapPct + '%';
    $('clapVal').textContent = rms.toFixed(2);
    const thrPct = Math.min(100, Math.round(clapThreshold * 250));
    $('clapThresh').style.left = thrPct + '%';

    if (calibrating) {
      calibrating.peak = Math.max(calibrating.peak, rms);
    }

    if (clapEnabled && state !== 'speaking' && rms > clapThreshold) {
      const now = performance.now();
      if (now - lastClapAt > 1000) {
        lastClapAt = now;
        onClapDetected();
      }
    }
    requestAnimationFrame(clapLoop);
  };

  const onClapDetected = () => {
    ops('Wake signal detected', 'ok');
    const flash = $('wakeFlash');
    flash.classList.add('show');
    setTimeout(() => flash.classList.remove('show'), 1500);

    const h = new Date().getHours();
    const greeting = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
    const line = `${greeting}, sir. Obliq AI command core is now online.`;
    addMessage('assistant', line, true);
    speak(line);

    if (!isListening) {
      try {
        if (!recognition) recognition = initRecognition();
        recognition && recognition.start();
        $('btnStart').classList.add('hidden');
        $('btnStop').classList.remove('hidden');
      } catch (_) {}
    }
  };

  const calibrateClap = () => {
    if (!analyser) {
      addMessage('system', 'Audio engine not ready. Tap Activate first.');
      return;
    }
    addMessage('system', 'Calibrating clap detection for 3 seconds — stay quiet, then clap once.');
    ops('Calibration: listening for ambient + clap', '');
    calibrating = { peak: 0, ambient: 0 };
    // sample ambient for first 1.5s, then expect clap in next 1.5s
    let phase = 0;
    setTimeout(() => {
      calibrating.ambient = calibrating.peak;
      calibrating.peak = 0;
      phase = 1;
      addMessage('system', 'Now clap once, firmly.');
      ops('Calibration: clap window open', '');
    }, 1500);
    setTimeout(() => {
      const peak = calibrating.peak;
      calibrating = false;
      // Set threshold halfway between ambient and clap peak, with safety margin
      const newThr = peak > 0.05
        ? Math.max(0.06, Math.min(0.35, peak * 0.55))
        : clapThreshold;
      clapThreshold = newThr;
      $('clapSens').value = newThr;
      $('clapSensVal').textContent = newThr.toFixed(2);
      addMessage('system', `Calibration complete. Sensitivity set to ${newThr.toFixed(2)}.`);
      ops(`Sensitivity calibrated → ${newThr.toFixed(2)}`, 'ok');
    }, 3000);
  };

  /* ============================================================
     VOICE OUTPUT (backend ElevenLabs/Fish, browser fallback)
     ============================================================ */
  let muted = false;
  let currentAudio = null;
  const synth = window.speechSynthesis;
  let synthVoice = null;

  const scoreVoice = (v) => {
    const n = v.name;
    let s = 0;
    if (/\(Natural\)/i.test(n)) s += 120;
    if (/Online.*Natural/i.test(n)) s += 110;
    if (/Google.*(Wavenet|Neural)/i.test(n)) s += 90;
    if (/^Google US English$/i.test(n)) s += 80;
    if (/Daniel/i.test(n) && /en-GB/i.test(v.lang)) s += 75;
    if (/Alex/i.test(n)) s += 70;
    if (/Samantha/i.test(n)) s += 65;
    if (/Microsoft.*(Aria|Guy|Davis|Andrew|Brian)/i.test(n)) s += 35;
    if (/Premium|Enhanced|Natural|Neural/i.test(n)) s += 25;
    if (/Desktop|eSpeak/i.test(n)) s -= 30;
    if (/en-US/i.test(v.lang)) s += 15;
    else if (/en-GB/i.test(v.lang)) s += 12;
    else if (/en/i.test(v.lang)) s += 8;
    return s;
  };
  const pickSynthVoice = () => {
    if (!synth) return;
    const list = (synth.getVoices() || []).filter((v) => /en/i.test(v.lang));
    if (!list.length) return;
    list.sort((a, b) => scoreVoice(b) - scoreVoice(a));
    synthVoice = list[0];
  };
  if (synth) {
    pickSynthVoice();
    synth.onvoiceschanged = pickSynthVoice;
    setTimeout(pickSynthVoice, 800);
  }

  const browserSpeak = (text, onEnd) => {
    if (!synth) { onEnd && onEnd(); return; }
    synth.cancel();
    const chunks = text.replace(/\s+/g, ' ').split(/(?<=[.!?])\s+|(?<=,)\s+(?=\w{4,})/g).filter(Boolean);
    let idx = 0;
    const next = () => {
      if (idx >= chunks.length) { onEnd && onEnd(); return; }
      const u = new SpeechSynthesisUtterance(chunks[idx++]);
      if (synthVoice) u.voice = synthVoice;
      u.rate = 1.0; u.pitch = 1.0; u.volume = 1.0;
      u.onend = () => setTimeout(next, 180);
      u.onerror = () => next();
      synth.speak(u);
    };
    next();
  };

  // Connect audio playback to analyser so frequency bars react to AEGIS voice
  const connectPlaybackToAnalyser = (audioEl) => {
    if (!audioCtx || !analyser) return;
    try {
      if (playbackSource) {
        try { playbackSource.disconnect(); } catch (_) {}
        playbackSource = null;
      }
      playbackSource = audioCtx.createMediaElementSource(audioEl);
      playbackSource.connect(analyser);
      playbackSource.connect(audioCtx.destination);
      activeSource = 'playback';
    } catch (e) {
      // Will fail in older browsers — that's fine, the audio will still play via Audio element default
      try { audioEl.play(); } catch (_) {}
    }
  };
  const reconnectMic = () => {
    if (!audioCtx || !analyser || !micSource) return;
    try {
      if (playbackSource) { try { playbackSource.disconnect(); } catch (_) {} }
      micSource.connect(analyser);
      activeSource = 'mic';
    } catch (_) {}
  };

  const speak = async (text) => {
    if (muted) return;
    setState('speaking');
    ops('Voice output → ' + (CONFIG.backend_voice ? CONFIG.voice_provider : 'browser'), '');

    if (CONFIG.backend_voice && CONFIG.voice_provider !== 'browser') {
      try {
        const r = await fetch('/api/tts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text }),
        });
        if (r.ok && r.headers.get('content-type')?.includes('audio')) {
          const blob = await r.blob();
          const url = URL.createObjectURL(blob);
          if (currentAudio) { currentAudio.pause(); currentAudio = null; }
          const a = new Audio(url);
          a.crossOrigin = 'anonymous';
          currentAudio = a;
          a.onended = () => {
            URL.revokeObjectURL(url);
            currentAudio = null;
            reconnectMic();
            if (state === 'speaking') setState(isListening ? 'listening' : 'idle');
          };
          a.onerror = () => {
            URL.revokeObjectURL(url);
            currentAudio = null;
            reconnectMic();
            browserSpeak(text, () => setState(isListening ? 'listening' : 'idle'));
          };
          // Connect to analyser so bars react to AEGIS voice
          a.addEventListener('play', () => connectPlaybackToAnalyser(a), { once: true });
          await a.play();
          return;
        }
      } catch (e) {
        ops('Backend TTS failed: ' + e.message, 'warn');
      }
    }

    browserSpeak(text, () => {
      if (state === 'speaking') setState(isListening ? 'listening' : 'idle');
    });
  };

  const stopSpeaking = () => {
    if (currentAudio) { currentAudio.pause(); currentAudio = null; reconnectMic(); }
    if (synth) synth.cancel();
  };

  /* ============================================================
     BACKEND: CHAT
     ============================================================ */
  const callAiChat = async (message) => {
    const r = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId, message }),
    });
    const data = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(data?.error || `HTTP ${r.status}`);
    return data.reply || '';
  };

  /* ============================================================
     SPEECH RECOGNITION
     ============================================================ */
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const srSupported = !!SR;
  let recognition = null;
  let isListening = false;
  let manualStop = false;

  const initRecognition = () => {
    if (!srSupported) return null;
    const r = new SR();
    r.continuous = true;
    r.interimResults = true;
    r.lang = 'en-US';
    r.onstart = () => {
      isListening = true;
      manualStop = false;
      setState('listening');
      ops('Voice recognition active', 'ok');
    };
    r.onresult = (event) => {
      if (state === 'speaking') return;
      let finalText = '';
      let interim = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const res = event.results[i];
        if (res.isFinal) finalText += res[0].transcript;
        else interim += res[0].transcript;
      }
      if (interim && state === 'listening') {
        cbStatus.textContent = '// HEAR: ' + interim.trim().slice(0, 44).toUpperCase();
      }
      if (finalText.trim()) {
        addMessage('user', finalText.trim());
        processCommand(finalText.trim());
      }
    };
    r.onerror = (e) => {
      if (e.error === 'not-allowed' || e.error === 'service-not-allowed') {
        addMessage('system', 'Microphone access denied.');
        stopListening();
      }
    };
    r.onend = () => {
      if (!manualStop && isListening) {
        try { r.start(); } catch (_) {}
      } else {
        isListening = false;
        if (state === 'listening') setState('idle');
      }
    };
    return r;
  };

  const startListening = async () => {
    await initAudio();
    if (!srSupported) {
      addMessage('system', 'Speech recognition not supported in this browser. Please use Chrome. You can still type commands below.');
      return;
    }
    if (!recognition) recognition = initRecognition();
    try {
      recognition.start();
      $('btnStart').classList.add('hidden');
      $('btnStop').classList.remove('hidden');
    } catch (_) {}
  };

  const stopListening = () => {
    manualStop = true;
    isListening = false;
    try { recognition && recognition.stop(); } catch (_) {}
    $('btnStart').classList.remove('hidden');
    $('btnStop').classList.add('hidden');
    setState('idle');
    ops('System on standby', '');
  };

  /* ============================================================
     COMMAND PROCESSING
     ============================================================ */
  const fmtTime = () => {
    const d = new Date();
    let h = d.getHours();
    const m = d.getMinutes();
    const ap = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return `${h}:${String(m).padStart(2,'0')} ${ap}`;
  };

  const flashModule = (action) => {
    const el = document.querySelector(`.module[data-action="${action}"]`);
    if (!el) return;
    el.style.background = 'rgba(77,208,255,0.18)';
    el.style.borderColor = 'var(--primary)';
    setTimeout(() => { el.style.background = ''; el.style.borderColor = ''; }, 1600);
  };

  const openModal = (html) => {
    $('modalBody').innerHTML = html;
    $('overlay').classList.add('show');
  };
  const closeModal = () => $('overlay').classList.remove('show');
  $('modalClose').addEventListener('click', closeModal);
  $('overlay').addEventListener('click', (e) => {
    if (e.target.id === 'overlay') closeModal();
  });

  const TASKS = [
    'Review business ideas',
    'Prepare AI website concept',
    'Check automation plan',
    'Test voice commands',
  ];
  const NOTES = [
    'Obliq AI project ideas',
    'Digital Hammerr branding',
    'Voice assistant improvements',
    'Future API integration',
  ];

  const showTasks = () => {
    openModal(`
      <h2>Task Queue</h2>
      <div class="sub">4 items · priority sorted</div>
      <ul>${TASKS.map((t,i)=>`<li class="${i===0?'done':''}"><span class="check"></span><span>${t}</span></li>`).join('')}</ul>
    `);
    flashModule('tasks');
  };
  const showNotes = () => {
    openModal(`
      <h2>Smart Notes</h2>
      <div class="sub">Synced · 4 entries</div>
      <ul>${NOTES.map(n=>`<li><span class="check"></span><span>${n}</span></li>`).join('')}</ul>
    `);
    flashModule('notes');
  };
  const runScan = () => {
    openModal(`
      <h2>System Diagnostic</h2>
      <div class="sub">Full integrity check · all modules</div>
      <div class="scan-pct" id="scanPct">0%</div>
      <div class="scan-bar"><div class="scan-fill" id="scanFill"></div></div>
      <div class="scan-log" id="scanLog"></div>
    `);
    flashModule('scan');
    setState('scanning');
    const fill = $('scanFill');
    const pct = $('scanPct');
    const log = $('scanLog');
    const steps = [
      'AI Brain: Online',
      'Voice Engine: Online',
      'Microphone Array: Active',
      'Clap Detection: Armed',
      'Backend: Secure',
      'Command Router: Active',
      'Obliq AI Layer: Active',
      'Digital Hammerr Layer: Active',
      'Automation Module: Ready',
    ];
    let p = 0, i = 0;
    const tick = () => {
      p += 1.0;
      if (p > 100) p = 100;
      fill.style.width = p + '%';
      pct.textContent = Math.floor(p) + '%';
      if (i < steps.length && p > (i + 1) * (100 / steps.length)) {
        const line = document.createElement('div');
        line.innerHTML = `&gt; ${steps[i]} <span class="ok">✓ OK</span>`;
        log.appendChild(line);
        if (log.children.length > 9) log.removeChild(log.firstChild);
        i++;
      }
      if (p < 100) requestAnimationFrame(tick);
      else {
        setTimeout(() => setState(isListening ? 'listening' : 'idle'), 600);
      }
    };
    tick();
  };
  const showHelp = () => {
    openModal(`
      <h2>Command Reference</h2>
      <div class="sub">Voice or text · all commands</div>
      <div class="help-grid">
        <div><b>Clap once</b> — wake by sound</div>
        <div><b>"Wake up"</b> — activate</div>
        <div><b>"Go offline"</b> — pause</div>
        <div><b>"Open dashboard"</b></div>
        <div><b>"Close dashboard"</b></div>
        <div><b>"Run system scan"</b></div>
        <div><b>"Show tasks"</b></div>
        <div><b>"Show notes"</b></div>
        <div><b>"Tell me the time"</b></div>
        <div><b>"Change theme"</b></div>
        <div><b>"Clear console"</b></div>
        <div><b>"Fullscreen"</b></div>
        <div><b>"Help"</b></div>
        <div><b>Anything else</b> — AI brain</div>
      </div>
    `);
  };
  const showSettings = () => {
    const a = HEALTH.ai_configured ? 'ok' : 'warn';
    const v = HEALTH.voice_configured ? 'ok' : 'warn';
    openModal(`
      <h2>Settings</h2>
      <div class="sub">System status · diagnostics</div>
      <div class="settings-row"><span class="l">AI Provider</span><span class="v ${a}">${(HEALTH.ai_provider||'—').toUpperCase()} · ${HEALTH.ai_configured?'KEY OK':'NO KEY'}</span></div>
      <div class="settings-row"><span class="l">Voice Provider</span><span class="v ${v}">${(HEALTH.voice_provider||'—').toUpperCase()} · ${HEALTH.voice_configured?'KEY OK':'NO KEY'}</span></div>
      <div class="settings-row"><span class="l">Backend</span><span class="v ok">SECURE BRIDGE · CONNECTED</span></div>
      <div class="settings-row"><span class="l">Mic Permission</span><span class="v ${audioCtx?'ok':'warn'}">${audioCtx?'GRANTED':'NOT GRANTED'}</span></div>
      <div class="settings-row"><span class="l">Clap Wake</span><span class="v">${clapEnabled?'ARMED':'DISARMED'}</span></div>
      <div class="settings-row"><span class="l">Sensitivity</span><span class="v">${clapThreshold.toFixed(2)}</span></div>
      <div class="settings-row"><span class="l">Voice Output</span><span class="v">${muted?'MUTED':'ACTIVE'}</span></div>
      <div class="settings-row"><span class="l">Theme</span><span class="v">${(document.body.dataset.theme||'blue').toUpperCase()}</span></div>
      <div class="settings-row"><span class="l">Session ID</span><span class="v">${sessionId}</span></div>
    `);
  };

  const cycleTheme = () => {
    const order = ['blue', 'gold', 'cyber'];
    const cur = document.body.dataset.theme || 'blue';
    const next = order[(order.indexOf(cur) + 1) % order.length];
    document.body.dataset.theme = next;
    return next;
  };

  const dashboardOpen = () => {
    ['dashboard','voice','notes','tasks','scan','brain','builder','automation'].forEach((a, i) => {
      setTimeout(() => flashModule(a), i * 110);
    });
  };

  const processCommand = async (raw) => {
    const text = raw.toLowerCase().trim();

    if (/\b(go offline|stop listening|stop|halt|sleep)\b/.test(text)) {
      stopListening();
      reply('Going offline. Clap or tap activate to wake me again.', { speak: false });
      return;
    }
    if (/\b(wake up|wake|activate)\b/.test(text)) {
      if (!isListening) startListening();
      reply('Awake and ready, sir.');
      return;
    }
    if (text === 'clear' || /\bclear\b.*(console|conversation|log|chat)?/.test(text)) {
      convoEl.innerHTML = '<div class="empty-convo">&gt; awaiting input</div>';
      messageCount = 0;
      $('msgCount').textContent = '0 MSG';
      reply('Console cleared.');
      return;
    }
    if (/\b(mute|silence)\b/.test(text)) {
      muted = true;
      stopSpeaking();
      $('muteLbl').textContent = 'MUTED';
      reply('Voice output muted.', { speak: false });
      return;
    }
    if (/\b(unmute)\b/.test(text)) {
      muted = false;
      $('muteLbl').textContent = 'AUDIO';
      reply('Voice output restored.');
      return;
    }
    if (/\btime\b|what time|tell me the time/.test(text)) {
      reply(`The current time is ${fmtTime()}.`);
      return;
    }
    if (/open dashboard|show dashboard|expand dashboard/.test(text)) {
      dashboardOpen();
      reply('Dashboard opened. All subsystems online.');
      return;
    }
    if (/close dashboard|minimize dashboard/.test(text)) {
      reply('Dashboard minimized.');
      return;
    }
    if (/show tasks|task queue|^tasks/.test(text)) { showTasks(); reply('Pulling up your task queue.'); return; }
    if (/show notes|^notes/.test(text)) { showNotes(); reply('Here are your smart notes.'); return; }
    if (/system scan|run scan|diagnostic/.test(text)) { runScan(); reply('Running diagnostics. All core modules functioning normally.'); return; }
    if (/change theme|switch theme|new theme|^theme/.test(text)) {
      const t = cycleTheme();
      const names = { blue: 'arc reactor blue', gold: 'tactical gold', cyber: 'cyber purple' };
      reply(`Theme switched to ${names[t]}.`);
      return;
    }
    if (/^fullscreen|full screen|go fullscreen/.test(text)) {
      toggleFullscreen();
      reply('Fullscreen toggled.');
      return;
    }
    if (/^settings|preferences/.test(text)) { showSettings(); reply('Opening system diagnostics.'); return; }
    if (/^help\b|what can you do|commands/.test(text)) { showHelp(); reply('Here is your command reference.'); return; }

    // ── AI brain ──
    setState('processing');
    ops('Sending to AI: "' + text.slice(0, 36) + '"', '');
    try {
      const aiReply = await callAiChat(raw);
      if (aiReply) {
        addMessage('assistant', aiReply, true);
        ops('AI reply received', 'ok');
        await speak(aiReply);
      } else {
        addMessage('system', 'No reply received from AI.');
        setState(isListening ? 'listening' : 'idle');
      }
    } catch (e) {
      const msg = e.message || 'unknown error';
      ops('AI error: ' + msg.slice(0, 50), 'alert');
      if (/401|unauthorized|missing/i.test(msg)) {
        addMessage('system', 'AI API key is missing or invalid. Open .env on the server and add your OPENAI_API_KEY or ANTHROPIC_API_KEY.');
      } else {
        addMessage('system', `AI request failed: ${msg}`);
      }
      setState(isListening ? 'listening' : 'idle');
    }
  };

  const reply = (text, opts = {}) => {
    const doSpeak = opts.speak !== false;
    setState('processing');
    setTimeout(() => {
      addMessage('assistant', text, true);
      if (doSpeak) speak(text);
      else setState(isListening ? 'listening' : 'idle');
    }, 280 + Math.random() * 200);
  };

  /* ============================================================
     UI WIRING
     ============================================================ */
  $('btnStart').addEventListener('click', () => startListening());
  $('btnStop').addEventListener('click', () => { stopListening(); addMessage('system','Voice system offline.'); });
  $('btnMute').addEventListener('click', () => {
    muted = !muted;
    $('muteLbl').textContent = muted ? 'MUTED' : 'AUDIO';
    if (muted) stopSpeaking();
  });
  $('btnTheme').addEventListener('click', () => { const t = cycleTheme(); ops('Theme → ' + t, ''); });
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  };
  $('btnFs').addEventListener('click', toggleFullscreen);
  $('btnScan').addEventListener('click', () => { addMessage('user', 'Run system scan'); runScan(); reply('Running diagnostics.'); });
  $('btnDash').addEventListener('click', () => { addMessage('user', 'Open dashboard'); dashboardOpen(); reply('Dashboard opened.'); });
  $('btnSettings').addEventListener('click', showSettings);
  $('btnCalibrate').addEventListener('click', calibrateClap);

  $('clapToggle').addEventListener('change', (e) => {
    clapEnabled = e.target.checked;
    ops('Clap wake ' + (clapEnabled ? 'armed' : 'disarmed'), clapEnabled ? 'ok' : 'warn');
  });
  $('clapSens').addEventListener('input', (e) => {
    clapThreshold = parseFloat(e.target.value);
    $('clapSensVal').textContent = clapThreshold.toFixed(2);
  });

  $$('.module').forEach((mod) => {
    mod.addEventListener('click', () => {
      const action = mod.dataset.action;
      const map = {
        dashboard: 'open dashboard',
        voice: 'help',
        notes: 'show notes',
        tasks: 'show tasks',
        scan: 'run system scan',
        brain: 'help',
        builder: 'help',
        automation: 'help',
      };
      const name = mod.querySelector('.m-name').textContent;
      addMessage('user', `Open ${name}`);
      processCommand(map[action] || 'help');
    });
  });

  $('textForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const v = $('textBox').value.trim();
    if (!v) return;
    addMessage('user', v);
    $('textBox').value = '';
    processCommand(v);
  });

  document.addEventListener('keydown', (e) => {
    if (e.target === $('textBox')) return;
    if (e.code === 'Space' && e.target === document.body) {
      e.preventDefault();
      isListening ? stopListening() : startListening();
    }
    if (e.key === 'Escape') closeModal();
  });

  // Welcome
  setTimeout(() => {
    if (convoEl.querySelector('.empty-convo')) {
      let msg = 'AEGIS command core is standing by. ';
      if (!HEALTH.ai_configured) {
        msg += 'AI brain needs your key — open .env and add OPENAI_API_KEY or ANTHROPIC_API_KEY, then restart. ';
      }
      if (!HEALTH.voice_configured && CONFIG.voice_provider !== 'browser') {
        msg += 'For the most natural voice, add an ElevenLabs key to .env. ';
      }
      msg += 'Tap Activate, allow your microphone, then clap or speak.';
      addMessage('assistant', msg, true);
      ops('Standing by for operator', 'ok');
    }
  }, 4200);

})();
