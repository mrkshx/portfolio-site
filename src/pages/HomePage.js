import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import SkillCard from '../components/skill_card';
import landing_image from '../assets/images/12836.jpg';
import avatar from '../assets/images/landing_avatar.jpg';

import '../assets/style/homepage.scss';


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
          <Card.Header as="h1">{props.name}</Card.Header>
          <Card.Header as="h3">{props.title}</Card.Header>
          <Card.Text>{props.subtitle}</Card.Text>
          <Button className="landing-btn" variant="info" size="lg" href="#">My Projects</Button>
          <Button className="landing-btn" variant="success" size="lg" href="/contact">Contact Me</Button>
          <Card.Img id="landing-avatar"  src={avatar} alt="Landingpage Avatar" />
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default HomePage;
