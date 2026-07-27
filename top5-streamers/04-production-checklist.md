# 04 — Checklist de producție (de la script la upload)

Bifează în ordine. Țintă: un video care arată **exact ca** cele de ranking de top.

## A. Pre-producție
- [ ] Confirmă Top 5-ul (implicit: TimTheTatman, Ludwig, MrBeast, Kai Cenat, IShowSpeed)
- [ ] Confirmă limba narațiunii (script-ul e în EN; pot da varianta RO)
- [ ] Strânge clipurile din `02-clips.md` (query-urile + duratele)
- [ ] Alege 1 track muzical care **crește** în intensitate spre final (fără copyright)
- [ ] Alege 2–3 SFX (whoosh la tranziții, "ding" la cardul poziției)

## B. Voice-over
- [ ] Înregistrează VO după `01-script.md` (ton energic, ritm rapid)
- [ ] SAU generează VO AI (vidIQ `voiceover_generate` — necesită credite)
- [ ] Normalizează volumul, taie pauzele moarte

## C. Montaj (respectă blueprint-ul din `00`)
- [ ] Cold open 0–6s = cel mai tare clip (IShowSpeed), fără nume
- [ ] Intro cu titlu animat + montaj rapid al celor 5
- [ ] Countdown #5→#1, fiecare cu: card poziție → identitate → cifră → clipuri → de ce
- [ ] Numărul poziției mereu vizibil în colț
- [ ] Text pe ecran: nume + cifră la fiecare segment
- [ ] Tăietură/zoom la fiecare 4–6s (fără plan static lung)
- [ ] Muzica urcă la #1; clipurile #1 sunt cele mai lungi
- [ ] Outro: recap grid #5→#1 + CTA (like/subscribe/comment) + end screen 5s
- [ ] Captions/subtitrări pe tot (mulți se uită fără sunet)

## D. Ambalaj (din `03-seo-metadata.md`)
- [ ] Titlu (recomandat: "Top 5 BIGGEST YouTube Streamers Right Now (2026)")
- [ ] Thumbnail: 5 fețe, #1 cel mai mare, text `TOP 5 STREAMERS`
- [ ] Descriere cu timestamps + credite canale
- [ ] Tag-uri
- [ ] Card-uri + end screen setate în YouTube Studio

## E. Publicare
- [ ] Programează la o oră de vârf pentru audiența ta
- [ ] Postează și un **Short** (varianta din `01-script.md`) ca teaser spre long-form
- [ ] Fixează un comentariu cu întrebarea "Cine lipsește din top?"

---

## Ce pot automatiza cu vidIQ când revin creditele (9 aug 2026 sau după top-up)
| Tool                    | Ce face                                             |
|-------------------------|-----------------------------------------------------|
| `vidiq_youtube_search`  | Găsește clipurile reale + verifică ce e viral acum  |
| `vidiq_score_title`     | Dă scor CTR titlurilor și alege câștigătorul        |
| `vidiq_generate_script` | Variante alternative de script                      |
| `vidiq_voiceover_generate` | Voice-over AI din scriptul din `01`              |
| `vidiq_generate_thumbnail` / `score_thumbnail` | Thumbnail + scor + A/B        |
| `vidiq_generate_video` / `vidiq_compose` | Asamblare video (dacă vrei full auto)  |

Zi-mi când ai credite și pornesc pipeline-ul automat.
