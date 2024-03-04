import React from 'react';

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <a href="path_to_my_resume.pdf" download>Download My Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        {/* List my skills */}
        <li>JavaScript</li>
        <li>React</li>
        {/* more as needed */}
      </ul>
    </section>
  );
}

export default Resume;
