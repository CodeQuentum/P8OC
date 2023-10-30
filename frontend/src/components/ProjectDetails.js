import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFigma } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProjectDetails.css';

const ProjectDetail = ({ project }) => {
  if (!project) {
    return null;
  }

  return (
    <div className="container">
      <div className="projet-detail">
        <h2>{project.title}</h2> 
        <p className="lead">{project.description}</p>
        <div className="tags">
          {project.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="badge badge-secondary mr-2">{tag}</span>
          ))}
        </div>
        <div className="liens">
          <a href={project.repo} target="_blank" rel="noopener noreferrer" aria-label="Lien vers le GitHub du projet.">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={project.figma} target="_blank" rel="noopener noreferrer" aria-label="Lien vers la maquette Figma du projet.">
            <FontAwesomeIcon icon={faFigma} /> 
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;