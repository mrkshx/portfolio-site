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
        <Container>
          <h4>Web Apps</h4>
          <ProjectCard
            name="Cars B'n'B"
            description="A simple car booking application with functionality to review a booking"
            url="https://cars-bnb.herokuapp.com/"
            image="https://source.unsplash.com/axTvnbgRlAk"
            skills={[['fas', 'gem'],['fab', 'html5'],['fab', 'css3'],['fab', 'js']]}
          />
        </Container>
        <Container>
          <h4>Mobile Apps</h4>
        </Container>
      </div>
  );
}

export default ProjectPage;
