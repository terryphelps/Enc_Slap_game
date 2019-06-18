
let playerName = document.getElementById("name")
let healthCount = document.getElementById("health")
let hitsCount = document.getElementById("hits")
let modifierCnt = document.getElementById("modifiers")
let oppImage = document.getElementById("opponent-image")

let victim = {
  name: "Bluto",
  health: 100,
  hits: 0,
  items: []
}

/*let targets = [
  {name: "Bluto",
  health: 100,
  hits: 0,
  action: {
    slap: 1,
    punch: 5,
    kick: 10
    }
  items: []
  }
  { name: "Popeye", 
   health: 100,
   hits: 0,
   action: {
    slap: 1,
    punch: 5,
    kick: 10
    }
   items: []
  }
  { name: "Olive_Oyl",
    health: 100,
    hits: 0,
    action: {
      slap: 1,
      punch: 5,
      kick: 10
      }
    items: []
  } 
]*/

function addMods() {
  let modTtl = 0
  for (let i = 0; i < victim.items.length; i++) {
    let item = victim.items[i]
    modTtl += item.modifier
  }
  return modTtl

}

function giveItem(index) {
  victim.items.push(itemVault[index])
  console.log(victim.items)
  update()
}

let itemVault = [
  {
    name: 'Fire',
    modifier: 3,
    description: 'IT BURNS!'
  },
  {
    name: 'Rock',
    modifier: 2,
    description: 'IT ROCKS!'
  },
  {
    name: 'Club',
    modifier: 4,
    description: 'IT\'S WHACK!'
  }
]

function slap() {
  if (addMods() > 0)
    victim.health = victim.health - (1 * addMods())
  else {
    victim.health = victim.health - 1
  }
  victim.hits++
  update()
}
function punch() {
  if (addMods() > 0)
    victim.health = victim.health - (5 * addMods())
  else {
    victim.health = victim.health - 5
  }
  victim.hits++
  update()
}
function kick() {
  if (addMods() > 0)
    victim.health = victim.health - (10 * addMods())
  else {
    victim.health = victim.health - 10
  }
  victim.hits++
  update()
}

function update() {
  playerName.innerHTML = victim.name
  healthCount.innerHTML = victim.health.toString()
  hitsCount.innerHTML = victim.hits.toString()
  modifierCnt.innerHTML = addMods().toString()
  if (victim.health < 1) {
    oppImage.src = "https://idiotprufs.files.wordpress.com/2013/03/bluto3.gif"
  }
}
update()