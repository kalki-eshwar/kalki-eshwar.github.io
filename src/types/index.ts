import { ReactNode } from 'react';

export interface ArticleMeta {
  title: string;
  description: string;
  date: string;
  lastUpdated?: string;
  category: 'software' | 'life';
  tags: string[];
  readTime: number;
  featured: boolean;
  slug: string;
  author: string;
  coverImage?: string;
  draft?: boolean;
}

export interface Article {
  meta: ArticleMeta;
  content: string;
  slug: string;
}

export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tool' | 'cloud' | 'mobile';
  icon?: string;
  color?: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: Technology[];
  githubUrl?: string;
  liveUrl?: string;
  images: ProjectImage[];
  featured: boolean;
  category: 'web' | 'mobile' | 'desktop' | 'ai' | 'opensource';
  status: 'completed' | 'in-progress' | 'planned';
  startDate: string;
  endDate?: string;
  highlights: string[];
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: Technology[];
  companyLogo?: string;
  companyUrl?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  structuredData?: object;
}

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  tags?: string[];
  href?: string;
  className?: string;
  children?: ReactNode;
  hover?: boolean;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface SkillCategory {
  name: string;
  skills: Technology[];
}