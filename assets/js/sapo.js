/* sapo.js - Interactive Sapo Sequence Logic */

const sapoScript = [
    {
        name: "Nguyễn Văn A",
        text: "Bài luận 2.000 từ về 'Xu hướng truyền thông số' á? Cô đùa mình chắc, tuần này còn đống deadline chạy sự kiện nữa, đào đâu ra thời gian mà nghiên cứu với viết lách tận 2.000 từ bây giờ?",
        pose: "assets/img/amy/normal/default.png", // Fallback pose, we will hide sprite
        hideSprite: true,
        audio: "assets/audio/SFX/dialogueSFX.m4a",
        customDur: 2.5 // Tốc độ gõ phím nhanh (2.5 giây cho toàn bộ dòng)
    },
    {
        name: "Dẫn chuyện",
        text: "Hai ngày sau, A ngồi trước màn hình laptop. Trang Word vẫn trắng trơn, con trỏ chuột nhấp nháy như trêu ngươi. Đồng hồ đã chỉ 1 giờ sáng.",
        pose: "assets/img/amy/normal/default.png",
        hideSprite: true,
        effectAtEnd: "sapo_show_docx"
    },
    {
        name: "Nguyễn Văn A",
        text: "À... mình là sinh viên Truyền thông thời đại công nghệ số cơ mà? Việc gì phải khổ sở thế này. Thử xem 'người bạn chatgipiti' này lợi hại đến đâu.",
        pose: "assets/img/amy/normal/default.png",
        hideSprite: true,
        customDur: 2.5,
        effectAtEnd: "sapo_start_interaction"
    },
    {
        name: "Nguyễn Văn A",
        text: "Kinh thật, chữ nhảy như bấm đàn! Xong! Đúng 3 nốt nhạc. Câu cú mượt mà, luận điểm bén ngót. Đọc qua chỉnh lại mấy từ địa phương là đem nộp thôi. Quá nhàn!",
        pose: "assets/img/amy/normal/default.png",
        hideSprite: true,
        customDur: 2.5,
        effectAtEnd: "sapo_transition_NC"
    },
    {
        name: "Dẫn chuyện",
        text: "Một tuần sau, buổi sáng lên lớp. A vừa mở web trường ra xem điểm, mắt sáng rực lên, lập tức quay sang đập vai đứa bạn bên cạnh.",
        pose: "assets/img/bcdl_1/NC.png", 
        hideSprite: true
    },
    {
        name: "Nguyễn Văn A",
        text: "Nhìn đi con trai! A+ nhé! Thầy còn phê hẳn một câu 'Bài viết có tư duy, cập nhật xu hướng rất nhạy bén' mới chịu cơ.",
        pose: "assets/img/bcdl_1/NguyenA.png",
        audio: "assets/audio/SFX/dialogueSFX.m4a",
        customDur: 3.5,
        emotion: "!"
    },
    {
        name: "Nguyễn Văn B",
        text: "Ủa thề? Ông tự viết á? Bài này quét đạo văn không bị dính à? Thầy khóa mình check gắt lắm mà.",
        pose: "assets/img/bcdl_1/NguyenB.png",
        audio: "assets/audio/SFX/NguyenB.m4a",
        customDur: 3.5,
        emotion: "?"
    },
    {
        name: "Nguyễn Văn A",
        text: "Dưới 10% luôn, xanh lét! Thời buổi này ai lại đi cày cuốc còng lưng nữa ông ơi. Quan trọng là cái đầu, biết cách 'xài' AI là làm chủ cuộc chơi ngay. Quá đơn giản!",
        pose: "assets/img/bcdl_1/NguyenA.png",
        audio: "assets/audio/SFX/dialogueSFX.m4a",
        customDur: 4,
        effectAtEnd: "sapo_transition_VD"
    },
    {
        name: "Dẫn chuyện",
        text: "Nhưng \"vỏ bọc\" ấy lập tức vỡ vụn khi A bước vào buổi thi vấn đáp trực tiếp cuối kỳ.",
        pose: "assets/img/amy/normal/default.png",
        hideSprite: true
    },
    {
        name: "Thầy Chủ tịch Hội đồng",
        text: "Dựa vào đâu em đưa ra lập luận ở trang số 5? Em phân tích rất sắc sảo về mô hình này, hội đồng muốn nghe rõ hơn về nguồn dữ liệu và tư duy của em.",
        pose: "assets/img/bcdl_1/thay.png",
        audio: "assets/audio/SFX/thay.mp3",
        customDur: 4.5,
        emotion: "?"
    },
    {
        name: "Nguyễn Văn A",
        text: "(Bừng tỉnh, mắt mở to, nhìn trân trân vào cuốn báo cáo)\nDạ... thưa Thầy... ở trang số 5... cái lập luận đó...",
        pose: "assets/img/bcdl_1/NguyenA.png",
        audio: "assets/audio/SFX/dialogueSFX.m4a",
        customDur: 3.5,
        emotion: "!"
    },
    {
        name: "Cô Ủy viên",
        text: "Em cứ bình tĩnh nói đi. Ở đây em viết là 'Hệ quả tất yếu từ việc dịch chuyển cấu trúc vĩ mô'. Ý này rất hay, em triển khai nó như thế nào?",
        pose: "assets/img/bcdl_1/cogiao.png", 
        audio: "assets/audio/SFX/cogiao.m4a", 
        customDur: 4
    },
    {
        name: "Nguyễn Văn A",
        text: "Dạ... là do... em... em tổng hợp từ... từ các nguồn...",
        pose: "assets/img/bcdl_1/NguyenA.png",
        audio: "assets/audio/SFX/dialogueSFX.m4a",
        customDur: 2.5
    },
    {
        name: "Thầy Chủ tịch Hội đồng",
        text: "Nguồn cụ thể là nguồn nào em? Sách, nghiên cứu khoa học, hay số liệu thống kê năm nào?",
        pose: "assets/img/bcdl_1/thay.png",
        audio: "assets/audio/SFX/thay.mp3",
        customDur: 3,
        emotion: "?"
    },
    {
        name: "Nguyễn Văn A",
        text: "Dạ... em... em không nhớ rõ tên tác giả ạ... Dạ, hình như là... là nghiên cứu của... của...",
        pose: "assets/img/bcdl_1/NguyenA.png",
        audio: "assets/audio/SFX/dialogueSFX.m4a",
        customDur: 3.5,
        emotion: "!"
    },
    {
        name: "Thầy Ủy viên phản biện",
        text: "Bài làm của em suốt cả kỳ rất hoàn hảo, điểm tuyệt đối, nộp bài luôn đúng hạn. Nhưng ngay cả khái niệm cốt lõi do chính em viết ra ở đây, em lại không giải thích được. A này, bài này thực chất là do em tự làm, hay là 'ai đó' làm hộ em?",
        pose: "assets/img/bcdl_1/thayuyvien.png",
        audio: "assets/audio/SFX/thayuyvien.m4a",
        customDur: 5.5,
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
            originalDisplayStep(stepIndex);
            const step = window.vnScript[stepIndex];
            
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
        
        // Change background to NC.png on sapo-overlay
        setTimeout(() => {
            const overlay = document.getElementById('sapo-overlay');
            overlay.style.backgroundImage = "url('assets/img/bcdl_1/NC.png')";
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
        overlay.style.backgroundImage = "url('assets/img/bcdl_1/VD.png')";
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
        
    } else if (step.effectAtEnd === "sapo_end") {
        // Show typewriter white screen IMMEDIATELY (no transition delay) to prevent showing windows desktop
        const overlay = document.getElementById('sapo-typewriter-overlay');
        if (overlay) {
            overlay.style.transition = 'none'; // Instant reveal
            overlay.classList.add('active');
            void overlay.offsetHeight; // Force reflow
            overlay.style.transition = 'opacity 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)'; // Restore transition for fade-out later
        }

        // Hide Sapo visual novel dialogue bar & background overlay behind the white curtain
        document.getElementById('vn-dialogue-bar').style.opacity = "0";
        document.getElementById('vn-dialogue-bar').style.pointerEvents = "none";
        document.getElementById('sapo-overlay').style.opacity = "0";
        document.getElementById('sapo-overlay').style.backgroundImage = "none";
        
        const charWrap = document.querySelector('.vn-character-wrap');
        if (charWrap) {
            charWrap.style.opacity = "0";
            charWrap.style.transition = "opacity 0.5s ease";
        }
        
        setTimeout(() => {
            if (charWrap) charWrap.classList.remove("sapo-mode");
            runSapoTypewriter();
        }, 400); // Start typing faster now that transition is instant
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

