import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from 'react-icons/fa';
import { IoDesktopOutline } from 'react-icons/io5';
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2';
import { useLocation } from 'react-router-dom';
import { EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function ImageCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const [portraitGroupSize, setPortraitGroupSize] = useState(1);
  const { pathname } = useLocation();
  const currentProject = pathname.split('/')[2];
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      setPortraitGroupSize(width >= 1024 ? 3 : width >= 768 ? 2 : 1);
    };

    setIsMobileView(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = useMemo(() => {
    if (currentProject === 'the-wild-oasis') {
      return Array.from({ length: 12 }, (_, index) => {
        const number = index + 1;

        return {
          src: `/project_images/the-wild-oasis/TWO-${number}.jpg`,
          alt: `the wild oasis image ${number}`,
          className: 'w-full dark:opacity-85',
        };
      });
    }

    return Array.from({ length: 9 }, (_, index) => {
      const number = index + 1;
      const suffix = isMobileView ? `_m${number}` : number;

      return {
        src: `/project_images/natours/natours${suffix}.jpg`,
        alt: `natours image ${number}`,
        className: `w-full object-contain dark:opacity-85 ${
          isMobileView ? 'max-h-[500px]' : ''
        }`,
      };
    });
  }, [currentProject, isMobileView]);

  const carouselSlides = useMemo(() => {
    if (currentProject !== 'natours' || !isMobileView) {
      return slides.map((slide) => ({
        key: slide.src,
        images: [slide],
      }));
    }

    return Array.from(
      { length: Math.ceil(slides.length / portraitGroupSize) },
      (_, index) => {
        const images = slides.slice(
          index * portraitGroupSize,
          index * portraitGroupSize + portraitGroupSize,
        );

        return {
          key: images.map((image) => image.src).join('-'),
          images,
        };
      },
    );
  }, [currentProject, isMobileView, portraitGroupSize, slides]);

  const carouselSlideCount = carouselSlides.length;

  const showSlide = useCallback(
    (nextIndex) => {
      if (
        !swiperRef.current ||
        !carouselSlides.length ||
        nextIndex === selectedIndex
      ) {
        return;
      }

      swiperRef.current.slideTo(nextIndex);
    },
    [carouselSlides.length, selectedIndex],
  );

  const scrollPrev = useCallback(() => {
    showSlide((selectedIndex - 1 + carouselSlideCount) % carouselSlideCount);
  }, [carouselSlideCount, selectedIndex, showSlide]);

  const scrollNext = useCallback(() => {
    showSlide((selectedIndex + 1) % carouselSlideCount);
  }, [carouselSlideCount, selectedIndex, showSlide]);

  useEffect(() => {
    setSelectedIndex(0);
    swiperRef.current?.slideTo(0, 0);
  }, [carouselSlides]);

  const getImageWidthClass = (imageCount) => {
    if (imageCount >= 3) return 'max-w-[30%]';
    if (imageCount === 2) return 'max-w-[44%]';

    return '';
  };

  return (
    <div className="space-y-5">
      <div className="bg-dark-200/20 rounded-lg flex flex-col items-center dark:bg-dark-300 border border-light-400/20 dark:border-dark-200/20 overflow-hidden p-2 md:p-3">
        <div className="relative w-full overflow-hidden p-1 md:p-3">
          <Swiper
            key={`${currentProject}-${isMobileView ? 'mobile' : 'desktop'}-${portraitGroupSize}`}
            modules={[EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={500}
            autoHeight
            allowTouchMove
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setSelectedIndex(swiper.activeIndex)}
            className="mx-auto w-full max-w-4xl overflow-hidden rounded"
          >
            {carouselSlides.map((slide) => (
              <SwiperSlide
                key={slide.key}
                className="!flex items-center justify-center"
              >
                <div className="flex w-full items-center justify-center gap-3 md:gap-5">
                  {slide.images.map((imageConfig) => (
                    <div
                      key={imageConfig.src}
                      className={`image-carousel-clip isolate transform-gpu ${
                        slide.images.length > 1
                          ? getImageWidthClass(slide.images.length)
                          : 'w-full'
                      }`}
                    >
                      <img
                        src={imageConfig.src}
                        alt={imageConfig.alt}
                        className={`${imageConfig.className} block`}
                      />
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex space-x-2 py-2">
          {[...Array(carouselSlideCount)].map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => showSlide(index)}
              className={`h-2 rounded-full transition-all cursor-pointer lg:h-3 ${
                selectedIndex === index
                  ? currentProject === 'natours'
                    ? 'w-5 bg-green shadow-[0_1px_4px_rgba(0,0,0,0.35)] lg:w-7'
                    : 'w-5 bg-indigo-400 shadow-[0_1px_4px_rgba(0,0,0,0.35)] lg:w-7'
                  : currentProject === 'natours'
                    ? 'w-2 bg-light-400/20 hover:bg-green/80 dark:bg-dark-200/20 lg:w-3'
                    : 'w-2 bg-light-400/20 hover:bg-indigo-300 dark:bg-dark-200/20 lg:w-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          {currentProject === 'natours' && (
            <div className="flex w-fit items-center gap-3 rounded-full bg-light-100 p-1.5 dark:bg-dark-500 lg:gap-5 lg:p-2">
              <button
                type="button"
                onClick={() => setIsMobileView(true)}
                aria-label="Show mobile screenshots"
                className={`${isMobileView ? 'border border-light-400/20 bg-light-200 dark:border-dark-200/20 dark:bg-dark-300' : ''} rounded-full p-2 transition-colors duration-100 active:bg-white active:dark:bg-dark-400`}
              >
                <HiMiniDevicePhoneMobile
                  className={`${!isMobileView && 'text-dark-200'} size-5 lg:size-8`}
                />
              </button>
              <button
                type="button"
                onClick={() => setIsMobileView(false)}
                aria-label="Show desktop screenshots"
                className={`${!isMobileView ? 'border border-light-400/20 bg-light-200 dark:border-dark-200/20 dark:bg-dark-300' : ''} rounded-full p-2 transition-colors duration-100 active:bg-white active:dark:bg-dark-400`}
              >
                <IoDesktopOutline
                  className={`${isMobileView && 'text-dark-200'} size-5 lg:size-8`}
                />
              </button>
            </div>
          )}
        </div>
        <div className="flex w-fit items-center gap-3 rounded-full bg-light-100 p-1.5 dark:bg-dark-500 lg:gap-5 lg:p-2">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Show previous image"
            className="rounded-full border border-light-400/20 bg-light-200 p-2 transition-colors duration-100 active:bg-white active:dark:bg-dark-400 dark:border-dark-200/20 dark:bg-dark-300"
          >
            <FaRegArrowAltCircleLeft className="size-5 lg:size-8" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Show next image"
            className="rounded-full border border-light-400/20 bg-light-200 p-2 transition-colors duration-100 active:bg-white active:dark:bg-dark-400 dark:border-dark-200/20 dark:bg-dark-300"
          >
            <FaRegArrowAltCircleRight className="size-5 lg:size-8" />
          </button>
        </div>
      </div>
    </div>
  );
}
