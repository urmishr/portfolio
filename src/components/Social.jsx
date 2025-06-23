import Dot from './Dot';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
export default function Social() {
  return (
    <div className="mt-5 dark:bg-dark-400 flex items-center justify-between bg-light-300 p-3 md:p-5 lg:p-7 rounded-md md:rounded-lg lg:rounded-xl">
      <div className="flex gap-2 items-center">
        <Dot />
        <p className="text-dark-200 font-semibold text-sm md:text-lg lg:text-xl">
          Follow Me
        </p>
      </div>
      <div className="flex-1 mx-3 lg:mx-10 items-center hidden md:flex">
        <div className="h-[2px] bg-dark-200/50 w-full"></div>
        <div className="size-2 lg:size-4 bg-dark-200/50 rounded-full"></div>
      </div>
      <div className="flex gap-2 text-md md:text-lg lg:text-2xl">
        <button className="rounded-full cursor-pointer text-light-400 dark:text-dark-200 bg-light-100 dark:bg-dark-500 p-3">
          <FaLinkedinIn />
        </button>
        <button className="rounded-full cursor-pointer text-light-400 dark:text-dark-200 bg-light-100 dark:bg-dark-500 p-3">
          <FaInstagram />
        </button>
        <button className="rounded-full cursor-pointer text-light-400 dark:text-dark-200 bg-light-100 dark:bg-dark-500 p-3">
          <FaXTwitter />
        </button>
      </div>
    </div>
  );
}
