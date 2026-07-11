import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMagnetized, setIsMagnetized] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)');
    if (!finePointer.matches) return undefined;

    const onPointerMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setIsVisible(true);
    };

    const onPointerLeave = () => setIsVisible(false);
    const onPointerEnter = () => setIsVisible(true);
    const onMagneticCursorChange = (event) => setIsMagnetized(Boolean(event.detail?.isActive));

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('magnetic-cursor-change', onMagneticCursorChange);
    document.addEventListener('pointerleave', onPointerLeave);
    document.addEventListener('pointerenter', onPointerEnter);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('magnetic-cursor-change', onMagneticCursorChange);
      document.removeEventListener('pointerleave', onPointerLeave);
      document.removeEventListener('pointerenter', onPointerEnter);
    };
  }, []);

  return (
    <span
      className={`custom-cursor ${isVisible && !isMagnetized ? 'custom-cursor--visible' : ''}`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)` }}
    />
  );
}
