import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './Game/Main';
import Login from './Login&CreateNew/Login';
import Create from './Login&CreateNew/Create';
import NoMatch from './NoMatch';
import './App.css';

class App extends Component {
  state = {
    me: {},
    userName: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loginSubmit = event => {
    event.preventDefault();
  }



  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/login"
            component={Login}
            handleInputChange={this.handleInputChange}
            loginSubmit={this.loginSubmit}
            userName={this.state.userName}
            password={this.state.password}
          />
          <Route exact path="/" component={Main} character={this.state.me}/>
          <Route exact path="/new_character" component={Create} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    );
  };
};

export default App;
