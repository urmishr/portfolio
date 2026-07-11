import { useEffect, useRef, useState } from 'react';
import styles from './Nav.module.css';

const SECTIONS = [
  { id: 'sec-home', label: 'Home' },
  { id: 'sec-about', label: 'About' },
  { id: 'sec-projects', label: 'Projects' },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 78,
      behavior: 'smooth',
    });
  }
}

export default function Nav() {
  const [active, setActive] = useState('sec-home');
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let raf = null;

    const updateProgress = () => {
      raf = null;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      headerRef.current?.style.setProperty('--scroll-progress', Math.min(1, Math.max(0, progress)));
    };

    const requestUpdate = () => {
      if (raf === null) raf = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (raf !== null) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  return (
    <header ref={headerRef} className={styles.header}>
      <nav className={styles.nav}>
        <div
          className={styles.brand}
          role="button"
          tabIndex={0}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          onKeyDown={(e) => {
            if (e.key === 'Enter') window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img className={styles.brandIcon} src="/icon.png" alt="" aria-hidden="true" />
          <span className={styles.brandText}>
            urmish<span className={styles.dev}>.dev</span>
          </span>
        </div>
        <div className={styles.links}>
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              className={`${styles.navButton} ${active === id ? styles.navButtonActive : ''}`}
              onClick={() => scrollToId(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
      <div className={styles.scrollTrack} aria-hidden="true">
        <div className={styles.scrollLine} />
      </div>
    </header>
  );
}
