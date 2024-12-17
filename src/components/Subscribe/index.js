import React, { useState } from 'react';
import './Subscribe.css';
import axios from 'axios';

//const subscribeURL = 'http://localhost:8080/public/v1/auth/subscribe';
const apiUrl = process.env.REACT_APP_API_URL;

function Subscribe() {
  const [firstName, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();

    const subscribeForm = {
      firstName,
      lastname,
      email,
      password
    };

    try {
      const response = await axios.post(`${apiUrl}/public/v1/auth/subscribe`, subscribeForm);
      console.log('User registered successfully:', response.data);
      setFirstname('');
      setLastname('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error during subscription:', error);
      setFirstname('');
      setLastname('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="login-container">
      <h2>S&inscrire</h2>
      <form onSubmit={handleSubscribe}>
        <div className="form-group">
          <label htmlFor="firstname">Prénom :</label>
          <input
            id="firstName"
            type="text"
            placeholder="Entrez votre prénom"
            value={firstName}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Nom :</label>
          <input
            id="lastname"
            type="text"
            placeholder="Entrez votre nom"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            id="email"
            type="email"
            placeholder="Entrez votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe :</label>
          <input
            id="password"
            type="password"
            placeholder="Entrez votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-login">
          S&inscrire
        </button>
      </form>
    </div>
  );
}

export default Subscribe;
