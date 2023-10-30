import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProjectsGallery.css';
import projetsData from '../data/projects.json';
import ProjectDetail from './ProjectDetails'; 

function ProjectGallery() {
  const [projects] = useState(projetsData);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <section id='mes-projets'>
      <div className="container">
        <div className="project-gallery">
          <h2>Mes projets</h2> 
          <div className="project-buttons">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className={`btn btn-outline-primary ${selectedProject.id === project.id ? 'active' : ''}`}
              >
                {project.title}
              </button>
            ))}
          </div>
          <div className="project-details">
            {selectedProject && <ProjectDetail project={selectedProject} />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectGallery;