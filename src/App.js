import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import './assets/style/app.scss';
import './assets/style/navbar.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import skills_array from './constants/skills';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import Footer from './components/Footer';

library.add(fab, fas);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: {
        name: 'Markus Mengel',
        title: 'Full-Stack and Mobile Developer',
        subtitle: 'Excited to learn more skills and build cool projects',
      },
      about: {
        title: 'About Me',
        skills: skills_array
      },
      contact: {
        title: 'Contact Me'
      },
      projects: {
        title: 'My Projects'
      },
    }
  }

  render() {
    return (
      <Router>
      <div className="app" >
        <Navbar id="navbar" className="border-bottom sticky-top" expand="lg">
          <Navbar.Brand>
            <Link className="nav-link" to="/">Markus Mengel</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span>
              <FontAwesomeIcon id="navbar-hamburger" icon="bars"/>
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <LinkContainer exact to="/">
                <Nav.Item className="nav-link">Home</Nav.Item>
              </LinkContainer>
              <LinkContainer exact to="/about" >
                <Nav.Item className="nav-link">About</Nav.Item>
              </LinkContainer>
              <LinkContainer exact to="/projects" >
                <Nav.Item className="nav-link">Projects</Nav.Item>
              </LinkContainer>
              <LinkContainer exact to="/contact" >
                <Nav.Item className="nav-link">Contact</Nav.Item>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container className="p-0 appbody" fluid={true}>
          <Route path='/' exact render={() => <HomePage name={this.state.home.name} title={this.state.home.title} subtitle={this.state.home.subtitle} skills={this.state.home.skills} />} />
          <Route path='/contact' exact render={() => <ContactPage title={this.state.contact.title} />} />
          <Route path='/about' exact render={() => <AboutPage title={this.state.about.title} skills={this.state.about.skills}/>} />
          <Route path='/projects' exact render={() => <ProjectPage title={this.state.projects.title}/>} />
          <Footer/>
        </Container>
      </div>
      </Router>
    );
  }
}

export default App;

