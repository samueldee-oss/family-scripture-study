# Come, Follow Me weekly game — context for Claude

A single-file HTML game made fresh each week for our family's morning Come, Follow Me study.
The first one is `weeks/2026-11-02_ezekiel/index.html` ("Pip the Watchman"), which is the
reference implementation: copy its engine and change the week's content.
If the repo isn't available, the same game is published as a claude.ai artifact
(slug `47980111-79ac-4d13-bece-f90679951396`, https://claude.ai/artifact/9qm8LcCZUq8rWqyZLm6Wcm);
read it with the artifacts tool to use it as the template.

## Who it's for and how we use it
- Mixed-age kids (little readers and big kids) studying together, about 15–20 minutes each morning.
- One level per day, **Sunday through Saturday** (7 days), covering that week's assigned reading.
- We can usually read only **about half a chapter (≈12–17 verses) per session**. We prefer reading
  real chunks of the assigned text over only the manual's key verses, but each day must still teach
  one main lesson from the manual.
- We also watch the "Thumb Follow Me" YouTube channel (puppet-style kids' CFM videos). Claude
  can't read YouTube transcripts; if we want them used, we paste them in.

## Required structure for each day (gated, in this order)
1. **Read together** — the day's ~half chapter shown *in the app* as KJV text with verse numbers,
   split into 3 parts. Each part has:
   - a "Word help" line for hard words (e.g., `forbear = refuse to listen`)
   - a link to the chapter in Gospel Library
   - a "We read it out loud! Ask me" button → a multiple-choice question on a specific detail
     from those verses (4 options). Wrong answer → "Look again at verse N", 3-second wait,
     reshuffle. The next part stays locked until it's right.
   - **Easy verses** (short or mostly sight words) shown in **bold indigo** (`#3f37c9`), listed in
     an `EASY` set like `'34:11'`. Aim for 2+ per day; skip short verses with hard words.
     A legend appears only on parts that contain one.
2. **Today's lesson** — one principle from that week's Come, Follow Me manual headings (or the
   Primary manual's), plus a **key verse builder**: tap 4–6 shuffled phrase chips in order.
   Completing it adds the lesson to the **Watchman's Journal** on the home screen and shows
   two talk questions (LITTLE / BIG).
3. **Play the level** — unlocked only after the verse is built. An action mini-game themed on the
   reading, with a **mid-game checkpoint question** at 50% that must be answered to continue.
   The win screen shows the lesson again plus a "Bring it home" question.

## Other features to keep
- Days unlock in order (day N needs day N−1's verse built). Small "Parent: unlock all days" and
  "Reset progress" links (in-page confirm, no alert()).
- Finished day cards show **📖 Read** (resets just that day's reading so we can redo it; day stays
  completed) and **🎮 Play** (jumps straight into the game). By Saturday every game is replayable.
- Modes: 🐣 Little Kids (no timer, no penalties) and 🦅 Big Kids (≈1.6× goal, faster, 70 s timer,
  3 lives, "bad" items to avoid). Badges 📓 🐣 🦅 on each day card; "Today" highlight from getDay().
- Game mechanics available in the engine: `rise`, `fall` (catch with basket), `storm` (tap before
  it reaches the village), `wander`, `pop` (with `turn` emoji), `swim`. Vary them across the week.
- Progress lives in localStorage (wrapped in try/catch). Bump the storage key each new week
  (e.g., `pip-2026-11-09`) so weeks don't collide.
- Mobile-first, big tap targets, emoji art, original mascot (Pip the owl or a new original one).

## Getting the content right
- Find the week's dates/reading and the manual's principle headings first. The 2026 manual URL
  pattern is `https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/<lesson#>?lang=eng`
  (Nov 2–8 was lesson 45). The Primary manual (2022 OT) has kid-friendly headings too.
- Web tools won't return long verbatim text from churchofjesuschrist.org and the shell can't reach
  most sites, so KJV text gets typed in by Claude. Be careful, and spot-check key verses against
  search results. Each part keeps a Gospel Library link so the family can compare.
- Questions must be answerable from the verses shown in that part. Put the correct option first in
  the data; the app shuffles.
- **Tone of questions (family feedback, Nov 7):** write them the way Come, Follow Me does —
  edifying, encouraging, inviting kids to apply the story and feel the Spirit. Don't frame things
  comparatively ("In our Church, what is…") or lecture on background context. Prefer "What does
  this teach us about Heavenly Father / Jesus?" or "How can we be like Daniel?" Keep it light.

## Games: variety (family feedback, Nov 7)
- The quick tap/catch games are fine, but they feel alike. **Each week, make at least one day a
  richer, more interactive game** built around that week's most vivid story — e.g., a side-scrolling
  jump-and-run (`motion:'run'`, first used for Daniel 6: Roar jumps over decrees to reach the
  window toward Jerusalem three times a day, sky changes morning → noon → evening, checkpoint
  question after the 2nd window), or a small Stardew-style walk-around scene. Mark it ⭐.
- Icons/mascots: the family loves the emoji icons. Never use a human face for an animal (e.g., no
  😌 for a sleeping lion); if no emoji fits, draw a small inline SVG (see `SLEEPY_LION` in the
  Daniel week).

## Build, test, publish
- One self-contained `index.html` (inline CSS/JS, no external assets).
- Test with Playwright (preinstalled): check that every verse referenced exists in `TEXT`, then
  click through all 7 days (parts → verse → game → checkpoint) and confirm there are no page errors.
- Publish as a claude.ai artifact (private until shared). Save the file to
  `weeks/<YYYY-MM-DD of Monday>_<book>/index.html` and commit.

## Scripture Trail home page (`index.html` in this folder)
The hub where we find every week's game: a horizontal landscape that grows one segment per week,
each with that week's original mascot (week 1 = Pip the owl on a city wall by the temple river),
plus a card list. Published as artifact slug `260c65aa-a683-47c1-92ab-9727b97d6177`
(https://claude.ai/artifact/5hWMgs2fzqj2LWWxBo3Xoc).
Every new week:
1. Give the week a **new original mascot** (emoji) and a themed scene.
2. Add an entry to `WEEKS` (start/end ISO dates of the CFM week, dates label, title, mascot, ref,
   scene key, artifact url) and add a scene function to `SCENES` (draw within one 420px segment;
   update `mascotPos` if the mascot should stand on something).
3. In the new game, keep the "🏞️ All weeks" button linking to the Scripture Trail URL.
4. Republish the hub (same slug) and the new game; screenshot the trail to check it.

## GitHub + Home Screen app (the live setup, as of Nov 7, 2026)
Repo `samueldee-oss/family-scripture-study` (public). The family set it up as an installable
Home Screen app ("Scripture Trail"); the live branch is `claude/optimistic-cerf-jr0qfk`.
The repo layout is flatter than the folders above, and the repo README is the authority on it:
- `index.html` (repo root) = the Scripture Trail hub; `weeks/<YYYY-MM-DD>-<slug>/index.html` = each game
  (e.g. `weeks/2026-11-02-pip-the-watchman/`, `weeks/2026-11-09-brave-like-daniel/`).
- Each game keeps the Home Screen `<head>` tags + service-worker snippet, and its "All weeks"
  button points to `../../`. Hub `WEEKS` urls are relative (`weeks/<folder>/`).
- New week → also add its folder to `PAGES` in `sw.js` and bump `VERSION`.
- **Preview before going live:** build on a branch `preview/<date>-<slug>`, publish a private
  artifact copy (strip manifest/icon/SW tags, point "All weeks" at the hub artifact, add a
  🧪 Game tester panel that jumps straight into each day's game), and wait for the parent to say
  "go live" before merging into the live branch. The parent mainly tests the games.

## Weekly prompt
See `WEEKLY_PROMPT.md`.
