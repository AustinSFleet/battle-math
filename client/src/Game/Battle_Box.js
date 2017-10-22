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
        <img src={this.props.me.img}/>
        <div id="my-animation-box"
          style= {this.props.showAnimations}>
        <img
          id="myAnimation"
          src={this.props.myAnimation}
        />
        <h1 id="healNumber">{(this.props.healNumber==0)?"":"+" + this.props.healNumber}</h1>
        </div>
        <h2 className="battler">{this.props.me.name}</h2>
        <p className="healthbar">{this.healthBar(this.props.me.HP)}</p>
      </div>
      <h5 id="vs" className="inline">VS</h5>
      <div id="battle-monster" className="inline">
        <img src={this.props.state.monster.img}/>
        <div id="enemy-animation-box" style= {this.props.showAnimations}>
        <img
          id="enemyAnimation"
          src={(this.props.enemyAnimation)}
        />
        <h1 id="damageNumber">{(this.props.damageNumber==0)?"":this.props.damageNumber}</h1>
        </div>
        <h2 className="battler">{this.props.state.monster.name}</h2>
        <p className="healthbar">{this.healthBar(this.props.state.monster.HP)}</p>
      </div>
    </div>
    )
  }
}

export default Battle_Box;
