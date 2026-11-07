# Family Scripture Study

Our family's Come, Follow Me games (Old Testament 2026), packaged as one
**Home Screen app** called *Scripture Trail*. The app opens on the trail; tap a
week's friend to play that week's game.

| Page | File | Original claude.ai artifact |
|---|---|---|
| 🏞️ Scripture Trail (hub, app start page) | [`index.html`](index.html) | https://claude.ai/artifact/5hWMgs2fzqj2LWWxBo3Xoc |
| 🦉 Pip the Watchman — Ezekiel (Nov 2–8, 2026) | [`weeks/2026-11-02-pip-the-watchman/index.html`](weeks/2026-11-02-pip-the-watchman/index.html) | https://claude.ai/artifact/9qm8LcCZUq8rWqyZLm6Wcm |
| 🦁 Brave Like Daniel — Daniel 1–7 (Nov 9–15, 2026) | [`weeks/2026-11-09-brave-like-daniel/index.html`](weeks/2026-11-09-brave-like-daniel/index.html) | (preview, see below) |

## Home Screen app
- `manifest.webmanifest`: app name, colours, icons.
- `icons/`: Pip-on-the-trail icon, drawn in `tools/icon.svg`. Rebuild the PNGs with `node tools/make-icons.js`.
- `sw.js`: offline support. Pages come from the network when online and from the saved copy when offline.
- The pages link to each other with relative paths, so everything stays inside the app.

To install on an iPhone or iPad: open the site in **Safari**, tap **Share → Add to Home Screen**, then launch it from the new icon.
Progress in the app is saved separately from progress in Safari.

## Adding a week
1. Put the new game in `weeks/<start-date>-<slug>/index.html`, with the same Home Screen `<head>` tags and service worker snippet as Pip, and its "All weeks" button pointing to `../../`.
2. Add an entry to the `WEEKS` array in `index.html` with `url:'weeks/<folder>/'` (and a scene in `SCENES` for custom scenery).
3. Add the folder to `PAGES` in `sw.js` and bump `VERSION`.

Context for Claude and the weekly prompt: [`CLAUDE.md`](CLAUDE.md), [`WEEKLY_PROMPT.md`](WEEKLY_PROMPT.md).
