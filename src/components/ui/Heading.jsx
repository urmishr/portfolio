export default function Heading({ children, size, type }) {
  return (
    <p
      className={`flex items-center gap-2 lg:gap-4 ${type === 'secondary' ? 'text-dark-200' : 'text-light-400 dark:text-dark-100'} ${size === 2 ? `${`text-lg md:text-2xl lg:text-3xl`}` : 'text-2xl md:text-4xl lg:text-7xl'} font-bold`}
    >
      {children}
    </p>
  );
}
