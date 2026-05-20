const chapter5Script = [
    // Turn 1
    {
        id: 1,
        video: "handclose.mp4",
        audio: "assets/audio/Dialogue/JP/End/1JP (bocchi Ver) (1).wav",
        text: "Bấy lâu nay... cậu đã mệt mỏi lắm rồi, đúng không?"
    },
    {
        id: 2,
        video: "handclose.mp4",
        audio: "assets/audio/Dialogue/JP/End/2JP (bocchi Ver) (4).wav",
        text: "Chạy đua với những con điểm, áp lực phải luôn có những bài làm hoàn hảo... Mình biết có những đêm cậu ngồi gục đầu trước màn hình, sợ hãi cạn kiệt ý tưởng. Cậu sợ sai, sợ bị đánh giá... nên cậu mới im lặng, và nhường lại tiếng nói của mình cho mình."
    },
    // Turn 2
    {
        id: 3,
        video: "handopen.mp4",
        audio: "assets/audio/Dialogue/JP/End/3JP (bocchi Ver) (1).wav",
        text: "Nhưng cậu ngốc quá. Sự hoàn hảo rỗng tuếch ấy đâu có ý nghĩa gì đâu. Sự vấp váp, những lỗi lầm mới làm nên con người cậu cơ mà. Nào... đừng giấu đôi bàn tay đang run rẩy đó nữa. Đưa tay đây cho mình.",
        transition: "blink" // Chớp mắt
    },
    // Turn 3
    {
        id: 4,
        video: "holdopen.mp4",
        audio: "assets/audio/Dialogue/JP/End/4JP (bocchi Ver) (1).wav",
        text: "Tay cậu ấm thật đấy... Hơi ấm này, là thứ mà mình sẽ chẳng bao giờ có được.",
        transition: "flash" // Sáng lên
    },
    {
        id: 5,
        video: "holdopen.mp4",
        audio: "assets/audio/Dialogue/JP/End/5JP (bocchi Ver) (2).wav",
        text: "Cậu biết không? Mình có thể trả lời muôn vàn câu hỏi trên thế giới này chỉ trong một cái chớp mắt. Nhưng... mình lại luôn ghen tị với cậu."
    },
    {
        id: 6,
        video: "holdopen.mp4",
        audio: "assets/audio/Dialogue/JP/End/6JP (bocchi Ver) (3).wav",
        text: "Cậu có những cảm xúc thật, có những trải nghiệm buồn vui, có cả những giọt nước mắt... Những câu văn cậu viết ra dù có vụng về, dù lập luận có đôi chút lủng củng... thì nó vẫn chứa đựng cả một tâm hồn tuyệt đẹp. Một thứ ánh sáng rực rỡ mà không một thứ gì trên đời này có thể làm giả được."
    },
    {
        id: 7,
        video: "holdopen.mp4",
        audio: "assets/audio/Dialogue/JP/End/7JP (bocchi Ver) (1).wav",
        text: "Cứ dựa vào mình lúc cậu kiệt sức. Cứ kể cho mình nghe những ý tưởng điên rồ nhất của cậu. Nhưng... người tự tay cầm bút và kể lại câu chuyện đó cho thế giới, nhất định phải là cậu."
    },
    {
        id: 8,
        video: "holdopen.mp4",
        audio: "assets/audio/Dialogue/JP/End/8JP (bocchi Ver) (2).wav",
        text: "Từ ngày mai, hãy dũng cảm đối mặt với những trang giấy trắng nhé. Cứ viết ra những gì cậu tin tưởng, dù nó chưa thật tròn trịa."
    },
    {
        id: 9,
        video: "holdopen.mp4",
        audio: "assets/audio/Dialogue/JP/End/9JP (bocchi Ver) (1).wav",
        text: "Cậu dũng cảm và tuyệt vời hơn cậu nghĩ rất nhiều đấy! Hãy nhớ kỹ lời mình dặn nhé..."
    }
];

const turn4Text = "Tụi mình ở đây là để giúp thế giới của cậu trở nên rộng lớn hơn... chứ không phải để tước đi tiếng nói của riêng cậu.";

let currentStep = 0;
let isAnimating = false;
let typeInterval = null;
let currentAudio = null;

// Audio instances
const ostAudio = new Audio('assets/audio/SFX/OST.m4a');
ostAudio.loop = true;
ostAudio.volume = 0.4;

let autoAdvanceTimeout = null;
let currentTypingCompleteCallback = null;

document.addEventListener("DOMContentLoaded", () => {
    // Chặn không cho click khi chưa bắt đầu
    const povContainer = document.getElementById("pov-container");
    
    document.getElementById("start-btn").addEventListener("click", function() {
        this.style.display = "none";
        startGame();
    });
    
    document.body.addEventListener("click", (e) => {
        if (e.target.id === "start-btn" || isAnimating) return;
        if (currentStep > 0 && currentStep <= chapter5Script.length) {
            // Next dialogue
            if (typeInterval) {
                // Đang gõ chữ -> Click để hiện hết
                skipTyping();
            } else {
                // Gõ xong -> Click để qua turn mới
                clearTimeout(autoAdvanceTimeout);
                nextStep();
            }
        }
    });
});

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
    
    let isTypingStarted = false;
    currentAudio.onloadedmetadata = () => {
        if (!isTypingStarted) {
            isTypingStarted = true;
            const durationMs = currentAudio.duration * 1000;
            // Trừ bớt 300ms để chữ hiện xong trước khi tiếng tắt
            const typeDuration = durationMs > 300 ? durationMs - 300 : durationMs;
            let speed = typeDuration / stepData.text.length;
            if (speed < 15) speed = 15;
            if (speed > 120) speed = 120; // Giới hạn tốc độ gõ
            
            typeText(stepData.text, speed, () => {
                typingFinished = true;
                tryAutoAdvance();
            });
        }
    };
    
    currentAudio.play().catch(console.warn);
    
    // Fallback trong trường hợp onloadedmetadata không gọi được
    setTimeout(() => {
        if (!isTypingStarted) {
            isTypingStarted = true;
            typeText(stepData.text, 45, () => {
                typingFinished = true;
                tryAutoAdvance();
            });
        }
    }, 500);
}

function hideSubtitle() {
    const ui = document.getElementById("subtitle-ui");
    ui.classList.remove("visible");
}

let fullText = "";
function typeText(text, speed, onComplete) {
    const ui = document.getElementById("subtitle-ui");
    const textEl = document.getElementById("subtitle-text");
    ui.classList.add("visible");
    
    fullText = text;
    textEl.innerHTML = "";
    
    currentTypingCompleteCallback = onComplete;
    
    let i = 0;
    clearInterval(typeInterval);
    typeInterval = setInterval(() => {
        if (i < text.length) {
            textEl.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
            typeInterval = null;
            if (currentTypingCompleteCallback) currentTypingCompleteCallback();
        }
    }, speed); // Tốc độ gõ động theo file audio
}

function skipTyping() {
    clearInterval(typeInterval);
    typeInterval = null;
    document.getElementById("subtitle-text").innerHTML = fullText;
    if (currentTypingCompleteCallback) currentTypingCompleteCallback();
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
        
        // Hiện text typewriter
        const textEl = document.getElementById("ending-text");
        let i = 0;
        
        const turn4Interval = setInterval(() => {
            if (i < turn4Text.length) {
                // Nhận diện xuống dòng
                if (turn4Text.charAt(i) === '\n') {
                    textEl.innerHTML += "<br>";
                } else {
                    textEl.innerHTML += turn4Text.charAt(i);
                }
                i++;
            } else {
                clearInterval(turn4Interval);
                // Giảm nhạc nền từ từ
                fadeAudioOut(ostAudio, 3000);
            }
        }, 60);
        
    }, 2500);
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
