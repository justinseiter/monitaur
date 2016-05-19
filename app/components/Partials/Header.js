import React from 'react';
import Logo from '../../img/bull.svg';

const Header = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-left">
          <a className="nav-item logo" href="#">
            <img alt="Logo" src={Logo} /><span>Monitaur</span>
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
      </div>
    </nav>
  );
};

export default Header;
