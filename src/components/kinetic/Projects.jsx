import { useEffect, useMemo, useState } from 'react';
import { HiArrowLeft, HiArrowRight, HiArrowTopRightOnSquare, HiCodeBracket } from 'react-icons/hi2';
import styles from './Projects.module.css';
import { PROJECTS } from '../../data/kinetic';

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const active = PROJECTS[activeIndex];
  const slides = useMemo(() => active.previews ?? [active.preview], [active]);

  useEffect(() => {
    setSlideIndex(0);
  }, [activeIndex]);

  const moveSlide = (direction) => {
    setSlideIndex((current) => (current + direction + slides.length) % slides.length);
  };

  const getSlideOffset = (index) => {
    const rawOffset = index - slideIndex;
    const wrappedOffset =
      rawOffset > slides.length / 2
        ? rawOffset - slides.length
        : rawOffset < -slides.length / 2
          ? rawOffset + slides.length
          : rawOffset;

    return Math.max(-2, Math.min(2, wrappedOffset));
  };

  const handleTouchEnd = (event) => {
    if (touchStart === null) return;

    const distance = touchStart - event.changedTouches[0].clientX;
    setTouchStart(null);

    if (Math.abs(distance) < 38 || slides.length < 2) return;
    moveSlide(distance > 0 ? 1 : -1);
  };

  return (
    <section id="sec-projects" className={styles.section}>
      <div data-reveal className={styles.header}>
        <h2 className={styles.heading}>Selected work</h2>
        <span className={styles.note}>// click to expand</span>
      </div>

      <div className={styles.tabs}>
        {PROJECTS.map((project, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={project.id}
              data-mag
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
            >
              {project.name}
              {project.upcoming && <span className={styles.soon}>SOON</span>}
            </button>
          );
        })}
      </div>

      <div className={styles.panel} style={{ '--active-tint': active.tint }}>
        <div className={styles.glow} />
        <div className={styles.panelHeader}>
          <div className={styles.panelTitleRow}>
            <span className={styles.projectLogo} style={{ '--logo-tint': active.tint }}>
              <img
                src={active.logo}
                alt={`${active.name} app logo`}
                className={styles.projectLogoImg}
                style={{
                  width: active.logoWidth,
                  height: active.logoHeight,
                  objectFit: active.logoFit,
                  objectPosition: active.logoPosition,
                  transform: active.logoTransform,
                }}
              />
            </span>
            <div>
              <div className={styles.nameRow}>
                <h3 className={styles.name}>{active.name}</h3>
                <span className={styles.year}>{active.year}</span>
              </div>
              <p className={styles.type}>{active.type}</p>
            </div>
          </div>
          <div className={styles.iconLinks}>
            {active.live && (
              <a
                data-mag
                href={active.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${active.name} live demo`}
                className={styles.iconLink}
              >
                <HiArrowTopRightOnSquare aria-hidden="true" />
              </a>
            )}
            {active.repo && (
              <a
                data-mag
                href={active.repo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${active.name} source code`}
                className={styles.iconLinkMono}
              >
                <HiCodeBracket aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <p className={styles.desc}>{active.desc}</p>

        <div className={styles.columns}>
          <div>
            <div className={styles.colLabel}>◈ KEY FEATURES</div>
            <div className={styles.featureList}>
              {active.features.map((feature) => (
                <div key={feature} className={styles.featureRow}>
                  <span className={styles.bullet}>▸</span>
                  <span className={styles.featureText}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className={styles.colLabel}>◈ TECH & LIBRARIES</div>
            <div className={styles.techTable}>
              {active.techRows.map((row) => (
                <div key={row.label} className={styles.techRow}>
                  <span className={styles.techLabel}>{row.label}</span>
                  <span className={styles.techValue}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.previewWrap}>
          <div className={styles.colLabel}>◈ PREVIEW</div>
          <div
            className={`${styles.carousel} ${active.previewShape === 'portrait' ? styles.carouselPortrait : ''}`}
            onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
            onTouchEnd={handleTouchEnd}
          >
            <div className={styles.stage} aria-live="polite">
              {slides.map((slide, index) => {
                const offset = getSlideOffset(index);
                const isCurrent = index === slideIndex;
                const distance = Math.abs(offset);

                return (
                  <button
                    key={slide}
                    type="button"
                    className={styles.slide}
                    data-offset={offset}
                    data-hidden={Math.abs(offset) > 1}
                    aria-label={`Show ${active.name} preview ${index + 1}`}
                    aria-current={isCurrent ? 'true' : undefined}
                    onClick={() => setSlideIndex(index)}
                    style={{
                      '--slide-offset': offset,
                      '--slide-distance': distance,
                      '--slide-depth': 5 - distance,
                    }}
                  >
                    <img src={slide} alt={`${active.name} preview ${index + 1}`} className={styles.previewImg} />
                  </button>
                );
              })}
            </div>

            {slides.length > 1 && (
              <>
                <button
                  data-mag
                  type="button"
                  className={`${styles.carouselControl} ${styles.prevControl}`}
                  onClick={() => moveSlide(-1)}
                  aria-label="Show previous preview"
                >
                  <HiArrowLeft aria-hidden="true" />
                </button>
                <button
                  data-mag
                  type="button"
                  className={`${styles.carouselControl} ${styles.nextControl}`}
                  onClick={() => moveSlide(1)}
                  aria-label="Show next preview"
                >
                  <HiArrowRight aria-hidden="true" />
                </button>
              </>
            )}
          </div>

          {slides.length > 1 && (
            <div className={styles.dots} aria-label={`${active.name} preview navigation`}>
              {slides.map((slide, index) => (
                <button
                  key={`${slide}-dot`}
                  type="button"
                  className={`${styles.dot} ${index === slideIndex ? styles.dotActive : ''}`}
                  onClick={() => setSlideIndex(index)}
                  aria-label={`Show preview ${index + 1}`}
                  aria-current={index === slideIndex ? 'true' : undefined}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
