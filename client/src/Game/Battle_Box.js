import React, { Component } from "react";

class Battle_Box extends Component {

    healthBar = (HP) => {
      let healthbar = "\u2764: ";
      for (let i = 0; i<HP; i++){
        healthbar += "I"
      }
      return healthbar
    };

  render() {
      let inline = {display : "inline-block" };
    return (

    <div style={inline}>
      <div id="battle-me" style={inline}>
        <img src={this.props.state.me.img}/>
        <h2 className="battler">{this.props.state.me.name}</h2>
        <p>{this.healthBar(this.props.state.me.HP)}</p>
      </div>
      <h1 id="vs" style={inline}>VS</h1>
      <div id="battle-monster" style={inline}>
        <img src={this.props.state.monster.img}/>
        <h2 className="battler">{this.props.state.monster.name}</h2>
        <p>{this.healthBar(this.props.state.monster.HP)}</p>
      </div>
    </div>
    )
  }
}

export default Battle_Box;
