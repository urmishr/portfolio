export default function Heading({ children }) {
  return (
    <p className="text-light-400 dark:text-dark-100 text-2xl md:text-4xl lg:text-7xl font-bold">
      {children}
    </p>
  );
}
