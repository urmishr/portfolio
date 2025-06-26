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

import { useTheme } from '../contexts/ThemeProvider';
export default function NavBar() {
  const { pathname } = useLocation();
  const { isDark, setIsDark } = useTheme();
  return (
    <nav className="mx-4 my-5 md:m-5 px-3 py-5 z-50 backdrop-blur-md dark:bg-dark-500/50 bg-light-100/70 shadow-light rounded-lg border border-dark-400/20 dark:border dark:border-dark-200/20 sticky top-5">
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
            <a href="/urmish_resume.pdf" target="_blank" download>
              <Button>
                <HiArrowDownTray className="size-5 lg:size-7" />
                <span>Resume</span>
              </Button>
            </a>
          )}
          <button
            className="m-0 p-0 md:mx-5 cursor-pointer"
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
