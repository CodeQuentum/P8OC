import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddProject from '../components/addProject';

function AdminProject() {
  const [projets, setProjets] = useState([]);
  const [editedProject, setEditedProject] = useState({
    id: null,
    title: '',
    description: '',
    tags: '',
    repo: '',
    figma: '',
  });

  useEffect(() => {
    const token = localStorage.getItem('token');

    async function fetchProjects() {
      try {
        const response = await axios.get('http://localhost:4000/api/projects', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setProjets(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des projets :', error);
      }
    }

    fetchProjects();
  }, []);

  const handleEditProjet = async () => {
    const token = localStorage.getItem('jwtToken');

    try {
      await axios.put(`http://localhost:4000/api/projects/${editedProject.id}`, editedProject, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setProjets((prevProjects) =>
        prevProjects.map((projet) =>
          projet._id === editedProject.id ? { ...projet, title: editedProject.title } : projet
        )
      );

      setEditedProject({
        id: null,
        title: '',
        description: '',
        tags: '',
        repo: '',
        figma: '',
      });
    } catch (error) {
      console.error('Erreur lors de la mise à jour du projet :', error);
    }
  };

  const handleDeleteProjet = async (id) => {
    const token = localStorage.getItem('token');

    try {
      await axios.delete(`http://localhost:4000/api/projects/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setProjets((prevProjects) => prevProjects.filter((projet) => projet._id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression du projet :', error);
    }
  };

  return (
    <div>
      <h1>Liste des Projets</h1>
      <div className="projets">
        {projets.map((projet) => (
          <div key={projet._id} className="projet">
            <h3>{projet.title}</h3>
            <Link to={`/edit/${projet._id}`}>Modifier</Link>
            <button onClick={() => handleDeleteProjet(projet._id)}>Supprimer</button>
          </div>
        ))}
      </div>
      <AddProject />
      {editedProject.id !== null && (
        <div>
          <h2>Modifier le projet</h2>
          <input
            type="text"
            placeholder="Nouveau titre"
            value={editedProject.title}
            onChange={(e) => {
              setEditedProject({ ...editedProject, title: e.target.value });
            }}
          />
          <button onClick={handleEditProjet}>Enregistrer les modifications</button>
        </div>
      )}
    </div>
  );
}

export default AdminProject;