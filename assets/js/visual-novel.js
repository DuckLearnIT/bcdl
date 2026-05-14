const scriptData = [
    {
        name: "Người Hướng Dẫn",
        text: "Chào mừng bạn đã đến với hệ thống báo chí dữ liệu. Có vẻ như bạn đã vượt qua được bức tường bảo mật.",
        pose: "assets/img/default_pose.png"
    },
    {
        name: "Người Hướng Dẫn",
        text: "Nhưng đừng vội mừng, mọi thứ mới chỉ bắt đầu thôi...",
        pose: "assets/img/pointout_pose.png"
    },
    {
        name: "Người Hướng Dẫn",
        text: "Ngành ngân hàng năm vừa qua đã ghi nhận những con số khổng lồ.",
        pose: "assets/img/thinking_pose.png"
    },
    {
        name: "Người Hướng Dẫn",
        text: "Hơn 11,5 tỷ USD lợi nhuận. Một kỷ lục chưa từng có!",
        pose: "assets/img/surpirse_shock_pose.png"
    },
    {
        name: "Người Hướng Dẫn",
        text: "Nhưng liệu đằng sau những con số hào nhoáng đó có ẩn chứa điều gì?",
        pose: "assets/img/serious_angry_pose.png"
    },
    {
        name: "Người Hướng Dẫn",
        text: "Hãy tự mình tìm hiểu và phân tích nhé. Tôi sẽ theo dõi bạn.",
        pose: "assets/img/smile_pose.png"
    }
];

let currentStep = 0;
let isTyping = false;
let typeInterval;
let textElement = document.getElementById("vn-text");
let nameBox = document.getElementById("vn-namebox");
let spriteElement = document.getElementById("vn-sprite");
let indicator = document.getElementById("vn-next-indicator");

function typeText(text, callback) {
    isTyping = true;
    textElement.innerHTML = "";
    indicator.classList.remove("visible");
    let index = 0;
    
    typeInterval = setInterval(() => {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
        } else {
            clearInterval(typeInterval);
            isTyping = false;
            indicator.classList.add("visible");
            if (callback) callback();
        }
    }, 35); // Typing speed
}

function displayStep(stepIndex) {
    if (stepIndex >= scriptData.length) {
        // End of VN script
        textElement.innerHTML = "<em>(Chương này đã kết thúc. Xin vui lòng tiếp tục hành trình...)</em>";
        nameBox.style.display = "none";
        indicator.style.display = "none";
        
        // Optional: Redirect to next page after a delay
        setTimeout(() => {
            // window.location.href = "chapter-3.html";
        }, 2000);
        return;
    }
    
    let step = scriptData[stepIndex];
    nameBox.innerText = step.name;
    
    // Change sprite with a small fade effect if it changes
    if (spriteElement.getAttribute("src") !== step.pose) {
        spriteElement.style.opacity = 0;
        setTimeout(() => {
            spriteElement.src = step.pose;
            spriteElement.onload = () => {
                spriteElement.style.opacity = 1;
            };
        }, 150);
    }
    
    typeText(step.text);
}

function advanceDialogue() {
    if (isTyping) {
        // Complete text instantly if clicking while typing
        clearInterval(typeInterval);
        textElement.innerHTML = scriptData[currentStep].text;
        isTyping = false;
        indicator.classList.add("visible");
    } else {
        // Move to next step
        currentStep++;
        displayStep(currentStep);
    }
}

// Preload images to prevent flicker
window.onload = () => {
    scriptData.forEach(step => {
        let img = new Image();
        img.src = step.pose;
    });
    // Start first dialogue
    setTimeout(() => {
        displayStep(0);
    }, 500); // small delay on load
};
