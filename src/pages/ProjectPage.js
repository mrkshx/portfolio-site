import React from 'react';
import Container from 'react-bootstrap/Container';

import Hero from '../components/hero';
import ProjectCard from '../components/project_card';

import ConstructionBanner from '../components/construction';

import '../assets/style/projectpage.scss';


function ProjectPage(props) {

  return(
      <div id="projectpage" >
        <Hero title={props.title} ></Hero>
        <ConstructionBanner/>
        <Container fluid={true} >
          <h4>Web Apps</h4>
          <ProjectCard
            name="Example1"
            description="This is an example description about the app"
            url="https://google.com"
          />
          <ProjectCard
            name="Example2"
            description="This is an example description about the app"
            url="https://google.com"
          />
        </Container>
        <Container fluid={true} >
          <h4>Mobile Apps</h4>
        </Container>
      </div>
  );
}

export default ProjectPage;
