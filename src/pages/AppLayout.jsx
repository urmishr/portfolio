import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';
import { useTheme } from '../contexts/ThemeProvider';

export default function AppLayout() {
  const { isDark } = useTheme();
  return (
    <main className="min-h-screen w-full">
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: isDark
            ? {
                zIndex: 50,
                backdropFilter: 'blur(12px)',
                backgroundColor: 'rgba(32, 32, 32, 0.5)', // dark bg
                borderRadius: '2rem',
                boxShadow: '0 4px 24px 0 rgba(0,0,0,0.15)',
                border: '1px solid rgba(158, 158, 158, 0.2)',
                padding: '1rem',
                color: '#F5F5F5',
                fontWeight: '700',
              }
            : {
                zIndex: 50,
                backdropFilter: 'blur(12px)',
                backgroundColor: 'rgba(255, 255, 255, 0.7)', // light bg
                borderRadius: '2rem',
                boxShadow: '0 4px 24px 5px rgba(0,0,0,0.05)',
                border: '1px solid rgba(0, 0, 0, 0.2)',
                padding: '1rem',
                color: '#22223b',
                fontWeight: '700',
              },
        }}
      />
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
}
