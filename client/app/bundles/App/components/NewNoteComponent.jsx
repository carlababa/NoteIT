import React from 'react'

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
        <label>Title:</label>
        <input ref="titleInput" />
        <label>Content:</label>
        <input ref="contentInput" />
        <button>Add Note</button>
      </form>
    );
  }
}

export default NewNoteComponent;
