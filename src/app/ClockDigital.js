import React, { Component } from 'react';

class ClockDigital extends Component {
  
  render() {
    return (
      <h1 className="clock-digital" style={{color: this.props.urgencyColor}}>
      {
        (this.props.time.getHours() < 10 ? '0' + this.props.time.getHours() : this.props.time.getHours() )
        + ':' + (this.props.time.getMinutes() < 10 ? '0' + this.props.time.getMinutes() : this.props.time.getMinutes() ) 
        + ':' + (this.props.time.getSeconds() < 10 ? '0' + this.props.time.getSeconds() : this.props.time.getSeconds() ) 
      }
      </h1>
    );
  }
}

export default ClockDigital;