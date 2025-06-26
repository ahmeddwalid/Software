
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PlatformSection } from './components/PlatformSection';
import { APP_DATA } from './constants';
import { PlatformData, Theme } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme') as Theme;
      if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
        return storedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light'; // Default theme
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-neutral dark:bg-gray-900">
      <Header currentTheme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary dark:text-primary-light animate-fade-in-up">
          Recommended Software
        </h1>
        <div className="space-y-16">
          {(APP_DATA as PlatformData[]).map((platform) => (
            <PlatformSection key={platform.id} platform={platform} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;