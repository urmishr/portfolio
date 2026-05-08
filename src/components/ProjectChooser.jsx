import { NavLink, useLocation } from 'react-router-dom';
import Paragraph from './ui/Paragraph';
import { useTheme } from '../contexts/ThemeProvider';
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { HiXMark } from 'react-icons/hi2';

const projects = [
  {
    id: 'natours',
    name: 'Natours',
    logo: '/icons/logo-green-round.png',
    alt: 'natours logo',
    logoClass: 'size-5',
    path: '/projects/natours',
  },
  {
    id: 'the-wild-oasis',
    name: 'The Wild Oasis',
    logoLight: '/icons/logo-light.png',
    logoDark: '/icons/logo-dark.png',
    alt: 'the wild oasis logo',
    logoClass: 'h-5',
    path: '/projects/the-wild-oasis',
  },
];

const upcomingProjects = [
  {
    id: 'lumy',
    name: 'Lumy',
    logo: '/project_images/upcoming/lumy/lumy_logo.png',
    alt: 'lumy logo',
    path: '/projects/lumy',
  },
];

export default function ProjectChooser() {
  const { isDark } = useTheme();
  const { pathname } = useLocation();
  const currentProject = pathname.split('/')[2];
  const [isOpen, setIsOpen] = useState(false);

  // Get current project info from both arrays
  const allProjects = [...projects, ...upcomingProjects];
  const activeProject =
    allProjects.find((p) => p.id === currentProject) || projects[0];

  // Filter projects excluding current from both arrays
  const otherProjects = projects;
  // Show all upcoming projects even if current
  const visibleUpcomingProjects = upcomingProjects;

  return (
    <div
      className="relative cursor-pointer rounded-lg bg-light-300 p-2 ring ring-light-400/20 dark:bg-dark-400 dark:ring-dark-200/20 lg:p-4"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={`flex items-center justify-between gap-3`}>
        <Paragraph center={true}>
          <NavLink
            to={activeProject.path}
            className={({ isActive }) =>
              `flex gap-3 items-center whitespace-nowrap text-dark-200 dark:bg-dark-300  p-2 rounded-md ${
                isActive
                  ? 'text-light-400 dark:text-dark-100 p-2 bg-light-100 dark:bg-dark-500'
                  : ''
              }`
            }
          >
            <img
              src={
                activeProject.id === 'the-wild-oasis'
                  ? isDark
                    ? activeProject.logoDark
                    : activeProject.logoLight
                  : activeProject.logo
              }
              alt={activeProject.alt}
              className={`${activeProject.logoClass || 'size-5'} shrink-0`}
            />
            <span className="text-sm md:text-base lg:text-lg">
              {activeProject.name}
            </span>
          </NavLink>
        </Paragraph>
        {isOpen ? (
          <HiXMark className="lg:size-5" />
        ) : (
          <FaAngleDown className="lg:size-5" />
        )}
      </div>

      <div
        /* Prevent clicks inside the menu from closing it immediately via the parent onClick */
        onClick={(e) => e.stopPropagation()}
        className={`absolute right-0 top-full z-20 mt-5
w-max min-w-56 max-w-[85vw]
md:w-max md:min-w-56 lg:min-w-64
flex-col gap-3 rounded-xl bg-light-300 p-2 shadow-lg shadow-light-400/10 ring ring-light-400/20
dark:bg-dark-400 dark:shadow-dark-600/40 dark:ring-dark-200/20 lg:p-4
${isOpen ? 'flex' : 'hidden'}`}
      >
        {/* The Arrow - Hidden on mobile if the menu is wide, or kept centered */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 size-4 -translate-x-1/2 -translate-y-1/2 rotate-45 border-l border-t border-light-400/20 bg-light-300 dark:border-dark-200/20 dark:bg-dark-400"
        />

        {/* Rest of your project mapping code stays the same... */}
        {otherProjects.map((project) => (
          <NavLink
            key={project.id}
            to={project.path}
            onClick={() => setIsOpen(false)} // Close menu when a project is selected
            className={({ isActive }) =>
              `relative flex items-center gap-3 whitespace-nowrap text-dark-200 font-semibold dark:bg-dark-300 p-2 rounded-md bg-light-200 ${
                isActive
                  ? 'text-light-400 dark:text-dark-100 font-semibold bg-light-100 dark:bg-dark-500'
                  : ''
              }`
            }
          >
            <img
              src={
                project.id === 'the-wild-oasis'
                  ? isDark
                    ? project.logoDark
                    : project.logoLight
                  : project.logo
              }
              alt={project.alt}
              className={`${project.logoClass || 'size-5'} shrink-0`}
            />
            <span className="text-sm md:text-base lg:text-lg">
              {project.name}
            </span>
          </NavLink>
        ))}
        <div className="relative border-t border-light-400/10 pt-3 dark:border-dark-200/20">
          <p className="whitespace-nowrap px-2 pb-2 text-xs font-semibold uppercase tracking-wide text-dark-200/70 dark:text-grey/70">
            Upcoming Projects
          </p>
          <div className="flex flex-col gap-3">
            {visibleUpcomingProjects.map((project) => (
              <NavLink
                key={project.id}
                to={project.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 whitespace-nowrap rounded-md bg-light-200 p-2 font-semibold text-dark-200 dark:bg-dark-300 ${
                    isActive
                      ? 'text-light-400 dark:text-dark-100 bg-light-100 dark:bg-dark-500'
                      : ''
                  }`
                }
              >
                <img
                  src={project.logo}
                  alt={project.alt}
                  className="size-5 shrink-0 rounded-full object-cover"
                />
                <span className="text-sm md:text-base lg:text-lg">
                  {project.name}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
