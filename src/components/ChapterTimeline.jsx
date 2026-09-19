import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ChapterTimeline() {
  const { t } = useLanguage();

  const chapters = [
    { year: "1998", body: t('timeline.t1998') },
    { year: "2000s", body: t('timeline.t2000s') },
    { year: "Wakad, Pune", body: t('timeline.tSecondDecade') },
    { year: "Second Gen", body: t('timeline.tGen2') },
    { year: "Present", body: t('timeline.tPresent') },
  ];

  return (
    <section
      id="27-years"
      className="practice-timeline"
      aria-label="27 Years — One Evolving Practice"
    >
      <div className="container">

        <p className="chapter-label practice-timeline__label">
          {t('timeline.label')}
        </p>

        <h2 className="serif-display serif-display--md practice-timeline__title">
          {t('timeline.h2')}<br />
          <em style={{ color: 'var(--amber-light)' }}>{t('timeline.h2Em')}</em>
        </h2>

        {/* Timeline entries */}
        <div className="practice-timeline__entries">
          <div className="practice-timeline__line" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {chapters.map((ch, i) => (
              <article
                key={i}
                className="reveal practice-timeline__entry"
              >
                <div className="practice-timeline__dot" />

                <div className="practice-timeline__year">
                  <span>{ch.year}</span>
                </div>

                <div className="practice-timeline__copy">
                  <p style={{ color: 'rgba(245,240,232,0.92)', fontSize: '0.98rem', lineHeight: 1.65 }}>
                    {ch.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

