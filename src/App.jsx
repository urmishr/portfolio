import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AppLayout from './pages/AppLayout';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Natours from './components/projects/Natours';
import TheWildOasis from './components/projects/TheWildOasis';
import Lumy from './components/projects/Lumy';

import { ThemeProvider } from './contexts/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />}>
              <Route index element={<Navigate to="natours" replace />} />
              <Route path="natours" element={<Natours />} />
              <Route path="the-wild-oasis" element={<TheWildOasis />} />
              <Route path="lumy" element={<Lumy />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
