import React from 'react';
import { Element } from 'react-scroll';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .max(50, "That's a really long name, please keep it short.")
    .required("Please enter a name so I know who you are."),
  email: Yup.string()
    .email("Hmm... please use a valid email address.")
    .required("Please enter an email so I can contact you back."),
  message: Yup.string()
    .max(300, "Please keep your message short.")
    .required("Please say something so I know how I can help.")
});

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
            <Formik
              initialValues={{
                name:    "",
                email:   "",
                message: "",
              }}
              validationSchema={ContactSchema}
              onSubmit={values => {
                alert(JSON.stringify(values));
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <Field component="input" name="name" />
                  { errors.name && touched.name ? ( <div>{errors.name}</div> ) : null }
                  <Field component="input" name="email" />
                  { errors.email && touched.email ? ( <div>{errors.email}</div> ) : null }
                  <Field component="textarea" name="message" />
                  { errors.message && touched.message ? ( <div>{errors.message}</div> ) : null }
                  <button type="submit">Submit</button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  </Element>
);

export default Contact;