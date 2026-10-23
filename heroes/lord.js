/* The lord: the player's main hero. Picked as Cal or Nyra on New Game.
   Losing the lord loses the chapter.
   Stat order for s (base) and g (growth %): HP Str Mag Skl Spd Lck Def Res */
HEROES.push({
  id:'lord', name:'Cal', cls:'Heir', lord:true, skill:'rally', lv:1, lv10:'fury',
  ascend:'{lord} has grown into the one the others follow, and no longer wonders whether they should.',
  s:[20,6,1,7,8,7,5,2],
  g:[80,50,10,60,65,55,30,25],
  items:['ironJian','qiPill'],
  look:{style:'wild',hair:'#2a2230'}
});

/* The two choices on New Game: same stats, different name, look and starting weapon. */
LORDS.m = {name:'Cal',  weapon:'ironJian',   look:{style:'wild',hair:'#2a2230'}};
LORDS.f = {name:'Nyra', weapon:'twinBlades', look:{style:'long',hair:'#1d1a24',sash:'#7fb6d8'}};
