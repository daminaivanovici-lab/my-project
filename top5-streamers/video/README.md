# Video — motion graphics "Top 5 Streamers" (randat)

`top5-streamers.mp4` — video randat (83s, 1280×720, H.264 + audio bed), în formatul
videourilor de ranking: cold open → intro → countdown #5→#1 → outro/CTA. Fiecare poziție
are card cu numărul, nume, cifră animată, caption din script și un **slot de clip** unde
pui footage-ul real al streamerului (query-ul de căutare e scris chiar pe slot).

> Stratul de grafică/montaj e complet. Ce mai adaugi în edit: **clipurile reale** ale
> streamerilor în sloturi, **voice-over** (scriptul din `../01-script.md`) și, dacă vrei,
> muzica ta (audio-ul actual e doar un bed subtil de tensiune).

## Cum îl re-randezi / modifici
Necesită Node + Playwright (Chromium) și un ffmpeg full (ex. `imageio-ffmpeg`).

```bash
export PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers NODE_PATH=/opt/node22/lib/node_modules
# 1) capturează cadrele (deterministic, 24fps)
FPS=24 node render_frames.mjs
# 2) encodează în MP4 cu audio bed
bash encode.sh
```

## Ce editezi ușor
- **Textele / topul / cifrele / captions:** array-ul `RANKS` din `index.html`.
- **Timing-ul fiecărui segment:** array-ul `T` din `index.html` (start/dur în secunde).
- **Culori / stil:** variabilele CSS din `<style>` (`--cyan`, `--mag`, `--gold`).
- **Audio:** filtrul din `encode.sh` (sau înlocuiește cu track-ul tău în edit).

## Fișiere
- `index.html` — animația (funcție deterministă `renderAt(t)`, randare cadru-cu-cadru).
- `render_frames.mjs` — capturează cadrele cu Playwright.
- `encode.sh` — asamblează cadrele în MP4 + audio bed (ffmpeg).
- `render.mjs` — variantă veche (record direct); lăsată ca referință.
