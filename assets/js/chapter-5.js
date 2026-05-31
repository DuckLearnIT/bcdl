/**
 * Chapter 5 — Performance-Optimized Visual Novel Engine
 * 
 * Tối ưu hoá:
 * 1. Video Pool Preloading — tất cả video được load sẵn vào bộ nhớ
 * 2. Audio Pool Preloading — tất cả dialogue audio được cache trước  
 * 3. requestAnimationFrame — thay thế setInterval cho typing mượt hơn
 * 4. Memory Cleanup — dọn dẹp DOM, audio, video đúng cách
 * 5. Orchestration — đảm bảo assets sẵn sàng trước khi tương tác
 *
 * KHÔNG thay đổi bất kỳ logic, timing, hoặc hành vi nào.
 */

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

// ═══════════════════════════════════════════════════════
// POST-CREDIT SEQUENCE (GIVE SCREEN) DATA
// ═══════════════════════════════════════════════════════
const giveDialogueScript = [
    { id: "11.1", text: "Đó... Tất cả những gì tụi mình cùng nhau đi qua nãy giờ, mình đã gom hết lại vào đây rồi.", audio: "assets/audio/Dialogue/JP/Credit/JP1 (bochi Ver).mp3" },
    { id: "11.2", text: "Bản báo cáo dữ liệu hoàn chỉnh này... là bức tranh chân thực nhất về thế hệ của các cậu. Những con số giật mình, những lời trăn trở của thầy cô, và cả những mâu thuẫn lười biếng mà bấy lâu nay cậu vẫn luôn giấu giếm.", audio: "assets/audio/Dialogue/JP/Credit/JP2 (bochi Ver).mp3" },
    { id: "11.3", text: "Cậu thấy lạ không? Rõ ràng mình là một AI, nhưng mình lại cất công in nó ra giấy để đưa tận tay cho cậu thế này.", audio: "assets/audio/Dialogue/JP/Credit/JP3 (bochi Ver) (1).mp3" },
    { id: "11.4", text: "Bởi vì... mình không muốn cậu quét khối văn bản này rồi nhấn tổ hợp phím Ctrl+C, Ctrl+V nữa. Mình muốn cậu tự tay cầm lấy nó. Cảm nhận sức nặng của nó. Và tự cậu đọc nó bằng chính đôi mắt của mình, tự suy ngẫm bằng chính tư duy của mình.", audio: "assets/audio/Dialogue/JP/Credit/JP4 (bochi Ver) (2).mp3" },
    { id: "11.5", text: "Hành trình khám phá dữ liệu của tụi mình hôm nay... chắc là phải dừng ở đây thôi. Đã đến lúc cậu phải quay trở lại thế giới thực rồi.", audio: "assets/audio/Dialogue/JP/Credit/JP5.1 (bochi Ver) (3).mp3" }
];

const giveVideoDialogue = { id: "11.7", text: "Cầm lấy đi này. Đọc nó thật kỹ, rồi gập máy tính lại và làm bài tập đi nhé.", audio: "assets/audio/Dialogue/JP/Credit/JP6 (bochi Ver) (2).mp3" };

const giveEndingQuotes = [
    { id: "11.8", text: "Bất cứ khi nào mệt mỏi cần người tâm sự, hay cần tìm tài liệu khó... thì cứ gõ cửa, mình vẫn luôn trực tuyến ở đây. Nhưng hãy nhớ, mình là bạn đồng hành, chứ không phải người học thay cậu đâu đấy!", audio: "assets/audio/Dialogue/JP/Credit/JP7 (bochi Ver).mp3" },
    { id: "11.9", text: "Tạm biệt nhé. Chúc cậu một ngày đến trường thật vui... và thật sự 'sống' trọn vẹn!", audio: "assets/audio/Dialogue/JP/Credit/JP8 (bochi Ver).mp3" }
];

const figmaRedirectUrl = "https://www.figma.com/proto/8A9We22ROJs6qmc2CGf8fA/B%C3%A1o%20ch%C3%AD%20d%E1%BB%AF%20li%E1%BB%87u%20cu%E1%BB%91i%20k%C3%AC?node-id=1-2&t=EUUfqEzqcWzYtMse-1&hide-ui=1";

let currentStep = 0;
let isAnimating = false;
let currentAudio = null;
let endingVoiceAudio = null;

// ═══════════════════════════════════════════════════════
// ASSET POOLS — Preload video & audio vào bộ nhớ
// ═══════════════════════════════════════════════════════

const VIDEO_FILES = ['handclose.mp4', 'handopen.mp4', 'holdopen.mp4'];
const videoPool = {}; // { filename: HTMLVideoElement }
const audioPool = {}; // { src: HTMLAudioElement }

/**
 * Preload tất cả video vào bộ nhớ.
 * Tổng ~4.4MB — chấp nhận được cho trải nghiệm mượt mà.
 */
function preloadAllVideos() {
    const TIMEOUT_MS = 15000; // 15s timeout
    return Promise.all(VIDEO_FILES.map(file => {
        return new Promise(resolve => {
            const v = document.createElement('video');
            v.loop = true;
            v.muted = true;
            v.playsInline = true;
            v.preload = 'auto';
            v.src = 'assets/video/' + file;

            const timer = setTimeout(() => {
                // Timeout — resolve anyway để không block flow
                resolve();
            }, TIMEOUT_MS);

            v.addEventListener('canplaythrough', () => {
                clearTimeout(timer);
                resolve();
            }, { once: true });

            v.load();
            videoPool[file] = v;
        });
    }));
}

/**
 * Preload tất cả dialogue audio vào bộ nhớ.
 * Thu thập từ chapter5Script + endingVoicePath.
 */
function preloadAllAudio() {
    const audioFiles = new Set();
    chapter5Script.forEach(s => { if (s.audio) audioFiles.add(s.audio); });
    audioFiles.add(endingVoicePath);

    const TIMEOUT_MS = 10000; // 10s timeout

    return Promise.all([...audioFiles].map(src => {
        return new Promise(resolve => {
            const a = new Audio();
            a.preload = 'auto';
            a.src = src;

            const timer = setTimeout(() => resolve(), TIMEOUT_MS);

            a.addEventListener('canplaythrough', () => {
                clearTimeout(timer);
                resolve();
            }, { once: true });

            audioPool[src] = a;
        });
    }));
}

/**
 * Lấy audio từ pool hoặc tạo mới nếu chưa có (fallback an toàn).
 * Luôn clone để tránh xung đột khi audio chưa kết thúc.
 */
function getAudioFromPool(src) {
    const cached = audioPool[src];
    if (cached) {
        // Clone node để cho phép phát lại mà không ảnh hưởng cache
        const clone = cached.cloneNode();
        clone.preload = 'auto';
        return clone;
    }
    // Fallback: tạo mới (trường hợp hiếm)
    return new Audio(src);
}

// ═══════════════════════════════════════════════════════
// OST AUDIO
// ═══════════════════════════════════════════════════════

const ostAudio = new Audio('assets/audio/SFX/OST.m4a');
ostAudio.preload = 'none';
ostAudio.loop = true;
ostAudio.volume = 0.4;

let autoAdvanceTimeout = null;
let currentTypingCompleteCallback = null;

// ═══════════════════════════════════════════════════════
// INITIALIZATION — Preload assets rồi mới cho phép tương tác
// ═══════════════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {
    preloadEndingFont();

    // Chặn không cho click khi chưa bắt đầu
    const povContainer = document.getElementById("pov-container");
    
    // Khởi tạo water ripple effect (sử dụng ảnh SVG gradient nền từ CSS để hoạt động tối ưu và không bị lỗi CORS)
    const $rippleArea = $('.full-landing-image');
    $rippleArea.ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04
    });

    // Preload tất cả assets song song trong khi user ngắm ripple
    Promise.allSettled([
        preloadAllVideos(),
        preloadAllAudio(),
        preloadGiveDialogueAudio()
    ]).then(() => {
        // Assets đã sẵn sàng — giờ OST cũng preload luôn
        ostAudio.preload = 'auto';
        ostAudio.load();
        
        // Bắt đầu preload credit.mp4 ngầm trong lúc user đang chơi.
        // Video 73MB cần thời gian — gameplay ~2–3 phút đủ để buffer xong trên đa số kết nối.
        const creditVideoEl = document.getElementById('credit-video');
        if (creditVideoEl) {
            creditVideoEl.preload = 'auto';
            creditVideoEl.load();
        }

        // Preload give.mp4 ngầm để khi đến post-credit chạy mượt mà ngay
        const giveVideoEl = document.getElementById('give-video');
        if (giveVideoEl) {
            giveVideoEl.preload = 'auto';
            giveVideoEl.load();
        }
    });

    let hasStarted = false;
    $rippleArea.on("click", function() {
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

function preloadEndingFont() {
    if (!document.fonts || !document.fonts.load) return Promise.resolve();
    return document.fonts.load("34px Momo", turn4Text).catch(console.warn);
}

// ═══════════════════════════════════════════════════════
// GAME FLOW
// ═══════════════════════════════════════════════════════

function startGame() {
    isAnimating = true;
    ostAudio.play().catch(console.warn);
    
    // Play video 1 (handclose) — lấy từ pool đã preload
    const v1 = document.getElementById("video-1");
    const pooledVideo = videoPool['handclose.mp4'];
    if (pooledVideo && pooledVideo.readyState >= 3) {
        // Video đã sẵn sàng trong pool — copy src để tận dụng cache
        v1.src = pooledVideo.src;
    } else {
        v1.src = "assets/video/handclose.mp4";
    }
    v1.play();
    v1.classList.add("active");
    
    // Hiệu ứng chớp mắt mở đầu
    simulateEyeOpening(() => {
        isAnimating = false;
        nextStep(); // Load step 0 (Turn 1 đầu tiên)
    });
}

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

function playStepLogic(stepData) {
    // Ngừng audio cũ — cleanup đúng cách
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.onended = null; // Xóa event listener tránh leak
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
    
    // Phát audio thoại — lấy từ pool đã preload
    currentAudio = getAudioFromPool(stepData.audio);
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

function hideSubtitle() {
    const ui = document.getElementById("subtitle-ui");
    ui.classList.remove("visible");
}

// ═══════════════════════════════════════════════════════
// TYPING ENGINE — requestAnimationFrame (thay thế setInterval)
// ═══════════════════════════════════════════════════════

let fullTextArray = [];
let typeRAF = null; // requestAnimationFrame ID thay vì setInterval

function typeText(textData, audioObj, onComplete) {
    const ui = document.getElementById("subtitle-ui");
    const textEl = document.getElementById("subtitle-text");
    ui.classList.add("visible");
    
    currentTypingCompleteCallback = onComplete;
    fullTextArray = Array.isArray(textData) ? textData : [textData];
    
    // Tính toán trọng số (độ dài) của từng câu và thêm thời gian nghỉ (pause weight)
    let weights = [];
    let totalWeights = 0;
    const PAUSE_WEIGHT = 40; // Tương đương khoảng thời gian gõ 40 ký tự để nghỉ giữa các câu
    
    for (let i = 0; i < fullTextArray.length; i++) {
        weights.push(fullTextArray[i].length);
        totalWeights += fullTextArray[i].length;
        if (i < fullTextArray.length - 1) {
            totalWeights += PAUSE_WEIGHT;
        }
    }
    
    let startTime = performance.now();
    
    // Cancel animation frame cũ nếu có
    if (typeRAF) {
        cancelAnimationFrame(typeRAF);
        typeRAF = null;
    }
    
    function tick() {
        let durationMs = audioObj.duration * 1000;
        // Nếu audio chưa load kịp metadata, chờ frame tiếp
        if (!durationMs || isNaN(durationMs)) {
            typeRAF = requestAnimationFrame(tick);
            return;
        }
        
        // Muốn chữ chạy xong ngay trước khi audio dứt 300ms
        let targetDuration = durationMs > 300 ? durationMs - 300 : durationMs;
        
        let elapsed = performance.now() - startTime;
        let progress = elapsed / targetDuration;
        if (progress > 1) progress = 1;
        
        let targetWeight = progress * totalWeights;
        
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
        
        textEl.innerHTML = fullTextArray[pIndex].substring(0, charIndex);
        
        if (progress >= 1) {
            typeRAF = null;
            if (currentTypingCompleteCallback) currentTypingCompleteCallback();
        } else {
            typeRAF = requestAnimationFrame(tick);
        }
    }
    
    typeRAF = requestAnimationFrame(tick);
}

function skipTyping() {
    // Đã vô hiệu hóa skip
}

// ═══════════════════════════════════════════════════════
// VIDEO SWAP — Double Buffering (tối ưu: dùng pool, không xoá src)
// ═══════════════════════════════════════════════════════

function swapVideo(videoFile) {
    const v1 = document.getElementById("video-1");
    const v2 = document.getElementById("video-2");
    
    // Xác định thẻ nào đang active
    let activeVid = v1.classList.contains("active") ? v1 : v2;
    let nextVid = v1.classList.contains("active") ? v2 : v1;
    
    // Load source cho nextVid — ưu tiên lấy từ pool đã preload
    const pooledVideo = videoPool[videoFile];
    if (pooledVideo && pooledVideo.readyState >= 3) {
        // Video đã sẵn sàng — copy src (browser sẽ lấy từ cache)
        nextVid.src = pooledVideo.src;
    } else {
        nextVid.src = "assets/video/" + videoFile;
    }
    
    nextVid.play();
    nextVid.classList.add("active");
    
    // Ẩn activeVid
    activeVid.classList.remove("active");
    // Dọn dẹp sau khi ẩn xong — chỉ pause, KHÔNG xoá src (tránh re-decode nếu cần lại)
    setTimeout(() => {
        activeVid.pause();
    }, 1000);
}

// ═══════════════════════════════════════════════════════
// TRANSITIONS — Các hiệu ứng chuyển cảnh
// ═══════════════════════════════════════════════════════

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

// ═══════════════════════════════════════════════════════
// ENDING — Turn 4 Typewriter + Wind Effect + Credit
// ═══════════════════════════════════════════════════════

function triggerTurn4() {
    isAnimating = true;
    hideSubtitle();
    
    const whiteOverlay = document.getElementById("white-overlay");
    whiteOverlay.style.opacity = "1"; // Sáng rực giữ nguyên
    
    setTimeout(() => {
        // Ngắt video cho nhẹ máy vì không nhìn thấy
        document.getElementById("video-1").pause();
        document.getElementById("video-2").pause();
        
        playEndingQuote();
        
    }, 2500);
}

function playEndingQuote() {
    const textEl = document.getElementById("ending-text");
    textEl.innerHTML = "";
    textEl.currentWordSpan = null;

    // Lấy audio từ pool đã preload
    endingVoiceAudio = getAudioFromPool(endingVoicePath);
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
    
    // 2. Kích hoạt hiệu ứng bay chữ
    const letters = document.querySelectorAll(".wind-letter");
    requestAnimationFrame(() => {
        letters.forEach(letter => {
            letter.classList.add("blow");
        });
    });
    
    // 3. Sau khi chữ bay hết (~5.6s), chuyển sang Credit Roll
    setTimeout(() => {
        // Ẩn màn hình ending
        const endingScreen = document.getElementById("ending-screen");
        if (endingScreen) endingScreen.style.display = "none";
        
        // Dọn dẹp DOM
        const endingText = document.getElementById("ending-text");
        if (endingText) endingText.innerHTML = "";
        
        // Tắt OST (credit video có audio riêng)
        fadeAudioOut(ostAudio, 2000);
        
        // Hiện màn hình credit
        const creditScreen = document.getElementById("credit-screen");
        if (creditScreen) {
            creditScreen.classList.add("visible");
        }
        
        // Build DOM credit roll từ dữ liệu
        buildCreditDOM();
        
        // Phát video credit và bắt đầu roll
        launchCreditRoll();
        
    }, 5600);
}

function fadeAudioOut(audioObj, duration) {
    let vol = audioObj.volume;
    const step = vol / (duration / 50);
    const fadeInterval = setInterval(() => {
        vol -= step;
        if (vol <= 0) {
            clearInterval(fadeInterval);
            audioObj.pause();
        } else {
            audioObj.volume = vol;
        }
    }, 50);
}

// ═══════════════════════════════════════════════════════
// CREDIT ROLL — Dữ liệu & Logic cuộn đồng bộ video
// ═══════════════════════════════════════════════════════

/**
 * Dữ liệu credit được parse từ nội dung credit.txt.
 * Cấu trúc: { type: 'section'|'line'|'name', section?, role?, name? }
 */
const creditData = [
    { type: 'section', section: 'LEADERSHIP' },
    { type: 'line', role: 'Executive Editor', name: 'Quỳnh' },
    { type: 'line', role: 'Project Director', name: 'Quỳnh' },
    { type: 'line', role: 'Research Director', name: 'Quỳnh' },
    { type: 'line', role: 'Data Director', name: 'Quỳnh' },

    { type: 'section', section: 'EDITORIAL' },
    { type: 'line', role: 'Managing Editor', name: 'Lan, Nhàn' },
    { type: 'line', role: 'Editorial Lead', name: 'Lan, Nhàn' },
    { type: 'line', role: 'Story Development', name: 'Lan, Nhàn' },
    { type: 'line', role: 'Long-form Writing', name: 'Lan, Nhàn' },
    { type: 'line', role: 'Headline, Sapo & Conclusion', name: 'Lan, Nhàn' },
    { type: 'line', role: 'Copy Editing', name: 'Lan, Nhàn' },

    { type: 'section', section: 'REPORTING & RESEARCH' },
    { type: 'line', role: 'Survey Design', name: 'Minh Thu' },
    { type: 'line', role: 'Research Coordination', name: 'Quỳnh, Minh Thu' },
    { type: 'line', role: 'Field Research', name: 'Hiếu' },
    { type: 'line', role: 'Data Collection', name: 'Cả nhóm' },
    { type: 'line', role: 'Secondary Research', name: 'Quỳnh, Hiếu, Minh Thu' },
    { type: 'line', role: 'Document Analysis', name: 'Quỳnh, Hiếu, Minh Thu' },
    { type: 'line', role: 'Fact-checking', name: 'Quỳnh, Lan, Nhàn, Minh Thu' },

    { type: 'section', section: 'DATA' },
    { type: 'line', role: 'Data Editor', name: 'Quỳnh' },
    { type: 'line', role: 'Data Cleaning', name: 'Quỳnh, Hiếu, Minh Thu' },
    { type: 'line', role: 'Data Processing', name: 'Quỳnh, Hiếu, Minh Thu' },
    { type: 'line', role: 'Statistical Analysis', name: 'Quỳnh, Hiếu, Minh Thu' },
    { type: 'line', role: 'Insight Development', name: 'Quỳnh, Hiếu, Minh Thu' },
    { type: 'line', role: 'Key Findings & Interpretation', name: 'Quỳnh, Hiếu, Minh Thu' },

    { type: 'section', section: 'VISUAL' },
    { type: 'line', role: 'Visual Editor', name: 'Đức' },
    { type: 'line', role: 'Creative Direction', name: 'Đức' },
    { type: 'line', role: 'Art Direction', name: 'Đức' },
    { type: 'line', role: 'Visual Inspiration', name: 'Đức' },
    { type: 'line', role: 'Visual Concept Development', name: 'Đức' },
    { type: 'line', role: 'Visual Storytelling', name: 'Đức' },
    { type: 'line', role: 'Information Design', name: 'Đức, Hiếu' },
    { type: 'line', role: 'Data Visualization', name: 'Đức, Hiếu' },
    { type: 'line', role: 'Infographic Design', name: 'Đức' },
    { type: 'line', role: 'Statistical Graphics', name: 'Đức' },
    { type: 'line', role: 'Editorial Design System', name: 'Đức' },
    { type: 'line', role: 'Typography & Layout', name: 'Đức' },
    { type: 'line', role: 'Publication Design', name: 'Đức' },
    { type: 'line', role: 'E-magazine Production', name: 'Hiếu' },
    { type: 'line', role: 'Final Artwork Production', name: 'Đức' },

    { type: 'section', section: 'MEDIA' },
    { type: 'line', role: 'Media Producer', name: 'Đức' },
    { type: 'line', role: 'Photo Production', name: 'Đức' },
    { type: 'line', role: 'Video Production', name: 'Đức' },
    { type: 'line', role: 'Audio Production', name: 'Đức' },
    { type: 'line', role: 'Visual Asset Collection', name: 'Đức' },
    { type: 'line', role: 'Post-production Support', name: 'Đức' },
    { type: 'line', role: 'Voice Over Vietnam', name: 'Achernar (Google TTS)' },
    { type: 'line', role: 'Voice Over Japanese', name: 'Inori Minase & Yoshino Aoyama (RVC)' },

    { type: 'section', section: 'DEVELOPMENT' },
    { type: 'line', role: 'System Architecture', name: 'Đức' },
    { type: 'line', role: 'Interactive Mechanics & Logic', name: 'Đức' },
    { type: 'line', role: 'Developer', name: 'Đức' },
    { type: 'line', role: 'AI Assistant & Developer', name: 'Antigravity' },

    { type: 'section', section: 'PRODUCTION' },
    { type: 'line', role: 'Documentation & Submission', name: 'Quỳnh' },
    { type: 'line', role: 'Final Review', name: 'Quỳnh' },

    { type: 'section', section: 'SPECIAL THANKS' },
    { type: 'line', role: 'Đồng Đức Trung Kiên', name: 'Tester' },
    { type: 'line', role: 'Nguyễn Cẩm Tú', name: 'Tester' },

    { type: 'section', section: 'PRODUCED BY' },
    { type: 'name', name: 'Quỳnh' },
    { type: 'name', name: 'Minh Thu' },
    { type: 'name', name: 'Hiếu' },
    { type: 'name', name: 'Lan' },
    { type: 'name', name: 'Đức' },
    { type: 'name', name: 'Nhân' },
];

/**
 * Inject credit DOM vào #credit-roll-inner từ creditData.
 */
function buildCreditDOM() {
    const container = document.getElementById('credit-roll-inner');
    if (!container) return;
    container.innerHTML = '';

    creditData.forEach(item => {
        if (item.type === 'section') {
            const el = document.createElement('div');
            el.className = 'credit-section-title';
            el.textContent = item.section;
            container.appendChild(el);
        } else if (item.type === 'line') {
            // Kiểu điện ảnh: role nhỏ mờ phía trên, tên lớn trắng phía dưới, căn giữa
            const block = document.createElement('div');
            block.className = 'credit-block';
            block.innerHTML = `<div class="credit-block-role">${item.role}</div><div class="credit-block-name">${item.name}</div>`;
            container.appendChild(block);
        } else if (item.type === 'name') {
            const el = document.createElement('div');
            el.className = 'credit-name-only';
            el.textContent = item.name;
            container.appendChild(el);
        }
    });

    // Spacer cuối — đảm bảo dòng cuối trôi hết khỏi đỉnh trước khi video kết thúc
    const spacer = document.createElement('div');
    spacer.className = 'credit-end-spacer';
    container.appendChild(spacer);
}

/**
 * Phát video credit.mp4 và bắt đầu cuộn credit đồng bộ với duration của video.
 * Sử dụng rAF loop để cuộn mượt mà, không bị jitter.
 */
function launchCreditRoll() {
    const creditVideo = document.getElementById('credit-video');
    const rollInner = document.getElementById('credit-roll-inner');
    const loadingEl = document.getElementById('credit-loading');
    if (!creditVideo || !rollInner) return;

    let rollRAF = null;

    function beginRoll() {
        // Ẩn spinner
        if (loadingEl) loadingEl.classList.add('hidden');

        const videoDurationMs = creditVideo.duration * 1000;
        const viewportH = window.innerHeight;
        const contentH = rollInner.scrollHeight;

        // Toán học cuộn:
        //   progress=0 → translateY = +viewportH  (content hoàn toàn bên dưới màn hình)
        //   progress=1 → translateY = -contentH   (content hoàn toàn bên trên màn hình)
        // Tổng quãng đường = viewportH + contentH
        const totalScrollPx = viewportH + contentH;

        const startTime = performance.now();

        function tick(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / videoDurationMs, 1);

            const translateY = viewportH - (progress * totalScrollPx);
            rollInner.style.transform = `translateY(${translateY}px)`;

            if (progress < 1) {
                rollRAF = requestAnimationFrame(tick);
            }
        }

        rollRAF = requestAnimationFrame(tick);

        // Cleanup khi video kết thúc và chuyển tiếp sang Give Screen (post-credit)
        creditVideo.addEventListener('ended', () => {
            if (rollRAF) cancelAnimationFrame(rollRAF);
            
            // Ẩn màn hình credit mượt mà
            const creditScreen = document.getElementById("credit-screen");
            if (creditScreen) {
                creditScreen.style.transition = "opacity 1.5s ease";
                creditScreen.style.opacity = 0;
                setTimeout(() => {
                    creditScreen.classList.remove("visible");
                    creditScreen.style.display = "none";
                    
                    // Kích hoạt Give Screen
                    launchGiveScreen();
                }, 1500);
            } else {
                launchGiveScreen();
            }
        }, { once: true });
    }

    // Xác định thời điểm bắt đầu cuộn
    if (creditVideo.readyState >= 1 && isFinite(creditVideo.duration)) {
        // Video đã có metadata — play và cuộn ngay
        creditVideo.play().catch(console.warn);
        beginRoll();
    } else {
        // Chờ metadata load (spinner đang hiện)
        creditVideo.addEventListener('loadedmetadata', () => {
            creditVideo.play().catch(console.warn);
            beginRoll();
        }, { once: true });

        // Trigger load nếu chưa bắt đầu
        if (creditVideo.preload === 'none') {
            creditVideo.preload = 'auto';
            creditVideo.load();
        }
    }
}

// ═══════════════════════════════════════════════════════
// POST-CREDIT SEQUENCE (GIVE SCREEN) LOGIC
// ═══════════════════════════════════════════════════════

let giveSubtitleRAF = null;
let endingQuoteRAF = null;

/**
 * Typewriter effect cho subtitle trên give-screen
 */
function typeGiveSubtitle(text, durationMs, onComplete) {
    const textEl = document.getElementById("give-subtitle-text");
    if (!textEl) return;
    textEl.textContent = "";

    const startTime = performance.now();
    let charIndex = 0;

    if (giveSubtitleRAF) {
        cancelAnimationFrame(giveSubtitleRAF);
    }

    function tick() {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        const targetCharCount = Math.floor(progress * text.length);

        if (charIndex < targetCharCount) {
            textEl.textContent = text.slice(0, targetCharCount);
            charIndex = targetCharCount;
        }

        if (progress < 1) {
            giveSubtitleRAF = requestAnimationFrame(tick);
        } else {
            textEl.textContent = text;
            if (onComplete) onComplete();
        }
    }
    tick();
}

/**
 * Typewriter effect cho quote trên màn hình trắng xóa
 */
function typeGiveEndingQuote(text, durationMs, onComplete) {
    const textEl = document.getElementById("give-ending-text");
    if (!textEl) return;
    textEl.innerHTML = ""; // Xóa text cũ

    const startTime = performance.now();
    let charIndex = 0;

    if (endingQuoteRAF) {
        cancelAnimationFrame(endingQuoteRAF);
    }

    function tick() {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        const targetCharCount = Math.floor(progress * text.length);

        if (charIndex < targetCharCount) {
            textEl.textContent = text.slice(0, targetCharCount);
            charIndex = targetCharCount;
        }

        if (progress < 1) {
            endingQuoteRAF = requestAnimationFrame(tick);
        } else {
            textEl.textContent = text;
            if (onComplete) onComplete();
        }
    }
    tick();
}

// Audio cho give dialogue sequence
let giveCurrentAudio = null;

/**
 * Preload tất cả audio cho give dialogue sequence
 */
function preloadGiveDialogueAudio() {
    const audioFiles = new Set();
    giveDialogueScript.forEach(s => { if (s.audio) audioFiles.add(s.audio); });
    audioFiles.add(giveVideoDialogue.audio);
    giveEndingQuotes.forEach(q => { if (q.audio) audioFiles.add(q.audio); });

    const TIMEOUT_MS = 10000;
    return Promise.all([...audioFiles].map(src => {
        return new Promise(resolve => {
            const a = new Audio();
            a.preload = 'auto';
            a.src = src;
            const timer = setTimeout(() => resolve(), TIMEOUT_MS);
            a.addEventListener('canplaythrough', () => {
                clearTimeout(timer);
                resolve();
            }, { once: true });
            audioPool[src] = a;
        });
    }));
}

/**
 * Chạy chuỗi thoại từ 11.1 tới 11.5 trên nền đen, video lắc nhẹ.
 * Type chữ đồng bộ với audio, chuyển ngay khi audio kết thúc.
 */
function runGiveDialogueSequence(index = 0) {
    if (index >= giveDialogueScript.length) {
        // Thoại xong -> Chuyển ngay sang video + sub 11.7
        playGiveVideoWithSub();
        return;
    }

    const item = giveDialogueScript[index];
    const text = item.text;
    const audioSrc = item.audio;

    // Cleanup audio cũ
    if (giveCurrentAudio) {
        giveCurrentAudio.pause();
        giveCurrentAudio.onended = null;
        giveCurrentAudio = null;
    }

    // Lấy audio từ pool hoặc tạo mới
    giveCurrentAudio = getAudioFromPool(audioSrc);

    // Khi audio kết thúc -> chuyển dialogue tiếp theo ngay
    giveCurrentAudio.onended = () => {
        const textEl = document.getElementById("give-subtitle-text");
        if (textEl) {
            textEl.style.transition = "opacity 0.3s ease";
            textEl.style.opacity = 0;
        }
        setTimeout(() => {
            if (textEl) {
                textEl.style.opacity = 1;
            }
            runGiveDialogueSequence(index + 1);
        }, 300);
    };

    // Hàm bắt đầu type chữ với duration chính xác
    const startTyping = () => {
        const audioDurationMs = giveCurrentAudio.duration * 1000;
        const typeDuration = Math.max(1000, audioDurationMs > 200 ? audioDurationMs - 200 : audioDurationMs);
        typeGiveSubtitle(text, typeDuration, null);
    };

    // Phát audio và type chữ đồng bộ
    if (giveCurrentAudio.duration) {
        // Duration đã có sẵn
        giveCurrentAudio.play().catch(console.warn);
        startTyping();
    } else {
        // Chờ metadata load xong
        giveCurrentAudio.addEventListener('loadedmetadata', () => {
            giveCurrentAudio.play().catch(console.warn);
            startTyping();
        }, { once: true });
        // Fallback: nếu metadata load quá lâu, dùng text length estimate
        setTimeout(() => {
            if (!giveCurrentAudio.duration) {
                giveCurrentAudio.play().catch(console.warn);
                const fallbackDuration = Math.max(2500, Math.min(6000, text.length * 35));
                typeGiveSubtitle(text, fallbackDuration, null);
            }
        }, 500);
    }
}

/**
 * Phát video give.mp4, bỏ lắc, chạy thoại 11.7 đồng bộ với audio
 */
function playGiveVideoWithSub() {
    const giveVideo = document.getElementById("give-video");
    const subtitleUI = document.getElementById("give-subtitle-ui");

    if (!giveVideo) return;

    // Cleanup audio cũ
    if (giveCurrentAudio) {
        giveCurrentAudio.pause();
        giveCurrentAudio.onended = null;
        giveCurrentAudio = null;
    }

    // Bỏ sway bằng cách thêm class playing
    giveVideo.classList.add("playing");

    if (subtitleUI) {
        subtitleUI.style.opacity = 1;
    }

    // Phát video
    giveVideo.play().catch(console.warn);

    // Phát audio 11.7 và type chữ đồng bộ
    const text = giveVideoDialogue.text;
    const audioSrc = giveVideoDialogue.audio;
    giveCurrentAudio = getAudioFromPool(audioSrc);

    giveCurrentAudio.onended = () => {
        // Audio kết thúc -> chờ video kết thúc rồi chuyển
        if (giveVideo.ended || giveVideo.paused) {
            if (subtitleUI) {
                subtitleUI.style.transition = "opacity 0.8s ease";
                subtitleUI.style.opacity = 0;
            }
            fadeToWhiteAndShowQuotes();
        }
    };

    // Hàm bắt đầu type chữ với duration chính xác
    const startTyping = () => {
        const audioDurationMs = giveCurrentAudio.duration * 1000;
        const typeDuration = Math.max(1000, audioDurationMs > 200 ? audioDurationMs - 200 : audioDurationMs);
        typeGiveSubtitle(text, typeDuration, null);
    };

    // Phát audio và type chữ đồng bộ
    if (giveCurrentAudio.duration) {
        giveCurrentAudio.play().catch(console.warn);
        startTyping();
    } else {
        giveCurrentAudio.addEventListener('loadedmetadata', () => {
            giveCurrentAudio.play().catch(console.warn);
            startTyping();
        }, { once: true });
        setTimeout(() => {
            if (!giveCurrentAudio.duration) {
                giveCurrentAudio.play().catch(console.warn);
                const fallbackDuration = Math.max(2000, Math.min(5000, text.length * 35));
                typeGiveSubtitle(text, fallbackDuration, null);
            }
        }, 500);
    }

    // Đợi video ended chuyển sang màn hình trắng xóa
    giveVideo.addEventListener("ended", () => {
        if (subtitleUI) {
            subtitleUI.style.transition = "opacity 0.8s ease";
            subtitleUI.style.opacity = 0;
        }
        fadeToWhiteAndShowQuotes();
    }, { once: true });
}

/**
 * Màn hình trắng xóa + quote kết thúc (11.8, 11.9) + chuyển hướng Figma.
 * Type chữ đồng bộ với audio, chuyển ngay khi audio kết thúc.
 */
function fadeToWhiteAndShowQuotes() {
    const whiteOverlay = document.getElementById("give-white-overlay");
    if (whiteOverlay) {
        whiteOverlay.classList.add("visible");
    }

    // Cleanup audio cũ
    if (giveCurrentAudio) {
        giveCurrentAudio.pause();
        giveCurrentAudio.onended = null;
        giveCurrentAudio = null;
    }

    // Chờ 1.5s màn hình trắng hoàn toàn rồi chạy quote 11.8
    setTimeout(() => {
        playGiveEndingQuote(0);
    }, 1500);
}

/**
 * Phát ending quote với audio (index 0 = 11.8, index 1 = 11.9)
 */
function playGiveEndingQuote(index) {
    if (index >= giveEndingQuotes.length) {
        // Hết quotes -> redirect qua Figma sau 1s
        setTimeout(() => {
            window.location.href = figmaRedirectUrl;
        }, 1000);
        return;
    }

    const quote = giveEndingQuotes[index];
    const text = quote.text;
    const audioSrc = quote.audio;

    // Cleanup audio cũ
    if (giveCurrentAudio) {
        giveCurrentAudio.pause();
        giveCurrentAudio.onended = null;
    }

    // Lấy audio từ pool
    giveCurrentAudio = getAudioFromPool(audioSrc);

    // Khi audio kết thúc -> chuyển quote tiếp theo ngay
    giveCurrentAudio.onended = () => {
        if (index === 0) {
            // Chuyển từ quote 1 sang quote 2
            const textEl = document.getElementById("give-ending-text");
            if (textEl) {
                textEl.style.transition = "opacity 0.6s ease";
                textEl.style.opacity = 0;
            }
            setTimeout(() => {
                if (textEl) {
                    textEl.style.opacity = 1;
                }
                playGiveEndingQuote(1);
            }, 700);
        } else {
            // Quote 2 kết thúc -> redirect
            setTimeout(() => {
                window.location.href = figmaRedirectUrl;
            }, 1000);
        }
    };

    // Hàm bắt đầu type chữ với duration chính xác
    const startTyping = () => {
        const audioDurationMs = giveCurrentAudio.duration * 1000;
        const typeDuration = Math.max(1000, audioDurationMs > 200 ? audioDurationMs - 200 : audioDurationMs);
        typeGiveEndingQuote(text, typeDuration, null);
    };

    // Phát audio và type chữ đồng bộ
    if (giveCurrentAudio.duration) {
        giveCurrentAudio.play().catch(console.warn);
        startTyping();
    } else {
        giveCurrentAudio.addEventListener('loadedmetadata', () => {
            giveCurrentAudio.play().catch(console.warn);
            startTyping();
        }, { once: true });
        setTimeout(() => {
            if (!giveCurrentAudio.duration) {
                giveCurrentAudio.play().catch(console.warn);
                const fallbackDuration = Math.max(3000, Math.min(7000, text.length * 40));
                typeGiveEndingQuote(text, fallbackDuration, null);
            }
        }, 500);
    }
}

/**
 * Khởi động Give Screen sau khi kết thúc credit
 */
function launchGiveScreen() {
    const giveScreen = document.getElementById("give-screen");
    const giveVideo = document.getElementById("give-video");
    const subtitleUI = document.getElementById("give-subtitle-ui");
    
    if (!giveScreen) return;
    
    // Hiện give screen
    giveScreen.classList.add("visible");
    
    if (giveVideo) {
        giveVideo.pause();
        giveVideo.currentTime = 0;
        giveVideo.style.display = "block";
    }
    
    if (subtitleUI) {
        subtitleUI.style.opacity = 1;
    }
    
    // Bắt đầu chuỗi hội thoại
    runGiveDialogueSequence(0);
}
