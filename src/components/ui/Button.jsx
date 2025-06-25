export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex gap-2 p-2 items-center text-sm md:text-lg lg:text-xl hover:dark:bg-dark-400 font-semibold hover:bg-light-300 md:px-4 md:py-2 border rounded-full dark:bg-dark-300 bg-light-200 border-light-400/20 dark:border-dark-200/20 cursor-pointer whitespace-nowrap dark:text-dark-100 text-light-400 hover:ring-3 hover:dark:ring-dark-200/30 hover:ring-light-400/20 transition-all duration-300`}
    >
      {children}
    </button>
  );
}
