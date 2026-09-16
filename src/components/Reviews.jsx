import React from 'react';
import { useLang } from '../i18n.js';

const REVIEWS = [
  { key: 'r1', author: 'Cami · Belgrano', bg: '#fff', color: '#4A3818', authorColor: '#EE5029', rotate: '-1.5deg' },
  { key: 'r2', author: 'Nacho · Nordelta', bg: '#EE5029', color: '#EFE2D5', authorColor: '#EFE2D5', rotate: '1.5deg' },
  { key: 'r3', author: 'Flor · CABA', bg: '#fff', color: '#4A3818', authorColor: '#EE5029', rotate: '-2deg' },
  { key: 'r4', author: 'Juan · Belgrano', bg: '#CABCAE', color: '#4A3818', authorColor: '#6F4E13', rotate: '1deg' },
];

function ReviewCard({ text, author, bg, color, authorColor, rotate, hidden }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      style={{ width: 'min(78vw,340px)', background: bg, color, border: '2px solid #4A3818', borderRadius: 24, padding: 24, transform: `rotate(${rotate})` }}
    >
      <p style={{ margin: '0 0 14px', fontSize: 17, lineHeight: 1.55, fontWeight: 600 }}>{text}</p>
      <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: authorColor }}>{author}</span>
    </div>
  );
}

export default function Reviews() {
  const { t } = useLang();
  return (
    <section style={{ padding: '0 0 clamp(56px,8vw,110px)', overflow: 'hidden' }}>
      <h2 style={{ margin: '0 0 clamp(24px,3vw,40px)', padding: '0 clamp(16px,4vw,48px)', fontFamily: "'Bagel Fat One',cursive", fontWeight: 400, fontSize: 'clamp(34px,5vw,62px)', lineHeight: 0.95, color: '#4A3818' }}>
        {t('rev_title')}
      </h2>
      <div style={{ display: 'flex', width: 'max-content', gap: 20, animation: 'cq-marquee 42s linear infinite' }}>
        <div style={{ display: 'flex', gap: 20, paddingRight: 20 }}>
          {REVIEWS.map((r) => <ReviewCard key={r.key} text={t(r.key)} author={r.author} bg={r.bg} color={r.color} authorColor={r.authorColor} rotate={r.rotate} />)}
        </div>
        <div style={{ display: 'flex', gap: 20, paddingRight: 20 }}>
          {REVIEWS.map((r) => <ReviewCard key={r.key + '-dup'} text={t(r.key)} author={r.author} bg={r.bg} color={r.color} authorColor={r.authorColor} rotate={r.rotate} hidden />)}
        </div>
      </div>
    </section>
  );
}
