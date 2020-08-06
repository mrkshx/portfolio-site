import React from 'react';
import Jumbotron from 'bootstrap/Jumbotron';
import Container from 'bootstrap/Container';
import Row from 'bootstrap/Row';
import Col from 'bootstrap/Col';


function Hero(props) {

  return(
    <Jumbotron>
      <Container>
        <Row>
          <Col>
            { props.title && <h1>{props.title}</h1> }
            { props.subtitle && <h1>{props.subtitle}</h1> }
            { props.note && <h1>{props.note}</h1> }
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;
