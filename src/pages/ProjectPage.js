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
      projects: [],
      mobile_projects: []
    }
  }

  getProjects = () => {
    const db = firebase.firestore();
    db.collection("projects").get().then((querySnapshot) => {
      const projects = querySnapshot.docs.map(project => project.data());
      this.setState({projects});
    })
  }

  getMobileProjects = () => {
    const db = firebase.firestore();
    db.collection("mobile_projects").get().then((querySnapshot) => {
      const mobile_projects = querySnapshot.docs.map(m_project => m_project.data());
      this.setState({mobile_projects});
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
          skills={project.skills}
        />
      );
    });
  }

  showMobileProjects = () => {
    return this.state.mobile_projects.map((m_project, index) => {
      return(
        <MobileProjectCard
          key={index}
          name={m_project.name}
          description={m_project.description}
          image={m_project.image}
        />
      );
    });
  }

  componentDidMount() {
    this.getProjects()
    this.getMobileProjects()
  }


  render() {
    return(
        <div id="projectpage" >
          <Hero title={this.props.title} ></Hero>
          <Container>
            <h4 className="project-category-header" >Web Apps</h4>
            {this.showProjects()}
          </Container>
          <Container>
            <h4 className="project-category-header" >Mobile Apps</h4>
            <div id="mobile_cards" >
              {this.showMobileProjects()}
            </div>
          </Container>
        </div>
    );
  }
}

export default ProjectPage;
