#!/usr/bin/env bash
set -euo pipefail
FF=/usr/local/lib/python3.11/dist-packages/imageio_ffmpeg/binaries/ffmpeg-linux-x86_64-v7.0.2
D=36.4
cd "$(dirname "$0")"

"$FF" -y -hide_banner -loglevel error \
  -framerate 30 -i sframes/%05d.jpg \
  -f lavfi -i "sine=frequency=110:duration=$D" \
  -f lavfi -i "sine=frequency=164.81:duration=$D" \
  -f lavfi -i "aevalsrc=0.9*sin(2*PI*55*t)*exp(-10*mod(t\,0.43)):s=44100:d=$D" \
  -filter_complex "[1][2]amix=inputs=2:normalize=0,tremolo=f=0.14:d=0.5,lowpass=f=520,volume=0.13[pad];[3]lowpass=f=170,volume=0.5[kick];[pad][kick]amix=inputs=2:normalize=0,afade=t=in:st=0:d=0.8,afade=t=out:st=34.9:d=1.5[a]" \
  -map 0:v -map "[a]" \
  -c:v libx264 -pix_fmt yuv420p -crf 20 -preset medium -r 30 \
  -c:a aac -b:a 160k -shortest -movflags +faststart \
  top5-streamers-short.mp4

echo "ENCODED:"; ls -la top5-streamers-short.mp4
