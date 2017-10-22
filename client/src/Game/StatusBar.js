import React, { Component } from "react";
import Answer_Box from "./Answer_Box";
import Battle_Box from "./Battle_Box";
import Main from "./Main.js";
import API from "../utils/API"
import "./Battle_Wrapper.css";

class StatusBar extends Component {

clickSave = ()=>{
    API.save(this.props.me);
}


render () { 
   return ( 
   <div className= "page-header" align="left">
        
       <span className="labelText"> Name: </span> 
       {this.props.name} {" "}
       <span className="labelText"> Level: </span>
       {this.props.level}
       <span className="labelText"> Coins: </span>
       {this.props.coins}
    
     <button onClick={this.clickSave}>Save</button>
    </div>
   )}

}

export default StatusBar;