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


function drawHero(){
  let heroTemplate = ''
  heroTemplate += `
    <p class="text-center">"${hero.name}"</p>
    <img class="heroSize" src="${hero.image}" alt="">
    `
    // @ts-ignore
  document.getElementById('hero').innerHTML = heroTemplate
}
drawHero()

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
    // @ts-ignore
  document.getElementById('hero-stats').innerHTML = heroStatsTemplate
}
drawHeroStats()

function drawBoss(){
  let bossTemplate = ''
  bossTemplate += `
  <img class="img-fluid" src="assets/boss.gif" alt="" onclick="attackBoss(${boss.health})">
  `
  // @ts-ignore
  // @ts-ignore
  document.getElementById('boss').innerHTML = bossTemplate
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
  // @ts-ignore
  document.getElementById('boss-stats').innerHTML = bossStatsTemplate
}
drawBossStats()


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
  drawBossStats()
}

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


// NOTE Start with writing out each individual function for one object!


// NOTE start by drawing a single object from the companions array to the page (if we continue this way we would need a function for each object)
// function drawLoyalBoy(){
//   // if the bosses health is greater than 0 ...
//   if(boss.health > 0){
//   // set the objects template to an empty string
//     let loyalBoyTemplate = ''
//   // apply the HTML to the template
//     loyalBoyTemplate += `
//     <p class="text-center">"Loyal Boy" : <span>100</span></p>
//     <img class="companionSize text-center" src="assets/loyalBoy.gif" alt="">
//     `
//     // @ts-ignore
//   // draw the object to the page using an assigned ID that wil apply the template to that specific object
//   // we could also create an update() function that will only take in the document.getElement.. 
//     document.getElementById('loyal-boy').innerHTML = loyalBoyTemplate
//   }
// }

// // NOTE this function will purchase a single object. We will need to set a button on the index that will interact with this button 
// function purchaseLoyalBoy(){
//   // first check that the button is hooked up with a console log
//   console.log("buying the most loyal boy");
//   // add in the game logic, if the hero has gold available...
//   if(hero.gold >= 150){
//   // take the cost of the companion out of the heros total gold
//     hero.gold -= 150
//   // redraw the hero stats to see the change in gold 
//     drawHeroStats()
//   // call the function to draw the object to the fighting area
//     drawLoyalBoy()
//   // call the function that is starting the interval that will run our objects attack function
//     startInterval()
//   // game logic thats saying that if the hero doesn't have the necessary gold then pop an alert that will prevent notify the player that there is not enough gold 
//   } else if(hero.gold == 0){
//     window.alert("You do not have enough gold!")
//   }
// }

// // NOTE this function will run our object attacking the boss when we click on the boss. This will need to have a function set in the HTML on the boss object
// function loyalBoyAttack(){
//   // console log to make sure the click is doing something
//   console.log('loyal boy attack!');
//   // draw the object that you are attacking with after you purchase it
//   drawLoyalBoy()
//   // Find the specific object by completing a find in the companions array
//   const loyalBoy = companions.find(companion => companion.name = 'Loyal Boy')
//   // Game logic, if the object is there AND the boss still has health ...
//   if(loyalBoy && boss.health > 0){
//   // apply game logic, boss health will decrease by the value that the object has
//     boss.health -= loyalBoy.value
//   // update the boss stats to reflect whats going on
//     drawBossStats()
//   // if the condition is NOT met then this stuff will happen 
//   } else {
//     window.alert("You defeated the boss!")
//     hero.gold = hero.gold + 150
//     hero.damage += 10
//     hero.health = 100
//     drawHeroStats()
//     // take 5 health off the MAX health
//     boss.maxHealth -= 5
//     // increase the boss level by 1
//     boss.level++
//     // double the amount of damage the boss will do
//     boss.damage = boss.level*2
//     // increase the bosses health by multiplying the current level by 100
//     boss.health = boss.level*100
//   }
// }

// function startInterval(){
//   setInterval(loyalBoyAttack, 5000)
// }


// NOTE REFACTORED CODE
// NOTE How can we make all the code above more reusable, refactoring the code to make fewer and more reusable functions is key here

// NOTE this function will be able to draw all of our companions and put them into a template we build here
function drawCompanions(){
  let companionTemplate = ''
  companions.forEach(companion => {
    if(companion.isPurchased){
      companionTemplate += `
        <p class="text-center">"${companion.name}" : <span>${companion.health}</span></p>
        <img class="companionSize text-center" src="${companion.img}" alt="">
      `
    }
  });
  // @ts-ignore
  document.getElementById('companion').innerHTML = companionTemplate
}

// NOTE this function will allow us to purchase a companion when we find it by its name
function buyCompanion(companionName){
  // find the companion
  const purchasedCompanion = companions.find(companion => companion.name == companionName)
  console.log(purchasedCompanion);

  // @ts-ignore
  if(hero.gold >= purchasedCompanion.cost && !purchasedCompanion.isPurchased){
    // @ts-ignore
    hero.gold -= purchasedCompanion.cost
    // @ts-ignore
    purchasedCompanion.isPurchased = true
    drawCompanions()
    drawHeroStats()
  } else{
    window.alert("You do not have enough gold!")
  }
}

function applyCompanion(){
  companions.forEach(companion => {
    if(companion.isPurchased){
      if(companion.type == 'damage'){
        boss.health -= companion.value
        drawBossStats()
      } else if(companion.type == 'healing'){
        hero.health += companion.value
        drawHeroStats()
      }
    }
  });
}

setInterval(applyCompanion, 5000)