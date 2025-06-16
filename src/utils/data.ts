import personalInfo from '@/content/personal-info.json';
import educationData from '@/content/education-data.json';
import workExperience from '@/content/work-experience.json';
import achievementsData from '@/content/achievements-data.json';
import contactInfo from '@/content/contact-info.json';

export const getPersonalInfo = () => personalInfo;
export const getEducationData = () => educationData;
export const getWorkExperience = () => workExperience;
export const getAchievementsData = () => achievementsData;
export const getContactInfo = () => contactInfo;

// New functions for publications and certifications
export const getPublications = () => educationData.publications;
export const getCertifications = () => educationData.certifications;

// Type definitions
export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  description: string;
  location: string;
  email: string;
  website: string;
  profileImage: string;
  backgroundImage: string;
  resumePath: string;
  resumeFileName: string;
  aboutSections: string[];
  seo: {
    title: string;
    description: string;
    canonical: string;
    structuredData: {
      '@context': string;
      '@type': string;
      name: string;
      jobTitle: string;
      url: string;
    };
  };
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  gpa: string;
  description: string;
  coursework: string[];
  achievements: string[];
  type: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  description: string;
  skills: string[];
  verified: boolean;
  category: string;
  certificateUrl: string;
}

export interface Publication {
  title: string;
  authors: string[];
  journal: string;
  date: string;
  type: string;
  status: string;
  doi: string;
  abstract: string;
  keywords: string[];
  pages: string;
  volume: string;
  issue?: string;
  issn: string;
  category: string;
  venue?: string;
  pdfUrl: string;
  bibtex: string;
  featured: boolean;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface WorkExperience {
  title: string;
  company: string;
  period: string;
  type: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  companyWebsite: string;
  certificateUrl: string;
  current?: boolean;
}

export interface Achievement {
  title: string;
  description: string;
  category: string;
  year: string;
  icon: string;
}

export interface ContactInfo {
  contactInfo: {
    email: string;
    location: string;
    availability: string;
    responseTime: string;
    currentlyAvailable: boolean;
    availabilityMessage: string;
  };
  socialLinks: Array<{
    name: string;
    url: string;
    icon: string;
  }>;
  contactSubjects: Array<{
    value: string;
    label: string;
  }>;
  connectionTypes: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}
