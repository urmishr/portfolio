export default function Dot({ color, size }) {
  const colorClass =
    color === 'green' ? 'bg-green' : color === 'purple' ? 'bg-purple-300' : 'bg-dark-200';

  return (
    <div
      className={`${colorClass} rounded-full ${size ? '' : 'size-2 lg:size-3'}`}
      style={
        size
          ? {
              width: `${size}px`,
              height: `${size}px`,
              minWidth: `${size}px`,
              minHeight: `${size}px`,
            }
          : undefined
      }
    />
  );
}
