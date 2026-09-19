import React from 'react';
import { timelineChapters } from '../data/clinicData';

export default function ChapterTimeline() {
  return (
    <section
      id="27-years"
      className="practice-timeline"
      aria-label="27 Years — One Evolving Practice"
    >
      <div className="container">

        <p className="chapter-label practice-timeline__label">
          Chapter 03 · 27 Years, One Evolving Practice
        </p>

        <h2 className="serif-display serif-display--md practice-timeline__title">
          A practice built on<br />
          <em style={{ color: 'var(--amber-light)' }}>listening first.</em>
        </h2>

        {/* Timeline entries */}
        <div className="practice-timeline__entries">

          {/* Vertical root line */}
          <div className="practice-timeline__line" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {timelineChapters.map((ch, i) => (
              <article
                key={i}
                className={`reveal practice-timeline__entry ${ch.isCoda ? 'practice-timeline__entry--coda' : ''}`}
              >
                {/* Root node dot */}
                <div className="practice-timeline__dot" />

                {/* Year */}
                <div className="practice-timeline__year">
                  <span>
                    {ch.year}
                  </span>
                </div>

                {/* Content */}
                {!ch.isCoda && (
                  <div className="practice-timeline__copy">
                    <h3>
                      {ch.heading}
                    </h3>
                    {ch.body && (
                      <p>
                        {ch.body}
                      </p>
                    )}
                  </div>
                )}

                {ch.isCoda && (
                  <div className="practice-timeline__coda">
                    <p>
                      {ch.heading}
                    </p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
