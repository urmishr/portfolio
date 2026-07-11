import { useEffect } from 'react';

export default function useMagnetic(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia('(pointer: coarse)').matches) return undefined;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let raf = null;
    const mags = Array.from(root.querySelectorAll('[data-mag]'));
    const pullRadius = 72;
    const pullStrength = 0.14;
    const maxPull = 6;
    const ease = 0.14;
    const positions = new WeakMap();

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const loop = () => {
      let active = null;
      let activeDist = pullRadius;

      mags.forEach((m) => {
        const r = m.getBoundingClientRect();
        const dx = mx - (r.left + r.width / 2);
        const dy = my - (r.top + r.height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < activeDist) {
          active = { el: m, dx, dy };
          activeDist = dist;
        }
      });

      mags.forEach((m) => {
        const current = positions.get(m) || { x: 0, y: 0 };
        if (active?.el !== m) {
          positions.set(m, { x: 0, y: 0 });
          m.style.transform = 'translate(0,0)';
          return;
        }

        const target = {
          x: Math.max(-maxPull, Math.min(maxPull, active.dx * pullStrength)),
          y: Math.max(-maxPull, Math.min(maxPull, active.dy * pullStrength)),
        };
        const next = {
          x: current.x + (target.x - current.x) * ease,
          y: current.y + (target.y - current.y) * ease,
        };

        positions.set(m, next);
        m.style.transform = `translate(${next.x}px, ${next.y}px)`;
      });

      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
    };
  }, [rootRef]);
}
