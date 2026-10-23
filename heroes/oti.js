/* Oti: Mender (healing charms, and weak light magic so she can fight back). Starting party.
   Stat order: HP Str Mag Skl Spd Lck Def Res */
HEROES.push({
  id:'oti', name:'Oti', cls:'Healer', skill:'renewal', lv:1, lv10:'brace',
  ascend:'Oti has stopped apologising for taking up space. The light answers louder.',
  s:[16,0,5,4,6,8,2,8],
  g:[50,5,55,35,45,60,15,60],
  items:['glimmer','spiritMend','qiPill'],
  look:{style:'bun',gear:'hood',cloth:'#e6e2d6'}
});
