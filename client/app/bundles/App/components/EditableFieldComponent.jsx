import React from 'react';
import TextField from 'material-ui/TextField';

class EditableFieldComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      value: props.value,
    }
  }

  toggleEditable() {
    this.setState({
      editing: !this.state.editing
    });
  }

  save() {
    let newValue = this.refs.value.getValue();
    this.props.onUpdate(this.props.name, newValue);
    this.setState({
      editing: false,
      value: newValue
    });
  }

  checkKey(event) {
    console.log(event.charCode);
    if (event.charCode == 13) { // enter
      this.save();
    }
  }

  sizeEditable(){
    return{
      width: "200px",
      backgroundColor: "#ffff99",
    };
  }

  render () {
    return(
      <span>
        {this.state.editing &&
          <TextField style={this.sizeEditable()} ref="value" type="text" defaultValue={this.state.value} onBlur={this.save.bind(this)} onKeyPress={this.checkKey.bind(this)} autofocus="true" />}
        {!this.state.editing &&
          <span onClick={this.toggleEditable.bind(this)}>{this.state.value}</span>}
      </span>
    );
  }
}

export default EditableFieldComponent;
