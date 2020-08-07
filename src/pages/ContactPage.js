import React, { Component } from 'react';
import Hero from '../components/hero';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Axios from 'axios';

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: false,
      emailSent: null
    }
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      disabled: true
    })

    Axios.post('http://localhost:3030/api/email', this.state)
      .then(res => {
          if(res.data.success) {
              this.setState({
                  disabled: false,
                  emailSent: true
              });
          } else {
              this.setState({
                  disabled: false,
                  emailSent: false
              });
          }
      })
      .catch(err => {
          console.log(err);

          this.setState({
              disabled: false,
              emailSent: false
          });
      })
  }

  render() {
    return (
      <div>
        <Hero title={this.props.title} ></Hero>
        <Container fluid={false}>
          <Form onSubmit={this.handleSubmit} >
            <Form.Group>
              <Form.Label htmlFor="full-name" >Full Name</Form.Label>
              <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email" >E-mail</Form.Label>
              <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="message" >Message</Form.Label>
              <Form.Control id="message" name="message" as="textarea" rows={5} value={this.state.message} onChange={this.handleChange} />
            </Form.Group>

            <Button className="d-line-block mb-2" variant="primary" type="submit" disabled={this.state.disabled} >
              Send
            </Button>

            {this.state.emailSent && <p className="alert alert-success" role="alert">Email sent</p>}
            {this.state.emailSent === false && <p className="alert alert-danger" role="alert">Email NOT sent</p>}
          </Form>
        </Container>
      </div>
    );
  }
}

export default ContactPage;
