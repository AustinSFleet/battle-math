import React, { Component } from "react";
import Answer_Box from "./Answer_Box";
import Battle_Box from "./Battle_Box"


class Battle_Wrapper extends Component {
  state = {
    me: {name: "Zed",
	    level: 1,
	    experience: 0,
	    abilities: [],
	    items: [],
	    maxHP: 20,
      img:"//vignette4.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/f3/Original_Finn.png/revision/latest?cb=20120921151658",
	    HP: 20
    },

    monster: {
      name: "Trump",
      experience: 10,
      attack: ()=> {
        return(3 + Math.floor(3 * Math.random()))},
      img:"https://vignette.wikia.nocookie.net/villains/images/8/80/Gnome_ruler.png/revision/latest?cb=20130803061909",
      HP: 10
    },

    problem: {},
    userAnswer: "",
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state)
  };

  addProblem = () => {
	   let A = Math.floor(Math.random()*(10));
	   let B = Math.floor(Math.random()*(10));
	   let answer = A + B;
     let damage = 2 + Math.floor(Math.random() * 3)
     return ({A: A, B: B, answer: answer, damage: damage})
  };

  handleAttack = (event) => {
    let newProblem = this.addProblem();
    this.setState({problem: newProblem});
  }

  render() {
    return (
      <div className="App">
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
          />
      </div>
    );
  }
}

export default Battle_Wrapper;
