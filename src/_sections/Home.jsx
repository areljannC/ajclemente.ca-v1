import React from 'react';
import { Element } from 'react-scroll';

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
            <h1>Hi, I am AJ.</h1>
            <p>I'm a front-end web developer with an eye for simplicity and functionality.</p>
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
              <PoseIcon
                position="down"
                icon="arrow-down"
                color="red"
                size="4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Element>
);

export default Home;