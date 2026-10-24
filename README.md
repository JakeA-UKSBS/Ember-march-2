# Ember March (roguelike)

A run-based tactics roguelike in the style of GBA Fire Emblem. Built for PC first (map left, command panel right), and still playable on phones. Forked from Nightbound's engine.

## Run it
Open `index.html` in a browser. On PC: Esc or right-click backs out of a move or menu, E ends the turn, the mouse wheel zooms.

## Music
Drop mp3 files into a `music/` folder next to `index.html`: `title.mp3`, `tavern.mp3`, `mushroom.mp3`, `shadow.mp3`, `swamp.mp3`, `forest.mp3`, `mountain.mp3`, `ship.mp3`, `labyrinth.mp3`. Each loops while you're in that region (map and battles). Missing files are skipped. "Sound and music" in Options turns it off.

## Regions
Each run picks 2 of these as its acts (`BIOMES`, `ACTS`). Each has 2-3 battle maps, a boss map, a monster pool and a rule.
| Region | Monsters | Rule | Boss |
| --- | --- | --- | --- |
| Mushroom Kingdom | Sporelings, Myconids, Mindsnails | Spores poison on a hit (3 HP a turn for 3 turns; a Salve cures it) | King Morel the Merry |
| Shadow Kingdom | Skeletons, Skeleton Archers, Ghosts, Gloomwings | Ghosts pass through walls; dark magic drains | Vaelith the Necromancer (raises skeletons every other turn) |
| The Swamp | Lamias, Mud Monsters, Wolves | Starting a turn in ankle-deep water or mangrove roots costs 1 Move; sand is solid | Krondis the alligator |
| Cursed Woodland | Wolves, Cursed Stags, Harpies | Cursed thickets: +25 Avoid, 2 Move to enter | The Hollow Stag |
| Magma Mountains | Boulder Golems, Fire Sprites, Harpies | Magma blocks foot units; fliers and fire creatures cross it | Pyraxis, the Magma Dragon |
| The Flying Ship | Wyverns, Pegasi, Harpies, Storm Harpies | Defend the deck for 5-6 turns; fliers arrive every turn | The Tempest (storm elemental) |
| The Labyrinth | Gremlins, Beholders (stone gaze), Minotaurs | Maze corridors | A Minotaur lord |


## A run
- A run opens at the Crossroads (`musterScene()`): your candidates stand around a campfire, with the run's two regions on the signpost. Tap travellers to see their card and choose 3, then march. Each act's map starts from a flag node at the bottom. Fallen units are gone for the rest of the run; you only lose when the whole squad falls.
- Each act is a branching node map (`genMap()`): 9 floors of 3 lanes, then the boss on floor 10.
- Every path holds exactly `MIX`: 3 battles, 1 elite (never before floor 4; shown as a red horned skull on the map), 1 recruit, 1 tavern, 1 rest, 1 event, 1 treasure. Lanes are shuffles of the same mix, and a crossing between lanes is only kept if every path through the map still matches, so no route skips the treasure room. Change `MIX` to change the length and mix.
- Nodes: Battle; Elite (Elder leader, drops an Ascension Fragment); Recruit (pick 1 of 3; team caps at 6, `TEAM_CAP`); Rest (train one unit +1 level); Treasure (pick 1 of 3 items); Event (`EVENTS`); Tavern; Boss.
- Gold: 30 to start, then 25 per battle, 45 per elite, 80 per boss (`GOLDWIN`). Spent at taverns.
- Tavern (`tavernNode()`): talk to Marla the innkeeper and pick as many options as you can afford before leaving. Drinks (`DRINKS`): a round of ale (+30 EXP for everyone) or a spirit for one unit (+1 to a stat for good). Food (`MEALS`): squad-wide buffs for 2-3 fights (+2 damage, +15 Hit, +2 Def/Res, +1 Move, poison immunity), counted down after each won fight and shown on the map. Sellswords: 3 units for hire at 40 + 15 per level. Rumours: a hint about the region's boss and rule. Music slot: `music/tavern.mp3`.
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
- `MAPS`: battle maps, grouped by region. `genBattle()` picks a map and enemies from the act's region. Region terrain letters are listed at the top of the REGIONS section; tile art is `bioTile()`.
- Region monster sprites are bodies in `fig()` (`shroom`, `ghost`, `mud`, `gator`, `golem`, `flame`, `dragon`, `storm`, `eye`, riderless `mount`), with looks from `MONLOOK`. Skeletons are humanoids with `look.skel`.
- Reinforcements (`def.waves`) are plain data, `{turn:[{c,lv,x,y,ifBoss}]}`, so they survive a save.
- Mounted units are drawn by `horseUnder()`: a random-coloured horse with team barding, rider laid on top.
- Promotion: an Ascension Fragment at Lv 5+ (`PROMO_LV`) offers up to 3 paths (`promoOptions()`): the usual upgrade, a new movement type, and a new role that keeps the weapon. Fragments drop from elites and treasure.
- Flying units (`MOVES.flying`, needs the Sky Riders unlock): pegasus riders for skirmishers, casters and menders, wyverns for brutes and guards. Drawn by `horseUnder()` with wings.
- Relics (`RELICS`): team passives for the run. Elites offer 1 of 2, the Act 1 boss 1 of 3, treasure rooms sometimes hold one. Combat effects go through `relicCalc()`, move through `relicMov()`. Shown on the map; tap one to read it.
- Act 2 (`run.act`): a second 9-floor map after the Act 1 boss, with gremlins, gloomwings, mindsnails and storm harpies added, and the Lamia Queen in the Serpent Palace as the final boss.
- Unlocks (`UNLOCKS`, Camp on the title screen): Essence is earned per win (4 battle, 8 elite, 20 boss, +20 for finishing); a failed run keeps half. Unlocks: Second Look (reroll), Old Relics, Wider Draft, Sky Riders, Heirloom (starting relic), Veterans (Lv 2 draft). Saved in `embermarch2.profile`.
- Magic: fire > nature > water > fire, light > dark. Dark sigils drain 25% of damage dealt.

## Not built yet
Archetypes (named unlockable classes), more events, Act 3.
