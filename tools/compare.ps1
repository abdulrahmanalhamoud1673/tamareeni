# Downloads candidate images side by side for visual comparison before changing map.json
Add-Type -AssemblyName System.Drawing
$base = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises'
$tmp  = Join-Path $env:TEMP 'exCompare'
if (-not (Test-Path $tmp)) { New-Item -ItemType Directory -Path $tmp | Out-Null }

$cands = @(
  @{ label='CUR high_row = Elevated_Cable_Rows';  id='Elevated_Cable_Rows';        n=0 },
  @{ label='ALT Kneeling_High_Pulley_Row';        id='Kneeling_High_Pulley_Row';   n=0 },
  @{ label='ALT Kneeling_High_Pulley_Row (end)';  id='Kneeling_High_Pulley_Row';   n=1 },
  @{ label='CUR reverse_fly = Reverse_Machine_Flyes'; id='Reverse_Machine_Flyes';  n=1 },
  @{ label='ALT Cable_Rear_Delt_Fly';             id='Cable_Rear_Delt_Fly';        n=0 },
  @{ label='ALT Face_Pull';                       id='Face_Pull';                  n=1 },
  @{ label='CUR butterfly = Sit-Up';              id='Sit-Up';                     n=1 },
  @{ label='ALT Frog_Sit-Ups (start)';            id='Frog_Sit-Ups';               n=0 },
  @{ label='ALT Frog_Sit-Ups (end)';              id='Frog_Sit-Ups';               n=1 },
  @{ label='CUR plank (start)';                   id='Plank';                      n=0 },
  @{ label='CUR plank (end)';                     id='Plank';                      n=1 },
  @{ label='CUR incline_bar_press (end)';         id='Barbell_Incline_Bench_Press_-_Medium_Grip'; n=1 },
  @{ label='CUR abd_add = Thigh_Abductor';        id='Thigh_Abductor';             n=1 },
  @{ label='ALT Thigh_Adductor';                  id='Thigh_Adductor';             n=1 },
  @{ label='CUR tri_ext_machine (end)';           id='Machine_Triceps_Extension';  n=1 }
)

$cols = 3; $cw = 300; $ch = 200; $lab = 24
$rows = [Math]::Ceiling($cands.Count / $cols)
$bmp = New-Object System.Drawing.Bitmap(($cols*$cw), ($rows*($ch+$lab)))
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.Clear([System.Drawing.Color]::White)
$g.InterpolationMode = 'HighQualityBicubic'
$font = New-Object System.Drawing.Font('Consolas', 10, [System.Drawing.FontStyle]::Bold)

for ($i=0; $i -lt $cands.Count; $i++) {
  $c = $cands[$i]
  $f = Join-Path $tmp "$($c.id)-$($c.n).jpg"
  if (-not (Test-Path $f)) {
    try { Invoke-WebRequest "$base/$($c.id)/$($c.n).jpg" -OutFile $f -UseBasicParsing -TimeoutSec 30 } catch { }
  }
  $x = ($i % $cols) * $cw
  $y = [Math]::Floor($i / $cols) * ($ch + $lab)
  if (Test-Path $f) {
    $im = [System.Drawing.Image]::FromFile($f)
    $g.DrawImage($im, $x+4, $y+$lab, $cw-8, $ch-8)
    $im.Dispose()
  }
  $g.DrawString($c.label, $font, [System.Drawing.Brushes]::Black, ($x+4), ($y+4))
}
$out = Join-Path $PSScriptRoot 'compare.png'
$bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose(); $bmp.Dispose()
"saved: $out"
