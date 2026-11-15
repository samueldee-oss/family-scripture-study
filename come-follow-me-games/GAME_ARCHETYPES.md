# Game archetypes, drawn from the K12sdfun repo

Our CFM games have mostly used the same handful of "tap/catch/avoid" mechanics (`rise`, `fall`,
`storm`, `wander`, `pop`, `swim` in the engine). Those are fine for a few days a week, but the
**K12sdfun** repo (`samueldee-oss/k12-sd-fun`) has a lot of other game *shapes* the author has
already built and liked. This file distills each one into a short, story-agnostic archetype so the
weekly prompt can match one to each day's reading instead of defaulting to another bubble-catcher.

**Target split:** at most **3 of the 7 days** a week should be a quick tap/catch/avoid game (the
existing `rise`/`fall`/`storm`/`wander`/`pop`/`swim` engine). The other **4 days** should each draw
from a different archetype below, picked for fit with that day's story. One day already gets the
"richer, more interactive" treatment per `CLAUDE.md` (⭐) — that can be any archetype here, not only
the side-scroller.

Every archetype keeps the CFM rules: Little/Big Kids modes, a checkpoint question at the
~50% mark, a win screen with the lesson and a "Bring it home" question, mobile-first, one
self-contained file. Build each as a small original CFM mini-game in that *shape* — never copy
art, names, or code wholesale from K12sdfun; it's a reference for mechanics, not assets.

## 1. Lane defense (from Sprout Siege)
**Shape:** Threats approach in lanes from one side; the player places or triggers defenders/helps
along the lanes to stop them before they reach a goal line.
**Good for:** stories about standing firm, protecting something, a watchman or guard, a city under
siege, patience under pressure (e.g., Nehemiah's wall, a watchman story, "put on the armor of God").
**Checkpoint spot:** right as a new threat type first appears.
**Keep it simple:** 1 lane or 3, a handful of "defender" taps, no economy/currency needed.

## 2. Lane battle / push-the-line (from Capybara Rumble)
**Shape:** Two sides push toward each other along a line; the player deploys helpers to tip the
balance and push the "front line" toward the far side.
**Good for:** a contest of faith vs. doubt, a battle story, overcoming an obstacle through steady
small efforts (each deploy = a small act of faith pushing back darkness).
**Checkpoint spot:** when the line is pushed halfway.

## 3. Catch-everything, no-fail (from Kitty & Lotl)
**Shape:** Gentle items fall or float by; the player catches good ones by sliding side to side.
Nothing is ever truly lost — a miss just has a soft, funny reaction. Milestone scores unlock small
delightful surprises.
**Good for:** little readers' days, gathering/blessing stories (manna, loaves and fishes, gathering
the lost sheep), anything where the tone should be purely comforting with no fail state.
**Checkpoint spot:** at a milestone count rather than a timer.

## 4. Crafting / combine-to-discover (from Endless Crucible)
**Shape:** Drag two "ingredient" items together to discover a new one; build up a small tree of
discoveries from a few starting pieces.
**Good for:** creation stories, "line upon line, precept upon precept" growth, parables about small
things growing (mustard seed, leaven), genealogy/building-up themes.
**Checkpoint spot:** after the 2nd or 3rd discovery, before the final target item.
**Simplify:** a small fixed recipe list (no live AI needed) — 6–10 combinations max for one day.

## 5. Turn-based "talk it down" encounter (from Mothwick's Lantern)
**Shape:** A simple menu-driven encounter (ACT / give / wait) where choosing kindness/patience
repeatedly, instead of "fighting," is the way to resolve it peacefully.
**Good for:** reconciliation stories, turning away wrath with a soft answer, Jonah/Nineveh,
forgiveness stories, a hard conversation resolved gently.
**Checkpoint spot:** after the first successful "kind" choice, before the resolution.
**Simplify a lot:** 2–3 menu choices, a short meter instead of HP, no real "damage."

## 6. 3D deduction / explore-and-find (from Poirot the Pigeon)
**Shape:** Walk a small top-down map between a few rooms/locations; in each one, look closely
(tap/drag a magnifier or a highlight) to find clues; gather clues toward one true answer at the end.
**Good for:** mystery/discovery stories, "seek and ye shall find," searching the scriptures,
Joseph in Egypt, any story with several locations and a truth revealed at the end.
**Checkpoint spot:** after finding clues in 2 of 3 locations.
**Simplify:** flat 2D map is fine — the 3D-ness isn't the point, the search-and-reveal is.

## 7. Rhythm auto-runner (from Prism Sprint)
**Shape:** A character moves forward automatically; the player only taps at the right moment to
jump/avoid obstacles in rhythm, with instant respawn so failing is cheap and quick.
**Good for:** "press forward," steady obedience, a journey story with a repeating beat (wilderness
wandering, a pilgrimage), days with lively background music.
**Checkpoint spot:** at the midpoint of the track/song.

## 8. Trick-combo endless runner (from Rooftop Flow)
**Shape:** A runner crosses obstacles; chaining good moves quickly (jump, slide, vault) builds a
combo/multiplier, rewarding "keep moving" over playing it safe.
**Good for:** stories about boldness and faith in motion (Peter walking on water, "fear not"), a
chase or escape, momentum/courage themes.
**Checkpoint spot:** first time the player lands 3 tricks in a row (first combo).

## 9. Incremental / "it adds up" clicker (from Sensory Overload, inverted tone)
**Shape:** Repeated small taps build toward a goal; each tap/purchase visibly adds more to the
scene. (Sensory Overload uses this to satirize over-stimulation — for CFM, point the "it adds up"
idea at something wholesome instead: small acts of service, daily scripture reading, seeds of faith.)
**Good for:** "by small and simple things," consistency/habit lessons, parable of the sower,
talents multiplying.
**Checkpoint spot:** at a milestone total, not a timer.
**Caution:** keep it short and wholesome — the source game's joke is about overload, which is the
opposite of the CFM lesson, so build a clean, positive version of the loop, not the satire.

## 10. Single-arena boss encounter, support role (from Thistle King)
**Shape:** One small arena; instead of attacking, the player must repeatedly fetch/deliver
something (not fight directly) to resolve the encounter — doing the harder, indirect thing.
**Good for:** stories where the solution isn't force (Daniel in the lion's den, Gideon's small
army, "the battle is the Lord's"), a rescue that requires fetching/bringing something to someone.
**Checkpoint spot:** after the first successful delivery.

## 11. Word-rule puzzle (from Rulebound)
**Shape:** Rules of the world are physical blocks the player can push around (e.g., "WALL IS
STOP"); changing a rule changes what's possible, and the player solves small puzzles by rearranging
rules, not by acting directly on the world.
**Good for:** commandment/law stories, "if ye keep my commandments," cause-and-effect lessons,
stories where changing one thing (a choice, a law, a heart) changes everything else.
**Checkpoint spot:** solving the first of 2–3 small puzzle rooms.
**Simplify a lot:** 2–4 tiny puzzles with 1–2 rule blocks each, not a 90-level game.

## 12. Two-paddle reflex game (from Pong)
**Shape:** The simplest possible reflex game — keep something moving between two points without
letting it fall.
**Good for:** a quick warm-up day, "keep the faith," back-and-forth stories (a dialogue,
question-and-answer), or when the week needs one very easy/short day.
**Checkpoint spot:** first time the player reaches a target number of volleys.

---

## How to use this each week
When planning the 7 days (CLAUDE.md step 2 / WEEKLY_PROMPT.md step 2), for each day:
1. Note the day's story in one phrase.
2. Scan this list for an archetype whose "Good for" fits that phrase.
3. Assign archetypes so **at most 3 days** use the plain tap/catch/avoid engine, and the **other 4
   use 4 different archetypes from this list** (don't repeat an archetype within the same week).
4. Show the archetype choice in the planning table (add an "archetype" column) before building.
5. If genuinely nothing fits a day, it's fine to fall back to the tap/catch engine for a 4th day —
   but try the match first; most CFM stories map cleanly onto at least one archetype here.

This list can grow: if K12sdfun gets new games, read their `docs/games/<name>.md` design spec
(or the live `index.html` if no spec exists) and add a short entry here in the same format.
