import React, { Component } from 'react';
import Note from './Note';
import EditDeleteItems from './EditDeleteItems';

export default class NoteAndDone extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      input: '',
      notes: [],
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickDeleteItem = this.handleClickDeleteItem.bind(this);
    this.handleClickEditItem = this.handleClickEditItem.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  handleClick(e) {
    let input = document.getElementById('textarea-note').value;
    if (input && !/^\s*$/.test(input)) {
      this.setState({
        notes: this.state.notes.concat(this.state.input)
      });
    }
  }

  handleClickEditItem(i) {    
    let input = document.getElementById("pop-up-input-"+i);
    input.disabled = false;
    input.focus();
  }

  handleEditChange(i, e) {
    let notes = this.state.notes.slice();
    let index = i;

    notes[index] = e.target.value;

    this.setState({
      notes: notes,
    });
  }

  handleClickDeleteItem(i) {
    let index = i;
    let notes = this.state.notes.slice();
    
    notes = notes.slice(0,index).concat(notes.slice(index+1,notes.length));
    
    this.setState({
      notes: notes,
    })

  }

  render() {
    return (
      <div className="NoteAndDone">
        <div className="Title">Note</div>
        <textarea id="textarea-note" onChange={this.handleChange} placeholder='Note important things here...' />
        <div className="button-note-container">
          <div className="div-button-note">
          <div className="div-button-note-2">
            <button className="btn btn-primary btn-modify" id="button-save-note" onClick={this.handleClick}>Save</button>        
          </div>
          <div className="div-button-note-1">
            <EditDeleteItems 
            items={this.state.notes}
            onClickDelete={this.handleClickDeleteItem}
            onClickEdit={this.handleClickEditItem}
            onChangeEdit={this.handleEditChange}
            />
          </div>
          </div>
        </div>
        <div className="note-section">
          <Note notes={this.state.notes}/>
        </div>
      </div>
    );
  }
}