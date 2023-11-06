import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NotFound from './NotFound';
import ReturnButton from '../components/returnButton';

function EditProject() {
  const pathname = window.location.pathname;
  const projectId = pathname.substring(pathname.lastIndexOf('/') + 1);

  console.log('ID du projet (extrait de l\'URL) :', projectId);

  const [project, setProject] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: [],
    repo: '',
    figma: '',
  });

  useEffect(() => {
    async function fetchProjectData() {
      try {
        console.log('Fetching project data for projectId:', projectId);

        const response = await axios.get(`http://localhost:4000/api/projects/${projectId}`);
        console.log('Response data:', response.data);

        const selectedProject = response.data;

        if (selectedProject) {
          console.log('Selected project:', selectedProject);
          setProject(selectedProject);
          setFormData({
            title: selectedProject.title,
            description: selectedProject.description,
            tags: selectedProject.tags, // Les tags sont désormais stockés en tant que tableau
            repo: selectedProject.repo,
            figma: selectedProject.figma,
          });
        } else {
          console.log('Project not found for ID:', projectId);
        }
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    }
    fetchProjectData();
  }, [projectId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "tags" ? value.split(',').map(tag => tag.trim()) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Updating project with ID:', projectId);
      await axios.put(`http://localhost:4000/api/projects/${projectId}`, formData);
      console.log('Project updated successfully!');
    } catch (error) {
      console.error('Error updating the project:', error);
    }
  }

  if (!project) {
    return (
      <div>
        <NotFound />
      </div>
    );
  }

  return (
    <div>
      <h1>Modifier le Projet</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="tags">Tags (séparés par des virgules)</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags.join(', ')} // Afficher les tags en tant que chaîne
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="repo">URL repo git</label>
          <input
            type="text"
            id="repo"
            name="repo"
            value={formData.repo}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="figma">URL maquette Figma</label>
          <input
            type="text"
            id="figma"
            name="figma"
            value={formData.figma}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Enregistrer les modifications</button>
      </form>
      <ReturnButton />
    </div>
  );
}

export default EditProject;