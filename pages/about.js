import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Row, Col } from 'reactstrap';

class About extends React.Component {

  render() {
    return (
      <BaseLayout title="Philippe Doreau - Learn More About Me" {...this.props.auth}>
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello, Welcome</h1>
                <h4 className="subtitle fadein">To About Page</h4>
                <p className="subsubTitle fadein">Feel free to read short description about me.</p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                <p>My name is Philippe Doreau and I am a web developer. </p>

                <p>I learned coding by making website, first as a web designer, and then as a web developer.
                To validate my skills I obtained a software developer professionnal degrees and coding certificates.</p>
                In that way I learned to use different Frameworks, Languages, or good pratices, like React.js, my favorite one.

                <p>Currently I'm working in a big french tech company. Here I have acquired team working and technical knowledge.</p>

                <p>Today I'm still looking for opportunities which will allow me to work on fun project. </p>
                <p>So if my profile can interest you, please contact me!</p>


              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default About;
