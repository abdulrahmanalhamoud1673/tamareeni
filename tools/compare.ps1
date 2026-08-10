Add-Type -AssemblyName System.Drawing
$base = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises'
$tmp  = Join-Path $env:TEMP 'exCompare4'
if (-not (Test-Path $tmp)) { New-Item -ItemType Directory -Path $tmp | Out-Null }

$cands = @(
  @{ label='A One-Arm DB Row (start)';   id='One-Arm_Dumbbell_Row'; n=0 },
  @{ label='A One-Arm DB Row (end)';     id='One-Arm_Dumbbell_Row'; n=1 },
  @{ label='B Straight-Arm Pulldown (s)';id='Straight-Arm_Pulldown'; n=0 },
  @{ label='B Straight-Arm Pulldown (e)';id='Straight-Arm_Pulldown'; n=1 },
  @{ label='C Face Pull (start)';        id='Face_Pull'; n=0 },
  @{ label='C Face Pull (end)';          id='Face_Pull'; n=1 },
  @{ label='D Reverse Flyes DB (start)'; id='Reverse_Flyes'; n=0 },
  @{ label='D Reverse Flyes DB (end)';   id='Reverse_Flyes'; n=1 },
  @{ label='E Bent Over DB Row (start)'; id='Bent_Over_Two-Dumbbell_Row'; n=0 },
  @{ label='E Bent Over DB Row (end)';   id='Bent_Over_Two-Dumbbell_Row'; n=1 }
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
