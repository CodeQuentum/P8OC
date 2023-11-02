import React, { useState } from 'react';
import axios from 'axios'; 

function AddProject() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    repo:'',
    figma:'',
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('tags', formData.tags);
    formDataToSend.append('repo', formData.repo);
    formDataToSend.append('figma', formData.figma);


    try {
      const response = await axios.post('http://localhost:4000/api/projects', formDataToSend, {
        headers: {
          'Content-Type': 'application/json', 
        },
      });
      console.log('Réponse du serveur :', response.data);

    } catch (error) {
      console.error('Erreur lors de la soumission du projet :', error);
    }
  };

  return (
    <div>
      <h1>Ajouter un Projet</h1>
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
            value={formData.tags}
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
          <label htmlFor="figma">Url Maquette figma</label>
          <input
            type="text"
            id="figma"
            name="figma"
            value={formData.figma}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Ajouter le Projet</button>
      </form>
    </div>
  );
}

export default AddProject;