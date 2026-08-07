# Downloads 2 images per exercise from the public-domain free-exercise-db and resizes them for mobile.
Add-Type -AssemblyName System.Drawing
$root = Split-Path $PSScriptRoot -Parent
$out  = Join-Path $root 'img'
if (-not (Test-Path $out)) { New-Item -ItemType Directory -Path $out | Out-Null }
$map = Get-Content (Join-Path $PSScriptRoot 'map.json') -Raw | ConvertFrom-Json
$base = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises'
$targetW = 400

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
$ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 74)

$ok = 0; $fail = @()
foreach ($p in $map.PSObject.Properties) {
  # القيمة إما اسم واحد (صورتا البداية والنهاية) أو اسمان (تمرينان مختلفان، أول صورة من كلٍ منهما)
  $pair = @($p.Value)
  foreach ($i in 0, 1) {
    if ($pair.Count -gt 1) { $src = $pair[$i]; $n = 0 } else { $src = $pair[0]; $n = $i }
    $url = "$base/$src/$n.jpg"
    $dst = Join-Path $out "$($p.Name)-$i.jpg"
    $tmp = [System.IO.Path]::GetTempFileName()
    try {
      Invoke-WebRequest $url -OutFile $tmp -UseBasicParsing -TimeoutSec 30
      $img = [System.Drawing.Image]::FromFile($tmp)
      $w = [Math]::Min($targetW, $img.Width)
      $h = [int][Math]::Round($img.Height * ($w / $img.Width))
      $bmp = New-Object System.Drawing.Bitmap($w, $h)
      $g = [System.Drawing.Graphics]::FromImage($bmp)
      $g.InterpolationMode = 'HighQualityBicubic'
      $g.SmoothingMode = 'HighQuality'
      $g.PixelOffsetMode = 'HighQuality'
      $g.DrawImage($img, 0, 0, $w, $h)
      $bmp.Save($dst, $codec, $ep)
      $g.Dispose(); $bmp.Dispose(); $img.Dispose()
      $ok++
    } catch {
      $fail += "$($p.Name)-$i"
    } finally {
      if (Test-Path $tmp) { Remove-Item $tmp -Force -ErrorAction SilentlyContinue }
    }
  }
}
$files = Get-ChildItem $out -Filter *.jpg
$size = ($files | Measure-Object Length -Sum).Sum
"downloaded: $ok"
"files: $($files.Count)"
"total MB: $([math]::Round($size/1MB,2))"
"avg KB: $([math]::Round($size/1KB/$files.Count,1))"
if ($fail.Count) { "FAILED -> " + ($fail -join ', ') }
