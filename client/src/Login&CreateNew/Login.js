import React, { Component } from "react";
import ReactDOM from 'react-dom';
import PasswordMask from 'react-password-mask';

class Login extends Component {
  state = {
    userName: "",
    password: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loginSubmit = event => {
    event.preventDefault();
    console.log (this.state.userName);
    console.log (this.state.password)
  }

  render() {

    return (

    <div>
      <form>
        <h3>Name</h3>
        <input
          type="text"
          onChange = {this.handleInputChange}
          name = "userName"
          value={this.state.userName}
        />
        <h3>Password</h3>
        <input
          type = "password"
          name="password"
          onChange = {this.handleInputChange}
          value={this.state.password}
        />
        <button
          onClick = {this.loginSubmit}
        >Submit</button>
      </form>
    </div>
    )
  }
}

export default Login;
