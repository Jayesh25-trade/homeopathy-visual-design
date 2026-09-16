import { useEffect, useRef, useState } from 'react';
import healthVideo from '../assets/videos/health-explained.mp4.asset.json';
import healthPoster from '../assets/videos/health-explained-poster.jpg.asset.json';
import patientVideo from '../assets/videos/patient-story.mp4.asset.json';
import patientPoster from '../assets/videos/patient-story-poster.jpg.asset.json';
import clinicVideo from '../assets/videos/clinic-story.mp4.asset.json';
import clinicPoster from '../assets/videos/clinic-story-poster.jpg.asset.json';
import heelVideo from '../assets/videos/heel-pain.mp4.asset.json';
import heelPoster from '../assets/videos/heel-pain-poster.jpg.asset.json';
import eczemaVideo from '../assets/videos/eczema-care.mp4.asset.json';
import eczemaPoster from '../assets/videos/eczema-care-poster.jpg.asset.json';
import migraineVideo from '../assets/videos/migraine-care.mp4.asset.json';
import migrainePoster from '../assets/videos/migraine-care-poster.jpg.asset.json';

const stories = [
  { title: 'Understanding your health', eyebrow: 'Doctor explains', video: healthVideo.url, poster: healthPoster.url },
  { title: 'A patient’s experience', eyebrow: 'Patient story', video: patientVideo.url, poster: patientPoster.url },
  { title: 'Inside the clinic', eyebrow: 'Care journey', video: clinicVideo.url, poster: clinicPoster.url },
  { title: 'Heel pain explained', eyebrow: 'Health guide', video: heelVideo.url, poster: heelPoster.url },
  { title: 'Eczema and skin care', eyebrow: 'Health guide', video: eczemaVideo.url, poster: eczemaPoster.url },
  { title: 'Migraine and homoeopathy', eyebrow: 'Health guide', video: migraineVideo.url, poster: migrainePoster.url },
];

export default function ChapterStories() {
  const [active, setActive] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (active === null) return undefined;
    const onKey = event => event.key === 'Escape' && setActive(null);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);

  const close = () => {
    videoRef.current?.pause();
    setActive(null);
  };

  return (
    <section id="stories" className="stories-section section-pad" aria-labelledby="stories-title">
      <div className="container">
        <div className="stories-heading reveal">
          <div>
            <p className="chapter-label">From the clinic</p>
            <h2 id="stories-title" className="serif-display serif-display--lg">
              Care, explained<br /><em>in Dr Somani’s own words.</em>
            </h2>
          </div>
          <a href="https://www.instagram.com/somanikushal/" target="_blank" rel="noopener noreferrer" className="stories-instagram">
            Follow @somanikushal <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="stories-rail" aria-label="Clinic videos">
          {stories.map((story, index) => (
            <article className="story-card reveal" key={story.title}>
              <button className="story-card__media" onClick={() => setActive(index)} aria-label={`Play ${story.title}`}>
                <img src={story.poster} alt="" width="720" height="1280" loading="lazy" />
                <span className="story-card__shade" />
                <span className="story-card__number">{String(index + 1).padStart(2, '0')}</span>
                <span className="story-card__play" aria-hidden="true">▶</span>
                <span className="story-card__copy">
                  <small>{story.eyebrow}</small>
                  <strong>{story.title}</strong>
                </span>
              </button>
            </article>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="video-modal" role="dialog" aria-modal="true" aria-label={stories[active].title} onMouseDown={event => event.target === event.currentTarget && close()}>
          <div className="video-modal__frame">
            <button className="video-modal__close" onClick={close} aria-label="Close video">×</button>
            <video ref={videoRef} src={stories[active].video} poster={stories[active].poster} controls autoPlay playsInline preload="metadata" />
            <div className="video-modal__caption">
              <small>{stories[active].eyebrow}</small>
              <strong>{stories[active].title}</strong>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}