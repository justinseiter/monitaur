import React from 'react';
import { Link } from 'react-router';

import Logo from '../../img/bull.svg';

const Header = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-left">
          <Link className="nav-item logo" to="/">
            <img alt="Logo" src={Logo} /><span>Monitaur</span>
          </Link>
        </div>

        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div className="nav-right nav-menu">
          <a className="nav-item" href="#">
            Docs
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
