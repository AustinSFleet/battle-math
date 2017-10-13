import React, { Component } from "react";

class Answer_Box extends Component {
  render() {
    return (
      <form>
        <h3></h3>
        <input
          type="input"
          name="userAnswer"
          onChange={this.props.onChange}
          value={this.props.state.newPosition}
        />
        <br/>
        <button onClick={this.props.click}>Submit Answer</button>
      </form>
    )
  }
}

export default Answer_Box;
