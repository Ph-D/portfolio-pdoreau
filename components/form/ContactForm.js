import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Alert } from 'reactstrap';
import PortInput from './PortInput';


const validateInputs = (values) => {
  let errors = {};

  Object.entries(values).forEach(([key, value]) => {
    if (!values[key]) {
      errors[key] = `Field ${key} is required!`;
    }
  });

  return errors;
}

const ContactForm = ({ initialValues, onSubmit, error }) => (
  <div>
    <Formik
      initialValues={initialValues}
      validate={validateInputs}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text"
            name="name"
            label="Your name"
            component={PortInput} />
          <Field type="email"
            name="email"
            label="Your email"
            component={PortInput} />
          <Field type="textarea"
            name="message"
            label="Your message"
            component={PortInput} />

          {error &&
            <Alert color="danger">
              {error}
            </Alert>
          }
          <Button color="success" size="lg" type="submit" disabled={isSubmitting}>
            Send message
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default ContactForm;




