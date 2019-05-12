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

                <p>I learned coding by making website. First as a web designer, and then as a developer.</p>

                I have a Professionnal degree in software programming and several
                  years of experience working on a wide range of technologies
                  and projects from Web applications to modern mobile
                  applications in React, Angular, Native Script, Ionic and Node.

                <p>Currently I'm working in a big french tech company. Here I have acquired team working and technical knowledge.</p>

                <p>
                  Languages: • Proficient in: JavaScript/ES6, Java, HTML, CSS,
                  SQL. Frameworks/Libraries: • React JS, Angular, Redux,
                  Node JS, Express JS, JQuery, Next JS, SASS. Tools: • Webpack,
                  Babel, Jest, Enzyme, Docker DB: MongoDB, MySQL
                </p>

                <p>UI/UX skills</p>

              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default About;
