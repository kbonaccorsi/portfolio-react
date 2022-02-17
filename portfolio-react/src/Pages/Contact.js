import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


// const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
// const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
// const USER_ID = process.env.REACT_APP_USER_ID;


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
        <form ref={form} onSubmit={handleOnSubmit} className="form d-flex">
          <label name="user_name" />          <input type="text" name="user_name" placeholder="name" />
          <label name="user_email" />          <input type="email" name="user_email" placeholder="email" />
          <label name="user_message" />
          <textarea name="user_message" placeholder="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div >
  );
};
