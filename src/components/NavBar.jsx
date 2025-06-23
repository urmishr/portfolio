import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  HiOutlineHome,
  HiOutlineUserCircle,
  HiOutlineWindow,
  HiOutlineSun,
  HiOutlineMoon,
} from 'react-icons/hi2';
export default function NavBar() {
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
    <nav className="m-5 px-3 py-5 backdrop-blur-md dark:bg-dark-500/50 bg-light-100/40 shadow-light rounded-lg border border-dark-400/20 dark:border dark:border-dark-200/20 sticky top-5">
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
        <div>
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
  );
}
