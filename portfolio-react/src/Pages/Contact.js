import React from "react";
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


const SERVICE_ID = "";
const TEMPLATE_ID = "";
const USER_ID = "";

const Contact = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (e) => {
        console.log(e.text);
        Swal.fire({
          icon: 'error',
          title: 'Oops, something went wrong',
          text: e.text,
        })
      });
    e.target.reset()
  };

  return (
    <div className="page-container">
      <h2 className="page-heading">Contact Me</h2>
      <div className="page-content">
        <div className="form d-inline-flex">
          <Form onSubmit={handleOnSubmit}>
            <Form.Field
              id='form-input-control-email'
              control={Input}
              label='Email'
              name='user_email'
              placeholder='Email...'
              required
              icon='mail'
              iconPosition='left'
            />
            <Form.Field
              id='form-input-control-last-name'
              control={Input}
              label='Name'
              name='user_name'
              placeholder='Name...'
              required
              icon='user circle'
              iconPosition='left'
            />
            <Form.Field
              id='form-textarea-control-opinion'
              control={TextArea}
              label='Message'
              name='user_message'
              placeholder='Message...'
              required
            />
            <Button type='submit' color='green'>Submit</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;