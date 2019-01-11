import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => (
  <nav className="navbar is-fixed-top">
    <div className="container"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <div className="navbar-brand">
        <a className="navbar-item">
          {/* add a logo here */}
        </a>
        <a className="navbar-burger c-text-color-red" data-target="navbar-menu">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div className="navbar-menu is-shadowless" id="navbar-menu">
        <div className="navbar-end">
          <Link 
            activeClass="navbar-item-active"
            className="navbar-item is-uppercase is-size-5-desktop is-size-6-tablet is-size-6-mobile c-text-color-white"
            to="home"
            spy={true}
            smooth={true}
            offset={-52}
            duration={1000}
          >Home</Link>
          <Link 
            activeClass="navbar-item-active"
            className="navbar-item is-uppercase is-size-5-desktop is-size-6-tablet is-size-6-mobile c-text-color-white"
            to="about-me"
            spy={true}
            smooth={true}
            offset={-26}
            duration={1000}
          >About Me</Link>
          <Link 
            activeClass="navbar-item-active"
            className="navbar-item is-uppercase is-size-5-desktop is-size-6-tablet is-size-6-mobile c-text-color-white"
            to="projects"
            spy={true}
            smooth={true}
            offset={-26}
            duration={1000}
          >Projects</Link>
          <Link 
            activeClass="navbar-item-active"
            className="navbar-item is-uppercase is-size-5-desktop is-size-6-tablet is-size-6-mobile c-text-color-white"
            to="contact"
            spy={true}
            smooth={true}
            offset={-26}
            duration={1000}
          >Contact</Link>
        </div>
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