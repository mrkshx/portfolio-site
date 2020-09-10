import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../assets/style/project_card.scss';


function ProjectCard(props) {

  return(
    <Card className="project-card" text="white" >
      <Card.Img className="project-image" src={props.image} alt="Card image" />
      <Card.ImgOverlay className="project-card-img-overlay" >
        <div className="project-card-text" >
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </div>
        <div className="project-skill">
          {props.skills.map((skill) => (
            <FontAwesomeIcon key={skill.symbol} icon={[skill.type, skill.symbol]} size="2x"/>
          ))}
        </div>
        <Button variant="success" href={props.url} target="_blank" rel="noopener noreferrer">Visit Page</Button>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ProjectCard;
