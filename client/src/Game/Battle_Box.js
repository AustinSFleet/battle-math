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
    return (

    <div id="battle-box" className="inline">
      <div id="battle-me" className="inline">
        <img src={this.props.state.me.img}/>
        <h2 className="battler">{this.props.state.me.name}</h2>
        <p className="healthbar">{this.healthBar(this.props.state.me.HP)}</p>
      </div>
      <h5 id="vs" className="inline">VS</h5>
      <div id="battle-monster" className="inline">
        <img src={this.props.state.monster.img}/>
          <img id="fireworks" src={"images/fireworksanimated.gif"}/>
        <h2 className="battler">{this.props.state.monster.name}</h2>
        <p className="healthbar">{this.healthBar(this.props.state.monster.HP)}</p>
      </div>
    </div>
    )
  }
}

export default Battle_Box;
