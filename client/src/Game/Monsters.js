export default {

monsters: [{
  name: "Trump",
  experience: 30,
  attack: ()=> {
    return(3 + Math.floor(2 * Math.random()))},
  img:"/images/trump5battle.png",
  HP: 10,
  coins: 7
},
{
  name: "Teenager",
  experience: 30,
  attack: ()=> {
    return(2 + Math.floor(2 * Math.random()))},
  img:"/images/Tiffany.png",
  HP: 4,
  coins: 4
},
{
  name: "Marshall",
  experience: 30,
  attack: ()=> {
    return(2 + Math.floor(2 * Math.random()))},
  img:"/images/Marshall_Lee.png",
  HP: 4,
  coins: 5
},
{
  name: "Bob",
  experience: 150,
  attack: ()=> {
    return(3 + Math.floor(3 * Math.random()))},
  img:"/images/Gnome_ruler.png",
  HP: 50,
  coins: 31
},
{
  name: "Greg",
  experience: 30,
  attack: ()=> {
    return(1 + Math.floor(1 * Math.random()))},
  img:"/images/greg.png",
  HP: 4,
  coins: 3
}
]
}
