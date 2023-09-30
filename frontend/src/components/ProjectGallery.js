import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/ProjectsGallery.css';

function ProjectGallery() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/projects')
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des projets :', error);
      });
  }, []);

  return (
    <section id='mes-projets'>
      <div className="project-gallery">
        <h2>Mes projets</h2>
        <div className='gallery'>
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projet/${project.id}`}
              className="project-card"
            >
              <h3>{project.title}</h3>
              <div className="tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectGallery;