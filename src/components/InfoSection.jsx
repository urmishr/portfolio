import ButtonGroup from './ButtonGroup';
import Tag from './ui/Tag';
import TechStackMasonry from './ui/TechStackMasonry';

export default function InfoSection() {
  return (
    <div className="mt-5 md:mx-5 md:my-15 lg:mx-10 lg:my-14">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10 lg:gap-x-12">
        <div className="space-y-5 lg:space-y-7 min-w-0">
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
            </div>
            <div className="pt-2 md:pt-4">
              <ButtonGroup />
            </div>
          </div>
        </div>
        <div className="justify-self-end pr-3 lg:pr-0">
          <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-grey size-22 md:size-45 lg:size-60 ring-8 md:ring-12 lg:ring-18 dark:ring-dark-200/20 ring-light-300">
            <img
              src="/Image.png"
              alt="urmish's memoji"
              className="block size-22 object-contain object-center md:size-45 lg:size-60"
            />
          </div>
        </div>
        <div className="col-span-2 space-y-3">
          <Tag text="Core Stack" dotColor="purple" textClassName="text-purple-300" />
          <TechStackMasonry />
        </div>
      </div>
    </div>
  );
}
