import Button from './ui/Button';
import Dot from './ui/Dot';
import {
  HiOutlineArrowRightCircle,
  HiOutlineChevronRight,
} from 'react-icons/hi2';
import Tag from './ui/Tag';
export default function Projects() {
  return (
    <div className="dark:bg-dark-400 flex flex-col bg-light-300 p-3 md:p-5 lg:p-7 rounded-md md:rounded-lg lg:rounded-xl">
      <div className="flex justify-between mt-2">
        <Tag text={'Projects'} />
        <div>
          <Button>
            View All{' '}
            <span>
              <HiOutlineArrowRightCircle className="size-5 lg:size-8" />
            </span>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-4 mt-5">
        <div className="flex items-center justify-between  bg-light-100 dark:bg-dark-300 p-4 lg:px-6 border dark:border-dark-200/20 border-light-400/20 rounded hover:ring-4 hover:dark:ring-dark-200/30 hover:ring-light-400/20 transition-all duration-300">
          <div className="flex items-center gap-3 lg:gap-5">
            <div className="dark:bg-dark-500 h-fit bg-light-200 border dark:border-dark-200/20 border-light-400/20 rounded-full p-1 lg:p-2 ">
              <img
                src="/icons/logo-green-round.png"
                alt="natours logo"
                className="size-9"
              />
            </div>
            <div className="flex flex-col font-semibold text-sm md:text-lg lg:text-xl ">
              <p className="dark:text-dark-100 text-light-400">Natours</p>
              <p className="text-dark-200 font-normal">Tour Booking App</p>
            </div>
          </div>
          <div>
            <HiOutlineChevronRight />
          </div>
        </div>
        <div className="flex items-center justify-between  bg-light-100 dark:bg-dark-300 p-4 lg:px-6 border dark:border-dark-200/20 border-light-400/20 rounded hover:ring-4 hover:dark:ring-dark-200/30 hover:ring-light-400/20 transition-all duration-300">
          <div className="flex items-center gap-3 lg:gap-5">
            <div className="dark:bg-dark-500 h-fit bg-light-200 border dark:border-dark-200/20 border-light-400/20 rounded-full p-2 lg:p-2 ">
              <img
                src="/icons/logo-dark.png"
                alt="natours logo"
                className="size-7"
              />
            </div>
            <div className="flex flex-col font-semibold text-sm md:text-lg lg:text-xl">
              <p className="dark:text-dark-100 text-light-400">
                The Wild Oasis
              </p>
              <p className="text-dark-200 font-normal">Hotel Managment App</p>
            </div>
          </div>
          <div>
            <HiOutlineChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
}
