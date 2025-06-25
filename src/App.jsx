import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AppLayout from './pages/AppLayout';
import Projects from './pages/Projects';
import Natours from './components/Natours';
import TheWildOasis from './components/TheWildOasis';

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
              <Route index path="natours" element={<Natours />} />
              <Route path="the-wild-oasis" element={<TheWildOasis />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
