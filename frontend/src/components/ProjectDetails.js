import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFigma } from '@fortawesome/free-brands-svg-icons';
import '../styles/ProjectDetails.css';

const ProjectDetail = ({ project }) => {
  if (!project) {
    return null;
  }

  return (
    <div className="projet-detail">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map((tag, tagIndex) => (
          <span key={tagIndex}>{tag}</span>
        ))}
      </div>
      <div className="liens">
        <a href={project.repo} target="_blank" rel="noopener noreferrer" aria-label="Lien vers le gitHub du projet.">
          <FontAwesomeIcon icon={faGithub} /> 
        </a>
        <a href={project.figma} target="_blank" rel="noopener noreferrer" aria-label="Lien vers la maquette figma du projet.">
          <FontAwesomeIcon icon={faFigma} /> 
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;