import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../containers/App';
import Home from '../containers/Home';
import Test from '../containers/Test';

export default (
  <Route path="ui" component={App}>

    <IndexRoute component={Home} />
    <Route path="test" component={Test} />

  </Route>
);
