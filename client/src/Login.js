import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {

  render() {
      let inline = {display : "inline-block" };
    return (

    <div>
      <form>
        <h3>Name</h3>
        <input type="text"/>
        <h3>Password</h3>
        <input type="password"/>
        <br />
        <br />
        <input id="login" type="button" value="Submit"/>
      </form>
    </div>
    )
  }
}

export default Login;
