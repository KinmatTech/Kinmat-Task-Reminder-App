import React, { Component } from 'react';

export default class TaskNextDay extends Component {
  render() {
    return (
      <div className="TaskNextDay">
        <ul className="next-day-task-list">
          {
            this.props.task.map((task, index) => 
              <li key={index}>{task}</li>
            ) 
          }
        </ul>
      </div>
    );
  }
}