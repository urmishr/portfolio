import { motion } from 'motion/react';

export default function Container({ children }) {
  const initial = { x: 30, opacity: 0 };
  const animate = {
    x: 0,
    opacity: 1,
  };
  const exit = { x: -30, opacity: 0 };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      className="mx-4 my-5 md:m-5 px-3 py-5 flex flex-col md:px-5 space-y-5 dark:bg-dark-500 bg-light-100 shadow-light rounded-lg border border-dark-400/20 dark:border dark:border-dark-200/20"
    >
      {children}
    </motion.div>
  );
}
