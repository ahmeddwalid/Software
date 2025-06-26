
import React from 'react';
import { AppItem } from '../types';

interface AppItemCardProps {
  app: AppItem;
}

const ExternalLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);


export const AppItemCard: React.FC<AppItemCardProps> = ({ app }) => {
  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-3 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:bg-opacity-70 transition-all duration-200 group/item"
    >
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-neutral-text-light dark:text-neutral-text-dark group-hover/item:text-accent dark:group-hover/item:text-accent-light transition-colors duration-150">
          {app.name}
        </h4>
        <ExternalLinkIcon className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover/item:text-accent dark:group-hover/item:text-accent-light transition-colors duration-150" />
      </div>
      {app.description && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {app.description}
        </p>
      )}
    </a>
  );
};
