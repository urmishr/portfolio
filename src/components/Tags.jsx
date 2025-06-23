import Dot from './Dot';

export default function Tags() {
  return (
    <div className="flex justify-between lg:mx-5 ">
      <div className="flex gap-2 items-center">
        <Dot />
        <p className="font-semibold text-dark-200 text-sm md:text-md lg:text-xl">
          Web Developer
        </p>
      </div>
      <div className="bg-green/20 flex gap-3 items-center px-3 py-1 rounded-full lg:px-4 lg:py-2">
        <Dot color={'green'} />
        <p className="text-green font-semibold text-sm md:text-md lg:text-xl">
          Available for work
        </p>
      </div>
    </div>
  );
}
