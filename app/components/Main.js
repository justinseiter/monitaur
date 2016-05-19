import React, { PropTypes } from 'react';
import Header from './Partials/Header';

const Main = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
