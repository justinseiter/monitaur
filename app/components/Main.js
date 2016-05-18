import React, { PropTypes } from 'react';

function Main(props) {
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
      {props.children}
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.object,
};

module.exports = Main;
