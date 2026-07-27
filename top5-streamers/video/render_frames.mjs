import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const DIR = path.dirname(fileURLToPath(import.meta.url));
const PAGE = process.env.PAGE || 'index.html';
const W = Number(process.env.W || 1280);
const H = Number(process.env.H || 720);
const framesDir = path.join(DIR, process.env.FRAMES || 'frames');
fs.rmSync(framesDir, { recursive: true, force: true });
fs.mkdirSync(framesDir, { recursive: true });

const FPS = Number(process.env.FPS || 24);
const MAXF = process.env.MAXF ? Number(process.env.MAXF) : null;

const browser = await chromium.launch({ headless: true, args: ['--force-color-profile=srgb'] });
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
await page.goto('file://' + path.join(DIR, PAGE));
await page.waitForFunction('window.__ready === true');
const total = await page.evaluate('window.__total');
let N = Math.ceil(total * FPS);
if (MAXF) N = Math.min(N, MAXF);

const t0 = Date.now();
for (let f = 0; f < N; f++) {
  const t = f / FPS;
  await page.evaluate((tt) => window.renderAt(tt), t);
  await page.screenshot({
    path: path.join(framesDir, String(f).padStart(5, '0') + '.jpg'),
    type: 'jpeg', quality: 90,
  });
  if (f % 100 === 0) {
    const el = (Date.now() - t0) / 1000;
    console.log(`frame ${f}/${N}  ${el.toFixed(1)}s  (${(f / Math.max(el,0.01)).toFixed(1)} fps)`);
  }
}
console.log(`DONE ${N} frames in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
await browser.close();
