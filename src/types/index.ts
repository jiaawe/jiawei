export interface AboutData {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  slug: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export interface Publication {
  id: number;
  title: string;
  authors: string[];
  journal?: string;
  conference?: string;
  year: number;
  abstract: string;
  link?: string;
}