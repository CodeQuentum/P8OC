import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectsGallery.css';
import projetsData from '../data/projects.json';

function ProjectGallery() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projetsData);
  }, []);

  return (
    <section id='mes-projets'>
      <div className="project-gallery">
        <h2>Mes projets</h2>
        <ul className='gallery'>
          {projects.map((project) => (
            <li key={project.id}>
              <Link to={`/projet/${project.id}`}>
                <img src={project.cover} alt={project.title} />
                <p>{project.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProjectGallery;