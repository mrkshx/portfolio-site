import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import '../assets/style/project_card.scss';


function ProjectCard(props) {

  return(
    <Card className="project-card" bg="dark" text="white" >
      <Card.Header as="h5">{props.name}</Card.Header>
      <Card.Body>
        <Card.Text>{props.description} <strong>{props.name}</strong></Card.Text>
        <Button variant="success" href={props.url} target="_blank" rel="noopener noreferrer">Visit Page</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
