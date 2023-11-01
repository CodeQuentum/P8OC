import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddProject from '../components/addProject';

function AdminProject() {
  const [projets, setProjets] = useState([]);
  const [editedProject, setEditedProject] = useState({
    id: null,
    title: '',
    cover: null,
    pictures: [],
    description: '',
    tags: '',
  });

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await axios.get('http://localhost:4000/api/projects');
        setProjets(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des projets :', error);
      }
    }

    fetchProjects();
  }, []);

  const handleEditProjet = async () => {
    try {
      await axios.put(`http://localhost:4000/api/projects/${editedProject.id}`, editedProject);
      setProjets((prevProjects) =>
        prevProjects.map((projet) =>
          projet.id === editedProject.id ? { ...projet, title: editedProject.title } : projet
        )
      );

      setEditedProject({
        id: null,
        title: '',
        cover: null,
        pictures: [],
        description: '',
        tags: '',
      });
    } catch (error) {
      console.error('Erreur lors de la mise à jour du projet :', error);
    }
  };

  const handleDeleteProjet = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/projects/${id}`);
      setProjets((prevProjects) => prevProjects.filter((projet) => projet.id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression du projet :', error);
    }
  };

  return (
    <div>
      <h1>Liste des Projets</h1>
      <div className="projets">
        {projets.map((projet) => (
          <div key={projet.id} className="projet">
            <h3>{projet.title}</h3>
            <Link to={`/edit/${projet.id}`}>Modifier</Link>
            <button onClick={() => handleDeleteProjet(projet.id)}>Supprimer</button>
          </div>
        ))}
      </div>
      <h2>Ajouter un projet</h2>
      <AddProject />
      {editedProject.id !== null && (
        <div>
          <h2>Modifier le projet</h2>
          <input
            type="text"
            placeholder="Nouveau titre"
            value={editedProject.title}
            onChange={(e) => setEditedProject({ ...editedProject, title: e.target.value })}
          />
          <button onClick={handleEditProjet}>Enregistrer les modifications</button>
        </div>
      )}
    </div>
  );
}

export default AdminProject;