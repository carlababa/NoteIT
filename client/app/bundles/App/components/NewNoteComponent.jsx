import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class NewNoteComponent extends React.Component {

  onSubmit(event){
    event.preventDefault();
    var noteTitle = this.refs.titleInput.value;
    var noteContent = this.refs.contentInput.value;
    this.props.onSubmit(noteTitle, noteContent);
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
          <RaisedButton>Add Note</RaisedButton>
        </div>

      </form>
    );
  }
}

export default NewNoteComponent;
