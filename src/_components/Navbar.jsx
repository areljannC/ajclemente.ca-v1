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
    <div className="navbar-menu is-shadowless" id="navbar-menu">
      <div className="navbar-end">
        <a className="navbar-item">
          Home
        </a>
        <a className="navbar-item">
          Projects
        </a>
        <a className="navbar-item">
          About Me
        </a>
        <a className="navbar-item">
          Contact
        </a>
      </div>
    </div>
  </nav>
);

document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

export default Navbar;