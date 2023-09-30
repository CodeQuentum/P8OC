import React, { useState } from 'react';
import '../styles/ContactForm.css' 

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer les données du formulaire
    console.log(formData);
  };

  return (
    <section id='contact'>
    <div className="contact-form">
      <h2>Contactez-moi</h2>
      <p>Si vous le souhaitez, vous pouvez remplir
        ce formulaire de contact.
        Je vous repondrais dans les plus bref delais.
      </p>
      <form onSubmit={handleSubmit}>
        <div className='nom-mail'>
        <div className="form-group">
          <label htmlFor="name">Nom & prénom :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        </div>
        <div className="form-message">
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
    </section>
  );
}

export default ContactForm;
	