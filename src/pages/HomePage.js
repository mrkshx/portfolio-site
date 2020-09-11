import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Image} from 'cloudinary-react';

import landing_image from '../assets/images/12836.jpg';

import '../assets/style/homepage.scss';


function HomePage(props) {

  return(
    <div id="homepage" >
      <Card id="landing-card" className="bg-dark">
        <Card.Img id="landing-img"  src={landing_image} alt="Landingpage Image" />
        <Card.ImgOverlay id="landing-card-overlay" >
          <Card.Text> Hello, I'm </Card.Text>
          <Card.Header as="h1">{props.name}</Card.Header>
          <Card.Header as="h3">{props.title}</Card.Header>
          <Card.Text id="landing-card-subtitle" >{props.subtitle}</Card.Text>
          <Button className="landing-btn" variant="info" size="lg" href="/projects">My Projects</Button>
          <Button className="landing-btn" variant="success" size="lg" href="/contact">Contact Me</Button>
          <Image  id="landing-avatar" cloudName={process.env.REACT_APP_CLOUDINARY_CLOUDNAME} publicId="portfolio/landing_avatar_oerydq" width="350" height="350" radius="max" />
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default HomePage;
