import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

const Main = require('../components/Main');
const Home = require('../components/Home');

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

module.exports = routes;