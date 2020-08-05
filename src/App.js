import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Container fluid={true}>
          <div>TEXT</div>
        </Container>
      </Router>
    );
  }
}

export default App;

