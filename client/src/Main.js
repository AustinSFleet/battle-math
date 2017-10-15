import React, { Component } from 'react';
import Battle_Wrapper from './Battle_Wrapper';
import Test_Map from './Test_Map';
import './App.css';

class Main extends Component {
  state = {
    seeBattle_Wrapper:{display: "none"},
    seeBattle_Wrapper:{display: "none"},
    seeMonsterBtns: {display: "inline"},
    activeMonster: {
      name: "Blank",
      experience: 0,
      attack: ()=> 0,
      img:"",
      HP: 70,
      maxHP: 10
    },
    me: this.props.character,
    monsters: [{
      name: "Trump",
      experience: 10,
      attack: ()=> {
        return(2 + Math.floor(2 * Math.random()))},
      img:"/images/Gnome_ruler.png",
      HP: 10,
      maxHP: 10
    },
    {
      name: "Teenager",
      experience: 10,
      attack: ()=> {
        return(2 + Math.floor(2 * Math.random()))},
      img:"/images/Tiffany.png",
      HP: 12,
      maxHP: 12
    },
    {
      name: "Creepy Vampire",
      experience: 10,
      attack: ()=> {
        return(2 + Math.floor(2 * Math.random()))},
      img:"/images/Marshall_Lee.png",
      HP: 30,
      maxHP: 30
    },
    {
      name: "Bob",
      experience: 10,
      attack: ()=> {
        return(1 + Math.floor(1 * Math.random()))},
      img:"/images/Nice_King.png",
      HP: 30,
      maxHP: 30
    }]
  }

  handleMonsterClick = (event) => {
    let monsterPick = this.state.monsters[event.target.value]
    this.setState({
      activeMonster: monsterPick,
      seeBattle_Wrapper: {display: "block"},
      seeMonsterBtns: {display: "none"}
    });
    console.log(monsterPick);
  }

  render() {
    return (
      <div className="App">
        <Battle_Wrapper
          visible={this.state.seeBattle_Wrapper}
          me={this.state.me}
          monster={this.state.activeMonster}
        />
        <Test_Map
          monsterClick={this.handleMonsterClick}
          seeMonsterBtns={this.state.seeMonsterBtns}
          monsters={this.state.monsters}
        />
      </div>
    );
  };
};

export default Main;
