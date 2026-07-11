import styles from './Footer.module.css';
import { SOCIALS } from '../../data/kinetic';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SOCIAL_ICONS = {
  GitHub: FaGithub,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
  X: FaXTwitter,
};

export default function Footer() {
  return (
    <footer data-reveal className={`${styles.footer} fade`}>
      <span className={styles.copy}>© Urmish Ramani — {new Date().getFullYear()}</span>
      <div className={styles.socials}>
        {SOCIALS.map((social) => {
          const Icon = SOCIAL_ICONS[social.name];

          return (
            <a
              key={social.name}
              data-mag
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${social.name} profile`}
              className={styles.socialLink}
              title={social.name}
            >
              <Icon aria-hidden="true" focusable="false" />
            </a>
          );
        })}
      </div>
    </footer>
  );
}
