// Renders tools/icon.svg to the PNG app icons. Run from the repo root: node tools/make-icons.js
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const svg = fs.readFileSync(path.join(__dirname, 'icon.svg'), 'utf8');
const SIZES = { 'apple-touch-icon.png': 180, 'icon-192.png': 192, 'icon-512.png': 512 };
(async () => {
  const browser = await chromium.launch();
  for (const [name, size] of Object.entries(SIZES)) {
    const page = await browser.newPage({ viewport: { width: size, height: size } });
    await page.setContent(`<style>html,body{margin:0}svg{display:block;width:${size}px;height:${size}px}</style>${svg}`);
    await page.screenshot({ path: path.join(__dirname, '..', 'icons', name) });
    await page.close();
  }
  await browser.close();
})();
