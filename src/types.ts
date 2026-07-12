export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
  tags: string[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  dates: string;
  bullets: string[];
}
