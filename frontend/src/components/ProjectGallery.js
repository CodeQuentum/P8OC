import React, { useState } from 'react';
import '../styles/ProjectsGallery.css';
import projetsData from '../data/projects.json';
import ProjectDetail from './ProjectDetails'; 

function ProjectGallery() {
  const [projects] = useState(projetsData);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <section id='mes-projets'>
      <div className="project-gallery">
        <h2>Mes projets</h2>
        <div className="project-buttons">
          {projects.map((project) => (
            <button key={project.id} onClick={() => handleProjectClick(project)}>
              {project.title}
            </button>
          ))}
        </div>
        <div className="project-details">
          {selectedProject && <ProjectDetail project={selectedProject} />}
        </div>
      </div>
    </section>
  );
}

export default ProjectGallery;