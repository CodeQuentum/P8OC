import React, { useState } from 'react';
import axios from 'axios';

function AddProject() {
  const [formData, setFormData] = useState({
    title: '',
    image: null,
    description: '',
    tags: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('tags', formData.tags);

    // Utilisez 'image' comme clé pour l'image
    formDataToSend.append('image', formData.image);

    try {
      const response = await axios.post('http://localhost:4000/api/projects', formDataToSend);
      console.log('Réponse du serveur :', response.data);
    } catch (error) {
      console.error('Erreur lors de la soumission du projet :', error);
    }
  };

  return (
    <div>
      <h1>Ajouter un Projet</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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
          <label htmlFor="image">Image du projet</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Ajouter le Projet</button>
      </form>
    </div>
  );
}

export default AddProject;