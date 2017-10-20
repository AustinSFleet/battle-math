import React, { Component } from 'react';
import Battle_Wrapper from './Battle_Wrapper';
import Test_Map from './Test_Map';
import Monsters from './Monsters'
import '../App.css';
import StatusBar from "./StatusBar";


class Main extends Component {
  state = {
    seeBattle_Wrapper:{display: "none"},
    seeMonsterBtns: {display: "inline"},
    activeMonster: {
      name: "Blank",
      experience: 0,
      attack: ()=> 0,
      img:"",
      HP: 70,
      maxHP: 10
    }
    
  }

  

  handleMonsterClick = (event) => {
    let monsterPick = Monsters.monsters[event.target.value]
    this.setState({
      activeMonster: monsterPick,
      seeBattle_Wrapper: {display: "block"},
      seeMonsterBtns: {display: "none"}
    });
  }

  afterBattleUpdate = (monster) => {
    let upMe = {...this.props.me};

    upMe.experience += monster.experience;
    upMe.level = Math.floor(upMe.experience / 60) + 1
    if (upMe.level > this.props.me.level){
      upMe.maxHP += 8;
      alert(`You have gained a level!, You are now a level ${upMe.level} adventurer!`);
    }
    this.setState({
      seeBattle_Wrapper: {display: "none"},
      seeMonsterBtns: {display: "inline"},
    })
    console.log("WOO");
    console.log(upMe);
    this.props.updateMe(upMe);
  }



  render() {
    return (
      <div className="App">
        
        <StatusBar
          name={this.props.me.name}
          level={this.props.me.level}
          
        />

        <Battle_Wrapper
          visible={this.state.seeBattle_Wrapper}
          me={this.props.me}
          updateMe={this.props.updateMe}
          monster={this.state.activeMonster}
          afterBattleUpdate={this.afterBattleUpdate}
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
