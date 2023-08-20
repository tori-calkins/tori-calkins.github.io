loot = Math.floor(Math.random() * 8)
bomb = Math.floor(Math.random() * 8)
var treasure = (location) => {

  if(loot === location) 
 {
  alert("You win")
   return document.getElementById(location).innerHTML = "💴"
 }
 else if(bomb === location) 
 {
  alert("You lose")
   return document.getElementById(location).innerHTML = "💣"
 }
  else
 {
   return document.getElementById(location).innerHTML = "🦴"
 }
}