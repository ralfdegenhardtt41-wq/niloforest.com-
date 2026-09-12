// Erzeugt die Download-PDFs aus den Druckvorlagen unter dist/print/ mit Headless Chrome.
// Aufruf: npm run build && node scripts/make-pdfs.mjs
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const chrome = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
].find((p) => existsSync(p));
if (!chrome) throw new Error('Chrome not found');

const jobs = [
  ['dist/print/field-placement/index.html', 'public/downloads/Nilo_Forest_Field_Placement.pdf'],
  ['dist/print/feldaufenthalt/index.html', 'public/downloads/Nilo_Forest_Feldaufenthalt_DE.pdf'],
];
mkdirSync('public/downloads', { recursive: true });
for (const [src, out] of jobs) {
  execFileSync(chrome, [
    '--headless=new', '--disable-gpu', '--no-pdf-header-footer',
    `--print-to-pdf=${resolve(out)}`, `file://${resolve(src)}`,
  ], { stdio: 'ignore' });
  console.log('wrote', out);
}
