import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../assets/style/footer.scss';


function Footer() {

  return(
    <footer>
      <Container fluid={true} >
        <Row id="footer-links" className="border-top p-2 justify-content-between" >
          <Col>
            <a className="footer-link" href="https://www.linkedin.com/in/markus-mengel" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>
          </Col>
          <Col>
            <a className="footer-link" href="https://github.com/mrkshx/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
          </Col>
          <Col>
            <a className="footer-link" href="https://www.xing.com/profile/Markus_Mengel3" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'xing']} />
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="text-right" >
            <p id="footer-disclaimer" >
              This page was made by Markus Mengel // 2020
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
