import React, { Component } from 'react';

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

  render() {
    return (
      <p>Contact Test</p>
    );
  }
}

export default ContactPage;
