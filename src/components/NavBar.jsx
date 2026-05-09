import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  HiOutlineHome,
  HiOutlineUserCircle,
  HiOutlineWindow,
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineEye,
} from 'react-icons/hi2';
import Button from './ui/Button';

import { useTheme } from '../contexts/ThemeProvider';
import ResumePreviewModal from './ResumePreviewModal';
export default function NavBar() {
  const { pathname } = useLocation();
  const { isDark, setIsDark } = useTheme();
  const [isHidden, setIsHidden] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 767px)');

    const syncDesktopState = () => {
      if (!mobileQuery.matches) {
        setIsHidden(false);
      }

      lastScrollY.current = window.scrollY;
    };

    const handleScroll = () => {
      if (!mobileQuery.matches) return;

      const currentScrollY = Math.max(window.scrollY, 0);
      const scrollDelta = currentScrollY - lastScrollY.current;

      if (currentScrollY < 24) {
        setIsHidden(false);
      } else if (scrollDelta > 8) {
        setIsHidden(true);
      } else if (scrollDelta < -8) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    syncDesktopState();
    window.addEventListener('scroll', handleScroll, { passive: true });
    mobileQuery.addEventListener('change', syncDesktopState);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      mobileQuery.removeEventListener('change', syncDesktopState);
    };
  }, []);

  return (
    <nav
      className={`mx-4 my-5 max-w-7xl md:mx-5 px-3 py-4 xl:mx-auto z-50 backdrop-blur-md dark:bg-dark-500/50 bg-light-100/70 shadow-light rounded-lg border border-dark-400/20 dark:border dark:border-dark-200/20 sticky top-5 transition-transform duration-300 ease-out will-change-transform md:translate-y-0 ${
        isHidden ? '-translate-y-[calc(100%+2rem)]' : 'translate-y-0'
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex dark:text-dark-200 px-2 py-1.5 md:px-3 md:py-2 text-dark-200 items-center gap-1.5 font-semibold ${isActive && 'dark:text-white dark:bg-dark-300 rounded-full md:rounded-lg text-light-400 bg-grey/50'}`
            }
          >
            <HiOutlineHome className="size-6" />
            <span className="hidden md:block text-base">Home</span>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex dark:text-dark-200 px-2 py-1.5 md:px-3 md:py-2 text-dark-200 items-center gap-1.5 font-semibold ${isActive && 'dark:text-white dark:bg-dark-300 rounded-full md:rounded-lg text-light-400 bg-grey/50'}`
            }
          >
            <HiOutlineUserCircle className="size-6" />
            <span className="hidden md:block text-base">About</span>
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `flex dark:text-dark-200 px-2 py-1.5 md:px-3 md:py-2 text-dark-200 items-center gap-1.5 font-semibold ${isActive && 'dark:text-white dark:bg-dark-300 rounded-full md:rounded-lg text-light-400 bg-grey/50'}`
            }
          >
            <HiOutlineWindow className="size-6" />
            <span className="hidden md:block text-base">Projects</span>
          </NavLink>
        </div>
        <div className="flex gap-2 items-center">
          {pathname !== '/' && (
            <Button compact onClick={() => setIsResumeOpen(true)}>
              <HiOutlineEye className="size-5 lg:size-6" />
              <span>Resume</span>
            </Button>
          )}
          <button
            type="button"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="m-0 p-1 md:mx-3 cursor-pointer"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? (
              <HiOutlineSun className="size-6 text-dark-200 dark:text-dark-200 m-0 p-0" />
            ) : (
              <HiOutlineMoon className="size-6 text-dark-200 dark:text-dark-200 m-0 p-0" />
            )}
          </button>
        </div>
      </div>
      <ResumePreviewModal
        open={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </nav>
  );
}
