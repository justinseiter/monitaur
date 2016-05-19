import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../components/Main';
import DashboardContainer from '../containers/DashboardContainer';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={DashboardContainer} />
    </Route>
  </Router>
);
