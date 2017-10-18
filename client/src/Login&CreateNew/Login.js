import React, { Component } from "react";
import ReactDOM from 'react-dom';
import PasswordMask from 'react-password-mask';

class Login extends Component {

  render() {

    return (

    <div>
      <form>
        <h3>Name</h3>
        <input
          type="text"
          onChange = {this.props.handleInputChange}
          name = "userName"
          value={this.props.userName}
        />
        <h3>Password</h3>
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
