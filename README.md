# Ember March (roguelike)

A run-based tactics roguelike in the style of GBA Fire Emblem, for phones. Forked from Nightbound's engine.

## Run it
Open `index.html` in a browser.

## A run
- Pick 3 of 5 generated units. Fallen units are gone for the rest of the run; you only lose when the whole squad falls.
- Act 1 is 5 battles (`RUN_LEN`). The last is a boss in the Labyrinth Heart.
- After each win: loot, then a recruit offer (pick 1 of 3, or skip). The team caps at 6 (`TEAM_CAP`).
- Every run has a seed (shown on the draft and defeat screens). All rolls come from it.

## Where things live (all in `index.html`)
- `ROLES`, `MOVES`, `KIT`: the class parts. A class is role + movement + weapon, keyed like `G.skirm.foot.pole.1`. `ensureCls()` builds it, plus its promoted version (`.2`, adds a second weapon type).
- `genUnit()`: rolls stats, growths, starting skill, kit, name and look.
- `genLook()`, `GEAR`, `SKINS`, `HAIRC`, `CLOTH`: the random sprite parts. Sprites are 32×32, drawn in code by `fig()`.
- Monsters: `Wolf`, `Harpy`, `LamiaM`, `MinotaurM` in `CLS`/`FOE`, looks from `monLook()`. Wolves use the `beast` body in `fig()`.
- `MAPS`: battle maps. `genBattle()` picks a map and enemies by battle number.
- Promotion: an Ascension Fragment at Lv 5+ (`PROMO_LV`). Fragments drop after battles 2 and 4.
- Magic: fire > nature > water > fire, light > dark. Dark sigils drain 25% of damage dealt.

## Not built yet
Node map, relics, unlocks, Act 2, mounted and flying player units, promotion choices.
