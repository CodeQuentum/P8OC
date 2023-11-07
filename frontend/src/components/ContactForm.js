import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ContactForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/mail/send-email', formData);
      console.log('Réponse du serveur :', response.data);
      setMessageSent(true);
      setFormData({ 
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données :', error);
    }
  };

  return (
    <section id='contact'>
      <div className="container">
        <div className="contact-form">
          <h2>Contactez-moi</h2>
          <p>Si vous le souhaitez, vous pouvez remplir
            ce formulaire de contact. Je vous répondrai dans les plus brefs délais.
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
                  className="form-control"
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
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message :</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Envoyer</button>
          </form>
          {messageSent && <p>Message envoyé</p>}
        </div>
      </div>
    </section>
  );
}

export default ContactForm;