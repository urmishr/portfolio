export default function Button({ children, darkColor, lightColor, textColor }) {
  return (
    <button
      className={`flex gap-2 p-2 items-center text-sm md:text-lg lg:text-xl hover:dark:bg-dark-400 font-semibold hover:bg-light-300 md:px-3 md:py-2 border rounded-full dark:bg-dark-300 bg-light-200 border-light-400/20 dark:border-dark-200/20 cursor-pointer whitespace-nowrap dark:text-dark-100 text-light-400`}
    >
      {children}
    </button>
  );
}
