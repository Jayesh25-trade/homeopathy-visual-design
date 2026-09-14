import React from 'react';
import { clinic } from '../data/clinicData';

export default function SiteFooter() {
  return (
    <footer
      style={{
        background: 'var(--ink)',
        color: 'rgba(245,240,232,0.4)',
        padding: '28px var(--gutter)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
      }}
    >
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.06em' }}>
        © {new Date().getFullYear()} {clinic.name} · Est. 1998 · Pune & Jalgaon
      </p>
      <a
        href={clinic.instagram}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          color: 'rgba(245,240,232,0.4)',
          letterSpacing: '0.06em',
          textDecoration: 'underline',
          textUnderlineOffset: '3px',
        }}
        aria-label="Instagram @somanikushal"
      >
        @somanikushal
      </a>
    </footer>
  );
}
