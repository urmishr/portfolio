import useEmblaCarousel from 'embla-carousel-react';

import { useCallback, useEffect, useState } from 'react';
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from 'react-icons/fa';
import { IoDesktopOutline } from 'react-icons/io5';
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2';
import { useLocation } from 'react-router-dom';
export default function ImageCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const { pathname } = useLocation();
  const currentProject = pathname.split('/')[2];

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Setup event listeners and mobile view detection
  useEffect(() => {
    setIsMobileView(window.innerWidth < 768);

    if (emblaApi) {
      emblaApi.on('select', onSelect);
      onSelect(); // set initial selected index
    }

    return () => {
      if (emblaApi) emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Number of slides
  const slideCount = currentProject === 'natours' ? 9 : 12;

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="space-y-5">
      <div className="bg-dark-200/20 rounded-lg flex flex-col  items-center dark:bg-dark-300 border border-light-400/20 dark:border-dark-200/20 overflow-hidden p-3 ">
        <div className="w-full p-3" ref={emblaRef}>
          <div className="flex space-x-5">
            {currentProject === 'the-wild-oasis'
              ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => (
                  <div
                    key={number}
                    className="flex-grow-0 flex-shrink-0 basis-[70%] md:basis-[40%]  rounded overflow-hidden"
                  >
                    <img
                      src={`/project_images/the-wild-oasis/TWO-${number}.jpg`}
                      alt={`the wild oasis image ${number}`}
                      className=" dark:opacity-85"
                    />
                  </div>
                ))
              : [1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) =>
                  isMobileView ? (
                    <div
                      key={number}
                      className="flex-grow-0 flex-shrink-0 basis-[70%] md:basis-[40%] lg:basis-[20%] rounded overflow-hidden"
                    >
                      <img
                        src={`/project_images/natours/natours_m${number}.jpg`}
                        alt={`natours image ${number}`}
                        className="max-h-[500px] object-contain dark:opacity-85"
                      />
                    </div>
                  ) : (
                    <div
                      key={number}
                      className="flex-grow-0 flex-shrink-0 basis-[80%] lg:basis-[40%] rounded overflow-hidden"
                    >
                      <img
                        src={`/project_images/natours/natours${number}.jpg`}
                        alt={`natours image ${number}`}
                      />
                    </div>
                  ),
                )}
          </div>
        </div>
        <div className="flex space-x-2 my-2">
          {[...Array(slideCount)].map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-colors cursor-pointer ${currentProject === 'natours' ? 'hover:bg-green/70' : 'hover:bg-indigo-400/50'} ${
                selectedIndex === index
                  ? currentProject === 'natours'
                    ? 'bg-green'
                    : 'bg-indigo-400'
                  : 'bg-light-400/20 dark:bg-dark-200/20'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="lg:space-x-5 space-x-3 bg-light-100 dark:bg-dark-500 w-fit p-1.5 lg:p-2 rounded-full">
          <button
            onClick={scrollPrev}
            className="bg-light-200 transition-colors duration-100 active:bg-white active:dark:bg-dark-400 dark:bg-dark-300 rounded-full p-2 border border-light-400/20 dark:border-dark-200/20"
          >
            <FaRegArrowAltCircleLeft className="size-5 lg:size-8" />
          </button>
          <button
            onClick={scrollNext}
            className="bg-light-200 transition-colors duration-100  active:bg-white active:dark:bg-dark-400 dark:bg-dark-300 rounded-full p-2 border border-light-400/20 dark:border-dark-200/20"
          >
            <FaRegArrowAltCircleRight className="size-5 lg:size-8" />
          </button>
        </div>

        {currentProject === 'natours' && (
          <div className="lg:space-x-5 space-x-3 bg-light-100 dark:bg-dark-500 w-fit p-1.5 lg:p-2 rounded-full">
            <button
              onClick={() => setIsMobileView(true)}
              className={`${isMobileView ? 'bg-light-200 dark:bg-dark-300 border border-light-400/20 dark:border-dark-200/20' : ''} rounded-full p-2 `}
            >
              <HiMiniDevicePhoneMobile
                className={`${!isMobileView && 'text-dark-200'} size-5 lg:size-8`}
              />
            </button>
            <button
              onClick={() => setIsMobileView(false)}
              className={`${!isMobileView ? 'bg-light-200 dark:bg-dark-300 border border-light-400/20 dark:border-dark-200/20' : ''} rounded-full p-2 `}
            >
              <IoDesktopOutline
                className={`${isMobileView && 'text-dark-200'} size-5 lg:size-8`}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
