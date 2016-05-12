import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class NewNoteComponent extends React.Component {

  onSubmit(event){
    event.preventDefault();
    var noteTitle = this.refs.titleInput.value;
    var noteContent = this.refs.contentInput.value;
    this.props.onSubmit(noteTitle, noteContent);
  }

  buttonMargins(){
    return{
      marginTop: 12 
    };
  }

  render () {
    return(
      <form onSubmit={this.onSubmit.bind(this)}>
        <div>
        <label>Title:</label>
          <input ref="titleInput" />
        <br/>
        </div>
        <div>
        <label>Content:</label>
          <input ref="contentInput" />
        </div>
        <div>
          <RaisedButton type="submit" style={this.buttonMargins()}>Add Note</RaisedButton>
        </div>

      </form>
    );
  }
}

export default NewNoteComponent;
