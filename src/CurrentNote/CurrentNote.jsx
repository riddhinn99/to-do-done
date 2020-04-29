import React, {Component} from 'react';
import './CurrentNote.css';

class CurrentNote extends Component{

    constructor(props){
        super(props);
        this.noteContent = props.noteContent;
        this.nodeId = props.nodeId;
        this.deleteNote = this.deleteNote.bind(this);
    }

    deleteNote(noteId){
        console.log("note id is", noteId);
        this.props.deleteNote(noteId);
    }

    render(){
        return(
            <div className="noteElement">
                <p>{this.noteContent}
                <span className="cross" value={this.noteContent} onClick ={() => this.deleteNote(this.noteContent)}>X</span>
                </p>
            </div>
            
        );
    }
}

export default CurrentNote;