import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { login } = useAuth(); 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Tentative de connexion...');
      const response = await axios.post('http://localhost:4000/api/auth/login', {
        email,
        password,
      });

      console.log('Réponse du serveur :', response.data);

      const { userId, token, role } = response.data;

      login({ userId, token, role });

      setError('');

      console.log('Redirection vers /dashboard...');
      navigate('/dashboard');
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      setError('Identifiants incorrects. Veuillez réessayer.');
    }
  };

  return (
    <div className='login-content'>
      <h2>LOGIN</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className='logItem'>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className='logItem'>
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;