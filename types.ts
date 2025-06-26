import React from 'react';

export interface AppItem {
  name: string;
  url: string;
  description?: string;
}

export interface Category {
  name: string;
  apps: AppItem[];
}

export interface IconObject {
  component: React.FC<React.SVGProps<SVGSVGElement>>;
  props: React.SVGProps<SVGSVGElement>;
}

export interface PlatformData {
  id: string;
  name: string;
  icon?: IconObject;
  categories: Category[];
}

export type Theme = 'light' | 'dark';