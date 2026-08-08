Add-Type -AssemblyName System.Drawing
$base = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises'
$tmp  = Join-Path $env:TEMP 'exCompare3'
if (-not (Test-Path $tmp)) { New-Item -ItemType Directory -Path $tmp | Out-Null }

$cands = @(
  @{ label='A Close-Grip Bench (start)';   id='Close-Grip_Barbell_Bench_Press'; n=0 },
  @{ label='A Close-Grip Bench (end)';     id='Close-Grip_Barbell_Bench_Press'; n=1 },
  @{ label='B Reverse Grip Pushdown (st)'; id='Reverse_Grip_Triceps_Pushdown'; n=0 },
  @{ label='B Reverse Grip Pushdown (en)'; id='Reverse_Grip_Triceps_Pushdown'; n=1 },
  @{ label='C Dip Machine (start)';        id='Dip_Machine'; n=0 },
  @{ label='C Dip Machine (end)';          id='Dip_Machine'; n=1 },
  @{ label='D V-Bar Pushdown (start)';     id='Triceps_Pushdown_-_V-Bar_Attachment'; n=0 },
  @{ label='D V-Bar Pushdown (end)';       id='Triceps_Pushdown_-_V-Bar_Attachment'; n=1 }
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
