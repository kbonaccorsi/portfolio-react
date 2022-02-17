import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Selfie from '../public/selfie.jpg';
import HTML from '../public/html.png';
import CSS from '../public/css.png';
import Javascript from '../public/javascript.png';
import NodeJS from '../public/nodejs.png';
import GitHub from '../public/GitHub-Mark-64px.png';
import OOP from '../public/oop.png';
import Express from '../public/express.png';
import MySQL from '../public/mysql.png';
import PWA from '../public/pwa.png';
import ReactImg from '../public/react.png';
import Mern from '../public/mern.png';

export default function AboutMe() {
  return (
    <Container fluid className="page-container" style={{background: 'rgba(253, 253, 253, 0.2)', boxShadow: '2px -10px 25px rgba(254, 255, 255)' }}>
      <h2 className="page-heading">About Me</h2>
      <Row className="page-content d-flex" >
        <Col xs="auto" className="selfie">
          <img src={Selfie} className="aboutme-selfie" alt="selfie of Kaileigh Bonaccorsi" />
        </Col>
        <Col xs={9}>
          <p className="p">
          Full Stack Web Developer based in San Antonio, Texas with a background in Education and a thirst for life-long learning. Recently earned a certificate in full stack web development from Northwestern University honing my skills with React.js, MongoDB, JavaScript, and CSS. Effective at adapting and collaborating while producing accessible, mobile-responsive applications. Known for leadership, willingness to take on new challenges, and for determination no matter the task at hand. When developing applications, I constantly think of accessibility for users and ease of use. In a recent project, I worked on a team of five to develop an application that allows a user to securely login, post job openings, view all job openings, leave thoughts on jobs, and contact users through email. This application utilizes MongoDB, Express.js, React.js, Node.js, bcrypt, jsonwebtoken, graphQL, materialUI, and mongoose. I’m excited to use the skills I’ve acquired in the creation of applications.
          </p>
        </Col>
      </Row>
      <h3 className="page-heading">Skills</h3>
      <Row >
        <div className="technologies">
            <Image src={HTML} className="tech-icon" alt="h t m l icon" width="70rem" />
            <Image src={CSS} className="tech-icon" alt="c s s icon" width="70rem" />
            <Image src={GitHub} className="tech-icon" alt="git hub icon" width="70rem" />
            <Image roundedCircle src={Javascript} className="tech-icon" alt="javascript icon" width="70rem" />
            <Image src={NodeJS} className="tech-icon" alt="node j s icon" width="70rem" />
            <Image src={OOP} className="tech-icon" alt=" object oriented programming icon" width="70rem" />
            <Image src={Express} className="tech-icon" alt="express j s icon" width="70rem" />
            <Image src={MySQL} className="tech-icon" alt="my sequal icon" width="70rem" />
            <Image src={PWA} className="tech-icon" alt="progressive web application icon" width="70rem" />
            <Image src={ReactImg} classname="tech-icon" alt="react icon" width="70rem" />
            <Image src={Mern} className="tech-icon" alt="mern icon" width="70rem" />
        </div>
      </Row>

    </Container>
  )
}