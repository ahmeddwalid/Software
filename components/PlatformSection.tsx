import React from 'react';
import { PlatformData } from '../types';
import { CategoryCard } from './CategoryCard';

interface PlatformSectionProps {
  platform: PlatformData;
}

export const PlatformSection: React.FC<PlatformSectionProps> = ({ platform }) => {
  const IconComponent = platform.icon ? platform.icon.component : null;
  return (
    <section className="py-8 animate-fade-in-up" id={platform.id}>
      <div className="flex items-center mb-8">
        {IconComponent && platform.icon && <IconComponent {...platform.icon.props} />}
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-text-light dark:text-neutral-text-dark">
          {platform.name}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {platform.categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </div>
    </section>
  );
};