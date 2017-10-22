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
        ></button>
        <button id="Marshall"
          style={this.props.seeMonsterBtns}
          onClick={this.props.monsterClick}
          value="2"
        ></button>
        <button id="bob"
          style={this.props.seeMonsterBtns}
          onClick={this.props.monsterClick}
          value="3"
        ></button>
        <button id="greg"
          style={this.props.seeMonsterBtns}
          onClick={this.props.monsterClick}
          value="4"
        ></button>
        <button id="ship"
          style={this.props.seeMonsterBtns}
          onClick={this.props.pirateClick}
          value="5"
        />
        
      
      </div>
    );
  }
}

export default Test_Map;
