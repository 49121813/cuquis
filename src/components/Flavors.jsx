import React from 'react';
import { useLang } from '../i18n.js';
import { useReveal } from '../hooks/useReveal.js';
import { useTilt } from '../hooks/useTilt.js';

const FLAVORS = [
  { img: '/img/clasica.png', alt: 'Cuqui clásica', nameKey: 'f1', descKey: 'f1d' },
  { img: '/img/limon.png', alt: 'Cuqui de limón', nameKey: 'f2', descKey: 'f2d' },
  { img: '/img/frambuesa.png', alt: 'Cuqui de frambuesa', nameKey: 'f3', descKey: 'f3d' },
  { img: '/img/pistacho.png', alt: 'Cuqui de pistacho', nameKey: 'f4', descKey: 'f4d' },
  { img: '/img/triple.png', alt: 'Cuqui triple chocolate', nameKey: 'f5', descKey: 'f5d' },
  { img: '/img/redvelvet.png', alt: 'Cuqui red velvet', nameKey: 'f6', descKey: 'f6d' },
];
const COMING_SOON = [
  { caption: 'foto cuqui kinder', nameKey: 'f7', descKey: 'f7d' },
  { caption: 'foto cuqui caramelo', nameKey: 'f8', descKey: 'f8d' },
];

function FlavorCard({ index, img, alt, name, desc }) {
  const tilt = useTilt(index);
  return (
    <div
      ref={tilt.ref} onMouseEnter={tilt.onMouseEnter} onMouseLeave={tilt.onMouseLeave}
      className="cq-reveal"
      style={{ background: '#fff', border: '2px solid #4A3818', borderRadius: 26, padding: 18, textAlign: 'center', transition: 'transform 0.35s cubic-bezier(.2,.8,.2,1), box-shadow 0.35s' }}
    >
      <img src={img} alt={alt} style={{ width: '100%', display: 'block' }} />
      <h3 style={{ margin: '8px 0 4px', fontFamily: "'Bagel Fat One',cursive", fontWeight: 400, fontSize: 26, color: '#4A3818' }}>{name}</h3>
      <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: '#6F4E13' }}>{desc}</p>
    </div>
  );
}

function ComingSoonCard({ index, caption, name, desc }) {
  const tilt = useTilt(index);
  return (
    <div
      ref={tilt.ref} onMouseEnter={tilt.onMouseEnter} onMouseLeave={tilt.onMouseLeave}
      style={{ background: '#CABCAE', border: '2px solid #4A3818', borderRadius: 26, padding: 18, display: 'flex', flexDirection: 'column', transition: 'transform 0.35s cubic-bezier(.2,.8,.2,1)' }}
    >
      <div style={{ flex: 1, minHeight: 120, display: 'grid', placeItems: 'center', border: '2px dashed #6F4E13', borderRadius: 18, marginBottom: 12 }}>
        <span style={{ fontFamily: 'ui-monospace,monospace', fontSize: 11, color: '#6F4E13', textAlign: 'center', padding: 8 }}>{caption}</span>
      </div>
      <h3 style={{ margin: '0 0 4px', fontFamily: "'Bagel Fat One',cursive", fontWeight: 400, fontSize: 26, color: '#4A3818', textAlign: 'center' }}>{name}</h3>
      <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: '#6F4E13', textAlign: 'center' }}>{desc}</p>
    </div>
  );
}

export default function Flavors() {
  const { t } = useLang();
  const [revealRef, revealStyle] = useReveal();
  const [gridRef, gridRevealStyle] = useReveal();

  return (
    <section id="sabores" style={{ padding: 'clamp(40px,6vw,80px) clamp(16px,4vw,48px) clamp(56px,8vw,110px)', background: '#EFE2D5' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div ref={revealRef} style={{ ...revealStyle, display: 'flex', alignItems: 'flex-end', gap: 20, flexWrap: 'wrap', marginBottom: 'clamp(28px,4vw,52px)' }}>
          <h2 style={{ margin: 0, fontFamily: "'Bagel Fat One',cursive", fontWeight: 400, fontSize: 'clamp(40px,6vw,76px)', lineHeight: 0.9, color: '#EE5029' }}>
            {t('flavors_title')}
          </h2>
          <p style={{ margin: '0 0 8px', fontWeight: 600, fontSize: 16, color: '#6F4E13', maxWidth: '34ch' }}>
            {t('flavors_sub')}
          </p>
        </div>
        <div ref={gridRef} style={{ ...gridRevealStyle, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(230px,1fr))', gap: 'clamp(14px,2vw,24px)' }}>
          {FLAVORS.map((f, i) => (
            <FlavorCard key={f.nameKey} index={i} img={f.img} alt={f.alt} name={t(f.nameKey)} desc={t(f.descKey)} />
          ))}
          {COMING_SOON.map((f, i) => (
            <ComingSoonCard key={f.nameKey} index={FLAVORS.length + i} caption={f.caption} name={t(f.nameKey)} desc={t(f.descKey)} />
          ))}
          <a
            href="https://wa.me/5491160299299" target="_blank" rel="noopener"
            style={{ background: '#EE5029', border: '2px solid #4A3818', borderRadius: 26, padding: 26, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#EFE2D5' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#4A3818'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#EE5029'; }}
          >
            <span
              style={{ fontFamily: "'Bagel Fat One',cursive", fontSize: 30, lineHeight: 1, color: '#EFE2D5' }}
              dangerouslySetInnerHTML={{ __html: t('f9') }}
            />
            <span style={{ marginTop: 12, fontSize: 14, fontWeight: 600, color: '#EFE2D5' }}>{t('f9d')}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
