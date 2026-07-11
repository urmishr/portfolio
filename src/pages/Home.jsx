import { useEffect, useRef } from 'react';
import Nav from '../components/kinetic/Nav';
import Hero from '../components/kinetic/Hero';
import Marquee from '../components/kinetic/Marquee';
import About from '../components/kinetic/About';
import Projects from '../components/kinetic/Projects';
import Contact from '../components/kinetic/Contact';
import Footer from '../components/kinetic/Footer';
import useSpotlight from '../hooks/useSpotlight';
import useMagnetic from '../hooks/useMagnetic';
import useReveal from '../hooks/useReveal';
import styles from './Home.module.css';

export default function Home() {
  const rootRef = useRef(null);
  const spotRef = useSpotlight();
  useMagnetic(rootRef);
  useReveal(rootRef);

  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    requestAnimationFrame(() => {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 78, behavior: 'smooth' });
    });
  }, []);

  return (
    <div ref={rootRef} className={styles.root}>
      <div ref={spotRef} className={styles.spotlight} />
      <Nav />
      <main className={styles.main}>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
