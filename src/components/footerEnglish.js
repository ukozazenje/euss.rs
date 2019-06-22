import React from 'react'
import axios from 'axios'
import { navigate } from 'gatsby'
import { Field, Formik, Form } from 'formik';
import SignUpSchema from './validateEnglish'

const Footer = () => (
  <footer>
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          <Formik
            initialValues={{ name: "", email: "", component: "" }}
            validationSchema={SignUpSchema}
            onSubmit={(values, actions) => {
              axios({
                method: 'post',
                url: '/main.php',
                data: {
                  name: values.name,
                  email: values.email,
                  comments: values.comments
                },
                headers: {
                  'content-type': 'application/json',
                },
              })
              navigate('/en/thank-you/')
            }}
            render={({errors,touched }) => (
              <Form action="">
                <label htmlFor="name">First and Last name</label>
                {errors.name && touched.name ? ( <div className="error-msg">{errors.name}</div> ) : null}
                <Field type="text" name="name" id="name" className="contact-field" placeholder="Enter first and last name" />

                <label htmlFor="name">E-mail</label>
                {errors.email && touched.email ? ( <div className="error-msg">{errors.email}</div> ) : null}
                <Field name="email" type="email" id="email" className="contact-field" placeholder="Enter e-mail" />

                <label htmlFor="comments">Question</label>
                {errors.comments && touched.comments ? ( <div className="error-msg">{errors.comments}</div> ) : null}
                <Field component="textarea" rows="6" placeholder="Ask question" name="comments" className="contact-field" id="comments" />
                
                <button type="submit" className="btn-submit">Send</button>
              </Form>
            )} />
          </div>
        <div className="flex-large">
          <ul className="custom-list">
            <li><strong>Director:</strong> Miloš Kočević <span className="mobile-titula">dipl.ing.me</span></li>
            <li><strong>Address:</strong> Takovska 5, 36103 Kraljevo</li>
            <li><strong>Mobile:</strong><a href="tel:+381601777 686"> + 381 60 1 777 686</a></li>
            <li><strong>E-mail:</strong><a href="mailto:office@euss.rs">office@euss.rs</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="copy-right">
      <div className="flex-large">
          <p>&copy; EUROPEAN SMART SOLUTIONS</p>
      </div>
    </div>
  </footer>
)

export default Footer;