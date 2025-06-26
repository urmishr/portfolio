import { NavLink, useLocation } from 'react-router-dom';
import Paragraph from './ui/Paragraph';
import { useTheme } from '../contexts/ThemeProvider';
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { AnimatePresence, motion } from 'motion/react';
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

export default function ProjectChooser() {
  const { isDark } = useTheme();
  const { pathname } = useLocation();
  const currentProject = pathname.split('/')[2];
  const [isOpen, setIsOpen] = useState(false);

  // Get current project info
  const activeProject =
    projects.find((p) => p.id === currentProject) || projects[0];

  // Filter projects excluding current
  const otherProjects = projects.filter((p) => p.id !== currentProject);

  return (
    <div
      className=" bg-light-300 dark:bg-dark-400 p-2 lg:p-4 rounded-lg cursor-pointer ring ring-light-400/20 dark:ring-dark-200/20"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={`flex items-center justify-between gap-3`}>
        <Paragraph center={true}>
          <NavLink
            to={activeProject.path}
            className={({ isActive }) =>
              `flex gap-3 items-center text-dark-200 dark:bg-dark-300  p-2 rounded-md ${
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
              className={activeProject.logoClass}
            />
            <span className="text-sm md:text-lg lg:text-xl">
              {activeProject.name}
            </span>
          </NavLink>
        </Paragraph>
        <FaAngleDown className={`${isOpen ? 'rotate-180' : ''} lg:size-5`} />
      </div>

      {isOpen && (
        <div className={` flex flex-col gap-3 pt-2`}>
          {otherProjects.map((project) => (
            <NavLink
              key={project.id}
              to={project.path}
              className={({ isActive }) =>
                `flex gap-3 items-center text-dark-200 font-semibold  dark:bg-dark-300 p-2 rounded-md bg-light-200 ${
                  isActive
                    ? 'text-light-400  dark:text-dark-100 font-semibold  bg-light-100 dark:bg-dark-500'
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
                className={project.logoClass}
              />
              <span className="text-sm md:text-lg lg:text-xl">
                {project.name}
              </span>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
