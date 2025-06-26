
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-light dark:bg-neutral-dark border-t border-gray-200 dark:border-gray-700 mt-12 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
        <p className="mb-2">
          The creator assumes no responsibility or liability for any loss, damage, or inconvenience incurred by Users as a result of installing or using the recommended software ("Software") listed on this page. Users acknowledge that the decision to install or use any of the recommended Software is voluntary and at their own risk.
        </p>
        <p>
          &copy; {new Date().getFullYear()} Recommended Apps Showcase. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
