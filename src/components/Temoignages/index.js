import React from 'react';

import './temoignages.css'; // Pour styliser la page si nécessaire

const temoignages = [
  {
    name: 'Sarah',
    experience: "Grâce à cette plateforme, j'ai pu me reconvertir dans le développement web. Les mentorats m'ont vraiment soutenue dans ma transition professionnelle.",
    videoUrl: 'https://youtube.com/shorts/05gk9GIg80w?feature=shared4'
  },
  {
    name: 'Emma',
    experience: "Les formations proposées m'ont permis d'acquérir les compétences techniques nécessaires pour décrocher un emploi dans la tech.",
    videoUrl: 'https://youtube.com/shorts/05gk9GIg80w?feature=shared'
  },
  {
    name: 'Fatou',
    experience: "Le réseau de cette plateforme m'a aidée à trouver des opportunités dans le milieu du numérique. Je suis désormais développeuse front-end.",
    videoUrl: 'https://youtube.com/shorts/COa8S4TrZb0?feature=shared'
  },
  {
    name: 'Léa',
    experience: "Le mentorat m'a aidée à avoir plus confiance en mes capacités. Aujourd'hui, je travaille en tant qu'ingénieure data.",
    videoUrl: 'https://www.example.com/temoignage-lea.mp4'
  }
];

const Temoignages = () => (
    <div className="temoignages-container">
      <h1>Retours d&apos;Expérience de Nos Mentorées</h1>
      <div className="temoignages-grid">
        {temoignages.map((temoignage, index) => (
          <div key={index} className="temoignage-card">
            <h3>{temoignage.name}</h3>
            <p>{temoignage.experience}</p>
            <video controls width="100%" height="auto">
              <source src={temoignage.videoUrl} type="video/mp4" />
              <track kind="captions" src="captions_en.vtt" srcLang="en" label="English" />
            </video>
          </div>
        ))}
      </div>
    </div>);
export default Temoignages;
