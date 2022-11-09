import React, { Component } from 'react';

export default class Note extends Component {

  render() {
    return (
      this.props.notes.map((note, index) => 
        <div className="note-important" key={index}>
          {note.split("\n").map(line => <p>{line}<br/></p>)}
        </div>
        )
      
    ); 
   
  }
}