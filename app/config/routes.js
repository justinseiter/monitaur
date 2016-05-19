import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Main from '../components/Main';
import Dashboard from '../components/Dashboard';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Dashboard} />
    </Route>
  </Router>
);
