let activeAiWordLoopMM = null;
let activeAiWordLoopTl = null;
let activePointerTween = null;
let activePowerCutRevealTl = null;
let activePowerFocusTl = null;
const easeOut = "power3.out";
const easeElastic = "back.out(1.7)";
const easeSmooth = "power2.inOut";
const hasMotionPathPlugin = typeof MotionPathPlugin !== "undefined";
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

  