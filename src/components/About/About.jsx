import React from 'react';
import Selfie from '../../assets/Rafal.jpg';
import { Row, Col } from 'react-bootstrap';
import './about.css';

function About() {
  return (
    <section id="about-me">
      <h2 className="text-white mb-4">About Me</h2>
      <Row>
        <Col xs={12} md={5} className="mb-3">
          <img src={Selfie} alt="Rafal" className="about-image" />
        </Col>
        <Col xs={12} md={5} className="text-white">
          <p>
            Hi, I'm Rafal! Born in 1984 in Bialystok, Poland, I now call Birmingham, England my home since 2010.
            My journey into the world of technology started with a passion for solving problems and a profound
            interest in the magic of code. My goal is not just to become a Software Developer but to be a
            creator who contributes to innovative projects and impactful solutions.
          </p>
          <p>
            My interest in software development grew from my curiosity about how digital applications
            can enhance our daily lives. I'm fascinated by the ever-evolving landscape of technology and
            am eager to keep learning and growing in this field. Over the years, I've dabbled in various
            aspects of coding and am now focusing on honing my skills in full-stack development.
          </p>
          <p>
            Outside of coding, I enjoy exploring the rich cultural tapestry of Birmingham, engaging in
            outdoor activities, and indulging in my love for travel and music. My dream is to merge
            my technical skills with creative expression, believing that the best software solutions are
            those that bring creativity and functionality together.
          </p>
          <p>
            I am excited about the journey ahead and am open to opportunities where I can contribute, learn,
            and grow. Let's create magic and make dreams come true together!
          </p>
        </Col>
      </Row>
    </section>
  );
}

export default About;