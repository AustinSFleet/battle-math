export default {


monsters: [{
  name: "Trump",
  experience: 50,
  attack: ()=> {
    return(30 + Math.floor(2 * Math.random()))},
  img:"/images/trump5battle.png",
  HP: 10,
  maxHP: 10,
  monCoins: 50
},
{
  name: "Teenager",
  experience: 50,
  attack: ()=> {
    return(2 + Math.floor(2 * Math.random()))},
  img:"/images/Tiffany.png",
  HP: 4,
  maxHP: 12,
  monCoins: 10
},
{
  name: "Marshall",
  experience: 20,
  attack: ()=> {
    return(2 + Math.floor(2 * Math.random()))},
  img:"/images/Marshall_Lee.png",
  HP: 20,
  maxHP: 12,
  monCoins: 30
},
{
  name: "Bob",
  experience: 50,
  attack: ()=> {
    return(1 + Math.floor(1 * Math.random()))},
  img:"/images/Gnome_ruler.png",
  HP: 20,
  maxHP: 30,
  monCoins:20
},
{
  name: "Greg",
  experience: 30,
  attack: ()=> {
    return(1 + Math.floor(1 * Math.random()))},
  img:"/images/greg.png",
  HP: 12,
  maxHP: 30,
  monCoins:50
},
{
  name: "ship",
  experience: 30,
  attack: ()=> {
    return(1 + Math.floor(1 * Math.random()))},
  img:"/images/pirates.png",
  HP: 4,
  maxHP: 30,
  monCoins:50
},
{
  name: "Boba",
  experience: 30,
  attack: ()=> {
    return(5 + Math.floor(1 * Math.random()))},
  img:"/images/bobaBattle.png",
  HP: 10,
  maxHP: 40,
  monCoins:70
}
]
}
