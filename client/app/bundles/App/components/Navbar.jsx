import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class Navbar extends React.Component {

  logout(){
    jQuery.ajax({
      type: "DELETE",
      url: `/users/sign_out.json`,
    })
      .success((data) => {
        window.location.assign('/users/sign_in');
      });
  }


  render(){
    return(
      <AppBar
        title="NoteIT"
        iconElementRight={<FlatButton label="Logout" onClick={this.logout.bind(this)} />}
      />
    );
  }
}

export default Navbar;
