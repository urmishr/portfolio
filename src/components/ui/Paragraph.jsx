export default function Paragraph({ children, center, lineHeight }) {
  return (
    <p
      className={` text-sm md:text-base lg:text-lg  ${center ? 'text-center' : ' '} ${lineHeight ? `lg:leading-${lineHeight}` : ' '} font-semibold text-dark-200`}
    >
      {children}
    </p>
  );
}
