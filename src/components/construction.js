import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ConstructionBanner(props) {

  return(
      <Container>
        <Row className="justify-content-center" >
            <FontAwesomeIcon icon={['fas', 'wrench']} color="grey" size="3x" flip="horizontal"/>
            <p> This page is still under construction! </p>
            <FontAwesomeIcon icon={['fas', 'wrench']} color="grey" size="3x" />
        </Row>
      </Container>
  );
}

export default ConstructionBanner;
