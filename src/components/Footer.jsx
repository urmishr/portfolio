export default function Footer() {
  return (
    <footer className="mx-4 my-5 max-w-7xl md:mx-5 xl:mx-auto px-3 py-5 lg:py-7 dark:bg-dark-500 bg-light-100 shadow-light rounded-lg border border-dark-400/20 dark:border dark:border-dark-200/20 ">
      <p className="text-center text-sm md:text-base lg:text-lg text-dark-200 font-semibold">
        © Urmish Ramani - {new Date().getFullYear()}
      </p>
    </footer>
  );
}
