const hero = {
    name: "Shion",
    damage: 5,
    health: 100,
    gold: 0,
    image: "assets/heroSprite.gif"
  }

const boss = {
  name: 'Big Boss',
  health: 100,
  maxHealth: 100,
  damage: 5,
  level: 1,
  image: "assets/boss.gif"
}

// NOTE we are drawing the hero to the page - hero is an object so we don't need to use any array methods. This can change to a for/forEach if we decide to add more heros (we would need to change the model to an array)
function drawHero(){
  // declare a variable for your template and set it to an empty string 
  let heroTemplate = ''
  // apply the HTML to your template
  heroTemplate += `
    <p class="text-center">"${hero.name}"</p>
    <img class="heroSize" src="${hero.image}" alt="">
    `
    // draw the HTML to the page using the assigned Id
    // @ts-ignore
  document.getElementById('hero').innerHTML = heroTemplate
}
// Make sure to invoke the function outside of the written function to 'activate' it
drawHero()

// NOTE this function is drawing the heros gold, health, and damage power to the page. I wanted this to be in a separate area
function drawHeroStats(){
  let heroStatsTemplate = ''
  heroStatsTemplate += `
    <div class="row justify-content-center">
        <div class="col-md-2 iconBubble m-1">
          <img class="img-fluid iconSize" src="assets/moneyBag.gif" alt="">
        </div>
        <div class="col-md-10">
          <p class="pt-3">${hero.gold}<span>
            <img src="assets/coin.png" alt="">
          </span> </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-2 iconBubble m-1">
          <img class=" iconSize" src="assets/heart.png" alt="">
        </div>
        <div class="col-md-10 pt-3">
          <div class="progress" role="${hero.health}" aria-label="Animated striped example" aria-valuenow="${hero.health}" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" style="width: ${hero.health}%" ></div>
          </div> 
          <p class="text-end">${hero.health}</p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-2 iconBubble m-1">
          <img class="img-fluid iconSize" src="assets/sword.png" alt="">
        </div>
        <div class="col-md-10">
          <p class="pt-3">${hero.damage}</p>
        </div>
    </div>  
    `
    // @ts-ignore
    document.getElementById('hero-stats').innerHTML = heroStatsTemplate
}
drawHeroStats()

// NOTE this function is drawing the boss to the page. This is going to be similar to drawing heros because boss is just a single object at the moment. 
function drawBoss(){
  let bossTemplate = ''
  bossTemplate += `
  <img class="img-fluid" src="assets/boss.gif" alt="" onclick="attackBoss(${boss.health})">
  `
  // @ts-ignore
  document.getElementById('boss').innerHTML = bossTemplate
}
drawBoss()

// NOTE this function is drawing the boss name and health to the page in a separate area
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
  document.getElementById('boss-stats').innerHTML = bossStatsTemplate
}
drawBossStats()


// NOTE this function is attacking the boss - boss health will go down per click
function attackBoss(){
  // Check that we are getting the console to attack the boss on click
  // console.log('attacking the boss');
  // give the heroes gold each time they attack the boss
  hero.gold = hero.gold + 5
  drawHeroStats()
  // Find the hero, for each hero subtract from the bosses health the damage the hero does
  boss.health -= hero.damage
  // if the boss health gets to 0
  if(boss.health < 0){
  // give the heroes additional gold each time they kill the boss
  hero.gold = hero.gold + 150
  hero.damage += 10
  hero.health = 100
  // draw our new hero stats to the page
  drawHeroStats()
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
  // redraw the boss stats to see the changes
  drawBossStats()
}

// NOTE on a 3 (or 5) second interval the boss will do (passive) damage to the hero. Re-draw the hero stats to see the change in health
function bossDoesDamage(){
  // For each hero do...
    // decrease hero health by 5
    hero.health -= 5
    // if hero health gets to 0
    if(hero.health < 0){
      // hero health and hero gold will both be 0
      hero.health = 0
      hero.gold = 0 
      // alert the player that the game is over
      window.alert("Your hero has been defeated.")
      // TODO call the reset function at some point
    }
  drawHeroStats()
}
// setInterval(bossDoesDamage, 2000)



// NOTE START OF FIRE-SIDE  
const companions = [
  {
    name: 'Loyal Boy',
    type: 'damage',
    value: 5,
    health: 100,
    cost: 150,
    power: 0,
    isPurchased: false,
    img: 'assets/loyalBoy.gif'
  },
  {
    name: 'SUPER Loyal Boy',
    type: 'damage',
    value: 100,
    health: '500',
    cost: 20000,
    power: 0,
    isPurchased: false,
    img: 'assets/SUPERloyalBoy.gif'
  },
  {
    name: 'Healthy Boy',
    type: 'healing',
    value: 10,
    health: 100,
    cost: 200,
    power: 0,
    isPurchased: false,
    img: 'assets/healthyBoy.gif'
  },
  {
    name: 'Fox Helper',
    type: 'damage',
    value: 10,
    health: 100,
    cost: 50,
    power: 0,
    isPurchased: false,
    img: 'assets/foxHelper.gif'
  }
]


// NOTE Start with writing out each individual function
