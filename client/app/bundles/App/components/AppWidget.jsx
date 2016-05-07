import React, { PropTypes } from 'react';
import _ from 'lodash';

// Simple example of a React "dumb" component
export default class AppWidget extends React.Component {
  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".
    updateName: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    _.bindAll(this, 'handleChange');

    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    this.getNotes();
  }

  getNotes() {
    let component = this;
    let url = "/notes.json";
    jQuery.getJSON(url, function(data){
      component.setState({
        notes: data.notes
      });
    });
  }

  // React will automatically provide us with the event `e`
  handleChange(e) {
    const name = e.target.value;
    this.props.updateName(name);
  }

  render() {
    return(
      <div className="notes">
        <h1>Notes</h1>
        <ul>
          {this.state.notes.map(function(note){
            return(
              <div>
                <li>{note.title}</li>
                <li>{note.content}</li>

              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
