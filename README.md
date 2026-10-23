# Ember March (roguelike)

A run-based tactics roguelike in the style of GBA Fire Emblem, for phones. Forked from Nightbound's engine.

## Run it
Open `index.html` in a browser.

## A run
- Pick 3 of 5 generated units. Fallen units are gone for the rest of the run; you only lose when the whole squad falls.
- Act 1 is a branching node map (`genMap()`): 5 floors of 3 lanes (`ROWS`), then the boss on floor 6. Each node links up to its own lane and sometimes a neighbour.
- Nodes: Battle, Elite (stronger pack with an Elder leader; drops an Ascension Fragment), Recruit (pick 1 of 3; team caps at 6, `TEAM_CAP`), Rest (train one unit +1 level), Boss. Every map has at least one elite, one recruit on floors 2-3 and one rest on floors 4-5.
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
Relics, unlocks, events, Act 2, flying player units, promotion choices.
