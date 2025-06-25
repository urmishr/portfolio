import Dot from './Dot';

export default function Tag({ text }) {
  return (
    <div className="flex gap-2 items-center">
      <Dot />
      <p className="text-dark-200 font-semibold md:text-lg lg:text-xl">
        {text}
      </p>
    </div>
  );
}
