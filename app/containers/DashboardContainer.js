import React, { Component } from 'react';
import Dashboard from '../components/Dashboard';
import helpers from '../utils/helpers';

class DashboardContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      providers: [],
    };
  }

  componentDidMount() {
    helpers.getActivity()
      .then((data) => {
        this.setState({
          providers: data,
        });
      });
  }

  render() {
    return <Dashboard providers={this.state.providers} />;
  }
}

export default DashboardContainer;
