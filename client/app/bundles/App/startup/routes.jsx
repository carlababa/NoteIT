import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import AppWidget from '../components/AppWidget';

module.exports = function (props) {
  const createElement = function (Component, subProps) {
    return <Component currentUser={props.currentUser} {...subProps} />
  };

  return <Router history={browserHistory} createElement={createElement} >
    <Route path="/" component={AppWidget} />
  </Router>
}
