import React, { Component, lazy, Suspense } from 'react';
import firebase from "../FireStore";
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Hero from '../components/hero';
// import ProjectCard from '../components/project_card';
import '../assets/style/projectpage.scss';
const ProjectCard = lazy(() => import('../components/project_card'));
const MobileProjectCard = lazy(() => import('../components/mobile_project_card'));


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

  renderProjectLoader = () => {
    return(
      <div className="fallback-project-card">
        <p>Loading</p>
        <FontAwesomeIcon className="loading-spinner" icon={["fas", "spinner"]} spin size="4x"/>
      </div>
    );
  }

  renderMobileProjectLoader = () => {
    return(
      <div className="fallback-mobile-project-card">
        <p>Loading</p>
        <FontAwesomeIcon className="loading-spinner" icon={["fas", "spinner"]} spin size="4x"/>
      </div>
    );
  }

  showProjects = () => {
    return this.state.projects.map((project, index) => {
      return(
        <Suspense key={index} fallback={this.renderProjectLoader()}>
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            url={project.url}
            image={project.image}
            skills={project.skills}
          />
        </Suspense>
      );
    });
  }

  showMobileProjects = () => {
    return this.state.mobile_projects.map((m_project, index) => {
      return(
        <Suspense key={index} fallback={this.renderMobileProjectLoader()}>
          <MobileProjectCard
            key={index}
            name={m_project.name}
            description={m_project.description}
            image={m_project.image}
          />
        </Suspense>
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
