import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function AppLayout() {
  return (
    <main className="min-h-screen w-full">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
}
