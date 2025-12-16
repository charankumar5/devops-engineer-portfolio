export interface Project {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string;
  stack: string[];
  problem: string;
  architecture: string;
  impact: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}