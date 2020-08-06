import React, { Component } from 'react';
import Hero from '../components/hero';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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


  render() {
    return (
      <div>
        <Hero title={this.props.title} ></Hero>
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

          <Button className="d-line-block" variant="primary" type="submit" disabled={this.state.disabled} >
            Send
          </Button>
        </Form>
      </div>
    );
  }
}

export default ContactPage;
