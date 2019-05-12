import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Row, Col, Spinner } from 'reactstrap';
import ContactForm from '../components/form/ContactForm';
import { sendMessage } from '../actions';


const INITIAL_VALUES = {
  name: '',
  email: '',
  message: ''
};

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      submitting: false,
      submitted: false
    }
    this.submitForm = this.submitForm.bind(this);

  }

  submitForm(messageData, { setSubmitting }) {
    this.setState({ submitting: true })
    setSubmitting(true);
    sendMessage(messageData)
      .then((message) => {
        setSubmitting(false);
        this.setState({ error: undefined, submitted: true, submitting: false });
        Router.pushRoute('/contact');
      })
      .catch((err) => {
        const error = err.message || 'Server Error!';
        setSubmitting(false);
        this.setState({ error });
      })
  }

  render() {

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="portfolio-create-page" title="Contact">
          <Row>
            <Col md="6">
              {this.state.submitted ? <p>Thank you for your message, I will recontact you asap</p> : <ContactForm initialValues={INITIAL_VALUES}
                onSubmit={this.submitForm} />}
              {this.state.submitting ? <div><Spinner color="primary" /></div>
                : ''}

            </Col>
            <Col md="6">
              <div className="col-lg-8 col-md-10 mx-auto">
                <h4 className="title fadein">Leave a message</h4>
                <p>You can either use the form or click on the below social networl icons to contact me, thank you.</p>
                <ul className="list-inline text-left">
                  <li className="list-inline-item">
                    <a target="_blank" href="https://www.linkedin.com/in/philippe-doreau-465992144/">
                      <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-linkedin-in fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a target="_blank" href="https://www.facebook.com/philippe.doreau.94">
                      <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-facebook fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a target="_blank" href="https://github.com/Ph-D">
                      <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </BasePage>
        <style jsx>
          {`
            @import url("https://use.fontawesome.com/releases/v5.5.0/css/all.css");
          `}
        </style>
      </BaseLayout>
    )
  }
}

export default Contact;
