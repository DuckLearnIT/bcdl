const NORMAL = "assets/img/amy/normal/";
const FIT_OPTIONS = {
    minFontPx: 10,
    maxFontPx: 24,
    minLineHeight: 1.18,
    maxLineHeight: 1.45
};

const scriptData = [
    {
        name: "Người Hướng Dẫn",
        text: "Chào mừng bạn đã đến với hệ thống báo chí dữ liệu. Có vẻ như bạn đã vượt qua được bức tường bảo mật.",
        pose: NORMAL + "smile.avif"
    },
    {
        name: "Người Hướng Dẫn",
        text: "Nhưng đừng vội mừng, mọi thứ mới chỉ bắt đầu thôi...",
        pose: NORMAL + "pointout.avif"
    },
    {
        name: "Người Hướng Dẫn",
        text: "Ngành ngân hàng năm vừa qua đã ghi nhận những con số khổng lồ.",
        pose: NORMAL + "thinking.avif"
    },
    {
        name: "Người Hướng Dẫn",
        text: "Hơn 11,5 tỷ USD lợi nhuận. Một kỷ lục chưa từng có!",
        pose: NORMAL + "surprise.avif"
    },
    {
        name: "Người Hướng Dẫn",
        text: "Nhưng liệu đằng sau những con số hào nhoáng đó có ẩn chứa điều gì?",
        pose: NORMAL + "serious.avif"
    },
    {
        name: "Người Hướng Dẫn",
        text: "Hãy tự mình tìm hiểu và phân tích nhé. Tôi sẽ theo dõi bạn.",
        pose: NORMAL + "default.avif"
    }
];

let currentStep = 0;
let isTyping = false;
let typeInterval = null;
let currentStepText = "";

const textElement = document.getElementById("vn-text");
const nameBox = document.getElementById("vn-name");
const spriteElement = document.getElementById("vn-sprite");
const indicator = document.getElementById("vn-indicator");

function applyTextFit(fullText) {
    if (window.fitDialogueText && textElement) {
        window.fitDialogueText(textElement, fullText, FIT_OPTIONS);
    }
}

function typeText(text, callback) {
    isTyping = true;
    currentStepText = text;
    applyTextFit(text);
    textElement.textContent = "";
    indicator.classList.remove("visible");
    let index = 0;

    if (typeInterval) {
        clearInterval(typeInterval);
    }

    typeInterval = setInterval(() => {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(typeInterval);
            typeInterval = null;
            isTyping = false;
            indicator.classList.add("visible");
            if (callback) {
                callback();
            }
        }
    }, 35);
}

function displayStep(stepIndex) {
    if (stepIndex >= scriptData.length) {
        const finalText = "(Chương này đã kết thúc. Xin vui lòng tiếp tục hành trình...)";
        textElement.textContent = finalText;
        applyTextFit(finalText);
        nameBox.style.display = "none";
        indicator.style.display = "none";
        return;
    }

    const step = scriptData[stepIndex];
    currentStepText = step.text;
    nameBox.textContent = step.name;

    if (spriteElement.getAttribute("src") !== step.pose) {
        spriteElement.style.opacity = "0";
        setTimeout(() => {
            spriteElement.src = step.pose;
            spriteElement.onload = () => {
                spriteElement.style.opacity = "1";
            };
        }, 150);
    }

    typeText(step.text);
}

function advanceDialogue() {
    if (isTyping) {
        if (typeInterval) {
            clearInterval(typeInterval);
            typeInterval = null;
        }
        textElement.textContent = scriptData[currentStep].text;
        applyTextFit(scriptData[currentStep].text);
        isTyping = false;
        indicator.classList.add("visible");
    } else {
        currentStep++;
        displayStep(currentStep);
    }
}

const refitOnResize = (window.debounce || function (fn) { return fn; })(() => {
    if (currentStep < scriptData.length) {
        const step = scriptData[currentStep];
        currentStepText = step ? step.text : currentStepText;
        if (currentStepText) {
            applyTextFit(currentStepText);
        }
    }
}, 140);

window.addEventListener("resize", refitOnResize);

window.onload = () => {
    scriptData.forEach((step) => {
        const img = new Image();
        img.src = step.pose;
    });

    setTimeout(() => {
        displayStep(0);
    }, 300);
};
