import React, { Component } from 'react';
import Popup from 'reactjs-popup';

export default class EditDeleteItems extends Component {
   
  render() {
    return (
      <div className="EditDeleteItems">
        <Popup
          trigger={<button className="btn btn-warning btn-modify" disabled={!this.props.items.length}>Edit</button>}
          on="click"
          modal
          contentStyle={{width: 'auto'}}
        > 
        {close => ( 
          <div className="pop-up-edit">
            {      
              this.props.items.map((task, index) => 
                <tr key={index} className="pop-up div">
                  <td className="btn-pop-up-div">
                    <button className="btn btn-warning btn-edit-pop-up" id={"btn-edit-"+(index)} onClick={(e) => this.props.onClickEdit(index, e)}><i className="fas fa-edit"/></button>
                  </td>
                  <td className="content-pop-up-div">
                    <input id={"pop-up-input-"+index} className="pop-up-input" value={this.props.items[index]} onChange={(e) => this.props.onChangeEdit(index, e)}/> 
                  </td>
                </tr>
              ) 
            }
            <button className="btn btn-primary btn-ok" onClick={close}>OK</button>
          </div>
        )}
        </Popup>
        <Popup
          trigger={<button className="btn btn-danger btn-modify" disabled={!this.props.items.length}>Delete</button>}
          on="click"
          modal
          contentStyle={{width: 'auto'}}
        >
        { close => (            
          <div className="pop-up-delete">
          {      
            this.props.items.map((task, index) => 
              <tr>
                <td key={index} className="btn-pop-up">
                  <button key={index} id={"btn-delete-"+(index)} className="btn btn-danger btn-delete-pop-up" onClick={(e) => this.props.onClickDelete(index, e)}><i className="fas fa-trash-alt"/></button>
                </td>
                <td className="content-pop-up">
                  <p className="pop-up-label">{this.props.items[index]}</p> 
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