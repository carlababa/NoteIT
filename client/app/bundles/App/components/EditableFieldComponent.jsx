import React from 'react'

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
    let newValue = this.refs.value.value;
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

  render () {
    return(
      <span>
        {this.state.editing &&
          <input ref="value" type="text" defaultValue={this.state.value} onBlur={this.save.bind(this)} onKeyPress={this.checkKey.bind(this)} autofocus="true" />}
        {!this.state.editing &&
          <span onClick={this.toggleEditable.bind(this)}>{this.state.value}</span>}
      </span>
    );
  }
}

export default EditableFieldComponent;
