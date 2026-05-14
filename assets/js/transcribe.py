import speech_recognition as sr
import os
import glob
import sys

# Ensure output is UTF-8 for Vietnamese characters
if sys.stdout.encoding != 'utf-8':
    try:
        from io import TextIOWrapper
        sys.stdout = TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
    except:
        pass

def transcribe_audio(file_path):
    r = sr.Recognizer()
    try:
        with sr.AudioFile(file_path) as source:
            audio_data = r.record(source)
            text = r.recognize_google(audio_data, language='vi-VN')
            duration = source.DURATION
            return text, duration
    except Exception as e:
        return f"Error: {str(e)}", 0

if __name__ == "__main__":
    audio_files = sorted(glob.glob(r'assets/audio/Dialougue/*.wav'))
    
    if not audio_files:
        print("No wav files found in assets/audio/Dialougue/")
    
    results = []
    for f in audio_files:
        print(f"Processing {os.path.basename(f)}...")
        text, duration = transcribe_audio(f)
        results.append({
            "file": os.path.basename(f),
            "text": text,
            "duration": duration
        })
    
    print("\n--- TRANSCRIPTION RESULTS ---\n")
    for res in results:
        print(f"File: {res['file']}")
        print(f"Duration: {res['duration']:.2f}s")
        print(f"Text: {res['text']}")
        print("-" * 20)
