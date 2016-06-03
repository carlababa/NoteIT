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
      marginTop: 12,
      color: "#3C6E71",
    };
  }

  alignStyle(){
    return{
      textAlign: "center"
    };
  }

  alignStyle1(){
    return{
      textAlign: "left"
    };
  }

  render () {
    return(
      <div style={this.alignStyle()}>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div><TextField type="input" ref="titleInput" floatingLabelText="Title"/></div>
          <div><TextField style={this.alignStyle1()} type="input" ref="contentInput" multiLine={true} floatingLabelText="Content"/></div>
          <div>
            <RaisedButton type="submit" style={this.buttonMargins()} label="Add Note"></RaisedButton>
          </div>
        </form>
      </div>
    );
  }
}

export default NewNoteComponent;
