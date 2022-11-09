import React, { Component } from 'react';
import TimeLeft from './TimeLeft';
import VeryNextTask from './VeryNextTask';
import NextTask from './NextTask';
import ModifyTask from './ModifyTask';

export default class TodayTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      task: [],  
      numberDoneTasks: 0,
    }

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeCheck = this.handleChangeCheck.bind(this);
    this.handleClickDeleteItem = this.handleClickDeleteItem.bind(this);
    this.handleClickEditItem = this.handleClickEditItem.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
  }

  handleKeyPress(e) {
      
    if (e.key === 'Enter' && e.target.value && !/^\s*$/.test(e.target.value)) {
      
      let newTask = this.state.task.slice();
      let numberDoneTasks = this.state.numberDoneTasks;
      
      if (numberDoneTasks < 1) {
        newTask = newTask.concat({
              visibility: 'visible', 
              disabled: false,
              checked: false,
              value: e.target.value});
      } 
      else if (numberDoneTasks === newTask.length) {
        newTask[0] = {
              visibility: 'visible', 
              disabled: false,
              checked: false,
              value: e.target.value};
        newTask[0].checked = false;
        numberDoneTasks--;
      }
      else {
        newTask.splice((this.state.task.length - this.state.numberDoneTasks), 0, {
              visibility: 'visible',
              disabled: false,
              checked: false,
              value: e.target.value});
      }

      this.setState({
        task: newTask,
        numberDoneTasks: numberDoneTasks,
      });
      
      e.target.value = "";
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleChangeCheck(e) {
    let task = this.state.task.slice();
    let index = Number(e.target.id.slice(10));

    let numberDoneTasks = this.state.numberDoneTasks;

    if (!task[index].checked) {
      task[index].checked = true;
      numberDoneTasks++;
      
      if (numberDoneTasks === task.length) {
        task[task.length] = task[index];
        task[0] = {visibility: 'hidden', disabled: true, checked: false, value: 'Congratulations! You are done with tasks today!'};
        numberDoneTasks++;
      } 
      else {
        let temp = task[index];
        for(let i = index; i < task.length - 1; i++) {
          task[i] = task[i+1];
        }
        task[task.length-1] = temp;
      }
    } 
    else {  
      if (numberDoneTasks === task.length) {
        task[0] = task[index];
        for(let i = index; i < task.length - 1; i++) {
          task[i] = task[i+1];
        }
        task = task.slice(0, task.length - 1)
        task[0].checked = false;
        numberDoneTasks--;
      }
      else {
        let temp = task[index];
        temp.checked = false;
        for (let i = task.length - numberDoneTasks; i < index; i++) {
          task[i+1] = task[i];
        }
        task[task.length - numberDoneTasks] = temp;
      }
      numberDoneTasks--;
    }

    this.setState({
      task: task,
      numberDoneTasks: numberDoneTasks,
    })
  }

  handleClickEditItem(i) {    
    let input = document.getElementById("pop-up-input-"+i);
    input.disabled = false;
    input.focus();
  }

  handleEditChange(i, e) {
    let task = this.state.task.slice();
    let index = i;

    if (task[0].value === 'Congratulations! You are done with tasks today!') {
      index += 1;
    }

    task[index].value = e.target.value;

    this.setState({
      task: task,
    });
  }

  handleClickDeleteItem(i) {
    let index = i;
    let startIndex = 0;
    let task = this.state.task.slice();
    let numberDoneTasks = this.state.numberDoneTasks;

    if (task[0].value === 'Congratulations! You are done with tasks today!') {
      index += 1;
    }

    if (task[index].checked) numberDoneTasks--;
    
    task = task.slice(startIndex,index).concat(task.slice(index+1,task.length));
    
    this.setState({
      task: task,
      numberDoneTasks: numberDoneTasks,
    })

  }

  render() {
    return (
      <div className="TodayTask">
        <div className="Title">Today</div>
        <input className="input-text " placeholder='Today tasks...' onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
        <div className="modify-task-and-timeleft">  
          <ModifyTask time={this.props.time} 
                      task={(this.state.task.length > 0 && this.state.task[0].value === 'Congratulations! You are done with tasks today!') ? this.state.task.slice(1) : this.state.task} 
                      onClickDelete={this.handleClickDeleteItem}
                      onClickEdit={this.handleClickEditItem}
                      onChangeEdit={this.handleEditChange}
                      onChangeTime={this.props.onChangeTime}
                      onClickStart={this.props.onClickStart}
                      value={this.state.value}
                      timeHour={this.props.timeHour}
                      timeMinute={this.props.timeMinute}
                      timeSecond={this.props.timeSecond}

          />
          <TimeLeft time={this.props.time} remainingDuration={this.props.remainingDuration} urgencyColor={this.props.urgencyColor}/>
        </div>
        <div className="TaskToday">
          <VeryNextTask task={this.state.task[0]} onChange={this.handleChangeCheck} urgencyColor={this.props.urgencyColor} remainingDuration={this.props.remainingDuration}/>
          <NextTask tasklist={this.state.task.slice(1)} onChange={this.handleChangeCheck} />
        </div>
      </div>
    );
  }
}