import React from 'react';
import Typed from 'react-typed.js';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Image, Transformation } from 'cloudinary-react';

import '../assets/style/homepage.scss';


function HomePage(props) {

  return(
    <div id="homepage" >
      <Card id="landing-card" className="bg-dark">
        <Image className="card-img" id="landing-img" cloudName={process.env.REACT_APP_CLOUDINARY_CLOUDNAME} publicId="portfolio/landing_image" alt="Landing Image">
          <Transformation quality="auto" fetchFormat="auto" width="1500" crop="scale" />
        </Image>
        <Card.ImgOverlay id="landing-card-overlay" >
          <Card.Text> Hello, I'm </Card.Text>
          <Card.Header as="h1">{props.name}</Card.Header>
          <Card.Header as="h3"><Typed strings={props.title} showCursor={true} loop={true} /><span>&nbsp;Developer</span> </Card.Header>
          <Card.Text id="landing-card-subtitle" >{props.subtitle}</Card.Text>
          <Button className="landing-btn" variant="info" size="lg" href="/projects">My Projects</Button>
          <Button className="landing-btn" variant="success" size="lg" href="/contact">Contact Me</Button>
          <Image id="landing-avatar" cloudName={process.env.REACT_APP_CLOUDINARY_CLOUDNAME} publicId="portfolio/landing_avatar" alt="Landing Avatar" >
            <Transformation quality="auto" fetchFormat="auto" width="450" crop="scale" />
          </Image>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default HomePage;
