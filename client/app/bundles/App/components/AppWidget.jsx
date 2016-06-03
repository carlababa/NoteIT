import React, { PropTypes } from 'react';
import _ from 'lodash';
import NewNoteComponent from './NewNoteComponent';
import NoteComponent from './NoteComponent';
import Navbar from './Navbar';
import Footer from './Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';

// Simple example of a React "dumb" component
export default class AppWidget extends React.Component {

  constructor(props, context) {
    super(props, context);
    _.bindAll(this, 'handleChange');

    this.state = {
      notes: [],
      deleting: "Select Notes to Delete"
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
    this.state.notes
      .filter( (note) => { return note.delete } )
      .forEach( (note) => {
        console.log("This one: " + note.title )
        jQuery.ajax({
          type: "DELETE",
          url: `/notes/${note.id}.json`,
          contentType: "application/json",
          dataType:"json"})

          .success((data) => {
            this.getNotes();
          });
      });
      this.setState({
        deleting: "Select Notes to Delete"
      });
  }

  onNewNote(noteTitle, noteContent) {
    if (!noteTitle && !noteContent) {
      return
    }

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

  toggleNoteSelection(note, event){
    if (event.target.tagName == 'DIV') {
      note.delete = !note.delete;
    }

    let border = note.delete ? '3px solid #9B1D20' : '';
    event.currentTarget.firstChild.style.border = border;

    let hasDeletingNotes = this.state.notes.filter((note) => { return note.delete }).length;

    this.setState({
      deleting: hasDeletingNotes > 0 ? "Delete selected" : "Select Notes to Delete"
    });
  }

  // React will automatically provide us with the event `e`
  handleChange(e) {
    const name = e.target.value;
    this.props.updateName(name);
  }

  buttonD() {
    return{
      color: "#9B1D20",
      marginLeft: 6
    };
  }

  containerStyle() {
    return{
      fontFamily: "Roboto",
      margin: "auto",
      width: "70%"
    };
  }

  displayInline(){
    return{
      display: "inline-block",
    };
  }

  render() {
    return(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div className="notes">
        <Navbar />
        <div style={this.containerStyle()}>
          <h1>Your Notes</h1>
          <FlatButton label={this.state.deleting} style={this.buttonD()}
            onClick={ () => {
              this.deleteNotes()
            }}></FlatButton>
          <div>
            {this.state.notes.map((note) => {
              return(
                <div key={ note.id } onClick={this.toggleNoteSelection.bind(this, note)} style={this.displayInline()} >
                  <NoteComponent note={note} onUpdate={this.updateNote.bind(this)} />
                </div>
              );
            })}
          </div>
          <h2>New Note?</h2>
          <NewNoteComponent onSubmit={this.onNewNote.bind(this)}/>
        </div>
        <Footer />
      </div>
      </MuiThemeProvider>
    );
  }
}
