import Heading from '../ui/Heading';
import Paragraph from '../ui/Paragraph';
import { SiStarship } from 'react-icons/si';
import { FaComputer, FaCode } from 'react-icons/fa6';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { TbPhotoSquareRounded } from 'react-icons/tb';
import Dot from '../ui/Dot';
import ImageCarousel from '../ImageCarousel';
import { useTheme } from '../../contexts/ThemeProvider';

export default function TheWildOasis() {
  const { isDark } = useTheme();
  const stack = [
    [
      'Backend',
      'Supabase PostgreSQL, Auth, Realtime, Storage, Edge Functions, Stripe API',
    ],
    [
      'Frontend',
      'React 19, Tailwind CSS, React Router DOM v7, React Query, React Hook Form, React Hot Toast, Recharts',
    ],
    [
      'UI',
      'styled-components, custom reusable UI elements, dark mode context, error boundaries',
    ],
  ];
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
    <div className="mt-3 overflow-hidden md:mt-5 dark:bg-dark-400 flex flex-col  justify-between bg-light-300 p-3 md:p-5 lg:p-6 rounded-md md:rounded-lg lg:rounded-xl">
      <div className="lg:mt-3 lg:p-4 space-y-5 lg:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 md:gap-4 items-center">
            <img
              src={`/icons/logo-${isDark ? 'dark' : 'light'}.png`}
              alt="natours logo"
              className="h-7 lg:h-14"
            />
            <Heading as="h1" size={3}>
              The Wild Oasis
            </Heading>
          </div>
          <div className="flex space-x-2 md:space-x-3">
            <a
              href="https://thewildoasis.urmish.site"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open The Wild Oasis demo"
              title="Demo"
              className="flex size-9 items-center justify-center rounded-full border border-light-400/20 bg-light-100 text-light-400 transition-all duration-300 hover:ring-3 hover:ring-light-400/20 dark:border-dark-200/20 dark:bg-dark-500 dark:text-dark-100 hover:dark:ring-dark-200/30 md:size-10 lg:size-11"
            >
              <HiOutlineExternalLink className="size-5 md:size-6" />
            </a>
            <a
              href="https://github.com/urmishr/the-wild-oasis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open The Wild Oasis source code"
              title="Source code"
              className="flex size-9 items-center justify-center rounded-full border border-light-400/20 bg-light-100 text-light-400 transition-all duration-300 hover:ring-3 hover:ring-light-400/20 dark:border-dark-200/20 dark:bg-dark-500 dark:text-dark-100 hover:dark:ring-dark-200/30 md:size-10 lg:size-11"
            >
              <FaCode className="size-5 md:size-6" />
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
          service and seamless guest experiences.
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
