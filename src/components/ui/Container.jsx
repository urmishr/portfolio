export default function Container({ children }) {
  return (
    <section className="mx-4 my-5 md:m-5 px-3 py-5 flex flex-col md:px-5 space-y-5 dark:bg-dark-500 bg-light-100 shadow-light rounded-lg border border-dark-400/20 dark:border dark:border-dark-200/20">
      {children}
    </section>
  );
}
