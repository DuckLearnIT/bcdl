import re

# 1. Fix chapter-5.html
path_html = r'C:\Users\Duck\Downloads\BCDL\chapter-5.html'
with open(path_html, 'r', encoding='utf-8') as f:
    text = f.read()

old_html = '''    <!-- Ripple trigger để bắt đầu (Bypass Browser Autoplay Policy) -->
    <div class="ripple-trigger" id="start-btn">
        <span class="ripple-ring r1"></span>
        <span class="ripple-ring r2"></span>
        <span class="ripple-ring r3"></span>
        <span class="ripple-ring r4"></span>
        <span class="ripple-ring r5"></span>
        <span class="ripple-splash"></span>
    </div>'''
new_html = '''    <!-- Ripple trigger để bắt đầu (Bypass Browser Autoplay Policy) -->
    <div class="ripple-trigger" id="start-btn">
        <span class="ripple-ring"></span>
    </div>'''
if old_html in text:
    text = text.replace(old_html, new_html)
    print('HTML OK')
else:
    print('HTML FAIL')
with open(path_html, 'w', encoding='utf-8') as f:
    f.write(text)

# 2. Fix chapter-5.css
path_css = r'C:\Users\Duck\Downloads\BCDL\assets\css\chapter-5.css'
with open(path_css, 'r', encoding='utf-8') as f:
    text = f.read()

old_css = '''/* Ripple trigger để bypass Autoplay Policy — gợn sóng nước loop mềm mượt */
.ripple-trigger {
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    z-index: 999;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.ripple-ring {
    position: absolute;
    top: 50%; left: 50%;
    width: 100%; height: 100%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1.5px solid rgba(160, 220, 255, 0.35);
    box-shadow: 0 0 20px rgba(140, 200, 240, 0.15), inset 0 0 20px rgba(140, 200, 240, 0.1);
    animation: ripple-soft 4s ease-out infinite;
    pointer-events: none;
}

.ripple-ring.r1 { animation-delay: 0s; }
.ripple-ring.r2 { animation-delay: 0.8s; }
.ripple-ring.r3 { animation-delay: 1.6s; }
.ripple-ring.r4 { animation-delay: 2.4s; }
.ripple-ring.r5 { animation-delay: 3.2s; }

/* Vòng sóng mềm mại lan tỏa ra toàn màn hình */
@keyframes ripple-soft {
    0% {
        width: 60px; height: 60px;
        opacity: 0.6;
        border-width: 2px;
    }
    30% {
        opacity: 0.4;
    }
    100% {
        width: 200vmax; height: 200vmax;
        opacity: 0;
        border-width: 0.5px;
    }
}

/* Splash effect — hòn đá rơi xuống nước */
.ripple-splash {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 12px; height: 12px;
    background: radial-gradient(circle, rgba(200, 240, 255, 0.9) 0%, rgba(160, 220, 250, 0.6) 50%, transparent 70%);
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
}

.ripple-trigger.splash .ripple-splash {
    animation: stone-splash 0.6s ease-out forwards;
}

@keyframes stone-splash {
    0% {
        transform: translate(-50%, -60%) scale(0.3);
        opacity: 1;
    }
    30% {
        transform: translate(-50%, -50%) scale(1.2);
        opacity: 0.9;
    }
    60% {
        transform: translate(-50%, -45%) scale(0.8);
        opacity: 0.6;
    }
    100% {
        transform: translate(-50%, -40%) scale(0.2);
        opacity: 0;
    }
}

/* Burst khi click — gợn sóng loăng mạnh hơn rồi vào việc */
.ripple-trigger.burst .ripple-ring {
    animation-duration: 0.5s;
    border-color: rgba(190, 240, 255, 0.8);
    box-shadow: 0 0 40px rgba(150, 220, 255, 0.4), inset 0 0 30px rgba(150, 220, 255, 0.2);
}

.ripple-trigger.burst .ripple-ring.r1 { animation-delay: 0s; }
.ripple-trigger.burst .ripple-ring.r2 { animation-delay: 0.15s; }
.ripple-trigger.burst .ripple-ring.r3 { animation-delay: 0.3s; }
.ripple-trigger.burst .ripple-ring.r4 { animation-delay: 0.45s; }
.ripple-trigger.burst .ripple-ring.r5 { animation-delay: 0.6s; }'''

new_css = '''/* Ripple trigger để bypass Autoplay Policy — gợn sóng nhiễu đơn giản (perturbance) */
.ripple-trigger {
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    z-index: 999;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.ripple-ring {
    position: absolute;
    top: 50%; left: 50%;
    width: 100%; height: 100%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 2px solid rgba(160, 220, 255, 0.5);
    animation: ripple-perturb 2s ease-in-out infinite;
    pointer-events: none;
}

@keyframes ripple-perturb {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
    50% { transform: translate(-50%, -50%) scale(1.3); opacity: 0.2; }
}'''
if old_css in text:
    text = text.replace(old_css, new_css)
    print('CSS OK')
else:
    print('CSS FAIL')
with open(path_css, 'w', encoding='utf-8') as f:
    f.write(text)

# 3. Fix chapter-5.js — bỏ class splash không cần thiết
path_js = r'C:\Users\Duck\Downloads\BCDL\assets\js\chapter-5.js'
with open(path_js, 'r', encoding='utf-8') as f:
    text = f.read()

old_js = '''    document.getElementById("start-btn").addEventListener("click", function() {
        if (this.classList.contains("burst")) return;
        this.classList.add("splash");
        setTimeout(() => {'''
new_js = '''    document.getElementById("start-btn").addEventListener("click", function() {
        if (this.classList.contains("burst")) return;
        setTimeout(() => {'''
if old_js in text:
    text = text.replace(old_js, new_js)
    print('JS OK')
else:
    print('JS FAIL')
with open(path_js, 'w', encoding='utf-8') as f:
    f.write(text)

print('Done')
