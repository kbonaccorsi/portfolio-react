import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;


export default function Contact() {
  const form = useRef();
  
  const handleOnSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6y1es1c', 'template_0e8kt2i', form.current, 'user_D3Bfs6PC6YZoPrKTXHc2u')
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Oops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

  return (
    <div className="page-container">
      <h2 className="page-heading">Contact Me</h2>
      <div className="page-content d-flex">
        <div className="form d-flex">
          <form ref={form} onSubmit={handleOnSubmit}>
            <label name="user_name" />          <input type="text" name="user_name" placeholder="name" icon='mail' iconPosition='left'/>
            <label name="user_email" />          <input type="" name="user_email" placeholder="email" />
            <label name="user_message" />
            <textarea name="user_message" placeholder="message"/>
            <input type="submit" value="Send" />
          </form>
        </div>

        {/* 
          <Form ref={form} onSubmit={handleOnSubmit}>
            <form.Field
              id='form-input-control-email'
              control={Input}
              label='Email'
              name='user_email'
              placeholder='Email...'
              required
              icon='mail'
              iconPosition='left'
            />
            <form.Field
              id='form-input-control-last-name'
              control={Input}
              label='Name'
              name='user_name'
              placeholder='Name...'
              required
              icon='user circle'
              iconPosition='left'
            />
            <form.Field
              id='form-textarea-control-opinion'
              control={TextArea}
              label='Message'
              name='user_message'
              placeholder='Message...'
              required
            />
            <Button type='submit' className='btn'>Submit</Button>
          </Form>
        </div> */}
      </div>
    </div>
  );
};
