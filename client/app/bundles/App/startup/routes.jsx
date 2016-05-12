import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../containers/App';
import AppWidget from '../components/AppWidget';
import Home from '../containers/Home';
import Test from '../containers/Test';

module.exports = function (props) {
  const createElement = function (Component, subProps) {
    return <Component currentUser={props.currentUser} {...subProps} />
  };

  return <Router history={browserHistory} createElement={createElement} >
    <Route path="/" component={App}>
      <IndexRoute component={AppWidget} />
      <Route path="test" component={Test} />
    </Route>
  </Router>
}
