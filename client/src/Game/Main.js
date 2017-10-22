import React, { Component } from 'react';
import Battle_Wrapper from './Battle_Wrapper';
import Test_Map from './Test_Map';
import Monsters from './Monsters'
import '../App.css';
import StatusBar from "./StatusBar";
import swal from 'sweetalert';


class Main extends Component {
  state = {
    seeBattle_Wrapper:{display: "none"},
    Fare:0,
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




  componentDidMount() {
    const randomFare = (Math.round(Math.floor(Math.random() * 100)/10)*10);
    this.setState({Fare: randomFare });
    console.log(this.state.Fare);

  }

  handleMonsterClick = (event) => {
    let monsterPick = Monsters.monsters[event.target.value]
    this.setState({
      activeMonster: monsterPick,
      seeBattle_Wrapper: {display: "block"},
      seeMonsterBtns: {display: "none"}
    });
  }

  handlePirateClick = (event) => {
    let upMe = {...this.props.me};
    if (this.props.me.coins === this.state.Fare){
      swal("YOU GOT THE DOUGH!", "WELL THEN, LET'S GO!", "success").then(
      swal("CONGRATULATIONS!", "You used your exceptional Battle-Math skills to escape the monsters!", "success"))
    } else if (this.props.me.coins < this.state.Fare){
      swal(`Ahoy matey!
      `, `I know you really need to get off this island full of monsters, but I have like 4 families on 3 continents to feed. 
      The cost for this ride is ${this.state.Fare} coins, come back when you have the exact amount. 
      
      My Pantaloons have a hole from the last battle and I don't carry change.`, "warning");
    } else if (this.props.me.coins > this.state.Fare){
      swal("You have way too many coins!", `I can't go into it now, but come back with EXACTLY ${this.state.Fare}... I don't want to tell you again so I'm taking all of your coins. I HOPE YOU LEARNED YOUR LESSON!`,"error")
      upMe.coins= 0
      this.props.updateMe(upMe)
    }
    this.props.updateMe(upMe);
  }

  afterDeath = () => {
    let upMe = {...this.props.me};
    upMe.level = 1;
    upMe.HP= 12;
    upMe.maxHP= 12;
    upMe.coins=0;
    upMe.experience=0;
    this.props.updateMe(upMe);
    this.setState({
      seeBattle_Wrapper: {display: "none"},
      seeMonsterBtns: {display: "inline"},
    });
  }

  afterBattleUpdate = (monster) => {
    let upMe = {...this.props.me};

    upMe.experience += monster.experience;
    upMe.coins += monster.monCoins;
    upMe.level = Math.floor(upMe.experience / 60) + 1
    if (upMe.level > this.props.me.level){
      upMe.maxHP += 8;
      swal(`You have gained a level!`, `You are now a level ${upMe.level} adventurer!`);
    }
    this.setState({
      seeBattle_Wrapper: {display: "none"},
      seeMonsterBtns: {display: "inline"},

    })

    this.props.updateMe(upMe);
  }



  render() {
    return (
      <div className="App">

        <StatusBar
          name={this.props.me.name}
          level={this.props.me.level}
          coins={this.props.me.coins}
          me={this.props.me}

        />

        <Battle_Wrapper
          visible={this.state.seeBattle_Wrapper}
          me={this.props.me}
          updateMe={this.props.updateMe}
          monster={this.state.activeMonster}
          afterBattleUpdate={this.afterBattleUpdate}
          seeMonsterBtns={this.state.seeMonsterBtns}
          afterDeath={this.afterDeath}
        />

        <Test_Map
          monsterClick={this.handleMonsterClick}
          seeMonsterBtns={this.state.seeMonsterBtns}
          monsters={this.state.monsters}
          pirateClick={this.handlePirateClick}
        />
      </div>
    );
  };
};

export default Main;
