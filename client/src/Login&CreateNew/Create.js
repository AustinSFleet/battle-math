import React, { Component } from "react";
import "./Create.css"

class Create extends Component {

  state = {
    images: [
      {
        name:"finn",
        data:"/images/Finn.jpg",
        alt:"Adventure Time Finn",
        src:"images/small_Finn.png"
      },
      {
        name:"mario",
        data:"/images/mario.jpg",
        alt:"super mario",
        src:"images/small_mario.png"
      },
      {
        name:"leonardo",
        data:"/images/leonardo.jpg",
        alt:"ninja turtle leonardo",
        src:"images/small_leonardo.png"
      },
      {
        name:"gumball",
        data:"/images/gumball.jpg",
        alt:"gumball",
        src:"images/small_gumball.png"
      },
      {
        name:"batman",
        data:"/images/batman.jpg",
        alt:"lego batman",
        src:"images/small_batman.png"
      },
      {
        name:"spongebob",
        data:"/images/spongebob.jpg",
        alt:"lego batman",
        src:"images/small_spongebob.png"
      }
    ]
  }

  render() {

    return (

      <div>
          <div id="create1" style={this.props.page1}>
            <form>
              <div className="titleBox">
                <h1>New Character</h1>
              </div>
              <p>Choose a Character Name</p>
              <input
                type="text"
                onChange = {this.props.handleInputChange}
                name = "setUserName"
                value={this.props.setUserName}
              />
              <p>Password</p>
              <input
                type = "password"
                name="setPassword"
                onChange = {this.props.handleInputChange}
                value={this.props.setPassword}
              />
              <p>Confirm Password</p>
              <input
                type = "password"
                name="confirmPassword"
                onChange = {this.props.handleInputChange}
                value={this.props.confirmPassword}
              />
              <div>
                <button
                  onClick = {this.props.pageChange}
                > Next </button>
              </div>
              </form>
            </div>

            <div id="create2" style={this.props.page2}>
              <form>
              <h1 id="pick-img-head">What do you want to look like?</h1>
                <div id="pick-img-box">
                  {this.state.images.map((image => (
                    <div key={image.name} className="pick-img">
                      <img
                        alt={image.data}
                        src={image.src}
                        onClick =  {this.props.createCharacter}/>
                    </div>
                  )))}
                </div>
              </form>
            </div>

      </div>
    )
  }
}

export default Create;
