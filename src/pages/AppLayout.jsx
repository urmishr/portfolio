import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

export default function AppLayout() {
  return (
    <main className="h-screen w-full">
      <NavBar />
      <Outlet />
    </main>
  );
}
