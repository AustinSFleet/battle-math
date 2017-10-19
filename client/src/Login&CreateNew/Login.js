import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './Login.css';
import PasswordMask from 'react-password-mask';
import { Link } from 'react-router-dom'

class Login extends Component {

  render() {

    return (

    <div>
    <h2>{this.props.thing}</h2>
      <form>
        <div className="titleBox">
          <h1>Login</h1>
          <Link to="/new_character" id="createLink">Create New Character</Link>
        </div>
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
        <div>
          <button
            onClick = {this.props.loginSubmit}
          > Submit </button>
        </div>
      </form>
    </div>
    )
  }
}

export default Login;
