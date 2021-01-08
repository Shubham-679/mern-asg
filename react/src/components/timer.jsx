import React, { Component } from "react";

class Timer extends Component {
  state = {
    time: {},
    seconds: 10,
  };

  timer = 0;

  secondsToTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60));
    let minutes = Math.floor((secs % (60 * 60)) / 60);
    let seconds = Math.ceil((secs % (60 * 60)) % 60);

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  };

  componentDidMount() {
    let timeLeft = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeft });
  }

  startTimer = () => {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  };

  countDown = () => {
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    if (seconds === 0) {
      clearInterval(this.timer);
    }
  };

  render() {
    return (
      <div>
        <h1>
         
          {this.state.time.h} : {this.state.time.m} : {this.state.time.s} (Hours Left)

        </h1>
        <button className="btn btn-primary" onClick={this.startTimer}>
          Start
        </button>
      </div>
    );
  }
}

export default Timer;
