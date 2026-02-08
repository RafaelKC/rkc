import { LucideIconData } from 'lucide-angular';

export interface LocalizedText {
  pt: string;
  en: string;
}

export interface SkillGroup {
  title: LocalizedText;
  description: LocalizedText;
  icon: string | LucideIconData;
  techs: string[];
}

export interface ExperienceItem {
  id: string;
  dateRange: {
    start: LocalizedText;
    end: LocalizedText;
  };
  title: LocalizedText;
  company: LocalizedText;
  description: LocalizedText;
  achievements: LocalizedText[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string | LucideIconData;
  useOnSeo?: boolean;
  useOnContact?: boolean;
  useOnLinks?: boolean;
}

export interface Project {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  tags: string[];
  banner: string;
  url: string;
  hasPost?: boolean;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  careerStart: Date;
  skills: SkillGroup[];
  experience: ExperienceItem[];
  socialLinks: SocialLink[];
  projects: Project[];
  contact: {
    sendEmailLink: string;
    email: LocalizedText;
    phone: LocalizedText;
    location: LocalizedText;
  };
  cv: LocalizedText;
}
