import { NavLink } from 'react-router-dom';
import Paragraph from './ui/Paragraph';
import { useTheme } from '../contexts/ThemeProvider';

export default function ProjectChooser() {
  const { isDark } = useTheme();
  return (
    <div className="bg-light-300 dark:bg-dark-400 p-4 space-y-5 rounded-lg  md:mx-auto">
      <Paragraph center={true}>Select any project for more details</Paragraph>
      <div className="flex gap-4 items-center justify-center">
        <NavLink
          to={'/projects/natours'}
          className={({ isActive }) =>
            `flex gap-3 items-center hover:ring-3 hover:scale-105 transition-all duration-300 hover:ring-light-400/20 hover:dark:ring-dark-200/20 text-dark-200 ring ring-light-400/20 dark:ring-dark-200/20 dark:bg-dark-300 p-2 rounded-md ${isActive && 'text-light-400 dark:text-dark-100 font-semibold bg-light-100 dark:bg-dark-500 ring-3 ring-light-400/20 dark:ring-dark-200/20 '}`
          }
        >
          <img
            src="/icons/logo-green-round.png"
            alt="natours logo"
            className="size-5"
          />
          <span>Natours</span>
        </NavLink>
        <NavLink
          to={'/projects/the-wild-oasis'}
          className={({ isActive }) =>
            `flex gap-3  items-center hover:ring-3 hover:scale-105 transition-all duration-300 hover:ring-light-400/20 hover:dark:ring-dark-200/20 text-dark-200 whitespace-nowrap  ring ring-light-400/20 dark:ring-dark-200/20 dark:bg-dark-300 p-2 rounded-md ${isActive && 'text-light-400 dark:text-dark-100 font-semibold bg-light-100 dark:bg-dark-500 ring-3 ring-light-400/20 dark:ring-dark-200/20 hover:ring-0'}`
          }
        >
          <img
            src={`/icons/logo-${isDark ? 'dark' : 'light'}.png`}
            alt="natours logo"
            className="h-5"
          />
          <span>The Wild Oasis</span>
        </NavLink>
      </div>
    </div>
  );
}
