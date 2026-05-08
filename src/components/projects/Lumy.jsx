import Heading from '../ui/Heading';
import Paragraph from '../ui/Paragraph';
import Dot from '../ui/Dot';

import { SiStarship } from 'react-icons/si';
import { FaComputer, FaCode } from 'react-icons/fa6';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { TbPhotoSquareRounded } from 'react-icons/tb';

export default function Lumy() {
  const stack = [
    ['Mobile', 'React Native, Expo, TypeScript, Expo Router'],
    ['State & Data', 'Zustand, TanStack Query, AsyncStorage'],
    [
      'UI & Design',
      'NativeWind, Tailwind CSS, Expo Linear Gradient, Blur Effects',
    ],
    ['Animations', 'React Native Reanimated, Gesture Handler'],
    ['Visuals', 'Dynamic wallpaper accent extraction, Adaptive dark themes'],
    ['Tools', 'ESLint, Prettier, Git, Figma'],
  ];

  const features = [
    'Modern mobile-first wallpaper browsing experience',
    'Dynamic accent colors extracted from wallpapers',
    'Smooth animations and gesture-based interactions',
    'Responsive masonry/grid-based wallpaper layouts',
    'Collection-based wallpaper discovery system',
    'Favorites and saved wallpaper management',
    'Adaptive dark theme with custom design system',
    'High-quality image rendering and optimization',
    'Minimal and immersive wallpaper detail pages',
    'Cross-platform support using React Native + Expo',
    'Reusable component-driven architecture',
    'Fast navigation powered by Expo Router',
  ];

  return (
    <div className="mt-3 overflow-hidden md:mt-5 dark:bg-dark-400 flex flex-col justify-between bg-light-300 p-3 md:p-5 lg:p-6 rounded-md md:rounded-lg lg:rounded-xl">
      <div className="lg:mt-3 lg:p-4 space-y-5 lg:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 md:gap-4 items-center">
            <img
              src="/project_images/upcoming/lumy/lumy_logo.png"
              alt="lumy logo"
              className="size-7 lg:size-14 rounded-full"
            />

            <div className="flex items-center gap-3">
              <Heading>Lumy</Heading>

              <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-300">
                Upcoming
              </span>
            </div>
          </div>

          <div className="flex space-x-2 md:space-x-3">
            <a
              href="#"
              aria-label="Lumy demo coming soon"
              title="Coming soon"
              className="flex size-9 items-center justify-center rounded-full border border-light-400/20 bg-light-100 text-light-400 opacity-60 transition-all duration-300 dark:border-dark-200/20 dark:bg-dark-500 dark:text-dark-100 md:size-10 lg:size-11 cursor-not-allowed"
            >
              <HiOutlineExternalLink className="size-5 md:size-6" />
            </a>

            <a
              href="#"
              aria-label="Lumy source code coming soon"
              title="Coming soon"
              className="flex size-9 items-center justify-center rounded-full border border-light-400/20 bg-light-100 text-light-400 opacity-60 transition-all duration-300 dark:border-dark-200/20 dark:bg-dark-500 dark:text-dark-100 md:size-10 lg:size-11 cursor-not-allowed"
            >
              <FaCode className="size-5 md:size-6" />
            </a>
          </div>
        </div>

        <Paragraph>
          Lumy is a modern mobile wallpaper application focused on delivering a
          clean, immersive, and visually polished browsing experience. Built
          with React Native and Expo, the project emphasizes thoughtful UI/UX
          design, adaptive theming, smooth animations, and scalable mobile
          architecture while maintaining strong cross-platform performance.
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
          <span>Preview</span>
        </Heading>

        <div className="flex items-center justify-center rounded-xl border border-dashed border-light-400/20 dark:border-dark-200/20 bg-light-100 dark:bg-dark-300 py-20">
          <p className="text-sm md:text-base text-dark-200 font-medium">
            Screenshots and live preview coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
