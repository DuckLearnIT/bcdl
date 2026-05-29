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
  let activeAiWordLoopTl = null;
  let activeAiWordLoopMM = null;
  let activePointerTween = null;
  let activePowerCutRevealTl = null;
  let activePowerFocusTl = null;

  const hasMotionPathPlugin = typeof MotionPathPlugin !== "undefined";
  const hasTextPlugin = typeof TextPlugin !== "undefined";

  if (hasMotionPathPlugin) gsap.registerPlugin(MotionPathPlugin);
  if (hasTextPlugin) gsap.registerPlugin(TextPlugin);

  function killActiveTimelines() {
    if (activeEntranceTl) {
      activeEntranceTl.kill();
      activeEntranceTl = null;
    }
    stopAiWordLoopAnimation();
    stopPowerCutAnimations();
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
        ".stall-image",
        { y: 60, autoAlpha: 0, scale: 0.95 },
        { y: 0, autoAlpha: 1, scale: 1, duration: 0.8, ease: easeSmooth },
        "-=0.2"
      );
      tl.fromTo(
        ".stall-amy",
        { y: 30, autoAlpha: 0, scale: 0.92 },
        { y: 0, autoAlpha: 1, scale: 1, duration: 0.7, ease: easeElastic },
        "-=0.5"
      );
      tl.fromTo(
        ".stall-item",
        { y: 80, autoAlpha: 0, rotationX: 10 },
        { y: 0, autoAlpha: 1, rotationX: 0, stagger: { each: 0.12, from: "center" }, duration: 0.7, ease: easeElastic },
        "-=0.4"
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

  /* ── AI → Word Loop master timeline ── */
  const aiWordCycles = [
    {
      thought: "Cái này có đúng hay hợp lý chưa nhỉ?",
      prompt: "Viết giúp mình một đoạn mở bài về xu hướng truyền thông số tại Việt Nam.",
      response: "Truyền thông số tại Việt Nam đang bước vào giai đoạn chuyển đổi sâu rộng, nơi trí tuệ nhân tạo và dữ liệu lớn trở thành động lực định hình cách công chúng tiếp nhận thông tin.",
      paragraph: "Truyền thông số tại Việt Nam đang bước vào giai đoạn chuyển đổi sâu rộng, nơi trí tuệ nhân tạo và dữ liệu lớn trở thành động lực định hình cách công chúng tiếp nhận thông tin.",
    },
    {
      thought: "Số liệu này lấy từ đâu vậy?",
      prompt: "Thêm một số liệu nghe thuyết phục về sinh viên dùng AI trong học tập.",
      response: "Một khảo sát gần đây cho thấy phần lớn sinh viên đã đưa AI vào quá trình học tập, đặc biệt ở các tác vụ tìm ý, tóm tắt tài liệu và chỉnh sửa câu chữ.",
      paragraph: "Một khảo sát gần đây cho thấy phần lớn sinh viên đã đưa AI vào quá trình học tập, đặc biệt ở các tác vụ tìm ý, tóm tắt tài liệu và chỉnh sửa câu chữ.",
    },
    {
      thought: "Mình có nên diễn đạt lại không?",
      prompt: "Viết đoạn phân tích hậu quả của AI với nghề truyền thông bằng giọng học thuật.",
      response: "Sự tham gia của AI khiến vai trò của người làm truyền thông dịch chuyển từ sản xuất nội dung đơn thuần sang kiểm soát, hiệu đính và chịu trách nhiệm về chất lượng thông tin.",
      paragraph: "Sự tham gia của AI khiến vai trò của người làm truyền thông dịch chuyển từ sản xuất nội dung đơn thuần sang kiểm soát, hiệu đính và chịu trách nhiệm về chất lượng thông tin.",
    },
    {
      thought: "Đoạn này có giống giọng mình không?",
      prompt: "Cho mình một ví dụ thực tế về AI trong truyền thông Việt Nam.",
      response: "Trong nhiều tòa soạn, AI được sử dụng để gợi ý tiêu đề, phân tích hành vi độc giả và hỗ trợ cá nhân hóa nội dung, từ đó rút ngắn thời gian sản xuất tin bài.",
      paragraph: "Trong nhiều tòa soạn, AI được sử dụng để gợi ý tiêu đề, phân tích hành vi độc giả và hỗ trợ cá nhân hóa nội dung, từ đó rút ngắn thời gian sản xuất tin bài.",
    },
    {
      thought: "Nếu mình dán luôn thì có sao không?",
      prompt: "Kết luận bài luận thật tự tin và chuyên nghiệp.",
      response: "Vì vậy, thế hệ sinh viên truyền thông cần làm chủ AI như một công cụ hỗ trợ, đồng thời duy trì năng lực phản biện để không đánh mất tiếng nói cá nhân.",
      paragraph: "Vì vậy, thế hệ sinh viên truyền thông cần làm chủ AI như một công cụ hỗ trợ, đồng thời duy trì năng lực phản biện để không đánh mất tiếng nói cá nhân.",
    },
  ];

  function stopAiWordLoopAnimation() {
    if (activePointerTween) {
      activePointerTween.kill();
      activePointerTween = null;
    }
    if (activeAiWordLoopTl) {
      activeAiWordLoopTl.kill();
      activeAiWordLoopTl = null;
    }
    if (activeAiWordLoopMM) {
      activeAiWordLoopMM.revert();
      activeAiWordLoopMM = null;
    }
  }

  function resetAiWordLoopDom() {
    const userPrompt = document.getElementById("loop-user-prompt");
    const aiResponse = document.getElementById("loop-ai-response");
    const wordLines = document.getElementById("loop-word-lines");
    const selection = document.getElementById("loop-selection");
    const copyBadge = document.getElementById("loop-copy-badge");
    const thought = document.getElementById("loop-thought");

    if (userPrompt) userPrompt.textContent = "";
    if (aiResponse) aiResponse.textContent = "";
    if (thought) { thought.textContent = "Mình hỏi nhanh một chút thôi..."; gsap.set(thought, { x: 0, y: 0, autoAlpha: 0 }); }
    if (selection) gsap.set(selection, { autoAlpha: 0 });
    if (copyBadge) gsap.set(copyBadge, { autoAlpha: 0, y: 8 });
    if (wordLines) {
      wordLines.innerHTML = "";
      const placeholder = document.createElement("p");
      placeholder.className = "loop-word-placeholder";
      placeholder.textContent = "Bắt đầu từ một trang trắng...";
      wordLines.appendChild(placeholder);
    }

    const chatStream = document.querySelector(".loop-chat-stream");
    if (chatStream) {
      const messages = chatStream.querySelectorAll(".loop-message");
      messages.forEach((msg, index) => {
        if (index >= 2) msg.remove();
      });
    }
  }

  function getPointInsideStage(stage, target, xRatio, yRatio) {
    void stage.offsetHeight;
    void target.offsetHeight;
    const stageRect = stage.getBoundingClientRect();
    const rect = target.getBoundingClientRect();
    const maxX = Math.max(52, stageRect.width - 52);
    const maxY = Math.max(52, stageRect.height - 52);
    const clampX = gsap.utils.clamp(16, maxX);
    const clampY = gsap.utils.clamp(16, maxY);

    return {
      x: clampX(rect.left - stageRect.left + rect.width * xRatio),
      y: clampY(rect.top - stageRect.top + rect.height * yRatio),
    };
  }

  function addPointerTravel(tl, pointer, stage, target, duration, rotation, thought) {
    tl.call(() => {
      if (!pointer || !stage || !target) return;
      if (activePointerTween) activePointerTween.kill();

      // Force target visible before measuring so getBoundingClientRect is valid
      const targetWasHidden = target.style.display === "none" || getComputedStyle(target).display === "none";
      if (targetWasHidden) gsap.set(target, { display: "flex", opacity: 1 });
      void target.offsetHeight;

      const start = {
        x: Number(gsap.getProperty(pointer, "x")) || 0,
        y: Number(gsap.getProperty(pointer, "y")) || 0,
      };
      const end = getPointInsideStage(stage, target, 0.5, 0.5);

      if (hasMotionPathPlugin) {
        const lift = Math.max(42, Math.min(120, Math.abs(start.x - end.x) * 0.22 + Math.abs(start.y - end.y) * 0.14));
        const mid = {
          x: (start.x + end.x) / 2,
          y: Math.min(start.y, end.y) - lift,
        };
        activePointerTween = gsap.to(pointer, {
          duration,
          motionPath: { path: [start, mid, end], curviness: 1.25 },
          rotation,
          ease: easeSmooth,
          overwrite: true,
          onUpdate: thought ? function() {
            const px = Number(gsap.getProperty(pointer, "x"));
            const py = Number(gsap.getProperty(pointer, "y"));
            gsap.set(thought, { x: px + 28, y: py - 10 });
          } : undefined,
        });
      } else {
        activePointerTween = gsap.to(pointer, {
          duration,
          x: end.x,
          y: end.y,
          rotation,
          ease: easeSmooth,
          overwrite: true,
          onUpdate: thought ? function() {
            const px = Number(gsap.getProperty(pointer, "x"));
            const py = Number(gsap.getProperty(pointer, "y"));
            gsap.set(thought, { x: px + 28, y: py - 10 });
          } : undefined,
        });
      }
    });
    tl.to({}, { duration });
  }

  function addTyping(tl, target, text, duration) {
    if (!target) {
      tl.to({}, { duration });
      return;
    }

    const proxy = { chars: 0 };
    tl.to(proxy, {
      chars: text.length,
      duration,
      ease: "none",
      onStart: () => {
        target.textContent = "";
      },
      onUpdate: () => {
        target.textContent = text.slice(0, Math.round(proxy.chars));
      },
    });
  }

  function appendWordParagraph(text) {
    const wordLines = document.getElementById("loop-word-lines");
    if (!wordLines) return null;

    const placeholder = wordLines.querySelector(".loop-word-placeholder");
    if (placeholder) placeholder.remove();

    const paragraph = document.createElement("p");
    paragraph.className = "loop-word-pasted";
    paragraph.textContent = text;
    wordLines.appendChild(paragraph);
    wordLines.scrollTop = wordLines.scrollHeight;
    return paragraph;
  }

  function startAiWordLoopAnimation() {
    const screen = document.getElementById("ai-word-loop-screen");
    const stage = document.getElementById("ai-word-loop-stage");
    const pointer = document.getElementById("loop-pointer");
    const userPrompt = document.getElementById("loop-user-prompt");
    const aiResponse = document.getElementById("loop-ai-response");
    const promptCard = screen ? screen.querySelector(".loop-message.user") : null;
    const aiCard = document.getElementById("loop-ai-response-card");
    const wordPage = document.getElementById("loop-word-page");
    const thought = document.getElementById("loop-thought");
    const selection = document.getElementById("loop-selection");
    const copyBadge = document.getElementById("loop-copy-badge");
    const windows = screen ? gsap.utils.toArray(".loop-window, .aiword-stats-panel", screen) : [];
    const targets = stage ? gsap.utils.toArray(".loop-target", stage) : [];
    const targetByCycle = gsap.utils.wrap(targets);
    const thoughtByCycle = gsap.utils.wrap(aiWordCycles.map((cycle) => cycle.thought));

    if (!screen || !stage || !pointer || !userPrompt || !aiResponse || !promptCard || !aiCard || !wordPage) {
      return null;
    }

    stopAiWordLoopAnimation();
    resetAiWordLoopDom();

    activeAiWordLoopMM = gsap.matchMedia();
    activeAiWordLoopMM.add(
      {
        isDesktop: "(min-width: 921px)",
        isMobile: "(max-width: 920px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { reduceMotion } = context.conditions;
        const tl = gsap.timeline({ defaults: { ease: easeOut } });
        activeAiWordLoopTl = tl;

        gsap.set(windows, { autoAlpha: 1, y: 0, scale: 1 });
        const initPx = stage.clientWidth * 0.12;
        const initPy = stage.clientHeight * 0.18;
        gsap.set(pointer, {
          x: initPx,
          y: initPy,
          autoAlpha: reduceMotion ? 0 : 0,
          scale: 0.92,
          rotation: -8,
        });
        if (thought) gsap.set(thought, { x: initPx + 28, y: initPy - 10, autoAlpha: 0 });

        if (reduceMotion) {
          aiWordCycles.forEach((cycle) => appendWordParagraph(cycle.paragraph));
          userPrompt.textContent = aiWordCycles[aiWordCycles.length - 1].prompt;
          aiResponse.textContent = aiWordCycles[aiWordCycles.length - 1].response;
          if (thought) thought.textContent = aiWordCycles[aiWordCycles.length - 1].thought;
          return () => tl.kill();
        }

        tl.fromTo(
          windows,
          { y: 36, autoAlpha: 0, scale: 0.97 },
          { y: 0, autoAlpha: 1, scale: 1, stagger: { each: 0.12, from: "start" }, duration: 0.75 },
          0
        );
        tl.to(pointer, { autoAlpha: 1, scale: 1, duration: 0.35 }, "-=0.2");

        let currentPromptCard = promptCard;
        let currentAiCard = aiCard;
        let currentUserPrompt = userPrompt;
        let currentAiResponse = aiResponse;
        let currentSelection = selection;

        aiWordCycles.forEach((cycle, index) => {
          const rotation = index % 2 === 0 ? -7 : 8;

          tl.addLabel(`aiWordCycle${index + 1}`, ">");
          
          if (index > 0) {
            currentPromptCard = promptCard.cloneNode(true);
            currentAiCard = aiCard.cloneNode(true);
            currentUserPrompt = currentPromptCard.querySelector("p");
            currentAiResponse = currentAiCard.querySelector("p");
            currentSelection = currentAiCard.querySelector(".loop-selection");

            currentUserPrompt.textContent = "";
            currentAiResponse.textContent = "";
            if (currentSelection) gsap.set(currentSelection, { autoAlpha: 0 });
            
            const chatStream = document.querySelector(".loop-chat-stream");
            if (chatStream && copyBadge) {
              chatStream.insertBefore(currentPromptCard, copyBadge);
              chatStream.insertBefore(currentAiCard, copyBadge);
            }
            
            gsap.set(currentPromptCard, { display: "none", opacity: 0 });
            gsap.set(currentAiCard, { display: "none", opacity: 0 });
          }

          // Capture loop vars into closure to avoid stale references
          const _promptCard = currentPromptCard;
          const _aiCard = currentAiCard;
          const _userPrompt = currentUserPrompt;
          const _aiResponse = currentAiResponse;
          const _selection = currentSelection;
          const _cycle = cycle;
          const _thoughtText = thoughtByCycle(index);

          tl.call(() => {
            if (index > 0) {
              gsap.set(_promptCard, { display: "flex", opacity: 1 });
              gsap.set(_aiCard, { display: "flex", opacity: 1 });
              const chatStream = document.querySelector(".loop-chat-stream");
              if (chatStream) chatStream.scrollTop = chatStream.scrollHeight;
            } else {
              _userPrompt.textContent = "";
              _aiResponse.textContent = "";
              if (selection) gsap.set(selection, { autoAlpha: 0 });
            }
            if (copyBadge) gsap.set(copyBadge, { autoAlpha: 0, y: 8 });
            // Show thought bubble (hidden until pointer travels)
            if (thought) {
              thought.textContent = _thoughtText;
              gsap.set(thought, { autoAlpha: 0 });
            }
          });
          tl.to({}, { duration: 0.38 });

          addPointerTravel(tl, pointer, stage, _promptCard, 0.9, rotation, null);
          addTyping(tl, _userPrompt, _cycle.prompt, 2.05);
          tl.to(_promptCard, { scale: 1.015, duration: 0.18, yoyo: true, repeat: 1 }, "<");
          tl.to({}, { duration: 0.35 });

          addPointerTravel(tl, pointer, stage, _aiCard, 0.7, -rotation, null);
          tl.fromTo(_aiCard, { boxShadow: "0 0 0 rgba(38, 103, 255, 0)" }, { boxShadow: "0 0 24px rgba(38, 103, 255, 0.22)", duration: 0.35 }, "<");
          addTyping(tl, _aiResponse, _cycle.response, 3.45);
          tl.to(_aiCard, { boxShadow: "0 0 0 rgba(38, 103, 255, 0)", duration: 0.45 });

          if (_selection) {
            tl.to(_selection, { autoAlpha: 1, duration: 0.28 }, ">");
          }
          if (copyBadge) {
            tl.to(copyBadge, { autoAlpha: 1, y: 0, duration: 0.28, ease: easeElastic }, "<");
          }
          tl.to({}, { duration: 0.45 });

          addPointerTravel(tl, pointer, stage, wordPage, 1, rotation, thought);
          tl.call(() => {
            if (thought) {
              thought.textContent = _thoughtText;
              gsap.fromTo(thought, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.28, ease: easeOut });
            }
            const paragraph = appendWordParagraph(_cycle.paragraph);
            if (paragraph) {
              gsap.fromTo(
                paragraph,
                { y: 14, autoAlpha: 0, backgroundColor: "#ffe7a3" },
                { y: 0, autoAlpha: 1, backgroundColor: "rgba(255, 209, 102, 0.28)", duration: 0.65, ease: easeOut }
              );
            }
          });

          tl.to({}, { duration: 1.25 });

          if (thought) {
            tl.to(thought, { autoAlpha: 0, duration: 0.2 });
          }
        });

        tl.to(pointer, { y: "-=8", duration: 1.2, repeat: -1, yoyo: true, ease: "sine.inOut" }, "+=0.4");
        return () => tl.kill();
      }
    );

    return activeAiWordLoopTl;
  }

  function stopPowerCutAnimations() {
    if (activePowerCutRevealTl) {
      activePowerCutRevealTl.kill();
      activePowerCutRevealTl = null;
    }
    if (activePowerFocusTl) {
      activePowerFocusTl.kill();
      activePowerFocusTl = null;
    }
  }

  function playPowerCutReveal() {
    const screen = document.getElementById("power-cut-screen");
    const whiteout = document.getElementById("power-whiteout");
    const canvas = document.getElementById("power-canvas");
    const roster = document.getElementById("power-roster");
    const columns = screen ? gsap.utils.toArray(".power-year-column", screen) : [];
    const emojis = screen ? gsap.utils.toArray(".power-roster .power-emoji", screen) : [];

    if (!screen || !whiteout || !canvas || !roster) return null;
    if (activePowerCutRevealTl) activePowerCutRevealTl.kill();

    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tl = gsap.timeline({
      defaults: { ease: easeOut },
      onComplete: () => {
        activePowerCutRevealTl = null;
      },
    });
    activePowerCutRevealTl = tl;

    gsap.set(whiteout, { autoAlpha: 1 });
    gsap.set(canvas, { autoAlpha: 0 });
    gsap.set(roster, { autoAlpha: 1, y: 0 });
    gsap.set("#power-focus-panel", { autoAlpha: 0, y: 18 });

    if (reduceMotion) {
      tl.set(whiteout, { autoAlpha: 0 });
      tl.set(canvas, { autoAlpha: 1 });
      tl.set(columns, { autoAlpha: 1, y: 0, scale: 1 });
      return tl;
    }

    tl.to(whiteout, { autoAlpha: 0, duration: 0.45 });
    tl.fromTo(canvas, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 }, "-=0.18");
    tl.fromTo(
      columns,
      { y: -18, autoAlpha: 0, scale: 0.97 },
      { y: 0, autoAlpha: 1, scale: 1, duration: 0.55, stagger: { each: 0.08, from: "start" } },
      "-=0.24"
    );
    tl.fromTo(
      emojis,
      { y: 8, autoAlpha: 0, scale: 0.72 },
      { y: 0, autoAlpha: 1, scale: 1, duration: 0.36, stagger: { amount: 0.35, from: "random" }, ease: easeElastic },
      "-=0.24"
    );

    return tl;
  }

  function playPowerYearFocus(years, onComplete) {
    const list = Array.isArray(years) ? years : [years];
    const screen = document.getElementById("power-cut-screen");
    const roster = document.getElementById("power-roster");
    const panel = document.getElementById("power-focus-panel");
    const bar = document.getElementById("power-focus-bar");

    if (!screen || !roster || !panel || !bar || typeof window.renderPowerFocusYear !== "function") {
      if (typeof onComplete === "function") onComplete();
      return null;
    }

    if (activePowerFocusTl) activePowerFocusTl.kill();

    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tl = gsap.timeline({
      defaults: { ease: easeOut },
      onComplete: () => {
        activePowerFocusTl = null;
        if (typeof onComplete === "function") onComplete();
      },
    });
    activePowerFocusTl = tl;

    tl.to(roster, { autoAlpha: 0, y: -16, duration: reduceMotion ? 0.01 : 0.32 }, 0);

    list.forEach((yearId, index) => {
      const isParallel = Array.isArray(yearId);

      tl.call(() => {
        window.renderPowerFocusYear(yearId);
        gsap.set(panel, { autoAlpha: 1 });
        if (!isParallel) {
          gsap.set(bar, { rotation: 0, scaleY: 1, transformOrigin: "50% 100%" });
        }
      }, null, index === 0 ? 0.08 : ">");

      if (reduceMotion) {
        if (isParallel) {
          tl.set(panel, { autoAlpha: 1, y: 0, scale: 1 });
          tl.set(".power-focus-col .power-emoji", { autoAlpha: 1, y: 0, scale: 1 });
          tl.set(".power-focus-col .power-chart-bar", { scaleY: 1, rotation: 0 });
          tl.to({}, { duration: 1.2 });
        } else {
          tl.set(panel, { autoAlpha: 1, y: 0, scale: 1 });
          tl.set(".power-focus-emojis .power-emoji", { autoAlpha: 1, y: 0, scale: 1 });
          tl.set(bar, { scaleY: 1, rotation: 0 });
          tl.to({}, { duration: index < list.length - 1 ? 0.6 : 0.05 });
        }
        return;
      }

      if (isParallel) {
        tl.fromTo(
          panel,
          { y: index === 0 ? 28 : 10, autoAlpha: index === 0 ? 0 : 0.82, scale: index === 0 ? 0.96 : 1 },
          { y: 0, autoAlpha: 1, scale: 1, duration: index === 0 ? 0.5 : 0.32 },
          "<"
        );
        tl.fromTo(
          ".power-focus-col .power-emoji",
          { y: 14, autoAlpha: 0, scale: 0.8 },
          { y: 0, autoAlpha: 1, scale: 1, duration: 0.36, stagger: { amount: 0.25, from: "start" }, ease: easeElastic },
          "<0.08"
        );
        tl.fromTo(
          ".power-focus-col .power-chart-bar",
          { scaleY: 0.08, rotation: 0, transformOrigin: "50% 100%" },
          { scaleY: 1, duration: 0.7, ease: easeSmooth },
          "<0.04"
        );
        tl.to({}, { duration: 1.2 });
      } else {
        tl.fromTo(
          panel,
          { y: index === 0 ? 28 : 10, autoAlpha: index === 0 ? 0 : 0.82, scale: index === 0 ? 0.96 : 1 },
          { y: 0, autoAlpha: 1, scale: 1, duration: index === 0 ? 0.5 : 0.32 },
          "<"
        );
        tl.fromTo(
          ".power-focus-emojis .power-emoji",
          { y: 14, autoAlpha: 0, scale: 0.8 },
          { y: 0, autoAlpha: 1, scale: 1, duration: 0.36, stagger: { amount: 0.16, from: "start" }, ease: easeElastic },
          "<0.08"
        );
        tl.fromTo(
          bar,
          { scaleY: 0.08, rotation: 0, transformOrigin: "50% 100%" },
          { scaleY: 1, duration: 0.7, ease: easeSmooth },
          "<0.04"
        );
        tl.to(bar, { rotation: -1.3, duration: 0.055, repeat: 7, yoyo: true, ease: "none" }, ">-0.14");
        tl.to(bar, { rotation: 0, duration: 0.08 });
        tl.to({}, { duration: index < list.length - 1 ? 0.72 : 0.08 });
      }
    });

    return tl;
  }

  function playPowerBarChartAnimation() {
    const roster = document.getElementById("power-roster");
    const panel = document.getElementById("power-focus-panel");
    if (!roster || !panel || typeof window.renderPowerBarChart !== "function") return null;

    if (activePowerFocusTl) {
      activePowerFocusTl.kill();
      activePowerFocusTl = null;
    }

    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.renderPowerBarChart();

    const tl = gsap.timeline({
      defaults: { ease: easeOut },
      onComplete: () => {
        activePowerFocusTl = null;
      },
    });
    activePowerFocusTl = tl;

    tl.to(roster, { autoAlpha: 0, y: -16, duration: reduceMotion ? 0.01 : 0.32 }, 0);
    tl.fromTo(
      panel,
      { y: 28, autoAlpha: 0, scale: 0.96 },
      { y: 0, autoAlpha: 1, scale: 1, duration: reduceMotion ? 0.01 : 0.5 },
      0.08
    );

    if (!reduceMotion) {
      tl.fromTo(
        ".power-bar-fill",
        { scaleY: 0 },
        { scaleY: 1, duration: 0.85, ease: easeSmooth, stagger: 0.14, transformOrigin: "50% 100%" },
        "<0.2"
      );
      tl.fromTo(
        ".power-bar-ref",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, ease: easeOut, stagger: 0.18, transformOrigin: "0% 50%" },
        "<0.5"
      );
      tl.fromTo(
        ".power-bar-ref-label",
        { autoAlpha: 0, x: -12 },
        { autoAlpha: 1, x: 0, duration: 0.45, stagger: 0.18 },
        "<0.1"
      );
      tl.fromTo(
        ".power-bar-label",
        { y: 10, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.35, stagger: 0.08 },
        "<0.2"
      );
    } else {
      tl.set(".power-bar-fill", { scaleY: 1 });
      tl.set(".power-bar-ref", { scaleX: 1 });
      tl.set(".power-bar-ref-label", { autoAlpha: 1 });
      tl.set(".power-bar-label", { autoAlpha: 1 });
    }

    return tl;
  }

  function showPowerOverviewAnimation() {
    const roster = document.getElementById("power-roster");
    const panel = document.getElementById("power-focus-panel");
    if (!roster || !panel) return null;

    if (activePowerFocusTl) {
      activePowerFocusTl.kill();
      activePowerFocusTl = null;
    }

    panel.classList.remove("is-parallel", "is-bar-chart");
    const wrap = panel.querySelector(".power-focus-parallel-wrap");
    if (wrap) wrap.remove();
    const barChart = panel.querySelector(".power-bar-chart");
    if (barChart) barChart.remove();
    panel.querySelectorAll(".power-focus-copy, .power-focus-chart").forEach(el => el.style.display = "");

    const tl = gsap.timeline({ defaults: { ease: easeOut } });
    tl.to(panel, {
      autoAlpha: 0,
      y: 18,
      duration: 0.28,
      onComplete: () => panel.setAttribute("aria-hidden", "true"),
    });
    tl.to(roster, { autoAlpha: 1, y: 0, duration: 0.42 }, "<0.08");
    return tl;
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

  window.startAiWordLoopAnimation = startAiWordLoopAnimation;
  window.stopAiWordLoopAnimation = stopAiWordLoopAnimation;
  window.playPowerCutReveal = playPowerCutReveal;
  window.playPowerYearFocus = playPowerYearFocus;
  window.showPowerOverviewAnimation = showPowerOverviewAnimation;
  window.playPowerBarChartAnimation = playPowerBarChartAnimation;
  window.stopPowerCutAnimations = stopPowerCutAnimations;

  /* ── Init ── */
  document.addEventListener("DOMContentLoaded", () => {
    initMicroAnimations();
    initAmbientAnimations();
  });
})();
