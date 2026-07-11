import { useRef, useState } from 'react';
import copy from 'copy-to-clipboard';
import { HiCheck, HiMapPin, HiOutlineClipboardDocument, HiOutlineDocumentText } from 'react-icons/hi2';
import styles from './Hero.module.css';
import ResumePreviewModal from '../ResumePreviewModal';
import { EMAIL } from '../../data/kinetic';

const AVAILABLE_FOR_WORK = true;

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const resetTimer = useRef(null);

  const handleCopyEmail = () => {
    if (!copy(EMAIL)) return;
    setCopied(true);
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section id="sec-home" className={styles.section}>
      <div data-reveal className={styles.topRow}>
        {AVAILABLE_FOR_WORK && (
          <span className={styles.availPill}>
            <span className={styles.availDot} />
            AVAILABLE FOR WORK
          </span>
        )}
      </div>

      <div className={styles.row}>
        <div className={styles.left}>
          <div data-reveal className={`${styles.imFrom} delay-1`}>
            i&apos;m
          </div>
          <h1 data-reveal className={`${styles.h1} delay-2`}>
            Urmish
            <br />
            Ramani
            <span className={styles.accent}>.</span>
          </h1>
          <div data-reveal className={`${styles.meta} delay-3`}>
            <span className={styles.metaStrong}>Full-Stack Developer</span>
            <span className={styles.metaLocation}>
              <HiMapPin className={styles.metaLocationIcon} aria-hidden="true" focusable="false" />
              Ottawa, Canada
            </span>
          </div>
          <div data-reveal className={`${styles.actions} delay-4`}>
            <a
              data-mag
              href="/urmish_resume.pdf"
              className={styles.resumeBtn}
              onClick={(e) => {
                e.preventDefault();
                setResumeOpen(true);
              }}
            >
              <HiOutlineDocumentText className={styles.buttonIcon} aria-hidden="true" focusable="false" />
              View Résumé
            </a>
            <button data-mag type="button" className={styles.copyBtn} onClick={handleCopyEmail}>
              {copied ? (
                <span className={styles.accentText}>
                  <HiCheck className={styles.buttonIcon} aria-hidden="true" focusable="false" />
                  Copied
                </span>
              ) : (
                <>
                  <HiOutlineClipboardDocument className={styles.buttonIcon} aria-hidden="true" focusable="false" />
                  Copy email
                </>
              )}
            </button>
          </div>
        </div>

        <div data-reveal className={`${styles.right} scale-in delay-2`}>
          <div className={styles.portrait}>
            <div className={styles.portraitStripes} />
            <div className={styles.portraitFloat}>
              <div
                data-mag
                data-mag-radius="170"
                data-mag-strength="0.08"
                data-mag-max="14"
                data-mag-scale="1.065"
                data-mag-press-scale="0.965"
                className={styles.portraitCircle}
              >
                <img
                  src="/urmish.png"
                  alt="Portrait illustration of Urmish Ramani"
                  className={styles.portraitImg}
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ResumePreviewModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
