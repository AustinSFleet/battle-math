import React, { Component } from "react";

class Battle_Box extends Component {
  render() {
      let mainStyle = {display : "inline-block" };
    return (

    <div style={mainStyle}>
      <button onClick={this.props.attack}>Attack!</button>
      <div id="battle-me" style={mainStyle}>
        <img src={this.props.state.me.img}/>
        <h2>{this.props.state.me.name}</h2>
      </div>
      <h1 style={mainStyle}>VS</h1>
      <div id="battle-monster" style={mainStyle}>
        <img src={this.props.state.monster.img}/>
        <h2>{this.props.state.monster.name}</h2>
      </div>
    </div>
    )
  }
}

export default Battle_Box;
