import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import BottomNavbar from './bottom-navbar'
import emailjs from 'emailjs-com'
import './contact-us.css'

class Contact extends React.Component {
  state = {
    name: '',
    mail: '',
    message: '',
    sent: false,
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    emailjs
      .sendForm(
        'default_service',
        'contact_form',
        event.target,
        'user_2853rwzQwOgtGRHnfnFJO'
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )

    this.resetForm()
  }

  resetForm() {
    this.setState({
      name: '',
      mail: '',
      message: '',
      sent: true,
    })
  }

  render() {
    const { name, mail, message } = this.state
    return (
      <div className='contact'>
        <br />
        <br />
        <Form className='contact-container' onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for='name'>Let's start with your name.</Label>
            <Input
              value={name}
              onChange={this.handleChange}
              name='name'
              placeholder='Name'
              type='text'
              required></Input>
          </FormGroup>
          <FormGroup>
            <Label for='mail'>What e-mail address can we reach you at?</Label>
            <Input
              value={mail}
              onChange={this.handleChange}
              name='mail'
              placeholder='Mail'
              type='text'
              required></Input>
          </FormGroup>
          <FormGroup>
            <Label for='message'>How can we help you?</Label>
            <Input
              value={message}
              onChange={this.handleChange}
              name='message'
              placeholder='Message'
              type='textarea'
              required></Input>
          </FormGroup>
          <Button className='button-green' size='lg'>
            Contact us!
          </Button>
        </Form>
        <footer className='page-footer fixed-bottom'>
          <BottomNavbar />
        </footer>
      </div>
    )
  }
}

export default Contact
