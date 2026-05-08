import { motion as Motion } from 'motion/react';

export default function Container({ children }) {
  const initial = { x: 30, opacity: 0 };
  const animate = {
    x: 0,
    opacity: 1,
  };
  const exit = { x: -30, opacity: 0 };

  return (
    <Motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      className="mx-4 my-5 max-w-7xl px-3 py-5 flex flex-col md:mx-5 md:px-5 xl:mx-auto space-y-5 dark:bg-dark-500 bg-light-100 shadow-light rounded-lg border border-dark-400/20 dark:border dark:border-dark-200/20"
    >
      {children}
    </Motion.div>
  );
}
