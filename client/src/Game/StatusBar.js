import React, { Component } from "react";
import Answer_Box from "./Answer_Box";
import Battle_Box from "./Battle_Box";
import Main from "./Main.js";
import "./Battle_Wrapper.css";

class StatusBar extends Component {

render () {
   return ( 
   <div className= "page-header" align="left">
        
       <span className="labelText"> Name: </span> 
       {this.props.name} {" "}
       <span className="labelText"> Level: </span>
       {this.props.level}
       <span className="labelText"> Coins: </span>
       {this.props.coins}
        
    </div>
   )}

}

export default StatusBar;