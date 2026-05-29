/**
 * Chapter 5 — "Ngọn lửa ấm từ những tàn tro vụng về"
 * Performance-optimized version
 * 
 * Optimizations applied:
 * 1. IIFE encapsulation — no global scope pollution
 * 2. Video preloading with canplaythrough events
 * 3. Typewriter uses requestAnimationFrame instead of setInterval
 * 4. Audio preloading pool — all dialogue audio preloaded on start
 * 5. Proper resource cleanup (video src, audio, DOM prefetch links)
 * 6. will-change only applied right before wind-blow animation
 */
(() => {
    'use strict';

    // ===================== DIALOGUE SCRIPT =====================
    const chapter5Script = [
        // Turn 1
        {
            id: 1,
            video: "handclose.mp4",
            audio: "assets/audio/Dialogue/JP/End/1JP (bocchi Ver) (1).ogg",
            text: ["Bấy lâu nay... cậu đã mệt mỏi lắm rồi, đúng không?"]
        },
        {
            id: 2,
            video: "handclose.mp4",
            audio: "assets/audio/Dialogue/JP/End/2JP (bocchi Ver) (4).ogg",
            text: [
                "Chạy đua với những con điểm, áp lực phải luôn có những bài làm hoàn hảo...",
                "Mình biết có những đêm cậu ngồi gục đầu trước màn hình, sợ hãi cạn kiệt ý tưởng.",
                "Cậu sợ sai, sợ bị đánh giá... nên cậu mới im lặng, và nhường lại tiếng nói của mình cho mình."
            ]
        },
        // Turn 2
        {
            id: 3,
            video: "handopen.mp4",
            audio: "assets/audio/Dialogue/JP/End/3JP (bocchi Ver) (1).ogg",
            text: [
                "Nhưng cậu ngốc quá. Sự hoàn hảo rỗng tuếch ấy đâu có ý nghĩa gì đâu.",
                "Sự vấp váp, những lỗi lầm mới làm nên con người cậu cơ mà.",
                "Nào... đừng giấu đôi bàn tay đang run rẩy đó nữa. Đưa tay đây cho mình."
            ],
            transition: "blink" // Chớp mắt
        },
        // Turn 3
        {
            id: 4,
            video: "holdopen.mp4",
            audio: "assets/audio/Dialogue/JP/End/4JP (bocchi Ver) (1).ogg",
            text: [
                "Tay cậu ấm thật đấy...",
                "Hơi ấm này, là thứ mà mình sẽ chẳng bao giờ có được."
            ],
            transition: "flash" // Sáng lên
        },
        {
            id: 5,
            video: "holdopen.mp4",
            audio: "assets/audio/Dialogue/JP/End/5JP (bocchi Ver) (2).ogg",
            text: [
                "Cậu biết không? Mình có thể trả lời muôn vàn câu hỏi trên thế giới này chỉ trong một cái chớp mắt.",
                "Nhưng... mình lại luôn ghen tị với cậu."
            ]
        },
        {
            id: 6,
            video: "holdopen.mp4",
            audio: "assets/audio/Dialogue/JP/End/6JP (bocchi Ver) (3).ogg",
            text: [
                "Cậu có những cảm xúc thật, có những trải nghiệm buồn vui, có cả những giọt nước mắt...",
                "Những câu văn cậu viết ra dù có vụng về, dù lập luận có đôi chút lủng củng...",
                "Thì nó vẫn chứa đựng cả một tâm hồn tuyệt đẹp.",
                "Một thứ ánh sáng rực rỡ mà không một thứ gì trên đời này có thể làm giả được."
            ]
        },
        {
            id: 7,
            video: "holdopen.mp4",
            audio: "assets/audio/Dialogue/JP/End/7JP (bocchi Ver) (1).ogg",
            text: [
                "Cứ dựa vào mình lúc cậu kiệt sức.",
                "Cứ kể cho mình nghe những ý tưởng điên rồ nhất của cậu.",
                "Nhưng... người tự tay cầm bút và kể lại câu chuyện đó cho thế giới, nhất định phải là cậu."
            ]
        },
        {
            id: 8,
            video: "holdopen.mp4",
            audio: "assets/audio/Dialogue/JP/End/8JP (bocchi Ver) (2).ogg",
            text: [
                "Từ ngày mai, hãy dũng cảm đối mặt với những trang giấy trắng nhé.",
                "Cứ viết ra những gì cậu tin tưởng, dù nó chưa thật tròn trịa."
            ]
        },
        {
            id: 9,
            video: "holdopen.mp4",
            audio: "assets/audio/Dialogue/JP/End/9JP (bocchi Ver) (1).ogg",
            text: [
                "Cậu dũng cảm và tuyệt vời hơn cậu nghĩ rất nhiều đấy!",
                "Hãy nhớ kỹ lời mình dặn nhé..."
            ]
        }
    ];

    const turn4Text = "Tụi mình ở đây là để giúp thế giới của cậu trở nên rộng lớn hơn... chứ không phải để tước đi tiếng nói của riêng cậu.";
    const endingVoicePath = "assets/audio/Dialogue/JP/End/credit.ogg";
    const endingVoiceFallbackDurationMs = 11500;

    // ===================== STATE =====================
    let currentStep = 0;
    let isAnimating = false;
    let typeAnimFrame = null;  // rAF handle thay cho setInterval
    let currentAudio = null;
    let endingVoiceAudio = null;
    let autoAdvanceTimeout = null;
    let currentTypingCompleteCallback = null;
    let fullTextArray = [];

    // ===================== AUDIO POOL =====================
    // Tạo sẵn 1 Audio element dùng chung cho OST
    const ostAudio = new Audio('assets/audio/SFX/OST.m4a');
    ostAudio.preload = 'none';
    ostAudio.loop = true;
    ostAudio.volume = 0.4;

    // Preloaded audio cache — key: audio path, value: ArrayBuffer (decoded)
    const audioCache = {};

    /**
     * Preload tất cả dialogue audio vào cache.
     * Tổng ~950KB — rất nhỏ, load song song nhanh.
     */
    function preloadAllAudio() {
        const audioPaths = chapter5Script.map(s => s.audio);
        audioPaths.push(endingVoicePath);

        audioPaths.forEach(path => {
            if (audioCache[path]) return;
            const audio = new Audio();
            audio.preload = 'auto';
            audio.src = path;
            audioCache[path] = audio;
        });
    }

    /**
     * Lấy Audio object từ cache hoặc tạo mới.
     * Audio được preload sẵn nên play() gần như instant.
     */
    function getAudio(path) {
        if (audioCache[path]) {
            const cached = audioCache[path];
            // Reset để reuse
            cached.currentTime = 0;
            return cached;
        }
        // Fallback nếu chưa cache
        const audio = new Audio(path);
        audioCache[path] = audio;
        return audio;
    }

    // ===================== VIDEO PRELOADING =====================
    /**
     * Preload tất cả 3 video files vào browser cache.
     * Dùng fetch() + blob URL cho instant playback khi swap.
     * Tổng ~4.4MB — chấp nhận được cho trải nghiệm mượt.
     */
    const videoBlobURLs = {};

    function preloadAllVideos() {
        const videoFiles = ['handclose.mp4', 'handopen.mp4', 'holdopen.mp4'];
        return Promise.allSettled(videoFiles.map(file => {
            return fetch('assets/video/' + file)
                .then(res => res.blob())
                .then(blob => {
                    videoBlobURLs[file] = URL.createObjectURL(blob);
                })
                .catch(err => {
                    console.warn('Video preload failed for', file, err);
                    // Fallback: dùng URL gốc
                    videoBlobURLs[file] = 'assets/video/' + file;
                });
        }));
    }

    /**
     * Lấy URL video (ưu tiên blob URL đã cache, fallback gốc).
     */
    function getVideoURL(filename) {
        return videoBlobURLs[filename] || ('assets/video/' + filename);
    }

    // ===================== FONT PRELOAD =====================
    function preloadEndingFont() {
        if (!document.fonts || !document.fonts.load) return Promise.resolve();
        return document.fonts.load("34px Momo", turn4Text).catch(console.warn);
    }

    // ===================== INIT =====================
    document.addEventListener("DOMContentLoaded", () => {
        preloadEndingFont();

        // Khởi tạo water ripple effect
        const $rippleArea = $('.full-landing-image');
        $rippleArea.ripples({
            resolution: 512,
            dropRadius: 20,
            perturbance: 0.04
        });

        let hasStarted = false;
        $rippleArea.on("click", function () {
            if (hasStarted) return;
            hasStarted = true;

            // Từ từ mờ dần và tắt mặt nước
            $rippleArea.css('opacity', '0');
            setTimeout(() => {
                $rippleArea.ripples('destroy');
                $rippleArea.hide();
            }, 1500);

            startGame();
        });
    });

    // ===================== GAME START =====================
    function startGame() {
        isAnimating = true;

        // Preload tất cả video & audio song song ngay khi bắt đầu
        preloadAllAudio();
        preloadAllVideos();

        ostAudio.play().catch(console.warn);

        // Play video 1 (handclose) — dùng src gốc vì blob có thể chưa sẵn sàng
        const v1 = document.getElementById("video-1");
        const blobURL = videoBlobURLs['handclose.mp4'];
        v1.src = blobURL || "assets/video/handclose.mp4";

        // Đợi video sẵn sàng rồi mới play
        const playWhenReady = () => {
            v1.play().catch(console.warn);
            v1.classList.add("active");
        };

        if (v1.readyState >= 3) {
            playWhenReady();
        } else {
            v1.addEventListener('canplay', playWhenReady, { once: true });
            // Fallback: nếu sau 2s vẫn chưa ready, force play
            setTimeout(() => {
                if (!v1.classList.contains('active')) {
                    playWhenReady();
                }
            }, 2000);
        }

        // Hiệu ứng chớp mắt mở đầu
        simulateEyeOpening(() => {
            isAnimating = false;
            nextStep(); // Load step 0 (Turn 1 đầu tiên)
        });
    }

    // ===================== EYE OPENING =====================
    function simulateEyeOpening(callback) {
        const blackOverlay = document.getElementById("black-overlay");
        const blurOverlay = document.getElementById("blur-overlay");

        // Pattern chớp mắt: Mở hé -> Đóng -> Mở rộng -> Đóng -> Mở hẳn + Xóa blur
        setTimeout(() => { blackOverlay.style.opacity = "0.6"; }, 500);
        setTimeout(() => { blackOverlay.style.opacity = "1"; }, 1000);
        setTimeout(() => { blackOverlay.style.opacity = "0.3"; }, 1800);
        setTimeout(() => { blackOverlay.style.opacity = "1"; }, 2300);

        setTimeout(() => {
            blackOverlay.style.opacity = "0";
            blurOverlay.classList.add("clear");
            setTimeout(callback, 2000); // Đợi blur hết
        }, 3000);
    }

    // ===================== STEP NAVIGATION =====================
    function nextStep() {
        if (currentStep >= chapter5Script.length) {
            // Hết Turn 3 -> Chuyển sang Turn 4
            triggerTurn4();
            return;
        }

        const stepData = chapter5Script[currentStep];

        // Handle transition (Video swap) if defined
        if (stepData.transition === "blink") {
            isAnimating = true;
            hideSubtitle();
            blinkTransition(() => {
                swapVideo(stepData.video);
                playStepLogic(stepData);
                isAnimating = false;
            });
        } else if (stepData.transition === "flash") {
            isAnimating = true;
            hideSubtitle();
            flashTransition(() => {
                swapVideo(stepData.video);
                playStepLogic(stepData);
                isAnimating = false;
            });
        } else {
            // No transition, just play dialogue
            playStepLogic(stepData);
        }

        currentStep++;
    }

    // ===================== STEP LOGIC =====================
    function playStepLogic(stepData) {
        // Ngừng audio cũ
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        clearTimeout(autoAdvanceTimeout);
        let audioFinished = false;
        let typingFinished = false;

        function tryAutoAdvance() {
            if (audioFinished && typingFinished) {
                autoAdvanceTimeout = setTimeout(() => {
                    if (currentStep <= chapter5Script.length && !isAnimating) {
                        nextStep();
                    }
                }, 1000); // Chờ 1 giây rồi auto next
            }
        }

        // Phát audio thoại — lấy từ cache (đã preloaded)
        currentAudio = getAudio(stepData.audio);
        currentAudio.onended = () => {
            audioFinished = true;
            tryAutoAdvance();
        };

        currentAudio.play().catch(console.warn);

        // Đánh chữ dựa vào thời gian thực để khớp hoàn toàn với tốc độ audio
        typeText(stepData.text, currentAudio, () => {
            typingFinished = true;
            tryAutoAdvance();
        });
    }

    // ===================== SUBTITLE =====================
    function hideSubtitle() {
        const ui = document.getElementById("subtitle-ui");
        ui.classList.remove("visible");
    }

    /**
     * Typewriter engine — sử dụng requestAnimationFrame thay setInterval.
     * Sync hoàn hảo với vsync, không gây micro-stutter.
     */
    function typeText(textData, audioObj, onComplete) {
        const ui = document.getElementById("subtitle-ui");
        const textEl = document.getElementById("subtitle-text");
        ui.classList.add("visible");

        currentTypingCompleteCallback = onComplete;
        fullTextArray = Array.isArray(textData) ? textData : [textData];

        // Tính toán trọng số (độ dài) của từng câu và thêm thời gian nghỉ (pause weight)
        const weights = [];
        let totalWeights = 0;
        const PAUSE_WEIGHT = 40; // Tương đương khoảng thời gian gõ 40 ký tự để nghỉ giữa các câu

        for (let i = 0; i < fullTextArray.length; i++) {
            weights.push(fullTextArray[i].length);
            totalWeights += fullTextArray[i].length;
            if (i < fullTextArray.length - 1) {
                totalWeights += PAUSE_WEIGHT;
            }
        }

        const startTime = performance.now();

        // Cancel animation frame trước đó nếu còn
        if (typeAnimFrame) {
            cancelAnimationFrame(typeAnimFrame);
            typeAnimFrame = null;
        }

        function tick() {
            const durationMs = audioObj.duration * 1000;
            // Nếu audio chưa load kịp metadata, chờ frame tiếp
            if (!durationMs || isNaN(durationMs)) {
                typeAnimFrame = requestAnimationFrame(tick);
                return;
            }

            // Muốn chữ chạy xong ngay trước khi audio dứt 300ms
            const targetDuration = durationMs > 300 ? durationMs - 300 : durationMs;

            const elapsed = performance.now() - startTime;
            let progress = elapsed / targetDuration;
            if (progress > 1) progress = 1;

            const targetWeight = progress * totalWeights;

            let w = 0;
            let pIndex = 0;
            let charIndex = 0;

            for (let i = 0; i < fullTextArray.length; i++) {
                if (targetWeight <= w + weights[i]) {
                    pIndex = i;
                    charIndex = Math.floor(targetWeight - w);
                    break;
                }
                w += weights[i];

                if (i < fullTextArray.length - 1) {
                    if (targetWeight <= w + PAUSE_WEIGHT) {
                        pIndex = i;
                        charIndex = weights[i]; // Giữ nguyên câu hiện tại (pause)
                        break;
                    }
                    w += PAUSE_WEIGHT;
                }
            }

            if (pIndex >= fullTextArray.length) {
                pIndex = fullTextArray.length - 1;
                charIndex = fullTextArray[pIndex].length;
            }

            // Dùng textContent thay innerHTML — tránh HTML parse overhead
            textEl.textContent = fullTextArray[pIndex].substring(0, charIndex);

            if (progress < 1) {
                typeAnimFrame = requestAnimationFrame(tick);
            } else {
                typeAnimFrame = null;
                if (currentTypingCompleteCallback) currentTypingCompleteCallback();
            }
        }

        typeAnimFrame = requestAnimationFrame(tick);
    }

    function skipTyping() {
        // Đã vô hiệu hóa skip
    }

    // ===================== VIDEO SWAP (Double Buffering) =====================
    /**
     * Chuyển video bằng double buffering.
     * Dùng blob URL đã preload → play gần như instant, không lag.
     */
    function swapVideo(videoFile) {
        const v1 = document.getElementById("video-1");
        const v2 = document.getElementById("video-2");

        // Xác định thẻ nào đang active
        const activeVid = v1.classList.contains("active") ? v1 : v2;
        const nextVid = v1.classList.contains("active") ? v2 : v1;

        // Load source từ preloaded blob URL
        const videoURL = getVideoURL(videoFile);
        nextVid.src = videoURL;

        // Đợi video decode sẵn sàng rồi mới hiện
        const activate = () => {
            nextVid.classList.add("active");
            activeVid.classList.remove("active");

            // Dọn dẹp sau khi transition CSS hoàn tất (opacity 1s)
            setTimeout(() => {
                activeVid.pause();
                activeVid.removeAttribute('src');
                activeVid.load(); // Reset hoàn toàn, giải phóng memory
            }, 1100);
        };

        // Nếu video đã ready (từ blob cache), play ngay
        if (nextVid.readyState >= 3) {
            nextVid.play().catch(console.warn);
            activate();
        } else {
            nextVid.addEventListener('canplay', () => {
                nextVid.play().catch(console.warn);
                activate();
            }, { once: true });

            // Fallback timeout: nếu sau 800ms vẫn chưa ready, force activate
            // (tránh stuck trên mạng chậm)
            setTimeout(() => {
                if (!nextVid.classList.contains('active')) {
                    nextVid.play().catch(console.warn);
                    activate();
                }
            }, 800);
        }
    }

    // ===================== TRANSITIONS =====================
    function blinkTransition(callback) {
        const blackOverlay = document.getElementById("black-overlay");
        blackOverlay.style.opacity = "1";
        setTimeout(() => {
            callback(); // Swap diễn ra khi đang đen
            setTimeout(() => {
                blackOverlay.style.opacity = "0";
            }, 1000);
        }, 800);
    }

    function flashTransition(callback) {
        const whiteOverlay = document.getElementById("white-overlay");
        whiteOverlay.style.opacity = "1";
        setTimeout(() => {
            callback();
            setTimeout(() => {
                whiteOverlay.style.opacity = "0";
            }, 1500);
        }, 1500); // Sáng lâu hơn chút
    }

    // ===================== TURN 4 — ENDING =====================
    function triggerTurn4() {
        isAnimating = true;
        hideSubtitle();

        // Cancel subtitle animation nếu còn
        if (typeAnimFrame) {
            cancelAnimationFrame(typeAnimFrame);
            typeAnimFrame = null;
        }

        const whiteOverlay = document.getElementById("white-overlay");
        whiteOverlay.style.opacity = "1"; // Sáng rực giữ nguyên

        setTimeout(() => {
            // Ngắt video cho nhẹ máy vì không nhìn thấy
            const v1 = document.getElementById("video-1");
            const v2 = document.getElementById("video-2");
            v1.pause();
            v2.pause();
            // Giải phóng video memory
            v1.removeAttribute('src');
            v2.removeAttribute('src');
            v1.load();
            v2.load();

            // Tắt POV animation — không cần nữa, tiết kiệm CPU
            const povContainer = document.getElementById("pov-container");
            if (povContainer) {
                povContainer.style.animation = 'none';
            }

            playEndingQuote();

        }, 2500);
    }

    function playEndingQuote() {
        const textEl = document.getElementById("ending-text");
        textEl.innerHTML = "";
        textEl.currentWordSpan = null;

        endingVoiceAudio = getAudio(endingVoicePath);
        endingVoiceAudio.volume = 0.95;
        let didStartEndingTypewriter = false;

        const startTypewriter = () => {
            if (didStartEndingTypewriter) return;
            didStartEndingTypewriter = true;

            preloadEndingFont().finally(() => {
                const audioDurationMs = Number.isFinite(endingVoiceAudio.duration)
                    ? endingVoiceAudio.duration * 1000
                    : endingVoiceFallbackDurationMs;
                const typingDurationMs = Math.max(5000, audioDurationMs - 500);

                typeEndingText(textEl, typingDurationMs, () => {
                    fadeAudioOut(ostAudio, 3000);
                    waitForEndingVoiceThenBlow();
                });
            });
        };

        endingVoiceAudio.addEventListener("loadedmetadata", startTypewriter, { once: true });
        endingVoiceAudio.play().catch((error) => {
            console.warn(error);
            startTypewriter();
        });
    }

    function typeEndingText(textEl, durationMs, onComplete) {
        let lastVisibleCount = 0;
        let didComplete = false;
        const startTime = performance.now();

        function revealCharacters() {
            const elapsed = performance.now() - startTime;
            const progress = Math.min(elapsed / durationMs, 1);
            const targetCount = Math.floor(progress * turn4Text.length);

            while (lastVisibleCount < targetCount) {
                appendEndingCharacter(textEl, turn4Text.charAt(lastVisibleCount), lastVisibleCount);
                lastVisibleCount++;
            }

            if (progress < 1) {
                requestAnimationFrame(revealCharacters);
                return;
            }

            while (lastVisibleCount < turn4Text.length) {
                appendEndingCharacter(textEl, turn4Text.charAt(lastVisibleCount), lastVisibleCount);
                lastVisibleCount++;
            }

            if (!didComplete) {
                didComplete = true;
                onComplete();
            }
        }

        requestAnimationFrame(revealCharacters);
    }

    function appendEndingCharacter(textEl, char, index) {
        if (char === "\n") {
            textEl.appendChild(document.createElement("br"));
            textEl.currentWordSpan = null;
            return;
        }

        if (/\s/.test(char)) {
            textEl.appendChild(document.createTextNode(char));
            textEl.currentWordSpan = null;
            return;
        }

        if (!textEl.currentWordSpan) {
            const wordSpan = document.createElement("span");
            wordSpan.className = "wind-word";
            textEl.currentWordSpan = wordSpan;
            textEl.appendChild(wordSpan);
        }

        const span = document.createElement("span");
        span.className = "wind-letter";

        const rx = Math.random() * 0.9 - 0.1;
        const ry = Math.random() * 0.7 + 0.2;
        const rotX = Math.random() * 0.45;
        const rotY = Math.random() * 0.45;
        const rotZ = Math.random() * 0.7 + 0.3;
        const rotD = Math.floor(Math.random() * 48 - 24);
        const blowDelay = Math.min(index * 12, 900);

        span.style.setProperty("--rx", rx);
        span.style.setProperty("--ry", ry);
        span.style.setProperty("--rotX", rotX);
        span.style.setProperty("--rotY", rotY);
        span.style.setProperty("--rotZ", rotZ);
        span.style.setProperty("--rotD", rotD + "deg");
        span.style.setProperty("--blow-delay", blowDelay + "ms");
        span.textContent = char;
        textEl.currentWordSpan.appendChild(span);
    }

    // ===================== WIND BLOW & CREDIT =====================
    function waitForEndingVoiceThenBlow() {
        const holdBeforeBlowMs = 1400;

        if (!endingVoiceAudio || endingVoiceAudio.ended || endingVoiceAudio.paused) {
            setTimeout(blowTextAway, holdBeforeBlowMs);
            return;
        }

        endingVoiceAudio.addEventListener("ended", () => {
            setTimeout(blowTextAway, holdBeforeBlowMs);
        }, { once: true });
    }

    function blowTextAway() {
        // 1. Phát SFX whoosh gió
        const whooshSFX = new Audio('assets/audio/SFX/whoosh.ogg');
        whooshSFX.volume = 0.6;
        whooshSFX.play().catch(console.warn);

        // 2. Promote layers NGAY TRƯỚC khi animate — tránh promote 100+ layers từ đầu
        const letters = document.querySelectorAll(".wind-letter");
        requestAnimationFrame(() => {
            // Thêm will-change chỉ ngay trước animation
            letters.forEach(letter => {
                letter.style.willChange = 'transform, opacity, filter';
            });

            // Kích hoạt hiệu ứng bay ở frame tiếp theo
            requestAnimationFrame(() => {
                letters.forEach(letter => {
                    letter.classList.add("blow");
                });
            });
        });

        // 3. Sau khi bay hết, cleanup will-change và kích hoạt credit
        setTimeout(() => {
            // Cleanup will-change — giải phóng layer promotion
            letters.forEach(letter => {
                letter.style.willChange = 'auto';
            });

            // Ẩn màn hình ending cũ
            const endingScreen = document.getElementById("ending-screen");
            if (endingScreen) endingScreen.style.display = "none";

            // Hiện màn hình credit
            const creditScreen = document.getElementById("credit-screen");
            if (creditScreen) {
                creditScreen.classList.add("visible");
            }

            // Phát nhạc Credit.m4a
            const creditAudio = new Audio('assets/audio/SFX/Credit.m4a');
            creditAudio.volume = 0.5;
            creditAudio.play().catch(console.warn);
        }, 5600);
    }

    // ===================== UTILITIES =====================
    function fadeAudioOut(audioObj, duration) {
        let vol = audioObj.volume;
        const step = vol / (duration / 50);
        const fadeInterval = setInterval(() => {
            vol -= step;
            if (vol <= 0) {
                clearInterval(fadeInterval);
                audioObj.pause();
                audioObj.volume = 0;
            } else {
                audioObj.volume = vol;
            }
        }, 50);
    }

})();
