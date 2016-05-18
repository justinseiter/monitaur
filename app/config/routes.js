import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);
