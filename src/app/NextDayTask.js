import React, { Component } from 'react';
import EditDeleteItems from './EditDeleteItems';
import TaskNextDay from './TaskNextDay';

export default class NextDayTask extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      taskday: {
                monday: [], 
                tuesday: [],
                wednesday: [],
                thursday: [],
                friday: [],
                saturday: [],
                sunday: [],
              },
    }

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickDeleteItem = this.handleClickDeleteItem.bind(this);
    this.handleClickEditItem = this.handleClickEditItem.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);

  }

  handleKeyPress(e) {
    if(e.key === 'Enter' && e.target.value && !/^\s*$/.test(e.target.value)) {
      let taskday = Object.assign({}, this.state.taskday);

      taskday[this.props.selectedDay] = taskday[this.props.selectedDay].concat(e.target.value);
      e.target.value = "";

      this.setState({
        taskday: taskday,
      });
    }
  }

  handleChange(val) {
    this.setState({
      value: val
    });
  }

  handleClickEditItem(i) {    
    let input = document.getElementById("pop-up-input-"+i);
    input.disabled = false;
    input.focus();
  }

  handleEditChange(i, e) {
    let taskday = Object.assign({}, this.state.taskday);
    let index = i;
    let selectedDay = this.props.selectedDay;

    taskday[selectedDay][index] = e.target.value;

    this.setState({
      taskday: taskday,
    });
  }

  handleClickDeleteItem(i) {
    let index = i;
    let selectedDay = this.props.selectedDay;
    let taskday = Object.assign({}, this.state.taskday);
    
    taskday[selectedDay] = taskday[selectedDay].slice(0,index).concat(taskday[selectedDay].slice(index+1,taskday[selectedDay].length));
    
    this.setState({
      taskday: taskday,
    })

  }
  
  render() {
    return (
      <div className="NextDayTask">
        <div className="Title">Next Day</div>
        <input className="input-text" placeholder='Next day tasks...' onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
        <EditDeleteItems 
          items={this.state.taskday[this.props.selectedDay]} 
          onClickDelete={this.handleClickDeleteItem}
          onClickEdit={this.handleClickEditItem}
          onChangeEdit={this.handleEditChange}
        />
        <TaskNextDay task={this.state.taskday[this.props.selectedDay]} />
      </div>
    ); 
  }
}