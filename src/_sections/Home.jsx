import React from 'react';
import { Element, Link } from 'react-scroll';

import PoseIcon from '../_pose-components/PoseIcon';

const Home = () => (
  <Element name="home" id="c-section-home">
    <div className="hero is-fullheight">
      <div className="hero-body" 
        data-aos="zoom-out" 
        data-aos-duration="1000"
      >
        <div className="container has-text-centered">
          <div className="content">
            <h1 className="c-text-color-black is-size-1-desktop">
              Hi, I am <span className="c-text-underline">AJ</span>.
            </h1>
            <p className="c-text-color-black is-size-3-desktop">
              I'm a <span className="c-text-underline">front-end web developer</span> with an eye for simplicity and functionality.
            </p>
          </div>
        </div>
      </div>
      <div className="hero-footer" 
        data-aos="zoom-in-down" 
        data-aos-duration="1000" 
        data-aos-offset="-200"
      >
        <div className="container">
          <div className="level is-mobile">
            <div className="level-item">
              <Link 
                to="about-me"
                spy={true}
                smooth={true}
                offset={-52}
                duration={1000}
              >
                <PoseIcon
                  position="down"
                  icon="arrow-down"
                  color="c-text-color-red"
                  size="is-size-3-desktop"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Element>
);

export default Home;