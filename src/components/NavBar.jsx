import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  HiOutlineHome,
  HiOutlineUserCircle,
  HiOutlineWindow,
  HiOutlineSun,
  HiOutlineMoon,
  HiArrowDownTray,
} from 'react-icons/hi2';
import Button from './ui/Button';
import { Toaster } from 'react-hot-toast';
export default function NavBar() {
  const { pathname } = useLocation();

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        return storedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: isDark
            ? {
                zIndex: 50,
                backdropFilter: 'blur(12px)',
                backgroundColor: 'rgba(32, 32, 32, 0.5)', // dark bg
                borderRadius: '2rem',
                boxShadow: '0 4px 24px 0 rgba(0,0,0,0.15)',
                border: '1px solid rgba(158, 158, 158, 0.2)',
                padding: '1rem',
                color: '#F5F5F5',
                fontWeight: '700',
              }
            : {
                zIndex: 50,
                backdropFilter: 'blur(12px)',
                backgroundColor: 'rgba(255, 255, 255, 0.7)', // light bg
                borderRadius: '2rem',
                boxShadow: '0 4px 24px 5px rgba(0,0,0,0.05)',
                border: '1px solid rgba(0, 0, 0, 0.2)',
                padding: '1rem',
                color: '#22223b',
                fontWeight: '700',
              },
        }}
      />
      <nav className="mx-4 my-5 md:m-5 px-3 py-5 z-50 backdrop-blur-md dark:bg-dark-500/50 bg-light-100/40 shadow-light rounded-lg border border-dark-400/20 dark:border dark:border-dark-200/20 sticky top-5">
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex dark:text-dark-200 p-2 text-dark-200 items-center gap-2 font-semibold ${isActive && 'dark:text-white dark:bg-dark-300 rounded-full md:rounded-lg   text-light-400 bg-grey/50'}`
              }
            >
              <HiOutlineHome className="size-7" />
              <span className="hidden md:block text-lg">Home</span>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex dark:text-dark-200 p-2 text-dark-200 items-center gap-2 font-semibold ${isActive && ' dark:text-white dark:bg-dark-300 rounded-full md:rounded-lg text-light-400 bg-grey/50 '}`
              }
            >
              <HiOutlineUserCircle className="size-7" />
              <span className="hidden md:block text-lg">About</span>
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `flex dark:text-dark-200 p-2 text-dark-200 items-center gap-2 font-semibold ${isActive && 'dark:text-white dark:bg-dark-300 rounded-full md:rounded-lg  text-light-400 bg-grey/50'}`
              }
            >
              <HiOutlineWindow className="size-7" />
              <span className="hidden md:block text-lg">Projects</span>
            </NavLink>
          </div>
          <div className="flex gap-3">
            {pathname !== '/' && (
              <a href="urmish_resume.pdf" target="_blank" download>
                <Button>
                  <HiArrowDownTray className="size-5 lg:size-7" />
                  <span>Resume</span>
                </Button>
              </a>
            )}
            <button
              className="m-0 p-0 cursor-pointer"
              onClick={() => setIsDark(!isDark)}
            >
              {isDark ? (
                <HiOutlineSun className="size-7 text-dark-200 dark:text-dark-200 m-0 p-0" />
              ) : (
                <HiOutlineMoon className="size-7 text-dark-200 dark:text-dark-200 m-0 p-0" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
