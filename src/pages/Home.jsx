import Collab from '../components/Collab';
import Container from '../components/ui/Container';

import InfoSection from '../components/InfoSection';
import Projects from '../components/Projects';
import Social from '../components/Social';
import Tags from '../components/ui/Tags';

export default function Home() {
  return (
    <Container>
      <Tags />
      <InfoSection />
      <Projects />
      <Collab />
      <Social />
    </Container>
  );
}
