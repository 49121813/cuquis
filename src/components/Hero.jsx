import React from 'react';
import { useLang } from '../i18n.js';
import { useDrift } from '../hooks/useParallax.js';
import Hoverable from './Hoverable.jsx';

function Floater({ src, alt, drift, style }) {
  const ref = useDrift(drift);
  return <img ref={ref} src={src} alt={alt} style={{ position: 'absolute', pointerEvents: 'none', ...style }} />;
}

export default function Hero() {
  const { t } = useLang();
  return (
    <section id="top" style={{ position: 'relative', padding: 'clamp(48px,9vw,110px) clamp(16px,4vw,48px) 0', textAlign: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <Floater src="/img/frambuesa.png" alt="" drift={0.10} style={{ left: '2%', top: '14%', width: 'clamp(90px,13vw,190px)', '--r': '-14deg', animation: 'cq-float 7s ease-in-out infinite' }} />
        <Floater src="/img/pistacho.png" alt="" drift={-0.14} style={{ right: '3%', top: '8%', width: 'clamp(80px,11vw,165px)', '--r': '12deg', animation: 'cq-float 8.5s ease-in-out infinite' }} />
        <Floater src="/img/limon.png" alt="" drift={0.18} style={{ left: '8%', bottom: '6%', width: 'clamp(70px,9vw,135px)', '--r': '20deg', animation: 'cq-float 6.2s ease-in-out infinite' }} />
        <Floater src="/img/triple.png" alt="" drift={-0.09} style={{ right: '7%', bottom: '4%', width: 'clamp(85px,11vw,160px)', '--r': '-9deg', animation: 'cq-float 9s ease-in-out infinite' }} />
      </div>
      <p style={{ position: 'relative', margin: '0 0 18px', fontWeight: 700, fontSize: 13, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#6F4E13' }}>
        {t('hero_kicker')}
      </p>
      <h1 style={{ position: 'relative', margin: 0, fontFamily: "'Bagel Fat One',cursive", fontWeight: 400, fontSize: 'clamp(76px,18vw,280px)', lineHeight: 0.82, color: '#EE5029', letterSpacing: '-0.01em' }}>
        CUQUIS
      </h1>
      <p style={{ position: 'relative', margin: '26px auto 0', maxWidth: 620, fontSize: 'clamp(17px,2vw,22px)', lineHeight: 1.5, fontWeight: 500, color: '#4A3818', textWrap: 'pretty' }}>
        {t('hero_sub')}
      </p>
      <div style={{ position: 'relative', display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 34, paddingBottom: 'clamp(56px,8vw,96px)' }}>
        <Hoverable
          href="https://wa.me/5491160299299" target="_blank" rel="noopener"
          style={{ background: '#EE5029', color: '#EFE2D5', fontWeight: 700, fontSize: 17, padding: '16px 30px', borderRadius: 999, border: '2px solid #EE5029' }}
          hoverStyle={{ background: '#4A3818', borderColor: '#4A3818' }}
        >
          {t('cta_order')}
        </Hoverable>
        <Hoverable
          href="#sabores"
          style={{ background: 'transparent', color: '#4A3818', fontWeight: 700, fontSize: 17, padding: '16px 30px', borderRadius: 999, border: '2px solid #4A3818' }}
          hoverStyle={{ background: '#4A3818', color: '#EFE2D5' }}
        >
          {t('cta_menu')}
        </Hoverable>
      </div>
    </section>
  );
}
