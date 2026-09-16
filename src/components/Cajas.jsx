import React from 'react';
import { useLang } from '../i18n.js';
import { useReveal } from '../hooks/useReveal.js';
import Hoverable from './Hoverable.jsx';

export default function Cajas() {
  const { t } = useLang();
  const [titleRef, titleStyle] = useReveal();
  const [gridRef, gridStyle] = useReveal();

  return (
    <section id="cajas" style={{ padding: 'clamp(56px,8vw,110px) clamp(16px,4vw,48px)', background: '#EFE2D5', color: '#4A3818' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <h2
          ref={titleRef}
          style={{ ...titleStyle, margin: '0 0 clamp(26px,4vw,48px)', fontFamily: "'Bagel Fat One',cursive", fontWeight: 400, fontSize: 'clamp(40px,6vw,76px)', lineHeight: 0.9, color: '#EE5029' }}
        >
          {t('boxes_title')}
        </h2>
        <div
          ref={gridRef}
          style={{ ...gridStyle, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 2, background: '#4A3818', border: '2px solid #4A3818', borderRadius: 26, overflow: 'hidden' }}
        >
          <div style={{ background: '#EFE2D5', padding: 'clamp(22px,3vw,34px)' }}>
            <span style={{ fontFamily: "'Bagel Fat One',cursive", fontSize: 44, color: '#EE5029' }}>01</span>
            <h3 style={{ margin: '8px 0 8px', fontSize: 22, fontWeight: 700 }}>{t('b1')}</h3>
            <p style={{ margin: 0, fontSize: 15, fontWeight: 500, lineHeight: 1.55, color: '#6F4E13' }}>{t('b1d')}</p>
          </div>
          <div style={{ background: '#EFE2D5', padding: 'clamp(22px,3vw,34px)' }}>
            <span style={{ fontFamily: "'Bagel Fat One',cursive", fontSize: 44, color: '#EE5029' }}>06</span>
            <h3 style={{ margin: '8px 0 8px', fontSize: 22, fontWeight: 700 }}>{t('b2')}</h3>
            <p style={{ margin: 0, fontSize: 15, fontWeight: 500, lineHeight: 1.55, color: '#6F4E13' }}>{t('b2d')}</p>
          </div>
          <div style={{ background: '#EFE2D5', padding: 'clamp(22px,3vw,34px)' }}>
            <span style={{ fontFamily: "'Bagel Fat One',cursive", fontSize: 44, color: '#EE5029' }}>12</span>
            <h3 style={{ margin: '8px 0 8px', fontSize: 22, fontWeight: 700 }}>{t('b3')}</h3>
            <p style={{ margin: 0, fontSize: 15, fontWeight: 500, lineHeight: 1.55, color: '#6F4E13' }}>{t('b3d')}</p>
          </div>
          <div style={{ background: '#4A3818', color: '#EFE2D5', padding: 'clamp(22px,3vw,34px)' }}>
            <span style={{ fontFamily: "'Bagel Fat One',cursive", fontSize: 44, color: '#EE5029' }}>+</span>
            <h3 style={{ margin: '8px 0 8px', fontSize: 22, fontWeight: 700 }}>{t('b4')}</h3>
            <p style={{ margin: '0 0 12px', fontSize: 15, fontWeight: 500, lineHeight: 1.55, color: '#CABCAE' }}>{t('b4d')}</p>
            <Hoverable
              href="https://wa.me/5491160299299" target="_blank" rel="noopener"
              style={{ fontWeight: 700, fontSize: 15, color: '#EE5029', borderBottom: '2px solid #EE5029' }}
              hoverStyle={{ color: '#EFE2D5', borderColor: '#EFE2D5' }}
            >
              {t('b4cta')}
            </Hoverable>
          </div>
        </div>
      </div>
    </section>
  );
}
