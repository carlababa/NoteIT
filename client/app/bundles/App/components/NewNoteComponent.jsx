import React from 'react';


class NewNoteComponent extends React.Component {

  onSubmit(event){
    event.preventDefault();
    var noteTitle = this.refs.titleInput.value;
    var noteContent = this.refs.contentInput.value;
    this.props.onSubmit(noteTitle, noteContent);
  }

  buttonStyle(){
    return{
      backgroundColor: "white",
      padding: "10px",
      fontSize: "17px"
    };
  }
  divStyle(){
    return{
      padding: "10px",
      fontSize: "20px",
      fontFamily: "roboto"
    };
  }



  render () {
    return(
      <form onSubmit={this.onSubmit.bind(this)}>
        <div style={this.divStyle()}>
        <label>Title:</label>
          <input ref="titleInput" />
        <br/>
        </div>
        <div style={this.divStyle()}>
        <label>Content:</label>
          <input ref="contentInput" />
        </div>
        <div>
          <button style={this.buttonStyle()}>Add Note</button>
        </div>

      </form>
    );
  }
}

export default NewNoteComponent;
