(function() {
  /* ═══════════════════════════════════════════
     Chapter 2 — Controller
     Terminal → Boot Video → Login Screen
     ═══════════════════════════════════════════ */

  // ── Boot log lines ──
  const logs = [
    "AMI BIOS (C)2026 American Megatrends, Inc.",
    "CPU: Intel(R) Core(TM) i9-14900K @ 6.00GHz",
    "Speed: 6000MHz  Count: 24",
    "Memory Test: 65536MB OK",
    "Initializing USB Controllers... Done.",
    "Verifying DMI Pool Data...",
    "Boot from Hard Drive...",
    "",
    "Loading Data Journalism Kernel...",
    "Uncompressing Linux... Ok, booting the kernel.",
    "[    0.000000] Initializing cgroup subsys cpuset",
    "[    0.000000] Initializing cgroup subsys cpu",
    "[    0.000000] Linux version 6.1.0-vne-story (gcc version 12.2.0)",
    "[    0.452102] Checking for scrollytelling assets...",
    "[    0.892341] [OK] Graphics Engine: WebGL 2.0 initialized",
    "[    1.120392] [OK] Audio Driver: Loaded",
    "[    1.562103] [OK] Data Parser: CSV, JSON, XML supported",
    "[    2.003210] Starting Chapter-2 services...",
    "[    2.450192] Initializing Neural Network for narrative generation...",
    "[    3.102391] System ready. Executing boot sequence...",
    "",
    "Starting Windows 7 Boot Animation..."
  ];

  // ── DOM references ──
  const terminalScreen = document.getElementById('terminal-screen');
  const logContainer    = document.getElementById('log-container');
  const videoScreen     = document.getElementById('video-screen');
  const bootVideo       = document.getElementById('bootVideo');
  const loginScreen     = document.getElementById('login-screen');
  const passwordInput   = document.getElementById('passwordInput');
  const submitBtn       = document.getElementById('submitBtn');
  const passwordRow     = document.getElementById('passwordRow');
  const errorMsg        = document.getElementById('errorMsg');

  const PASSWORD = '2017';
  const MAX_LENGTH = 8;

  // ── SFX Audio Elements ──
  const tickAudio = new Audio('assets/audio/SFX/terminal-tick.m4a');
  const beepAudio = new Audio('assets/audio/SFX/terminal-beep.m4a');
  const loginClickAudio = new Audio('assets/audio/SFX/login-click.m4a');
  const loginSuccessAudio = new Audio('assets/audio/SFX/login-success.m4a');
  const loginErrorAudio = new Audio('assets/audio/SFX/login-error.m4a');

  // Preload SFX
  tickAudio.preload = "auto";
  beepAudio.preload = "auto";
  loginClickAudio.preload = "auto";
  loginSuccessAudio.preload = "auto";
  loginErrorAudio.preload = "auto";

  // ══════════════════════════════════
  // Phase 1: Terminal
  // ══════════════════════════════════
  function typeLogs(index) {
    if (index < logs.length) {
      const line = document.createElement('div');
      line.className = 'log-line visible';
      line.textContent = logs[index];
      logContainer.appendChild(line);
      terminalScreen.scrollTop = terminalScreen.scrollHeight;

      // Play terminal tick SFX
      try {
        const tick = tickAudio.cloneNode();
        tick.volume = 0.25;
        tick.currentTime = 0.11;
        tick.play().catch(() => {});
      } catch (e) {}

      const delay = Math.random() * 100 + 30;
      setTimeout(() => typeLogs(index + 1), delay);
    } else {
      // Play terminal boot beep SFX
      try {
        beepAudio.volume = 0.45;
        beepAudio.currentTime = 0.12;
        beepAudio.play().catch(() => {});
      } catch (e) {}
      setTimeout(startVideo, 700);
    }
  }

  // ══════════════════════════════════
  // Phase 2: Boot Video
  // ══════════════════════════════════
  function startVideo() {
    terminalScreen.style.display = 'none';
    videoScreen.style.display = 'flex';

    bootVideo.play().catch(err => console.warn('Autoplay blocked:', err));
    bootVideo.onended = () => {
      setTimeout(showLogin, 1500);
    };

    // Safety timeout
    setTimeout(() => {
      if (!loginScreen.classList.contains('visible')) {
        showLogin();
      }
    }, 18000);
  }

  // ══════════════════════════════════
  // Phase 3: Login Screen
  // ══════════════════════════════════
  function showLogin() {
    videoScreen.style.transition = 'opacity 0.8s ease';
    videoScreen.style.opacity = '0';

    setTimeout(() => {
      videoScreen.style.display = 'none';
      loginScreen.style.display = 'block';

      // Force reflow then animate in
      void loginScreen.offsetWidth;
      loginScreen.classList.add('visible');

      // Focus the password field
      setTimeout(() => passwordInput.focus(), 600);
    }, 800);
  }

  // ── Password input constraints ──
  passwordInput.addEventListener('input', function() {
    if (this.value.length > MAX_LENGTH) {
      this.value = this.value.slice(0, MAX_LENGTH);
    }
    // Clear error on new input
    errorMsg.classList.remove('visible');
    passwordRow.classList.remove('shake');
  });

  // ── Submit on Enter ──
  passwordInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') attemptLogin();
  });

  // ── Submit button click ──
  submitBtn.addEventListener('click', attemptLogin);

  function attemptLogin() {
    const val = passwordInput.value.trim();

    // Play button click SFX
    try {
      loginClickAudio.currentTime = 0.07;
      loginClickAudio.volume = 0.55;
      loginClickAudio.play().catch(() => {});
    } catch (e) {}

    if (val === PASSWORD) {
      // Play logon success SFX
      try {
        loginSuccessAudio.volume = 0.65;
        loginSuccessAudio.currentTime = 0.13;
        loginSuccessAudio.play().catch(() => {});
      } catch (e) {}

      // Success — redirect (with safe fade out and delay for Logon chime)
      document.body.style.transition = 'opacity 1.5s cubic-bezier(0.25, 1, 0.5, 1)';
      document.body.style.opacity = '0';
      setTimeout(() => {
        window.location.href = 'chapter-3.html';
      }, 1600);
    } else {
      // Play wrong password shake chord SFX
      try {
        loginErrorAudio.currentTime = 0.07;
        loginErrorAudio.volume = 0.5;
        loginErrorAudio.play().catch(() => {});
      } catch (e) {}

      // Wrong — shake + error message
      passwordRow.classList.remove('shake');
      void passwordRow.offsetWidth; // trigger reflow
      passwordRow.classList.add('shake');
      errorMsg.textContent = 'Sai mật khẩu. Thử lại (không biết 2017 có đúng không nhỉ)!';
      errorMsg.classList.add('visible');
      passwordInput.value = '';
      passwordInput.focus();
    }
  }

  // ══════════════════════════════════
  // Init
  // ══════════════════════════════════
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => typeLogs(0), 300);
  });

})();
