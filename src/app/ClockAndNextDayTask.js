import React, { Component } from 'react';
import Clock from 'react-clock';
import ClockDigital from './ClockDigital';
import DaySelector from './DaySelector';
import NextDayTask from './NextDayTask';

export default class ClockAndNextDayTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: 'monday',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      selectedDay: e.target.value,
    })
  }

  render() {
    return (
      <div className="ClockAndNextDayTask">
        {/* <div className="analog-clock">
          <Clock className="react-clock"
            value={this.props.time} 
            hourHandLength={60}
            hourHandWidth={5}
            hourMarksLength={15}
            hourMarksWidth={5}
            minuteHandLength={80}
            minuteHandWidth={2.5}
            minuteMarksWidth={2}
            secondHandWidth={2}
            renderNumbers={true}
          />
        </div> */}
        <ClockDigital time={this.props.time} urgencyColor={this.props.urgencyColor}/>
        <br/><br/>
        <DaySelector onChangeDay={this.handleChange}/>
        <NextDayTask selectedDay={this.state.selectedDay}/>
      </div>
    );
  }
}