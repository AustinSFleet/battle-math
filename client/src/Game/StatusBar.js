import React, { Component } from "react";
import Answer_Box from "./Answer_Box";
import Battle_Box from "./Battle_Box";
import Main from "./Main.js";
import "./Battle_Wrapper.css";

class StatusBar extends Component {

render () {
   return ( 
   <div class= "page-header" align="left">
        
       <span class="labelText"> Name: </span> 
       {this.props.name} {" "}
       <span class="labelText"> Level: </span>
       {this.props.level}
       <span class="labelText"> Coins: </span>
        
    </div>
   )}

}

export default StatusBar;