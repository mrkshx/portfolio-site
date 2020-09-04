import React from 'react';
import Container from 'react-bootstrap/Container';

import Hero from '../components/hero';
import ProjectCard from '../components/project_card';

import ConstructionBanner from '../components/construction';

import '../assets/style/projectpage.scss';

import landing_image from '../assets/images/12836.jpg';


function ProjectPage(props) {

  return(
      <div id="projectpage" >
        <Hero title={props.title} ></Hero>
        <ConstructionBanner/>
        <Container>
          <h4>Web Apps</h4>
          <ProjectCard
            name="Example1"
            description="This is an example description about the app"
            url="https://google.com"
            image={landing_image}
          />
          <ProjectCard
            name="Example2"
            description="This is an example description about the app"
            url="https://google.com"
            image={landing_image}
          />
        </Container>
        <Container fluid={true} >
          <h4>Mobile Apps</h4>
        </Container>
      </div>
  );
}

export default ProjectPage;
