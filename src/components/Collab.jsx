import Button from './Button';

export default function Collab() {
  return (
    <div className="flex flex-col items-center gap-5 lg:gap-7">
      <p className="text-light-400 text-center mt-5 md:mt-10 dark:text-dark-100 text-2xl md:text-4xl lg:text-7xl font-bold">
        Let's Work Together.
      </p>
      <p className="text-sm md:text-lg lg:text-xl text-center font-semibold text-dark-200">
        Building seamless user experiences with visually appealing designs.
      </p>
      <Button>Contact Me</Button>
    </div>
  );
}
