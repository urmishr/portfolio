import Collab from '../components/Collab';
import Dot from '../components/Dot';
import InfoSection from '../components/InfoSection';
import Projects from '../components/Projects';
import Social from '../components/Social';
import Tags from '../components/Tags';

export default function Home() {
  return (
    <section className="m-5 px-3 py-5 flex flex-col md:px-5 space-y-5 dark:bg-dark-500 bg-light-100 shadow-light rounded-lg border border-dark-400/20 dark:border dark:border-dark-200/20">
      <Tags />
      <InfoSection />
      <Projects />
      <Collab />
      <Social />
    </section>
  );
}
