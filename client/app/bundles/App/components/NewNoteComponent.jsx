import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class NewNoteComponent extends React.Component {

  onSubmit(event){
    event.preventDefault();
    var noteTitle = this.refs.titleInput.getValue();
    var noteContent = this.refs.contentInput.getValue();
    this.props.onSubmit(noteTitle, noteContent);
    event.currentTarget.reset();
  }

  buttonMargins(){
    return{
      marginTop: 12
    };
  }

  alignStyle(){
    return{
      textAlign: "center"
    };
  }

  render () {
    return(
      <div style={this.alignStyle()}>
        <form onSubmit={this.onSubmit.bind(this)}>
          <TextField type="input" ref="titleInput" hintText="Title" />
          <br/>
          <TextField type="input" ref="contentInput" hintText="Content" multiLine={true}/>
          <div>
            <RaisedButton type="submit" style={this.buttonMargins()}>Add Note</RaisedButton>
          </div>
        </form>
      </div>
    );
  }
}

export default NewNoteComponent;
