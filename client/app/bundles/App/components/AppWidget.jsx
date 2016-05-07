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
    , deleting: false
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

  deleteNotes() {
    console.log("Delete notes, but which ones?")
    this.setState ({ notes: this.state.notes
      .filter( (note) => { return !note.delete } )
      // .forEach( (note) => {
      //   console.log("This one: " + note.title )
      // } )
    })
  }

  // React will automatically provide us with the event `e`
  handleChange(e) {
    const name = e.target.value;
    this.props.updateName(name);
  }

  render() {
    console.log(this.state.notes)
    return(
      <div className="notes">
        <h1>Notes</h1>
        <button
          onClick={ () => {
            this.setState({deleting: !this.state.deleting})
            this.deleteNotes()
          }}
        >
          Remove Notes
        </button>
        <ul>
          {this.state.notes.map((note) => {
            return(
              <li key = { note.id }>
                <h3>{note.title}</h3>
                { note.content}
                { this.state.deleting
                  ? <input
                      type="checkbox"
                      checked={ note.delete || false }
                      onChange={ (event) => {
                        let id = note.id
                        this.setState({ notes: this.state.notes.map ((note) => {
                          if (note.id === id) { return Object.assign({}, note, { delete: event.target.checked}) }
                          else return note
                        })})
                      }}
                    />
                  : ""
                }
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
