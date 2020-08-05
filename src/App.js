import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Container fluid={true}>
          <Navbar className="border-bottom">
            <Navbar.Brand>Markus Mengel</Navbar.Brand>
          </Navbar>
        </Container>
      </Router>
    );
  }
}

export default App;

