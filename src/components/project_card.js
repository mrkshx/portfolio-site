import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import '../assets/style/project_card.scss';


function ProjectCard(props) {

  return(
    <Card className="project-card" text="white" >
      <Card.Img className="project-image" src={props.image} alt="Card image" />
      <Card.ImgOverlay>
        <div className="project-card-text" >
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.description} <strong>{props.name}</strong></Card.Text>
        </div>
        <Button variant="success" href={props.url} target="_blank" rel="noopener noreferrer">Visit Page</Button>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ProjectCard;
