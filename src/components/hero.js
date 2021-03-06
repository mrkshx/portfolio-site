import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../assets/style/hero.scss';


function Hero(props) {

  return(
    <Jumbotron className='bg-transparent Jumbotron-fluid p-0 hero' >
      <Container fluid={true} >
        <Row className='justify-content-center py-5' >
          <Col md={8} sm={3} >
            { props.title && <h1 className='font-weight-bolder'>{props.title}</h1> }
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;
