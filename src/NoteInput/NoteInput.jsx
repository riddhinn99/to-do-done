import React, {Component} from 'react';
import './NoteInput.css';

class NoteInput extends Component{
    constructor(props){
        super(props);
        this.state = { newNoteContent : ''};
        this.textChange = this.textChange.bind(this);
        this.writeNote = this.writeNote.bind(this)
    }

    textChange(e){
        this.setState({
            newNoteContent : e.target.value
        })
    }

    writeNote(e){
        this.props.addNote(this.state.newNoteContent);
        this.setState({
            newNoteContent : ''
        })
    }

    render(props){
        return(
            <div className="inputForm">
                <input type="text" placeholder = "Enter New Note" 
                value={this.state.newNoteContent}
                onChange={this.textChange}></input>
                <button onClick={this.writeNote}>ADD</button>
            </div>
        );
    }
}

export default NoteInput;