export interface HeroLink {
  label: string;
  url: string;
  icon: "mail" | "phone" | "linkedin" | "github";
}

export interface HeroData {
  eyebrow: string;
  name: string;
  title: string;
  desc: string;
  years: number;
  links: HeroLink[];
  resumeUrl: string;
}

export interface AboutStat {
  num: string;
  label: string;
}

export interface AboutData {
  paragraphs: string[];
  stats: AboutStat[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  date: string;
  points: string[];
}

export interface SkillGroup {
  group: string;
  tags: string[];
}

export interface Project {
  icon: string;
  name: string;
  desc: string;
  tags: string[];
  url?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  url: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
}

export interface ContactItem {
  label: string;
  url: string | null;
  type: "mail" | "phone" | "linkedin" | "location";
}

export interface ContactData {
  headline: string;
  subtext: string;
  items: ContactItem[];
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  experience: ExperienceItem[];
  skills: SkillGroup[];
  projects: Project[];
  certifications: Certification[];
  education: Education[];
  contact: ContactData;
}
