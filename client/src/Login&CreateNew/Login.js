import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './Login.css';
import PasswordMask from 'react-password-mask';

class Login extends Component {

  render() {

    return (

    <div>
      <form>
        <h1>Login</h1>
        <p>Name</p>
        <input
          type="text"
          onChange = {this.props.handleInputChange}
          name = "userName"
          value={this.props.userName}
        />
        <p>Password</p>
        <input
          type = "password"
          name="password"
          onChange = {this.props.handleInputChange}
          value={this.props.password}
        />
        <button
          onClick = {this.props.loginSubmit}
        >Submit</button>
      </form>
    </div>
    )
  }
}

export default Login;
