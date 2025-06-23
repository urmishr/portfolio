export default function Footer() {
  return (
    <footer className="m-5 px-3 py-5 lg:py-7 dark:bg-dark-500 bg-light-100 shadow-light rounded-lg border border-dark-400/20 dark:border dark:border-dark-200/20 ">
      <p className="text-center text-sm md:text-lg lg:text-xl text-dark-200 font-semibold">
        © Urmish Ramani - {new Date().getFullYear()}
      </p>
    </footer>
  );
}
