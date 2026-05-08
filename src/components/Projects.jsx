import Button from './ui/Button';
import {
  HiOutlineArrowRightCircle,
  HiOutlineChevronRight,
} from 'react-icons/hi2';
import Tag from './ui/Tag';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeProvider';
export default function Projects() {
  const { isDark } = useTheme();

  return (
    <div className="dark:bg-dark-400 flex flex-col bg-light-300 p-3 md:p-5 lg:p-6 rounded-md md:rounded-lg lg:rounded-xl">
      <div className="flex items-start justify-between gap-4 mt-2">
        <Tag text={'Projects'} />
        <div>
          <NavLink to={'/projects'}>
            <Button compact>
              View All{' '}
              <span>
                <HiOutlineArrowRightCircle className="size-5 lg:size-6" />
              </span>
            </Button>
          </NavLink>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-4 mt-5">
        <NavLink
          to={'/projects/natours'}
          className="flex items-center justify-between  bg-light-100 dark:bg-dark-300 p-4 lg:px-6 border dark:border-dark-200/20 border-light-400/20 rounded hover:ring-4 hover:dark:ring-dark-200/30 hover:ring-light-400/20 transition-all duration-300"
        >
          <div className="flex items-center gap-3 lg:gap-5">
            <div className="dark:bg-dark-500 h-fit bg-light-200 border dark:border-dark-200/20 border-light-400/20 rounded-full p-1 lg:p-2 ">
              <img
                src="/icons/logo-green-round.png"
                alt="natours logo"
                className="size-9"
              />
            </div>
            <div className="flex flex-col gap-1 font-semibold text-sm leading-tight md:text-base lg:text-lg">
              <p className="dark:text-dark-100 text-light-400">Natours</p>
              <p className="text-dark-200 font-normal">Tour Booking App</p>
            </div>
          </div>
          <div>
            <HiOutlineChevronRight />
          </div>
        </NavLink>
        <NavLink
          to={'/projects/the-wild-oasis'}
          className="flex items-center justify-between  bg-light-100 dark:bg-dark-300 p-4 lg:px-6 border dark:border-dark-200/20 border-light-400/20 rounded hover:ring-4 hover:dark:ring-dark-200/30 hover:ring-light-400/20 transition-all duration-300"
        >
          <div className="flex items-center gap-3 lg:gap-5">
            <div className="dark:bg-dark-500 h-fit bg-light-200 border dark:border-dark-200/20 border-light-400/20 rounded-full p-2 lg:p-2 ">
              <img
                src={`/icons/logo-${isDark ? 'dark' : 'light'}.png`}
                alt="natours logo"
                className="size-6"
              />
            </div>
            <div className="flex flex-col gap-1 font-semibold text-sm leading-tight md:text-base lg:text-lg">
              <p className="dark:text-dark-100 text-light-400">
                The Wild Oasis
              </p>
              <p className="text-dark-200 font-normal">Hotel Management App</p>
            </div>
          </div>
          <div>
            <HiOutlineChevronRight />
          </div>
        </NavLink>
        <NavLink
          to={'/projects/lumy'}
          className="flex items-center justify-between  bg-light-100 dark:bg-dark-300 p-4 lg:px-6 border dark:border-dark-200/20 border-light-400/20 rounded hover:ring-4 hover:dark:ring-dark-200/30 hover:ring-light-400/20 transition-all duration-300"
        >
          <div className="flex items-center gap-3 lg:gap-5">
            <div className="dark:bg-dark-500 h-fit bg-light-200 border dark:border-dark-200/20 border-light-400/20 rounded-full p-2 lg:p-2 ">
              <img
                src="/project_images/upcoming/lumy/lumy_logo.png"
                alt="lumy logo"
                className="size-6 rounded-full"
              />
            </div>
            <div className="flex flex-col gap-1 font-semibold text-sm leading-tight md:text-base lg:text-lg">
              <div className="flex items-center gap-2">
                <p className="dark:text-dark-100 text-light-400">Lumy</p>
                <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-purple-300">
                  Upcoming
                </span>
              </div>
              <p className="text-dark-200 font-normal">
                A premium wallpaper app
              </p>
            </div>
          </div>
          <div>
            <HiOutlineChevronRight />
          </div>
        </NavLink>
      </div>
    </div>
  );
}
