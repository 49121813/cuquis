import { useRef } from 'react';

export function useTilt(index) {
  const ref = useRef(null);
  const dir = index % 2 ? 1 : -1;

  const onMouseEnter = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `translateY(-10px) rotate(${dir * 2}deg)`;
    el.style.boxShadow = '10px 12px 0 #4A3818';
  };
  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'none';
    el.style.boxShadow = 'none';
  };

  return { ref, onMouseEnter, onMouseLeave };
}
