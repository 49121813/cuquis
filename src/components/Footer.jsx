import React from 'react';
import { useLang } from '../i18n.js';
import Hoverable from './Hoverable.jsx';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer style={{ background: '#4A3818', color: '#EFE2D5', padding: 'clamp(40px,6vw,72px) clamp(16px,4vw,48px) 28px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 32, alignItems: 'start' }}>
        <div>
          <p style={{ margin: 0, fontFamily: "'Bagel Fat One',cursive", fontSize: 'clamp(40px,7vw,72px)', lineHeight: 0.85, color: '#EE5029' }}>CUQUIS</p>
          <p style={{ margin: '12px 0 0', fontSize: 15, fontWeight: 600, color: '#CABCAE' }}>{t('foot_tag')}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#CABCAE' }}>{t('foot_where')}</span>
          <span style={{ fontSize: 16, fontWeight: 600 }}>CABA · Belgrano</span>
          <span style={{ fontSize: 16, fontWeight: 600 }}>Nordelta</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#CABCAE' }}>{t('foot_contact')}</span>
          <Hoverable href="https://wa.me/5491160299299" target="_blank" rel="noopener" style={{ fontSize: 16, fontWeight: 600, color: '#EFE2D5' }} hoverStyle={{ color: '#EE5029' }}>
            +54 9 11 6029-9299
          </Hoverable>
          <Hoverable href="https://instagram.com/__cuquis" target="_blank" rel="noopener" style={{ fontSize: 16, fontWeight: 600, color: '#EFE2D5' }} hoverStyle={{ color: '#EE5029' }}>
            @__cuquis
          </Hoverable>
        </div>
      </div>
      <p style={{ maxWidth: 1180, margin: '36px auto 0', paddingTop: 18, borderTop: '1px solid rgba(239,226,213,0.25)', fontSize: 13, fontWeight: 500, color: '#CABCAE' }}>
        © 2026 Cuquis
      </p>
    </footer>
  );
}
