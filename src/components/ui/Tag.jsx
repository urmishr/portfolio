import Dot from './Dot';

export default function Tag({ text, className = '', textClassName = '', dotColor }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Dot color={dotColor} />
      <p className={`font-semibold text-dark-200 text-sm md:text-base lg:text-lg ${textClassName}`}>
        {text}
      </p>
    </div>
  );
}
