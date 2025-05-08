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