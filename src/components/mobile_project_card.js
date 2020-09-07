import React from 'react';
import Card from 'react-bootstrap/Card';
import {Image} from 'cloudinary-react';

import '../assets/style/mobile_project_card.scss';


function MobileProjectCard(props) {

  return(
    <Card className="mobile-project-card" text="white" >
      <Image className="card-img mobile-project-image" cloudName={process.env.REACT_APP_CLOUDINARY_CLOUDNAME} publicId={props.image} />
      <Card.ImgOverlay className="mobile-project-card-img-overlay" >
        <div className="mobile-project-card-text" >
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}

export default MobileProjectCard;
