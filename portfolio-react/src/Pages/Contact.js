import React, { useState } from "react";
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import { send } from 'emailjs-com';
import Swal from 'sweetalert2';


const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;





const Contact = () => {
    const handleOnSubmit = (e) => {
    e.preventDefault();

  //   emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
  //     .then((result) => {
  //       console.log(result.text);
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Message Sent Successfully'
  //       })
  //     }, (error) => {
  //       console.log(error.text);
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Oops, something went wrong',
  //         text: error.text,
  //       })
  //     });
  //   e.target.reset()
   };

  return (
    <div className="page-container">
      <h2 className="page-heading">Contact Me</h2>
      <div className="page-content">
      <form className="form d-flex">
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
            <Button type='submit' className='btn'>Submit</Button>
          </Form>
        </form>
      </div>
    </div>
  );
}

export default Contact;