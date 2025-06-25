import { Outlet } from 'react-router-dom';
import ProjectChooser from '../components/ProjectChooser';
import Container from '../components/ui/Container';
import Tag from '../components/ui/Tag';
import Collab from '../components/Collab';
import Social from '../components/Social';

export default function Projects() {
  return (
    <Container>
      <Tag text={'projects'} />
      <ProjectChooser />
      <Outlet />
      <Collab />
      <Social />
    </Container>
  );
}
