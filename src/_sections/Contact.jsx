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
            <div className="content">
              <div className="section has-text-centered">
                <p className="is-size-5 c-text-color-black">
                  <span className="is-size-4 c-text-underline">
                    Thanks for visiting my website!
                  </span> <br/><br/>
                  If you have any questions or you want to get in touch,
                  feel free to give me a message anytime.
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <Formik
              initialValues={{
                name:    "",
                email:   "",
                message: "",
              }}
              validationSchema={ContactSchema}
              onSubmit={(values, actions) => {
                alert(JSON.stringify(values));
                actions.resetForm(values = {
                  name:    "",
                  email:   "",
                  message: "",
                });
              }}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form>
                  <div className="field" data-aos="fade-right">
                    <label className="label c-text-color-black">Name</label>
                    <p className="control has-icons-left">
                      <Field component="input" name="name"
                        className={ errors.name && touched.name ? ("input c-input-error") : ("input") }
                      />
                      <span className={ errors.name && touched.name ? ("icon is-small is-left c-text-color-red") : ("icon is-small is-left c-text-color-black") }>
                        <i className="fas fa-user"></i>
                      </span>
                    </p>
                    { errors.name && touched.name ? ( <p className="help c-text-color-red">{errors.name}</p> ) : null }
                  </div>
                  <div className="field" data-aos="fade-left">
                    <label className="label c-text-color-black">Email</label>
                    <p className="control has-icons-left">
                      <Field component="input" name="email"
                        className={ errors.email && touched.email ? ("input c-input-error") : ("input") }
                      />
                      <span className={ errors.email && touched.email ? ("icon is-small is-left c-text-color-red") : ("icon is-small is-left c-text-color-black") }>
                        <i className="fas fa-envelope"></i>
                      </span>
                    </p>
                    { errors.email && touched.email ? ( <p className="help c-text-color-red">{errors.email}</p> ) : null }
                  </div>
                  <div className="field" data-aos="fade-right">
                    <label className="label c-text-color-black">Message</label>
                    <div className="control">
                      <Field component="textarea" name="message" placeholder="Leave a message and I'll be in touch!"
                        className={ errors.message && touched.message ? ("textarea c-input-error") : ("textarea") }
                      />
                    </div>
                    { errors.message && touched.email ? ( <p className="help c-text-color-red">{errors.message}</p> ) : null }
                  </div>
                  <div className="control" data-aos="fade-left" data-aos-offset={-10}>
                    <button type="submit" disabled={isSubmitting} className="button is-fullwidth c-button c-text-color-white">
                      Send
                    </button>
                  </div>
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