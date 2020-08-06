import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {

  return(
    <footer className="mt-5">
      <Container fluid={true} >
        <Row className="border-top p-4 justify-content-between" >
          <Col>
            <a href="https://www.linkedin.com/in/markus-mengel" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x"/>
            </a>
          </Col>
          <Col>
            <a href="https://github.com/mrkshx/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'github']} size="3x"/>
            </a>
          </Col>
          <Col>
            <a href="https://www.xing.com/profile/Markus_Mengel3" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'xing']} size="3x"/>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
