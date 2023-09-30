import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFigma } from '@fortawesome/free-brands-svg-icons';
import '../styles/ProjectDetails.css';
import projetData from '../data/projects.json';

const ProjectDetail = () => {
  return (
    <div>
      {projetData.map((projet, index) => (
        <div className="projet-detail" key={index}>
          <h2>{projet.title}</h2>
          <p>{projet.description}</p>
          <div className="tags">
            {projet.tags.map((tag, tagIndex) => (
              <span key={tagIndex}>{tag}</span>
            ))}
          </div>
          <div className="liens">
            <a href={projet.repo} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> 
            </a>
            <a href={projet.figma} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFigma} /> 
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetail;