import React, { useState, useEffect } from 'react';
import '../styles/ProjectsGallery.css';
import projetsData from '../data/projects.json';

function ProjectGallery() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projetsData);
  }, []);

  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id='mes-projets'>
      <div className="project-gallery">
        <h2>Mes projets</h2>
        <ul className='gallery'>
          {projects.map((project) => (
            <li key={project.id}>
              <a href={`#project-${project.id}`} onClick={() => scrollToSection(`project-${project.id}`)}>
                <img src={project.cover} alt={project.title} />
                <p>{project.title}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProjectGallery;