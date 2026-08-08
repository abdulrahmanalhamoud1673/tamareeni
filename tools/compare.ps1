# Quick side-by-side of candidate images before committing to map.json
Add-Type -AssemblyName System.Drawing
$base = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises'
$tmp  = Join-Path $env:TEMP 'exCompare2'
if (-not (Test-Path $tmp)) { New-Item -ItemType Directory -Path $tmp | Out-Null }

$cands = @(
  @{ label='1 EZ-Bar Skullcrusher (start)'; id='EZ-Bar_Skullcrusher'; n=0 },
  @{ label='1 EZ-Bar Skullcrusher (end)';   id='EZ-Bar_Skullcrusher'; n=1 },
  @{ label='2 Rope Overhead Ext (start)';   id='Cable_Rope_Overhead_Triceps_Extension'; n=0 },
  @{ label='2 Rope Overhead Ext (end)';     id='Cable_Rope_Overhead_Triceps_Extension'; n=1 },
  @{ label='3 Cable One Arm Ext (start)';   id='Cable_One_Arm_Tricep_Extension'; n=0 },
  @{ label='3 Cable One Arm Ext (end)';     id='Cable_One_Arm_Tricep_Extension'; n=1 }
)
$cols=2; $cw=330; $ch=220; $lab=24
$rows=[Math]::Ceiling($cands.Count/$cols)
$bmp=New-Object System.Drawing.Bitmap(($cols*$cw),($rows*($ch+$lab)))
$g=[System.Drawing.Graphics]::FromImage($bmp); $g.Clear([System.Drawing.Color]::White)
$g.InterpolationMode='HighQualityBicubic'
$font=New-Object System.Drawing.Font('Consolas',11,[System.Drawing.FontStyle]::Bold)
for($i=0;$i -lt $cands.Count;$i++){
  $c=$cands[$i]; $f=Join-Path $tmp "$($c.id)-$($c.n).jpg"
  if(-not (Test-Path $f)){ try{ Invoke-WebRequest "$base/$($c.id)/$($c.n).jpg" -OutFile $f -UseBasicParsing -TimeoutSec 30 }catch{} }
  $x=($i%$cols)*$cw; $y=[Math]::Floor($i/$cols)*($ch+$lab)
  if(Test-Path $f){ $im=[System.Drawing.Image]::FromFile($f); $g.DrawImage($im,$x+4,$y+$lab,$cw-8,$ch-8); $im.Dispose() }
  $g.DrawString($c.label,$font,[System.Drawing.Brushes]::Black,($x+4),($y+4))
}
$out=Join-Path $PSScriptRoot 'compare.png'
$bmp.Save($out,[System.Drawing.Imaging.ImageFormat]::Png); $g.Dispose(); $bmp.Dispose()
"saved: $out"
