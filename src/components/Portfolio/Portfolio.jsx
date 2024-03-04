import React from 'react';
import Project from '../Project/Project';

function Portfolio() {
  const projects = [
    { title: "Project 1", imageUrl: "...", deployedUrl: "...", repoUrl: "..." }
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
