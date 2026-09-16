import React from 'react';
import { useLang } from '../i18n.js';
import Hoverable from './Hoverable.jsx';

export default function Header() {
  const { t, lang, toggle } = useLang();

  return (
    <header
      style={{
        position: 'sticky', top: 0, zIndex: 40, display: 'flex', alignItems: 'center', gap: 24,
        padding: '14px clamp(16px,4vw,48px)', background: 'rgba(239,226,213,0.88)',
        backdropFilter: 'blur(10px)', borderBottom: '2px solid #4A3818',
      }}
    >
      <a href="#top" style={{ fontFamily: "'Bagel Fat One',cursive", fontSize: 26, color: '#EE5029', letterSpacing: '0.02em' }}>
        CUQUIS
      </a>
      <nav style={{ display: 'flex', gap: 22, marginLeft: 'auto', flexWrap: 'wrap', fontWeight: 600, fontSize: 15 }}>
        <Hoverable href="#sabores" style={{ color: '#4A3818' }} hoverStyle={{ color: '#EE5029' }}>{t('nav_flavors')}</Hoverable>
        <Hoverable href="#cajas" style={{ color: '#4A3818' }} hoverStyle={{ color: '#EE5029' }}>{t('nav_boxes')}</Hoverable>
        <Hoverable href="#nosotras" style={{ color: '#4A3818' }} hoverStyle={{ color: '#EE5029' }}>{t('nav_about')}</Hoverable>
        <Hoverable href="#pedir" style={{ color: '#4A3818' }} hoverStyle={{ color: '#EE5029' }}>{t('nav_order')}</Hoverable>
      </nav>
      <Hoverable
        as="button"
        onClick={toggle}
        style={{
          border: '2px solid #4A3818', background: 'transparent', color: '#4A3818',
          fontFamily: "'Quicksand',sans-serif", fontWeight: 700, fontSize: 13,
          padding: '7px 12px', borderRadius: 999, cursor: 'pointer',
        }}
        hoverStyle={{ background: '#4A3818', color: '#EFE2D5' }}
      >
        {lang === 'es' ? 'EN' : 'ES'}
      </Hoverable>
      <Hoverable
        href="https://wa.me/5491160299299" target="_blank" rel="noopener"
        style={{ background: '#EE5029', color: '#EFE2D5', fontWeight: 700, fontSize: 14, padding: '11px 20px', borderRadius: 999, whiteSpace: 'nowrap' }}
        hoverStyle={{ background: '#4A3818' }}
      >
        {t('cta_wa')}
      </Hoverable>
    </header>
  );
}
