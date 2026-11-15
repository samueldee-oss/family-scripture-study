// Double-check a week's game before it goes live.
//   node tools/check-week.js weeks/<folder>/index.html
// 1. Every verse in TEXT is compared word-for-word with the KJV (fetched from GitHub).
// 2. Flags any non-English characters (accents, other alphabets) in verses, questions, word help.
// 3. Prints each day's date + weekday so you can compare with the Come, Follow Me manual.
const fs = require('fs'), https = require('https'), vm = require('vm');
const file = process.argv[2];
if (!file) { console.log('usage: node tools/check-week.js weeks/<folder>/index.html'); process.exit(1); }
const html = fs.readFileSync(file, 'utf8');
const KJV_URL = 'https://raw.githubusercontent.com/thiagobodruk/bible/master/json/en_kjv.json';
const BOOKS = { 'Song of Solomon':'Song of Solomon', Psalm:'Psalms' };

function grab(name) { // pull `const NAME = {...};` / [...] out of the page and evaluate it
  const m = html.match(new RegExp('const ' + name + '\\s*=\\s*([\\[{])'));
  if (!m) return null;
  let i = m.index + m[0].length - 1, depth = 0, q = null;
  for (let j = i; j < html.length; j++) {
    const c = html[j];
    if (q) { if (c === '\\') j++; else if (c === q) q = null; continue; }
    if (c === '"' || c === "'" || c === '`') q = c;
    else if (c === '{' || c === '[') depth++;
    else if ((c === '}' || c === ']') && --depth === 0) {
      try { return vm.runInNewContext('(' + html.slice(i, j + 1) + ')', {}); } catch (e) { return null; }
    }
  }
}
const norm = s => s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"')
  .replace(/[^A-Za-z' ]/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
const nonEnglish = s => (s.match(/[^\x00-\x7F‘’“”–—… ·→←•]/gu) || [])
  .filter(ch => !/\p{Extended_Pictographic}|️|‍/u.test(ch));

https.get(KJV_URL, res => { let d = ''; res.setEncoding('utf8'); res.on('data', c => d += c); res.on('end', () => run(JSON.parse(d.replace(/^﻿/, '')))); })
  .on('error', e => { console.log('Could not fetch KJV:', e.message); process.exit(2); });

function run(bible) {
  let problems = 0;
  const TEXT = grab('TEXT');
  if (!TEXT) { console.log('No TEXT object found'); process.exit(2); }
  for (const key of Object.keys(TEXT)) {
    let m = key.match(/^(.*\D)\s+(\d+)$/);
    if (!m && /^\d+$/.test(key)) { // older weeks key TEXT by chapter only: take the book from the page title
      const t = (html.match(/<title>([^<]*)/) || [, ''])[1];
      const bk = bible.find(x => new RegExp('\\b' + x.name + '\\b', 'i').test(t));
      m = [, bk ? bk.name : '?', key];
    }
    const [, bookRaw, ch] = m;
    const book = BOOKS[bookRaw] || bookRaw;
    const b = bible.find(x => x.name.toLowerCase() === book.toLowerCase());
    if (!b) { console.log('❌ Unknown book:', bookRaw); problems++; continue; }
    for (const [v, txt] of Object.entries(TEXT[key])) {
      const ref = `${key}:${v}`, real = (b.chapters[+ch - 1] || [])[+v - 1];
      const odd = nonEnglish(txt);
      if (odd.length) { console.log(`❌ ${ref} has non-English characters: ${[...new Set(odd)].join(' ')}`); problems++; }
      if (!real) { console.log(`❌ ${ref} does not exist in the KJV`); problems++; continue; }
      const realClean = real.replace(/\{[^}]*\}/g, ''); // strip translator notes some sources include
      if (norm(txt) !== norm(realClean)) {
        const a = norm(txt).split(' '), r = norm(realClean).split(' ');
        let i = 0; while (i < a.length && a[i] === r[i]) i++;
        console.log(`❌ ${ref} differs from KJV near: "${a.slice(i, i + 6).join(' ')}" (KJV: "${r.slice(i, i + 6).join(' ')}")\n     KJV: ${realClean}`);
        problems++;
      }
    }
  }
  // Non-English characters anywhere else in the week's data (questions, word help, lessons)
  const LEVELS = grab('LEVELS');
  if (LEVELS) {
    const walk = (o, path) => {
      if (typeof o === 'string') { const odd = nonEnglish(o); if (odd.length) { console.log(`❌ ${path} has non-English characters: ${[...new Set(odd)].join(' ')}  → "${o.slice(0, 80)}"`); problems++; } }
      else if (o && typeof o === 'object') for (const k in o) walk(o[k], path + '.' + k);
    };
    walk(LEVELS, 'LEVELS');
  }
  // Dates
  const titleDates = (html.match(/<title>[^<]*<\/title>/) || [''])[0];
  console.log('\n📅 Page title:', titleDates.replace(/<\/?title>/g, ''));
  const keyM = html.match(/pip-(\d{4}-\d{2}-\d{2})|['"]([a-z-]*\d{4}-\d{2}-\d{2})['"]/);
  if (keyM) {
    const iso = keyM[1] || keyM[2].match(/\d{4}-\d{2}-\d{2}/)[0];
    const d = new Date(iso + 'T12:00:00');
    console.log(`📅 Storage key date ${iso} is a ${d.toLocaleDateString('en-US', { weekday: 'long' })} (CFM weeks start on Monday)`);
  }
  console.log('📅 Compare the dates above with the manual lesson page AND the WEEKS entry in index.html.');
  console.log(problems ? `\n${problems} problem(s) found — fix before going live.` : '\n✅ All verses match the KJV and no non-English text was found.');
  process.exit(problems ? 1 : 0);
}
