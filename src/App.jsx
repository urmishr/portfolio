import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Navigate to="/#sec-about" replace />} />
        <Route path="/projects" element={<Navigate to="/#sec-projects" replace />} />
        <Route path="/projects/*" element={<Navigate to="/#sec-projects" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
