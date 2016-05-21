import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import helpers from './utils/helpers';
import Dashboard from './components/Dashboard';
import Provider from './components/Provider';
import Header from './components/Partials/Header';
import Nav from './components/Partials/Nav';
import Loading from './img/grid.svg';

require('font-awesome-webpack');
require('./styles/app.sass');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      providers: [],
    };
  }

  componentDidMount() {
    helpers.getActivity()
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
        <Header />
        <div className="container">
        {this.state.isLoading === true
        ? <p className="has-text-centered loading"><img alt="loading" src={Loading} /></p>
        :
          <div className="columns animated fadeIn">
            <Nav providers={helpers.providersList(this.state.providers)} />
            <div className="column">
              <div className="box">
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

App.propTypes = {
  children: React.PropTypes.node,
};

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="provider/:name" component={Provider} />
      <Route path="*" component={Dashboard} />
    </Route>
  </Router>
), document.getElementById('app'));
