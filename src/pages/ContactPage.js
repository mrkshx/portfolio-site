import React, { Component } from 'react';
import Hero from '../components/hero';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Axios from 'axios';

import '../assets/style/contactpage.scss';
import '../assets/style/contact_form.scss';

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: false,
      emailSent: null,
      validated: false,
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
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    this.setState({
      validated: true,
    })

    if (form.checkValidity() === true) {
      Axios.post('https://us-central1-personalsite-291de.cloudfunctions.net/webApi/api/email', this.state)
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
  }

  render() {
    return (
      <div id="contactpage" >
        <Hero title={this.props.title} ></Hero>
        <Container fluid={false}>
          <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit} >
            <Form.Group>
              <Form.Label htmlFor="full-name" >Full Name</Form.Label>
              <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} required/>
              <Form.Control.Feedback type="invalid">
                Please provide a valid name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email" >E-mail</Form.Label>
              <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} required/>
              <Form.Control.Feedback type="invalid">
                Please provide a valid mail address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="message" >Message</Form.Label>
              <Form.Control id="message" name="message" as="textarea" rows={5} value={this.state.message} onChange={this.handleChange} required/>
              <Form.Control.Feedback type="invalid">
                Please provide a valid message.
              </Form.Control.Feedback>
            </Form.Group>

            <Button id="form-btn" className="d-line-block mb-2" variant="success" type="submit" disabled={this.state.disabled} >
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
