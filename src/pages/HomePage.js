import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import Hero from '../components/hero';
import SkillCard from '../components/skill_card';
import free_image from '../assets/images/12836.jpg';

function HomePage(props) {

  const showSkills = () => {
    return props.skills.map(skill => {
        return <SkillCard skill={skill} key={skill.symbol}/>
      });

  }

  return(
    <div>
      <Card className="bg-dark text-white">
        <Card.Img id="landing-img"  src={free_image} alt="Landingpage Image" />
        <Card.ImgOverlay>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.subtitle}
          </Card.Text>
          <Card.Text>{props.note}</Card.Text>
        </Card.ImgOverlay>
      </Card>
      {/*
            <Hero title={props.title} subtitle={props.subtitle} note={props.note}></Hero>
            <Container fluid={true} >
              <Row className='justify-content-around'>
                {showSkills()}
              </Row>
            </Container>
      */}
    </div>
  );
}

export default HomePage;
