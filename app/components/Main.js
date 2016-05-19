import React, { PropTypes } from 'react';

const Main = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
