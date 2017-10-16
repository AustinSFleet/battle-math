import React, { Component } from "react";
import ReactDOM from 'react-dom';

class Login extends Component {

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {

    return (

    <div>
      <form>
        <h3>Name</h3>
        <input
          type="text"
          onChange = {this.handleInputChange}
        />
        <h3>Password</h3>
        <input type="password"/>
      </form>
    </div>
    )
  }
}

export default Login;
