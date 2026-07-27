import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import path from 'path';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const DIR = path.dirname(fileURLToPath(import.meta.url));
const recDir = path.join(DIR, 'rec');

const browser = await chromium.launch({
  headless: true,
  args: ['--autoplay-policy=no-user-gesture-required', '--force-color-profile=srgb'],
});
const context = await browser.newContext({
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 1,
  recordVideo: { dir: recDir, size: { width: 1920, height: 1080 } },
});
const page = await context.newPage();
await page.goto('file://' + path.join(DIR, 'index.html'));

console.log('recording…');
await page.waitForFunction('window.__done === true', { timeout: 100000 }).catch(() => console.log('timeout fallback'));
await page.waitForTimeout(400);

const video = page.video();
await context.close();           // finalizes the webm
const out = await video.path();
await browser.close();
console.log('VIDEO:' + out);
