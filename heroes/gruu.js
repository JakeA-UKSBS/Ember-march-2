/* Gruu: Skywright (sigils, heavy weapons). A temporary unit.
   Met in Chapter 6 repairing his wrecked ship (a green NPC you must protect), then joins for Chapter 7 and pilots the flying ship.
   This is his second Nightmare; he lost his first crew to the Aranaea. Much stronger than the party, like a Fire Emblem Paladin.
   He leaves after Chapter 7 and returns in the lord's third Nightmare.
   Stat order: HP Str Mag Skl Spd Lck Def Res */
HEROES.push({
  id:'gruu', name:'Gruu', cls:'Skywright', skill:'shieldwall', lv:10,
  s:[40,13,14,12,10,6,12,11],
  g:[40,25,25,20,15,15,20,20],
  items:['galeT','steelAxe','qiPill'],
  look:{style:'bald',beard:true,hair:'#5a4632',skin:'#b98a63',cloth:'#5b4a8a',sash:'#9fd8ff',cape:true}
});
