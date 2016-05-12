import React from 'react'
import EditableFieldComponent from './EditableFieldComponent';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';


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

  cardStyle(){
    return{
      margin: "20px",
      display: "inline-block",
      padding: "50px",
      backgroundColor: "#ffff99",
      maxWidth: "350px"
    };

  }

  render () {
    return(
      <Card style={this.cardStyle()}>
        <List>
          <CardTitle>
            <h2><EditableFieldComponent name="title" onUpdate={this.save.bind(this)} value={this.state.title} /></h2>
          </CardTitle>
          <CardText>
            <EditableFieldComponent name="content" onUpdate={this.save.bind(this)} value={this.state.content} />
          </CardText>
        </List>
      </Card>
    );
  }
}

export default NoteComponent;
