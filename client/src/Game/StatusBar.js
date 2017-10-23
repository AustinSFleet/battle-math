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
   <div>
   <div className= "page-header" align="left">

       <span className="labelText"> Name: </span>
       {this.props.name} {" "}
       <span className="labelText"> Level: </span>
       {this.props.level}
       <span className="labelText"> Coins: </span>
       {this.props.coins}
    
     
    </div>   
    <button id="logout" className="btn btn-md btn-danger" onClick={this.clickLogout}>Logout</button>
    <button id="save" className="btn btn-md btn-primary" onClick={this.clickSave}>Save</button>
    </div>
   )}

}

export default StatusBar;
