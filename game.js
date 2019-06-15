

let victim = {
  name: "Bluto",
  health: 100,
  hits: 0,
}

function slap() {
  victim.health--
  victim.hits++
  update()
}
function punch() {
  victim.health = victim.health - 5
  victim.hits++
  update()
}
function kick() {
  victim.health = victim.health - 10
  victim.hits++
  update()
}
let playerName = document.getElementById("name")
let healthCount = document.getElementById("health")
let hitsCount = document.getElementById("hits")
let oppImage = document.getElementById("opponent-image")

function update() {
  playerName.innerHTML = victim.name
  healthCount.innerHTML = victim.health.toString()
  hitsCount.innerHTML = victim.hits.toString()
  if (victim.health < 50) {
    oppImage.src = "https://idiotprufs.files.wordpress.com/2013/03/bluto3.gif"
  }
}
update()