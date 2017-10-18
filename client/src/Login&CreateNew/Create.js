import React, { Component } from "react";

class Create extends Component {

  state = {
    page1: {display:"block"},
    page2: {display:"none"}
  }

  pageChange = (event) => {
    event.preventDefault();
    this.setState({
      page1: {display:"none"},
      page2: {display:"block"}
    })
  }

  render() {

    return (

      <div>
          <div id="create1" style={this.state.page1}>
            <form>
            <div className="titleBox">
              <h1>New Character</h1>
            </div>
            <p>Choose a Character Name</p>
            <input
              type="text"
              onChange = {this.props.handleInputChange}
              name = "userName"
              value={this.props.setUserName}
            />
            <p>Password</p>
            <input
              type = "password"
              name="password"
              onChange = {this.props.handleInputChange}
              value={this.props.setPassword}
            />
            <p>Confirm Password</p>
            <input
              type = "password"
              name="confirmPassword"
              onChange = {this.props.handleInputChange}
              value={this.props.password}
            />
            <div>
              <button
                onClick = {this.pageChange}
              > Submit </button>
            </div>
            </form>
          </div>
          <div id="create2" style={this.state.page2}>
            <form>
              <h1>How do you want to look?</h1>
              <div>
                <input type="radio"
                  name="finn" value="/images/Finn.png"/>
                <img
                  alt="Adventure Time Finn"
                  src={"/images/small_Finn.png"}
                />
              </div>
            </form>
          </div>
      </div>
    )
  }
}

export default Create;
