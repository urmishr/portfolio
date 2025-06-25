import Dot from './Dot';
import Tag from './Tag';

export default function Tags() {
  return (
    <div className="flex justify-between lg:mx-5 ">
      <Tag text={'Web Developer'} />
      <div className="bg-green/20 flex gap-3 items-center px-3 py-1 rounded-full lg:px-4 lg:py-2">
        <Dot color={'green'} />
        <p className="text-green font-semibold text-sm md:text-md lg:text-xl">
          Available for work
        </p>
      </div>
    </div>
  );
}
