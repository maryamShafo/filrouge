import React from 'react';
//import starther from '../../assets/videos/starther.mp4';
import './apropos.css';

const Apropos = () => (
  <div className="about-container">
    <section className="about-content">
      <h1>À propos de notre plateforme de mentorat</h1>
      <p>
        Notre plateforme est dédiée à l&apos;accompagnement des femmes dans leur
        parcours de reconversion professionnelle dans le domaine de la tech.
        Grâce à nos mentors, nous offrons une formation personnalisée, des
        conseils pratiques et un soutien pour aider chaque femme à atteindre ses
        objectifs professionnels.
      </p>
      <p>
        Nous proposons également des vidéos éducatives pour découvrir les
        formations requises, des témoignages inspirants de femmes qui ont réussi
        leur reconversion, et des conseils pour l&apos;insertion
        socio-professionnelle.
      </p>
    </section>

    <section className="about-video">
      <h2>Découvrez notre mission en vidéo</h2>
      <div className="video-wrapper">
        <video width="100%" height="auto" controls>
          <source src="" type="video/mp4" />
          <track
            kind="captions"
            src="captions_en.vtt"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  </div>
);
export default Apropos;
