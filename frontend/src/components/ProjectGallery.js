import React, { useState, useEffect } from 'react';
import '../styles/ProjectsGallery.css';
import projetsData from '../data/projects.json';
import ScrollToSection from './ScrollToSection';

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
              <ScrollToSection sectionId={`project-${project.id}`}>
                <a href={`#project-${project.id}`}>
                  <img src={project.cover} alt={project.title} />
                  <p>{project.title}</p>
                </a>
              </ScrollToSection>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProjectGallery;