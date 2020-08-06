import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Footer() {

  return(
    <footer className="mt-5">
      <Container fluid={true} >
        <Row className="border-top p-4 justify-content-between" >
          <Col>
            test
          </Col>
          <Col>
            test
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
