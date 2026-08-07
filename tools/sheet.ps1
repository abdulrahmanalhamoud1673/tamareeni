# Builds one contact sheet of all exercise images with labels, for visual review.
Add-Type -AssemblyName System.Drawing
$root = Split-Path $PSScriptRoot -Parent
$img  = Join-Path $root 'img'
$map  = Get-Content (Join-Path $PSScriptRoot 'map.json') -Raw | ConvertFrom-Json
$keys = $map.PSObject.Properties.Name

$cols = 5; $cw = 260; $ch = 174; $lab = 26
$rows = [Math]::Ceiling($keys.Count / $cols)
$bmp = New-Object System.Drawing.Bitmap(($cols * $cw), ($rows * ($ch + $lab)))
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.Clear([System.Drawing.Color]::White)
$g.InterpolationMode = 'HighQualityBicubic'
$font = New-Object System.Drawing.Font('Consolas', 11, [System.Drawing.FontStyle]::Bold)
$brush = [System.Drawing.Brushes]::Black

for ($i = 0; $i -lt $keys.Count; $i++) {
  $k = $keys[$i]
  $x = ($i % $cols) * $cw
  $y = [Math]::Floor($i / $cols) * ($ch + $lab)
  $f = Join-Path $img "$k-0.jpg"
  if (Test-Path $f) {
    $im = [System.Drawing.Image]::FromFile($f)
    $g.DrawImage($im, $x + 4, $y + $lab, $cw - 8, $ch - 8)
    $im.Dispose()
  }
  $g.DrawString("$($i+1). $k", $font, $brush, ($x + 4), ($y + 4))
}
$out = Join-Path $PSScriptRoot 'sheet.png'
$bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose(); $bmp.Dispose()
"saved: $out"
