/* ═══════════════════════════════════════════
   SFXManager — Shared sound manager for BCDL
   ═══════════════════════════════════════════ */
class SFXManager {
  constructor() {
    this.cache = {};
    this.muted = false;
    this.globalVolume = 0.5;
    this.unlocked = false;
  }

  preload(src) {
    if (this.cache[src]) return this.cache[src];
    const a = new Audio(src);
    a.preload = "auto";
    this.cache[src] = a;
    return a;
  }

  play(src, options = {}) {
    const audio = this.cache[src] ? this.cache[src].cloneNode() : new Audio(src);
    if (this.muted) return audio;
    audio.volume = Math.max(0, Math.min(1, (options.volume !== undefined ? options.volume : this.globalVolume)));
    if (options.playbackRate) audio.playbackRate = options.playbackRate;
    if (options.currentTime) audio.currentTime = options.currentTime;
    audio.play().catch(() => {});
    if (options.duration && options.duration > 0) {
      setTimeout(() => {
        try { audio.pause(); } catch (e) {}
      }, options.duration);
    }
    return audio;
  }

  unlock() {
    if (this.unlocked) return;
    this.unlocked = true;
    Object.values(this.cache).forEach(a => {
      const vol = a.volume;
      a.volume = 0;
      a.play().catch(() => {});
      a.pause();
      a.currentTime = 0;
      a.volume = vol;
    });
  }

  setMuted(bool) {
    this.muted = bool;
  }

  setVolume(v) {
    this.globalVolume = Math.max(0, Math.min(1, v));
  }
}

window.sfxManager = new SFXManager();

// Preload common SFX
const COMMON_SFX = [
  'assets/audio/SFX/terminal-tick.m4a',
  'assets/audio/SFX/terminal-beep.m4a',
  'assets/audio/SFX/login-click.m4a',
  'assets/audio/SFX/login-success.m4a',
  'assets/audio/SFX/login-error.m4a',
  'assets/audio/SFX/keypress.m4a',
  'assets/audio/SFX/window-open.m4a',
  'assets/audio/SFX/window-close.m4a',
  'assets/audio/SFX/outro-woosh.m4a',
  'assets/audio/SFX/whoosh.mp3',
  'assets/audio/SFX/impact.mp3',
  'assets/audio/SFX/book-page.m4a',
  'assets/audio/SFX/chatgipiti-send.m4a',
  'assets/audio/SFX/scanner-scan.m4a',
  'assets/audio/SFX/scanner-alert.m4a',
  'assets/audio/SFX/drag-start.m4a',
  'assets/audio/SFX/drag-drop.m4a',
  'assets/audio/SFX/data-lever.m4a',
  'assets/audio/SFX/chart-reveal.m4a',
  'assets/audio/SFX/buy-upgrade.m4a',
  'assets/audio/SFX/celebration.m4a',
  'assets/audio/SFX/fingersnap.mp3',
  'assets/audio/SFX/mech-keyboard.m4a'
];
COMMON_SFX.forEach(src => window.sfxManager.preload(src));

// Global audio-unlock on first user interaction
document.addEventListener('click', () => window.sfxManager.unlock(), { once: true });
document.addEventListener('keydown', () => window.sfxManager.unlock(), { once: true });
document.addEventListener('touchstart', () => window.sfxManager.unlock(), { once: true });
