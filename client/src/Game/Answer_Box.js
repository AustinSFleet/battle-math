import React, { Component } from "react";

class Answer_Box extends Component {

  render() {
    return (
      <div>
        <form
          id="answer-form"
          style={this.props.state.seeProblemBox}>
          <button
            id="submitAnswer"
            onClick={this.props.submit}
            >
            {this.props.state.problem.problemDisplay}
          </button>
          <input
            type="input"
            name="userAnswer"
            onChange={this.props.onChange}
            value={this.props.state.userAnswer}
          />
          <br/>
        </form>
        <div style={this.props.state.seeAttackBtns}>
          <button id="add"
            onClick={this.props.attack}
            >Addition Attack!
          </button>
          <button id="subtract"
            onClick={this.props.attack}
            >Subtraction Heal!
          </button>
        </div>
        <div
          id="results"
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
