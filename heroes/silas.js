/* Silas: Sellsword (blades). Starting party.
   TURNCOAT: in Chapter 8 a giant mind-controlling snail (the Shell Matriarch) takes hold of him and he duels the lord.
   Bring him to a third of his HP or less to free him and he rejoins; kill him and he is gone for good.
   His early lines are written to read differently on a replay; keep any new hints subtle.
   Stat order: HP Str Mag Skl Spd Lck Def Res */
HEROES.push({
  id:'silas', name:'Silas', cls:'Merc', skill:'focus', lv:3, lv10:'sunder', turncoat:true,
  ascend:'Silas no longer fights only for coin. The weight he carries now is his own choice.',
  s:[22,7,0,8,9,4,5,1],
  g:[75,45,5,50,55,30,25,15],
  items:['ironDao','qiPill'],
  look:{style:'wild',cloth:'#3d3542',hair:'#8a8f99',sash:'#7a2a2a'}
});
