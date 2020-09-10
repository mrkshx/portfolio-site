import React, { Component } from 'react';
import firebase from "../FireStore";
import Container from 'react-bootstrap/Container';

import Hero from '../components/hero';
import ProjectCard from '../components/project_card';
import MobileProjectCard from '../components/mobile_project_card';

import '../assets/style/projectpage.scss';

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }

  getProjects = () => {
    const db = firebase.firestore();
    db.collection("projects").get().then((querySnapshot) => {
      const projects = querySnapshot.docs.map(project => project.data());
      this.setState({projects});
    })
  }

  showProjects = () => {
    return this.state.projects.map((project, index) => {
      return(
        <ProjectCard
          key={index}
          name={project.name}
          description={project.description}
          url={project.url}
          image={project.image}
          skills={[['fas', 'gem'],['fab', 'html5'],['fab', 'css3'],['fab', 'js']]}
        />
      );
    });
  }

  componentDidMount() {
    this.getProjects()
  }


  render() {
    return(
        <div id="projectpage" >
          <Hero title={this.props.title} ></Hero>
          <Container>
            <h4>Web Apps</h4>
            {this.showProjects()}
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
}

export default ProjectPage;
