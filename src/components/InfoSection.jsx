import ButtonGroup from './ButtonGroup';
import Icons from './Icons';
import IconsLarge from './IconsLarge';

export default function InfoSection() {
  return (
    <div className="mt-5 md:mx-5 md:my-15 lg:mx-10 lg:my-18 flex justify-between">
      <div className="space-y-5 lg:space-y-10 w-3/4 ">
        <p className="text-light-400 dark:text-dark-100 text-2xl md:text-4xl lg:text-7xl font-bold">
          i'm
          <br /> Urmish Ramani
        </p>
        <div className="space-y-3">
          <p className="font-semibold text-dark-200 md:text-xl lg:text-2xl ">
            Based in Ottawa, Canada 🇨🇦
          </p>
          <div className="font-semibold whitespace-nowrap text-dark-200 md:text-xl lg:text-2xl  flex items-center">
            Full Stack Developer
            <span className="md:hidden flex items-center ml-2">
              | <Icons />
            </span>
          </div>
          <div className="lg:hidden mt-5">
            <ButtonGroup />
          </div>
          <div className="hidden mt-10 md:flex">
            <IconsLarge />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end lg:items-center w-1/4 min-h-fit pr-3">
        <div className=" bg-grey  size-22 md:size-45 lg:size-60 rounded-full ring-8 md:ring-12 lg:ring-18 dark:ring-dark-200/20 ring-light-300">
          <img
            src="/Image.png"
            alt="urmish's memoji"
            className="size-22 md:size-45 lg:size-60"
          />
        </div>
        <div className="hidden lg:block mt-12 dark:bg-dark-400 bg-light-200  p-5 rounded-full border dark:border-dark-200/20 border-dark-200/20">
          <ButtonGroup />
        </div>
      </div>
    </div>
  );
}
