import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../assets/style/construction.scss';

function ConstructionBanner(props) {

  return(
      <Container>
        <Row className="construction justify-content-around align-items-center" >
          <Col className="construction-item">
            <FontAwesomeIcon icon={['fas', 'wrench']} color="grey" size="5x" flip="horizontal"/>
          </Col>
          <Col className="construction-item">
            <p> This page is still under construction! </p>
            <p> You will find my projects here that I worked on. </p>
          </Col>
          <Col className="construction-item">
            <FontAwesomeIcon icon={['fas', 'wrench']} color="grey" size="5x" />
          </Col>
        </Row>
      </Container>
  );
}

export default ConstructionBanner;
