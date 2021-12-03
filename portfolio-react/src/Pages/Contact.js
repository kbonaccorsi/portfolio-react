import React from "react";

export default function Contact() {
  return (
    <div className="contactme-container">
      <h2 className="heading">Contact Me</h2>
      <div className="contact-form justify-content-center">
        <p>Email me below, and I will get back to you within 48 hours</p>
        {/* <button onClick={() => Linking.openURL("mailto:kaileigh.bonaccorsi@gmail.com?subject=SendMail&body=Description")} title="kaileigh.bonaccorsi@gmail.com" /> */}
      </div>
    </div>
  )
}