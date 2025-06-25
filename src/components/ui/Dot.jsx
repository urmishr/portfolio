export default function Dot({ color }) {
  return (
    <div
      className={`${color === 'green' ? 'bg-green' : 'bg-dark-200'} size-2  rounded-full lg:size-4`}
    ></div>
  );
}
