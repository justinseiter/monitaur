import React, { PropTypes } from 'react';

const Main = ({ children }) => {
  return (
    <div>
      <nav className="nav">
        <div className="nav-left">
          <a className="nav-item" href="#">
            Monitaur
          </a>
        </div>

        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div className="nav-right nav-menu">
          <a className="nav-item" href="#">
            Documentation
          </a>
          <a className="nav-item" href="#">
            Support
          </a>
        </div>
      </nav>
      {children}
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.object,
};

export default Main;
