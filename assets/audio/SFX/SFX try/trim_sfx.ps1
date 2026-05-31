# ================================================================
#  Trim & Extract SFX - Based on silencedetect analysis
# ================================================================
# File Status:
# - login-click.m4a  (54s, Win7 SFX pack) -> clip segment at 12.55s (short click)
# - login-error.m4a  (54s, same Win7 pack) -> clip segment at 10.6s (error chord)
# - login-success.m4a (62s, Win7 Logon pack) -> clip at 6.4s (logon chime 5s)
# - window-open.m4a  (54s, same Win7 pack) -> clip at 5.0s (popup sound)
# - terminal-beep.m4a (7s, 4.2s silence at start) -> trim to actual beep at 4.2s
# - terminal-tick.m4a (59s, click pack) -> take first 0.5s
# - scanner-scan.m4a (51s, 16s silence + sonar beeps) -> start at 16.3s
# - scanner-alert.m4a (31s, continuous alarm) -> take first 3s
# - drag-start.m4a (7.4s, multiple slide sounds) -> first sound 0-0.75s
# - chart-reveal.m4a (9.2s, coin sounds pack) -> first coin at 0-1.5s
# ================================================================

$sfxDir = "C:\Users\Duck\Downloads\BCDL\assets\audio\SFX\SFX try"
$ffmpeg  = "$sfxDir\ffmpeg.exe"

function Trim-Audio($src, $dest, [double]$ss, [double]$duration) {
    $tempFile = "$sfxDir\_TRIM_TEMP_$(Get-Random).m4a"
    Write-Host "  Trimming: $([System.IO.Path]::GetFileName($dest)) (ss=$ss t=$duration)"
    & $ffmpeg -y -i "$src" -ss $ss -t $duration -vn -acodec aac -b:a 128k -ar 44100 "$tempFile" 2>&1 | Out-Null
    if (Test-Path $tempFile) {
        Move-Item -Force $tempFile $dest
        $kb = [math]::Round((Get-Item $dest).Length / 1KB, 1)
        Write-Host "  OK: $([System.IO.Path]::GetFileName($dest)) -> ${kb}KB"
    } else {
        Write-Host "  FAILED: $([System.IO.Path]::GetFileName($dest))" -ForegroundColor Red
    }
}

Write-Host "Starting SFX Trim & Extract..." -ForegroundColor Cyan
Write-Host ""

# ── Step 1: Extract drag-drop from ORIGINAL drag-start BEFORE trimming drag-start ──
Write-Host ">> Creating drag-drop.m4a (from drag-start pack, segment at 1.62s-2.4s)..."
Trim-Audio "$sfxDir\drag-start.m4a" "$sfxDir\drag-drop.m4a" 1.62 0.85
Write-Host ""

# ── Step 2: Trim all problem files ──
$trims = @(
    # Files with silence at start
    @{ src="terminal-beep.m4a"; ss=4.15;  dur=0.55;  note="4.2s silence at start, beep at 4.15s" },
    @{ src="terminal-tick.m4a"; ss=0;     dur=0.45;  note="59s pack, take first 0.45s click" },

    # Windows 7 SFX Pack (login-click, login-error, window-open are all the SAME 54s file!)
    @{ src="login-click.m4a";  ss=12.55; dur=0.45;  note="Win7 pack: short click/ding at 12.55s" },
    @{ src="login-error.m4a";  ss=10.6;  dur=0.9;   note="Win7 pack: error chord at 10.6s" },
    @{ src="window-open.m4a";  ss=5.0;   dur=0.75;  note="Win7 pack: popup sound at 5.0s" },

    # Win7 Logon Pack
    @{ src="login-success.m4a"; ss=6.4;  dur=5.0;   note="Win7 Logon: starts after 6.4s silence" },

    # Drag-start pack (first slide sound)
    @{ src="drag-start.m4a";  ss=0;     dur=0.75;  note="Slide pack: first sound 0-0.75s" },

    # Sonar/scanner pack (16s silence at start)
    @{ src="scanner-scan.m4a"; ss=16.3;  dur=2.65;  note="Sonar pack: first beep after 16.3s silence" },

    # Alarm (continuous 31s) - take first 2.5s
    @{ src="scanner-alert.m4a"; ss=0;   dur=2.5;   note="Alarm: first 2.5s" },

    # Coin pack - take first coin + 1 beat
    @{ src="chart-reveal.m4a"; ss=0;    dur=1.2;   note="Coin pack: first coin sound 0-1.2s" }
)

foreach ($item in $trims) {
    Write-Host ">> $($item.src) ($($item.note))..."
    Trim-Audio "$sfxDir\$($item.src)" "$sfxDir\$($item.src)" $item.ss $item.dur
    Write-Host ""
}

Write-Host "All trims complete! Verifying file sizes:" -ForegroundColor Green
Get-ChildItem "$sfxDir\*.m4a" | Select-Object Name, @{N='Size';E={"$([math]::Round($_.Length/1KB,1)) KB"}} | Format-Table -AutoSize
