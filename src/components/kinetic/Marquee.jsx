import styles from './Marquee.module.css';
import { TECHS } from '../../data/kinetic';

function Track() {
  return (
    <span className={styles.group}>
      {TECHS.map((tech) => (
        <span key={tech} className={styles.item}>
          {tech}
          &nbsp;&nbsp;✦&nbsp;&nbsp;
        </span>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div data-reveal className={`${styles.wrap} fade`}>
      <div className={styles.track}>
        <span className={styles.loop}>
          <Track />
          <Track />
          <Track />
        </span>
        <span className={styles.loop} aria-hidden="true">
          <Track />
          <Track />
          <Track />
        </span>
      </div>
    </div>
  );
}
