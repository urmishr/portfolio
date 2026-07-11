import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <p className={styles.code}>404</p>
        <h1 className={styles.heading}>Page not found.</h1>
        <p className={styles.sub}>The page you&apos;re looking for doesn&apos;t exist or may have moved.</p>
        <Link to="/" className={styles.cta}>
          ← Back home
        </Link>
      </div>
    </div>
  );
}
