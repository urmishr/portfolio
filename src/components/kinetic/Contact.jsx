import { useRef, useState } from 'react';
import copy from 'copy-to-clipboard';
import { HiArrowRight, HiCheck } from 'react-icons/hi2';
import styles from './Contact.module.css';
import { EMAIL } from '../../data/kinetic';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef(null);

  const handleCopyEmail = () => {
    if (!copy(EMAIL)) return;
    setCopied(true);
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section className={styles.section}>
      <div data-reveal>
        <span className={styles.label}>// LET&apos;S TALK</span>
        <h2 className={styles.heading}>
          Let&apos;s work
          <br />
          together
          <span className={styles.accent}>.</span>
        </h2>
        <p className={styles.sub}>Have an idea, opportunity, or project in mind? I&apos;d be happy to hear about it.</p>
        <div className={styles.actions}>
          <button data-mag type="button" className={styles.cta} onClick={handleCopyEmail}>
            {copied ? (
              <>
                <HiCheck aria-hidden="true" className={styles.ctaIcon} />
                Email copied
              </>
            ) : (
              <>
                Contact me
                <HiArrowRight aria-hidden="true" className={styles.ctaIcon} />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
