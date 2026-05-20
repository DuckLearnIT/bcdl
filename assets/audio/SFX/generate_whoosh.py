import wave
import struct
import math
import random

sample_rate = 44100.0
duration = 2.0  # seconds
num_samples = int(duration * sample_rate)

wav_file = wave.open("C:/Users/Duck/Downloads/BCDL/assets/audio/SFX/whoosh.wav", "w")
wav_file.setparams((1, 2, int(sample_rate), num_samples, "NONE", "not compressed"))

prev_noise = 0.0
for i in range(num_samples):
    t = i / sample_rate
    
    # Volume envelope (whoosh curve)
    if t < 0.8:
        vol = t / 0.8
    else:
        vol = (2.0 - t) / 1.2
    vol = max(0.0, min(1.0, vol))
    # Smooth the volume shape
    vol = math.sin(vol * math.pi / 2.0)
    
    # Wind whistle frequency sweep (goes up then down)
    if t < 0.8:
        freq = 150 + 250 * (t / 0.8)
    else:
        freq = 400 - 280 * ((t - 0.8) / 1.2)
        
    noise = random.uniform(-1.0, 1.0)
    
    # Simple lowpass filter to make noise sound like wind rumble
    filtered_noise = 0.92 * prev_noise + 0.08 * noise
    prev_noise = filtered_noise
    
    # Whistle component
    whistle = math.sin(2.0 * math.pi * freq * t)
    
    # Mix (mostly rumble, some whistle)
    sample = 0.2 * whistle + 0.8 * (filtered_noise * 2.5)
    sample = sample * vol * 0.4  # Master volume factor
    
    sample = max(-1.0, min(1.0, sample))
    value = int(sample * 32767.0)
    data = struct.pack("<h", value)
    wav_file.writeframes(data)

wav_file.close()
print("whoosh.wav generated successfully!")
