export default function Button({
  children,
  onClick,
  type = 'button',
  compact = false,
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex gap-2 items-center ${
        compact
          ? 'px-2.5 py-1.5 text-sm md:text-sm lg:text-base'
          : 'p-2 text-sm md:text-base lg:text-lg md:px-4 md:py-2'
      } hover:dark:bg-dark-400 font-semibold hover:bg-light-300 border rounded-full dark:bg-dark-300 bg-light-200 border-light-400/20 dark:border-dark-200/20 cursor-pointer whitespace-nowrap dark:text-dark-100 text-light-400 hover:ring-3 hover:dark:ring-dark-200/30 hover:ring-light-400/20 transition-all duration-300`}
      {...props}
    >
      {children}
    </button>
  );
}
