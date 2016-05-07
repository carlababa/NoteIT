import React, { PropTypes } from 'react';
import AppWidget from '../components/AppWidget';
import _ from 'lodash';
import SearchBox from "../components/SearchBox";

// Simple example of a React "smart" component
export default class App extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  constructor(props, context) {
    super(props, context);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = {
      name: this.props.name

    }

    // Uses lodash to bind all methods to the context of the object instance, otherwise
    // the methods defined here would not refer to the component's class, not the component
    // instance itself.
    _.bindAll(this, 'updateName');
  }

  updateName(name) {
    this.setState({ name });
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

// <AppWidget name={this.state.name} updateName={this.updateName} />
