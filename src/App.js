import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import skills_array from './constants/skills';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

library.add(fab, fas);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: {
        title: 'Welcome',
        subtitle: 'This is my personal website!',
        note: 'See my projects and feel free to contact me',
        skills: skills_array
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Contact Me'
      },
    }
  }

  render() {
    return (
      <Router>
        <Container fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Markus Mengel</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path='/' exact render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} note={this.state.home.note} skills={this.state.home.skills} />} />
          <Route path='/contact' exact render={() => <ContactPage title={this.state.contact.title} />} />
          <Footer/>
        </Container>
      </Router>
    );
  }
}

export default App;

