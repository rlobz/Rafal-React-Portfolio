import React from 'react';

function Project({ project }) {
  return (
    <div>
      <img src={project.imageUrl} alt={project.title} />
      <h3>{project.title}</h3>
      <a href={project.deployedUrl}>Deployed Application</a>
      <a href={project.repoUrl}>GitHub Repo</a>
    </div>
  );
}

export default Project;
