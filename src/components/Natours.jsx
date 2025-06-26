import Heading from './ui/Heading';
import Paragraph from './ui/Paragraph';
import { SiStarship } from 'react-icons/si';
import { FaComputer, FaCode } from 'react-icons/fa6';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { TbPhotoSquareRounded } from 'react-icons/tb';
import Dot from './ui/Dot';
import ImageCarousel from './ImageCarousel';
export default function Natours() {
  const features = [
    'Full MERN stack: MongoDB, Express, React, Node.js',
    'Secure user authentication with JWT & bcrypt',
    'Responsive UI styled with Tailwind CSS and smooth animations',
    'Interactive maps using MapLibre GL',
    'Real-time user reviews & star ratings',
    'Stripe payment integration for bookings',
    'Backend security: Helmet, rate limiting, XSS protection, Data sanitization',
    'Email notifications via Nodemailer',
    'Image optimization with Sharp',
    'Client-side routing with React Router DOM',
    'User-friendly toast notifications with React Hot Toast',
  ];
  return (
    <div className="mt-3 overflow-hidden md:mt-5 dark:bg-dark-400 flex flex-col  justify-between bg-light-300 p-3 md:p-5 lg:p-7 rounded-md md:rounded-lg lg:rounded-xl">
      <div className="lg:mt-3 lg:p-5 space-y-5 lg:space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 md:gap-4 items-center">
            <img
              src="/icons/logo-green-round.png"
              alt="natours logo"
              className="size-7 lg:size-14"
            />
            <Heading>Natours</Heading>
          </div>
          <div className="flex lg:space-x-5 space-x-2 ">
            <a href="https://natours.urmish.site" target="_blank">
              <button className="flex gap-2 items-center bg-light-100 dark:bg-dark-500 w-fit p-1.5 lg:p-2.5 rounded-full border border-light-400/20 dark:border-dark-200/20">
                <HiOutlineExternalLink className="size-5 md:size-6 lg:size-8" />{' '}
                <span className="hidden md:block font-semibold lg:text-xl">
                  Demo
                </span>
              </button>
            </a>
            <a href="https://github.com/urmishr/natours" target="_blank">
              <button className="flex gap-2 items-center bg-light-100 dark:bg-dark-500 w-fit p-1.5 lg:p-2.5 rounded-full border border-light-400/20 dark:border-dark-200/20">
                <FaCode className="size-5 md:size-6 lg:size-8" />
                <span className="hidden md:block font-semibold lg:text-xl">
                  Source Code
                </span>
              </button>
            </a>
          </div>
        </div>
        <Paragraph>
          Natours is a full-stack MERN (MongoDB, Express, React, Node.js) travel
          and adventure tour booking platform built to deliver a seamless and
          engaging user experience. This project demonstrates a strong command
          over both frontend and backend development, integrating modern tools
          and libraries to build a performant, secure, and scalable web
          application.
        </Paragraph>
      </div>
      <div className="flex flex-col my-5 lg:flex-row mt-5 lg:mt-15 space-y-5">
        <div className="space-y-5 lg:p-5 lg:w-1/2">
          <Heading size={2}>
            <SiStarship />
            <span>Key Features</span>
          </Heading>
          <div>
            <ul className="text-dark-200 font-semibold  md:px-5 lg:space-y-4">
              <div className="flex flex-col space-y-2.5">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-2 items-baseline">
                    <Dot size={'8'} />
                    <Paragraph>{feature}</Paragraph>
                  </div>
                ))}
              </div>
            </ul>
          </div>
        </div>
        <div className="space-y-5 lg:p-5 lg:w-1/2">
          <Heading size={2}>
            <FaComputer />
            <span>Tech and libraries</span>
          </Heading>
          <div className="bg-light-100 dark:bg-dark-300 border border-light-400/20 dark:border-dark-200/20 p-3 lg:p-5 grid grid-cols-2 gap-5 rounded-lg lg:rounded-xl">
            <Paragraph>Backend</Paragraph>
            <Paragraph>
              Node.js, Express, MongoDB, Mongoose, JWT, Bcrypt, Nodemailer,
              Helmet, Express-rate-limit, XSS-clean
            </Paragraph>
            <div className="h-[1px] bg-dark-200/20 w-full col-span-2"></div>
            <Paragraph>Frontend</Paragraph>
            <Paragraph>
              React 19, Tailwind CSS, React Router DOM, React Hot Toast, React
              Simple Star Rating, React Icons
            </Paragraph>
            <div className="h-[1px] bg-dark-200/20 w-full col-span-2"></div>
            <Paragraph>Maps & UI</Paragraph>
            <Paragraph>
              MapLibre GL, MapLibre React Components, Motion (Animations),
              Heroicons
            </Paragraph>
            <div className="h-[1px] bg-dark-200/20 w-full col-span-2"></div>
            <Paragraph>Payments</Paragraph>
            <Paragraph>Stripe JS, React Stripe JS</Paragraph>
            <div className="h-[1px] bg-dark-200/20 w-full col-span-2"></div>
            <Paragraph>Tools</Paragraph>
            <Paragraph>
              Vite, ESLint, Prettier, Parcel (for backend assets), Nodemon
            </Paragraph>
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
