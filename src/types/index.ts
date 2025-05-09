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
  bullets: string[]; // Added bullets array for bullet points
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl: string; // Now required for all projects
  pdfUrl?: string; // Added for project reports/PDFs
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