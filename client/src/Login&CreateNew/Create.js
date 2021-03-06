import React, { Component } from "react";
import "./Create.css"
import { Link } from "react-router-dom";

class Create extends Component {

  state = {
    images: [
      {
        name:"finn",
        data:"/images/Finn.png",
        alt:"Adventure Time Finn",
        src:"images/smalls/small_Finn.png"
      },
      {
        name:"mario",
        data:"/images/mario.png",
        alt:"super mario",
        src:"images/smalls/small_mario.png"
      },
      {
        name:"leonardo",
        data:"/images/leonardo.png",
        alt:"ninja turtle leonardo",
        src:"images/smalls/small_leonardo.png"
      },
      {
        name:"charmander",
        data:"/images/charmander.png",
        alt:"charmander",
        src:"images/smalls/small_charmander.png"
      },
      {
        name:"gumball",
        data:"/images/gumballFight.png",
        alt:"gumball",
        src:"images/smalls/small_Gumball.png"
      },
      {
        name:"naruto",
        data:"/images/naruto.png",
        alt:"naruto",
        src:"images/smalls/small_naruto.png"
      },
      {
        name:"batman",
        data:"/images/batman.png",
        alt:"lego batman",
        src:"images/smalls/small_batman.png"
      },
      {
        name:"spongebob",
        data:"/images/spongebob.png",
        alt:"spongebob",
        src:"images/smalls/small_spongebob.png"
      },
      {
        name:"son-goku",
        data:"/images/son_goku.png",
        alt:"son goku",
        src:"images/smalls/small_son_goku.png"
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
                <Link to="/" id="createLink"> Already have a Character? </Link>
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
