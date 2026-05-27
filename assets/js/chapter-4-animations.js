/* chapter-4-animations.js — GSAP Creative Animations for Chapter 4 (chart-screen onward) */

(function () {
  "use strict";

  if (typeof gsap === "undefined") {
    console.warn("GSAP not loaded — skipping chapter-4 animations");
    return;
  }

  /* ── Utilities ── */
  const easeOut = "power3.out";
  const easeElastic = "back.out(1.7)";
  const easeSmooth = "power2.inOut";

  let activeEntranceTl = null;

  function killActiveTimelines() {
    if (activeEntranceTl) {
      activeEntranceTl.kill();
      activeEntranceTl = null;
    }
  }

  /* ── Section Entrance Animations ── */
  const entranceAnimations = {
    chart: () => {
      const tl = gsap.timeline({ defaults: { ease: easeOut } });
      tl.fromTo(
        ".chart-screen .chart-copy > *",
        { y: 60, autoAlpha: 0, scale: 0.96 },
        { y: 0, autoAlpha: 1, scale: 1, stagger: { each: 0.12, from: "start" }, duration: 0.7 }
      );
      tl.fromTo(
        ".chart-card",
        { clipPath: "inset(0 50% 0 50%)", autoAlpha: 0 },
        { clipPath: "inset(0 0% 0 0%)", autoAlpha: 1, duration: 0.9, ease: easeSmooth },
        "-=0.4"
      );
      tl.fromTo(
        ".donut-wrap",
        { scale: 0.6, rotation: -15, autoAlpha: 0 },
        { scale: 1, rotation: 0, autoAlpha: 1, duration: 1, ease: easeElastic },
        "-=0.6"
      );
      return tl;
    },

    star: () => {
      const tl = gsap.timeline({ defaults: { ease: easeOut } });
      tl.fromTo(
        ".star-label",
        { y: -40, autoAlpha: 0, scale: 0.8 },
        { y: 0, autoAlpha: 1, scale: 1, duration: 1.2, ease: easeElastic }
      );
      tl.fromTo(
        ".star-unique-label",
        { y: 40, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 1, ease: easeOut },
        "-=0.6"
      );
      return tl;
    },

    globe: () => {
      const tl = gsap.timeline({ defaults: { ease: easeOut } });
      tl.fromTo(
        ".globe-stat",
        { y: -50, autoAlpha: 0, filter: "blur(12px)" },
        { y: 0, autoAlpha: 1, filter: "blur(0px)", duration: 1 }
      );
      tl.fromTo(
        ".globe-hint",
        { y: 20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6 },
        "-=0.4"
      );
      tl.fromTo(
        ".globe-next",
        { scale: 0.8, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: 0.5, ease: easeElastic },
        "-=0.2"
      );
      return tl;
    },

    appstore: () => {
      const tl = gsap.timeline({ defaults: { ease: easeOut } });
      tl.fromTo(
        ".appstore-header",
        { y: -30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6 }
      );
      tl.fromTo(
        ".appstore-title",
        { y: -20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.5 },
        "-=0.3"
      );
      tl.fromTo(
        ".sub-card",
        { y: 80, autoAlpha: 0, rotationX: 10 },
        { y: 0, autoAlpha: 1, rotationX: 0, stagger: { each: 0.12, from: "center" }, duration: 0.7, ease: easeElastic },
        "-=0.2"
      );
      return tl;
    },

    firework: () => {
      const tl = gsap.timeline({ defaults: { ease: easeOut } });
      tl.fromTo(
        ".vip-card",
        { scale: 0.5, autoAlpha: 0, rotation: -4 },
        { scale: 1, autoAlpha: 1, rotation: 0, duration: 1.2, ease: easeElastic }
      );
      tl.fromTo(
        ".vip-stars img",
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, stagger: 0.1, duration: 0.6, ease: easeElastic },
        "-=0.6"
      );
      return tl;
    },

    minigame: () => {
      const tl = gsap.timeline({ defaults: { ease: easeOut } });
      tl.fromTo(
        ".minigame-header",
        { y: -40, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6 }
      );
      tl.fromTo(
        ".minigame-question",
        { x: -60, autoAlpha: 0, skewX: -5 },
        { x: 0, autoAlpha: 1, skewX: 0, duration: 0.7, ease: easeSmooth },
        "-=0.3"
      );
      tl.fromTo(
        ".choice-btn",
        { y: 50, autoAlpha: 0, scale: 0.9 },
        { y: 0, autoAlpha: 1, scale: 1, stagger: 0.15, duration: 0.6, ease: easeElastic },
        "-=0.3"
      );
      return tl;
    },

    "area-chart": () => {
      const tl = gsap.timeline({ defaults: { ease: easeOut } });
      tl.fromTo(
        ".area-chart-header",
        { y: -30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6 }
      );
      tl.fromTo(
        ".area-chart-wrapper",
        { clipPath: "inset(100% 0 0 0)", autoAlpha: 0 },
        { clipPath: "inset(0% 0 0 0)", autoAlpha: 1, duration: 1, ease: easeSmooth },
        "-=0.2"
      );
      tl.fromTo(
        ".area-chart-legend .legend-item",
        { x: -20, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, stagger: 0.12, duration: 0.5 },
        "-=0.5"
      );
      return tl;
    },

    book: () => {
      const tl = gsap.timeline({ defaults: { ease: easeOut } });
      tl.fromTo(
        ".book-header",
        { y: -30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6 }
      );
      tl.fromTo(
        ".book-viewer",
        { scale: 0.92, autoAlpha: 0, rotationY: 8 },
        { scale: 1, autoAlpha: 1, rotationY: 0, duration: 0.9, ease: easeSmooth },
        "-=0.2"
      );
      tl.fromTo(
        ".book-controls",
        { y: 30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.5 },
        "-=0.4"
      );
      return tl;
    },

    info: () => {
      const tl = gsap.timeline({ defaults: { ease: easeOut } });
      tl.fromTo(
        ".info-header",
        { y: -30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6 }
      );
      tl.fromTo(
        ".info-machine-wrap",
        { scale: 0.85, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: 0.8, ease: easeElastic },
        "-=0.2"
      );
      tl.fromTo(
        ".info-book-drag",
        { x: -40, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.6 },
        "-=0.4"
      );
      return tl;
    },

    flashcard: () => {
      const tl = gsap.timeline({ defaults: { ease: easeOut } });
      tl.fromTo(
        ".flashcard-header",
        { y: -30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6 }
      );
      tl.fromTo(
        ".flashcard",
        { y: 100, autoAlpha: 0, scale: 0.8, rotationZ: (i) => (i % 2 === 0 ? -5 : 5) },
        {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          rotationZ: 0,
          stagger: { each: 0.1, from: "end" },
          duration: 0.7,
          ease: easeElastic,
        },
        "-=0.2"
      );
      return tl;
    },

    exam: () => {
      const tl = gsap.timeline({ defaults: { ease: easeOut } });
      tl.fromTo(
        ".exam-paper",
        { y: 80, autoAlpha: 0, scale: 0.94 },
        { y: 0, autoAlpha: 1, scale: 1, duration: 0.9, ease: easeSmooth }
      );
      tl.fromTo(
        ".exam-header > *",
        { y: -20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, stagger: 0.08, duration: 0.5 },
        "-=0.4"
      );
      tl.fromTo(
        ".exam-line-group",
        { x: -30, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, stagger: 0.1, duration: 0.5 },
        "-=0.3"
      );
      tl.fromTo(
        ".exam-grade",
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 0.8, ease: easeElastic },
        "-=0.3"
      );
      tl.fromTo(
        ".exam-comment-area",
        { y: 20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.5 },
        "-=0.4"
      );
      return tl;
    },
  };

  /* ── Global interactive micro-animations ── */
  function initMicroAnimations() {
    /* Magnetic button pull */
    document.querySelectorAll(".pixel-button, .sub-buy-btn, .choice-btn").forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, { x: x * 0.15, y: y * 0.15, duration: 0.3, ease: "power2.out" });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
      });
    });

    /* SVG donut segments elastic hover (enhanced) */
    document.querySelectorAll(".donut-segment").forEach((seg) => {
      seg.addEventListener("mouseenter", () => {
        gsap.to(seg, { strokeWidth: 26, scale: 1.04, transformOrigin: "center", duration: 0.35, ease: easeElastic });
      });
      seg.addEventListener("mouseleave", () => {
        gsap.to(seg, { strokeWidth: 18, scale: 1, duration: 0.35, ease: easeOut });
      });
    });

    /* App store card 3D tilt */
    document.querySelectorAll(".sub-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(card, { rotationY: x * 12, rotationX: -y * 12, duration: 0.4, ease: "power2.out" });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { rotationY: 0, rotationX: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
      });
    });
  }

  /* ── Ambient continuous animations ── */
  function initAmbientAnimations() {
    /* Floating stars hint */
    gsap.to(".star-pct-big", { y: -6, duration: 2.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(".star-pct-small", { y: 4, duration: 2.2, repeat: -1, yoyo: true, ease: "sine.inOut" });

    /* Globe stat gentle pulse */
    gsap.to(".globe-stat strong", { scale: 1.03, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" });

    /* Info machine idle float */
    gsap.to(".info-machine", { y: -8, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });
  }

  /* ── Public API ── */
  window.triggerGSAPAnimation = function (screenName) {
    killActiveTimelines();
    if (entranceAnimations[screenName]) {
      requestAnimationFrame(() => {
        activeEntranceTl = entranceAnimations[screenName]();
      });
    }
  };

  /* ── Init ── */
  document.addEventListener("DOMContentLoaded", () => {
    initMicroAnimations();
    initAmbientAnimations();
  });
})();
