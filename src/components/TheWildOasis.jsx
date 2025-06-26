import Heading from './ui/Heading';
import Paragraph from './ui/Paragraph';
import { SiStarship } from 'react-icons/si';
import { FaComputer, FaCode } from 'react-icons/fa6';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { TbPhotoSquareRounded } from 'react-icons/tb';
import Dot from './ui/Dot';
import ImageCarousel from './ImageCarousel';
import { useTheme } from '../contexts/ThemeProvider';

export default function TheWildOasis() {
  const { isDark } = useTheme();
  const features = [
    'Full React 19 frontend with Supabase backend services',
    'Secure user authentication and authorization via Supabase Auth',
    'Responsive UI styled with Tailwind CSS and smooth animations',
    'Automatic Dark mode and Light mode based on system theme',
    'Interactive dashboard with booking and cabin management',
    'Backend security enforced with Supabase Row Level Security (RLS) policies',
    'Email notifications and automated workflows with Supabase Edge Functions',
    'Image storage and optimization using Supabase Storage',
    'Client-side routing with React Router DOM v7',
    'User-friendly toast notifications using React Hot Toast',
    'Data fetching and caching with React Query for optimal performance',
  ];

  return (
    <div className="mt-3 overflow-hidden md:mt-5 dark:bg-dark-400 flex flex-col  justify-between bg-light-300 p-3 md:p-5 lg:p-7 rounded-md md:rounded-lg lg:rounded-xl">
      <div className="lg:mt-3 lg:p-5 space-y-5 lg:space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 md:gap-4 items-center">
            <img
              src={`/icons/logo-${isDark ? 'dark' : 'light'}.png`}
              alt="natours logo"
              className="h-7 lg:h-14"
            />
            <Heading size={3}>The Wild Oasis</Heading>
          </div>
          <div className="flex lg:space-x-5 space-x-1 ">
            <a href="https://thewildoasis.urmish.site" target="_blank">
              <button className="flex gap-2 items-center bg-light-100 dark:bg-dark-500 w-fit p-1.5 lg:p-2.5 rounded-full border border-light-400/20 dark:border-dark-200/20">
                <HiOutlineExternalLink className="size-5 md:size-6 lg:size-8" />{' '}
                <span className="hidden md:block font-semibold lg:text-xl">
                  Demo
                </span>
              </button>
            </a>
            <a href="https://github.com/urmishr/the-wild-oasis" target="_blank">
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
          The Wild Oasis is a cabin booking and management platform built with
          React and Supabase, designed specifically for hotel staff to
          efficiently manage reservations and operations. Featuring real-time
          booking updates, secure employee authentication, and an intuitive
          dashboard, this app streamlines daily workflows and enhances
          productivity. With integrated automated notifications, and responsive
          design, The Wild Oasis empowers hotel employees to deliver exceptional
          service and seamless guest experiences. application.
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
              Supabase (PostgreSQL, Auth, Realtime, Storage, Edge Functions),
              Stripe API
            </Paragraph>
            <div className="h-[1px] bg-dark-200/20 w-full col-span-2"></div>
            <Paragraph>Frontend</Paragraph>
            <Paragraph>
              React 19, Tailwind CSS, React Router DOM v7, React Query, React
              Hook Form, React Hot Toast, Recharts
            </Paragraph>
            <div className="h-[1px] bg-dark-200/20 w-full col-span-2"></div>
            <Paragraph>UI Components</Paragraph>
            <Paragraph>
              styled-components, custom reusable UI elements, dark mode context,
              error boundaries
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
