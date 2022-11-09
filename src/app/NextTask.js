import React, { Component } from 'react';

export default class NextTask extends Component {
  render() {
    return (
      <div className="NextTask">
        <ul className="task-list">
          {      
            this.props.tasklist.map((task, index) => 
              <li >
                <input type="checkbox" id={"next-task-"+(index+1)} checked={task.checked} onChange={this.props.onChange} className="checkbox"/>
                <p className="checkbox-text" style={{textDecoration: task.checked ? 'line-through' : ''}}>{task.value}</p> 
              </li>
            ) 
          }
        </ul>
      </div>
    );
  }
}