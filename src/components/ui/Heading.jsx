const sizeClasses = {
  1: 'text-2xl md:text-3xl lg:text-5xl',
  2: 'text-lg md:text-xl lg:text-2xl',
  3: 'text-xl md:text-2xl lg:text-4xl',
};

export default function Heading({ children, size = 1, type, as }) {
  const textSizeClass = sizeClasses[size] || sizeClasses[1];
  const Component = as || (size === 1 ? 'h1' : 'h2');

  return (
    <Component
      className={`flex items-center gap-2 lg:gap-4 ${
        type === 'secondary'
          ? 'text-dark-200'
          : 'text-light-400 dark:text-dark-100'
      } ${textSizeClass} font-bold`}
    >
      {children}
    </Component>
  );
}
