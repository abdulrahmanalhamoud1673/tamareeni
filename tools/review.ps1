# Contact sheet showing BOTH frames of every exercise, for a full correctness review.
Add-Type -AssemblyName System.Drawing
$root = Split-Path $PSScriptRoot -Parent
$img  = Join-Path $root 'img'
$map  = Get-Content (Join-Path $PSScriptRoot 'map.json') -Raw | ConvertFrom-Json
$keys = $map.PSObject.Properties.Name

$part = [int]$args[0]           # 1 or 2 (split so text stays legible)
$per  = 17
$sel  = $keys | Select-Object -Skip (($part-1)*$per) -First $per

$iw = 215; $ih = 143; $lab = 22
$cw = $iw*2 + 12
$cols = 2
$rows = [Math]::Ceiling($sel.Count / $cols)
$bmp = New-Object System.Drawing.Bitmap(($cols*$cw), ($rows*($ih+$lab)))
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.Clear([System.Drawing.Color]::White)
$g.InterpolationMode = 'HighQualityBicubic'
$font = New-Object System.Drawing.Font('Consolas', 11, [System.Drawing.FontStyle]::Bold)

for ($i=0; $i -lt $sel.Count; $i++) {
  $k = $sel[$i]
  $n = ($part-1)*$per + $i + 1
  $x = ($i % $cols) * $cw
  $y = [Math]::Floor($i / $cols) * ($ih + $lab)
  foreach ($f in 0,1) {
    $p = Join-Path $img "$k-$f.jpg"
    if (Test-Path $p) {
      $im = [System.Drawing.Image]::FromFile($p)
      $g.DrawImage($im, ($x + $f*($iw+6) + 2), ($y+$lab), ($iw-4), ($ih-6))
      $im.Dispose()
    }
  }
  $g.DrawString("$n. $k", $font, [System.Drawing.Brushes]::Black, ($x+2), ($y+3))
}
$out = Join-Path $PSScriptRoot "review$part.png"
$bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose(); $bmp.Dispose()
"saved: $out"
