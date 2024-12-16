import React from 'react';
import './categorie.css';

const categories = [
  {
    title: 'Reconversion dans le milieu de la tech',
    videos: [
      {
        title: 'Pourquoi se reconvertir dans la tech',
        videoUrl: 'https://www.example.com/reconversion1.mp4'
      },
      {
        title: 'Découvrez les métiers les plus demandés',
        videoUrl: 'https://www.example.com/reconversion1.mp4'
      },
      {
        title: 'Les étapes clés de la reconversion',
        videoUrl: 'https://www.example.com/reconversion2.mp4'
      }
    ]
  },
  {
    title: 'Découverte des formations requises',
    videos: [
      {
        title: 'Les meilleures formations en développement',
        videoUrl: 'https://www.example.com/formation1.mp4'
      },
      {
        title: 'Obtenir la Validation des acquis de l\'expérience',
        videoUrl: 'https://www.example.com/formation1.mp4'
      },
      {
        title: 'Comment choisir une formation adaptée',
        videoUrl: 'https://www.example.com/formation2.mp4'
      }
    ]
  },
  {
    title: 'Accompagnement à l\'insertion socio-professionnelle',
    videos: [
      {
        title: 'Réseautage et insertion professionnelle',
        videoUrl: 'https://www.example.com/insertion1.mp4'
      },
      {
        title: 'Réalisez votre bilan de compétences',
        videoUrl: 'https://www.example.com/insertion1.mp4'
      },
      {
        title: 'Les stages et emplois pour les femmes dans la tech',
        videoUrl: 'https://www.example.com/insertion2.mp4'
      }
    ]
  },
  {
    title: 'Aide au financement',
    videos: [
      {
        title: 'Trouver des financements pour se former',
        videoUrl: 'https://www.example.com/financement1.mp4'
      },
      {
        title: 'Aide et assistance familiales',
        videoUrl: 'https://www.example.com/financement1.mp4'
      },
      {
        title: 'Programmes d\'aide financière pour les femmes',
        videoUrl: 'https://www.example.com/financement2.mp4'
      }
    ]
  }
];
const Categories = () => (
    <div className="categories-container">
      <h1>Nos Services</h1>
      {categories.map((category, index) => (
        <div key={index} className="category-section">
          <h2>{category.title}</h2>
          <div className="videos-grid">
            {category.videos.map((video, idx) => (
              <div key={idx} className="video-card">
                <h3>{video.title}</h3>
                <video controls width="100%" height="auto">
                  <source src={video.videoUrl} type="video/mp4" />
                  <track kind="captions" src="captions_en.vtt" srcLang="en" label="English" />
                  Votre navigateur ne supporte pas la vidéo.
                </video>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>);
export default Categories;
