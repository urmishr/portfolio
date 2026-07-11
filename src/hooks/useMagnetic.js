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
    const pressEase = 0.32;
    const activeScale = 1.075;
    const pressScale = 0.985;
    const positions = new WeakMap();
    const baseTransforms = new WeakMap();
    const pressHandlers = new WeakMap();
    const configs = new WeakMap();
    let pressed = null;
    let activeEl = null;
    let magneticClickTarget = null;
    let wasActive = false;

    const setCursorMagnetized = (isActive) => {
      if (wasActive === isActive) return;
      wasActive = isActive;
      window.dispatchEvent(new CustomEvent('magnetic-cursor-change', { detail: { isActive } }));
    };

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const clearPressed = () => {
      magneticClickTarget = null;
      pressed = null;
    };

    const onPointerDown = (event) => {
      const directTarget = event.target instanceof Element && event.target.closest('[data-mag]');
      if (event.button !== 0 || directTarget || !activeEl) return;
      event.preventDefault();
      magneticClickTarget = activeEl;
      pressed = activeEl;
    };

    const onPointerUp = () => {
      if (magneticClickTarget && activeEl === magneticClickTarget) {
        magneticClickTarget.click();
      }
      clearPressed();
    };

    const readNumber = (value, fallback) => {
      const parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : fallback;
    };

    mags.forEach((m) => {
      const baseTransform = window.getComputedStyle(m).transform;
      const onPress = () => {
        pressed = m;
      };
      configs.set(m, {
        radius: readNumber(m.dataset.magRadius, pullRadius),
        strength: readNumber(m.dataset.magStrength, pullStrength),
        max: readNumber(m.dataset.magMax, maxPull),
        scale: readNumber(m.dataset.magScale, activeScale),
        pressScale: readNumber(m.dataset.magPressScale, pressScale),
      });
      baseTransforms.set(m, baseTransform === 'none' ? '' : baseTransform);
      pressHandlers.set(m, onPress);
      m.addEventListener('pointerdown', onPress);
    });

    const loop = () => {
      let active = null;
      let activeDist = Infinity;

      mags.forEach((m) => {
        const config = configs.get(m);
        const r = m.getBoundingClientRect();
        const dx = mx - (r.left + r.width / 2);
        const dy = my - (r.top + r.height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < config.radius && dist < activeDist) {
          active = { el: m, dx, dy, config };
          activeDist = dist;
        }
      });
      activeEl = active?.el || null;

      mags.forEach((m) => {
        const isActive = active?.el === m;
        const config = configs.get(m);
        const current = positions.get(m) || { x: 0, y: 0, scale: 1 };

        const target = {
          x: isActive ? Math.max(-config.max, Math.min(config.max, active.dx * config.strength)) : 0,
          y: isActive ? Math.max(-config.max, Math.min(config.max, active.dy * config.strength)) : 0,
          scale: pressed === m ? config.pressScale : isActive ? config.scale : 1,
        };
        const next = {
          x: current.x + (target.x - current.x) * ease,
          y: current.y + (target.y - current.y) * ease,
          scale: current.scale + (target.scale - current.scale) * (pressed === m ? pressEase : ease),
        };

        positions.set(m, next);
        m.classList.toggle('is-magnetic-active', isActive);
        m.style.transform = `${baseTransforms.get(m)} translate(${next.x}px, ${next.y}px) scale(${next.scale})`.trim();
      });
      setCursorMagnetized(Boolean(active));

      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', clearPressed);
    window.addEventListener('blur', clearPressed);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', clearPressed);
      window.removeEventListener('blur', clearPressed);
      setCursorMagnetized(false);
      mags.forEach((m) => {
        m.classList.remove('is-magnetic-active');
        m.removeEventListener('pointerdown', pressHandlers.get(m));
        m.style.transform = '';
      });
    };
  }, [rootRef]);
}
