import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = 'Le nom est requis.';
    }
    if (!formData.email) {
      errors.email = 'L\'email est requis.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'L\'email est invalide.';
    }
    if (!formData.message) {
      errors.message = 'Le message est requis.';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Simuler l'envoi du formulaire
      setIsSubmitted(true);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="contact-container">
      <h1>Contactez-nous</h1>
      {isSubmitted ? (
        <p>Merci pour votre message. Nous vous répondrons bientôt !</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom :</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={formErrors.name ? 'input-error' : ''}
            />
            {formErrors.name && <span className="error-message">{formErrors.name}</span>}
        </div>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={formErrors.email ? 'input-error' : ''}
            />
          {formErrors.email && <span className="error-message">{formErrors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={formErrors.message ? 'input-error' : ''}
          />
            {formErrors.message && <span className="error-message">{formErrors.message}</span>}
          </div>
          <button type="submit">Envoyer</button>
        </form>
      )}
    </div>
  );
}

export default Contact;
