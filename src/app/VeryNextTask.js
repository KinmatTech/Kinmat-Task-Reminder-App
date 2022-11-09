import React, { Component } from 'react';

export default class VeryNextTask extends Component {
  render() {
    return ( this.props.task === undefined ? <div/> : (
      <div className="VeryNextTask">
        <input 
          type="checkbox" 
          id={"next-task-0"}
          className="checkbox checkbox-circle" 
          style={{visibility: this.props.task ? this.props.task.visibility : 'hidden'}}
          onChange={this.props.onChange}
          checked={this.props.task.checked}
          disabled={this.props.task.disabled}
        />
          <p className="checkbox-text checkbox-text-verynexttask" 
          style={{
            textDecoration: this.props.task ? (this.props.task.checked ? 'line-through' : '') : null,
            color: this.props.urgencyColor
          }}>
          {this.props.task.value}
          </p> 
      </div>)
    ); 
  }
}