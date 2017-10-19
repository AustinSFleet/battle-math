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
<<<<<<< HEAD
    me: {},
    userName: "",
    password: ""
=======
    me: {me: 6},
    userName: "",
    password: "",
    setUserName: "",
    setPassword: "",
    confirmPassword: "",
    page1: {display:"block"},
    page2: {display:"none"}
>>>>>>> test
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loginSubmit = event => {
    event.preventDefault();
<<<<<<< HEAD
  }


=======
    var loginData = {
      userName: this.state.userName,
      password: this.state.password,
    }
    console.log(loginData);
    API.login(loginData).then(console.log)
  };

  pageChange = (event) => {
    event.preventDefault();
    if (this.state.setPassword != this.state.confirmPassword){
      this.setState({
      setPassword: "",
      confirmPassword: ""
      })
      alert("Passwords Must Match!");
    }
    else {
      this.setState({
        page1: {display:"none"},
        page2: {display:"block"}
      })
    }
  }
  createCharacter = (event) => {
    const newUserData = {
        setUserName: this.state.setUserName,
        setPassword: this.state.setPassword,
        img: event.target.alt
      }
    console.log(event.target.alt)
    console.log(newUserData);
  }
>>>>>>> test

  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/login"
<<<<<<< HEAD
            component={Login}
=======
            render={() => (<Login
>>>>>>> test
            handleInputChange={this.handleInputChange}
            loginSubmit={this.loginSubmit}
            userName={this.state.userName}
            password={this.state.password}
<<<<<<< HEAD
          />
          <Route exact path="/" component={Main} character={this.state.me}/>
          <Route exact path="/new_character" component={Create} />
=======
          />)}/>

          <Route exact path="/new_character"
            render={() => (<Create
            page1={this.state.page1}
            page2={this.state.page2}
            pageChange={this.pageChange}
            handleInputChange={this.handleInputChange}
            setUserName={this.state.setUserName}
            setPassword={this.state.setPassword}
            confirmPassword={this.state.confirmPassword}
            createCharacter={this.createCharacter}
          />)}/>

          />
          <Route exact path="/"
            render={() => Object.keys(this.state.me).length ?
              <Main character={this.state.me} /> :
              <Login
              handleInputChange={this.handleInputChange}
              loginSubmit={this.loginSubmit}
              userName={this.state.userName}
              password={this.state.password}
            />
            }
          />
>>>>>>> test
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    );
  };
};

export default App;
