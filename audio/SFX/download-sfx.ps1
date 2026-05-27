# =============================================
#  Chapter 4 SFX Downloader
#  Requires: yt-dlp + ffmpeg in PATH
#  Usage:  powershell -ExecutionPolicy Bypass -File download-sfx.ps1
# =============================================

$ErrorActionPreference = "Stop"

# --- Verify dependencies ---
function Check-Command($cmd) {
    $path = Get-Command $cmd -ErrorAction SilentlyContinue
    if (-not $path) {
        Write-Host "MISSING: $cmd is not in PATH. Please install it first." -ForegroundColor Red
        exit 1
    }
    Write-Host "OK: $($path.Source)" -ForegroundColor Green
}

Write-Host "Checking dependencies..." -ForegroundColor Cyan
Check-Command "yt-dlp"
Check-Command "ffmpeg"

# --- Output directory (same folder as script) ---
$OutDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
if (-not $OutDir) { $OutDir = Get-Location }
Write-Host "Output: $OutDir" -ForegroundColor Cyan

# --- SFX definitions ---
# Add more entries here.  'start' and 'duration' are optional ffmpeg trim values.
$SFXList = @(
    # URL                                         | Output name           | Start | Duration
    @{url="https://www.youtube.com/watch?v=5v20ztxGvQ0"; out="coin-collect.mp3";  start="0:00"; duration="0:02"},
    # Placeholders – replace URL with a real YouTube link, then uncomment:
    # @{url="https://www.youtube.com/watch?v=XXXX"; out="ui-click.mp3";       start="0:00"; duration="0:01"},
    # @{url="https://www.youtube.com/watch?v=YYYY"; out="ui-hover.mp3";       start="0:00"; duration="0:01"},
    # @{url="https://www.youtube.com/watch?v=ZZZZ"; out="firework-pop.mp3";   start="0:00"; duration="0:03"},
    # @{url="https://www.youtube.com/watch?v=AAAA"; out="purchase-success.mp3";start="0:00"; duration="0:02"}
)

foreach ($sfx in $SFXList) {
    $url  = $sfx.url
    $name = $sfx.out
    $start = $sfx.start
    $dur   = $sfx.duration

    # Skip placeholders
    if ($url -match "PLACEHOLDER|XXXX|YYYY|ZZZZ|AAAA") {
        Write-Host "SKIP (placeholder): $name" -ForegroundColor DarkGray
        continue
    }

    $tempFile = Join-Path $OutDir "temp_$name"
    $finalFile = Join-Path $OutDir $name

    Write-Host "`nDownloading: $name" -ForegroundColor Yellow
    Write-Host "  URL: $url"

    try {
        # 1. Download best audio with yt-dlp
        yt-dlp -x --audio-format mp3 --audio-quality 0 `
               -o "$tempFile" `
               --no-playlist `
               "$url"

        # The file yt-dlp writes may have .mp3 extension already
        $downloaded = Get-ChildItem "$tempFile*" | Select-Object -First 1
        if (-not $downloaded) {
            throw "Download failed: no file written for $name"
        }

        # 2. Optional trim with ffmpeg
        if ($start -and $dur) {
            Write-Host "  Trimming $start / $dur ..." -ForegroundColor DarkCyan
            $trimmed = "$finalFile.tmp"
            ffmpeg -y -i "$downloaded" -ss $start -t $dur -acodec libmp3lame -q:a 2 "$trimmed" | Out-Null
            Move-Item -Force "$trimmed" "$finalFile"
            Remove-Item -Force "$downloaded" -ErrorAction SilentlyContinue
        } else {
            Move-Item -Force "$downloaded" "$finalFile"
        }

        Write-Host "  DONE: $finalFile" -ForegroundColor Green
    }
    catch {
        Write-Host "  FAILED: $_" -ForegroundColor Red
    }
}

Write-Host "`nAll downloads finished. Files are in: $OutDir" -ForegroundColor Cyan
Write-Host "Next steps:" -ForegroundColor White
Write-Host "  1. Add <audio> tags or new Audio('audio/SFX/<name>') in chapter-4.js" -ForegroundColor Gray
Write-Host "  2. Replace placeholder URLs above with real YouTube links, then re-run." -ForegroundColor Gray
