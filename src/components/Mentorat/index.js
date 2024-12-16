import React from 'react';
import vod1 from '../../assets/videos/vod1.mp4';
//import vod3 from '../../assets/videos/vod3.mp4';
import vod4 from '../../assets/videos/vod4.mp4';
import './mentorat.css';

const Mentorat = () => {
  const vod3Url = 'http://localhost:8081/vod3';
  return (
    <div className="mentorship-container">
      <section className="mentorship-content">
        <h1>Découvrez notre programme de mentorat</h1>
        <p>
          Notre programme de mentorat est conçu pour accompagner les femmes dans leur reconversion professionnelle et leur insertion dans le domaine de la tech.
        </p>
        <p> Découvrez comment nos mentors vous guident à chaque étape de votre parcours.</p>
      </section>

      <section className="mentorship-videos">
        <div className="video-section">
          <h2>Introduction au mentorat</h2>
          <div className="video-wrapper">
            <video width="100%" height="auto" controls>
              <source src="path_to_intro_video.mp4" type="video/mp4" />
              <track kind="captions" src="captions_en.vtt" srcLang="en" label="English" />
            </video>
          </div>
          <p>Introduction au programme de mentorat, expliquant comment nous soutenons chaque mentorée dans son parcours.</p>
        </div>

        <div className="video-section">
          <h2>Accompagnement personnalisé</h2>
          <div className="video-wrapper">
            <video width="100%" height="auto" controls>
              <source src={vod1} type="video/mp4" />
              <track kind="captions" src="captions_en.vtt" srcLang="en" label="English" />
            </video>
          </div>
          <p>Vidéo sur l&apos;accompagnement personnalisé avec nos mentors spécialisés dans différents métiers de la tech.</p>
        </div>

        <div className="video-section">
          <h2>Former pour réussir</h2>
          <div className="video-wrapper">
            <video width="100%" height="auto" controls>
              <source src={vod4} type="video/mp4" />
              <track kind="captions" src="captions_en.vtt" srcLang="en" label="English" />
            </video>
          </div>
          <p>Découvrez comment nos programmes de formation vous préparent aux métiers du numérique.</p>
        </div>

        <div className="video-section">
          <h2>Rencontre avec nos mentors</h2>
          <div className="video-wrapper">
            <video width="100%" height="auto" controls>
              <source src={vod3Url} type="video/mp4" />
              <track kind="captions" src="captions_en.vtt" srcLang="en" label="English" />
            </video>
          </div>
          <p>Rencontrez certaines de nos mentors qui vous partagent leurs conseils pour réussir votre reconversion professionnelle.</p>
        </div>
      </section>
    </div>);
};
export default Mentorat();
