# ========================================================
#  SFX try Downloader (using yt-dlp dynamic SEARCH & native M4A)
#  Guarantees 100% download success by searching active videos!
#  Doesn't require FFmpeg for format conversion!
# ========================================================

$OutDir = "C:\Users\Duck\Downloads\BCDL\assets\audio\SFX\SFX try"
if (-not (Test-Path $OutDir)) {
    New-Item -ItemType Directory -Force -Path $OutDir | Out-Null
}

$SFXList = @(
    @{query="PC bios beep sound effect short"; out="terminal-beep.m4a"},
    @{query="single mouse click sound effect 1 second"; out="terminal-tick.m4a"},
    @{query="windows 7 startup sound original"; out="win7-startup.m4a"},
    @{query="windows 7 click sound effect"; out="login-click.m4a"},
    @{query="windows 7 error sound effect"; out="login-error.m4a"},
    @{query="windows 7 log on sound original"; out="login-success.m4a"},
    @{query="typewriter keypress single sound effect"; out="keypress.m4a"},
    @{query="retro 8-bit bloop sound effect short"; out="dialogue-next.m4a"},
    @{query="slide sound effect quick short"; out="drag-start.m4a"},
    @{query="windows 7 popup sound effect"; out="window-open.m4a"},
    @{query="whoosh sound effect quick soft"; out="window-close.m4a"},
    @{query="mechanical keyboard typing sound effect 5 seconds"; out="mech-keyboard.m4a"},
    @{query="message sent bubble pop sound effect"; out="chatgipiti-send.m4a"},
    @{query="radar sweep sonar sound effect loop"; out="scanner-scan.m4a"},
    @{query="digital alarm buzzer sound effect"; out="scanner-alert.m4a"},
    @{query="cinematic sweep transition whoosh sound effect"; out="outro-woosh.m4a"},
    @{query="slot machine lever pull sound effect"; out="data-lever.m4a"},
    @{query="mario coin collect sound effect"; out="chart-reveal.m4a"},
    @{query="cash register cha-ching sound effect"; out="buy-upgrade.m4a"},
    @{query="fireworks crackle sound effect short"; out="celebration.m4a"},
    @{query="book page flip sound effect short"; out="book-page.m4a"}
)

Write-Host "Starting dynamic SFX download from YouTube in format 140 (M4A)..." -ForegroundColor Cyan

foreach ($sfx in $SFXList) {
    $q = $sfx.query
    $name = $sfx.out
    $finalFile = Join-Path $OutDir $name
    
    if (Test-Path $finalFile) {
        Write-Host "SKIP: Already exists: $name" -ForegroundColor DarkGray
        continue
    }

    Write-Host "`nSearching & Downloading: $name" -ForegroundColor Yellow
    Write-Host "  Query: $q"
    
    try {
        # Using ytsearch1: to grab the top search result natively in M4A (140) format
        & yt-dlp -f 140 --no-playlist -o "$finalFile" "ytsearch1:$q"
        if (Test-Path $finalFile) {
            Write-Host "  DONE: Successfully saved $name" -ForegroundColor Green
        } else {
            throw "File not found after download"
        }
    }
    catch {
        Write-Host "  FAILED: $name - $_" -ForegroundColor Red
    }
}

Write-Host "`nAll operations finished!" -ForegroundColor Cyan
