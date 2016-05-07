import React from 'react'
import EditableFieldComponent from './EditableFieldComponent';

class NoteComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.note.title,
      content: props.note.content
    }
  }

  save(property, value) {
    let note = this.props.note;
    if (property === "title") {
      note.title = value;
    }
    if (property === "content") {
      note.content = value;
    }
    this.props.onUpdate(note);
    this.setState({
      title: note.title,
      content: note.content
    });
  }

  checkKey(event) {
    console.log(event.charCode);
    if (event.charCode == 13) { // enter
      this.save(e);
    }
  }

  render () {
    return(
      <li>
        <h1><EditableFieldComponent name="title" onUpdate={this.save.bind(this)} value={this.state.title} /></h1>
        <p><EditableFieldComponent name="content" onUpdate={this.save.bind(this)} value={this.state.content} /></p>
      </li>
    );
  }
}

export default NoteComponent;
