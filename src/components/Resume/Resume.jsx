import React from 'react';
import { Icon } from '@iconify/react';
import { Card, ListGroup, Row, Col, Button } from 'react-bootstrap';
import './Resume.css';

const skills = {
  frontend: [
    { skill: 'HTML', icon: 'iconoir:html5', href: 'https://html.spec.whatwg.org/multipage/' },
    { skill: 'CSS', icon: 'iconoir:css3', href: 'https://www.w3.org/TR/CSS/#css' },
    { skill: 'JavaScript', icon: 'teenyicons:javascript-outline', href: 'https://www.javascript.com/' },
    { skill: 'React', icon: 'akar-icons:react-fill', href: 'https://reactjs.org/' },
    { skill: 'Bootstrap', icon: 'tabler:brand-bootstrap', href: 'https://getbootstrap.com/' },
    { skill: 'Handlebars', icon: 'simple-icons:handlebarsdotjs', href: 'https://handlebarsjs.com/' },


  ],
  backend: [
    { skill: 'Node.js', icon: 'la:node', href: 'https://nodejs.org/en/' },
    { skill: 'Express', icon: 'simple-icons:express', href: 'https://expressjs.com/' },
    { skill: 'npm', icon: 'akar-icons:npm-fill', href: 'https://www.npmjs.com/' },
    { skill: 'MySQL', icon: 'cib:mysql', href: 'https://www.mysql.com/' },
    { skill: 'MongoDB', icon: 'teenyicons:mongodb-outline', href: 'https://www.mongodb.com/' },
    { skill: 'GraphQL', icon: 'akar-icons:graphql-fill', href: 'https://graphql.org/' },


  ],
};

const SkillItem = ({ skill, icon, href }) => (
  <ListGroup.Item>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon icon={icon} style={{ marginRight: '10px' }} />
      {skill}
    </a>
  </ListGroup.Item>
);

const SkillsSection = ({ title, skills }) => (
  <Card className="skill-card">
    <Card.Header>{title}</Card.Header>
    <ListGroup variant="flush">
      {skills.map((skill, index) => (
        <SkillItem key={index} skill={skill.skill} icon={skill.icon} href={skill.href} />
      ))}
    </ListGroup>
  </Card>
);
function Resume() {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <Button
        variant="primary"
        href="https://docs.google.com/document/d/1mNxAbQtpP0SQZB_NVK69rCYOg-nRd8xbGzivmLndb-o/edit?usp=sharing"
        target="_blank"
        className="resume-button mb-4"
      >
        Check My CV
      </Button>

      <h3>My Experience:</h3>
      <Row className="justify-content-center">
        <Col md={6}>
          <SkillsSection title="Frontend Development" skills={skills.frontend} />
        </Col>
        <Col md={6}>
          <SkillsSection title="Backend Development" skills={skills.backend} />
        </Col>
      </Row>
    </section>
  );
}

export default Resume;