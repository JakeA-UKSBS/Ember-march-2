# Ember March (roguelike)

A run-based tactics roguelike in the style of GBA Fire Emblem, for phones. Forked from Nightbound's engine.

## Run it
Open `index.html` in a browser.

## A run
- Pick 3 of 5 generated units. Fallen units are gone for the rest of the run; you only lose when the whole squad falls.
- Act 1 is a branching node map (`genMap()`): 9 floors of 3 lanes, then the boss on floor 10.
- Every path holds exactly `MIX`: 4 combats (some floor 5+ battles become elites), 2 recruits, 1 rest, 1 event, 1 treasure. Lanes are shuffles of the same mix, and a crossing between lanes is only kept if every path through the map still matches, so no route skips the treasure room. Change `MIX` to change the length and mix.
- Nodes: Battle; Elite (Elder leader, drops an Ascension Fragment); Recruit (pick 1 of 3; team caps at 6, `TEAM_CAP`); Rest (train one unit +1 level); Treasure (pick 1 of 3 items); Event (`EVENTS`); Boss.
- Events: the Wandering Smith (reforge a weapon +1, up to +3), Abandoned Armoury (a steel weapon, or 2 Salves), Shrine of Trial (3 max HP for a random skill), Training Ground (everyone +50 EXP).
- Forged weapons use keys like `ironAxe~2` (+2 Mt and +5 Hit per level; charms heal +5), built on demand by `ensureIt()`.
- Enemy strength follows how many fights you've had (`run.fights`), not the floor.
- Saves cover both the map and battles, so Continue picks up wherever you left off.
- Every run has a seed (shown on the draft and defeat screens). All rolls come from it.

## Where things live (all in `index.html`)
- `ROLES`, `MOVES`, `KIT`: the class parts. Movement is foot, armoured or mounted (7 move, slowed by forest and hills; names like Lance Cavalier, Troubadour). A class is role + movement + weapon, keyed like `G.skirm.foot.pole.1`. `ensureCls()` builds it, plus its promoted version (`.2`, adds a second weapon type).
- `genUnit()`: rolls stats, growths, starting skill, kit, name and look.
- `genLook()`, `GEAR`, `SKINS`, `HAIRC`, `CLOTH`: the random sprite parts. Sprites are 32×32, drawn in code by `fig()`.
- Monsters: `Wolf`, `Harpy`, `LamiaM`, `MinotaurM` in `CLS`/`FOE`, looks from `monLook()`. Wolves use the `beast` body in `fig()`.
- `MAPS`: battle maps. `genBattle()` picks a map and enemies by battle number.
- Mounted units are drawn by `horseUnder()`: a random-coloured horse with team barding, rider laid on top.
- Promotion: an Ascension Fragment at Lv 5+ (`PROMO_LV`). Fragments drop from elite nodes.
- Magic: fire > nature > water > fire, light > dark. Dark sigils drain 25% of damage dealt.

## Not built yet
Relics, unlocks, Act 2, flying player units, promotion choices.
