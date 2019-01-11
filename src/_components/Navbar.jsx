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
        <a className="navbar-burger burger" data-target="navbar-menu">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div className="navbar-menu is-shadowless" id="navbar-menu">
        <div className="navbar-end">
          <Link 
            activeClass=""
            className="navbar-item"
            to="home"
            spy={true}
            smooth={true}
            offset={-52}
            duration={1000}
          >Home</Link>
          <Link 
            activeClass=""
            className="navbar-item"
            to="about-me"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >About Me</Link>
          <Link 
            activeClass=""
            className="navbar-item"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >Projects</Link>
          <Link 
            activeClass=""
            className="navbar-item"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
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