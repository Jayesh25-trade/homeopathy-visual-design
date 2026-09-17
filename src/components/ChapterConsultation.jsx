import React, { useState } from 'react';
import { consultationSteps, locations } from '../data/clinicData';
import BeforeYouCall from './BeforeYouCall';

export default function ChapterConsultation({ onOpenBooking }) {
  const [activeLocation, setActiveLocation] = useState(0);
  const loc = locations[activeLocation];

  return (
    <section id="consultation" className="journey" aria-label="How consultation works">
      <div className="journey__image" aria-hidden="true" />
      <div className="container journey__inner">
        <header className="journey__header reveal">
          <p className="chapter-label">How care begins</p>
          <h2 className="serif-display serif-display--md">One path.<br /><em>Four careful steps.</em></h2>
          <p>A clear, unhurried process—from your first message to thoughtful follow-up.</p>
        </header>

        <ol className="journey__steps">
          {consultationSteps.map((step, index) => (
            <li className="journey__step reveal" key={step.n}>
              <span className="journey__number">{step.n}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
              {index < consultationSteps.length - 1 && <span className="journey__connector" aria-hidden="true" />}
            </li>
          ))}
        </ol>

        <div className="journey__booking reveal">
          <div className="journey__locations" role="tablist" aria-label="Choose clinic location">
            {locations.map((item, index) => (
              <button key={item.id} role="tab" aria-selected={index === activeLocation} onClick={() => setActiveLocation(index)}>
                {item.city}
              </button>
            ))}
          </div>
          <div className="journey__location-detail">
            <div>
              <p className="chapter-label">Selected location</p>
              <h3>{loc.city}</h3>
              <p>{loc.address}</p>
              <a className="journey__phone" href={loc.phoneHref}>{loc.phone}</a>
            </div>
            <div className="journey__actions">
              <button type="button" onClick={() => onOpenBooking?.()} className="btn btn--primary">Request Consultation</button>
              {loc.mapsUrl && <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline">Directions</a>}
            </div>
          </div>
          <BeforeYouCall />
        </div>
      </div>
    </section>
  );
}