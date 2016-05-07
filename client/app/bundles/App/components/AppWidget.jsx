import React, { PropTypes } from 'react';
import _ from 'lodash';
import NewNoteComponent from './NewNoteComponent';
import NoteComponent from './NoteComponent';

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
    , deleting: false
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

  deleteNotes() {
    console.log("Delete notes, but which ones?")
    this.setState ({ notes: this.state.notes
      .filter( (note) => { return !note.delete } )
      // .forEach( (note) => {
      //   console.log("This one: " + note.title )
      // } )
    })
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
      dataType:"json"})

      .success((data) => {
        this.getNotes();
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
      dataType:"json"})

      .success((data) => {
        this.getNotes();
      });
  }

  // React will automatically provide us with the event `e`
  handleChange(e) {
    const name = e.target.value;
    this.props.updateName(name);
  }

  render() {
    return(
      <div className="notes">
        <h1>Notes</h1>
        <button
          onClick={ () => {
            this.setState({deleting: !this.state.deleting})
            this.deleteNotes()
          }}
        >
          Remove Notes
        </button>
        <ul>
          {this.state.notes.map((note) => {
            return(
              <li key={ note.id }>
                <NoteComponent note={note} onUpdate={this.updateNote.bind(this)} />
                { this.state.deleting
                  ? <input
                      type="checkbox"
                      checked={ note.delete || false }
                      onChange={ (event) => {
                        let id = note.id
                        this.setState({ notes: this.state.notes.map ((note) => {
                          if (note.id === id) { return Object.assign({}, note, { delete: event.target.checked}) }
                          else return note
                        })});
                      }}
                    />
                  : ""
                }
              </li>
            );
          })}
        </ul>
        <h2>New Note?</h2>
        <NewNoteComponent onSubmit={this.onNewNote.bind(this)}/>
      </div>
    );
  }
}
