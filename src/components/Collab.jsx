import Button from './ui/Button';
import Heading from './ui/Heading';
import Paragraph from './ui/Paragraph';

export default function Collab() {
  return (
    <div className="flex flex-col items-center gap-5 lg:gap-7">
      <div className="lg:mt-8">
        <Heading>Let's Work Together.</Heading>
      </div>
      <Paragraph center={true}>
        Building seamless user experiences with visually appealing designs.
      </Paragraph>
      <a href="mailto:ramani.urmish@gmail.com?subject=Let's%20Work%20Together">
        <Button>Contact Me</Button>
      </a>
    </div>
  );
}
