import React, { Component } from "react";
import Answer_Box from "./Answer_Box"


class Battle_Wrapper extends Component {
  state = {
    me: {},
    monster: {},
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
    const newTeam = this.state.team.concat({name: this.state.newName, position: this.state.newPosition});
    this.setState({ team: newTeam, newName: "", newPosition: "" })
    console.log(this.state.team)
    console.log(this.state)
  };

  render() {
    return (
      <div className="App">
        <Answer_Box
          onChange={this.handleInputChange}
          state={this.state}
          click={this.handleSubmit}
          />
      </div>
    );
  }
}

export default Battle_Wrapper;
