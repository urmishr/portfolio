import { NavLink } from 'react-router-dom';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import Paragraph from '../components/ui/Paragraph';
import Button from '../components/ui/Button';
import { HiOutlineHome, HiOutlineWindow } from 'react-icons/hi2';

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[45vh] flex-col items-center justify-center gap-5 text-center">
        <p className="text-green font-bold">404</p>
        <Heading>Page not found</Heading>
        <Paragraph center={true}>
          The page you are looking for does not exist or may have moved.
        </Paragraph>
        <div className="flex flex-wrap justify-center gap-3">
          <NavLink to="/">
            <Button>
              <HiOutlineHome className="size-5 lg:size-6" />
              Home
            </Button>
          </NavLink>
          <NavLink to="/projects">
            <Button>
              <HiOutlineWindow className="size-5 lg:size-6" />
              Projects
            </Button>
          </NavLink>
        </div>
      </div>
    </Container>
  );
}
