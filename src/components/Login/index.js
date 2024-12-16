import React, { useState } from 'react';
import './login.css';
import axios from 'axios';

const loginURL = 'http://localhost:8081/public/v1/auth/login';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();

    const loginForm = {
      username: email,
      password
    };
    try {
      const response = await axios.post(loginURL, loginForm);
      localStorage.setItem('user', response.data.token);
      setEmail('');
      setPassword('');
    } catch (error) {
      setEmail('');
    }
  };
  return (
    <div className="login-container">
      <h2>Se connecter</h2>
      <form onSubmit={handleLogin}>
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
          Connexion
        </button>
      </form>
    </div>
  );
}
export default Login;
