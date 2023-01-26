const heroes = [
  {
    name: "Shion",
    damage: 5,
    health: 100,
    gold: 0,
    image: "assets/heroSprite.gif"
  },
  // {
  //   name: "Milim",
  //   damage: 10,
  //   health: 100,
  //   gold: 0,
  //   image: "assets/heroSpriteTwo.gif"
  // }
]

const boss = {
  name: 'Big Boss',
  health: 100,
  maxHealth: 100,
  damage: 5,
  level: 1,
  image: "assets/boss.gif"
}


function drawHero(){
  let heroTemplate = ''
  for(let key in heroes){
    let hero = heroes[key]
    heroTemplate += `
    <p class="text-center">"${hero.name}"</p>
    <img class="heroSize" src="${hero.image}" alt="">
    `
    // @ts-ignore
    let heroElm = document.getElementById('hero').innerHTML = heroTemplate
  }
}
drawHero()

function drawHeroStats(){
  let heroStatsTemplate = ''
  for(let key in heroes){
    let hero = heroes[key]
    heroStatsTemplate += `
    <div class="row justify-content-center">
        <div class="col-md-2 iconBubble">
          <img class="img-fluid iconSize" src="assets/moneyBag.gif" alt="">
        </div>
        <div class="col-md-10">
          <p>${hero.gold}<span>
            <img src="assets/coin.png" alt="">
          </span> </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-2 iconBubble">
          <img class=" iconSize" src="assets/heart.png" alt="">
        </div>
        <div class="col-md-10">
          <div class="progress" role="${hero.health}" aria-label="Animated striped example" aria-valuenow="${hero.health}" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" style="width: ${hero.health}%" ></div>
          </div> 
          <p class="text-end">${hero.health}</p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-2 iconBubble">
          <img class="img-fluid iconSize" src="assets/sword.png" alt="">
        </div>
        <div class="col-md-10">
          <p>${hero.damage}</p>
        </div>
    </div>  
    `
    // @ts-ignore
    let heroStatsElm = document.getElementById('hero-stats').innerHTML = heroStatsTemplate
  }
}
drawHeroStats()

function drawBoss(){
  let bossTemplate = ''
  bossTemplate += `
  <img class="img-fluid" src="assets/boss.gif" alt="" onclick="attackBoss(${boss.health})">
  `
  // @ts-ignore
  let bossElm = document.getElementById('boss').innerHTML = bossTemplate
}
drawBoss()

function drawBossStats(){
  let bossStatsTemplate = ''
  bossStatsTemplate += `
    <div class="col-md-10">
      <p class="text-center">"${boss.name}"</p>
      <p class="text-center">${boss.health}</p>
      <div class="progress" role="${boss.health}" aria-label="Animated striped example" aria-valuenow="${boss.health}" aria-valuemin="0" aria-valuemax="${boss.health}">
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" style="width: ${boss.health}%" ></div>
          </div> 
    </div>
  `
  // @ts-ignore
  let bossStatsElm = document.getElementById('boss-stats').innerHTML = bossStatsTemplate
}
drawBossStats()


function attackBoss(){
  // Check that we are getting the console to attack the boss on click
  // console.log('attacking the boss');
  // give the heroes gold each time they attack the boss
  heroes.forEach(hero => {
    hero.gold = hero.gold + 5
    drawHeroStats()
    });
  // Find the hero, for each hero subtract from the bosses health the damage the hero does
  heroes.forEach(h => boss.health -= h.damage)
  // if the boss health gets to 0
  if(boss.health < 0){
    // give the heroes additional gold each time they kill the boss
    heroes.forEach(hero => {
      hero.gold = hero.gold + 150
      hero.damage += 10
      hero.health = 100
      drawHeroStats()
      });
    // take 5 health off the MAX health
    boss.maxHealth -= 5
    // let the player know they beat the boss
    window.alert('You defeated the boss and made a profit! On to the next level.')
    // increase the boss level by 1
    boss.level++
    // double the amount of damage the boss will do
    boss.damage = boss.level*2
    // increase the bosses health by multiplying the current level by 100
    boss.health = boss.level*100
  }
  drawBossStats()
}

function bossDoesDamage(){
  // For each hero do...
  heroes.forEach(hero => {
    // decrease hero health by 5
    hero.health -= 5
    // if hero health gets to 0
    if(hero.health < 0){
      // hero health and hero gold will both be 0
      hero.health = 0
      hero.gold = 0 
      // alert the player that the game is over
      window.alert("Your hero has been defeated.")
      // TODO call the reset function
    }
  });
  drawHeroStats()
}

// setInterval(bossDoesDamage, 2000)

// TODO
function resetGame(){}



// NOTE START OF FIRE-SIDE FUNCTIONS 
function purchaseCompanionOne(){}

function purchaseCompanionTwo(){}