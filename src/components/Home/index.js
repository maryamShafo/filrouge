import React from 'react';
import './home.css';

const Home = () => (
    <div className="home-container">
      <h1>Bienvenue sur la plateforme de mentorat</h1>
      <p>Découvrez des vidéos inspirantes pour débuter votre carrière dans la tech.</p>

      <div className="video-gallery">
        <div className="video-item">
          <video controls>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            <track kind="captions" src="captions_en.vtt" srcLang="en" label="English" />
          </video>
          <p>Vidéo 1: Témoignage d&apos;une mentorée</p>
        </div>

        <div className="video-item">
          <video controls>
            <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
            <track kind="captions" src="captions_en.vtt" srcLang="en" label="English" />
          </video>
          <p>Vidéo 2: Comment débuter une carrière dans la tech</p>
        </div>

        <div className="video-item">
          <video controls>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            <track kind="captions" src="captions_en.vtt" srcLang="en" label="English" />
          </video>
          <p>Vidéo 3: Parcours d&apos;une mentorée</p>
        </div>

        <div className="video-item">
          <video controls>
            <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
            <track kind="captions" src="captions_en.vtt" srcLang="en" label="English" />
          </video>
          <p>Vidéo 4: Recommandations pour les débutants</p>
        </div>
      </div>
    </div>);
export default Home;
