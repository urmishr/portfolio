export default function Dot({ color, size }) {
  return (
    <div
      className={`${color === 'green' ? 'bg-green' : 'bg-dark-200'} ${!size && 'size-2 lg:size-4'} rounded-full `}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        minWidth: `${size}px`,
        minHeight: `${size}px`,
      }}
    ></div>
  );
}
