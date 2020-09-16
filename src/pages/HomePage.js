import React from 'react';
import Typed from 'react-typed.js';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Image} from 'cloudinary-react';

import '../assets/style/homepage.scss';


function HomePage(props) {

  return(
    <div id="homepage" >
      <Card id="landing-card" className="bg-dark">
        <picture>
          <source srcSet="https://res.cloudinary.com/dyrcmbg1b/image/upload/v1599827809/portfolio/landing_image_webp" />
          <source srcSet="https://res.cloudinary.com/dyrcmbg1b/image/upload/v1598405036/portfolio/landing_image_jpg"/>
          <Image  className="card-img" id="landing-img" cloudName={process.env.REACT_APP_CLOUDINARY_CLOUDNAME} publicId="portfolio/landing_image_jpg" alt="Landing Image"/>
        </picture>
        <Card.ImgOverlay id="landing-card-overlay" >
          <Card.Text> Hello, I'm </Card.Text>
          <Card.Header as="h1">{props.name}</Card.Header>
          <Card.Header as="h3"><Typed strings={props.title} showCursor={true} loop={true} /><span>&nbsp;Developer</span> </Card.Header>
          <Card.Text id="landing-card-subtitle" >{props.subtitle}</Card.Text>
          <Button className="landing-btn" variant="info" size="lg" href="/projects">My Projects</Button>
          <Button className="landing-btn" variant="success" size="lg" href="/contact">Contact Me</Button>
          <picture>
            <source srcSet="https://res.cloudinary.com/dyrcmbg1b/image/upload/w_350,h_350/v1599827809/portfolio/landing_avatar_webp" />
            <source srcSet="https://res.cloudinary.com/dyrcmbg1b/image/upload/w_350,h_350/v1598405036/portfolio/landing_avatar_jpg" />
            <Image id="landing-avatar" cloudName={process.env.REACT_APP_CLOUDINARY_CLOUDNAME} publicId="portfolio/landing_avatar_jpg" alt="Landing Avatar"width="350" height="350" radius="max" />
          </picture>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default HomePage;
