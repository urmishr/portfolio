import Dot from './ui/Dot';
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Tag from './ui/Tag';
export default function Social() {
  return (
    <div className="mt-5 dark:bg-dark-400 flex items-center justify-between bg-light-300 p-3 md:p-5 lg:p-7 rounded-md md:rounded-lg lg:rounded-xl">
      <Tag text={'Follow Me'} />
      <div className="flex-1 mx-3 lg:mx-10 items-center hidden md:flex">
        <div className="h-[2px] bg-dark-200/30 w-full"></div>
        <div className="size-2 lg:size-4 bg-dark-200/30 rounded-full"></div>
      </div>
      <div className="flex gap-2 text-md md:text-lg lg:text-2xl">
        <a
          href="https://linkedin.com/in/urmish-ramani-25687a87"
          target="_blank"
        >
          <button className="rounded-full cursor-pointer text-light-400 dark:text-dark-200 bg-light-100 dark:bg-dark-500 p-3 hover:ring-3 hover:dark:ring-dark-200/30 hover:ring-light-400/20 transition-all duration-300">
            <FaLinkedinIn />
          </button>
        </a>
        <a href="https://github.com/urmishr" target="_blank">
          <button className="rounded-full cursor-pointer text-light-400 dark:text-dark-200 bg-light-100 dark:bg-dark-500 p-3 hover:ring-3 hover:dark:ring-dark-200/30 hover:ring-light-400/20 transition-all duration-300">
            <FaGithub />
          </button>
        </a>
        <a href="https://instagram.com/urmish.ramani" target="_blank">
          <button className="rounded-full cursor-pointer text-light-400 dark:text-dark-200 bg-light-100 dark:bg-dark-500 p-3 hover:ring-3 hover:dark:ring-dark-200/30 hover:ring-light-400/20 transition-all duration-300">
            <FaInstagram />
          </button>
        </a>
        <a href="https://x.com/urmish_ramani" target="_blank">
          <button className="rounded-full cursor-pointer text-light-400 dark:text-dark-200 bg-light-100 dark:bg-dark-500 p-3 hover:ring-3 hover:dark:ring-dark-200/30 hover:ring-light-400/20 transition-all duration-300">
            <FaXTwitter />
          </button>
        </a>
      </div>
    </div>
  );
}
