import React, { Component } from "react";

class Battle_Box extends Component {
  render() {
      let inline = {display : "inline-block" };
    return (

    <div style={inline}>
      <div id="battle-me" style={inline}>
        <img src={this.props.state.me.img}/>
        <h2>{this.props.state.me.name}</h2>
      </div>
      <h1 style={inline}>VS</h1>
      <div id="battle-monster" style={inline}>
        <img src={this.props.state.monster.img}/>
        <h2>{this.props.state.monster.name}</h2>
      </div>
    </div>
    )
  }
}

export default Battle_Box;
