import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Hero from '../components/hero';
import SkillCard from '../components/skill_card';
import landing_image from '../assets/images/12836.jpg';
import avatar from '../assets/images/landing_avatar.jpg';


function HomePage(props) {

  const showSkills = () => {
    return props.skills.map(skill => {
        return <SkillCard skill={skill} key={skill.symbol}/>
      });

  }

  return(
    <div>
      <Card id="landing-card" className="bg-dark">
        <Card.Img id="landing-img"  src={landing_image} alt="Landingpage Image" />
        <Card.ImgOverlay id="landing-card-overlay" >
          <Card.Text> Hello, I'm </Card.Text>
          <Card.Header as="h1" >Markus Mengel</Card.Header>
          <Card.Header as="h3" >Full-Stack and Mobile Developer</Card.Header>
          <Button className="landing-btn" variant="info" href="#">My Projects</Button>
          <Button className="landing-btn" variant="success" href="/contact">Contact Me</Button>
          <Card.Img id="landing-avatar"  src={avatar} alt="Landingpage Avatar" />
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
