import React from 'react';
import { Element } from 'react-scroll';

const AboutMe = () => (
  <Element name="about-me" id="c-section-about-me">
    <div className="section">
      <div className="container">
        <div className="content has-text-centered">
          <h1 data-aos="zoom-in" data-aos-offset="-10">About Me</h1>
        </div>
        <div className="columns is-centered">
          <div className="column is-two-fifths" data-aos="fade-right">
            <div className="content">
              <figure class="image is-128x128">
                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
              <div className="level is-mobile">
                <div className="level-item c-level-icon">
                  <span class="icon">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
                <div className="level-item c-level-info">
                  Arel Jann "AJ" Clemente
                </div>
              </div>
              <div className="level is-mobile">
                <div className="level-item c-level-icon">
                  <span class="icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </span>
                </div>
                <div className="level-item c-level-info">
                  Mississauga, Ontario
                </div>
              </div>
              <div className="level is-mobile">
                <div className="level-item c-level-icon">
                  <span class="icon">
                    <i class="fas fa-graduation-cap"></i>
                  </span>
                </div>
                <div className="level-item c-level-info">
                  Software Development & Network Engineering
                </div>
              </div>
              <div className="level is-mobile">
                <div className="level-item c-level-icon">
                  <span class="icon">
                    <i class="fas fa-briefcase"></i>
                  </span>
                </div>
                <div className="level-item c-level-info">
                  IT Service Technician
                </div>
              </div>
            </div>
          </div>
          <div className="column" data-aos="fade-left">
            <p>Hi there! Nice to meet you!</p>
            <p>I'm <strong>AJ</strong> and and I'm a web developer based in the <strong>Greater
                    Toronto Area</strong> (GTA).</p>
            <p>So what do I do, you wonder?</p>
            <p><em>"A front-end developer? A back-end? Graphic designer? Media content creator??"</em></p>
            <p><strong>Yes.</strong> Yes I am.</p>
            <p>I'm a <strong>full-stack web developer</strong>, an avid <strong>graphic designer
                </strong> and <strong>media content creator</strong>.</p>
            <p>I enjoy planning and creating stuff from the ground-up and tinkering with how it
                works and how it looks.</p>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-half">
            <div className="box">
              <div className="content">
                <h1>Web Developer</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Quidem nostrum velit, praesentium aut iusto natus accusantium 
                  vero iure fugiat? 
                </p>
                <div className="c-about-me-icons">
                  <span className="icon">
                    <i className="icon-html5-alt"></i>
                  </span>
                  <span className="icon">
                    <i className="icon-css3-alt"></i>
                  </span>
                  <span className="icon">
                    <i className="icon-sass"></i>
                  </span>
                  <span className="icon">
                    <i className="icon-javascript-alt"></i>
                  </span>
                  <span className="icon">
                    <i className="icon-php"></i>
                  </span>
                  <span className="icon">
                    <i className="icon-mysql-alt"></i>
                  </span>
                  <span className="icon">
                    <i className="icon-shell"></i>
                  </span>
                  <span className="icon">
                    <i className="icon-git"></i>
                  </span>
                  <span className="icon">
                    <i className="icon-npm"></i>
                  </span>
                  <span className="icon">
                    <i className="icon-reactjs"></i>
                  </span>
                  <span className="icon">
                    <i className="icon-jquery"></i>
                  </span>
                  <span className="icon">
                    <i className="icon-bootstrap"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-half">
            <div className="box">
              <div className="content">
                <h1>Graphics Design</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Quidem nostrum velit, praesentium aut iusto natus accusantium 
                  vero iure fugiat? 
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