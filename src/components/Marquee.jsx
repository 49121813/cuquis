import React from 'react';
import { useLang } from '../i18n.js';

export default function Marquee() {
  const { t } = useLang();
  const text = t('mq');
  return (
    <div style={{ background: '#EE5029', borderTop: '2px solid #4A3818', borderBottom: '2px solid #4A3818', overflow: 'hidden', padding: '13px 0' }}>
      <div style={{ display: 'flex', width: 'max-content', animation: 'cq-marquee 26s linear infinite', fontFamily: "'Bagel Fat One',cursive", fontSize: 'clamp(18px,2.4vw,30px)', color: '#EFE2D5', whiteSpace: 'nowrap' }}>
        <span style={{ paddingRight: 40 }}>{text} {text}</span>
        <span aria-hidden="true" style={{ paddingRight: 40 }}>{text} {text}</span>
      </div>
    </div>
  );
}
