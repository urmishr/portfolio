import ButtonGroup from './ButtonGroup';
import Icons from './Icons';
import IconsLarge from './IconsLarge';

export default function InfoSection() {
  return (
    <div className="mt-5 md:mx-5 md:my-15 lg:mx-10 lg:my-14">
      <div className="flex items-start justify-between gap-6 md:items-center lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-x-12 lg:gap-y-10">
        <div className="space-y-5 lg:space-y-7 flex-1 min-w-0">
          <p className="text-light-400 dark:text-dark-100 text-2xl md:text-3xl lg:text-5xl font-bold">
            i'm
            <br /> Urmish Ramani
          </p>
          <div className="space-y-3">
            <p className="font-semibold text-dark-200 md:text-lg lg:text-xl ">
              Based in Ottawa, Canada 🇨🇦
            </p>
            <div className="font-semibold whitespace-nowrap text-dark-200 md:text-lg lg:text-xl  flex items-center">
              Full Stack Developer
              <span className="md:hidden flex items-center ml-2">
                | <Icons />
              </span>
            </div>
            <div className="lg:hidden mt-5">
              <ButtonGroup />
            </div>
            <div className="hidden mt-10 md:flex lg:hidden">
              <IconsLarge />
            </div>
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-end lg:items-center min-h-fit pr-3 lg:pr-0">
          <div className="flex items-center justify-center overflow-hidden bg-grey size-22 md:size-45 lg:size-60 rounded-full ring-8 md:ring-12 lg:ring-18 dark:ring-dark-200/20 ring-light-300">
            <img
              src="/Image.png"
              alt="urmish's memoji"
              className="block size-22 object-contain object-center md:size-45 lg:size-60"
            />
          </div>
        </div>
        <div className="hidden lg:flex items-center">
          <IconsLarge />
        </div>
        <div className="hidden lg:flex items-center justify-center">
          <div className="hidden lg:block dark:bg-dark-400 bg-light-200 p-3 rounded-full border dark:border-dark-200/20 border-dark-200/20">
            <ButtonGroup />
          </div>
        </div>
      </div>
    </div>
  );
}
