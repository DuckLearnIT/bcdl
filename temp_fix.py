import re

path = r'C:\Users\Duck\Downloads\BCDL\assets\js\chapter-4.js'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Add currentAudio to state
old1 = '    infoProcessed: false\n};'
new1 = '    infoProcessed: false,\n    currentAudio: null\n};'
if old1 in text:
    text = text.replace(old1, new1)
    print('1 OK')
else:
    print('1 FAIL')

# 2. Fix playStepAudio
old2 = '''function playStepAudio(audioId) {
    const muteBtn = document.getElementById("btn-mute");
    if (muteBtn && muteBtn.textContent === "🔇") return;

    const audio = document.getElementById(audioId);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => {
        // Autoplay may be blocked; dialogue should keep moving.
    });
}'''
new2 = '''function playStepAudio(audioId) {
    const muteBtn = document.getElementById("btn-mute");
    if (muteBtn && muteBtn.textContent === "🔇") return;

    if (state.currentAudio) {
        state.currentAudio.pause();
        state.currentAudio.currentTime = 0;
    }

    const audio = document.getElementById(audioId);
    if (!audio) {
        state.currentAudio = null;
        return;
    }
    audio.currentTime = 0;
    state.currentAudio = audio;
    audio.play().catch(() => {
        // Autoplay may be blocked; dialogue should keep moving.
    });
}'''
if old2 in text:
    text = text.replace(old2, new2)
    print('2 OK')
else:
    print('2 FAIL')

# 3. Fix advanceDialogue
old3 = '''    if (state.dialogueLocked) return;
    clearTimeout(state.autoTimer);
    if (state.dialogueIndex < state.activeDialogue.length - 1) {'''
new3 = '''    if (state.dialogueLocked) return;
    clearTimeout(state.autoTimer);

    if (state.currentAudio) {
        state.currentAudio.pause();
        state.currentAudio.currentTime = 0;
        state.currentAudio = null;
    }

    if (state.dialogueIndex < state.activeDialogue.length - 1) {'''
if old3 in text:
    text = text.replace(old3, new3)
    print('3 OK')
else:
    print('3 FAIL')

# 4. Fix onScanComplete
old4 = '''    // Show Ninh panel + play audio
    const ninhPanel = document.getElementById("ninh-panel");
    const recordAudio = document.getElementById("sfx-record1");

    if (ninhPanel) ninhPanel.classList.add("active");

    if (recordAudio) {
        recordAudio.currentTime = 0;
        recordAudio.play().catch(() => {
            // Autoplay blocked — continue anyway
        });

        // When audio ends, hide ninh panel and start dialogue
        recordAudio.onended = () => {
            if (ninhPanel) ninhPanel.classList.remove("active");
            startPostScanDialogue();
        };

        // Fallback: if audio doesn't play or user skips
        setTimeout(() => {
            if (!magState.dialogueStarted) {
                if (ninhPanel) ninhPanel.classList.remove("active");
                if (recordAudio) {
                    recordAudio.pause();
                    recordAudio.currentTime = 0;
                }
                startPostScanDialogue();
            }
        }, 15000);
    } else {
        // No audio element → go straight to dialogue
        setTimeout(() => {
            if (ninhPanel) ninhPanel.classList.remove("active");
            startPostScanDialogue();
        }, 2000);
    }'''
new4 = '''    // Chuyển thẳng sang dialogue; panel & audio của cô Ninh sẽ do dialogue 6.4.1 tự xử lý
    setTimeout(() => {
        startPostScanDialogue();
    }, 800);'''
if old4 in text:
    text = text.replace(old4, new4)
    print('4 OK')
else:
    print('4 FAIL')

with open(path, 'w', encoding='utf-8') as f:
    f.write(text)
print('Done')
