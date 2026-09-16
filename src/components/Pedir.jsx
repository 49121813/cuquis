import React from 'react';
import { useLang } from '../i18n.js';

export default function Pedir() {
  const { t } = useLang();
  return (
    <section id="pedir" style={{ position: 'relative', padding: 'clamp(56px,8vw,120px) clamp(16px,4vw,48px)', background: '#EE5029', borderTop: '2px solid #4A3818', textAlign: 'center', overflow: 'hidden' }}>
      <img src="/img/clasica.png" alt="" style={{ position: 'absolute', left: '-4%', bottom: '-10%', width: 'clamp(120px,18vw,260px)', '--r': '16deg', animation: 'cq-float 8s ease-in-out infinite', pointerEvents: 'none' }} />
      <img src="/img/redvelvet.png" alt="" style={{ position: 'absolute', right: '-3%', top: '-8%', width: 'clamp(110px,16vw,230px)', '--r': '-12deg', animation: 'cq-float 7s ease-in-out infinite', pointerEvents: 'none' }} />
      <h2 style={{ position: 'relative', margin: '0 auto', maxWidth: '16ch', fontFamily: "'Bagel Fat One',cursive", fontWeight: 400, fontSize: 'clamp(40px,8vw,104px)', lineHeight: 0.9, color: '#EFE2D5' }}>
        {t('cta_title')}
      </h2>
      <div style={{ position: 'relative', display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
        {['https://wa.me/5491160299299', 'https://instagram.com/__cuquis', '#'].map((href, i) => (
          <a
            key={href + i}
            href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener' : undefined}
            style={{ background: '#4A3818', color: '#EFE2D5', fontWeight: 700, fontSize: 17, padding: '16px 30px', borderRadius: 999, border: '2px solid #4A3818' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#EFE2D5'; e.currentTarget.style.color = '#4A3818'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#4A3818'; e.currentTarget.style.color = '#EFE2D5'; }}
          >
            {i === 0 ? 'WhatsApp' : i === 1 ? 'Instagram DM' : t('cta_shop')}
          </a>
        ))}
      </div>
    </section>
  );
}
