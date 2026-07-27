#!/usr/bin/env bash
set -euo pipefail
FF=/usr/local/lib/python3.11/dist-packages/imageio_ffmpeg/binaries/ffmpeg-linux-x86_64-v7.0.2
D=83.7
cd "$(dirname "$0")"

"$FF" -y -hide_banner -loglevel error \
  -framerate 24 -i frames/%05d.jpg \
  -f lavfi -i "sine=frequency=98:duration=$D" \
  -f lavfi -i "sine=frequency=146.83:duration=$D" \
  -f lavfi -i "aevalsrc=0.8*sin(2*PI*55*t)*exp(-9*mod(t\,0.5)):s=44100:d=$D" \
  -filter_complex "[1][2]amix=inputs=2:normalize=0,tremolo=f=0.1:d=0.5,lowpass=f=480,volume=0.12[pad];[3]lowpass=f=160,volume=0.42[kick];[pad][kick]amix=inputs=2:normalize=0,afade=t=in:st=0:d=1.5,afade=t=out:st=81.7:d=2[a]" \
  -map 0:v -map "[a]" \
  -c:v libx264 -pix_fmt yuv420p -crf 20 -preset medium -r 24 \
  -c:a aac -b:a 160k -shortest -movflags +faststart \
  top5-streamers.mp4

echo "ENCODED:"
ls -la top5-streamers.mp4
