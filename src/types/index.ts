export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  featured: boolean;
  results: string[];
  challenge: string;
  solution: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
}
