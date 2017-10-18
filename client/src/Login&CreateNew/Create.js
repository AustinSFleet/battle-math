import React, { Component } from "react";
import "./Create.css"

class Create extends Component {

  state = {
    page1: {display:"block"},
    page2: {display:"none"},
    images: [
      {
        name:"finn",
        value:"/images/Finn.jpg",
        alt:"Adventure Time Finn",
        src:"images/small_Finn.png"
      },
      {
        name:"mario",
        value:"/images/mario.jpg",
        alt:"super mario",
        src:"images/small_mario.png"
      },
      {
        name:"leonardo",
        value:"/images/leonardo.jpg",
        alt:"ninja turtle leonardo",
        src:"images/small_leonardo.png"
      },
      {
        name:"gumball",
        value:"/images/gumball.jpg",
        alt:"gumball",
        src:"images/small_gumball.png"
      },
      {
        name:"batman",
        value:"/images/batman.jpg",
        alt:"lego batman",
        src:"images/small_batman.png"
      }
    ]
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

                <div id="pick-img-box">
                  {this.state.images.map(image => (
                    <div className="pick-img">
                      <input
                        type="radio"
                        name={image.name}
                        value={image.value}
                      />
                      <img
                        alt={image.alt}
                        src={image.src}
                      />
                    </div>
                  ))}
                </div>

              </form>
            </div>

      </div>
    )
  }
}

export default Create;
