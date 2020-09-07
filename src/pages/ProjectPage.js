import React from 'react';
import Container from 'react-bootstrap/Container';

import Hero from '../components/hero';
import ProjectCard from '../components/project_card';
import MobileProjectCard from '../components/mobile_project_card';

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
          <div id="mobile_cards" >
            <MobileProjectCard
              name="BMI Calculator"
              description="Give you info about your bmi depending on your input"
              image="portfolio/bmi_static_tauwhu"
              gif="portfolio/bmi_w320_mbjafj"
            />
            <MobileProjectCard
              name="Todoey"
              description="This is a todo list. You can check a task as done and delete it"
              image="portfolio/todoey_static_ryxy45"
              gif="portfolio/todoey_w320_qegqgw"
            />
            <MobileProjectCard
              name="Clima"
              description="Show weather info depending on GPS or manual input"
              image="portfolio/clima_static_cgrnu6"
              gif="portfolio/clima_w320_xpsfvm"
            />
          </div>
        </Container>
      </div>
  );
}

export default ProjectPage;
