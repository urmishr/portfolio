export default function IconsLarge() {
  return (
    <div className="flex flex-nowrap gap-2 lg:gap-3">
      <div className="flex gap-1.5 items-center dark:bg-dark-300 bg-light-200 px-3 py-1.5 rounded-full border border-light-400/20 dark:border-dark-200/20 min-w-fit">
        <img
          src="./icons/mongodb.svg"
          alt="mongodb icon"
          className="md:size-6 lg:size-8"
        />
        <p className="text-sm lg:text-base font-semibold text-dark-200 whitespace-nowrap">
          Mongo DB
        </p>
      </div>
      <div className="flex gap-1.5 items-center dark:bg-dark-300 bg-light-200 px-3 py-1.5 rounded-full border border-light-400/20 dark:border-dark-200/20 min-w-fit">
        <img
          src="./icons/express-light.svg"
          alt="mongodb icon"
          className="md:size-6 lg:size-8"
        />
        <p className="text-sm lg:text-base font-semibold text-dark-200 whitespace-nowrap">
          Express Js
        </p>
      </div>
      <div className="flex gap-1.5 items-center dark:bg-dark-300 bg-light-200 px-3 py-1.5 rounded-full border border-light-400/20 dark:border-dark-200/20 min-w-fit">
        <img
          src="./icons/react.svg"
          alt="mongodb icon"
          className="md:size-6 lg:size-8"
        />
        <p className="text-sm lg:text-base font-semibold text-dark-200 whitespace-nowrap">
          React
        </p>
      </div>
      <div className="flex gap-1.5 items-center dark:bg-dark-300 bg-light-200 px-3 py-1.5 rounded-full border border-light-400/20 dark:border-dark-200/20 min-w-fit">
        <img
          src="./icons/node-js.svg"
          alt="mongodb icon"
          className="md:size-6 lg:size-8"
        />
        <p className="text-sm lg:text-base font-semibold text-dark-200 whitespace-nowrap">
          Node Js
        </p>
      </div>
    </div>
  );
}
