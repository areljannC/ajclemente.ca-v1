import React from 'react';
import { Element } from 'react-scroll';

const AboutMe = () => (
  <Element name="about-me" id="c-section-about-me">
    <div className="section">
      <div className="container">
        <div className="content has-text-centered">
          <h1 className="is-uppercase is-size-1-desktop c-text-color-black"
            data-aos="zoom-in"
            data-aos-offset="-10"
          >
             <span className="c-text-underline">About Me</span>
          </h1>
        </div>
        <div className="columns is-centered">
          <div className="column is-two-fifths" data-aos="fade-right">
            <div className="content">
              <figure class="image is-128x128">
                <img class="is-rounded" src={require('./../_assets/profile-pic-min.jpg')} />
              </figure>
              <div className="level is-mobile">
                <div className="level-item c-level-icon">
                  <span class="icon is-size-6-desktop c-text-color-black">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
                <div className="level-item c-level-info">
                  <p className="is-size-6-desktop c-text-color-black">
                    Arel Jann Clemente <br />
                    <span className="is-size-7-desktop c-text-color-black-faded-more">
                      "AJ"
                    </span>
                  </p>
                </div>
              </div>
              <div className="level is-mobile">
                <div className="level-item c-level-icon">
                  <span class="icon is-size-6-desktop c-text-color-black">
                    <i class="fas fa-map-marker-alt"></i>
                  </span>
                </div>
                <div className="level-item c-level-info">
                  <p className="is-size-6-desktop c-text-color-black">
                    Mississauga, Ontario <br />
                    <span className="is-size-7-desktop c-text-color-black-faded-more">
                      South of Toronto
                    </span>
                  </p>
                </div>
              </div>
              <div className="level is-mobile">
                <div className="level-item c-level-icon">
                  <span class="icon is-size-6-desktop c-text-color-black">
                    <i class="fas fa-graduation-cap"></i>
                  </span>
                </div>
                <div className="level-item c-level-info">
                  <p className="is-size-6-desktop c-text-color-black">
                    Software Development & Network Engineering <br />
                    <span className="is-size-7-desktop c-text-color-black-faded-more">
                      Sheridan College
                    </span>
                  </p>
                </div>
              </div>
              <div className="level is-mobile">
                <div className="level-item c-level-icon">
                  <span class="icon is-size-6-desktop c-text-color-black">
                    <i class="fas fa-briefcase"></i>
                  </span>
                </div>
                <div className="level-item c-level-info">
                  <p className="is-size-6-desktop c-text-color-black">
                    IT Service Technician <br />
                    <span className="is-size-7-desktop c-text-color-black-faded-more">
                      Sheridan College
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column" data-aos="fade-left">
            <p className="is-size-5-desktop c-text-color-black">
             I'm AJ. <br/> 
             I'm a front-end web developer based in the Greater Toronto Area (GTA).
            </p>
            <p className="is-size-5-desktop c-text-color-black-faded">
              <br/>
              I have a passion for learning the latest technologies in the realm of web development
              and designing clean, simple UI for users to interact with.
            </p>
            <p className="is-size-5-desktop c-text-color-black-faded">
              <br/>
              In technical terms, I develop sleek websites using modern web development 
              standards, tools, and frameworks. You name it... I'll learn and use it!
            </p>
            <p className="is-size-5-desktop c-text-color-black-faded-more">
              <br/>
              When I'm not coding, I like to spend my time at the gym, reading, DJing and 
              playing as Link & Samus in SSBU.
              <br/><br/>
            </p>
            <a href="https://drive.google.com/open?id=1SpI9vcc_Phs7lUO_OJtIpNkpj72FFS49" target="_blank"
              className="button is-fullwidth c-button c-text-color-white">View resume</a>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-half" data-aos="fade-right">
            <div className="box is-shadowless">
              <div className="content has-text-centered">
                <h1 className="is-size-3-desktop c-text-color-black">Web Developer</h1>
                <p className="is-size-5-desktop c-text-color-black">
                  The tools that I currently use the most are 
                  SASS, React.js, Chrome Dev Tools, various CSS frameworks
                  and Visual Studio Code + extensions. <br/><br/>
                </p>
                <div className="c-about-me-icons">
                  <span className="icon is-size-4 c-text-color-red">
                    <i className="icon-html5-alt"></i>
                  </span>
                  <span className="icon is-size-4 c-text-color-red">
                    <i className="icon-css3-alt"></i>
                  </span>
                  <span className="icon is-size-4 c-text-color-red">
                    <i className="fab fa-sass"></i>
                  </span>
                  <span className="icon is-size-4 c-text-color-red">
                    <i className="icon-javascript-alt"></i>
                  </span>
                  <span className="icon is-size-4 c-text-color-red">
                    <i className="icon-php"></i>
                  </span>
                  <span className="icon is-size-4 c-text-color-red">
                    <i className="icon-mysql-alt"></i>
                  </span>
                  <span className="icon is-size-4 c-text-color-red">
                    <i className="icon-shell"></i>
                  </span>
                  <span className="icon is-size-4 c-text-color-red">
                    <i className="fab fa-git-square"></i>
                  </span>
                  <span className="icon is-size-4 c-text-color-red">
                    <i className="fab fa-npm"></i>
                  </span>
                  <span className="icon is-size-4 c-text-color-red">
                    <i className="icon-reactjs"></i>
                  </span>
                  <span className="icon is-size-4 c-text-color-red">
                    <i className="icon-jquery"></i>
                  </span>
                  <span className="icon is-size-4 c-text-color-red">
                    <i className="icon-bootstrap"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-half" data-aos="fade-left">
            <div className="box is-shadowless">
              <div className="content has-text-centered">
                <h1 className="is-size-3-desktop c-text-color-black">Graphics Design</h1>
                <p className="is-size-5-desktop c-text-color-black">
                  Adobe XD, Photoshop and Illustrator are my go-to programs when it comes
                  to webpage mock-ups, photo editing, and logo designs. <br/><br/>
                </p>
                <div className="c-about-me-icons">
                  <span class="icon">
                    <img src={require("./../_assets/png/xd.png")} />
                  </span>
                  <span class="icon">
                    <img src={require("./../_assets/png/photoshop.png")} />
                  </span>
                  <span class="icon">
                    <img src={require("./../_assets/png/illustrator.png")} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Element>
);

export default AboutMe;