# Nightbound

A grid-tactics RPG for phones, in the style of GBA Fire Emblem. It runs on the Ember March engine.

Twenty years ago a bell rang across the world. Now everyone hears it once, on the night they turn eighteen, and is pulled into a Trial. Pass it and you come home stronger. Fail and you stay behind as one of the Fallen.

## Run it
Open `index.html` in a browser. Keep the `heroes/` folder beside it.

## Layout
- `index.html`: the engine, rules, map, chapters and story.
- `heroes/*.js`: one file per playable character (stats, growths, items, look, the skill learned at Lv 10 as `lv10`, and any Talk conversation). To add a hero, copy a file, edit it, and add a `<script src="heroes/name.js">` line in `index.html`.

## Skills and classes
- Each unit has a free personal skill, a free skill learned at Lv 10, and room for scroll skills up to a capacity of 20 (25 after ascending).
- Skill costs and descriptions are in `SKILLS` in `index.html`. Each skill has a matching scroll item (`scroll_<id>`).
- At Lv 10 or higher, an Ascension Fragment changes a unit's class (the `promo` field in `CLS`): stat bonuses, extra weapon types, +5 capacity, and the level resets to 1.

## Teams
- Blue: your units. Red: enemies. Green: "other" units that fight the enemy on their own turn (the Other Phase) and can be recruited by Talking with the lord.
- Recruits live in `heroes/` like any hero. Place them with `recruitFoe(id,x,y)` (enemy side) or `recruitGreen(id,x,y)` (green) in a chapter's `foes()`.

## Chapters (the first Nightmare)
`CH` in `index.html` holds eight chapters. Each can set:
- `goal`: `rout`, `boss`, `defend` (with `turns`), `reach` (get the lord to an `X` tile) or `duel` (lord vs the turncoat, then `horde()` with the party at `start2`).
- `protect`: a unit id that must survive. `join` / `leave`: units added for the chapter or removed after it. `reward`: an item given to a unit on a win.
- `waves`: `{turn: () => [foes]}` reinforcements. `traps`: hidden tiles that deal 6 damage. `scene`: a cutscene played first (`takeoff`).
- Map letters added: `~` sky, `d` deck, `M` mast, `h` hull, `H` helm, `X` exit, `A` tent, `r` carpet, `L` light font, `R` crag. The ship is drawn under the `d`/`h`/`M`/`H` tiles from the map itself.
