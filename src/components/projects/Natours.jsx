import Heading from '../ui/Heading';
import Paragraph from '../ui/Paragraph';
import { SiStarship } from 'react-icons/si';
import { FaComputer, FaCode } from 'react-icons/fa6';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { TbPhotoSquareRounded } from 'react-icons/tb';
import Dot from '../ui/Dot';
import ImageCarousel from '../ImageCarousel';
export default function Natours() {
  const stack = [
    [
      'Backend',
      'Node.js, Express, MongoDB, Mongoose, JWT, Bcrypt, Nodemailer, Helmet, Express-rate-limit, XSS-clean',
    ],
    [
      'Frontend',
      'React 19, Tailwind CSS, React Router DOM, React Simple Star Rating, React Icons',
    ],
    ['Maps & UI', 'MapLibre GL, MapLibre React Components, Motion, Heroicons'],
    ['Payments', 'Stripe JS, React Stripe JS'],
    ['Tools', 'Vite, ESLint, Prettier, Parcel, Nodemon'],
  ];
  const features = [
    'Full stack built with MongoDB, Express, React, and Node.js',
    'Secure user authentication with JWT & bcrypt',
    'Responsive UI styled with Tailwind CSS and smooth animations',
    'Interactive maps using MapLibre GL',
    'Real-time user reviews & star ratings',
    'Stripe payment integration for bookings',
    'Backend security: Helmet, rate limiting, XSS protection, Data sanitization',
    'Email notifications via Nodemailer',
    'Image optimization with Sharp',
    'Client-side routing with React Router DOM',
    'User-friendly feedback animations',
  ];
  return (
    <div className="mt-3 overflow-hidden md:mt-5 dark:bg-dark-400 flex flex-col  justify-between bg-light-300 p-3 md:p-5 lg:p-6 rounded-md md:rounded-lg lg:rounded-xl">
      <div className="lg:mt-3 lg:p-4 space-y-5 lg:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 md:gap-4 items-center">
            <img
              src="/icons/logo-green-round.png"
              alt="natours logo"
              className="size-7 lg:size-14"
            />
            <Heading>Natours</Heading>
          </div>
          <div className="flex space-x-2 md:space-x-3">
            <a
              href="https://natours.urmish.site"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Natours demo"
              title="Demo"
              className="flex size-9 items-center justify-center rounded-full border border-light-400/20 bg-light-100 text-light-400 transition-all duration-300 hover:ring-3 hover:ring-light-400/20 dark:border-dark-200/20 dark:bg-dark-500 dark:text-dark-100 hover:dark:ring-dark-200/30 md:size-10 lg:size-11"
            >
              <HiOutlineExternalLink className="size-5 md:size-6" />
            </a>
            <a
              href="https://github.com/urmishr/natours"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Natours source code"
              title="Source code"
              className="flex size-9 items-center justify-center rounded-full border border-light-400/20 bg-light-100 text-light-400 transition-all duration-300 hover:ring-3 hover:ring-light-400/20 dark:border-dark-200/20 dark:bg-dark-500 dark:text-dark-100 hover:dark:ring-dark-200/30 md:size-10 lg:size-11"
            >
              <FaCode className="size-5 md:size-6" />
            </a>
          </div>
        </div>
        <Paragraph>
          Natours is a full-stack travel and adventure tour booking platform
          built with MongoDB, Express, React, and Node.js to deliver a
          seamless and engaging user experience. This project demonstrates a
          strong command over both frontend and backend development,
          integrating modern tools and libraries to build a performant,
          secure, and scalable web application.
        </Paragraph>
      </div>
      <div className="flex flex-col my-5 lg:flex-row mt-5 lg:mt-10 gap-5">
        <div className="space-y-5 lg:p-4 lg:w-1/2">
          <Heading size={2}>
            <SiStarship />
            <span>Key Features</span>
          </Heading>
          <ul className="grid gap-2.5 text-sm md:text-base text-dark-200">
            {features.map((feature) => (
              <li key={feature} className="flex gap-2.5 items-baseline">
                <Dot size={'6'} />
                <span className="font-medium leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-5 lg:p-4 lg:w-1/2">
          <Heading size={2}>
            <FaComputer />
            <span>Tech and libraries</span>
          </Heading>
          <div className="bg-light-100 dark:bg-dark-300 border border-light-400/20 dark:border-dark-200/20 rounded-lg lg:rounded-xl overflow-hidden">
            {stack.map(([label, value], index) => (
              <div
                key={label}
                className={`grid grid-cols-[7rem_minmax(0,1fr)] gap-3 p-3 text-sm md:text-base ${
                  index > 0
                    ? 'border-t border-light-400/10 dark:border-dark-200/20'
                    : ''
                }`}
              >
                <span className="font-bold text-light-400 dark:text-dark-100">
                  {label}
                </span>
                <span className="font-medium leading-relaxed text-dark-200">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-3 space-y-5">
        <Heading size={2}>
          <TbPhotoSquareRounded />
          <span>Photos</span>
        </Heading>
        <ImageCarousel />
      </div>
    </div>
  );
}
