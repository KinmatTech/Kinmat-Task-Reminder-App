import React, { Component } from 'react';

export default class DaySelector extends Component {
  
  render() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return (
      <div className="DaySelector">
        <select className="dropdown" id="DaySelector" onChange={this.props.onChangeDay}>
        {
          days.map((day,index) => <option key={index} value={day.toLowerCase()}>{day}</option>)
        }
        </select>
      </div>
    ); 
  }
}
