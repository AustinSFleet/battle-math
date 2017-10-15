import React, { Component } from "react";

class Create extends Component {

  render() {
      let inline = {display : "inline-block" };
    return (

    <div>
      <form>
        <h3>Name</h3>
        <input type="text">
        <h3>Password</h3>
        <input type="password">
      </form>
    </div>
    )
  }
}

export default Create;
