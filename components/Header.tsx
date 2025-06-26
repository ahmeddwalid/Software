
import React from 'react';
import { ThemeToggleButton } from './ThemeToggleButton';
import { Theme } from '../types';

interface HeaderProps {
  currentTheme: Theme;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTheme, toggleTheme }) => {
  return (
    <header className="bg-neutral-light dark:bg-neutral-dark shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary dark:text-primary-light">
          App<span className="text-secondary dark:text-secondary-light">Recs</span>
        </div>
        <ThemeToggleButton currentTheme={currentTheme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
};
