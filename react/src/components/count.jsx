import React, { Component } from "react";

class Count extends Component {
  state = {
      count : 0   
  };

  handleCount = () => {
    let count = this.state.count;
    count++;
    this.setState({count});
  } 
  render() {
    return (
      <div className="container m-2">
        
        <h1 className="m-2">{this.state.count}</h1>
        <button onClick={this.handleCount} className="btn btn-primary m-2">Click To Increase Count</button>
        
      </div>
    );
  }
}

export default Count;
