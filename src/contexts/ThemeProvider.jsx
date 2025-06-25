import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(undefined);

function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') {
      // Default to false during SSR
      return false;
    }
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') return true;
    if (storedTheme === 'light') return false;
    // If no stored preference, use system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = window.document.documentElement;

    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Optional toggle function for convenience
  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { ThemeProvider, useTheme };
