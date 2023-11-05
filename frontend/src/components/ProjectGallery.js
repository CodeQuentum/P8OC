import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProjectsGallery.css';
import ProjectDetail from './ProjectDetails';
import axios from 'axios';

function ProjectGallery() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/api/projects') 
      .then((response) => {
        const data = response.data;
        setProjects(data);
        if (data.length > 0) {
          setSelectedProject(data[0]);
        }
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données depuis le backend:', error);
      });
  }, []);

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
                className={`btn btn-outline-primary ${selectedProject && selectedProject.id === project.id ? 'active' : ''}`}
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