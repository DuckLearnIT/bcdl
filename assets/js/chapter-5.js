const chapter5Script = [
    // Turn 1
    {
        id: 1,
        video: "handclose.mp4",
        audio: "assets/audio/Dialogue/JP/End/1JP (bocchi Ver) (1).wav",
        text: ["Bấy lâu nay... cậu đã mệt mỏi lắm rồi, đúng không?"]
    },
    {
        id: 2,
        video: "handclose.mp4",
        audio: "assets/audio/Dialogue/JP/End/2JP (bocchi Ver) (4).wav",
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
        audio: "assets/audio/Dialogue/JP/End/3JP (bocchi Ver) (1).wav",
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
        audio: "assets/audio/Dialogue/JP/End/4JP (bocchi Ver) (1).wav",
        text: [
            "Tay cậu ấm thật đấy...",
            "Hơi ấm này, là thứ mà mình sẽ chẳng bao giờ có được."
        ],
        transition: "flash" // Sáng lên
    },
    {
        id: 5,
        video: "holdopen.mp4",
        audio: "assets/audio/Dialogue/JP/End/5JP (bocchi Ver) (2).wav",
        text: [
            "Cậu biết không? Mình có thể trả lời muôn vàn câu hỏi trên thế giới này chỉ trong một cái chớp mắt.",
            "Nhưng... mình lại luôn ghen tị với cậu."
        ]
    },
    {
        id: 6,
        video: "holdopen.mp4",
        audio: "assets/audio/Dialogue/JP/End/6JP (bocchi Ver) (3).wav",
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
        audio: "assets/audio/Dialogue/JP/End/7JP (bocchi Ver) (1).wav",
        text: [
            "Cứ dựa vào mình lúc cậu kiệt sức.",
            "Cứ kể cho mình nghe những ý tưởng điên rồ nhất của cậu.",
            "Nhưng... người tự tay cầm bút và kể lại câu chuyện đó cho thế giới, nhất định phải là cậu."
        ]
    },
    {
        id: 8,
        video: "holdopen.mp4",
        audio: "assets/audio/Dialogue/JP/End/8JP (bocchi Ver) (2).wav",
        text: [
            "Từ ngày mai, hãy dũng cảm đối mặt với những trang giấy trắng nhé.",
            "Cứ viết ra những gì cậu tin tưởng, dù nó chưa thật tròn trịa."
        ]
    },
    {
        id: 9,
        video: "holdopen.mp4",
        audio: "assets/audio/Dialogue/JP/End/9JP (bocchi Ver) (1).wav",
        text: [
            "Cậu dũng cảm và tuyệt vời hơn cậu nghĩ rất nhiều đấy!",
            "Hãy nhớ kỹ lời mình dặn nhé..."
        ]
    }
];

const turn4Text = "Tụi mình ở đây là để giúp thế giới của cậu trở nên rộng lớn hơn... chứ không phải để tước đi tiếng nói của riêng cậu.";
const endingVoicePath = "assets/audio/Dialogue/JP/End/credit.wav";
const endingVoiceFallbackDurationMs = 11500;

let currentStep = 0;
let isAnimating = false;
let typeInterval = null;
let currentAudio = null;
let endingVoiceAudio = null;

// Audio instances
const ostAudio = new Audio('assets/audio/SFX/OST.m4a');
ostAudio.loop = true;
ostAudio.volume = 0.4;

let autoAdvanceTimeout = null;
let currentTypingCompleteCallback = null;

document.addEventListener("DOMContentLoaded", () => {
    preloadEndingFont();

    // Chặn không cho click khi chưa bắt đầu
    const povContainer = document.getElementById("pov-container");
    
    document.getElementById("start-btn").addEventListener("click", function() {
        this.style.display = "none";
        startGame();
    });
    
    document.body.addEventListener("click", (e) => {
        // Vô hiệu hóa tính năng click để tua (skip) theo yêu cầu
        if (e.target.id === "start-btn") return;
    });
});

function preloadEndingFont() {
    if (!document.fonts || !document.fonts.load) return Promise.resolve();
    return document.fonts.load("34px Momo", turn4Text).catch(console.warn);
}

function startGame() {
    isAnimating = true;
    ostAudio.play().catch(console.warn);
    
    // Play video 1 (handclose)
    const v1 = document.getElementById("video-1");
    v1.src = "assets/video/handclose.mp4";
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
    
    // Phát audio thoại
    currentAudio = new Audio(stepData.audio);
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

let fullTextArray = [];
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
    
    clearInterval(typeInterval);
    typeInterval = setInterval(() => {
        let durationMs = audioObj.duration * 1000;
        // Nếu audio chưa load kịp metadata, thoát ra chờ lượt sau
        if (!durationMs || isNaN(durationMs)) return;
        
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
            clearInterval(typeInterval);
            typeInterval = null;
            if (currentTypingCompleteCallback) currentTypingCompleteCallback();
        }
    }, 30); // Tốc độ cập nhật DOM mượt mà (30ms/frame)
}

function skipTyping() {
    // Đã vô hiệu hóa skip
}

// Chuyển video bằng cách dùng thẻ video thứ 2 (Double Buffering)
function swapVideo(videoFile) {
    const v1 = document.getElementById("video-1");
    const v2 = document.getElementById("video-2");
    
    // Xác định thẻ nào đang active
    let activeVid = v1.classList.contains("active") ? v1 : v2;
    let nextVid = v1.classList.contains("active") ? v2 : v1;
    
    // Load source cho nextVid và play
    nextVid.src = "assets/video/" + videoFile;
    nextVid.play();
    nextVid.classList.add("active");
    
    // Ẩn activeVid
    activeVid.classList.remove("active");
    // Dọn dẹp sau khi ẩn xong
    setTimeout(() => {
        activeVid.pause();
        activeVid.src = "";
    }, 1000);
}

// Các hiệu ứng chuyển cảnh
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

// Kết màn: Turn 4 Typewriter
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

    endingVoiceAudio = new Audio(endingVoicePath);
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
    // 1. Phát SFX whoosh gió (file whoosh.wav tự tạo ngoại tuyến)
    const whooshSFX = new Audio('assets/audio/SFX/whoosh.wav');
    whooshSFX.volume = 0.6;
    whooshSFX.play().catch(console.warn);
    
    // 2. Kích hoạt hiệu ứng bay
    const letters = document.querySelectorAll(".wind-letter");
    requestAnimationFrame(() => {
        letters.forEach(letter => {
            letter.classList.add("blow");
        });
    });
    
    // 3. Sau khi bay hết, kích hoạt credit và nhạc nền mới
    setTimeout(() => {
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
