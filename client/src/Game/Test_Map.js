import React, { Component } from 'react';
import Battle_Wrapper from './Battle_Wrapper'
import '../App.css';

class Test_Map extends Component {


  render() {
    return (
      <div>
        <button id="trump"
          style={this.props.seeMonsterBtns}
          onClick={this.props.monsterClick}
          value="0"
        ></button>
        <button id="teenager"
          style={this.props.seeMonsterBtns}
          onClick={this.props.monsterClick}
          value="1"
        >Gross Teenager</button>
        <button id="bob"
          style={this.props.seeMonsterBtns}
          onClick={this.props.monsterClick}
          value="3"
        >Bob</button>
      </div>
    );
  }
}

export default Test_Map;
