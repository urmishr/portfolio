import Container from '../components/ui/Container';
import Social from '../components/Social';
import Collab from '../components/Collab';
import Heading from '../components/ui/Heading';
import Paragraph from '../components/ui/Paragraph';
import Tag from '../components/ui/Tag';
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineCodeBracketSquare,
  HiOutlineRocketLaunch,
} from 'react-icons/hi2';
export default function About() {
  const sections = [
    {
      icon: HiOutlineCodeBracketSquare,
      title: 'What I build',
      text: 'I build responsive web applications that balance thoughtful user experiences with clean, maintainable code across frontend interfaces and backend services.',
    },
    {
      icon: HiOutlineBriefcase,
      title: 'How I work',
      text: 'I focus on building modern full-stack applications with clean architecture, strong attention to detail, and smooth user experiences.',
    },
    {
      icon: HiOutlineAcademicCap,
      title: 'Education',
      text: 'I hold a B.Sc. in Information Technology from Auro University in Surat, India, and a Postgraduate Diploma in Computer Programming from Algonquin College in Ottawa, Canada.',
    },
    {
      icon: HiOutlineRocketLaunch,
      title: 'Outside work',
      text: 'Outside of development, I enjoy exploring new technology, tinkering with hardware and automation projects, and I’ve always had a strong passion for motorsports — becoming a racing driver would probably be my dream outside of tech.',
    },
  ];

  return (
    <Container>
      <Tag text={'About Me'} />
      <div className="flex flex-col md:flex-row md:items-start justify-between md:p-5">
        <div className=" md:w-1/2 lg:w-3/4">
          <div className="my-3 lg:my-5">
            <Heading>I'm Urmish</Heading>
          </div>
          <div>
            <Paragraph lineHeight={'1.5'}>
              I’m a full-stack developer based in Ottawa, Canada, focused on
              building modern web and mobile applications that are scalable,
              user-focused, and visually polished. I enjoy turning ideas into
              real products through clean architecture, thoughtful design, and
              practical problem-solving.
              <br></br>
              <br></br>
              My experience includes developing responsive frontend interfaces,
              backend services, and full-stack applications using modern
              JavaScript technologies. I care about performance, usability, and
              maintainable code, with a strong focus on creating products that
              feel smooth and intuitive to use.
              <br></br>
              <br></br>
              I’m especially interested in building products that combine strong
              technical foundations with great user experience, while
              continuously learning new tools and technologies to improve the
              way I build.
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
      <div className="space-y-5 md:p-3">
        <Heading as="h2">More About Me</Heading>
        <div className="grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <section
              key={section.title}
              className="border-t border-light-400/15 dark:border-dark-200/20 pt-4"
            >
              <h3 className="flex items-center gap-2 text-light-400 dark:text-dark-100 text-base lg:text-lg font-bold">
                <section.icon className="size-5 shrink-0 text-light-400/80 dark:text-dark-100/80" />
                <span>{section.title}</span>
              </h3>
              <p className="mt-2 text-sm md:text-base font-medium leading-relaxed text-dark-200">
                {section.text}
              </p>
            </section>
          ))}
        </div>
      </div>
      <div className="mt-8 mb-6">
        <div className="mx-auto mb-8 h-px w-full bg-gray-300/40 dark:bg-gray-500/20" />
        <Paragraph center={true}>
          Have an idea, opportunity, or project in mind? I’d be happy to hear
          about it.
        </Paragraph>
      </div>
      <Collab />
      <Social />
    </Container>
  );
}
