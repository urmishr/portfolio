import Container from '../components/ui/Container';
import Social from '../components/Social';
import Collab from '../components/Collab';
import Heading from '../components/ui/Heading';
import Paragraph from '../components/ui/Paragraph';
import Tag from '../components/ui/Tag';
export default function About() {
  return (
    <Container>
      <Tag text={'About Me'} />
      <div className="flex flex-col md:flex-row md:items-start justify-between md:p-5">
        <div className=" md:w-1/2 lg:w-3/4">
          <div className="my-3 lg:my-5">
            <Heading>It's Me Urmish</Heading>
          </div>
          <div>
            <Paragraph lineHeight={'1.5'}>
              I’m Urmish Ramani skilled MERN stack developer. Currently residing
              in Surat, Gujarat, India. i have a passion for building dynamic
              and responsive web applications. With expertise in MongoDB,
              Express.js, React, and Node.js, I combine strong technical
              knowledge with creative problem-solving to deliver efficient and
              scalable solutions. Dedicated to continuous learning and
              innovation, I am committed to crafting seamless user experiences
              and writing clean, maintainable code. Whether working on front-end
              interfaces or back-end services, I bring a collaborative spirit
              and attention to detail to every project.
            </Paragraph>
          </div>
        </div>
        <div className="pt-10 md:pt-5 md:w-[40vw] lg:w-1/2 lg:ml-3 flex justify-center">
          <div className="bg-light-300 dark:bg-dark-400 rounded-md lg:rounded-xl p-6 w-fit">
            <img
              src="urmish.png"
              alt={`urmish's image`}
              className="drop-shadow-xl dark:drop-shadow-dark-500/0 dark:opacity-80 max-h-[400px]"
            />
          </div>
        </div>
      </div>
      <div className="space-y-4 md:p-3">
        <Heading>More About Me</Heading>
        <Paragraph>
          I hold a B.Sc. in Information Technology from Auro University, Surat,
          India, and a Postgraduate Diploma in Computer Programming from
          Algonquin College, Ottawa, Canada. As a passionate web developer
          specializing in the MERN stack, I am dedicated to creating innovative
          and efficient web applications. I actively keep up with the latest
          technologies and trends to continually enhance my skills.
          <br />
          <br />
          Outside of work, I enjoy driving, exploring nature, and traveling to
          new places, which helps me stay inspired and refreshed. I believe in
          maintaining a healthy balance between work and personal life, as it
          fuels my creativity and motivation. Embracing continuous learning and
          curiosity, I strive to bring fresh perspectives and enthusiasm to
          every project I undertake.
        </Paragraph>
      </div>
      <Collab />
      <Social />
    </Container>
  );
}
