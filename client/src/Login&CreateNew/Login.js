import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './Login.css';
import PasswordMask from 'react-password-mask';
import { Link } from 'react-router-dom'

class Login extends Component {

  render() {

    return (

    <div>
      <form>
        <div className="titleBox">
          <h1 id="loginH1">Login</h1>
          <Link to="/new_character" id="createLink">Create New Character</Link>
        </div>
        <p className="loginP">Name</p>
        <input
          className="loginInput"
          type="text"
          onChange = {this.props.handleInputChange}
          name = "userName"
          value={this.props.userName}
        />
        <p className="loginP">Password</p>
        <input
          className="loginInput"
          type = "password"
          name="password"
          onChange = {this.props.handleInputChange}
          value={this.props.password}
        />
<<<<<<< HEAD
        <button
          onClick = {this.props.loginSubmit}
        >Submit</button>
=======
        <div>
          <button
            className="loginButton"
            onClick = {this.props.loginSubmit}
          > Submit </button>
        </div>
>>>>>>> test
      </form>
    </div>
    )
  }
}

export default Login;
