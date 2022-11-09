import React, { Component } from 'react';

export default class TimeLeft extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fireAlert: false,
    }
  }

  countTimeLeft(remainingDuration) {

    if (remainingDuration > 0)
    {
      let hour = Math.floor((remainingDuration / 3600));
      let minute = Math.floor((remainingDuration / 60));
      let second = (remainingDuration % 60);

      if (second === 1) {
        alert("Time is up for next task!");
      }

      return (hour < 10 ? '0' + hour : hour )
        + ':' + (minute < 10 ? '0' + minute : minute ) 
        + ':' + (second < 10 ? '0' + second : second );
      
    }
      
    return "00:00:00";
  }

  render() {
    return (
      <div className="TimeLeft-container">
        <span className="TimeLeft" style={{color: this.props.urgencyColor}}>{this.countTimeLeft(this.props.remainingDuration)}</span><span className="remaining" style={{color: this.props.urgencyColor}}>remaining</span>
      </div>
    ); 
  }
}