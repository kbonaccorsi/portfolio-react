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
    <Container fluid className="page-container">
      <h2 className="page-heading">About Me</h2>
      <Row className="page-content d-flex" >
        <Col xs="auto" className="selfie">
          <img src={Selfie} className="aboutme-selfie" alt="selfie of Kaileigh Bonaccorsi" />
        </Col>
        <Col xs={9}>
          <p className="p">
            Full Stack Web Developer with a background in Education providing a first-hand perspective to improve classroom applications. I have recently earned a certificate in full stack web development from Northwestern University honing my skills with React.js, MongoDb, and Javascript. There are many applications I dream of making. However, my main goal for the future is to create a program for teachers and students to use in the classroom to help differentiate learning. I might be making a career change, but education will always be an important aspect of my life. I live in San Antonio, Texas with my family, and I am looking forward to what life brings.
          </p>
        </Col>
      </Row>
      <Row >
        <h3 className="subheading">Skills</h3>
        <div className="technologies">
          <div className="tech">
            <Image src={HTML} className="tech-icon" alt="h t m l icon" width="70rem" />
            <Image src={CSS} className="tech-icon" alt="c s s icon" width="70rem" />
            <Image src={GitHub} className="tech-icon" alt="git hub icon" width="70rem" />
            <Image roundedCircle src={Javascript} className="tech-icon" alt="javascript icon" width="70rem" />
            <Image src={NodeJS} className="tech-icon" alt="node j s icon" width="70rem" />
          </div>
          <div className="tech">
            <Image src={OOP} className="tech-icon" alt=" object oriented programming icon" width="70rem" />
            <Image src={Express} className="tech-icon" alt="express j s icon" width="70rem" />
            <Image src={MySQL} className="tech-icon" alt="my sequal icon" width="70rem" />
            <Image src={PWA} className="tech-icon" alt="progressive web application icon" width="70rem" />
            <Image src={ReactImg} classname="tech-icon" alt="react icon" width="70rem" />
            <Image src={Mern} className="tech-icon" alt="mern icon" width="70rem" />
          </div>
        </div>
      </Row>

    </Container>
  )
}