import React, { Component } from "react";
import Answer_Box from "./Answer_Box";
import Battle_Box from "./Battle_Box";
import "./Battle_Wrapper.css";

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
    this.setState({
      monster: this.props.monster,
      seeBattle_view: {display: "block"},
      seeBattle_cover: {display: "none"},
      seeAttackBtns: {display : "block" }
    })
  };

  handleAttack = (event) => {
    if (event.target.id === "add"){
    let newProblem = this.addProblem();
    this.setState({
      problem: newProblem,
      seeAttackBtns: {display : "none" },
      seeProblemBox: {display : "block"}
    });
  }
  else if (event.target.id === "subtract") {
    let newProblem = this.subProblem();
    this.setState({
      problem: newProblem,
      seeAttackBtns: {display : "none" },
      seeProblemBox: {display : "block"}
    });
  }
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
    let upMonster = {...this.state.monster};
    let upMe = {...this.state.me};
    this.setState({
      seeResultBox: {display: "block"},
      seeProblemBox: {display: "none"}
    });
    if (this.state.userAnswer == this.state.problem.answer){
      // let upMonster = {...this.state.monster};
      upMonster.HP += this.state.problem.CoMonHP;
      upMe.HP += this.state.problem.CoMeHP;
      this.setState({
        userAnswer: "",
        actionHeading: this.state.problem.CoMeHead,
        actionSubHead: this.state.problem.CoMeSub,
        monster: upMonster,
        me: upMe
      });
    }
    else {
      upMonster.HP += this.state.problem.WrMonHP;
      upMe.HP += this.state.problem.WrMeHP;
      this.setState({
        userAnswer: "",
        actionHeading: this.state.problem.WrMeHead,
        actionSubHead: this.state.problem.WrMeSub,
        monster: upMonster,
        me: upMe
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

  deadMonster = (monster) => {
    alert(`You have defeated ${monster.name}!`);
    this.setState({
      seeCounterAttack: {display: "none"},
      seeResultBox: {display: "none"},
      seeBattle_cover: {display: "block"},
      seeBattle_view: {display: "none"}
    });
    this.props.afterBattleUpdate(monster);
  };


  iDied = () => {
    alert("Don't you understand you dead?");
  };

  addProblem = () => {
     let A = Math.floor(Math.random()*(10));
     let B = Math.floor(Math.random()*(10));
     let answer = A + B;
     let damage = 4 + Math.floor(Math.random() * 3);
     return ({
       problemDisplay:`${A} + ${B}`,
       answer: answer,
       CoMeHP: 0,
       CoMonHP: -(damage),
       CoMeHead: "Correct Answer!",
       CoMeSub: `You did ${damage} damage!`,

       WrMeHP: 0,
       WrMonHP: 0,
       WrMeHead: "Wrong Answer!",
       WrMeSub: "The correct answer was " + answer +".",

      })
  };

  subProblem = () => {
    let A = Math.floor(Math.random()*(10));
    let B = Math.floor(Math.random()*(10));
    let C;
    if (B > A) {
      C = A;
      A = B;
      B = C;
    }
    let answer = A - B;
    let heal = 4 + Math.floor(Math.random() * 3);
    return ({problemDisplay:`${A} - ${B}`,
    answer: answer,
    CoMeHP: +(heal),
    CoMonHP: 0,
    CoMeHead: "Correct Answer!",
    CoMeSub: "You healed " + (heal) + " points!",

    WrMeHP: 0,
    WrMonHP: 0,
    WrMeHead: "Wrong Answer!",
    WrMeSub: "The correct answer was " + answer +".",})
  };

  render () {
    return (
     <div> 
      <img src="./../Assets/photos/coin.jpg" />
      <div
        style={this.props.visible}
      >
        <div id="battle_cover"
          style={this.state.seeBattle_cover}
        >
          <button id="battleReady"
            onClick={this.handleBattleReady}
          ></button>
        </div>
        <div id="battle_view"
          style={this.state.seeBattle_view}
        >
          <Battle_Box
            attack={this.handleAttack}
            state={this.state}
            display={this.state.seeResultBox}
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
    </div>
    );
  }
}

export default Battle_Wrapper;
