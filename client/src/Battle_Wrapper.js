import React, { Component } from "react";
import Answer_Box from "./Answer_Box";
import Battle_Box from "./Battle_Box";

class Battle_Wrapper extends Component {
  state = {
    problem: {},
    userAnswer: "",
    seeBattle_view: {display: "none"},
    seeBattle_cover: {display: "block"},
    seeAttackBtns: {display : "block" },
    seeProblemBox: {display : "none"},
    seeResultBox: {display: "none"},
    seeCounterAttack: {display: "none"},
    actionHeading: "",
    actionSubHead: "",
    me: this.props.me,
    monster: this.props.monster
  };

  handleBattleReady = (event) => {
    console.log("battle ready or what?")
    this.setState({
      monster: this.props.monster,
      seeBattle_view: {display: "block"},
      seeBattle_cover: {display: "none"}
    })
  };

  handleAttack = (event) => {
    let newProblem = this.addProblem();
    this.setState({
      problem: newProblem,
      seeAttackBtns: {display : "none" },
      seeProblemBox: {display : "block"}
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    //this happens when you submit an answer
    event.preventDefault();
    this.setState({
      seeResultBox: {display: "block"},
      seeProblemBox: {display: "none"}
    });
    if (this.state.userAnswer == this.state.problem.answer){
      let upMonster = {...this.state.monster};
      upMonster.HP -= this.state.problem.damage;
      this.setState({
        userAnswer: "",
        actionHeading: "HIT!",
        actionSubHead: `You did ${this.state.problem.damage} damage!`,
        monster: upMonster
      });
    }
    else {
      this.setState({
        userAnswer: "",
        actionHeading: "MISS!",
        actionSubHead: `${this.state.monster.name} laughs at you!`
      });
    }
  };

  handleResult = event => {
    //this happens after your attack
    if (this.state.monster.HP <= 0){
      this.deadMonster(this.state.monster);
    }
    else{
      //counter attack
      let upMe = {...this.state.me};
      let damageTaken = this.state.monster.attack();
      upMe.HP -= damageTaken;
      this.setState({
        seeResultBox: {display: "none"},
        seeCounterAttack: {display: "block"},
        actionHeading: `${this.state.monster.name} fights back!`,
        actionSubHead: `You lost ${damageTaken} life!`,
        me: upMe
      });
    }
  };

  handleCounter = event => {
    if (this.state.me.HP <= 0){
      this.iDied();
    }
    else{
      this.setState({
        seeCounterAttack: {display: "none"},
        seeAttackBtns: {display : "block" }
      })
    }
  };

  addProblem = () => {
     let A = Math.floor(Math.random()*(10));
     let B = Math.floor(Math.random()*(10));
     let answer = A + B;
     let damage = 2 + Math.floor(Math.random() * 3);
     return ({A: A, B: B, answer: answer, damage: damage})
  };

  deadMonster = (monster) => {
    alert(`You have defeated ${monster.name}!`);
  };

  iDied = () => {
    alert("Don't you understand you dead?");
  };

  render () {
    return (

      <div
        style={this.props.visible}
      >
        <div id="battle_cover"
          style={this.state.seeBattle_cover}
        >
          <button
            onClick={this.handleBattleReady}
          >Ready for Battle?</button>
        </div>
        <div id="battle_view"
          style={this.state.seeBattle_view}
        >
          <Battle_Box
            attack={this.handleAttack}
            state={this.state}
            display="display: inline;"
          />
          <Answer_Box
            onChange={this.handleInputChange}
            state={this.state}
            submit={this.handleSubmit}
            attack={this.handleAttack}
            handleResult={this.handleResult}
            handleCounter={this.handleCounter}
          />
        </div>
      </div>
    );
  }
}

export default Battle_Wrapper;
