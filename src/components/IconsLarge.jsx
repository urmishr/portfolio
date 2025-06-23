export default function IconsLarge() {
  return (
    <div className="flex gap-3">
      <div className="flex gap-2 items-center dark:bg-dark-300 bg-light-200 px-4 py-1.5 rounded-full border border-light-400/20 dark:border-dark-200/20 min-w-fit">
        <img
          src="./icons/mongodb.svg"
          alt="mongodb icon"
          className="lg:size-10 md:size-8"
        />
        <p className="font-semibold text-dark-200 whitespace-nowrap">
          Mongo DB
        </p>
      </div>
      <div className="flex gap-2 items-center dark:bg-dark-300 bg-light-200 px-4 py-1.5 rounded-full border border-light-400/20 dark:border-dark-200/20  min-w-fit">
        <img
          src="./icons/express-light.svg"
          alt="mongodb icon"
          className="lg:size-10 md:size-8"
        />
        <p className="font-semibold text-dark-200 whitespace-nowrap">
          Express Js
        </p>
      </div>
      <div className="flex gap-2 items-center dark:bg-dark-300 bg-light-200 px-4 py-1.5 rounded-full border border-light-400/20 dark:border-dark-200/20 min-w-fit">
        <img
          src="./icons/react.svg"
          alt="mongodb icon"
          className="lg:size-10 md:size-8"
        />
        <p className="font-semibold text-dark-200 whitespace-nowrap">React</p>
      </div>
      <div className="flex gap-2 items-center dark:bg-dark-300 bg-light-200 px-4 py-1.5 rounded-full border border-light-400/20 dark:border-dark-200/20 min-w-fit">
        <img
          src="./icons/node-js.svg"
          alt="mongodb icon"
          className="lg:size-10 md:size-8"
        />
        <p className="font-semibold text-dark-200 whitespace-nowrap">Node Js</p>
      </div>
    </div>
  );
}
