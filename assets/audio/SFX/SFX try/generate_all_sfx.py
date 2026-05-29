# ========================================================
#  Procedural SFX Generator for BCDL
#  Generates 100% clean, native, retro-synthesized audio
#  Requires NO external dependencies, NO network requests!
# ========================================================

import wave
import struct
import math
import random
import os

sample_rate = 44100.0

def write_wav(filename, samples):
    out_dir = "C:/Users/Duck/Downloads/BCDL/assets/audio/SFX/SFX try"
    if not os.path.exists(out_dir):
        os.makedirs(out_dir)
    filepath = os.path.join(out_dir, filename)
    with wave.open(filepath, "w") as f:
        f.setparams((1, 2, int(sample_rate), len(samples), "NONE", "not compressed"))
        for s in samples:
            s = max(-1.0, min(1.0, s))
            val = int(s * 32767.0)
            f.writeframes(struct.pack("<h", val))
    print(f"SUCCESS: Generated {filename}")

# --- Sounds generators ---

def make_terminal_beep():
    samples = []
    dur = 0.15
    n = int(dur * sample_rate)
    for i in range(n):
        t = i / sample_rate
        vol = 1.0 - (t / dur)
        val = math.sin(2.0 * math.pi * 950.0 * t) * vol * 0.3
        samples.append(val)
    return samples

def make_terminal_tick():
    samples = []
    dur = 0.03
    n = int(dur * sample_rate)
    prev = 0.0
    for i in range(n):
        t = i / sample_rate
        vol = math.exp(-t * 150)
        noise = random.uniform(-1.0, 1.0)
        filtered = 0.85 * prev + 0.15 * noise
        prev = filtered
        samples.append(filtered * vol * 0.4)
    return samples

def make_keypress():
    samples = []
    dur = 0.04
    n = int(dur * sample_rate)
    prev = 0.0
    for i in range(n):
        t = i / sample_rate
        vol = math.exp(-t * 200)
        noise = random.uniform(-1.0, 1.0)
        filtered = 0.7 * prev + 0.3 * noise
        prev = filtered
        click = math.sin(2.0 * math.pi * 1500.0 * t) * 0.2
        samples.append((filtered + click) * vol * 0.25)
    return samples

def make_dialogue_next():
    samples = []
    dur = 0.18
    n = int(dur * sample_rate)
    for i in range(n):
        t = i / sample_rate
        vol = math.sin(t / dur * math.pi)
        freq = 600.0 + 250.0 * (t / dur)
        val = math.sin(2.0 * math.pi * freq * t) * vol * 0.25
        samples.append(val)
    return samples

def make_drag_start():
    samples = []
    dur = 0.08
    n = int(dur * sample_rate)
    for i in range(n):
        t = i / sample_rate
        vol = math.exp(-t * 80)
        val = math.sin(2.0 * math.pi * 320.0 * t) * vol * 0.3
        samples.append(val)
    return samples

def make_drag_drop():
    samples = []
    dur = 0.06
    n = int(dur * sample_rate)
    for i in range(n):
        t = i / sample_rate
        vol = math.exp(-t * 120)
        val = math.sin(2.0 * math.pi * 220.0 * t) * vol * 0.35
        samples.append(val)
    return samples

def make_window_open():
    samples = []
    dur = 0.4
    n = int(dur * sample_rate)
    for i in range(n):
        t = i / sample_rate
        if t < 0.15:
            vol = 1.0 - (t / 0.15)
            val = math.sin(2.0 * math.pi * 523.25 * t) * vol * 0.25
        else:
            t2 = t - 0.15
            vol = 1.0 - (t2 / 0.25)
            val = math.sin(2.0 * math.pi * 659.25 * t2) * vol * 0.25
        samples.append(val)
    return samples

def make_window_close():
    samples = []
    dur = 0.3
    n = int(dur * sample_rate)
    for i in range(n):
        t = i / sample_rate
        if t < 0.1:
            vol = 1.0 - (t / 0.1)
            val = math.sin(2.0 * math.pi * 659.25 * t) * vol * 0.25
        else:
            t2 = t - 0.1
            vol = 1.0 - (t2 / 0.2)
            val = math.sin(2.0 * math.pi * 523.25 * t2) * vol * 0.25
        samples.append(val)
    return samples

def make_login_success():
    samples = []
    dur = 1.2
    n = int(dur * sample_rate)
    freqs = [261.63, 329.63, 392.00, 523.25, 659.25]
    delays = [0.0, 0.08, 0.16, 0.24, 0.32]
    for i in range(n):
        t = i / sample_rate
        mix = 0.0
        for f, d in zip(freqs, delays):
            if t >= d:
                td = t - d
                vol = math.exp(-td * 3.5)
                mix += math.sin(2.0 * math.pi * f * td) * vol * 0.15
        samples.append(mix)
    return samples

def make_login_error():
    samples = []
    dur = 0.6
    n = int(dur * sample_rate)
    for i in range(n):
        t = i / sample_rate
        pulse = 1.0 if (t < 0.25 or (t > 0.32 and t < 0.57)) else 0.0
        val = (math.sin(2.0 * math.pi * 130.0 * t) + 0.5 * math.sin(2.0 * math.pi * 260.0 * t)) * pulse * 0.3
        samples.append(val)
    return samples

def make_buy_upgrade():
    samples = []
    dur = 0.7
    n = int(dur * sample_rate)
    notes = [987.77, 1318.51, 1567.98, 2093.00]
    delays = [0.0, 0.07, 0.14, 0.21]
    prev_noise = 0.0
    for i in range(n):
        t = i / sample_rate
        mix = 0.0
        for f, d in zip(notes, delays):
            if t >= d:
                td = t - d
                vol = math.exp(-td * 12.0)
                mix += math.sin(2.0 * math.pi * f * td) * vol * 0.2
        noise = random.uniform(-1.0, 1.0)
        filtered = 0.8 * prev_noise + 0.2 * noise
        prev_noise = filtered
        noise_vol = math.exp(-t * 25.0) * 0.15
        samples.append(mix + filtered * noise_vol)
    return samples

def make_buy_fail():
    samples = []
    dur = 0.5
    n = int(dur * sample_rate)
    for i in range(n):
        t = i / sample_rate
        vol = math.exp(-t * 6.0)
        val = math.sin(2.0 * math.pi * 180.0 * t) * vol * 0.35
        samples.append(val)
    return samples

def make_celebration():
    samples = []
    dur = 2.5
    n = int(dur * sample_rate)
    centers = [0.0, 0.4, 0.8, 1.2]
    prev_noises = [0.0] * 4
    for i in range(n):
        t = i / sample_rate
        mix = 0.0
        for j, c in enumerate(centers):
            if t >= c:
                td = t - c
                vol = math.exp(-td * 4.0)
                noise = random.uniform(-1.0, 1.0)
                filtered = 0.94 * prev_noises[j] + 0.06 * noise
                prev_noises[j] = filtered
                whistle = 0.0
                if td < 0.15 and c > 0.0:
                    whistle = math.sin(2.0 * math.pi * (1000 + 4000 * (td/0.15)) * td) * (0.15 - td) * 0.5
                mix += (filtered * 2.0 * vol + whistle) * 0.18
        samples.append(mix)
    return samples

def make_book_page():
    samples = []
    dur = 0.6
    n = int(dur * sample_rate)
    prev = 0.0
    for i in range(n):
        t = i / sample_rate
        if t < 0.2:
            vol = t / 0.2
        else:
            vol = (0.6 - t) / 0.4
        vol = max(0.0, min(1.0, vol))
        vol_env = math.sin(vol * math.pi / 2.0)
        noise = random.uniform(-1.0, 1.0)
        filtered = 0.93 * prev + 0.07 * noise
        prev = filtered
        samples.append(filtered * vol_env * 0.25)
    return samples

def make_scanner_scan():
    samples = []
    dur = 1.0
    n = int(dur * sample_rate)
    for i in range(n):
        t = i / sample_rate
        freq = 1200.0 - 600.0 * (t / dur)
        vol = math.sin(t / dur * math.pi) * 0.15
        val = math.sin(2.0 * math.pi * freq * t) * vol
        samples.append(val)
    return samples

def make_scanner_alert():
    samples = []
    dur = 1.2
    n = int(dur * sample_rate)
    for i in range(n):
        t = i / sample_rate
        pulse = 1.0 if (math.sin(2.0 * math.pi * 5.0 * t) > 0.0) else 0.1
        val = math.sin(2.0 * math.pi * 880.0 * t) * pulse * 0.2
        samples.append(val)
    return samples

def make_win7_startup():
    samples = []
    dur = 4.0
    n = int(dur * sample_rate)
    notes = [130.81, 196.00, 261.63, 329.63, 392.00, 523.25, 659.25]
    for i in range(n):
        t = i / sample_rate
        if t < 1.5:
            vol = t / 1.5
        else:
            vol = (4.0 - t) / 2.5
        vol = max(0.0, min(1.0, vol))
        vol_env = math.sin(vol * math.pi / 2.0)
        
        mix = 0.0
        for idx, f in enumerate(notes):
            vibrato = 1.0 + 0.005 * math.sin(2.0 * math.pi * 6.0 * t + idx)
            mix += math.sin(2.0 * math.pi * f * vibrato * t) * 0.12
        samples.append(mix * vol_env * 0.3)
    return samples

# --- Main execution ---
if __name__ == "__main__":
    print("Initializing procedural SFX generation...")
    write_wav("terminal-beep.wav", make_terminal_beep())
    write_wav("terminal-tick.wav", make_terminal_tick())
    write_wav("keypress.wav", make_keypress())
    write_wav("dialogue-next.wav", make_dialogue_next())
    write_wav("drag-start.wav", make_drag_start())
    write_wav("drag-drop.wav", make_drag_drop())
    write_wav("window-open.wav", make_window_open())
    write_wav("window-close.wav", make_window_close())
    write_wav("login-success.wav", make_login_success())
    write_wav("login-error.wav", make_login_error())
    write_wav("buy-upgrade.wav", make_buy_upgrade())
    write_wav("buy-fail.wav", make_buy_fail())
    write_wav("celebration.wav", make_celebration())
    write_wav("book-page.wav", make_book_page())
    write_wav("scanner-scan.wav", make_scanner_scan())
    write_wav("scanner-alert.wav", make_scanner_alert())
    write_wav("win7-startup.wav", make_win7_startup())
    print("\nALL 17 procedural SFX files successfully generated offline!")
