import React, { useState } from 'react';

function EditProject({ project, onSave, onCancel }) {
  const [editedTitle, setEditedTitle] = useState(project.title);
  const [editedDescription, setEditedDescription] = useState(project.description);
  const [editedTags, setEditedTags] = useState(project.tags.join(', '));

  const handleSave = () => {
    const editedProject = {
      ...project,
      title: editedTitle,
      description: editedDescription,
      tags: editedTags.split(',').map(tag => tag.trim()),
    };

    onSave(editedProject);
  };

  return (
    <div>
      <h2>Modifier le projet</h2>
      <label>
        Titre:
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
      </label>
      <label>
        Tags (séparés par des virgules):
        <input
          type="text"
          value={editedTags}
          onChange={(e) => setEditedTags(e.target.value)}
        />
      </label>
      <button onClick={handleSave}>Enregistrer</button>
      <button onClick={onCancel}>Annuler</button>
    </div>
  );
}

export default EditProject;