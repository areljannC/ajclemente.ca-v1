import React from 'react';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <a className="navbar-item">
        {/* add a logo here */}
      </a>
      <a className="navbar-burger burger" data-target="navbar-menu">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
    <div className="navbar-menu" id="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          {/*  */}
        </div>
        <div className="navbar-item">
          {/*  */}
        </div>
        <div className="navbar-item">
          {/*  */}
        </div>
        <div className="navbar-item">
          {/*  */}
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;