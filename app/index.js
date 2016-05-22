// React specific
import React, { Component } from 'react';
import { render } from 'react-dom';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';

// Components
import Dashboard from './components/Dashboard';
import Provider from './components/Provider';
import Header from './components/Partials/Header';
import Nav from './components/Partials/Nav';

// Misc
import Loading from './img/grid.svg';
import helpers from './utils/helpers';
require('font-awesome-webpack');
require('./styles/app.sass');

// App
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      providers: [],
    };
  }

  componentDidMount() {
    helpers.getAllActivity()
      .then((data) => {
        this.setState({
          isLoading: false,
          providers: data,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Nav providers={helpers.providersList(this.state.providers)} />
        <div className="wrapper">
        {this.state.isLoading === true
        ? <p className="has-text-centered loading"><img alt="loading" src={Loading} /></p>
        :
          <div className="columns animated fadeIn main">
            <div className="column">
              <div className="">
                {this.props.children && React.cloneElement(this.props.children, {
                  providers: this.state.providers, isLoading: this.state.isLoading,
                })}
              </div>
            </div>
          </div>
        }
        </div>
      </div>
    );
  }
}

// Validations
App.propTypes = {
  children: React.PropTypes.node,
};

// Router
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="provider/:name" component={Provider} />
    </Route>
  </Router>
), document.getElementById('app'));
