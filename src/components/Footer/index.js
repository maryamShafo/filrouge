import React from 'react';
import logo from '../../assets/logo.png';
import SAP from '../../assets/SAP_logo.png';
import desCodeuses from '../../assets/descodeuses.png';
import franceTravail from '../../assets/logo_france_travail.png';

import './footer.css';

const Footer = () => (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
        <img src={logo} alt="Logo du site" className="logo"/>
        </div>

        <div className="footer-info">
          <h3>Starther - Mentorat pour les femmes dans la tech</h3>
          <p>
  Nous sommes une plateforme de mentorat dédiée à l&apos;accompagnement des femmes
  dans leur parcours de reconversion professionnelle.
          </p>
          <p>
            Rejoignez-nous pour accéder à des ressources éducatives, des témoignages et plus encore.
          </p>
        </div>

        <div className="footer-partners">
          <h4>Nos Partenaires</h4>
          <div className="partners-logos">
            <img src={SAP} alt="Partner 1" />
            <img src={desCodeuses} alt="Partner 2" />
            <img src={franceTravail} alt="Partner 3" />
          </div>
        </div>

        <div className="footer-links">
          <h4>Liens Utiles</h4>
          <ul>
            <li><a href="/apropos">À propos</a></li>
            <li><a href="/privacy-policy">Politique de confidentialité</a></li>
            <li><a href="/terms">Conditions d&apos;utilisation</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Starther. Tous droits réservés.</p>
      </div>
    </footer>);
export default Footer;
