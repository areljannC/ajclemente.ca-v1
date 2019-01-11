import React from 'react';
import { Element } from 'react-scroll';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Contact = () => (
  <Element name="contact" id="c-section-contact">
    <div className="section">
      <div className="container">
        <div className="content has-text-centered">
          <h1 className="is-uppercase is-size-1-desktop c-text-color-black"
            data-aos="zoom-in"
            data-aos-offset="-10"
          >
             <span className="c-text-underline">Contact</span>
          </h1>
        </div>
        <div className="columns is-centered">
          <div className="column is-two-fifths">
            {/* Insert a message */}
          </div>
          <div className="column">

          </div>
        </div>
      </div>
    </div>
  </Element>
);

export default Contact;