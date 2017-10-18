import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './Game/Main';
import Login from './Login&CreateNew/Login';
import Create from './Login&CreateNew/Create';
import NoMatch from './NoMatch';
import API from "./utils/API"
import './App.css';

class App extends Component {
  state = {
    me: {},
    userName: "",
    password: "",
    setUserName: "",
    setPassword: "",
    confirmPassword: "",

  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loginSubmit = event => {
    event.preventDefault();
    var loginData = {
      userName: this.state.userName,
      password: this.state.password,
    }
    API.login(loginData).then(console.log)
  };

  createCharacter = event => {

  }

  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/login"
            render={() => <Login/>}
            handleInputChange={this.handleInputChange}
            loginSubmit={this.loginSubmit}
            userName={this.state.userName}
            password={this.state.password}
          />
          <Route exact path="/new_character"
            component={Create}
            handleInputChange={this.handleInputChange}
            setUserName={this.state.setUserName}
            setPassword={this.state.setPassword}
            confirmPassword={this.state.confirmPassword}
            createCharacter={this.createCharacter}

          />
          <Route exact path="/"
            render={() => Object.keys(this.state.me).length ?
              <Main character={this.state.me} /> :
              <Login />
            }
          />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    );
  };
};

export default App;
