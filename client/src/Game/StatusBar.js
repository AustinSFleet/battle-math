import React, { Component } from "react";
import Answer_Box from "./Answer_Box";
import Battle_Box from "./Battle_Box";
import Main from "./Main.js";
import "./Battle_Wrapper.css";

class StatusBar extends Component {

render () {
   return ( 
   <div class= "page-header">
        
        Name: {this.props.name} {" "}
        Level: {this.props.level}
        
    </div>
   )}

}

export default StatusBar;