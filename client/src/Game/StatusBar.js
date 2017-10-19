import React, { Component } from "react";
import Answer_Box from "./Answer_Box";
import Battle_Box from "./Battle_Box";
import Main from "./Main.js";
import "./Battle_Wrapper.css";

class StatusBar extends Component {

render () {
   return ( 
   <div class= "page-header">
        Name: {this.props.name}
        <img id="coinIMG" src="images/coin.png" alt="coin"/>
        
    </div>
   )}

}

export default StatusBar;