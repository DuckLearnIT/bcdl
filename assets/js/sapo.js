/* sapo.js - Interactive Sapo Sequence Logic */

const sapoScript = [
    {
        name: "Nguyễn Văn A",
        text: "Bài luận 2.000 từ về 'Xu hướng truyền thông số' á? Cô đùa mình chắc, tuần này còn đống deadline chạy sự kiện nữa, đào đâu ra thời gian mà nghiên cứu với viết lách tận 2.000 từ bây giờ?",
        pose: "assets/img/amy/normal/default.webp", // Fallback pose, we will hide sprite
        hideSprite: true,
        audio: "assets/audio/SFX/dialogueSFX.m4a",
        customDur: 2.5 // Tốc độ gõ phím nhanh (2.5 giây cho toàn bộ dòng)
    },
    {
        name: "Dẫn chuyện",
        text: "Hai ngày sau, A ngồi trước màn hình laptop. Trang Word vẫn trắng trơn, con trỏ chuột nhấp nháy như trêu ngươi. Đồng hồ đã chỉ 1 giờ sáng.",
        pose: "assets/img/amy/normal/default.webp",
        hideSprite: true,
        effectAtEnd: "sapo_show_docx"
    },
    {
        name: "Nguyễn Văn A",
        text: "À... mình là sinh viên Truyền thông thời đại công nghệ số cơ mà? Việc gì phải khổ sở thế này. Thử xem 'người bạn chatgipiti' này lợi hại đến đâu.",
        pose: "assets/img/amy/normal/default.webp",
        hideSprite: true,
        customDur: 2.5,
        effectAtEnd: "sapo_start_interaction"
    },
    {
        name: "Nguyễn Văn A",
        text: "Kinh thật, chữ nhảy như bấm đàn! Xong! Đúng 3 nốt nhạc. Câu cú mượt mà, luận điểm bén ngót. Đọc qua chỉnh lại mấy từ địa phương là đem nộp thôi. Quá nhàn!",
        pose: "assets/img/amy/normal/default.webp",
        hideSprite: true,
        customDur: 2.5,
        effectAtEnd: "sapo_transition_NC"
    },
    {
        name: "Dẫn chuyện",
        text: "Một tuần sau, buổi sáng lên lớp. A vừa mở web trường ra xem điểm, mắt sáng rực lên, lập tức quay sang đập vai đứa bạn bên cạnh.",
        pose: "assets/img/bcdl_1/NC.webp", 
        hideSprite: true
    },
    {
        name: "Nguyễn Văn A",
        text: "Nhìn đi con trai! A+ nhé! Thầy còn phê hẳn một câu 'Bài viết có tư duy, cập nhật xu hướng rất nhạy bén' mới chịu cơ.",
        pose: "assets/img/bcdl_1/NguyenA.webp",
        audio: "assets/audio/SFX/dialogueSFX.m4a",
        customDur: 3.5,
        emotion: "!"
    },
    {
        name: "Nguyễn Văn B",
        text: "Ủa thề? Ông tự viết á? Bài này quét đạo văn không bị dính à? Thầy khóa mình check gắt lắm mà.",
        pose: "assets/img/bcdl_1/NguyenB.webp",
        audio: "assets/audio/SFX/NguyenB.m4a",
        customDur: 3.5,
        emotion: "?"
    },
    {
        name: "Nguyễn Văn A",
        text: "Dưới 10% luôn, xanh lét! Thời buổi này ai lại đi cày cuốc còng lưng nữa ông ơi. Quan trọng là cái đầu, biết cách 'xài' AI là làm chủ cuộc chơi ngay. Quá đơn giản!",
        pose: "assets/img/bcdl_1/NguyenA.webp",
        audio: "assets/audio/SFX/dialogueSFX.m4a",
        customDur: 4,
        effectAtEnd: "sapo_transition_VD"
    },
    {
        name: "Dẫn chuyện",
        text: "Nhưng \"vỏ bọc\" ấy lập tức vỡ vụn khi A bước vào buổi thi vấn đáp trực tiếp cuối kỳ.",
        pose: "assets/img/amy/normal/default.webp",
        hideSprite: true
    },
    {
        name: "Thầy Chủ tịch Hội đồng",
        text: "Dựa vào đâu em đưa ra lập luận ở trang số 5? Em phân tích rất sắc sảo về mô hình này, hội đồng muốn nghe rõ hơn về nguồn dữ liệu và tư duy của em.",
        pose: "assets/img/bcdl_1/thay.webp",
        audio: "assets/audio/SFX/thay.mp3",
        customDur: 4.5,
        emotion: "?"
    },
    {
        name: "Nguyễn Văn A",
        text: "(Bừng tỉnh, mắt mở to, nhìn trân trân vào cuốn báo cáo)\nDạ... thưa Thầy... ở trang số 5... cái lập luận đó...",
        pose: "assets/img/bcdl_1/NguyenA.webp",
        audio: "assets/audio/SFX/dialogueSFX.m4a",
        customDur: 3.5,
        emotion: "!"
    },
    {
        name: "Cô Ủy viên",
        text: "Em cứ bình tĩnh nói đi. Ở đây em viết là 'Hệ quả tất yếu từ việc dịch chuyển cấu trúc vĩ mô'. Ý này rất hay, em triển khai nó như thế nào?",
        pose: "assets/img/bcdl_1/cogiao.webp", 
        audio: "assets/audio/SFX/cogiao.m4a", 
        customDur: 4
    },
    {
        name: "Nguyễn Văn A",
        text: "Dạ... là do... em... em tổng hợp từ... từ các nguồn...",
        pose: "assets/img/bcdl_1/NguyenA.webp",
        audio: "assets/audio/SFX/dialogueSFX.m4a",
        customDur: 2.5
    },
    {
        name: "Thầy Chủ tịch Hội đồng",
        text: "Nguồn cụ thể là nguồn nào em? Sách, nghiên cứu khoa học, hay số liệu thống kê năm nào?",
        pose: "assets/img/bcdl_1/thay.webp",
        audio: "assets/audio/SFX/thay.mp3",
        customDur: 3,
        emotion: "?"
    },
    {
        name: "Nguyễn Văn A",
        text: "Dạ... em... em không nhớ rõ tên tác giả ạ... Dạ, hình như là... là nghiên cứu của... của...",
        pose: "assets/img/bcdl_1/NguyenA.webp",
        audio: "assets/audio/SFX/dialogueSFX.m4a",
        customDur: 3.5,
        emotion: "!"
    },
    {
        name: "Thầy Ủy viên phản biện",
        text: "Bài làm của em suốt cả kỳ rất hoàn hảo, điểm tuyệt đối, nộp bài luôn đúng hạn. Nhưng ngay cả khái niệm cốt lõi do chính em viết ra ở đây, em lại không giải thích được. A này, bài này thực chất là do em tự làm, hay là 'ai đó' làm hộ em?",
        pose: "assets/img/bcdl_1/thayuyvien.webp",
        audio: "assets/audio/SFX/thayuyvien.m4a",
        customDur: 5.5,
        effectAtEnd: "sapo_transition_drama_1"
    },
    {
        name: "Dẫn chuyện",
        text: "Đằng sau những điểm số an toàn và các bài tập nộp đúng hạn là một cuộc khủng hoảng nhận thức vô hình.",
        pose: "assets/img/amy/normal/default.webp",
        hideSprite: true,
        customDur: 8.0,
        effectAtEnd: "sapo_transition_drama_2"
    },
    {
        name: "Dẫn chuyện",
        text: "Kết quả khảo sát trên 238 sinh viên tại Hà Nội đã phơi bày một sự thật đáng suy ngẫm:",
        pose: "assets/img/amy/normal/default.webp",
        hideSprite: true,
        customDur: 8.0,
        effectAtEnd: "sapo_transition_drama_3"
    },
    {
        name: "Dẫn chuyện",
        text: "AI không còn dừng lại ở vai trò một công cụ hỗ trợ thông thường. Nó đang âm thầm biến thành một \"bộ não thứ hai\", dần thay thế và bào mòn năng lực tư duy độc lập của người trẻ.",
        pose: "assets/img/amy/normal/default.webp",
        hideSprite: true,
        customDur: 10.0,
        effectAtEnd: "sapo_end"
    }
];

let sapoStepIndex = 0;
let isSapoMode = false;

const sapoKeyboardAudio = new Audio("assets/audio/SFX/keyboard.mp3");
sapoKeyboardAudio.loop = true;

function startSapoSequence() {
    isSapoMode = true;
    
    // 1. Zoom to black
    const overlay = document.getElementById('sapo-overlay');
    overlay.classList.add('active');

    // Mute/Pause current audio if any
    if (window.audio) {
        window.audio.pause();
    }

    // 2. Wait for animation, then show dialogue
    setTimeout(() => {
        // Bring dialogue UI to front
        const diagBar = document.getElementById('vn-dialogue-bar');
        const charWrap = document.querySelector('.vn-character-wrap');

        diagBar.style.zIndex = "1010";
        diagBar.style.opacity = "1";
        diagBar.style.pointerEvents = "all";

        if (charWrap) {
            charWrap.style.zIndex = "1009";
            charWrap.classList.add("sapo-mode"); // Avatar nhỏ, bên phải
            charWrap.style.display = "flex";
            charWrap.style.opacity = "0"; // Ẩn cho bước narrator
            charWrap.style.pointerEvents = "none";
        }

        // Ẩn các nút điều khiển exclusive của Amy (LOG, 2D→Pixel, Giọng)
        const btnLog = document.getElementById("btn-log");
        const btnStyle = document.getElementById("btn-style");
        const btnLang = document.getElementById("btn-lang");
        if (btnLog) btnLog.style.display = "none";
        if (btnStyle) btnStyle.style.display = "none";
        if (btnLang) btnLang.style.display = "none";

        // Override VN Script
        window.vnScript = sapoScript;
        window.currentStep = 0;
        
        // Ensure the click event works for advancing
        window.isEffectRunning = false;
        
        // Hook into displayStep to handle hideSprite và emotion — PHẢI đặt TRƯỚC displayStep(0)
        const originalDisplayStep = window.displayStep;
        window.displayStep = function(stepIndex) {
            const step = window.vnScript[stepIndex];
            
            originalDisplayStep(stepIndex);
            
            // Handle hideSprite
            if (step && step.hideSprite) {
                if (charWrap) {
                    charWrap.style.display = "flex";
                    charWrap.style.opacity = "0";
                    charWrap.style.pointerEvents = "none";
                }
            } else {
                if (charWrap) {
                    charWrap.style.display = "flex";
                    charWrap.style.opacity = "1";
                    charWrap.style.pointerEvents = "none";
                }
            }

            // Handle emotion icon — position sát bên phải nhân vật
            const emotionEl = document.getElementById("vn-emotion");
            if (emotionEl) {
                if (step && step.emotion) {
                    emotionEl.textContent = step.emotion;
                    emotionEl.className = "vn-emotion active";
                    // Force reflow để restart animation
                    void emotionEl.offsetWidth;
                    // Reset sau 2 giây
                    setTimeout(() => {
                        emotionEl.className = "vn-emotion";
                    }, 2000);
                } else {
                    emotionEl.className = "vn-emotion";
                }
                // Trong Sapo mode, position lại emotion sát cạnh nhân vật
                if (charWrap && charWrap.classList.contains("sapo-mode")) {
                    emotionEl.style.position = "absolute";
                    emotionEl.style.right = "80px"; // Sát với đầu nhân vật
                    emotionEl.style.top = "60px"; // Tránh bị quá cao bay mất
                    emotionEl.style.left = "auto"; // Gỡ left định vị của VN mode
                    emotionEl.style.fontSize = "35px";
                    emotionEl.style.zIndex = "1011";
                } else {
                    emotionEl.style.position = "";
                    emotionEl.style.right = "";
                    emotionEl.style.top = "";
                    emotionEl.style.left = "";
                    emotionEl.style.fontSize = "";
                    emotionEl.style.zIndex = "";
                }
            }
        };

        // Show first step — giờ đã có override
        displayStep(0);

    }, 2000);
}

// Intercept custom effects in handleEndEffect
const originalHandleEndEffect = window.handleEndEffect;
window.handleEndEffect = function(step, stepIndex) {
    if (step.effectAtEnd === "sapo_show_docx") {
        window.isEffectRunning = true;
        
        // Hide dialogue temporarily
        document.getElementById('vn-dialogue-bar').style.opacity = "0";
        document.getElementById('vn-dialogue-bar').style.pointerEvents = "none";
        
        // Show DOCX UI
        const docxUI = document.getElementById('docx-ui');
        docxUI.classList.add('visible');
        
        // Type some text on docx
        const docxTextArea = document.getElementById('docx-text-area');
        const textToType = "TIỂU LUẬN: XU HƯỚNG TRUYỀN THÔNG SỐ\n\nHọ và tên: Nguyễn Văn A\nLớp: Truyền thông Đa phương tiện\n\nĐề bài: Hãy viết một bài luận 2.000 từ phân tích các xu hướng truyền thông số hiện nay.\n\nBài làm:\n\n";
        let i = 0;
        
        // Play keyboard sound
        sapoKeyboardAudio.currentTime = 0;
        sapoKeyboardAudio.play().catch(e => console.log("Keyboard SFX blocked:", e));
        
        const typeInterval = setInterval(() => {
            if (i < textToType.length) {
                // Insert before the cursor
                const cursor = docxTextArea.querySelector('.docx-cursor');
                if (cursor) {
                    const textNode = document.createTextNode(textToType.charAt(i));
                    docxTextArea.insertBefore(textNode, cursor);
                }
                i++;
            } else {
                clearInterval(typeInterval);
                sapoKeyboardAudio.pause();
                // Text typing done, slide in Chatgipiti and hand
                setTimeout(slideInChatgipiti, 1000);
            }
        }, 15);
        
    } else if (step.effectAtEnd === "sapo_start_interaction") {
        window.isEffectRunning = true;
        
        // Hide dialogue to let user interact
        document.getElementById('vn-dialogue-bar').style.opacity = "0";
        document.getElementById('vn-dialogue-bar').style.pointerEvents = "none";
        
        // Enable TT1
        document.getElementById('sapo-tt1').classList.add('active');
        
    } else if (step.effectAtEnd === "sapo_transition_NC") {
        window.isEffectRunning = true;
        
        // Hide all Chatgipiti and Word
        document.getElementById('docx-ui').style.opacity = "0";
        document.getElementById('chatgipiti-ui').style.opacity = "0";
        document.getElementById('vn-dialogue-bar').style.opacity = "0";
        document.getElementById('vn-dialogue-bar').style.pointerEvents = "none";
        
        // Change background to NC.webp on sapo-overlay
        setTimeout(() => {
            const overlay = document.getElementById('sapo-overlay');
            overlay.style.backgroundImage = "url('assets/img/bcdl_1/NC.webp')";
            overlay.style.backgroundSize = "contain";
            overlay.style.backgroundRepeat = "no-repeat";
            overlay.style.backgroundPosition = "center center";
            overlay.style.backgroundColor = "#000";
            
            document.getElementById('docx-ui').style.display = "none";
            document.getElementById('chatgipiti-ui').style.display = "none";
            
            setTimeout(() => {
                document.getElementById('vn-dialogue-bar').style.opacity = "1";
                document.getElementById('vn-dialogue-bar').style.pointerEvents = "all";
                window.isEffectRunning = false;
                window.vnScript[window.currentStep].effectApplied = true;
                window.advanceDialogue(true);
            }, 500);
        }, 1500);
        
    } else if (step.effectAtEnd === "sapo_transition_VD") {
        window.isEffectRunning = true;

        // Ẩn dialogue và character để tránh ghosting
        document.getElementById('vn-dialogue-bar').style.opacity = "0";
        document.getElementById('vn-dialogue-bar').style.pointerEvents = "none";

        const charWrap = document.querySelector('.vn-character-wrap');
        if (charWrap) {
            charWrap.style.opacity = "0";
        }

        // Giữ overlay màu đen liên tục - KHÔNG xóa backgroundImage tránh lộ màn hình chính
        const overlay = document.getElementById('sapo-overlay');
        overlay.style.backgroundColor = "#000";
        overlay.style.backgroundImage = "url('assets/img/bcdl_1/VD.webp')";
        overlay.style.backgroundSize = "contain";
        overlay.style.backgroundRepeat = "no-repeat";
        overlay.style.backgroundPosition = "center center";

        // Fade in với ảnh mới
        setTimeout(() => {
            overlay.style.opacity = "1";

            setTimeout(() => {
                document.getElementById('vn-dialogue-bar').style.opacity = "1";
                document.getElementById('vn-dialogue-bar').style.pointerEvents = "all";
                window.isEffectRunning = false;
                window.vnScript[window.currentStep].effectApplied = true;
                window.advanceDialogue(true);
            }, 1000);
        }, 50);
        
    } else if (step.effectAtEnd === "sapo_transition_drama_1") {
        window.isEffectRunning = true;

        // Force Auto Mode during outro
        window.isAutoMode = true;
        const btnAuto = document.getElementById("btn-auto");
        if (btnAuto) btnAuto.classList.add("active");

        // Drama BGM - drame.m4a
        const dramaBgm = new Audio("assets/audio/SFX/drame.m4a");
        dramaBgm.loop = true;
        dramaBgm.volume = 0.8;
        dramaBgm.play().catch(e => console.log("Drama BGM blocked", e));
        window.sapoDramaBgm = dramaBgm;

        // Ẩn dialogue và nhân vật để tránh ghosting
        document.getElementById('vn-dialogue-bar').style.opacity = "0";
        document.getElementById('vn-dialogue-bar').style.pointerEvents = "none";
        
        const charWrap = document.querySelector('.vn-character-wrap');
        if (charWrap) {
            charWrap.style.opacity = "0";
        }

        const overlay = document.getElementById('sapo-overlay');
        overlay.style.transition = "none";
        overlay.style.backgroundColor = "#000";
        overlay.style.backgroundImage = "none";
        overlay.className = 'active';

        setTimeout(() => {
            // Apply A+.webp với panning từ trái qua phải
            overlay.style.backgroundImage = "url('assets/img/bcdl_1/A+.webp')";
            overlay.className = 'active pan-left-right';
            
            setTimeout(() => {
                document.getElementById('vn-dialogue-bar').style.opacity = "1";
                document.getElementById('vn-dialogue-bar').style.pointerEvents = "all";
                window.isEffectRunning = false;
                window.vnScript[window.currentStep].effectApplied = true;
                window.advanceDialogue(true);
            }, 1000);
        }, 1000);

    } else if (step.effectAtEnd === "sapo_transition_drama_2") {
        window.isEffectRunning = true;

        document.getElementById('vn-dialogue-bar').style.opacity = "0";
        document.getElementById('vn-dialogue-bar').style.pointerEvents = "none";

        const overlay = document.getElementById('sapo-overlay');
        overlay.style.transition = "none";
        overlay.style.backgroundImage = "none";
        overlay.style.backgroundColor = "#000";
        overlay.className = 'active';

        setTimeout(() => {
            // Apply sili.webp với panning từ dưới lên trên
            overlay.style.backgroundImage = "url('assets/img/bcdl_1/sili.webp')";
            overlay.className = 'active pan-bottom-top';

            setTimeout(() => {
                document.getElementById('vn-dialogue-bar').style.opacity = "1";
                document.getElementById('vn-dialogue-bar').style.pointerEvents = "all";
                window.isEffectRunning = false;
                window.vnScript[window.currentStep].effectApplied = true;
                window.advanceDialogue(true);
            }, 1000);
        }, 1000);

    } else if (step.effectAtEnd === "sapo_transition_drama_3") {
        window.isEffectRunning = true;

        document.getElementById('vn-dialogue-bar').style.opacity = "0";
        document.getElementById('vn-dialogue-bar').style.pointerEvents = "none";

        const overlay = document.getElementById('sapo-overlay');
        overlay.style.transition = "none";
        overlay.style.backgroundImage = "none";
        overlay.style.backgroundColor = "#000";
        overlay.className = 'active';

        // Clear existing video elements to prevent duplicates
        const existingVideo = overlay.querySelector('video');
        if (existingVideo) {
            existingVideo.remove();
        }

        // Dynamically create and play C:\Users\Duck\Downloads\BCDL\assets\video\AI.mp4
        const video = document.createElement('video');
        video.src = "assets/video/AI.mp4";
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.setAttribute('playsinline', '');
        video.style.position = "absolute";
        video.style.top = "0";
        video.style.left = "0";
        video.style.width = "100%";
        video.style.height = "100%";
        video.style.objectFit = "cover";
        video.style.zIndex = "-1";
        video.style.opacity = "0";
        video.style.transition = "opacity 1s ease";
        overlay.appendChild(video);

        // Fade in the video smoothly
        setTimeout(() => {
            video.style.opacity = "1";
        }, 50);

        setTimeout(() => {
            document.getElementById('vn-dialogue-bar').style.opacity = "1";
            document.getElementById('vn-dialogue-bar').style.pointerEvents = "all";
            window.isEffectRunning = false;
            window.vnScript[window.currentStep].effectApplied = true;
            window.advanceDialogue(true);
        }, 1000);

    } else if (step.effectAtEnd === "sapo_end") {
        window.isEffectRunning = true;

        // Tắt nhạc nền Drama mượt mà
        if (window.sapoDramaBgm) {
            let vol = window.sapoDramaBgm.volume;
            const fadeInterval = setInterval(() => {
                vol -= 0.05;
                if (vol <= 0) {
                    clearInterval(fadeInterval);
                    window.sapoDramaBgm.pause();
                    window.sapoDramaBgm = null;
                } else {
                    window.sapoDramaBgm.volume = Math.max(0, vol);
                }
            }, 100);
        }

        // Ẩn toàn bộ UI Sapo và Visual Novel
        document.getElementById('vn-dialogue-bar').style.transition = "opacity 0.8s ease";
        document.getElementById('vn-dialogue-bar').style.opacity = "0";
        document.getElementById('vn-dialogue-bar').style.pointerEvents = "none";

        const overlay = document.getElementById('sapo-overlay');
        overlay.style.transition = "opacity 0.8s ease";

        const charWrap = document.querySelector('.vn-character-wrap');
        if (charWrap) {
            charWrap.style.transition = "opacity 0.5s ease";
            charWrap.style.opacity = "0";
        }

        // Fade out cover video smoothly
        const video = overlay.querySelector('video');
        if (video) {
            video.style.transition = "opacity 0.5s ease";
            video.style.opacity = "0";
            setTimeout(() => {
                video.remove();
            }, 500);
        }

        setTimeout(() => {
            overlay.style.backgroundImage = "none";
            overlay.style.backgroundColor = "#000000";
            overlay.className = 'active';
            overlay.style.opacity = "1";

            // Launch the gorgeous kinetic impact title sequence
            revealImpactTitle();
        }, 800);
    } else {
        // Fallback to original
        if (typeof originalHandleEndEffect === "function") {
            originalHandleEndEffect(step, stepIndex);
        }
    }
};

function slideInChatgipiti() {
    const chatUI = document.getElementById('chatgipiti-ui');
    const handPusher = document.getElementById('hand-pusher');
    
    chatUI.classList.add('visible');
    
    // Show hand first
    if (handPusher) {
        handPusher.style.opacity = "1";
    }
    
    // Trigger CSS slide-in animation (từ dưới lên trên, chậm rãi)
    setTimeout(() => {
        chatUI.classList.add('slide-in');
        
        // Sau khi animation hoàn tất (3.5s), ẩn tay và tiếp tục dialogue
        setTimeout(() => {
            // Ẩn tay đi
            chatUI.classList.add('hand-done');
            
            // Hiện dialogue bar trở lại
            setTimeout(() => {
                document.getElementById('vn-dialogue-bar').style.opacity = "1";
                document.getElementById('vn-dialogue-bar').style.pointerEvents = "all";
                
                // Advance to next step (Step 3)
                window.isEffectRunning = false;
                window.vnScript[window.currentStep].effectApplied = true;
                window.advanceDialogue(true);
            }, 500);
            
        }, 3500); // Đợi animation 3.5s hoàn tất
    }, 100);
}

// ── Interaction Logic (TT1 - TT3) ──

function addChatMessage(sender, text) {
    const chatBody = document.getElementById('chat-body');
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-message ${sender}`;
    chatBody.appendChild(msgDiv);
    
    // Auto scroll to bottom
    chatBody.scrollTop = chatBody.scrollHeight;
    
    // Typing effect for AI - chậm và mượt mà hơn
    if (sender === 'ai') {
        let i = 0;
        sapoKeyboardAudio.currentTime = 0;
        sapoKeyboardAudio.play().catch(e => console.log("Keyboard SFX blocked:", e));
        const interval = setInterval(() => {
            msgDiv.innerHTML += text.charAt(i);
            i++;
            chatBody.scrollTop = chatBody.scrollHeight;
            if (i >= text.length) {
                clearInterval(interval);
                sapoKeyboardAudio.pause();
            }
        }, 25); // Tăng từ 20ms lên 25ms để chậm hơn một chút
        return interval;
    } else {
        msgDiv.innerHTML = text;
    }
}

document.getElementById('sapo-tt1').addEventListener('click', function() {
    this.classList.remove('active');
    this.classList.add('done');
    addChatMessage('user', this.innerText);
    
    setTimeout(() => {
        addChatMessage('ai', "Dàn ý bài luận:\n1. Mở bài: Giới thiệu truyền thông số.\n2. Thân bài: Các xu hướng nổi bật (Mạng xã hội, AI, Video ngắn).\n3. Kết bài: Tương lai của ngành truyền thông.");
        
        // Enable TT2
        setTimeout(() => {
            document.getElementById('sapo-tt2').classList.add('active');
        }, 3500); // Tăng thời gian chờ
    }, 500);
});

document.getElementById('sapo-tt2').addEventListener('click', function() {
    this.classList.remove('active');
    this.classList.add('done');
    addChatMessage('user', this.innerText);
    
    setTimeout(() => {
        addChatMessage('ai', "Trong kỷ nguyên số hóa, truyền thông không chỉ dừng lại ở các phương thức truyền thống. Sự trỗi dậy của AI và các nền tảng video ngắn như TikTok đang định hình lại toàn bộ cách thức chúng ta tiếp nhận thông tin...");
        
        // Enable TT3
        setTimeout(() => {
            document.getElementById('sapo-tt3').classList.add('active');
        }, 4000); // Tăng thời gian chờ
    }, 500);
});

document.getElementById('sapo-tt3').addEventListener('click', function() {
    this.classList.remove('active');
    this.classList.add('done');
    addChatMessage('user', this.innerText);
    
    setTimeout(() => {
        addChatMessage('ai', "Đã cập nhật: Theo báo cáo Digital 2023, Việt Nam có 77.93 triệu người dùng internet, chiếm 79.1% dân số. Người dùng dành trung bình 2 giờ 32 phút mỗi ngày cho mạng xã hội...");
        
        // Update word document text
        setTimeout(() => {
            const docxTextArea = document.getElementById('docx-text-area');
            const longText = `TIỂU LUẬN: XU HƯỚNG TRUYỀN THÔNG SỐ<br><br>Họ và tên: Nguyễn Văn A<br>Lớp: Truyền thông Đa phương tiện<br><br>Đề bài: Hãy viết một bài luận 2.000 từ phân tích các xu hướng truyền thông số hiện nay.<br><br>Bài làm:<br>Trong kỷ nguyên số hóa, truyền thông không chỉ dừng lại ở các phương thức truyền thống. Sự trỗi dậy của AI và các nền tảng video ngắn như TikTok đang định hình lại toàn bộ cách thức chúng ta tiếp nhận thông tin. Dàn ý chi tiết bao gồm:<br>1. Mở bài: Giới thiệu truyền thông số.<br>2. Thân bài: Các xu hướng nổi bật (Mạng xã hội, AI, Video ngắn).<br>3. Kết bài: Tương lai của ngành truyền thông.<br><br>Theo báo cáo Digital 2023, Việt Nam có 77.93 triệu người dùng internet, chiếm 79.1% dân số. Người dùng dành trung bình 2 giờ 32 phút mỗi ngày cho mạng xã hội, chứng minh sức hút mãnh liệt của truyền thông số đối với hành vi người tiêu dùng tại thị trường Việt Nam.<br><br>Sự trỗi dậy của Trí tuệ Nhân tạo (AI) trong sáng tạo nội dung đã mang lại một bước ngoặt lớn. Các công cụ tạo ngôn ngữ tự nhiên và hình ảnh tự động đã rút ngắn thời gian sản xuất từ vài ngày xuống còn vài phút. Tuy nhiên, điều này cũng đặt ra thách thức về bản quyền, tính nguyên bản và độ tin cậy của thông tin.<br><br>Video ngắn (Short-form video) đang là vị vua mới của Content Marketing. Sự thành công của TikTok đã buộc các ông lớn như YouTube (Shorts) và Meta (Reels) phải thay đổi thuật toán để ưu tiên loại hình nội dung này. Sự tập trung ngắn hạn (short attention span) của người dùng gen Z yêu cầu các nhà sáng tạo phải truyền tải thông điệp chỉ trong vòng 3 đến 5 giây đầu tiên.<br><br>Mặt khác, cá nhân hóa (Personalization) dựa trên Big Data giúp các nhãn hàng tiếp cận đúng tệp khách hàng mục tiêu với độ chính xác cao chưa từng có. Việc phân tích hành vi người dùng qua các điểm chạm kỹ thuật số (digital touchpoints) mang lại tỷ lệ chuyển đổi (conversion rate) cao hơn hẳn so với quảng cáo đại trà.<br><br>Tóm lại, truyền thông số là một bức tranh đa sắc, thay đổi từng ngày. Việc nắm bắt xu hướng không chỉ là lợi thế cạnh tranh mà còn là yếu tố sống còn của bất kỳ cá nhân hay tổ chức nào trong thời đại 4.0. Sự kết hợp giữa công nghệ và sự thấu hiểu tâm lý con người sẽ là chìa khóa mở ra những chiến dịch truyền thông thành công vang dội.`;
            docxTextArea.innerHTML = longText;
            
            // Show plagiarism check popup
            const plagPopup = document.getElementById('plagiarism-popup');
            const plagFill = document.getElementById('plag-fill');
            const plagResult = document.getElementById('plag-result');
            
            plagPopup.classList.add('visible');
            setTimeout(() => {
                plagFill.style.width = "100%";
            }, 100);
            
            setTimeout(() => {
                plagResult.style.display = "block";
                
                // Finish TT, go to Step 4 after reading the result
                setTimeout(() => {
                    plagPopup.classList.remove('visible');
                    document.getElementById('vn-dialogue-bar').style.opacity = "1";
                    document.getElementById('vn-dialogue-bar').style.pointerEvents = "all";
                    window.isEffectRunning = false;
                    window.vnScript[window.currentStep].effectApplied = true;
                    window.advanceDialogue(true);
                }, 3000);
                
            }, 2600); // Wait for progress bar animation
            
        }, 3000); // Tăng thời gian chờ cho AI type xong
    }, 500);
});

// ── Premium Sapo Typewriter Transition Screen ──
function runSapoTypewriter() {
    const overlay = document.getElementById('sapo-typewriter-overlay');
    const textEl = document.getElementById('sapo-typewriter-text');
    const arrow = document.getElementById('sapo-typewriter-arrow');
    const cursor = overlay ? overlay.querySelector('.typewriter-cursor') : null;
    
    if (!overlay || !textEl || !arrow) return;
    
    // Reset contents and elements
    textEl.textContent = "";
    arrow.classList.remove('visible');
    if (cursor) cursor.style.display = 'inline-block';
    
    // Activate white screen overlay (usually already active from sapo_end)
    overlay.classList.add('active');
    
    const textToType = "Đằng sau những điểm số an toàn và các bài tập nộp đúng hạn là một cuộc khủng hoảng nhận thức vô hình. Kết quả khảo sát trên 238 sinh viên tại Hà Nội đã phơi bày một sự thật đáng suy ngẫm: AI không còn dừng lại ở vai trò một công cụ hỗ trợ thông thường. Nó đang âm thầm biến thành một \"bộ não thứ hai\", dần thay thế và bào mòn năng lực tư duy độc lập của người trẻ.";
    
    let charIndex = 0;
    let typingInterval = null;
    let isFinished = false;
    
    // Play keyboard sound loop (using existing sapoKeyboardAudio element)
    sapoKeyboardAudio.currentTime = 0;
    sapoKeyboardAudio.loop = true;
    sapoKeyboardAudio.play().catch(e => console.log("Keyboard SFX blocked or delayed:", e));
    
    function typeChar() {
        if (charIndex < textToType.length) {
            textEl.textContent += textToType.charAt(charIndex);
            charIndex++;
        } else {
            finishTyping();
        }
    }
    
    function finishTyping() {
        if (isFinished) return;
        isFinished = true;
        
        clearInterval(typingInterval);
        textEl.textContent = textToType;
        
        // Stop typing sound
        sapoKeyboardAudio.pause();
        
        // Hide blinking insertion cursor
        if (cursor) {
            cursor.style.display = 'none';
        }
        
        // Smoothly fade in the pulsating down arrow
        setTimeout(() => {
            arrow.classList.add('visible');
        }, 500);
    }
    
    // Typing speed: 30ms per character (beautifully readable)
    typingInterval = setInterval(typeChar, 30);
    
    // Click handler for the whole overlay screen:
    // - If typing: skip animation and finish typing immediately.
    // - If finished: fade out screen and reload to go back to desktop.
    const handleScreenClick = (e) => {
        if (!isFinished) {
            finishTyping();
        } else {
            // Clean up listener to prevent leaks
            overlay.removeEventListener('click', handleScreenClick);
            
            // Fade out typewriter screen (using snap-out transition)
            overlay.classList.remove('active');
            
            // End Sapo Mode state
            isSapoMode = false;
            
            // Wait for screen to fade out completely before reloading
            setTimeout(() => {
                window.location.reload();
            }, 600);
        }
    };
    overlay.addEventListener('click', handleScreenClick);
}

/* ═══ Custom Fullscreen Cinematic Outro Sequences ═══ */
function runCenteredOutro(text) {
    window.isEffectRunning = true;
    
    // 1. Hide the visual novel's standard dialogue bar completely
    const diagBar = document.getElementById('vn-dialogue-bar');
    if (diagBar) {
        diagBar.style.transition = "opacity 0.8s ease";
        diagBar.style.opacity = "0";
        diagBar.style.pointerEvents = "none";
    }
    
    // 2. Hide characters
    const charWrap = document.querySelector('.vn-character-wrap');
    if (charWrap) {
        charWrap.style.transition = "opacity 0.8s ease";
        charWrap.style.opacity = "0";
    }
    
    // 3. Keep the overlay background solid pitch black
    const overlay = document.getElementById('sapo-overlay');
    if (overlay) {
        overlay.style.transition = "background-image 0.8s ease, background-color 0.8s ease";
        overlay.style.backgroundColor = "#000000";
        overlay.style.backgroundImage = "none";
        overlay.className = 'active';
        overlay.style.opacity = "1";
    }
    
    // 4. Create the gorgeous fullscreen outro overlay
    let outroContainer = document.getElementById('sapo-outro-container');
    if (!outroContainer) {
        outroContainer = document.createElement('div');
        outroContainer.id = 'sapo-outro-container';
        document.body.appendChild(outroContainer);
    }
    
    outroContainer.className = 'active';
    outroContainer.innerHTML = '';
    
    const textNode = document.createElement('div');
    textNode.className = 'sapo-outro-text';
    outroContainer.appendChild(textNode);
    
    let idx = 0;
    const speed = 55; // 55ms per character creates an excellent dramatic cadence
    
    // 5. Play keyboard typing sound effect (looping)
    sapoKeyboardAudio.currentTime = 0;
    sapoKeyboardAudio.loop = true;
    sapoKeyboardAudio.play().catch(e => console.log("Keyboard SFX blocked:", e));
    
    const typeTimer = setInterval(() => {
        if (idx < text.length) {
            textNode.textContent = text.substring(0, idx + 1);
            idx++;
        } else {
            clearInterval(typeTimer);
            sapoKeyboardAudio.pause();
            
            // 6. Dramatic pause after typing is finished, then fade out text
            setTimeout(() => {
                textNode.style.opacity = "0";
                
                setTimeout(() => {
                    outroContainer.innerHTML = '';
                    revealImpactTitle();
                }, 1000);
            }, 3000);
        }
    }, speed);
}

// Exquisite Web Audio cinematic sub-bass boom and metallic slam synthesizer
function playSynthesizedImpact(isEpic) {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        const now = ctx.currentTime;
        
        // --- 1. THE METALLIC SLAM ---
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const osc3 = ctx.createOscillator();
        
        osc1.type = 'triangle';
        osc1.frequency.setValueAtTime(200, now);
        osc1.frequency.exponentialRampToValueAtTime(50, now + 0.2);
        
        osc2.type = 'sawtooth';
        osc2.frequency.setValueAtTime(350, now);
        osc2.frequency.exponentialRampToValueAtTime(70, now + 0.15);
        
        osc3.type = 'square';
        osc3.frequency.setValueAtTime(900, now);
        osc3.frequency.exponentialRampToValueAtTime(100, now + 0.1);
        
        const metalGain = ctx.createGain();
        metalGain.gain.setValueAtTime(0.5, now);
        metalGain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        
        osc1.connect(metalGain);
        osc2.connect(metalGain);
        osc3.connect(metalGain);
        
        // --- MASTER STAGE ---
        const masterFilter = ctx.createBiquadFilter();
        masterFilter.type = 'lowpass';
        masterFilter.frequency.setValueAtTime(isEpic ? 650 : 800, now);
        
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(1.0, now);
        
        metalGain.connect(masterFilter);
        
        let subOsc = null;
        let noiseNode = null;
        
        if (isEpic) {
            // --- 2. THE CINEMATIC SUB-BASS BOOM ---
            subOsc = ctx.createOscillator();
            subOsc.type = 'sine';
            subOsc.frequency.setValueAtTime(90, now);
            subOsc.frequency.exponentialRampToValueAtTime(28, now + 1.2);
            
            const subGain = ctx.createGain();
            subGain.gain.setValueAtTime(0.85, now);
            subGain.gain.exponentialRampToValueAtTime(0.001, now + 3.0);
            
            subOsc.connect(subGain);
            subGain.connect(masterFilter);
            
            // --- 3. THE REVERBERATING ROOM RUMBLE ---
            const bufferSize = ctx.sampleRate * 3.5;
            const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const output = noiseBuffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                output[i] = Math.random() * 2 - 1;
            }
            
            noiseNode = ctx.createBufferSource();
            noiseNode.buffer = noiseBuffer;
            
            const noiseFilter = ctx.createBiquadFilter();
            noiseFilter.type = 'bandpass';
            noiseFilter.frequency.setValueAtTime(80, now);
            noiseFilter.frequency.exponentialRampToValueAtTime(40, now + 2.0);
            noiseFilter.Q.setValueAtTime(3.0, now);
            
            const noiseGain = ctx.createGain();
            noiseGain.gain.setValueAtTime(0.3, now);
            noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 2.5);
            
            noiseNode.connect(noiseFilter);
            noiseFilter.connect(noiseGain);
            noiseGain.connect(masterFilter);
            
            subOsc.start(now);
            noiseNode.start(now);
            
            subOsc.stop(now + 3.5);
            noiseNode.stop(now + 3.5);
        }
        
        masterFilter.connect(masterGain);
        masterGain.connect(ctx.destination);
        
        // Trigger metallic nodes
        osc1.start(now);
        osc2.start(now);
        osc3.start(now);
        
        // Graceful stop metallic nodes
        osc1.stop(now + 0.6);
        osc2.stop(now + 0.6);
        osc3.stop(now + 0.6);
    } catch (e) {
        console.warn("Synthesized cinematic boom failed (user interaction limit or unsupported browser):", e);
    }
}

function revealImpactTitle() {
    let outroContainer = document.getElementById('sapo-outro-container');
    if (!outroContainer) {
        outroContainer = document.createElement('div');
        outroContainer.id = 'sapo-outro-container';
        document.body.appendChild(outroContainer);
    }
    outroContainer.className = 'active';
    outroContainer.innerHTML = '';
    
    const titleNode = document.createElement('div');
    titleNode.className = 'sapo-outro-title';
    outroContainer.appendChild(titleNode);
    
    const titleText = "Sinh viên dùng AI: Kiểm soát công nghệ hay bị công nghệ dẫn dắt?";
    
    // Split text into words to animate whole words instead of individual letters
    const words = titleText.split(' ');
    
    // Pre-create an audio pool to avoid latency and GC spikes during rapid playback
    const impactPool = [];
    const poolSize = 6;
    for (let k = 0; k < poolSize; k++) {
        const aud = new Audio("assets/audio/SFX/impact.mp3");
        aud.preload = "auto";
        impactPool.push(aud);
    }
    let poolIndex = 0;
    
    words.forEach((wordText, i) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'sapo-outro-word';
        wordSpan.textContent = wordText;
        
        // Random cinematic 3D offsets for each word
        const rx = (Math.random() * 800 - 400) + 'px'; // -400px to +400px
        const ry = (Math.random() * 600 - 300) + 'px'; // -300px to +300px
        const rz = (Math.random() * 400 + 300) + 'px'; // +300px to +700px depth
        const rr = (Math.random() * 80 - 40) + 'deg';  // -40deg to +40deg tilt
        
        wordSpan.style.setProperty('--x', rx);
        wordSpan.style.setProperty('--y', ry);
        wordSpan.style.setProperty('--z', rz);
        wordSpan.style.setProperty('--r', rr);
        
        // Staggered delay (450ms per word creates an extremely dramatic, theatrical pacing)
        const delay = i * 450;
        wordSpan.style.animationDelay = delay + 'ms';
        
        titleNode.appendChild(wordSpan);
        
        // Schedule dynamic sound effects for each word hit!
        setTimeout(() => {
            // Play pooled physical audio impact.mp3
            const impactAudio = impactPool[poolIndex];
            poolIndex = (poolIndex + 1) % poolSize;
            impactAudio.currentTime = 0;
            impactAudio.volume = 0.85;
            impactAudio.play().catch(e => console.log("Impact audio file play blocked:", e));
            
            // Play sophisticated Web Audio Synthesized Impact
            // Epic sub-bass rumble on first and last word, crisp metallic slam on middle words
            const isEpic = (i === 0 || i === words.length - 1);
            playSynthesizedImpact(isEpic);
        }, delay);
    });
    
    // Reveal container
    outroContainer.style.opacity = "1";
    
    // Total wait time: 14 words * 450ms = 6300ms + 3200ms reading time = 9500ms
    setTimeout(() => {
        outroContainer.style.transition = "opacity 1.8s ease";
        outroContainer.style.opacity = "0";
        
        setTimeout(() => {
            outroContainer.className = '';
            outroContainer.innerHTML = '';
            
            // Clean up Sapo state and reload to main menu/restart state
            window.isEffectRunning = false;
            
            if (window.sapoDramaBgm) {
                window.sapoDramaBgm.pause();
                window.sapoDramaBgm = null;
            }
            
            const charWrap = document.querySelector('.vn-character-wrap');
            if (charWrap) charWrap.classList.remove("sapo-mode");
            isSapoMode = false;
            
            // Transition to Chapter 4
            window.location.href = "chapter-4.html";
        }, 1800);
    }, 9500);
}


