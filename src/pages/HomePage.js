import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Image} from 'cloudinary-react';

import '../assets/style/homepage.scss';


function HomePage(props) {

  return(
    <div id="homepage" >
      <Card id="landing-card" className="bg-dark">
        <picture>
          <source srcSet="https://res.cloudinary.com/dyrcmbg1b/image/upload/v1599827809/portfolio/12836_rcdz86.webp" type="image/webp" />
          <source srcSet="https://res.cloudinary.com/dyrcmbg1b/image/upload/v1598405036/portfolio/12836_jfldf1.jpg" type="mage/jpeg" />
          <Image  className="card-img" id="landing-img" cloudName={process.env.REACT_APP_CLOUDINARY_CLOUDNAME} publicId="portfolio/12836_jfldf1" alt="Landing Image"/>
        </picture>
        <Card.ImgOverlay id="landing-card-overlay" >
          <Card.Text> Hello, I'm </Card.Text>
          <Card.Header as="h1">{props.name}</Card.Header>
          <Card.Header as="h3">{props.title}</Card.Header>
          <Card.Text id="landing-card-subtitle" >{props.subtitle}</Card.Text>
          <Button className="landing-btn" variant="info" size="lg" href="/projects">My Projects</Button>
          <Button className="landing-btn" variant="success" size="lg" href="/contact">Contact Me</Button>
          <picture>
            <source srcSet="https://res.cloudinary.com/dyrcmbg1b/image/upload/w_350,h_350/v1599827809/portfolio/landing_avatar_j85x2i.webp" type="image/webp" />
            <source srcSet="https://res.cloudinary.com/dyrcmbg1b/image/upload/w_350,h_350/v1598405036/portfolio/landing_avatar_oerydq.jpg" type="image/jpeg" />
            <Image id="landing-avatar" cloudName={process.env.REACT_APP_CLOUDINARY_CLOUDNAME} publicId="portfolio/landing_avatar_oerydq" alt="Landing Avatar"width="350" height="350" radius="max" />
          </picture>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default HomePage;
