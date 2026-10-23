/* Vasha: Lamia (spears). A Nightmare creature who only wants to join the group.
   Found in Chapter 3 (the labyrinth) as a green "other" unit while the lamia turn on each other; recruit her by Talking with the lord.
   She binds her spirit to the lord's, so she is likely to appear again in later Nightmares.
   Her Stone Gaze can petrify a target so it loses its next turn.
   Stat order: HP Str Mag Skl Spd Lck Def Res */
HEROES.push({
  id:'vasha', name:'Vasha', cls:'Lamia', skill:'stone', lv:4, lv10:'deadeye',
  ascend:'Vasha no longer hides what she is from the people she has chosen.',
  s:[26,7,3,8,7,3,6,4],
  g:[70,45,30,55,50,30,30,35],
  items:['ironSpear','javelin'],
  look:{style:'long',hair:'#1f3a2c',skin:'#cfe0c8',eye:'#f2c94c',cloth:'#2f5d48',tail:'#3f7f5a'}
});

/* Recruit conversation. */
TALKS.vasha = [
  ['lord','Easy. I\'m not here to hurt you.'],
  ['vasha','...'],
  ['vasha','My sisters turned on me. My own kind. I don\'t want to be alone in this place.'],
  ['lord','Then come with us.'],
  ['vasha','I will. And I will bind my spirit to yours, so I can find you again, whatever Nightmare we wake in.']
];
