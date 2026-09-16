import React from 'react';
import { useLang } from '../i18n.js';
import { useReveal } from '../hooks/useReveal.js';

export default function Nosotras() {
  const { t } = useLang();
  const [ref, style] = useReveal();

  return (
    <section id="nosotras" style={{ padding: 'clamp(56px,8vw,110px) clamp(16px,4vw,48px)' }}>
      <div
        ref={ref}
        style={{ ...style, maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))', gap: 'clamp(28px,5vw,64px)', alignItems: 'center' }}
      >
        <div>
          <h2 style={{ margin: 0, fontFamily: "'Bagel Fat One',cursive", fontWeight: 400, fontSize: 'clamp(40px,6vw,76px)', lineHeight: 0.9, color: '#EE5029' }}>
            {t('about_title')}
          </h2>
          <p style={{ margin: '22px 0 0', fontSize: 'clamp(16px,1.8vw,20px)', lineHeight: 1.6, fontWeight: 500, maxWidth: '52ch', textWrap: 'pretty' }}>
            {t('about_1')}
          </p>
          <p style={{ margin: '16px 0 0', fontSize: 'clamp(16px,1.8vw,20px)', lineHeight: 1.6, fontWeight: 500, maxWidth: '52ch', textWrap: 'pretty' }}>
            {t('about_2')}
          </p>
          <p style={{ margin: '24px 0 0', fontWeight: 700, fontSize: 15, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6F4E13' }}>
            {t('about_by')} Miru Manguel
          </p>
        </div>
        <div
          style={{
            position: 'relative', aspectRatio: '4/5', border: '2px solid #4A3818', borderRadius: 28,
            background: 'repeating-linear-gradient(45deg,#CABCAE 0 12px,#EFE2D5 12px 24px)', display: 'grid', placeItems: 'center',
          }}
        >
          <span style={{ fontFamily: 'ui-monospace,monospace', fontSize: 12, color: '#4A3818', background: '#EFE2D5', padding: '8px 12px', border: '2px solid #4A3818', borderRadius: 8 }}>
            foto de Miru / la cocina
          </span>
        </div>
      </div>
    </section>
  );
}
