import { useEffect, useRef } from 'react';

export default function useSpotlight() {
  const spotRef = useRef(null);

  useEffect(() => {
    const spot = spotRef.current;
    if (!spot || window.matchMedia('(pointer: coarse)').matches) return undefined;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let cx = mx;
    let cy = my;
    let raf = null;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      spot.style.opacity = '1';
    };

    const loop = () => {
      cx += (mx - cx) * 0.09;
      cy += (my - cy) * 0.09;
      spot.style.transform = `translate(${cx}px, ${cy}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return spotRef;
}
