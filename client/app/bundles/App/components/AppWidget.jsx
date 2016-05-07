import React, { PropTypes } from 'react';
import _ from 'lodash';
import NewNoteComponent from './NewNoteComponent';
import NoteComponent from './NoteComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Simple example of a React "dumb" component
export default class AppWidget extends React.Component {
  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".
    updateName: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    _.bindAll(this, 'handleChange');

    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    this.getNotes();
  }

  getNotes() {
    let component = this;
    let url = "/notes.json";
    jQuery.getJSON(url, function(data){
      component.setState({
        notes: data.notes
      });
    });
  }

  onNewNote(noteTitle, noteContent) {
    let newNote = {
      title: noteTitle,
      content: noteContent
    };

    let newNotes = this.state.notes.concat(newNote);
    this.setState({
      notes: newNotes
    });

    this.saveData(newNote);
  }

  saveData(newNotes){
    jQuery.ajax({
      type: "POST",
      url: "/notes.json",
      data: JSON.stringify({
        note: newNotes
      }),
      contentType: "application/json",
      dataType:"json"
    });
  }

  updateNote(note){
    jQuery.ajax({
      type: "PATCH",
      url: `/notes/${note.id}.json`,
      data: JSON.stringify({
        note: note
      }),
      contentType: "application/json",
      dataType:"json"
    });
  }

  // React will automatically provide us with the event `e`
  handleChange(e) {
    const name = e.target.value;
    this.props.updateName(name);
  }

  render() {
    return(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div className="notes">
        <h1>Notes</h1>
        <ul>
          {this.state.notes.map(function(note){
            return(
              <NoteComponent note={note} onUpdate={this.updateNote.bind(this)} />
            );
          }.bind(this))}
        </ul>
        <h2>New Note?</h2>
        <NewNoteComponent onSubmit={this.onNewNote.bind(this)}/>
      </div>
      </MuiThemeProvider>
    );
  }
}
