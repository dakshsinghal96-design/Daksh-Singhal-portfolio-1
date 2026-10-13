// Obliq AI Command Core — Step 3 client
// Interactive shell: button handlers, state machine, console, scan, settings.

console.log('[HAMMERR] app.js loaded · build v31-clickfix');

(function () {
  'use strict';
  // Surface ANY uncaught error so debug is one line away in DevTools console.
  window.addEventListener('error', (e) => {
    try { console.error('[HAMMERR] uncaught error', e.message, e.filename + ':' + e.lineno); } catch (_) {}
  });

  // ---------- Browser environment detection (Safari fixes) ----------
  const env = { ua: '', vendor: '', isSafari: false, isIOS: false, label: 'Unknown' };
  (function detectEnv() {
    try {
      env.ua = (navigator && navigator.userAgent) || '';
      env.vendor = (navigator && navigator.vendor) || '';
      env.isIOS = /iP(hone|ad|od)/i.test(env.ua);
      env.isSafari = (/safari/i.test(env.ua) && /apple/i.test(env.vendor)
                       && !/chrome|chromium|crios|fxios|edg|android/i.test(env.ua));
      if (env.isIOS && env.isSafari)              env.label = 'Safari (iOS)';
      else if (env.isSafari)                      env.label = 'Safari';
      else if (/edg/i.test(env.ua))               env.label = 'Edge';
      else if (/chrome|chromium/i.test(env.ua))   env.label = 'Chrome';
      else if (/firefox|fxios/i.test(env.ua))     env.label = 'Firefox';
    } catch (_e) { /* keep defaults */ }
  })();

  // ---------- Feature Phase 1: Lifecycle state machine ----------
  // Wraps the existing wake / voice / clap / TTS / command-routing systems.
  // Writes data-lifecycle on <body> so CSS can respond without changing the UI.
  // states: idle | listening | processing | speaking
  const lifecycle = {
    current: 'idle',
    set(next) {
      if (this.current === next) return;
      this.current = next;
      try { document.body.setAttribute('data-lifecycle', next); } catch (_e) {}
    },
    // Used after an action completes — drop back to listening if a command
    // window is still open, otherwise to idle.
    ended() {
      try {
        if (typeof cmdWindow !== 'undefined' && Date.now() < cmdWindow.until) {
          this.set('listening');
        } else {
          this.set('idle');
        }
      } catch (_e) { this.set('idle'); }
    }
  };

  // ---------- Element handles ----------
  const $ = (id) => document.getElementById(id);
  const body              = document.body;
  const pillText          = $('pill-text');
  const stateChipText     = $('state-chip-text');
  const hudState          = $('hud-state');
  const hudWake           = $('hud-wake');
  const wcStateLabel      = $('wc-state-label');
  const wcFootText        = $('wc-foot-text');
  const statusWake        = $('status-wake');
  const statusBackend     = $('status-backend');
  const waveform          = $('waveform');
  const consoleBody       = $('console-body');
  const historyList       = $('history-list');
  const btnActivate       = $('btn-activate');
  const btnListen         = $('btn-listen');
  const btnStop           = $('btn-stop');
  const btnScan           = $('btn-scan');
  const btnSettings       = $('btn-settings');
  const btnClearHistory   = $('btn-clear-history');
  const modalScan         = $('modal-scan');
  const modalSettings     = $('modal-settings');

  // Step 4 — mic panel handles
  const micPanel    = $('mic-panel');
  const micLed      = $('mic-led');
  const micOnoff    = $('mic-onoff');
  const micStatus   = $('mic-status');
  const micDevice   = $('mic-device');
  const micLevelTxt = $('mic-level-text');
  const meterBars   = $('meter-bars');
  const calibration = $('calibration');
  const btnMute     = $('btn-mute');
  const btnMicRel   = $('btn-mic-release');
  const btnCalibrate = $('btn-calibrate'); // Step 10
  const dotMic      = $('dot-mic');
  const statusMic   = $('status-mic');

  // Step 6 — voice layer handles
  const voicePanel   = $('voice-panel');
  const voiceModeChip= $('voice-mode-chip');
  const vMic         = $('v-mic');
  const vListen      = $('v-listen');
  const vReady       = $('v-ready');
  const voiceWave    = $('voice-wave');
  const voiceTranscript = $('voice-transcript');
  const voiceFootText   = $('voice-foot-text');

  // Step 7 — mission, mode, notification handles
  const intelCards   = $('intel-cards');
  const mMode        = $('m-mode');
  const mTask        = $('m-task');
  const mLast        = $('m-last');
  const eventsList   = $('events-list');
  const notifCenter  = $('notif-center');
  const hudAlert     = $('hud-alert');
  const haText       = $('ha-text');
  const msCurrent    = $('ms-current');

  // Step 8 — cinematic + activation history
  const screenDim       = $('screen-dim');
  const voiceLineOverlay= $('voice-line-overlay');
  const vlText          = $('vl-text');
  const activationList  = $('activation-list');
  const btnRefreshActivation = $('btn-refresh-activation');

  // Step 12 — clap controls (in Settings modal)
  const toggleClap       = $('toggle-clap');
  const toggleClapLabel  = $('toggle-clap-label');
  const sensitivityGroup = $('sensitivity-group');

  // Step 13 — live transcript + voice history
  const liveTranscript = $('live-transcript');
  const ltState        = $('lt-state');
  const ltDetected     = $('lt-detected');
  const ltCommand      = $('lt-command');
  const ltResponse     = $('lt-response');
  const confFill       = $('conf-fill');
  const confPct        = $('conf-pct');
  const voiceHistoryList = $('voice-history-list');
  const btnRefreshVoice = $('btn-refresh-voice');

  // Step 14 — AI brain handles
  const aiChat        = $('ai-chat');
  const aiStateChip   = $('ai-state-chip');
  const aiTurns       = $('ai-turns');
  const aiThread      = $('ai-thread');
  const aiThinking    = $('ai-thinking');
  const aiThinkingText= $('ai-thinking-text');
  const aiInput       = $('ai-input');
  const aiSend        = $('ai-send');
  const aiClear       = $('ai-clear');

  // Step 15 — action center handles
  const acGrid        = $('ac-grid');
  const acMeta        = $('ac-meta');
  const modalApproval = $('modal-approval');
  const approvalPrompt= $('approval-prompt');
  const approvalDetail= $('approval-detail');
  const approvalApprove = $('approval-approve');
  const modalSysinfo  = $('modal-sysinfo');
  const modalSearch   = $('modal-search');
  const searchInput   = $('search-input');
  const searchResults = $('search-results');

  // Step 16 — Vision handles
  const visionPanel    = $('vision-panel');
  const vpFeed         = $('vp-feed');
  const vpCanvas       = $('vp-canvas');
  const vpModeChip     = $('vp-mode-chip');
  const vpPermission   = $('vp-permission');
  const vpDevice       = $('vp-device');
  const vpMotionFill   = $('vp-motion-fill');
  const vpMotionPct    = $('vp-motion-pct');
  const vpPresence     = $('vp-presence');
  const vpCalibration  = $('vp-calibration');
  const vpPrivText     = $('vp-priv-text');
  const btnVisionEnable    = $('btn-vision-enable');
  const btnVisionMute      = $('btn-vision-mute');
  const btnVisionCalibrate = $('btn-vision-calibrate');
  const btnVisionRelease   = $('btn-vision-release');
  const dotVision      = $('dot-vision');
  const statusVision   = $('status-vision');
  const toggleVision   = $('toggle-vision');
  const toggleVisionLabel = $('toggle-vision-label');

  // Step 17 — startup + diagnostics handles
  const startupScreen  = $('startup-screen');
  const suFill         = $('su-fill');
  const suPct          = $('su-pct');
  const suStatus       = $('su-status');
  const suChecks       = $('su-checks');
  const modalDiagnostics = $('modal-diagnostics');
  const diagRefreshBtn = $('diag-refresh');
  const scanFill          = $('scan-fill');
  const scanPct           = $('scan-pct');
  const scanStatusEl      = $('scan-status');
  const scanList          = $('scan-list');

  // ---------- State machine ----------
  let state = 'standby'; // 'standby' | 'armed' | 'listening'

  const STATE_CONFIG = {
    standby: {
      pill: 'SECURE LOCAL SYSTEM ONLINE',
      chip: 'STANDBY MODE',
      hudTop: 'CORE ONLINE',
      hudWake: 'HAMMERR STANDBY',
      wcLabel: 'STANDBY',
      wakeStatus: 'STANDBY',
      wfFoot: 'Simulated channel · microphone NOT enabled in Step 3'
    },
    armed: {
      pill: 'WAKE CHANNEL ARMED',
      chip: 'WAKE CHANNEL ARMED',
      hudTop: 'CORE ARMED',
      hudWake: 'HAMMERR ARMED',
      wcLabel: 'ARMED',
      wakeStatus: 'ARMED',
      wfFoot: 'Channel armed · waiting for "Hammerr" simulation'
    },
    listening: {
      pill: 'LISTENING READY',
      chip: 'LISTENING MODE',
      hudTop: 'LISTENING',
      hudWake: 'HAMMERR LIVE',
      wcLabel: 'LISTENING',
      wakeStatus: 'LISTENING',
      wfFoot: 'Listening simulation · no microphone access'
    }
  };

  function applyState(next) {
    state = next;
    const cfg = STATE_CONFIG[next];
    body.setAttribute('data-state', next);
    if (pillText)       pillText.textContent = cfg.pill;
    if (stateChipText)  stateChipText.textContent = cfg.chip;
    if (hudState)       hudState.textContent = cfg.hudTop;
    if (hudWake)        hudWake.textContent = cfg.hudWake;
    if (wcStateLabel)   wcStateLabel.textContent = cfg.wcLabel;
    if (statusWake)     statusWake.textContent = cfg.wakeStatus;
    if (wcFootText)     wcFootText.textContent = cfg.wfFoot;

    waveform.classList.remove('active', 'armed');
    if (next === 'listening') {
      activateWaveform();
    } else if (next === 'armed') {
      armWaveform();
    } else {
      idleWaveform();
    }
  }

  // ---------- Waveform helpers ----------
  function forEachBar(fn) {
    if (!waveform) return;
    const bars = waveform.querySelectorAll('.wf-bar');
    bars.forEach((b, i) => fn(b, i, bars.length));
  }
  function idleWaveform() {
    forEachBar((b) => {
      b.style.removeProperty('--wd');
      b.style.removeProperty('--wdelay');
      b.style.height = '8%';
    });
  }
  function armWaveform() {
    waveform.classList.add('armed');
    forEachBar((b, i, n) => {
      const wave = Math.sin((i / n) * Math.PI);
      b.style.height = (10 + wave * 18).toFixed(0) + '%';
    });
  }
  function activateWaveform() {
    waveform.classList.add('active');
    forEachBar((b, i) => {
      const dur = (0.6 + Math.random() * 0.7).toFixed(2) + 's';
      const delay = (-Math.random() * 0.9).toFixed(2) + 's';
      b.style.setProperty('--wd', dur);
      b.style.setProperty('--wdelay', delay);
      b.style.height = '';
    });
  }

  // ---------- Console + history ----------
  function ts() {
    const d = new Date();
    return (
      String(d.getHours()).padStart(2, '0') + ':' +
      String(d.getMinutes()).padStart(2, '0') + ':' +
      String(d.getSeconds()).padStart(2, '0')
    );
  }
  function log(msg, kind) {
    if (!consoleBody) return;
    const line = document.createElement('div');
    line.className = 'console-line' + (kind ? ' ' + kind : '');
    const time = document.createElement('span');
    time.className = 'ts';
    time.textContent = '[' + ts() + ']';
    line.appendChild(time);
    line.appendChild(document.createTextNode(' ' + msg));
    consoleBody.appendChild(line);
    consoleBody.scrollTop = consoleBody.scrollHeight;
  }

  function pushHistory(label) {
    if (!historyList) return;
    const placeholder = historyList.querySelector('.placeholder');
    if (placeholder) placeholder.remove();
    const li = document.createElement('li');
    li.className = 'history-item';
    const t = document.createElement('span');
    t.className = 'ts';
    t.textContent = '[' + ts() + ']';
    li.appendChild(t);
    li.appendChild(document.createTextNode(' ' + label));
    historyList.prepend(li);
    // cap history at 30
    while (historyList.children.length > 30) historyList.lastChild.remove();
  }

  // ---------- Modal helpers ----------
  function openModal(el) {
    if (!el) return;
    el.hidden = false;
    el.setAttribute('aria-hidden', 'false');
  }
  function closeModal(el) {
    if (!el) return;
    el.hidden = true;
    el.setAttribute('aria-hidden', 'true');
  }
  document.addEventListener('click', (e) => {
    const closeTarget = e.target.getAttribute && e.target.getAttribute('data-close');
    if (closeTarget) closeModal($(closeTarget));
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(modalScan);
      closeModal(modalSettings);
    }
  });

  // ---------- Run Scan ----------
  const SCAN_LINES = [
    { label: 'Obliq AI Neural Core',           value: 'ONLINE',       kind: 'ok' },
    { label: 'Digital Hammerr Execution Layer',value: 'ONLINE',       kind: 'ok' },
    { label: 'Hammerr Wake Channel',           value: 'ARMED',        kind: 'armed' },
    { label: 'Interface Layer',                value: 'STABLE',       kind: 'cyan' },
    { label: 'Security Layer',                 value: 'PROTECTED',    kind: 'ok' },
    { label: 'Local Server',                   value: 'ONLINE',       kind: 'ok' },
    { label: 'API Keys',                       value: 'NOT EXPOSED',  kind: 'ok' }
  ];

  let scanRunning = false;
  function runScan() {
    if (scanRunning) return;
    scanRunning = true;

    // Reset list
    scanList.querySelectorAll('li').forEach((li, i) => {
      li.classList.remove('done');
      const s = li.querySelector('.status');
      s.className = 'status pending';
      s.textContent = '…';
      li.dataset.key = String(i);
    });
    scanFill.style.width = '0%';
    scanPct.textContent = '0%';
    scanStatusEl.textContent = 'INITIALIZING…';
    openModal(modalScan);
    log('Scan started · 0–100%', 'warn');
    // Step 7 — cards into scanning state
    ['neural','security','command','interface','server'].forEach((k) => setCardStatus(k, 'scanning'));
    pushEvent('System scan started', 'warn');
    pushNotif('Diagnostics', 'Cinematic system scan started', 'cyan', '⌬');
    setTask('Running 0–100% system scan');

    let pct = 0;
    const stepLines = SCAN_LINES.map((_, i) => Math.round(((i + 1) / SCAN_LINES.length) * 100));
    let nextLineIdx = 0;

    const tick = setInterval(() => {
      pct = Math.min(100, pct + (1 + Math.random() * 2));
      scanFill.style.width = pct.toFixed(0) + '%';
      scanPct.textContent = pct.toFixed(0) + '%';

      if (nextLineIdx < stepLines.length && pct >= stepLines[nextLineIdx]) {
        const cfg = SCAN_LINES[nextLineIdx];
        const li = scanList.children[nextLineIdx];
        if (li) {
          li.classList.add('done');
          const s = li.querySelector('.status');
          s.className = 'status ' + cfg.kind;
          s.textContent = cfg.value;
        }
        scanStatusEl.textContent = 'CHECKING ' + cfg.label.toUpperCase();
        log(cfg.label + ': ' + cfg.value, 'ok');
        nextLineIdx++;
      }

      if (pct >= 100) {
        clearInterval(tick);
        scanStatusEl.textContent = 'SCAN COMPLETE';
        log('Scan complete · all systems nominal', 'ok');
        scanRunning = false;
        // Step 7 — cards back to online + alerts
        ['neural','security','command','interface','server'].forEach((k) => setCardStatus(k, 'online'));
        flashHudAlert('SCAN COMPLETE', 'ok');
        pushEvent('System scan completed', 'ok');
        pushNotif('Diagnostics', 'System scan completed', 'ok', '✓');
        setTask('Idle · awaiting input');
      }
    }, 70);
  }

  // ---------- Microphone module (Step 4) ----------
  // Local-only: getUserMedia is called ONLY from onActivate. No SpeechRecognition.
  const mic = {
    stream: null,
    audioCtx: null,
    source: null,
    analyser: null,
    data: null,
    rafId: null,
    muted: false,
    requesting: false
  };

  function setMicPanel(stateName) {
    if (!micPanel) return;
    micPanel.setAttribute('data-mic', stateName);
  }
  function setMicStatusChip(label) {
    if (micStatus) micStatus.textContent = label;
  }
  function setMicOnoff(label) {
    if (micOnoff) micOnoff.textContent = label;
  }
  function setRightPanelMic(label, klass) {
    if (statusMic) {
      statusMic.textContent = label;
      statusMic.className = 's-val' + (klass ? ' ' + klass : '');
    }
    if (dotMic) {
      dotMic.className = 'dot ' + (klass || 'dim');
    }
  }

  function showCalibration(ms) {
    if (!calibration) return;
    calibration.hidden = false;
    setTimeout(() => { calibration.hidden = true; }, ms || 1200);
  }

  function clearMeter() {
    if (!meterBars) return;
    meterBars.querySelectorAll('span').forEach((b) => { b.style.height = '4%'; });
    if (micLevelTxt) micLevelTxt.textContent = '0%';
  }

  function startMeterLoop() {
    if (!mic.analyser || !mic.data || !meterBars) return;
    const bars = meterBars.querySelectorAll('span');
    const N = bars.length;
    const dataArr = mic.data;
    const buckets = new Array(N).fill(0);
    const stepCount = Math.floor(dataArr.length / N);

    // Step 10 — also drive the Step 6 voice-wave bars from real audio
    const vwBars = voiceWave ? voiceWave.querySelectorAll('span') : [];
    const M = vwBars.length;

    log('Audio stream active · driving meter + waveform from real microphone input', 'ok');

    // Safari sink workaround watchdog — sample first 30 frames; if analyser is flat,
    // the audio graph isn't producing data despite a live mic stream.
    let watchdogFramesLeft = 30;
    let watchdogMaxSeen = 0;

    const draw = () => {
      mic.analyser.getByteTimeDomainData(dataArr);
      if (watchdogFramesLeft > 0) {
        for (let wi = 0; wi < dataArr.length; wi++) {
          const v = Math.abs(dataArr[wi] - 128);
          if (v > watchdogMaxSeen) watchdogMaxSeen = v;
        }
        watchdogFramesLeft--;
        if (watchdogFramesLeft === 0 && watchdogMaxSeen <= 1) {
          log('Audio analyser silent — Safari sink workaround applied, awaiting input', 'warn');
          if (clap.enabled) setDiagClap('LIMITED', 'warn');
        }
      }
      // Bucket peak amplitude per bar
      for (let i = 0; i < N; i++) {
        let peak = 0;
        const start = i * stepCount;
        for (let j = 0; j < stepCount; j++) {
          const v = Math.abs(dataArr[start + j] - 128);
          if (v > peak) peak = v;
        }
        // Smooth toward target
        buckets[i] = buckets[i] * 0.55 + peak * 0.45;
      }
      let total = 0;
      for (let i = 0; i < N; i++) {
        const h = Math.min(100, (buckets[i] / 128) * 320); // amplify a bit
        bars[i].style.height = (mic.muted ? 4 : Math.max(4, h)) + '%';
        total += buckets[i];
      }
      // Overall RMS-ish level percentage
      const avg = total / (N * 128);
      const pct = mic.muted ? 0 : Math.min(100, Math.round(avg * 220));
      if (micLevelTxt) micLevelTxt.textContent = pct + '%';

      // Step 10 — voice-wave bars from real audio (overrides CSS animation)
      if (M > 0) {
        for (let k = 0; k < M; k++) {
          const idx = Math.floor((k / M) * N);
          const peak = buckets[idx] || 0;
          const h = Math.max(8, Math.min(100, (peak / 128) * 280));
          vwBars[k].style.height = (mic.muted ? 8 : h) + '%';
        }
      }

      // Step 12 — Clap detection (only when enabled AND not muted)
      if (clap.enabled && !mic.muted) {
        let framePeak = 0;
        for (let i = 0; i < N; i++) if (buckets[i] > framePeak) framePeak = buckets[i];
        const peakNorm = framePeak / 128;
        const now = Date.now();
        // Sharp transient: peak above threshold AND much louder than the previous frame
        if (peakNorm > clap.threshold && peakNorm > clap.prevPeak * 1.6 && now > clap.cooldownUntil) {
          clap.cooldownUntil = now + 1500;
          onClapDetected(peakNorm);
        }
        clap.prevPeak = peakNorm;
      } else {
        clap.prevPeak = 0;
      }

      mic.rafId = requestAnimationFrame(draw);
    };
    draw();
  }

  // Step 12 — Clap detected handler
  function onClapDetected(peakNorm) {
    lifecycle.set('processing');
    log('Clap detected · peak=' + peakNorm.toFixed(2) + ' · sensitivity=' + clap.sensitivity, 'hammerr');
    setDiagClap('TRIGGERED', 'ok');
    setTimeout(() => { if (clap.enabled) setDiagClap('ACTIVE · ' + clap.sensitivity.toUpperCase(), 'ok'); }, 1500);
    flashHudAlert('CLAP DETECTED', 'clap');
    pushTranscript('Clap detected (peak ' + peakNorm.toFixed(2) + ')', 'wake');
    pushEvent('Clap activation · peak ' + peakNorm.toFixed(2), 'wake');
    pushNotif('Clap', 'Clap activation received', 'gold', '⚡');
    pushVoiceHistory('[clap]', 'clap activation', 'CLAP', peakNorm);
    runActivationSequence('clap (peak ' + peakNorm.toFixed(2) + ')');
    setTimeout(() => {
      applyState('listening');
      openCommandWindow(10000); // accept a spoken command for 10s after clap-wake
    }, 2700);
  }

  function setClapEnabled(on) {
    clap.enabled = !!on;
    if (toggleClap) {
      toggleClap.setAttribute('data-on', clap.enabled ? 'true' : 'false');
      toggleClap.setAttribute('aria-pressed', clap.enabled ? 'true' : 'false');
    }
    if (toggleClapLabel) toggleClapLabel.textContent = clap.enabled ? 'ON' : 'OFF';
    log('Clap mode → ' + (clap.enabled ? 'ON' : 'OFF') + (clap.enabled ? ' · sensitivity ' + clap.sensitivity : ''),
        clap.enabled ? 'ok' : 'dim');
    pushEvent('Clap mode ' + (clap.enabled ? 'enabled' : 'disabled'), clap.enabled ? 'ok' : 'dim');
    if (clap.enabled) setDiagClap('ACTIVE · ' + clap.sensitivity.toUpperCase(), 'ok');
    else              setDiagClap('OFF', 'off');
    try {
      fetch('/api/clap-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clapEnabled: clap.enabled, sensitivity: clap.sensitivity })
      });
    } catch (_e) {}
  }
  function setClapSensitivity(level) {
    if (!SENS_THRESHOLDS[level]) return;
    clap.sensitivity = level;
    clap.threshold = SENS_THRESHOLDS[level];
    if (sensitivityGroup) {
      sensitivityGroup.querySelectorAll('.sens-btn').forEach((b) => {
        b.classList.toggle('active', b.getAttribute('data-sens') === level);
      });
    }
    if (clap.enabled) setDiagClap('ACTIVE · ' + level.toUpperCase(), 'ok');
    log('Clap sensitivity → ' + level.toUpperCase() + ' (threshold ' + clap.threshold + ')', 'dim');
    try {
      fetch('/api/clap-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clapEnabled: clap.enabled, sensitivity: clap.sensitivity })
      });
    } catch (_e) {}
  }

  // ---------- Step 13 — Live Transcript + Voice Commands ----------
  function setLiveTranscript(opts) {
    if (!liveTranscript) return;
    if (opts.mode !== undefined) liveTranscript.setAttribute('data-mode', opts.mode);
    if (opts.state !== undefined && ltState) ltState.textContent = opts.state;
    if (opts.detected !== undefined && ltDetected) ltDetected.textContent = opts.detected;
    if (opts.command !== undefined && ltCommand) ltCommand.textContent = opts.command;
    if (opts.response !== undefined && ltResponse) ltResponse.textContent = opts.response;
    if (opts.confidence !== undefined) {
      const c = (typeof opts.confidence === 'number' && opts.confidence >= 0) ? Math.min(1, opts.confidence) : null;
      if (confFill) confFill.style.setProperty('--w', c === null ? '0%' : (Math.round(c * 100) + '%'));
      if (confPct)  confPct.textContent = c === null ? '—' : (Math.round(c * 100) + '%');
    }
  }

  async function pushVoiceHistory(transcript, command, result, confidence) {
    // Local update
    if (voiceHistoryList) {
      const placeholder = voiceHistoryList.querySelector('.placeholder');
      if (placeholder) placeholder.remove();
      const li = document.createElement('li');
      li.className = 'voice-history-item';
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, '0');
      const mm = String(d.getMinutes()).padStart(2, '0');
      const ss = String(d.getSeconds()).padStart(2, '0');
      const t = document.createElement('span'); t.className = 'ts';  t.textContent = `${hh}:${mm}:${ss}`;
      const c = document.createElement('span'); c.className = 'cmd'; c.textContent = transcript || command;
      const r = document.createElement('span');
      const klass = (result || '').toLowerCase();
      r.className = 'res ' + (klass === 'ok' ? 'ok' : klass === 'clap' ? 'clap' : 'nomatch');
      r.textContent = (result || 'INFO').toUpperCase();
      li.appendChild(t); li.appendChild(c); li.appendChild(r);
      voiceHistoryList.prepend(li);
      while (voiceHistoryList.children.length > 40) voiceHistoryList.lastChild.remove();
    }
    // Backend
    try {
      await fetch('/api/voice-history', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ transcript: transcript, command: command, result: result, confidence: confidence })
      });
    } catch (_e) {}
  }

  async function loadVoiceHistory() {
    try {
      const r = await fetch('/api/voice-history');
      if (!r.ok) throw new Error('voice-hist ' + r.status);
      const d = await r.json();
      if (!voiceHistoryList) return;
      voiceHistoryList.innerHTML = '';
      if (!d.entries || d.entries.length === 0) {
        const ph = document.createElement('li');
        ph.className = 'voice-history-item placeholder';
        ph.textContent = 'No voice commands yet · say "Hammerr" then a command';
        voiceHistoryList.appendChild(ph);
        return;
      }
      d.entries.slice().reverse().forEach((e) => {
        const li = document.createElement('li');
        li.className = 'voice-history-item';
        const dt = new Date(e.time);
        const hh = String(dt.getHours()).padStart(2, '0');
        const mm = String(dt.getMinutes()).padStart(2, '0');
        const ss = String(dt.getSeconds()).padStart(2, '0');
        const t = document.createElement('span'); t.className = 'ts';  t.textContent = `${hh}:${mm}:${ss}`;
        const c = document.createElement('span'); c.className = 'cmd'; c.textContent = e.transcript || e.command || '—';
        const r = document.createElement('span');
        const klass = (e.result || '').toLowerCase();
        r.className = 'res ' + (klass === 'ok' ? 'ok' : klass === 'clap' ? 'clap' : 'nomatch');
        r.textContent = (e.result || 'INFO').toUpperCase();
        li.appendChild(t); li.appendChild(c); li.appendChild(r);
        voiceHistoryList.appendChild(li);
      });
    } catch (_e) {}
  }

  // Try to execute a transcript as a command. Returns true if matched.
  function tryExecuteVoiceCommand(transcript, confidence) {
    const raw = (transcript || '').trim();
    if (!raw) return false;

    lifecycle.set('processing');
    setLiveTranscript({ mode: 'awaiting', state: 'PARSING', detected: raw, command: '…', response: '…', confidence: confidence });

    // Don't fire on bare wake words during the command window
    if (isBareHammerr(raw) || /^(hey\s+hammerr?|digital\s+hammerr?)$/i.test(raw)) {
      lifecycle.ended();
      return false;
    }

    const s = raw.toLowerCase();
    const hit = COMMANDS.find((c) => c.match(s));
    if (hit) {
      console.log('[HAMMERR] command detected:', hit.name, '· transcript:', raw);
      const responseText = 'Executing: ' + hit.name;
      setLiveTranscript({ mode: 'match', state: 'EXECUTED', command: hit.name, response: responseText, confidence: confidence });
      log('Voice command [' + hit.name + '] · "' + raw + '"', 'ok');
      pushHistory('VOICE: ' + raw);
      pushVoiceHistory(raw, hit.name, 'OK', confidence);
      flashHudAlert('COMMAND RECEIVED', 'cyan');
      hit.run();
      return true;
    } else {
      setLiveTranscript({ mode: 'nomatch', state: 'NO MATCH', command: '—', response: 'Command not recognized', confidence: confidence });
      log('Voice transcript not matched · "' + raw + '"', 'warn');
      pushVoiceHistory(raw, '—', 'NO MATCH', confidence);
      lifecycle.ended();
      return false;
    }
  }

  // Step 10 — clear voice-wave inline heights so CSS animations resume
  function resetVoiceWaveBars() {
    if (!voiceWave) return;
    voiceWave.querySelectorAll('span').forEach((b) => { b.style.height = ''; });
  }

  async function postAudioState(enabled) {
    try {
      await fetch('/api/audio-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ microphoneEnabled: !!enabled })
      });
    } catch (_e) { /* local only — ignore */ }
  }

  async function requestMicrophone() {
    if (mic.stream) return { ok: true, reused: true };
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      return { ok: false, error: 'getUserMedia unavailable in this browser' };
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true },
        video: false
      });
      mic.stream = stream;
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) {
        return { ok: false, error: 'AudioContext unsupported in this browser' };
      }
      mic.audioCtx = new Ctx();
      mic.source = mic.audioCtx.createMediaStreamSource(stream);
      mic.analyser = mic.audioCtx.createAnalyser();
      mic.analyser.fftSize = 512;
      mic.source.connect(mic.analyser);
      // Safari sink workaround — Safari's AnalyserNode emits flat silence (all 128s)
      // unless the audio graph terminates at audioCtx.destination. Use a muted GainNode
      // so the mic is never actually played back to the user.
      try {
        const sink = mic.audioCtx.createGain();
        sink.gain.value = 0.0;
        mic.analyser.connect(sink);
        sink.connect(mic.audioCtx.destination);
        mic.sink = sink;
      } catch (_e) { /* non-fatal */ }
      mic.data = new Uint8Array(mic.analyser.frequencyBinCount);
      // Chrome / Safari can create the AudioContext in "suspended" state until a user gesture.
      // Resume AFTER the graph is fully wired (Safari requires this order).
      if (mic.audioCtx.state === 'suspended') {
        try { await mic.audioCtx.resume(); } catch (_e) {}
      }
      log('AudioContext state: ' + mic.audioCtx.state + ' · sampleRate ' + mic.audioCtx.sampleRate + ' Hz · browser ' + env.label, 'dim');
      // Device label (often blank until interaction)
      const track = stream.getAudioTracks()[0];
      const label = (track && track.label) ? track.label : 'Default input device';
      if (micDevice) micDevice.textContent = label;
      log('Microphone active · stream ID ' + (stream.id || '').slice(0, 8), 'ok');
      setDiagMic('CONNECTED', 'ok');
      return { ok: true };
    } catch (err) {
      return { ok: false, error: err && err.name ? err.name : 'unknown' };
    }
  }

  function releaseMicrophone(reason) {
    // Step 11 — stop wake listening before releasing the audio device
    stopWakeListening('mic released');
    if (mic.rafId) cancelAnimationFrame(mic.rafId), mic.rafId = null;
    if (mic.stream) {
      mic.stream.getTracks().forEach((t) => { try { t.stop(); } catch (_) {} });
    }
    if (mic.audioCtx && mic.audioCtx.state !== 'closed') {
      try { mic.audioCtx.close(); } catch (_) {}
    }
    mic.stream = null; mic.audioCtx = null; mic.source = null;
    mic.analyser = null; mic.data = null; mic.muted = false;

    setMicPanel('idle');
    setMicStatusChip('WAITING');
    setMicOnoff('OFF');
    if (micDevice) micDevice.textContent = '— not requested —';
    clearMeter();
    setRightPanelMic('NOT ENABLED', 'dim');
    btnMute && (btnMute.disabled = true, btnMute.textContent = 'MUTE');
    btnMicRel && (btnMicRel.disabled = true);
    btnCalibrate && (btnCalibrate.disabled = true);
    resetVoiceWaveBars();
    postAudioState(false);
    // Revert voice panel mic state to detected/not-detected (we kept the device count)
    if (voice.microphoneDetected) setVoiceMicState('CONNECTED', 'ok');
    else                          setVoiceMicState('NOT DETECTED', 'warn');
    setDiagMic('OFF', 'off');
    setDiagSpeech('OFF', 'off');
    if (reason) log('Microphone released · ' + reason, 'dim');
  }

  function toggleMute() {
    if (!mic.stream) return;
    mic.muted = !mic.muted;
    mic.stream.getAudioTracks().forEach((t) => { t.enabled = !mic.muted; });
    if (mic.muted) {
      setMicPanel('muted');
      setMicStatusChip('MUTED');
      setMicOnoff('MUTE');
      btnMute.textContent = 'UNMUTE';
      log('Microphone muted (track disabled, still connected)', 'warn');
      setDiagMic('MUTED', 'warn');
    } else {
      setMicPanel('connected');
      setMicStatusChip('CONNECTED');
      setMicOnoff('ON');
      btnMute.textContent = 'MUTE';
      log('Microphone unmuted', 'ok');
      setDiagMic('CONNECTED', 'ok');
    }
  }

  // ---------- Button handlers ----------
  async function onActivate() {
    if (mic.requesting) { log('Mic request already in progress', 'dim'); return; }
    mic.requesting = true;
    log('Manual activation received', 'warn');
    pushHistory('ACTIVATE → cinematic + requesting mic');

    // Step 8 — run cinematic activation in parallel with mic request
    runActivationSequence('Activate button');

    setMicPanel('testing');
    setMicStatusChip('TESTING');
    setMicOnoff('REQ');
    log('Requesting microphone permission (only triggered by Activate click)', 'dim');

    const result = await requestMicrophone();
    mic.requesting = false;
    console.log('[HAMMERR] microphone permission:', result.ok ? 'GRANTED' : ('DENIED · ' + (result.error || 'unknown')));

    if (result.ok) {
      // Granted — calibrate, then go live
      setMicPanel('testing');
      setMicStatusChip('CALIBRATING');
      setMicOnoff('CAL');
      showCalibration(1100);
      log('MICROPHONE CONNECTED', 'ok');
      setRightPanelMic('CONNECTED', 'ok');
      setVoiceMicState('CONNECTED', 'ok');
      postAudioState(true);
      // Step 7 — mission feedback
      flashHudAlert('ACCESS GRANTED', 'ok');
      pushEvent('Microphone access granted', 'ok');
      pushNotif('Microphone', 'Access granted · local-only capture', 'ok', '◉');
      setCardStatus('voice', 'online');
      setTask('Hammerr wake channel armed');
      postActivationLog('Microphone access granted', 'OK', 'Activate button');

      setTimeout(() => {
        setMicPanel('connected');
        setMicStatusChip('CONNECTED');
        setMicOnoff('ON');
        btnMute  && (btnMute.disabled = false);
        btnMicRel && (btnMicRel.disabled = false);
        btnCalibrate && (btnCalibrate.disabled = false);
        startMeterLoop();
        applyState('armed');
        log('Microphone connected', 'ok');
        log('Permission granted', 'ok');
        log('HAMMERR WAKE CHANNEL ARMED', 'warn');
        log('Calibration complete · live input level visible', 'ok');
        // Step 11 — engage real wake-word listening after mic is live
        startWakeListening();
      }, 1150);
    } else {
      setMicPanel('denied');
      setMicStatusChip('DENIED');
      setMicOnoff('OFF');
      setRightPanelMic('ACCESS DENIED', 'dim');
      setVoiceMicState('DENIED', 'warn');
      setVoiceMode('demo');
      btnMute  && (btnMute.disabled = true);
      btnMicRel && (btnMicRel.disabled = true);
      postAudioState(false);
      log('MICROPHONE ACCESS DENIED · ' + (result.error || 'no reason'), 'warn');
      log('Permission denied', 'warn');
      log('You can grant access by clicking Activate again', 'dim');
      // Step 7 — mission feedback
      pushEvent('Microphone access denied', 'warn');
      pushNotif('Microphone', 'Access denied · still in demo mode', 'warn', '⚠');
      postActivationLog('Microphone access denied', 'WARN', 'Activate button');
    }
  }
  function onListen() {
    if (state === 'listening') {
      log('Already listening · no change', 'dim');
      return;
    }
    applyState('listening');
    log('LISTENING READY', 'ok');
    log('Listening simulation active', 'ok');
    log('// note: real wake-word recognition is NOT engaged yet', 'dim');
    pushHistory('START LISTENING → listening (sim)');

    // Step 6 — voice layer: prepare SR. Step 11 — also engage real listening if mic is live.
    const ok = prepareSpeechRecognition();
    if (ok) {
      setVoiceMode('listening');
      setVoiceListening('PREPARED', 'ok');
      setVoiceReady('YES', 'ok');
      postVoiceStatus({ mode: 'voice-ready', voiceSupported: true, microphoneDetected: voice.microphoneDetected });
      // Step 11 — engage real wake listening if mic is already granted
      if (mic.stream) {
        startWakeListening();
      } else {
        log('Wake-word listening will engage once you click Activate (mic permission required)', 'dim');
      }
    } else {
      setVoiceMode('demo');
      setVoiceListening('DEMO ONLY', 'warn');
      postVoiceStatus({ mode: 'demo' });
    }
    // Step 7 — mission feedback
    flashHudAlert('SYSTEM READY', 'ok');
    pushEvent('Listening simulation engaged', 'ok');
    pushNotif('Voice Layer', 'Listening simulation active', 'ok', '◉');
    setCardStatus('voice', 'online');
    setCardStatus('command', 'online');
    setTask('Listening (simulated) · awaiting wake word');
  }
  function onStop() {
    const wasActive = (state !== 'standby') || !!mic.stream;
    // Step 11 — halt wake-word listening before the mic stream is released
    stopWakeListening('stop pressed');
    if (mic.stream) releaseMicrophone('stop pressed');
    applyState('standby');
    // Reset voice panel listening row
    setVoiceListening('IDLE', '');
    setVoiceMode(voice.voiceSupported && voice.microphoneDetected ? 'voice-ready' : 'demo');
    if (wasActive) {
      log('System returned to standby', 'ok');
      pushHistory('STOP → standby');
      // Step 7 — mission feedback
      pushEvent('System returned to standby', 'ok');
      pushNotif('System', 'Returned to standby', 'cyan', '○');
      setCardStatus('voice', 'standby');
      setTask('Idle · awaiting input');
    } else {
      log('Already in standby', 'dim');
    }
  }
  function onScan() {
    log('Run scan requested', 'warn');
    pushHistory('RUN SCAN');
    runScan();
  }
  function onSettings() {
    log('Settings opened', 'dim');
    pushHistory('SETTINGS');
    openModal(modalSettings);
  }
  function onClearHistory() {
    historyList.innerHTML = '<li class="history-item placeholder">No commands yet · awaiting input</li>';
    log('History cleared', 'dim');
  }

  // ---------- Hammerr Intelligence Layer (Step 5) ----------
  // Pure local simulation. No external AI. No LLM calls.
  // Parser is keyword-based on a lowercased input string.
  const cmdInput = $('cmd-input');
  const cmdSend  = $('cmd-send');
  const cmdChips = $('cmd-chips');
  const cmdChipsExec = $('cmd-chips-exec'); // Step 9
  const modalTasks    = $('modal-tasks');    // Step 9
  const modalNotes    = $('modal-notes');    // Step 9
  const modalSecurity = $('modal-security'); // Step 9

  // ---------- Text-to-Speech (voice output) ----------
  // Uses the browser's built-in SpeechSynthesis API. 100% local, no API keys.
  const tts = {
    enabled: true,
    supported: false,
    voice: null,
    rate: 1.0,
    pitch: 0.92,
    volume: 1.0,
    init() {
      if (typeof window === 'undefined' || typeof window.speechSynthesis === 'undefined') {
        log('Text-to-Speech not supported in this browser', 'warn');
        return;
      }
      this.supported = true;
      const pickVoice = () => {
        const voices = window.speechSynthesis.getVoices() || [];
        if (!voices.length) return;
        const preferred = [
          'Google UK English Male',
          'Microsoft David - English (United States)',
          'Microsoft Mark - English (United States)',
          'Microsoft Guy Online (Natural) - English (United States)',
          'Daniel',
          'Google US English'
        ];
        let chosen = null;
        for (const n of preferred) { chosen = voices.find(v => v.name === n); if (chosen) break; }
        if (!chosen) chosen = voices.find(v => /en[-_]/i.test(v.lang) && /(david|daniel|mark|guy|fred|alex|male)/i.test(v.name));
        if (!chosen) chosen = voices.find(v => v.lang && v.lang.toLowerCase().startsWith('en'));
        if (!chosen) chosen = voices[0];
        this.voice = chosen;
        log('TTS voice ready · ' + (chosen ? chosen.name + ' (' + chosen.lang + ')' : 'default'), 'ok');
      };
      pickVoice();
      if (typeof window.speechSynthesis.onvoiceschanged !== 'undefined') {
        window.speechSynthesis.onvoiceschanged = pickVoice;
      }
    },
    speak(text) {
      if (!this.enabled || !this.supported || !text) return;
      try {
        const clean = String(text).replace(/[•·⬢◈⚠⚙▸▼◆►]/g, '').replace(/\s+/g, ' ').trim();
        if (!clean) return;
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(clean);
        if (this.voice) u.voice = this.voice;
        u.rate = this.rate;
        u.pitch = this.pitch;
        u.volume = this.volume;
        u.lang = (this.voice && this.voice.lang) || 'en-US';
        u.onstart = () => lifecycle.set('speaking');
        u.onend   = () => lifecycle.ended();
        u.onerror = () => lifecycle.ended();
        window.speechSynthesis.speak(u);
      } catch (_e) { /* swallow */ }
    },
    stop() {
      if (!this.supported) return;
      try { window.speechSynthesis.cancel(); } catch (_e) {}
      lifecycle.ended();
    },
    toggle() {
      this.enabled = !this.enabled;
      if (!this.enabled) this.stop();
      log('Voice output ' + (this.enabled ? 'ON' : 'OFF'), this.enabled ? 'ok' : 'warn');
      pushEvent('Voice output ' + (this.enabled ? 'enabled' : 'muted'), this.enabled ? 'ok' : 'warn');
      return this.enabled;
    }
  };

  function hammerrSay(text) {
    log(text, 'hammerr');
    tts.speak(text);
  }
  function userSay(text) {
    log(text, 'user');
  }

  // Brief state pulse: enters a state, then optionally reverts
  function pulseState(name, ms, after) {
    const prev = state;
    body.setAttribute('data-state', name);
    if (hudState) hudState.textContent = name.toUpperCase();
    setTimeout(() => {
      if (typeof after === 'function') { after(prev); return; }
      // Revert to previous logical state via applyState
      applyState(prev);
    }, ms || 1800);
  }

  function runDiagnosticsSequence() {
    pulseState('diagnostics', 4400, () => applyState(state));
    setCardStatus('neural', 'scanning');
    setCardStatus('security', 'scanning');
    setTask('Running diagnostics sweep');
    pushEvent('Diagnostics started', 'warn');
    pushNotif('Diagnostics', 'Diagnostic sweep started', 'gold', '⚙');
    const steps = [
      'Probing neural mesh ............ ok',
      'Verifying interface layer ...... ok',
      'Auditing security envelope ..... ok',
      'Inspecting wake channel ........ armed-simulation',
      'Cross-checking local server .... 127.0.0.1 · healthy'
    ];
    steps.forEach((line, i) => {
      setTimeout(() => log(line, i === steps.length - 1 ? 'ok' : 'dim'), 350 + i * 700);
    });
    setTimeout(() => {
      hammerrSay('Diagnostic sweep complete. All local layers nominal.');
      setCardStatus('neural', 'online');
      setCardStatus('security', 'online');
      flashHudAlert('SYSTEM READY', 'ok');
      pushEvent('Diagnostics completed', 'ok');
      pushNotif('Diagnostics', 'Diagnostics completed', 'ok', '✓');
      setTask('Idle · awaiting input');
    }, 350 + steps.length * 700 + 200);
  }

  function runNeuralScanSequence() {
    pulseState('scanning', 5200, () => applyState(state));
    setCardStatus('neural', 'scanning');
    setTask('Running neural mesh sweep');
    pushEvent('Neural scan started', 'warn');
    pushNotif('Neural Core', 'Neural mesh sweep started', 'cyan', '⌬');
    const nodes = ['α-band','β-band','γ-band','δ-band','θ-band','σ-coherence'];
    nodes.forEach((n, i) => {
      setTimeout(() => log('neural node [' + n + '] ........ sync', i === nodes.length - 1 ? 'ok' : 'dim'), 300 + i * 750);
    });
    setTimeout(() => {
      hammerrSay('Neural mesh sweep complete. Synthesis stable.');
      setCardStatus('neural', 'online');
      flashHudAlert('SCAN COMPLETE', 'ok');
      pushEvent('Neural scan completed', 'ok');
      pushNotif('Neural Core', 'Neural scan completed', 'ok', '✓');
      setTask('Idle · awaiting input');
    }, 300 + nodes.length * 750 + 200);
  }

  function flashAnalyzing(ms) {
    pulseState('analyzing', ms || 1500);
  }

  // ---------- Command Router Phase 1 — external launchers ----------
  // Extensible registry: append entries here to add more voice commands.
  // Each entry: { name, patterns: [RegExp...], url?, action?, speak? }
  //   - url     : opens in a new tab via openExternal()
  //   - action  : custom function (runs instead of url)
  //   - speak   : TTS line ("Opening YouTube"); falls back to "Opening <name>"
  function openExternal(url) {
    if (!url) return false;
    // 1) window.open first — works in most browsers when invoked from a
    //    SpeechRecognition result handler since that counts as a user gesture.
    try {
      const w = window.open(url, '_blank', 'noopener,noreferrer');
      if (w) return true;
    } catch (_e) {}
    // 2) Fallback: synthetic anchor click — sometimes bypasses popup blocker.
    try {
      const a = document.createElement('a');
      a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      a.remove();
      return true;
    } catch (_e) {}
    return false;
  }

  const EXTERNAL_COMMANDS = [
    {
      name: 'open youtube',
      patterns: [/\bopen\s+youtube\b/, /\byoutube\b/, /\byou\s*tube\b/],
      url: 'https://www.youtube.com',
      speak: 'Opening YouTube.'
    },
    {
      name: 'open google',
      patterns: [/\bopen\s+google\b/, /\bgoogle\s+search\b/, /\bsearch\s+google\b/],
      url: 'https://www.google.com',
      speak: 'Opening Google.'
    },
    {
      name: 'open gmail',
      patterns: [/\bopen\s+gmail\b/, /\bgmail\b/, /\bopen\s+(email|mail)\b/, /\bcheck\s+(email|mail)\b/],
      url: 'https://mail.google.com',
      speak: 'Opening Gmail.'
    },
    {
      name: 'open whatsapp',
      patterns: [/\bopen\s+whats?app(\s+web)?\b/, /\bwhats?app\s+web\b/, /\bwhats?app\b/],
      url: 'https://web.whatsapp.com',
      speak: 'Opening WhatsApp Web.'
    },
    {
      name: 'open calculator',
      patterns: [/\bopen\s+calculator\b/, /\bcalculator\b/, /\bcalc\b/],
      url: 'https://www.google.com/search?q=calculator',
      speak: 'Opening calculator.'
    },
    {
      name: 'open weather',
      patterns: [/\bopen\s+weather\b/, /\bweather\b/, /\bforecast\b/, /\bwhat.?s\s+the\s+weather\b/],
      url: 'https://www.google.com/search?q=weather',
      speak: 'Opening weather.'
    },
    {
      name: 'time',
      patterns: [/\bwhat.?s\s+the\s+time\b/, /\bcurrent\s+time\b/, /\btell\s+me\s+the\s+time\b/, /\bwhat\s+time\s+is\s+it\b/, /\btime\s+please\b/],
      action: () => {
        const now = new Date();
        const t = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
        hammerrSay('The time is ' + t + '.');
      }
    }
  ];

  function externalToCommand(entry) {
    return {
      name: entry.name,
      match: (s) => entry.patterns.some((re) => re.test(s)),
      run: () => {
        if (entry.action) { entry.action(); return; }
        const line = entry.speak || ('Opening ' + entry.name.replace(/^open\s+/, '') + '.');
        hammerrSay(line);
        const ok = openExternal(entry.url);
        if (!ok) {
          log('External open blocked · check popup permissions for ' + entry.url, 'warn');
          setTimeout(() => hammerrSay('I could not open that page. Please allow popups for this site.'), 700);
        }
      }
    };
  }

  // Command table — order matters: more specific patterns first.
  // External launchers go FIRST so they take priority over generic matchers.
  const COMMANDS = [
    ...EXTERNAL_COMMANDS.map(externalToCommand),
    {
      // Step 8 — "Hammerr wake up" / "wake up" → cinematic activation
      match: (s) => /\b(hammerr\s*wake\s*up|wake\s*up|cinematic\s*wake)\b/.test(s),
      name: 'hammerr wake up',
      run: () => { hammerrSay('Engaging cinematic wake sequence…'); runActivationSequence('command "Hammerr wake up"'); }
    },
    {
      // Step 9 — open dashboard
      match: (s) => /\b(open\s*dashboard|expand\s*dashboard|dashboard\s*open)\b/.test(s),
      name: 'open dashboard',
      run: () => { openDashboard(); hammerrSay('Dashboard expanded.'); }
    },
    {
      // Step 9 — close dashboard
      match: (s) => /\b(close\s*dashboard|collapse\s*dashboard|dashboard\s*close)\b/.test(s),
      name: 'close dashboard',
      run: () => { closeDashboard(); hammerrSay('Dashboard collapsed.'); }
    },
    {
      // Step 17 — open diagnostics modal (different from "run diagnostics" animation)
      match: (s) => /\b(open\s*diagnostics|show\s*diagnostics|diagnostics\s*panel|system\s*diagnostics)\b/.test(s),
      name: 'open diagnostics',
      run: () => { hammerrSay('Opening system diagnostics.'); refreshDiagnostics(); openModal(modalDiagnostics); }
    },
    {
      // Step 9 — show tasks
      match: (s) => /\b(show\s*tasks|tasks|task\s*list)\b/.test(s),
      name: 'show tasks',
      run: () => {
        hammerrSay('Opening task list.');
        openModal(modalTasks);
        pushEvent('Tasks opened', 'ok');
      }
    },
    {
      // Step 9 — show notes
      match: (s) => /\b(show\s*notes|notes|glossary)\b/.test(s),
      name: 'show notes',
      run: () => {
        hammerrSay('Opening notes.');
        openModal(modalNotes);
        pushEvent('Notes opened', 'ok');
      }
    },
    {
      match: (s) => /\b(neural\s*scan|neural\s*mesh|neural)\b/.test(s),
      name: 'neural scan',
      run: () => { hammerrSay('Engaging neural mesh sweep…'); runNeuralScanSequence(); }
    },
    {
      match: (s) => /\b(diagnos|diag)\b/.test(s),
      name: 'diagnostics',
      run: () => { hammerrSay('Initiating diagnostic sweep…'); runDiagnosticsSequence(); }
    },
    {
      match: (s) => /\b(activate\s*protocol|activate|protocol)\b/.test(s),
      name: 'activate protocol',
      run: () => { hammerrSay('Activation protocol engaged.'); onActivate(); }
    },
    {
      match: (s) => /\b(enter\s*standby|standby|stand\s*down|stop)\b/.test(s),
      name: 'enter standby',
      run: () => { hammerrSay('Returning to standby.'); onStop(); }
    },
    {
      match: (s) => /\b(scan\s*system|run\s*scan|system\s*scan|scan)\b/.test(s),
      name: 'scan system',
      run: () => { hammerrSay('Running cinematic system scan…'); runScan(); }
    },
    {
      match: (s) => /\b(system\s*status|status|health\s*check)\b/.test(s),
      name: 'system status',
      run: () => {
        flashAnalyzing(1300);
        hammerrSay('All local systems operational. No external APIs connected.');
        hammerrSay('Server: 127.0.0.1 · keys: none · microphone: ' + (mic.stream ? 'connected' : 'idle'));
      }
    },
    {
      match: (s) => /\b(who\s*are\s*you|identify|identity|introduce)\b/.test(s),
      name: 'who are you',
      run: () => {
        flashAnalyzing(1200);
        hammerrSay('I am Hammerr. Obliq AI command intelligence layer.');
        hammerrSay('Built local-first · no external brain attached · simulated responses in Step 5.');
      }
    },
    {
      // Step 9 — security report opens the modal in addition to console output
      match: (s) => /\b(show\s*security|security\s*report|security)\b/.test(s),
      name: 'security report',
      run: () => {
        hammerrSay('Security report:');
        log('• Bound to 127.0.0.1 only (no LAN, no internet)', 'ok');
        log('• No API keys present, no .env loaded', 'ok');
        log('• Microphone only on Activate click · NOT auto', 'ok');
        log('• No external AI · no cloud · no telemetry upload', 'ok');
        openModal(modalSecurity);
        pushEvent('Security report opened', 'ok');
      }
    },
    {
      match: (s) => /\b(open\s*settings|settings|preferences)\b/.test(s),
      name: 'open settings',
      run: () => { hammerrSay('Opening safe settings panel.'); openModal(modalSettings); }
    },
    {
      match: (s) => /\b(hello|hi|hey|greetings|hammerr)\b/.test(s),
      name: 'hello hammerr',
      run: () => {
        flashAnalyzing(900);
        hammerrSay('Digital Hammerr online. Obliq AI systems standing by.');
      }
    }
  ];

  function processCommand(rawInput) {
    const raw = (rawInput || '').trim();
    if (!raw) return;
    userSay(raw);
    pushHistory('CMD: ' + raw);
    setLastCommand(raw);
    pushEvent('Command: ' + raw, 'ok');

    // Step 6 — bare "Hammerr" is the wake-word simulation (must beat the greeting matcher)
    if (isBareHammerr(raw)) {
      simulateWakeDetected();
      return;
    }

    const s = raw.toLowerCase();
    const hit = COMMANDS.find((c) => c.match(s));
    if (hit) {
      flashHudAlert('COMMAND RECEIVED', 'cyan');
      hit.run();
    } else {
      hammerrSay('Command not recognized. Try: ' +
        '"hello hammerr", "system status", "run diagnostics", "run neural scan", "show security", "open settings".');
    }
  }

  function submitCmd() {
    if (!cmdInput) return;
    const v = cmdInput.value;
    cmdInput.value = '';
    cmdInput.focus();
    processCommand(v);
  }

  // ---------- Hammerr Voice Layer (Step 6) ----------
  // Capability detection + safe SR preparation + wake-word simulation.
  // No SpeechRecognition.start() is ever called. No mic auto-request.
  const voice = {
    voiceSupported: false,
    microphoneDetected: false,
    micState: 'NOT DETECTED',   // CONNECTED | NOT DETECTED | DENIED | DISABLED | DEMO MODE
    mode: 'demo',               // demo | voice-ready | listening | wake
    SRClass: null,
    sr: null,                   // prepared, never started
    prepared: false
  };

  function setVoiceMode(mode) {
    voice.mode = mode;
    if (voicePanel) voicePanel.setAttribute('data-voice-mode', mode);
    if (voiceModeChip) {
      const labels = { demo: 'DEMO MODE', 'voice-ready': 'VOICE READY', listening: 'LISTENING', wake: 'WAKE DETECTED' };
      voiceModeChip.textContent = labels[mode] || mode.toUpperCase();
    }
  }

  function setVoiceMicState(label, klass) {
    voice.micState = label;
    if (vMic) {
      vMic.textContent = label;
      vMic.className = 'vv' + (klass ? ' ' + klass : '');
    }
  }

  function setVoiceListening(label, klass) {
    if (vListen) {
      vListen.textContent = label;
      vListen.className = 'vv' + (klass ? ' ' + klass : '');
    }
  }

  function setVoiceReady(label, klass) {
    if (vReady) {
      vReady.textContent = label;
      vReady.className = 'vv' + (klass ? ' ' + klass : '');
    }
  }

  function pushTranscript(text, kind) {
    if (!voiceTranscript) return;
    // Clear placeholder once first real line arrives
    const placeholder = voiceTranscript.querySelector('.vt-line.dim');
    if (placeholder && /transcript idle/i.test(placeholder.textContent)) placeholder.remove();
    const line = document.createElement('div');
    line.className = 'vt-line' + (kind ? ' ' + kind : '');
    const t = document.createElement('span');
    t.className = 'ts';
    t.textContent = '[' + ts() + ']';
    line.appendChild(t);
    line.appendChild(document.createTextNode(' ' + text));
    voiceTranscript.appendChild(line);
    voiceTranscript.scrollTop = voiceTranscript.scrollHeight;
  }

  async function postVoiceStatus(patch) {
    try {
      await fetch('/api/voice-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(patch || {})
      });
    } catch (_e) { /* local only */ }
  }

  async function detectVoiceCapabilities() {
    // SpeechRecognition support
    voice.SRClass = window.SpeechRecognition || window.webkitSpeechRecognition || null;
    voice.voiceSupported = !!voice.SRClass;

    // Microphone presence (no permission prompt — enumerateDevices works without it)
    let micCount = 0;
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
        const list = await navigator.mediaDevices.enumerateDevices();
        micCount = list.filter((d) => d.kind === 'audioinput').length;
      }
    } catch (_e) { micCount = 0; }
    voice.microphoneDetected = micCount > 0;

    // Update voice panel
    if (voice.microphoneDetected) {
      setVoiceMicState('CONNECTED', 'ok');
    } else {
      setVoiceMicState('NOT DETECTED', 'warn');
    }
    setVoiceListening('IDLE', '');
    if (voice.voiceSupported && voice.microphoneDetected) {
      setVoiceMode('voice-ready');
      setVoiceReady('YES', 'ok');
      log('Voice layer: SpeechRecognition supported · microphone present · voice-ready', 'ok');
    } else if (!voice.voiceSupported) {
      setVoiceMode('demo');
      setVoiceReady('UNSUPPORTED', 'warn');
      pushTranscript('Voice not supported — switching to demo mode', 'dim');
      log('Voice layer: SpeechRecognition unsupported · DEMO MODE', 'warn');
    } else {
      setVoiceMode('demo');
      setVoiceReady('NO MIC', 'demo');
      pushTranscript('No microphone detected — running in demo mode', 'dim');
      log('Voice layer: no microphone detected · DEMO MODE', 'warn');
    }

    postVoiceStatus({
      voiceSupported: voice.voiceSupported,
      microphoneDetected: voice.microphoneDetected,
      mode: (voice.voiceSupported && voice.microphoneDetected) ? 'voice-ready' : 'demo'
    });
  }

  // ---------- Step 11: Real wake-word detection ----------
  // Wake patterns — case-insensitive, intentionally permissive because browser
  // engines may transcribe "Hammerr" as "hammer"/"hammered"/etc.
  const WAKE_PATTERNS = [
    { re: /\bhammerr?\s+wake\s*up\b/i,    label: 'hammerr wake up' },
    { re: /\bdigital\s+hammerr?\b/i,      label: 'digital hammerr' },
    { re: /\bhey\s+hammerr?\b/i,          label: 'hey hammerr' },
    { re: /\bhammerr?\b/i,                label: 'hammerr' }
  ];

  // wake module
  const wake = {
    listening: false,      // is .start() currently engaged
    intended: false,       // does the user *want* it listening (controls auto-restart)
    cooldownUntil: 0,
    lastPhrase: '',
    startGuard: 0          // monotonic guard against double-start
  };

  // Step 12 — Clap detection state (local audio analysis only)
  const clap = {
    enabled: false,
    sensitivity: 'medium',       // 'low' | 'medium' | 'high'
    threshold: 0.30,             // computed from sensitivity
    cooldownUntil: 0,
    prevPeak: 0
  };
  const SENS_THRESHOLDS = { low: 0.45, medium: 0.30, high: 0.20 };

  // Step 13 — post-wake command window
  const cmdWindow = { until: 0 };
  function openCommandWindow(ms) {
    cmdWindow.until = Date.now() + (ms || 10000);
    lifecycle.set('listening');
    // Auto-revert to idle when the window expires (unless TTS / processing takes over)
    setTimeout(() => { if (Date.now() >= cmdWindow.until) lifecycle.ended(); }, (ms || 10000) + 50);
  }
  function inCommandWindow() { return Date.now() < cmdWindow.until; }

  function detectWakeWord(transcript) {
    if (!transcript) return null;
    const s = String(transcript).toLowerCase();
    for (const p of WAKE_PATTERNS) {
      if (p.re.test(s)) return p.label;
    }
    return null;
  }

  async function postWakeHistory(phrase, state) {
    try {
      await fetch('/api/wake-history', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phrase: phrase, state: state || 'WAKE DETECTED', source: 'speech' })
      });
    } catch (_e) { /* local-only */ }
  }

  function onRealWakeDetected(matchedLabel, fullTranscript) {
    // Cooldown to prevent double-fires from continuous recognition
    const now = Date.now();
    if (now < wake.cooldownUntil) return;
    wake.cooldownUntil = now + 4000;
    wake.lastPhrase = matchedLabel;

    console.log('[HAMMERR] wake word detected:', matchedLabel, '(heard:', fullTranscript, ')');
    lifecycle.set('processing');
    log('Wake detected · "' + matchedLabel + '" (heard: "' + (fullTranscript || '') + '")', 'hammerr');
    setDiagSpeech('WAKE: ' + matchedLabel.toUpperCase(), 'ok');
    pushTranscript('Detected: "' + matchedLabel + '"', 'wake');
    pushEvent('Wake word "' + matchedLabel + '"', 'wake');
    postWakeHistory(matchedLabel, 'WAKE DETECTED');
    tts.speak('Yes? Hammerr online.');

    // Cinematic activation flow
    runActivationSequence('wake word "' + matchedLabel + '"');

    // After cinematic settles (~2600ms), shift to LISTENING READY state
    setTimeout(() => {
      applyState('listening');
      log('LISTENING READY · awaiting command', 'ok');
      setTask('Listening ready · awaiting command');
      // Step 13 — open a 10-second window for spoken commands
      openCommandWindow(10000);
      setLiveTranscript({ mode: 'awaiting', state: 'AWAITING COMMAND', detected: '— speak a command —', command: '—', response: '—', confidence: null });
    }, 2700);
  }

  function startWakeListening() {
    if (!voice.SRClass) {
      log('Voice not supported — switching to demo mode', 'warn');
      pushTranscript('Speech transcription unavailable on this browser', 'dim');
      setLiveTranscript({ mode: 'unsupported', state: 'LIMITED', detected: 'Speech transcription unavailable on this browser', command: '—', response: '—', confidence: null });
      setDiagSpeech(env.isSafari ? 'LIMITED' : 'UNSUPPORTED', 'warn');
      if (env.isSafari) flashHudAlert('VOICE LIMITED ON SAFARI', 'warn');
      setVoiceMode('demo');
      setVoiceReady('UNSUPPORTED', 'warn');
      return false;
    }
    if (!mic.stream) {
      log('Wake listening needs microphone · click Activate to grant', 'warn');
      return false;
    }
    if (wake.listening) {
      log('Wake listening already active', 'dim');
      return true;
    }

    // (Re)create the SR object — Chrome can leak state across .start() calls.
    // Safari quirks: continuous=true fires onstart/onend with no results;
    // interim results are the only way to surface transcripts before final.
    try {
      const sr = new voice.SRClass();
      sr.lang = 'en-US';
      sr.continuous     = !env.isSafari;
      sr.interimResults = env.isSafari ? true : false;
      sr.maxAlternatives = env.isSafari ? 1 : 3;

      sr.onresult = function (event) {
        try {
          for (let i = event.resultIndex; i < event.results.length; i++) {
            const r = event.results[i];
            if (!r) continue;

            // Best alternative (first is highest confidence per spec)
            const top = r[0] || {};
            const topText = top.transcript || '';
            const topConf = (typeof top.confidence === 'number' && top.confidence >= 0) ? top.confidence : 0.6;

            // Interim transcript (Safari): surface in the live transcript panel so the
            // user sees text immediately — but don't execute commands until isFinal.
            if (!r.isFinal) {
              if (topText) {
                setLiveTranscript({ mode: 'awaiting', state: 'HEARING…', detected: topText, command: '…', response: '…', confidence: topConf });
              }
              continue;
            }

            // 1) Wake word — always wins
            let wakeMatch = null;
            for (let a = 0; a < r.length; a++) {
              const t = r[a] && r[a].transcript;
              if (!t) continue;
              const m = detectWakeWord(t);
              if (m) { wakeMatch = { label: m, text: t }; break; }
            }
            if (wakeMatch) {
              onRealWakeDetected(wakeMatch.label, wakeMatch.text);
              return;
            }

            // 2) Voice command — only inside the post-wake window (Step 13)
            if (inCommandWindow() && topText) {
              tryExecuteVoiceCommand(topText, topConf);
            } else if (topText) {
              // Outside window: show transcript for transparency but don't execute
              setLiveTranscript({ mode: 'idle', state: 'IDLE', detected: topText, command: 'wake required', response: '—', confidence: topConf });
            }
          }
        } catch (err) {
          log('Wake/voice parse error · ' + (err && err.message), 'warn');
        }
      };

      sr.onstart = function () {
        log('Speech recognition: started', 'ok');
        setDiagSpeech(env.isSafari ? 'LIMITED' : 'READY', env.isSafari ? 'warn' : 'ok');
      };
      sr.onaudiostart = function () {
        log('Speech recognition: audio start (mic stream attached)', 'dim');
      };
      sr.onspeechstart = function () {
        log('Speech recognition: speech detected (parsing…)', 'dim');
      };
      sr.onspeechend = function () {
        log('Speech recognition: speech ended (finalizing)', 'dim');
      };
      sr.onnomatch = function () {
        log('Speech recognition: no match', 'warn');
      };

      sr.onerror = function (event) {
        const code = (event && event.error) || 'unknown';
        if (code === 'no-speech' || code === 'aborted') {
          // benign — recognition just timed out
          return;
        }
        if (code === 'not-allowed' || code === 'service-not-allowed') {
          log('Wake listening blocked · permission revoked or denied · ' + code, 'warn');
          setDiagSpeech('DENIED', 'warn');
          wake.intended = false;
          setVoiceMode('demo');
          return;
        }
        if (code === 'audio-capture') {
          log('Speech recognition: no microphone available (audio-capture error)', 'warn');
          setDiagSpeech('NO MIC', 'warn');
          return;
        }
        if (code === 'network') {
          log('Speech recognition: network error · Chrome SR uses Google’s servers · check connection', 'warn');
          setDiagSpeech('NET ERR', 'warn');
          return;
        }
        log('Wake listening error · ' + code, 'warn');
        setDiagSpeech('ERR · ' + code.toUpperCase(), 'warn');
      };

      sr.onend = function () {
        wake.listening = false;
        log('Speech recognition: ended (will auto-restart if still intended)', 'dim');
        // Auto-restart while intended (continuous can stop after silences)
        if (wake.intended && mic.stream) {
          // Tiny back-off to avoid tight loops on rapid errors
          setTimeout(() => {
            if (!wake.intended || !mic.stream) return;
            try {
              sr.start();
              wake.listening = true;
            } catch (e) {
              // InvalidStateError fires if already running — ignore
              if (e && e.name !== 'InvalidStateError') {
                log('Wake auto-restart failed · ' + (e.message || e.name), 'warn');
              }
            }
          }, 250);
        }
      };

      voice.sr = sr;
      voice.prepared = true;
      wake.intended = true;
      try {
        sr.start();
      } catch (startErr) {
        // InvalidStateError if already running — let onend auto-restart
        if (startErr && startErr.name !== 'InvalidStateError') {
          log('Speech recognition .start() failed · ' + (startErr.message || startErr.name), 'warn');
          setDiagSpeech('START ERR', 'warn');
        }
      }
      wake.listening = true;
      setDiagSpeech('READY', 'ok');
      log('Real wake-word listening engaged · word: "Hammerr" (also Hammer / Hey Hammerr / Digital Hammerr / Hammerr wake up)', 'ok');
      log('All speech processing stays in this browser · nothing uploaded', 'dim');
      setVoiceMode('listening');
      setVoiceListening('ACTIVE', 'ok');
      setVoiceReady('YES', 'ok');
      pushEvent('Wake-word listening engaged', 'ok');
      pushNotif('Voice Layer', 'Wake-word listening engaged', 'ok', '◉');
      postVoiceStatus({ voiceSupported: true, microphoneDetected: true, mode: 'voice-ready' });
      return true;
    } catch (err) {
      log('Wake start failed · ' + (err && err.message ? err.message : 'unknown'), 'warn');
      setVoiceMode('demo');
      setVoiceReady('UNSUPPORTED', 'warn');
      return false;
    }
  }

  function stopWakeListening(reason) {
    wake.intended = false;
    if (voice.sr) {
      try { voice.sr.stop(); } catch (_e) {}
      try { voice.sr.abort && voice.sr.abort(); } catch (_e) {}
    }
    wake.listening = false;
    if (reason) log('Wake listening stopped · ' + reason, 'dim');
  }

  // ---------- Step 14 — Hammerr AI Brain (local, rule-based) ----------
  // No external AI, no LLM, no cloud. Responses are generated locally from
  // pattern-matching + a small per-session memory.
  const brain = {
    history: [],            // [{role, text, intent, topic, time}]
    lastTopic: null,
    lastIntent: null,
    sessionStartedAt: Date.now(),
    pendingApproval: null,  // {actionId, text}
    pendingClarification: null
  };

  function brainSetState(s) {
    if (!aiChat) return;
    aiChat.setAttribute('data-brain-state', s);
    if (aiStateChip) aiStateChip.textContent = s.toUpperCase();
    if (aiThinking) {
      const isThinkingPhase = (s === 'thinking' || s === 'analyzing' || s === 'responding');
      aiThinking.hidden = !isThinkingPhase;
      aiThinking.setAttribute('aria-hidden', isThinkingPhase ? 'false' : 'true');
      if (aiThinkingText) {
        aiThinkingText.textContent =
          s === 'thinking'   ? 'Thinking…' :
          s === 'analyzing'  ? 'Analyzing local context…' :
          s === 'responding' ? 'Responding…' : '';
      }
    }
    // mirror to backend
    try {
      fetch('/api/ai-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ state: s })
      });
    } catch (_e) {}
  }

  function brainAppendBubble(role, text) {
    if (!aiThread) return;
    const b = document.createElement('div');
    b.className = 'ai-bubble ' + (role === 'user' ? 'user' : 'bot');
    const r = document.createElement('span');
    r.className = 'bub-role';
    r.textContent = role === 'user' ? 'YOU' : 'HAMMERR';
    const t = document.createElement('span');
    t.className = 'bub-text';
    t.textContent = text;
    b.appendChild(r);
    b.appendChild(t);
    aiThread.appendChild(b);
    aiThread.scrollTop = aiThread.scrollHeight;
  }

  function classifyIntent(rawText) {
    const s = (rawText || '').toLowerCase().trim();
    if (!s) return { intent: 'empty' };
    if (/^(hi|hello|hey|greetings|yo)\b/.test(s)) return { intent: 'greeting' };
    if (/who\s+are\s+you|what\s+are\s+you|introduce\s+yourself|tell\s+me\s+about\s+yourself/.test(s)) return { intent: 'identity' };
    if (/\b(help|capabilities?|what\s+can\s+you\s+do|commands?\s+list)\b/.test(s)) return { intent: 'capability' };
    if (/\b(summari[sz]e|summary|recap)\b/.test(s)) return { intent: 'summarize' };
    if (/(tell\s+me\s+more|expand|continue|go\s+on|more\s+detail|elaborate)\b/.test(s)) return { intent: 'followup', topic: brain.lastTopic };
    if (/^(yes|yeah|yep|sure|ok|okay|confirm|approve|do it)\b/.test(s)) return { intent: 'affirm' };
    if (/^(no|nope|nah|cancel|stop|abort|reject)\b/.test(s)) return { intent: 'deny' };
    if (/\b(thank|thanks)\b/.test(s)) return { intent: 'thanks' };
    if (/\b(security|safe|private|api\s*keys?|exposed|secrets?)\b/.test(s)) return { intent: 'about', topic: 'security' };
    if (/\b(wake|hammerr|hammer)\b/.test(s)) return { intent: 'about', topic: 'wake' };
    if (/\b(mic|microphone)\b/.test(s)) return { intent: 'about', topic: 'microphone' };
    if (/\b(voice|speech|recognition)\b/.test(s)) return { intent: 'about', topic: 'voice' };
    if (/\b(clap)\b/.test(s)) return { intent: 'about', topic: 'clap' };
    if (/\b(scan|diagnos|neural)\b/.test(s)) return { intent: 'about', topic: 'scan' };
    if (/\b(setting|preference)\b/.test(s)) return { intent: 'about', topic: 'settings' };
    if (/\b(task|to[-\s]?do)\b/.test(s)) return { intent: 'about', topic: 'tasks' };
    if (/\b(note|glossary)\b/.test(s)) return { intent: 'about', topic: 'notes' };
    if (/\b(deploy|public|online|host)\b/.test(s)) return { intent: 'about', topic: 'deployment' };
    if (/\b(mode|assistant|focus|analysis|standby)\b/.test(s)) return { intent: 'about', topic: 'mode' };
    if (/\b(command|chip|shortcut)\b/.test(s)) return { intent: 'about', topic: 'commands' };
    if (/\b(action|execute|run)\b/.test(s)) return { intent: 'about', topic: 'actions' };
    if (/\b(time|timer|clock)\b/.test(s)) return { intent: 'about', topic: 'timer' };
    return { intent: 'unknown' };
  }

  const TOPIC_INFO = {
    security:   'Security: server bound to 127.0.0.1, no public exposure. No API keys present, no .env loaded. Microphone only after Activate. No external AI, no cloud, no telemetry.',
    wake:       'Wake word is "Hammerr". The browser SpeechRecognition listens locally for variants: Hammerr, Hammer, Hey Hammerr, Digital Hammerr, Hammerr wake up. Nothing is uploaded.',
    microphone: 'Microphone is opt-in. It is requested only when you click Activate. The mic feed drives a local AnalyserNode for the level meter, waveform, and clap detection.',
    voice:      'Voice layer uses your browser\'s built-in SpeechRecognition. After wake detection, a 10-second window accepts spoken commands. Confidence scores come from the engine.',
    clap:       'Clap mode is off by default. When enabled (Settings → Clap Mode), a sharp audio transient above the chosen sensitivity triggers the activation sequence.',
    scan:       'Run Scan plays a cinematic 0-100% sweep across 7 local subsystems. Run Diagnostics + Neural Scan are smaller animated sequences. All purely visual, no system probe.',
    settings:   'Settings panel is read-only except for Clap Mode toggle and sensitivity. Everything is local · no AI provider configured · no voice provider configured.',
    tasks:      'Tasks panel lists five session items: improve Hammerr wake, test voice layer, neural diagnostics, Obliq AI optimization, security verification.',
    notes:      'Glossary: Obliq AI is the intelligence layer. Digital Hammerr is the execution layer. Hammerr is the wake system. All local.',
    deployment: 'No deployment. The server is bound to 127.0.0.1 only. Two tunnel attempts were rejected by local TLS interception; nothing is exposed beyond this machine.',
    mode:       'Modes are visual: ASSISTANT, SECURITY, ANALYSIS, FOCUS, STANDBY. They shift core aura and HUD palette. State is a separate machine (standby, armed, listening, scanning, etc.).',
    commands:   'Try: "system status", "run diagnostics", "show tasks", "security report", "open dashboard", "enter standby", or speak any of those after the wake word.',
    actions:    'The Action Center lets you trigger interface actions directly: open dashboards, settings, tasks, notes, timer, system info, local search. External-page actions require explicit approval.',
    timer:      'Use the "Start 60s Timer" action in the Action Center. It runs locally and fires a notification when complete. No external scheduler.'
  };

  function brainBuildSummary() {
    if (brain.history.length === 0) return 'We have not exchanged anything yet. Ask me about "security", "wake", "voice", or say "help".';
    const userTurns = brain.history.filter(h => h.role === 'user');
    const topics = Array.from(new Set(brain.history.map(h => h.topic).filter(Boolean)));
    let summary = 'Session summary: ' + userTurns.length + ' user turn' + (userTurns.length === 1 ? '' : 's');
    if (topics.length > 0) summary += ' · topics covered: ' + topics.join(', ');
    summary += '. Active mode: ' + (body.getAttribute('data-mode') || 'standby').toUpperCase() + '. State: ' + state.toUpperCase() + '.';
    return summary;
  }

  function brainGenerateResponse(rawText) {
    const cls = classifyIntent(rawText);
    let response;
    let topic = null;

    // Pending approval — yes/no shortcut
    if (brain.pendingApproval && (cls.intent === 'affirm' || cls.intent === 'deny')) {
      const id = brain.pendingApproval.actionId;
      brain.pendingApproval = null;
      if (cls.intent === 'affirm') {
        response = 'Approved. Running action: ' + id + '.';
        setTimeout(() => actions.execute(id, true), 200);
      } else {
        response = 'Cancelled. The action was not performed.';
      }
      return { text: response, topic: 'actions', intent: cls.intent };
    }

    switch (cls.intent) {
      case 'empty':
        response = 'I did not catch that.';
        break;
      case 'greeting':
        response = 'Hello. Digital Hammerr standing by. Obliq AI intelligence layer online.';
        break;
      case 'identity':
        response = 'I am Hammerr. Obliq AI command intelligence · Digital Hammerr execution. Local-first, no external brain attached.';
        topic = 'identity';
        break;
      case 'capability':
        response = 'I can run scans, open dashboards, summarize the session, recall notes, list tasks, and execute local actions. Ask "tell me about security", or try a chip below.';
        topic = 'capability';
        break;
      case 'summarize':
        response = brainBuildSummary();
        topic = 'summary';
        break;
      case 'followup':
        if (!cls.topic) {
          response = 'I do not have a previous topic to expand on. Try asking about "security", "wake", "voice", or "clap".';
        } else {
          response = (TOPIC_INFO[cls.topic] || 'I have no extra detail on that topic.') + ' (continuing from earlier · "' + cls.topic + '")';
          topic = cls.topic;
        }
        break;
      case 'affirm':
        response = 'Acknowledged.';
        break;
      case 'deny':
        response = 'Cancelled.';
        break;
      case 'thanks':
        response = 'You are welcome.';
        break;
      case 'about':
        response = TOPIC_INFO[cls.topic] || 'I do not have local detail on that. Ask "help" for what I know.';
        topic = cls.topic;
        break;
      default:
        // Fall back to existing command parser as a soft option
        const s = rawText.toLowerCase();
        const hit = COMMANDS.find(c => c.match(s));
        if (hit) {
          response = 'That looks like a command. I will run "' + hit.name + '" now.';
          setTimeout(() => hit.run(), 300);
          topic = 'commands';
        } else {
          response = 'I did not parse that. Try "help" for what I know, "summarize" to recap, or one of the chips below.';
        }
    }
    return { text: response, topic: topic, intent: cls.intent };
  }

  async function brainProcess(rawText) {
    const text = (rawText || '').trim();
    if (!text) return;
    brainAppendBubble('user', text);
    brain.history.push({ role: 'user', text: text, time: Date.now() });

    // Multi-stage thinking animation
    brainSetState('thinking');
    await new Promise(r => setTimeout(r, 380));
    brainSetState('analyzing');
    await new Promise(r => setTimeout(r, 480));
    brainSetState('responding');
    await new Promise(r => setTimeout(r, 260));

    const { text: response, topic, intent } = brainGenerateResponse(text);
    brain.history.push({ role: 'bot', text: response, topic: topic, intent: intent, time: Date.now() });
    if (topic) brain.lastTopic = topic;
    brain.lastIntent = intent;
    brainAppendBubble('bot', response);
    tts.speak(response);

    if (aiTurns) aiTurns.textContent = brain.history.filter(h => h.role === 'user').length + ' turns';
    brainSetState('standby');

    // Mirror turn completion to backend
    try {
      fetch('/api/ai-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ state: 'standby', lastTopic: topic || brain.lastTopic, turnCompleted: true })
      });
    } catch (_e) {}
  }

  function brainSubmit() {
    if (!aiInput) return;
    const v = aiInput.value;
    aiInput.value = '';
    aiInput.focus();
    brainProcess(v);
  }

  function brainClear() {
    brain.history = [];
    brain.lastTopic = null;
    brain.lastIntent = null;
    if (aiThread) {
      aiThread.innerHTML = '';
      const intro = document.createElement('div');
      intro.className = 'ai-bubble bot intro';
      intro.innerHTML = '<span class="bub-role">HAMMERR</span><span class="bub-text">Conversation cleared. Local intelligence ready · ask anything.</span>';
      aiThread.appendChild(intro);
    }
    if (aiTurns) aiTurns.textContent = '0 turns';
    brainSetState('standby');
    log('AI conversation cleared', 'dim');
  }

  // ---------- Step 15 — Action Layer (local, opt-in approval) ----------
  const actions = {
    executed: 0,

    refreshMeta: function () {
      if (acMeta) acMeta.textContent = this.executed + ' executed';
    },

    postExecution: function (id) {
      try {
        fetch('/api/action-status', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ actionId: id })
        });
      } catch (_e) {}
    },

    _currentApprovalHandler: null,
    requestApproval: function (id, label, detail, runFn) {
      if (!modalApproval || !approvalPrompt || !approvalDetail) return;
      // Always re-query the live button (the previous cloneNode pattern leaked dead refs)
      const btn = $('approval-approve');
      if (!btn) return;
      approvalPrompt.textContent = 'Approve action: "' + label + '"?';
      approvalDetail.textContent = detail || 'No additional detail.';
      // Detach any previous handler safely before attaching the new one
      if (this._currentApprovalHandler) {
        try { btn.removeEventListener('click', this._currentApprovalHandler); } catch (_) {}
      }
      const handler = () => {
        closeModal(modalApproval);
        runFn();
        actions.executed++;
        actions.refreshMeta();
        actions.postExecution(id);
        pushNotif('Action', 'Approved · ' + label, 'gold', '✓');
        pushEvent('Approved action · ' + label, 'ok');
        log('User approved external action · ' + label, 'ok');
        try { btn.removeEventListener('click', handler); } catch (_) {}
        actions._currentApprovalHandler = null;
      };
      this._currentApprovalHandler = handler;
      btn.addEventListener('click', handler);
      openModal(modalApproval);
      brain.pendingApproval = { actionId: id, label: label };
      pushNotif('Action', 'Approval needed · ' + label, 'gold', '!');
      log('Approval requested for action · ' + label + ' (' + detail + ')', 'warn');
    },

    execute: function (id, approved) {
      const action = ACTION_HANDLERS[id];
      if (!action) { log('Unknown action · ' + id, 'warn'); return; }
      if (action.needsApproval && !approved) {
        this.requestApproval(id, action.label, action.detail || '', () => action.run());
        return;
      }
      log('Executing action · ' + action.label, 'ok');
      pushEvent('Action · ' + action.label, 'ok');
      pushHistory('ACTION · ' + action.label);
      action.run();
      this.executed++;
      this.refreshMeta();
      this.postExecution(id);
    }
  };

  // Local Search — searches across commands, notes, voice history, events
  function buildSearchIndex() {
    const items = [];
    COMMANDS.forEach(c => items.push({ cat: 'CMD', text: c.name, run: () => processCommand(c.name) }));
    const notes = [
      { text: 'Obliq AI = intelligence layer', run: () => openModal($('modal-notes')) },
      { text: 'Digital Hammerr = execution layer', run: () => openModal($('modal-notes')) },
      { text: 'Hammerr = wake system', run: () => openModal($('modal-notes')) }
    ];
    notes.forEach(n => items.push({ cat: 'NOTE', text: n.text, run: n.run }));
    const tasks = ['Improve Hammerr wake system','Test voice layer','Neural diagnostics','Obliq AI optimization','Security verification'];
    tasks.forEach(t => items.push({ cat: 'TASK', text: t, run: () => openModal($('modal-tasks')) }));
    if (voiceHistoryList) {
      voiceHistoryList.querySelectorAll('.voice-history-item:not(.placeholder) .cmd').forEach(el => {
        items.push({ cat: 'VOICE', text: el.textContent, run: () => loadVoiceHistory() });
      });
    }
    return items;
  }
  function runLocalSearch(query) {
    if (!searchResults) return;
    searchResults.innerHTML = '';
    const q = (query || '').toLowerCase().trim();
    if (!q) {
      const ph = document.createElement('li');
      ph.className = 'search-result placeholder';
      ph.textContent = 'Type to search · results stay local';
      searchResults.appendChild(ph);
      return;
    }
    const index = buildSearchIndex();
    const hits = index.filter(it => it.text.toLowerCase().includes(q)).slice(0, 30);
    if (hits.length === 0) {
      const ph = document.createElement('li');
      ph.className = 'search-result placeholder';
      ph.textContent = 'No matches · try a different keyword';
      searchResults.appendChild(ph);
      return;
    }
    hits.forEach(h => {
      const li = document.createElement('li');
      li.className = 'search-result';
      const cat = document.createElement('span');
      cat.className = 'sr-cat';
      cat.textContent = h.cat;
      li.appendChild(cat);
      li.appendChild(document.createTextNode(h.text));
      li.addEventListener('click', () => { closeModal(modalSearch); h.run(); });
      searchResults.appendChild(li);
    });
  }

  // Action implementations
  const ACTION_HANDLERS = {
    'open-dashboard':     { label: 'Open Dashboard',     run: () => openDashboard() },
    'close-dashboard':    { label: 'Close Dashboard',    run: () => closeDashboard() },
    'open-settings':      { label: 'Open Settings',      run: () => openModal($('modal-settings')) },
    'show-tasks':         { label: 'Show Tasks',         run: () => openModal($('modal-tasks')) },
    'show-notes':         { label: 'Show Notes',         run: () => openModal($('modal-notes')) },
    'show-notifications': { label: 'Show Notifications', run: () => {
        ['Hammerr', 'Obliq AI', 'Digital Hammerr', 'Security'].forEach((t, i) => {
          setTimeout(() => pushNotif(t, 'Notification stack demo · entry ' + (i+1), i % 2 ? 'gold' : 'cyan', '◉'), i * 220);
        });
    } },
    'show-system-info':   { label: 'Show System Info',   run: () => {
        // Populate dynamic fields
        const si = (id, v) => { const el = $(id); if (el) el.textContent = v; };
        si('si-mic',     mic.stream ? 'CONNECTED' : (voice.microphoneDetected ? 'DETECTED · NOT CONNECTED' : 'NOT DETECTED'));
        si('si-clap',    clap.enabled ? ('ON · ' + clap.sensitivity.toUpperCase()) : 'OFF');
        si('si-state',   (state || 'standby').toUpperCase());
        si('si-mode',    (body.getAttribute('data-mode') || 'standby').toUpperCase());
        const secs = Math.floor((Date.now() - brain.sessionStartedAt) / 1000);
        si('si-uptime',  Math.floor(secs / 60) + 'm ' + (secs % 60) + 's');
        si('si-ua',      (navigator.userAgent || 'unknown'));
        openModal(modalSysinfo);
    } },
    'start-timer':        { label: 'Start 60s Timer',    run: () => {
        const secs = 60;
        pushNotif('Timer', secs + 's timer started', 'cyan', '⏱');
        log('Timer started · ' + secs + 's', 'ok');
        setTask('Timer running · ' + secs + 's');
        setTimeout(() => {
          pushNotif('Timer', 'Timer complete (60s)', 'gold', '⏱');
          flashHudAlert('TIMER COMPLETE', 'gold');
          log('Timer complete', 'ok');
          pushEvent('Timer complete', 'ok');
        }, secs * 1000);
    } },
    'local-search':       { label: 'Local Search',       run: () => {
        if (searchInput) searchInput.value = '';
        runLocalSearch('');
        openModal(modalSearch);
        setTimeout(() => { if (searchInput) searchInput.focus(); }, 100);
    } },
    'open-website':       { label: 'Open Local Endpoint', needsApproval: true,
        detail: 'http://localhost:3000/api/health (opens in a new tab on your machine — never an external URL)',
        run: () => { try { window.open('http://localhost:3000/api/health', '_blank', 'noopener,noreferrer'); } catch (_e) {} } }
  };

  // ---------- Step 16 — Hammerr Vision Layer (local, opt-in) ----------
  // Camera is ONLY requested by user gesture (Enable Vision button or toggle).
  // Frames are analyzed locally via a hidden canvas — never uploaded.
  const vision = {
    stream: null,
    rafId: null,
    cameraDetected: false,
    state: 'standby',           // standby | ready | detecting | tracking | denied | muted
    muted: false,
    requesting: false,
    prevFrame: null,             // Uint8ClampedArray of grayscale samples
    motionEMA: 0,                // smoothed motion %
    presenceCounter: 0           // consecutive frames over threshold
  };

  function setVisionMode(mode) {
    if (!visionPanel) return;
    vision.state = mode;
    visionPanel.setAttribute('data-vision-mode', mode);
    if (vpModeChip) {
      const labels = { standby:'STANDBY', ready:'CAMERA READY', detecting:'DETECTING', tracking:'TRACKING', denied:'ACCESS DENIED', muted:'PRIVACY ON' };
      vpModeChip.textContent = labels[mode] || mode.toUpperCase();
    }
    if (statusVision) {
      const txt = {
        standby:'NOT ENABLED', ready:'CONNECTED', detecting:'DETECTING', tracking:'TRACKING',
        denied:'DENIED', muted:'PRIVACY'
      }[mode] || mode.toUpperCase();
      statusVision.textContent = txt;
      statusVision.className = 's-val' + ((mode === 'ready' || mode === 'detecting' || mode === 'tracking') ? ' ok' : ' dim');
    }
    // Live diagnostics bar mirror
    if (mode === 'ready' || mode === 'detecting' || mode === 'tracking') setDiagCam(mode.toUpperCase(), 'ok');
    else if (mode === 'muted')   setDiagCam('PRIVACY', 'warn');
    else if (mode === 'denied')  setDiagCam('DENIED', 'warn');
    else                          setDiagCam('OFF', 'off');
    if (dotVision) {
      dotVision.className = 'dot ' + (mode === 'ready' || mode === 'detecting' ? 'ok' : (mode === 'tracking' ? 'gold' : mode === 'denied' ? 'dim' : 'dim'));
    }
    if (vpPrivText) vpPrivText.textContent = (mode === 'ready' || mode === 'detecting' || mode === 'tracking') ? 'CAMERA LIVE' : (mode === 'muted' ? 'PRIVACY ACTIVE' : 'PRIVACY ON');
    try {
      fetch('/api/vision-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          visionEnabled: (mode === 'ready' || mode === 'detecting' || mode === 'tracking'),
          cameraDetected: vision.cameraDetected,
          mode: (mode === 'denied' || mode === 'muted' || mode === 'standby') ? 'standby' : (mode === 'tracking' ? 'tracking' : (mode === 'detecting' ? 'detecting' : 'ready'))
        })
      });
    } catch (_e) {}
  }

  function showVisionCalibration(ms) {
    if (!vpCalibration) return;
    vpCalibration.hidden = false;
    setTimeout(() => { vpCalibration.hidden = true; }, ms || 1100);
  }

  async function detectCameraPresence() {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
        vision.cameraDetected = false; return;
      }
      const devices = await navigator.mediaDevices.enumerateDevices();
      vision.cameraDetected = devices.some(d => d.kind === 'videoinput');
    } catch (_e) { vision.cameraDetected = false; }
  }

  async function requestCamera() {
    if (vision.stream) return { ok: true, reused: true };
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      return { ok: false, error: 'getUserMedia unavailable' };
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 320 }, height: { ideal: 240 }, facingMode: 'user' },
        audio: false
      });
      vision.stream = stream;
      if (vpFeed) {
        vpFeed.srcObject = stream;
        try { await vpFeed.play(); } catch (_) {}
      }
      const track = stream.getVideoTracks()[0];
      const label = (track && track.label) ? track.label : 'Default camera';
      if (vpDevice) vpDevice.textContent = label;
      vision.cameraDetected = true;
      return { ok: true };
    } catch (err) {
      return { ok: false, error: err && err.name ? err.name : 'unknown' };
    }
  }

  function startVisionLoop() {
    if (!vpFeed || !vpCanvas) return;
    const W = 96, H = 72;            // tiny analysis size for performance
    vpCanvas.width = W; vpCanvas.height = H;
    const ctx = vpCanvas.getContext('2d', { willReadFrequently: true });
    vision.prevFrame = null;
    log('Vision stream active · local frame analysis only · nothing uploaded', 'ok');

    const tick = () => {
      if (!vision.stream) return;
      try {
        if (vpFeed.readyState >= 2 && !vision.muted) {
          ctx.drawImage(vpFeed, 0, 0, W, H);
          const frame = ctx.getImageData(0, 0, W, H).data;
          // Compute simple grayscale + motion diff
          if (vision.prevFrame) {
            let diff = 0, total = W * H;
            for (let i = 0; i < frame.length; i += 4) {
              const g  = (frame[i] + frame[i+1] + frame[i+2]) / 3;
              const pg = vision.prevFrame[i / 4] || 0;
              diff += Math.abs(g - pg);
            }
            const avgDiff = diff / total;            // 0–255-ish
            const motion = Math.min(100, Math.round((avgDiff / 18) * 100));
            // EMA smoothing
            vision.motionEMA = vision.motionEMA * 0.6 + motion * 0.4;
            const m = Math.round(vision.motionEMA);
            if (vpMotionFill) vpMotionFill.style.setProperty('--w', m + '%');
            if (vpMotionPct) vpMotionPct.textContent = m + '%';
            // Presence: sustained motion or significant brightness
            if (m > 12) {
              vision.presenceCounter = Math.min(30, vision.presenceCounter + 1);
            } else {
              vision.presenceCounter = Math.max(0, vision.presenceCounter - 1);
            }
            if (vpPresence) vpPresence.textContent = vision.presenceCounter > 5 ? 'PRESENT' : 'NONE';
            // Promote to tracking if strong sustained motion
            if (m > 30 && vision.state === 'detecting') setVisionMode('tracking');
            else if (m <= 30 && vision.state === 'tracking') setVisionMode('detecting');
          } else {
            // Build prev frame buffer (one grayscale value per pixel)
            vision.prevFrame = new Float32Array(W * H);
          }
          // Update prev frame
          const buf = vision.prevFrame || new Float32Array(W * H);
          for (let i = 0, j = 0; i < frame.length; i += 4, j++) {
            buf[j] = (frame[i] + frame[i+1] + frame[i+2]) / 3;
          }
          vision.prevFrame = buf;
        } else if (vision.muted) {
          if (vpMotionFill) vpMotionFill.style.setProperty('--w', '0%');
          if (vpMotionPct) vpMotionPct.textContent = '0%';
          if (vpPresence) vpPresence.textContent = 'PAUSED';
        }
      } catch (e) {
        // Don't crash the loop on transient draw errors
      }
      vision.rafId = requestAnimationFrame(tick);
    };
    tick();
  }

  function releaseCamera(reason) {
    if (vision.rafId) cancelAnimationFrame(vision.rafId), vision.rafId = null;
    if (vision.stream) {
      vision.stream.getTracks().forEach(t => { try { t.stop(); } catch (_) {} });
    }
    vision.stream = null;
    vision.prevFrame = null;
    vision.motionEMA = 0;
    vision.presenceCounter = 0;
    vision.muted = false;
    if (vpFeed) { try { vpFeed.srcObject = null; } catch (_) {} }
    if (vpMotionFill) vpMotionFill.style.setProperty('--w', '0%');
    if (vpMotionPct)  vpMotionPct.textContent = '0%';
    if (vpPresence)   vpPresence.textContent = '—';
    if (vpDevice)     vpDevice.textContent = '— not requested —';
    if (vpPermission) vpPermission.textContent = 'WAITING';
    btnVisionMute      && (btnVisionMute.disabled = true);
    btnVisionCalibrate && (btnVisionCalibrate.disabled = true);
    btnVisionRelease   && (btnVisionRelease.disabled = true);
    setVisionMode('standby');
    if (toggleVision) { toggleVision.setAttribute('data-on','false'); toggleVision.setAttribute('aria-pressed','false'); }
    if (toggleVisionLabel) toggleVisionLabel.textContent = 'OFF';
    if (reason) log('Vision released · ' + reason, 'dim');
  }

  async function enableVision(trigger) {
    if (vision.requesting) return;
    vision.requesting = true;
    log('Requesting camera permission (only after click)', 'dim');
    if (vpPermission) vpPermission.textContent = 'TESTING';
    setVisionMode('detecting'); // will revert to standby on deny

    const result = await requestCamera();
    vision.requesting = false;

    if (result.ok) {
      if (vpPermission) vpPermission.textContent = 'GRANTED';
      showVisionCalibration(1100);
      log('Camera connected · ' + (trigger || 'enable button'), 'ok');
      log('Permission granted', 'ok');
      pushEvent('Camera access granted', 'ok');
      pushNotif('Vision', 'Camera connected · local analysis only', 'ok', '◉');
      btnVisionMute      && (btnVisionMute.disabled = false);
      btnVisionCalibrate && (btnVisionCalibrate.disabled = false);
      btnVisionRelease   && (btnVisionRelease.disabled = false);
      if (toggleVision) { toggleVision.setAttribute('data-on','true'); toggleVision.setAttribute('aria-pressed','true'); }
      if (toggleVisionLabel) toggleVisionLabel.textContent = 'ON';
      setTimeout(() => {
        setVisionMode('ready');
        startVisionLoop();
        setTimeout(() => { if (vision.state === 'ready') setVisionMode('detecting'); }, 800);
      }, 1150);
    } else {
      const reason = result.error || 'unknown';
      const isNoCam = /NotFoundError|DevicesNotFoundError|notreadable|OverconstrainedError/i.test(reason);
      if (isNoCam || !vision.cameraDetected) {
        if (vpPermission) vpPermission.textContent = 'NO CAMERA';
        log('NO CAMERA DETECTED', 'warn');
        pushNotif('Vision', 'No camera detected', 'warn', '⚠');
      } else {
        if (vpPermission) vpPermission.textContent = 'DENIED';
        log('CAMERA ACCESS DENIED · ' + reason, 'warn');
        pushNotif('Vision', 'Camera access denied', 'warn', '⚠');
      }
      pushEvent('Camera unavailable · ' + reason, 'warn');
      setVisionMode('denied');
      btnVisionMute      && (btnVisionMute.disabled = true);
      btnVisionCalibrate && (btnVisionCalibrate.disabled = true);
      btnVisionRelease   && (btnVisionRelease.disabled = true);
      if (toggleVision) { toggleVision.setAttribute('data-on','false'); toggleVision.setAttribute('aria-pressed','false'); }
      if (toggleVisionLabel) toggleVisionLabel.textContent = 'OFF';
    }
  }

  function toggleVisionMute() {
    if (!vision.stream) return;
    vision.muted = !vision.muted;
    vision.stream.getVideoTracks().forEach(t => { t.enabled = !vision.muted; });
    if (vision.muted) {
      setVisionMode('muted');
      btnVisionMute.textContent = 'RESUME';
      log('Vision privacy ON · camera paused locally', 'warn');
    } else {
      setVisionMode('detecting');
      btnVisionMute.textContent = 'PRIVACY';
      log('Vision resumed', 'ok');
    }
  }

  async function pingVisionStatus() {
    try {
      const r = await fetch('/api/vision-status');
      if (!r.ok) throw new Error('vision-status ' + r.status);
      const d = await r.json();
      log('Backend vision-status: enabled=' + d.visionEnabled + ' · detected=' + d.cameraDetected + ' · mode=' + d.mode, 'dim');
    } catch (_e) { log('vision-status endpoint unreachable', 'warn'); }
  }
  async function pingSystemReady() {
    try {
      const r = await fetch('/api/system-ready');
      if (!r.ok) throw new Error('system-ready ' + r.status);
      const d = await r.json();
      log('Backend system-ready: mic=' + d.microphoneEnabled + ' · vision=' + d.visionEnabled + ' · cmd=' + d.commandSystemOnline + ' · ai=' + d.intelligenceOnline, 'dim');
    } catch (_e) { log('system-ready endpoint unreachable', 'warn'); }
  }

  // ---------- Step 17 — Startup sequence + diagnostics + shortcuts ----------
  const PAGE_OPENED_AT = Date.now();

  function runStartupSequence() {
    if (!startupScreen) return;
    const stages = [
      { key: 'server',   label: 'Local server',         pct: 18, status: 'CHECKING SERVER…' },
      { key: 'intel',    label: 'Intelligence layer',   pct: 36, status: 'INITIALIZING BRAIN…' },
      { key: 'exec',     label: 'Execution layer',     pct: 54, status: 'WIRING ACTIONS…' },
      { key: 'hud',      label: 'HUD interface',       pct: 72, status: 'RENDERING HUD…' },
      { key: 'security', label: 'Security envelope',   pct: 88, status: 'AUDITING SECURITY…' },
      { key: 'wake',     label: 'Wake channel',        pct: 100, status: 'BOOT COMPLETE' }
    ];
    let i = 0;
    const advance = () => {
      if (i >= stages.length) {
        setTimeout(() => {
          startupScreen.classList.add('fade-out');
          // Fully remove after the fade-out transition so it never blocks interaction
          setTimeout(() => { startupScreen.style.display = 'none'; }, 1000);
          log('Boot sequence complete', 'ok');
        }, 220);
        return;
      }
      const s = stages[i];
      if (suChecks) {
        const li = suChecks.querySelector('[data-key="' + s.key + '"]');
        if (li) {
          li.classList.add('done');
          const state = li.querySelector('.su-c-state');
          if (state) state.textContent = 'OK';
        }
      }
      if (suFill)   suFill.style.width = s.pct + '%';
      if (suPct)    suPct.textContent = s.pct + '%';
      if (suStatus) suStatus.textContent = s.status;
      i++;
      setTimeout(advance, 320);
    };
    setTimeout(advance, 240);
  }

  // Failsafe — make sure the startup screen never persists if something errored.
  setTimeout(() => {
    if (startupScreen && !startupScreen.classList.contains('fade-out')) {
      startupScreen.classList.add('fade-out');
      setTimeout(() => { startupScreen.style.display = 'none'; }, 800);
    }
  }, 6000);

  async function computePerformanceScore() {
    let score = 100;
    const reasons = [];
    // Endpoint reachability (each missing = -4)
    const endpoints = [
      '/api/health','/api/wake-status','/api/audio-status','/api/command-library',
      '/api/voice-status','/api/system-modes','/api/activation-log','/api/command-status',
      '/api/wake-history','/api/clap-status','/api/voice-history','/api/ai-status',
      '/api/action-status','/api/vision-status','/api/system-ready'
    ];
    const checks = await Promise.all(endpoints.map(async ep => {
      try { const r = await fetch(ep); return r.ok; } catch (_) { return false; }
    }));
    const down = checks.filter(x => !x).length;
    if (down > 0) { score -= down * 4; reasons.push(down + ' endpoints down'); }
    // Feature support
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) { score -= 6; reasons.push('SR unsupported'); }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { score -= 8; reasons.push('mediaDevices unavailable'); }
    if (!(window.AudioContext || window.webkitAudioContext)) { score -= 6; reasons.push('AudioContext unavailable'); }
    score = Math.max(0, Math.min(100, score));
    return { score: score, reasons: reasons };
  }

  function refreshDiagnostics() {
    const set = (id, value, klass) => {
      const el = $(id);
      if (!el) return;
      el.textContent = value;
      el.className = 'd-chip' + (klass ? ' ' + klass : '');
    };
    // System Health + Performance Score (async — paint when ready)
    computePerformanceScore().then(({ score, reasons }) => {
      const healthEl   = $('d-health');
      const scoreFill  = $('d-score-fill');
      const scoreNum   = $('d-score-num');
      let healthLabel, healthKlass;
      if (score >= 90)      { healthLabel = 'NOMINAL';  healthKlass = 'nominal'; }
      else if (score >= 70) { healthLabel = 'DEGRADED'; healthKlass = 'degraded'; }
      else                  { healthLabel = 'FAULT';    healthKlass = 'fault'; }
      if (healthEl)  { healthEl.textContent = healthLabel; healthEl.className = 'health-chip ' + healthKlass; }
      if (scoreFill) { scoreFill.style.setProperty('--w', score + '%'); }
      if (scoreNum)  { scoreNum.textContent = score + '/100'; }
      if (reasons.length) log('Diagnostics · ' + healthLabel + ' · score ' + score + ' · ' + reasons.join(' · '), 'warn');
      else                log('Diagnostics · ' + healthLabel + ' · score ' + score, 'ok');
    });
    set('d-mic',      mic.stream ? 'CONNECTED' : (voice.microphoneDetected ? 'DETECTED · IDLE' : 'NOT DETECTED'), mic.stream ? 'ok' : 'dim');
    set('d-wake',     voice.SRClass ? (wake.intended ? 'LISTENING' : 'READY') : 'UNSUPPORTED', voice.SRClass ? (wake.intended ? 'ok' : 'warn') : 'danger');
    set('d-clap',     clap.enabled ? ('ON · ' + clap.sensitivity.toUpperCase()) : 'OFF', clap.enabled ? 'ok' : 'dim');
    set('d-vision',   vision.state.toUpperCase(), (vision.state === 'ready' || vision.state === 'detecting' || vision.state === 'tracking') ? 'ok' : 'dim');
    set('d-camera',   vision.cameraDetected ? 'DETECTED' : 'NOT DETECTED', vision.cameraDetected ? 'ok' : 'dim');
    set('d-turns',    brain.history.filter(h => h.role === 'user').length + ' TURNS', 'ok');
    set('d-actions',  actions.executed + ' EXECUTED', 'ok');
    // Histories — quick fetch
    fetch('/api/wake-history').then(r => r.json()).then(d => set('d-wakehist', d.count + ' ENTRIES', 'ok')).catch(() => {});
    fetch('/api/voice-history').then(r => r.json()).then(d => set('d-voicehist', d.count + ' ENTRIES', 'ok')).catch(() => {});
    fetch('/api/activation-log').then(r => r.json()).then(d => set('d-actlog', d.count + ' ENTRIES', 'ok')).catch(() => {});
    set('d-mode',  (body.getAttribute('data-mode') || 'standby').toUpperCase(), 'ok');
    set('d-state', (state || 'standby').toUpperCase(), 'ok');
    const secs = Math.floor((Date.now() - PAGE_OPENED_AT) / 1000);
    set('d-uptime', Math.floor(secs / 60) + 'm ' + (secs % 60) + 's', 'ok');
  }

  // Keyboard shortcuts (Step 17)
  function handleShortcut(e) {
    if (!e || e.repeat) return;
    // Skip when typing in any text input / textarea / contenteditable
    const t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || (t.isContentEditable))) return;
    const k = (e.key || '').toLowerCase();
    if (k === ' ' || e.code === 'Space') { e.preventDefault(); onActivate(); return; }
    if (k === 'escape')                  { e.preventDefault(); onStop();     return; }
    if (k === 's')                       { e.preventDefault(); onScan();     return; }
    if (k === 'd')                       { e.preventDefault(); refreshDiagnostics(); openModal(modalDiagnostics); return; }
    if (k === 'v')                       { e.preventDefault(); tts.toggle(); return; }
    if (k === '?' || (e.shiftKey && k === '/')) {
      e.preventDefault();
      if (aiInput) aiInput.focus();
    }
  }

  // Step 14/15 — backend pings
  async function pingAiStatus() {
    try {
      const r = await fetch('/api/ai-status');
      if (!r.ok) throw new Error('ai-status ' + r.status);
      const d = await r.json();
      log('Backend ai-status: ' + d.intelligence + ' · state=' + d.state + ' · turns=' + d.totalTurns, 'dim');
    } catch (_e) { log('ai-status endpoint unreachable', 'warn'); }
  }
  async function pingActionStatus() {
    try {
      const r = await fetch('/api/action-status');
      if (!r.ok) throw new Error('action-status ' + r.status);
      const d = await r.json();
      log('Backend action-status: ' + d.actions.length + ' actions · executed=' + d.totalExecuted, 'dim');
    } catch (_e) { log('action-status endpoint unreachable', 'warn'); }
  }

  // Prepare a SpeechRecognition instance — DOES NOT start it.
  // Kept from Step 6 for compatibility; Start Listening now also engages real wake listening below.
  function prepareSpeechRecognition() {
    if (voice.prepared) return true;
    if (!voice.SRClass) {
      pushTranscript('Voice not supported — switching to demo mode', 'dim');
      log('Voice not supported — switching to demo mode', 'warn');
      setVoiceMode('demo');
      setVoiceReady('UNSUPPORTED', 'warn');
      return false;
    }
    try {
      // Build a placeholder — startWakeListening() will create its own SR each engagement.
      const sr = new voice.SRClass();
      sr.lang = 'en-US';
      sr.continuous = false;
      sr.interimResults = false;
      sr.onresult = function () {};
      sr.onerror  = function () {};
      sr.onend    = function () {};
      voice.sr = sr;
      voice.prepared = true;
      log('SpeechRecognition prepared · ready to engage wake-word listening', 'ok');
      return true;
    } catch (err) {
      log('SpeechRecognition prep failed · ' + (err && err.message ? err.message : 'unknown') + ' · DEMO MODE', 'warn');
      setVoiceMode('demo');
      setVoiceReady('UNSUPPORTED', 'warn');
      return false;
    }
  }

  function isBareHammerr(raw) {
    return /^[\s,!.?]*hammerr[\s,!.?]*$/i.test((raw || '').trim());
  }

  // ---------- Step 7: Mission + Multi-Panel Intelligence Layer ----------
  // System modes, intelligence cards, mission updates, notifications, HUD alerts.
  const MODE_LABELS = {
    assistant: 'ASSISTANT MODE',
    security:  'SECURITY MODE',
    analysis:  'ANALYSIS MODE',
    focus:     'FOCUS MODE',
    standby:   'STANDBY MODE'
  };

  function setActiveMode(modeName) {
    if (!MODE_LABELS[modeName]) return;
    body.setAttribute('data-mode', modeName);
    // Update mode-selector active chip
    document.querySelectorAll('.ms-chip').forEach((c) => {
      c.classList.toggle('active', c.getAttribute('data-mode') === modeName);
    });
    if (msCurrent) msCurrent.textContent = MODE_LABELS[modeName];
    if (mMode) mMode.textContent = modeName.toUpperCase();
    log('AI mode → ' + MODE_LABELS[modeName], 'warn');
    pushEvent(MODE_LABELS[modeName], 'warn');
    pushNotif('AI Mode', MODE_LABELS[modeName], 'gold', '◆');
    // Persist to backend (in-memory)
    try {
      fetch('/api/system-modes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ current: modeName })
      });
    } catch (_e) {}
  }

  function setCardStatus(cardKey, status) {
    if (!intelCards) return;
    const card = intelCards.querySelector('.intel-card[data-card="' + cardKey + '"]');
    if (!card) return;
    card.setAttribute('data-status', status);
    const pill = card.querySelector('.ic-pill');
    if (pill) pill.textContent = status.toUpperCase();
  }

  function setTask(text) {
    if (mTask) mTask.textContent = text || 'Idle · awaiting input';
  }
  function setLastCommand(text) {
    if (mLast) mLast.textContent = text || '— none —';
  }

  function pushEvent(text, kind) {
    if (!eventsList) return;
    const placeholder = eventsList.querySelector('.placeholder');
    if (placeholder) placeholder.remove();
    const li = document.createElement('li');
    li.className = 'event-item' + (kind ? ' ' + kind : '');
    const t = document.createElement('span');
    t.className = 'ts';
    t.textContent = ts();
    li.appendChild(t);
    const tx = document.createElement('span');
    tx.textContent = text;
    li.appendChild(tx);
    eventsList.prepend(li);
    while (eventsList.children.length > 40) eventsList.lastChild.remove();
  }

  function pushNotif(title, bodyText, kind, glyph) {
    if (!notifCenter) return;
    const n = document.createElement('div');
    n.className = 'notif' + (kind ? ' ' + kind : '');
    const g = document.createElement('span');
    g.className = 'n-glyph';
    g.textContent = glyph || '⬢';
    const wrap = document.createElement('div');
    const titleEl = document.createElement('span');
    titleEl.className = 'n-title';
    titleEl.textContent = title;
    const bodyEl = document.createElement('span');
    bodyEl.className = 'n-body';
    bodyEl.textContent = bodyText;
    wrap.appendChild(titleEl);
    wrap.appendChild(bodyEl);
    n.appendChild(g);
    n.appendChild(wrap);
    notifCenter.appendChild(n);
    // Auto-remove after CSS animations finish (~5s)
    setTimeout(() => { try { n.remove(); } catch (_) {} }, 5200);
    // Cap stack at 6
    while (notifCenter.children.length > 6) notifCenter.firstChild.remove();
  }

  let alertTimer = null;
  function flashHudAlert(text, kind) {
    if (!hudAlert || !haText) return;
    haText.textContent = text;
    // Force the CSS animation to restart on every fire (otherwise rapid
    // consecutive alerts inherit the previous fade-out cycle and disappear early).
    hudAlert.hidden = true;
    hudAlert.classList.remove('clap','gold','ok','cyan');
    void hudAlert.offsetWidth; // reflow
    hudAlert.className = 'hud-alert' + (kind ? ' ' + kind : '');
    hudAlert.hidden = false;
    hudAlert.setAttribute('aria-hidden', 'false');
    if (alertTimer) clearTimeout(alertTimer);
    alertTimer = setTimeout(() => {
      hudAlert.hidden = true;
      hudAlert.setAttribute('aria-hidden', 'true');
    }, 1950);
  }

  async function pingSystemModes() {
    try {
      const r = await fetch('/api/system-modes');
      if (!r.ok) throw new Error('modes ' + r.status);
      const d = await r.json();
      log('Backend system-modes: ' + d.modes.length + ' modes · current=' + d.current, 'dim');
    } catch (_e) {
      log('system-modes endpoint unreachable', 'warn');
    }
  }

  // Wire mode-selector chip clicks (delegated)
  function wireModeSelector() {
    document.querySelectorAll('.ms-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        const m = chip.getAttribute('data-mode');
        if (m) setActiveMode(m);
      });
    });
  }

  // ---------- Step 9: Execution Layer ----------
  function openDashboard() {
    if (body.classList.contains('dashboard-expanded')) {
      log('Dashboard already expanded', 'dim');
      return;
    }
    body.classList.add('dashboard-expanded');
    log('Dashboard expanded', 'ok');
    flashHudAlert('DASHBOARD EXPANDED', 'gold');
    pushEvent('Dashboard expanded', 'ok');
    pushNotif('Dashboard', 'Panels expanded', 'gold', '◇');
    setTask('Dashboard expanded · all panels highlighted');
  }
  function closeDashboard() {
    if (!body.classList.contains('dashboard-expanded')) {
      log('Dashboard already collapsed', 'dim');
      return;
    }
    body.classList.remove('dashboard-expanded');
    log('Dashboard collapsed', 'ok');
    pushEvent('Dashboard collapsed', 'ok');
    pushNotif('Dashboard', 'Panels collapsed', 'cyan', '◇');
    setTask('Idle · awaiting input');
  }

  async function pingCommandStatus() {
    try {
      const r = await fetch('/api/command-status');
      if (!r.ok) throw new Error('cmd-status ' + r.status);
      const d = await r.json();
      log('Backend command-status: ' + d.executionLayer + ' · commands=' + d.commandsEnabled + ' · localOnly=' + d.localOnly, 'dim');
    } catch (_e) {
      log('command-status endpoint unreachable', 'warn');
    }
  }
  async function pingWakeHistory() {
    try {
      const r = await fetch('/api/wake-history');
      if (!r.ok) throw new Error('wake-hist ' + r.status);
      const d = await r.json();
      log('Backend wake-history: ' + d.count + ' entries · wake word="' + d.wakeWord + '"', 'dim');
    } catch (_e) {
      log('wake-history endpoint unreachable', 'warn');
    }
  }
  async function pingClapStatus() {
    try {
      const r = await fetch('/api/clap-status');
      if (!r.ok) throw new Error('clap-stat ' + r.status);
      const d = await r.json();
      log('Backend clap-status: enabled=' + d.clapEnabled + ' · sensitivity=' + d.sensitivity, 'dim');
    } catch (_e) {
      log('clap-status endpoint unreachable', 'warn');
    }
  }
  async function pingVoiceHistory() {
    try {
      const r = await fetch('/api/voice-history');
      if (!r.ok) throw new Error('voice-hist ' + r.status);
      const d = await r.json();
      log('Backend voice-history: ' + d.count + ' entries', 'dim');
    } catch (_e) {
      log('voice-history endpoint unreachable', 'warn');
    }
  }

  // ---------- Step 8: Cinematic Hammerr Wake Experience ----------
  let activationInProgress = false;
  let typingTimer = null;

  async function postActivationLog(event, status, trigger) {
    try {
      await fetch('/api/activation-log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: event, status: status, trigger: trigger })
      });
      // refresh activation history list after each post
      loadActivationLog();
    } catch (_e) { /* local-only */ }
  }

  function renderActivationEntries(entries) {
    if (!activationList) return;
    activationList.innerHTML = '';
    if (!entries || entries.length === 0) {
      const ph = document.createElement('li');
      ph.className = 'activation-item placeholder';
      ph.textContent = 'No activations yet · click Activate or type "Hammerr"';
      activationList.appendChild(ph);
      return;
    }
    // Newest first
    entries.slice().reverse().forEach((e) => {
      const li = document.createElement('li');
      li.className = 'activation-item';
      // Show local time HH:MM:SS
      const d = new Date(e.time);
      const hh = String(d.getHours()).padStart(2, '0');
      const mm = String(d.getMinutes()).padStart(2, '0');
      const ss = String(d.getSeconds()).padStart(2, '0');
      const t = document.createElement('span'); t.className = 'ts';  t.textContent = `${hh}:${mm}:${ss}`;
      const ev = document.createElement('span'); ev.className = 'ev'; ev.textContent = e.event;
      const stKlass = (e.status || '').toLowerCase();
      const st = document.createElement('span');
      st.className = 'st ' + (
        stKlass === 'complete' ? 'complete' :
        stKlass === 'ok' ? 'ok' :
        stKlass === 'warn' || stKlass === 'denied' || stKlass === 'failed' ? 'warn' :
        'info'
      );
      st.textContent = (e.status || 'INFO').toUpperCase();
      li.appendChild(t);
      li.appendChild(ev);
      li.appendChild(st);
      activationList.appendChild(li);
    });
  }

  async function loadActivationLog() {
    try {
      const r = await fetch('/api/activation-log');
      if (!r.ok) throw new Error('act-log ' + r.status);
      const d = await r.json();
      renderActivationEntries(d.entries || []);
    } catch (_e) { /* keep current list */ }
  }

  function typeVoiceLine(text, perChar) {
    if (!voiceLineOverlay || !vlText) return;
    voiceLineOverlay.hidden = false;
    voiceLineOverlay.setAttribute('aria-hidden', 'false');
    // force reflow before adding .show for transition
    void voiceLineOverlay.offsetWidth;
    voiceLineOverlay.classList.add('show');
    vlText.textContent = '';
    if (typingTimer) clearInterval(typingTimer);
    let i = 0;
    const delay = typeof perChar === 'number' ? perChar : 38;
    typingTimer = setInterval(() => {
      vlText.textContent += text.charAt(i);
      i++;
      if (i >= text.length) { clearInterval(typingTimer); typingTimer = null; }
    }, delay);
  }
  function hideVoiceLine() {
    if (!voiceLineOverlay) return;
    voiceLineOverlay.classList.remove('show');
    setTimeout(() => {
      voiceLineOverlay.hidden = true;
      voiceLineOverlay.setAttribute('aria-hidden', 'true');
      if (vlText) vlText.textContent = '';
    }, 380);
  }

  function showScreenDim(on) {
    if (!screenDim) return;
    if (on) {
      screenDim.hidden = false;
      screenDim.setAttribute('aria-hidden', 'false');
      void screenDim.offsetWidth;
      screenDim.classList.add('show');
    } else {
      screenDim.classList.remove('show');
      setTimeout(() => {
        screenDim.hidden = true;
        screenDim.setAttribute('aria-hidden', 'true');
      }, 560);
    }
  }

  // Cinematic wake sequence — total duration ~3s
  function runActivationSequence(trigger) {
    if (activationInProgress) {
      log('Activation already in progress · ignored', 'dim');
      return;
    }
    activationInProgress = true;

    const triggerLabel = trigger || 'manual';
    log('Wake signal received', 'warn');
    pushTranscript('Detected: "Hammerr"', 'wake');
    pushHistory('CINEMATIC WAKE · ' + triggerLabel);

    postActivationLog('Wake signal received', 'INFO', triggerLabel);

    // 1. Screen dim
    showScreenDim(true);

    // 2. Cinematic class + wake-detected state
    body.classList.add('cinematic-activation');
    const prevVoiceMode = voice.mode === 'wake' ? 'voice-ready' : voice.mode;
    setVoiceMode('wake');
    body.setAttribute('data-state', 'wake-detected');
    if (hudState)      hudState.textContent      = 'WAKE DETECTED';
    if (stateChipText) stateChipText.textContent = 'WAKE DETECTED';
    if (statusWake)    statusWake.textContent    = 'WAKE DETECTED';
    setCardStatus('command', 'scanning');
    setCardStatus('voice', 'scanning');

    // 3. Voice line typed
    typeVoiceLine('Yes sir. Hammerr command channel active.', 38);

    // 4. HUD flash @ 600ms
    setTimeout(() => flashHudAlert('HAMMERR WAKE DETECTED', 'gold'), 600);

    // 5. Notification @ 1000ms
    setTimeout(() => {
      pushNotif('Hammerr', 'Obliq AI systems online', 'gold', '⬢');
      pushEvent('Cinematic wake sequence', 'wake');
    }, 1000);

    // 6. Processing flash @ 1400ms → 2000ms
    setTimeout(() => {
      body.setAttribute('data-state', 'processing');
      if (hudState)      hudState.textContent = 'PROCESSING';
      if (stateChipText) stateChipText.textContent = 'PROCESSING';
    }, 1400);

    // 7. Settle @ 2600ms
    setTimeout(() => {
      body.classList.remove('cinematic-activation');
      showScreenDim(false);
      hideVoiceLine();
      setVoiceMode(prevVoiceMode === 'demo' ? 'demo' : 'voice-ready');
      setCardStatus('command', 'online');
      setCardStatus('voice', mic.stream ? 'online' : 'standby');
      pushTranscript('Ready for command…', 'ready');
      applyState('armed');
      setTask('Awaiting command after wake');
      log('Wake handshake complete · state → armed', 'ok');
      postActivationLog('Cinematic wake sequence', 'COMPLETE', triggerLabel);
      activationInProgress = false;
    }, 2600);
  }

  // Legacy entry point — keep for any old callers; now runs the cinematic
  function simulateWakeDetected() {
    runActivationSequence('typed "Hammerr"');
  }

  // ---------- Health + wake-status pings ----------
  async function pingHealth() {
    try {
      const r = await fetch('/api/health');
      if (!r.ok) throw new Error('health ' + r.status);
      const d = await r.json();
      statusBackend.textContent = d.backend === 'online' ? 'ONLINE' : 'UNKNOWN';
    } catch (_e) {
      statusBackend.textContent = 'OFFLINE';
      log('Backend unreachable', 'warn');
    }
  }
  async function pingWake() {
    try {
      const r = await fetch('/api/wake-status');
      if (!r.ok) throw new Error('wake ' + r.status);
      const d = await r.json();
      log('Backend wake-status: ' + d.wakeWord + ' · ' + d.wakeChannel + ' · mic=' + d.microphoneEnabled, 'dim');
    } catch (_e) {
      log('wake-status endpoint unreachable', 'warn');
    }
  }
  async function pingAudio() {
    try {
      const r = await fetch('/api/audio-status');
      if (!r.ok) throw new Error('audio ' + r.status);
      const d = await r.json();
      log('Backend audio-status: mic=' + d.microphoneEnabled + ' · wake=' + d.wakeWordEnabled + ' · clap=' + d.clapEnabled, 'dim');
    } catch (_e) {
      log('audio-status endpoint unreachable', 'warn');
    }
  }
  async function pingCommandLibrary() {
    try {
      const r = await fetch('/api/command-library');
      if (!r.ok) throw new Error('cmdlib ' + r.status);
      const d = await r.json();
      log('Backend command-library: ' + d.commands.length + ' commands · ' + d.intelligence, 'dim');
    } catch (_e) {
      log('command-library endpoint unreachable', 'warn');
    }
  }
  async function pingVoice() {
    try {
      const r = await fetch('/api/voice-status');
      if (!r.ok) throw new Error('voice ' + r.status);
      const d = await r.json();
      log('Backend voice-status: supported=' + d.voiceSupported + ' · mic=' + d.microphoneDetected + ' · mode=' + d.mode, 'dim');
    } catch (_e) {
      log('voice-status endpoint unreachable', 'warn');
    }
  }

  // ---------- Decorative bits from Step 2 (preserved) ----------
  function spawnParticles(count) {
    const host = $('particles');
    if (!host) return;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const pt = document.createElement('span');
      pt.className = 'pt' + (Math.random() < 0.18 ? ' gold' : '');
      const x = Math.random() * 100;
      const drift = (Math.random() * 80 - 40).toFixed(1) + 'px';
      const dur = (14 + Math.random() * 16).toFixed(1) + 's';
      const delay = (-Math.random() * 18).toFixed(1) + 's';
      const size = (2 + Math.random() * 3).toFixed(1);
      pt.style.left = x + 'vw';
      pt.style.width = size + 'px';
      pt.style.height = size + 'px';
      pt.style.setProperty('--drift', drift);
      pt.style.setProperty('--dur', dur);
      pt.style.setProperty('--delay', delay);
      frag.appendChild(pt);
    }
    host.appendChild(frag);
  }
  function startUptime() {
    const el = $('uptime-val');
    if (!el) return;
    const start = Date.now();
    const tick = () => {
      const s = Math.floor((Date.now() - start) / 1000);
      const hh = String(Math.floor(s / 3600)).padStart(2, '0');
      const mm = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
      const ss = String(s % 60).padStart(2, '0');
      el.textContent = `${hh}:${mm}:${ss}`;
    };
    tick();
    setInterval(tick, 1000);
  }
  function flickerTelemetry() {
    const targets = [
      { id: 'cpu-val', base: 42, range: 14 },
      { id: 'mem-val', base: 61, range: 10 },
      { id: 'net-val', base: 28, range: 22 },
      { id: 'ch-val',  base: 75, range: 8  }
    ];
    const update = () => {
      for (const t of targets) {
        const el = $(t.id);
        if (!el) continue;
        const v = Math.max(2, Math.min(98, Math.round(t.base + (Math.random() - 0.5) * t.range)));
        el.textContent = v + '%';
      }
    };
    update();
    setInterval(update, 1800);
  }

  // ---------- LIVE DIAGNOSTICS BAR (production-visible) ----------
  function setDiagChip(id, text, state) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = text;
    el.setAttribute('data-state', state || 'off');
  }
  function setDiagMic(text, state)     { setDiagChip('db-mic',     text, state); }
  function setDiagSpeech(text, state)  { setDiagChip('db-speech',  text, state); }
  function setDiagClap(text, state)    { setDiagChip('db-clap',    text, state); }
  function setDiagCam(text, state)     { setDiagChip('db-cam',     text, state); }
  function setDiagBrowser(text, state) { setDiagChip('db-browser', text, state); }

  async function queryMicrophonePermission() {
    try {
      if (!navigator.permissions || !navigator.permissions.query) return null;
      const r = await navigator.permissions.query({ name: 'microphone' });
      log('Permission API · microphone: ' + r.state, 'dim');
      if (r.state === 'granted') setDiagMic('GRANTED · IDLE', 'cyan');
      else if (r.state === 'denied') setDiagMic('DENIED', 'warn');
      else setDiagMic('PROMPT REQUIRED', 'off');
      // Live updates
      r.onchange = () => {
        log('Permission API · microphone changed: ' + r.state, 'dim');
        if (r.state === 'granted' && !mic.stream) setDiagMic('GRANTED · IDLE', 'cyan');
        else if (r.state === 'denied') setDiagMic('DENIED', 'warn');
      };
      return r.state;
    } catch (_e) { return null; }
  }

  // ---------- Secure context check (production safety) ----------
  // getUserMedia + SpeechRecognition require HTTPS or localhost.
  // If we're on an insecure http:// host, surface a friendly notice
  // instead of cryptic NotAllowedError later.
  function checkSecureContext() {
    try {
      const secure = window.isSecureContext === true;
      const host = window.location.hostname || '';
      const isLocal = host === 'localhost' || host === '127.0.0.1' || host === '::1';
      if (!secure && !isLocal) {
        log('Insecure context (' + window.location.protocol + ') · microphone & camera will be blocked by the browser. Use HTTPS.', 'warn');
        pushNotif('Security', 'Open this page over HTTPS to enable microphone & camera', 'warn', '⚠');
      }
    } catch (_e) {}
  }

  // ---------- Boot ----------
  document.addEventListener('DOMContentLoaded', () => {
  try {
    console.log('[HAMMERR] init: DOMContentLoaded');
    checkSecureContext();
    tts.init();
    setDiagBrowser(env.label, 'cyan');
    log('Browser detected · ' + env.label, 'dim');
    if (env.isSafari && !(window.SpeechRecognition || window.webkitSpeechRecognition)) {
      setDiagSpeech('LIMITED', 'warn');
    }
    // ---------- HUD core shell: wire floating control buttons ----------
    const hcActivate = $('hc-activate');
    const hcListen   = $('hc-listen');
    const hcScan     = $('hc-scan');
    const hcSettings = $('hc-settings');
    console.log('[HAMMERR] activate button found:', !!hcActivate);
    console.log('[HAMMERR] listen button found:',   !!hcListen);
    console.log('[HAMMERR] scan button found:',     !!hcScan);
    console.log('[HAMMERR] settings button found:', !!hcSettings);
    if (hcActivate) hcActivate.addEventListener('click', () => { console.log('[HAMMERR] activate clicked'); onActivate(); });
    if (hcListen)   hcListen.addEventListener('click',   () => { console.log('[HAMMERR] listen clicked');   onListen();   });
    if (hcScan)     hcScan.addEventListener('click',     () => { console.log('[HAMMERR] scan clicked');     onScan();     });
    if (hcSettings) hcSettings.addEventListener('click', () => { console.log('[HAMMERR] settings clicked'); onSettings(); });
    console.log('[HAMMERR] buttons connected');
    // Wire buttons
    btnActivate     && btnActivate.addEventListener('click', onActivate);
    btnListen       && btnListen.addEventListener('click', onListen);
    btnStop         && btnStop.addEventListener('click', onStop);
    btnScan         && btnScan.addEventListener('click', onScan);
    btnSettings     && btnSettings.addEventListener('click', onSettings);
    btnClearHistory && btnClearHistory.addEventListener('click', onClearHistory);
    btnMute        && btnMute.addEventListener('click', toggleMute);
    btnMicRel      && btnMicRel.addEventListener('click', () => { releaseMicrophone('release pressed'); pushHistory('MIC RELEASE'); });
    // Step 10 — manual calibration
    btnCalibrate   && btnCalibrate.addEventListener('click', () => {
      if (!mic.stream) {
        log('Calibrate requires an active microphone · click Activate first', 'warn');
        return;
      }
      log('Manual calibration started', 'warn');
      pushHistory('MIC CALIBRATE');
      pushEvent('Microphone calibration started', 'ok');
      pushNotif('Microphone', 'Calibrating audio levels', 'cyan', '⚙');
      showCalibration(1200);
      setTimeout(() => log('Calibration complete', 'ok'), 1250);
    });

    // Intelligence layer wiring (Step 5)
    if (cmdSend)  cmdSend.addEventListener('click', submitCmd);
    if (cmdInput) cmdInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); submitCmd(); }
    });
    if (cmdChips) cmdChips.addEventListener('click', (e) => {
      const t = e.target.closest('button.chip');
      if (!t) return;
      const phrase = t.getAttribute('data-cmd') || t.textContent.trim();
      if (cmdInput) cmdInput.value = phrase;
      submitCmd();
    });
    // Step 9 — exec chip row uses same fill+submit behavior
    if (cmdChipsExec) cmdChipsExec.addEventListener('click', (e) => {
      const t = e.target.closest('button.chip');
      if (!t) return;
      const phrase = t.getAttribute('data-cmd') || t.textContent.trim();
      if (cmdInput) cmdInput.value = phrase;
      submitCmd();
    });

    // Release the mic if the page is hidden or unloaded — safety hygiene
    window.addEventListener('beforeunload', () => { if (mic.stream) releaseMicrophone('page closed'); });

    // Initial state
    applyState('standby');
    lifecycle.set('idle');
    spawnParticles(16);
    startUptime();
    flickerTelemetry();

    // First console lines
    log('Obliq AI Command Core booted', 'ok');
    log('Server: http://localhost:3000 (local only)', 'dim');

    // Step 7 — wire mode selector + ping modes
    wireModeSelector();

    // Step 8 — wire activation history refresh
    if (btnRefreshActivation) btnRefreshActivation.addEventListener('click', () => {
      loadActivationLog();
      log('Activation history refreshed from server', 'dim');
    });

    // Step 12 — wire clap toggle + sensitivity buttons
    if (toggleClap) toggleClap.addEventListener('click', () => {
      const on = toggleClap.getAttribute('data-on') !== 'true';
      setClapEnabled(on);
      if (on && !mic.stream) {
        log('Clap mode ON · click Activate to grant microphone access', 'warn');
      }
    });
    if (sensitivityGroup) sensitivityGroup.addEventListener('click', (e) => {
      const t = e.target.closest('.sens-btn');
      if (!t) return;
      const level = t.getAttribute('data-sens');
      if (level) setClapSensitivity(level);
    });

    // Step 13 — wire voice history refresh
    if (btnRefreshVoice) btnRefreshVoice.addEventListener('click', () => {
      loadVoiceHistory();
      log('Voice history refreshed from server', 'dim');
    });

    // Step 14 — AI chat wiring
    if (aiSend)  aiSend.addEventListener('click', brainSubmit);
    if (aiInput) aiInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); brainSubmit(); }
    });
    if (aiClear) aiClear.addEventListener('click', brainClear);

    // Step 15 — Action Center wiring
    if (acGrid) acGrid.addEventListener('click', (e) => {
      const t = e.target.closest('.ac-btn');
      if (!t) return;
      const id = t.getAttribute('data-action');
      if (id) actions.execute(id, false);
    });

    // Step 15 — Local Search wiring (live filter as you type)
    if (searchInput) searchInput.addEventListener('input', () => runLocalSearch(searchInput.value));

    // Step 16 — Vision wiring
    if (btnVisionEnable)    btnVisionEnable.addEventListener('click', () => enableVision('Enable Vision button'));
    if (btnVisionMute)      btnVisionMute.addEventListener('click', toggleVisionMute);
    if (btnVisionRelease)   btnVisionRelease.addEventListener('click', () => releaseCamera('release pressed'));
    if (btnVisionCalibrate) btnVisionCalibrate.addEventListener('click', () => {
      if (!vision.stream) { log('Calibrate requires an active camera', 'warn'); return; }
      log('Vision calibration started', 'warn');
      pushEvent('Vision calibration started', 'ok');
      showVisionCalibration(1200);
    });
    if (toggleVision) toggleVision.addEventListener('click', () => {
      const on = toggleVision.getAttribute('data-on') !== 'true';
      if (on) enableVision('Settings toggle');
      else releaseCamera('Settings toggle');
    });
    // Release camera if the page is hidden/closed — safety hygiene
    window.addEventListener('beforeunload', () => { if (vision.stream) releaseCamera('page closed'); });

    // Step 17 — Diagnostics + keyboard shortcuts
    if (diagRefreshBtn) diagRefreshBtn.addEventListener('click', refreshDiagnostics);
    document.addEventListener('keydown', handleShortcut);

    // Backend pings
    pingHealth();
    pingWake();
    pingAudio();
    pingCommandLibrary();
    pingVoice();
    pingSystemModes();
    pingCommandStatus();
    pingWakeHistory();
    pingClapStatus();
    pingVoiceHistory();
    pingAiStatus();
    pingActionStatus();
    pingVisionStatus();
    pingSystemReady();
    loadActivationLog();
    loadVoiceHistory();

    // Step 14 — init brain state visuals
    brainSetState('standby');

    // Step 16 — detect camera presence (does not request permission, just checks device list)
    detectCameraPresence().then(() => {
      log('Camera presence check: ' + (vision.cameraDetected ? 'CAMERA AVAILABLE' : 'NO CAMERA DETECTED'), 'dim');
    });

    // Boot-time diagnostics bar seed values + Permissions API check
    setDiagMic('OFF', 'off');
    setDiagSpeech('OFF', 'off');
    setDiagClap('OFF', 'off');
    setDiagCam('OFF', 'off');
    queryMicrophonePermission();
    // Speech-recognition support quick check (no prompt)
    const srSupported = !!(window.SpeechRecognition || window.webkitSpeechRecognition);
    console.log('[HAMMERR] speech recognition supported:', srSupported);
    if (!srSupported) {
      setDiagSpeech('UNSUPPORTED', 'warn');
      log('SpeechRecognition not supported in this browser — wake words will run in demo mode only', 'warn');
    } else {
      setDiagSpeech('READY (click Activate)', 'cyan');
    }

    // Step 17 — startup sequence
    runStartupSequence();

    // Step 6 — voice capability detection (no permission prompt)
    detectVoiceCapabilities();

    // Step 7 — boot notifications + initial mission state
    setTimeout(() => {
      pushNotif('Hammerr', 'Hammerr online', 'gold', '⬢');
      pushEvent('Hammerr online', 'ok');
      flashHudAlert('SYSTEM READY', 'ok');
    }, 200);
    setTimeout(() => {
      pushNotif('Security', 'Security stable · local-only', 'ok', '◈');
      pushEvent('Security stable', 'ok');
    }, 1400);

    // Greet from Hammerr
    setTimeout(() => hammerrSay('Hammerr intelligence layer online. Type "hello hammerr" to begin.'), 600);

    // Diagnostic hook — exposes internal command router so DevTools + automated
    // probes can verify the table without granting microphone access.
    // Usage: window.__hammerr.testCommand('open youtube')
    window.__hammerr = {
      build: 'v30-clean-restart',
      commands: COMMANDS.map(c => c.name),
      lifecycle: () => lifecycle.state || document.body.dataset.lifecycle,
      testCommand: (phrase) => {
        cmdWindow.until = Date.now() + 10000;
        return tryExecuteVoiceCommand(String(phrase), 0.95);
      },
      detectWake: (phrase) => detectWakeWord(String(phrase))
    };
    console.log('[HAMMERR] init: complete · ready for input · ' + COMMANDS.length + ' commands registered');
  } catch (initErr) {
    console.error('[HAMMERR] init failed', initErr && (initErr.stack || initErr.message || initErr));
  }
  });
})();
