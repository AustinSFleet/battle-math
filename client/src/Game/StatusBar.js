import React, { Component } from "react";
import Answer_Box from "./Answer_Box";
import Battle_Box from "./Battle_Box";
import Main from "./Main.js";
import API from "../utils/API"
import "./Battle_Wrapper.css";

const styles= {

}
class StatusBar extends Component {

clickSave = ()=>{
    API.save(this.props.me);
}

clickLogout =() =>  {
this.props.updateMe({});
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
    
    </div>
   )}

}

export default StatusBar;
