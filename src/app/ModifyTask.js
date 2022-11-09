import React, { Component } from 'react';
import Popup from 'reactjs-popup';

export default class ModifyTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      isStarted: false,
    };

    this.handleClickStart = this.handleClickStart.bind(this);
  }

  handleClickStart(close) {    
    this.props.onClickStart();
    close();
  }
  
  render() {
    return (
      <div className="ModifyTask">
        <Popup
          trigger={
            <button 
              className="btn btn-success btn-modify" 
              disabled={!this.props.task.length}
              style={{backgroundColor: (this.state.isStarted ? '#aaa' : ''),
                      borderColor: (this.state.isStarted ? '#aaa' : ''),
                    }}
            >
              {this.state.isStarted ? 'Pause' : 'Start'}
            </button>}
          modal
          on="click"
          contentStyle={{width: '200px'}}
        >
          {close => (
            <div className="pop-up-start">
              <h3>Set Duration </h3>
              <div className="flex-start-container">
                <div className="flex-start-item">
                <p>hours</p>
                <input type="number" className="input-time" id="input-time-hour" min="0" max="23" value={this.props.timeHour} onChange={this.props.onChangeTime} />
                </div>
                <div className="flex-start-item">
                <p>minutes</p>
                <input type="number" className="input-time" id="input-time-minute" min="0" max="59" value={this.props.timeMinute} onChange={this.props.onChangeTime} />
                </div>
                <div className="flex-start-item">
                <p>seconds</p>
                <input type="number" className="input-time" id="input-time-second" min="0" max="59" value={this.props.timeSecond} onChange={this.props.onChangeTime} />
                </div>
              </div>
              <div className="btn-pop-up-start">
                <button className="btn btn-success btn-start" onClick={(e) => {this.handleClickStart(close)}}>Start</button>
                <button className="btn btn-start" onClick={close}>Cancel</button>
              </div>
            </div> )
          }
        </Popup>

        <Popup
          trigger={<button className="btn btn-warning btn-modify" disabled={!this.props.task.length}>Edit</button>}
          on="click"
          modal
          contentStyle={{width: 'auto'}}
        > 
        {close => ( 
          <div className="pop-up-edit">
            {      
              this.props.task.map((task, index) => 
                <tr key={index} className="pop-up div">
                  <td className="btn-pop-up-div">
                    <button className="btn btn-warning btn-edit-pop-up" id={"btn-edit-"+(index)} onClick={(e) => this.props.onClickEdit(index, e)}><i className="fas fa-edit"/></button>
                  </td>
                  <td className="content-pop-up-div">
                    <input id={"pop-up-input-"+index} className="pop-up-input" value={this.props.task[index].value} onChange={(e) => this.props.onChangeEdit(index, e)}/> 
                  </td>
                </tr>
              ) 
            }
            <button className="btn btn-primary btn-ok" onClick={close}>OK</button>
          </div>
        )}
        </Popup>
        <Popup
          trigger={<button className="btn btn-danger btn-modify" disabled={!this.props.task.length}>Delete</button>}
          on="click"
          modal
          contentStyle={{width: 'auto'}}
        >
        { close => (            
          <div className="pop-up-delete">
          {      
            this.props.task.map((task, index) => 
              <tr>
                <td key={index} className="btn-pop-up">
                  <button key={index} id={"btn-delete-"+(index)} className="btn btn-danger btn-delete-pop-up" onClick={(e) => this.props.onClickDelete(index, e)}><i className="fas fa-trash-alt"/></button>
                </td>
                <td className="content-pop-up">
                  <p className="pop-up-label" style={{textDecoration: task.checked ? 'line-through' : ''}}>{this.props.task[index].value}</p> 
                </td>
              </tr>
            ) 
          }
          <button className="btn btn-primary btn-ok" onClick={close}>OK</button>
          </div>
        )} 
        </Popup>
      </div>
    );
  }
}