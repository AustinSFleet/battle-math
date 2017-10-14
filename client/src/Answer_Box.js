import React, { Component } from "react";

class Answer_Box extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.attack}
          style={this.props.state.seeAttackBtn}
          >Addition Attack!
        </button>
        <form style={this.props.state.seeProblemBox}>
          <h3>{this.props.state.problem.A} + {this.props.state.problem.B}</h3>
          <input
            type="input"
            name="userAnswer"
            onChange={this.props.onChange}
            value={this.props.state.newPosition}
          />
          <br/>
          <button onClick={this.props.submit}>Submit Answer</button>
        </form>
      </div>
    )
  }
}

export default Answer_Box;
