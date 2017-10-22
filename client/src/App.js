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
    me: {
      name: "Redman",
      level: 5,
      experience: 200,
      abilities: [],
      items: [],
      maxHP: 20,
      img:"/images/batman.png",
      HP: 12,
      maxHP: 12,
      coins:0
    },
    newCharSuccess: false,
    userName: "",
    password: "",
    setUserName: "",
    setPassword: "",
    confirmPassword: "",
    page1: {display:"block"},
    page2: {display:"none"}

  };

  updateMe = (upMe) => {
    this.setState({
      me: upMe
    })
  }


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

    API.login(loginData).then((response) => {
      console.log("data:")
      console.log(response.data)
      if (response.data.error) {
        console.log(response);
        alert("Login/Password don't match!")
      }
      else{
        console.log("making character....")
        const character = {
          name: response.data.userName,
          img: response.data.image,
          level: response.data.level,
          experience: response.data.experience,
          coins: response.data.coins,
          HP: response.data.HP
        }
        this.setState({
          me: character
        });
      }
    }).catch(function (error) {
        console.log(error);
     });
  }



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
    API.newUser(newUserData).then((response) => {
       const character = {
         name: response.data.name,
         img: response.data.img,
         level: response.data.level,
         experience: response.data.experience,
         coins: response.data.coins,
         HP: response.data.HP
       }
       this.setState({
         me: character,
         newCharSuccess: true
       }).catch(function (error) {
         console.log(error);
      });
    });
  }


  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/login"

            component={Login}

            render={() => (<Login
              handleInputChange={this.handleInputChange}
              loginSubmit={this.loginSubmit}
              userName={this.state.userName}
              password={this.state.password}
            />)
            }
          />

          <Route exact path="/new_character"
            render={() => this.state.newCharSuccess
              ? <Main
                  me={this.state.me}
                  updateMe={this.updateMe} />
              : <Create
                  page1={this.state.page1}
                  page2={this.state.page2}
                  pageChange={this.pageChange}
                  handleInputChange={this.handleInputChange}
                  setUserName={this.state.setUserName}
                  setPassword={this.state.setPassword}
                  confirmPassword={this.state.confirmPassword}
                  createCharacter={this.createCharacter}
                />
              }
            />

          />
          <Route exact path="/"
            render={() => Object.keys(this.state.me).length
              ? <Main
                me={this.state.me}
                updateMe={this.updateMe} />
              : <Login
                handleInputChange={this.handleInputChange}
                loginSubmit={this.loginSubmit}
                userName={this.state.userName}
                password={this.state.password}
            />
            }
          />
        </Switch>
      </div>
    </Router>
    );
  };
};

export default App;
