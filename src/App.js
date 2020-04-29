import React, {Component} from 'react';
import './App.css';
import CurrentNote from './CurrentNote/CurrentNote';
import NoteInput from './NoteInput/NoteInput';
import firebase from 'firebase/app';
import 'firebase/database';
import Firebase from './Config/config';


class App extends Component {

  constructor(props) {
    super(props);
    this.db = Firebase.database().ref().child('notes');
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);

    this.state = {
      notes : []}
  }

    componentDidMount(){
    console.log("before: ", this.state.notes);
    const prev_notes = this.state.notes;
    console.log("after: ", prev_notes);
    this.db.on('child_added', snap => {
      prev_notes.push({
        noteId : snap.key,
        noteContent : snap.val().noteContent
      })
    });
    console.log("later: ", prev_notes);
    this.setState({
      notes : prev_notes
    });
    console.log("last: ", this.state.notes);

    this.db.on('child_removed', snap => {
      for(var i = 0; i < prev_notes.length; i++){
        //console.log("array is", prev_notes[i]);
        if(prev_notes[i].noteId === snap.key){
          //console.log("note in matching if is", snap.noteContent);
          prev_notes.splice(i, 1);
        }
      }
    });
    this.setState({
      notes : prev_notes
    });
  }



  addNote(note){
    console.log("note is", note);
    this.db.push().set({noteContent : note});
    this.setState(this.state);
  }

  deleteNote(noteId){
    console.log("note id in deletenote is", noteId);
    let toBeDeleted = noteId;
    for(var i = 0; i < this.state.notes.length; i++){
      //console.log("array is", this.state.notes[i]);
      if(this.state.notes[i].noteContent === noteId){
        toBeDeleted = this.state.notes[i].noteId;
      }
    }
    this.db.child(toBeDeleted).remove();
    this.setState(this.state);
  }

  render(){
    return (
      <div className = "current">
        <div><NoteInput addNote = {this.addNote}></NoteInput></div>
        <div>
        {
        this.state.notes.map((note) => {
          return (
            <CurrentNote deleteNote={this.deleteNote} noteContent={note.noteContent} noteId={note.noteId} key = {note.noteId}></CurrentNote>
          )
        })
      }
      </div>
      </div>
      
    );
  }
  }
  

export default App;
