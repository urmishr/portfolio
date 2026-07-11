import styles from './About.module.css';
import { FACTS } from '../../data/kinetic';

export default function About() {
  return (
    <section id="sec-about" className={styles.section}>
      <div data-reveal className={styles.label}>
        <span>// ABOUT ME</span>
      </div>
      <div className={styles.grid}>
        <div data-reveal>
          <h2 className={styles.heading}>
            I turn ideas into <span className={styles.accent}>real products.</span>
          </h2>
          <p className={styles.paragraph}>
            I&apos;m a full-stack developer based in Ottawa, Canada, focused on building modern web and mobile
            applications that are scalable, user-focused, and visually polished — turning ideas into real products
            through clean architecture and thoughtful design.
          </p>
          <p className={styles.paragraphMuted}>
            My work spans responsive frontends, backend services, and full-stack apps in modern JavaScript. I care
            about performance, usability, and maintainable code — products that feel smooth and intuitive to use.
          </p>
        </div>
        <div data-reveal className={`${styles.facts} delay-1`}>
          {FACTS.map((fact) => (
            <div key={fact.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{fact.icon}</span>
                <span className={styles.cardTitle}>{fact.title}</span>
              </div>
              <p className={styles.cardBody}>{fact.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
