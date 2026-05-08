import { Outlet } from 'react-router-dom';
import ProjectChooser from '../components/ProjectChooser';
import Container from '../components/ui/Container';
import Tag from '../components/ui/Tag';
import Social from '../components/Social';

export default function Projects() {
  return (
    <Container>
      <div className="flex justify-between px-1">
        <Tag text={'Projects'} />
        <ProjectChooser />
      </div>
      <Outlet />
      <Social />
    </Container>
  );
}
