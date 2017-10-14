import React, { Component } from "react";

class Answer_Box extends Component {

  render() {
    return (
      <div>
        <form style={this.props.state.seeProblemBox}>
          <h3>{this.props.state.problem.A} + {this.props.state.problem.B}</h3>
          <input
            type="input"
            name="userAnswer"
            onChange={this.props.onChange}
            value={this.props.state.userAnswer}
          />
          <br/>
          <button onClick={this.props.submit}>Submit Answer</button>
        </form>
        <div style={this.props.state.seeAttackBtns}>
          <button
            onClick={this.props.attack}
            >Addition Attack!
          </button>
        </div>
        <div
          onClick={this.props.handleResult}
          className="result-box"
          style={this.props.state.seeResultBox}
        >
          <h2>{this.props.state.actionHeading}</h2>
          <h4>{this.props.state.actionSubHead}</h4>
        </div>
        <div
          onClick={this.props.handleCounter}
          className="result-box"
          style={this.props.state.seeCounterAttack}
        >
          <h2>{this.props.state.actionHeading}</h2>
          <h4>{this.props.state.actionSubHead}</h4>
        </div>
      </div>
    )
  }
}

export default Answer_Box;
