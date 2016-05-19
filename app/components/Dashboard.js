import React from 'react';
import Nav from './Partials/Nav';
import getActivity from '../utils/helpers';

getActivity().then((data) => {
  console.log('the data', data);
});

const Dashboard = () => {
  return (
    <Nav />
  );
};

export default Dashboard;
