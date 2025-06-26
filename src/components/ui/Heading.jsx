const sizeClasses = {
  1: 'text-2xl md:text-4xl lg:text-7xl',
  2: 'text-lg md:text-2xl lg:text-3xl',
  3: 'text-lg md:text-2xl lg:text-6xl',
  // add more sizes if needed
};

export default function Heading({ children, size = 1, type }) {
  const textSizeClass = sizeClasses[size] || sizeClasses[1];

  return (
    <p
      className={`flex items-center gap-2 lg:gap-4 ${
        type === 'secondary'
          ? 'text-dark-200'
          : 'text-light-400 dark:text-dark-100'
      } ${textSizeClass} font-bold`}
    >
      {children}
    </p>
  );
}
