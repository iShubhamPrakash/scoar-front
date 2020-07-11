// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => (
  <div>
    <h1>Contact Form</h1>
    <Formik
      initialValues={{ key: 'bDjtovZu64HRZddEELvKj2tD6HXVUlYx', name:'', email: '', contactno: '', iswhatsapp: false }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required Email';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if(!values.name){
            errors.name = 'Required Name';
        }
        if(!values.contactno){
            errors.contactno = 'Required Contact';
        } else if (values.contactno.length < 10 && values.contactno.length > 13){
            errors.contactno = 'Invalid Contact';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const jsonbody = JSON.stringify(values, null);
          alert(jsonbody);
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://scoar-login.herokuapp.com/scoar/add' },
            body: jsonbody
        };
        fetch('https://scoar-login.herokuapp.com/scoar/add', requestOptions)
            .then(async response => {
                const data = await response.json();
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
            })
          setSubmitting(true);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <p>Name:</p>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
          <br/>
          <p>Email:</p>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <br/>
          <p>Contact Number:</p>
          <Field type="number" name="contactno" />
          <ErrorMessage name="contactno" component="div" />
          <br/>
          <p>Is this a Whatsapp Number:</p>
          <Field type="checkbox" name="iswhatsapp" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;