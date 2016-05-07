import React, { PropTypes } from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div>
        Home
        <Link to="ui/test">Test</Link>
      </div>
    );
  }
}
export default Home;
