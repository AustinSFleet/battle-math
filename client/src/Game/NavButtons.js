import React, { Component } from "react";
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
   <div className= "page-header" align="right">

     <button className="btn btn-md btn-primary" onClick={this.clickSave}>Save</button>
     <button  className="btn btn-md btn-danger" onClick={this.clickLogout}>Logout</button>
    </div>
   )}

}

export default NavButtons;
