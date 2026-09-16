import React from 'react';
import { useLang } from '../i18n.js';
import { useReveal } from '../hooks/useReveal.js';
import { useSlowSpin } from '../hooks/useParallax.js';
import Hoverable from './Hoverable.jsx';

export default function FlavorOfMonth({ flavorOfMonth = 'Pistacho' }) {
  const { t } = useLang();
  const [revealRef, revealStyle] = useReveal();
  const spinRef = useSlowSpin();

  return (
    <section style={{ padding: 'clamp(56px,8vw,110px) clamp(16px,4vw,48px)' }}>
      <div
        ref={revealRef}
        style={{ ...revealStyle, maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(28px,5vw,64px)', alignItems: 'center' }}
      >
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', width: 'min(88%,420px)', aspectRatio: '1', borderRadius: '50%', background: '#CABCAE' }} />
          <img ref={spinRef} src="/img/pistacho.png" alt="Cuqui de pistacho" style={{ position: 'relative', width: 'min(86%,410px)' }} />
          <div
            style={{
              position: 'absolute', top: '2%', right: '4%', background: '#EE5029', color: '#EFE2D5',
              fontFamily: "'Bagel Fat One',cursive", fontSize: 'clamp(13px,1.6vw,18px)', padding: 14,
              borderRadius: '50%', aspectRatio: '1', display: 'grid', placeItems: 'center', textAlign: 'center',
              lineHeight: 1.05, animation: 'cq-pop 3.4s ease-in-out infinite',
            }}
            dangerouslySetInnerHTML={{ __html: `<span>${t('som_badge')}</span>` }}
          />
        </div>
        <div>
          <p style={{ margin: '0 0 10px', fontWeight: 700, fontSize: 13, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#6F4E13' }}>
            {t('som_kicker')}
          </p>
          <h2 style={{ margin: 0, fontFamily: "'Bagel Fat One',cursive", fontWeight: 400, fontSize: 'clamp(44px,7vw,86px)', lineHeight: 0.9, color: '#4A3818' }}>
            {flavorOfMonth}
          </h2>
          <p style={{ margin: '20px 0 0', fontSize: 'clamp(16px,1.8vw,20px)', lineHeight: 1.6, fontWeight: 500, maxWidth: '44ch', textWrap: 'pretty' }}>
            {t('som_body')}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 26 }}>
            <Hoverable
              href="https://wa.me/5491160299299" target="_blank" rel="noopener"
              style={{ background: '#4A3818', color: '#EFE2D5', fontWeight: 700, padding: '14px 26px', borderRadius: 999 }}
              hoverStyle={{ background: '#EE5029' }}
            >
              {t('som_cta')}
            </Hoverable>
            <Hoverable
              href="https://instagram.com/__cuquis" target="_blank" rel="noopener"
              style={{ border: '2px solid #4A3818', color: '#4A3818', fontWeight: 700, padding: '12px 24px', borderRadius: 999 }}
              hoverStyle={{ background: '#4A3818', color: '#EFE2D5' }}
            >
              @__cuquis
            </Hoverable>
          </div>
        </div>
      </div>
    </section>
  );
}
