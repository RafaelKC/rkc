import {
  Database,
  Github,
  Linkedin,
  LucideIconData,
  Monitor,
  Rocket,
  Star,
  TreesIcon,
} from 'lucide-angular';

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
    email: LocalizedText;
    phone: LocalizedText;
    location: LocalizedText;
  };
  cv: LocalizedText;
}

export const USER_PROFILE: UserProfile = {
  firstName: 'Rafael',
  lastName: 'Chicovis',
  careerStart: new Date(2021, 5, 1),
  skills: [
    {
      icon: Rocket,
      title: {
        pt: 'Backend Development',
        en: 'Backend Development',
      },
      description: {
        pt: 'Motores robustos que impulsionam aplicações para além da estratosfera.',
        en: 'Robust engines driving applications beyond the stratosphere.',
      },
      techs: ['C#', '.NET Core', '.NET 8', 'EF Core', 'REST APIs', 'Python', 'Rust', 'Go'],
    },
    {
      icon: Monitor,
      title: {
        pt: 'Frontend Development',
        en: 'Frontend Development',
      },
      description: {
        pt: 'Interfaces que conectam usuários através do cosmos digital.',
        en: 'Interfaces connecting users across the digital cosmos.',
      },
      techs: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3/SASS'],
    },
    {
      icon: Database,
      title: {
        pt: 'Database & DevOps',
        en: 'Database & DevOps',
      },
      description: {
        pt: 'Navegação precisa através de dados e deploys automatizados.',
        en: 'Precise navigation through data and automated deployments.',
      },
      techs: ['SQL Server', 'PostgreSQL', 'Redis', 'Azure DevOps', 'Docker', 'CI/CD'],
    },
    {
      icon: Star,
      title: {
        pt: 'Quality & Architecture',
        en: 'Quality & Architecture',
      },
      description: {
        pt: 'Estruturas sólidas como constelações, testadas através do tempo.',
        en: 'Solid structures like constellations, tested through time.',
      },
      techs: ['xUnit', 'Cypress', 'SOLID', 'Design Patterns', 'Clean Architecture', 'Scrum/Kanban'],
    },
  ],
  experience: [
    {
      id: 'gestran-pleno',
      dateRange: {
        start: { pt: 'FEV 2025', en: 'FEB 2025' },
        end: { pt: 'PRESENTE', en: 'PRESENT' },
      },
      title: { pt: 'Desenvolvedor Full Stack Pleno', en: 'Mid-Level Full Stack Developer' },
      company: { pt: 'Gestran Software para Transportes', en: 'Gestran Software for Transport' },
      description: {
        pt: 'Pilotando desenvolvimento de plataforma de gestão de frotas de alta criticidade.',
        en: 'Piloting development of a high-criticality fleet management platform.',
      },
      achievements: [
        {
          pt: 'APIs robustas com .NET Core navegando através de milhões de registros',
          en: 'Robust .NET Core APIs navigating through millions of records',
        },
        {
          pt: 'Pipelines CI/CD automatizados no Azure DevOps para deploy na Google Play',
          en: 'Automated CI/CD pipelines in Azure DevOps for Google Play deployment',
        },
        {
          pt: 'Arquitetura técnica escalável para sistemas de missão crítica',
          en: 'Scalable technical architecture for mission-critical systems',
        },
      ],
    },
    {
      id: 'viasoft-junior',
      dateRange: {
        start: { pt: 'JUN 2021', en: 'JUN 2021' },
        end: { pt: 'FEV 2025', en: 'FEB 2025' },
      },
      title: { pt: 'Desenvolvedor Full Stack', en: 'Full Stack Developer' },
      company: { pt: 'Viasoft Korp ERP Indústria', en: 'Viasoft Korp ERP Industry' },
      description: {
        pt: 'Comandante técnico de squad de inovação, lançando ferramentas críticas.',
        en: 'Technical commander of an innovation squad, launching critical tools.',
      },
      achievements: [
        {
          pt: 'Sistema de Assinatura Digital com certificação ICP-Brasil',
          en: 'Digital Signature System with ICP-Brasil certification',
        },
        {
          pt: 'Módulos de IA para análise de dados corporativos',
          en: 'AI modules for corporate data analysis',
        },
        {
          pt: 'ERP estratégico (CRM, Propostas) com Angular e .NET',
          en: 'Strategic ERP (CRM, Proposals) with Angular and .NET',
        },
        {
          pt: 'Migração de bases complexas em PostgreSQL e SQL Server',
          en: 'Migration of complex databases in PostgreSQL and SQL Server',
        },
      ],
    },
  ],
  socialLinks: [
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rafael-chicovis/',
      icon: Linkedin,
      useOnContact: true,
      useOnLinks: true,
      useOnSeo: true,
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/RafaelKC',
      icon: Github,
      useOnContact: true,
      useOnLinks: true,
      useOnSeo: true,
    },
    {
      platform: 'LinkTree',
      url: 'https://linktr.ee/rafael_chicovis',
      icon: TreesIcon,
      useOnContact: true,
      useOnLinks: false,
      useOnSeo: true,
    },
  ],
  projects: [
    {
      id: 'fleet-manager',
      banner: 'assets/projects/fleet-dashboard.jpg',
      url: '#',
      title: {
        pt: 'Sistema de Gestão de Frotas',
        en: 'Fleet Management System',
      },
      description: {
        pt: 'Plataforma enterprise para controle total de frotas com rastreamento em tempo real.',
        en: 'Enterprise platform for total fleet control with real-time tracking.',
      },
      tags: ['.NET Core', 'Angular', 'SQL Server'],
    },
    {
      id: 'digital-signature',
      banner: 'assets/projects/signature-app.jpg',
      url: '#',
      title: {
        pt: 'Sistema de Assinatura Digital',
        en: 'Digital Signature System',
      },
      description: {
        pt: 'Solução completa para assinatura digital com certificação ICP-Brasil.',
        en: 'Complete solution for digital signatures with ICP-Brasil certification.',
      },
      tags: ['.NET', 'PostgreSQL', 'Crypto'],
    },
    {
      id: 'ai-analysis',
      hasPost: true,
      banner: 'assets/projects/ai-analytics.jpg',
      url: '#',
      title: {
        pt: 'Módulo de Análise com IA',
        en: 'AI Analysis Module',
      },
      description: {
        pt: 'Engine de IA para análise de padrões em dados corporativos e insights.',
        en: 'AI engine for pattern analysis in corporate data and insights.',
      },
      tags: ['Python', 'ML.NET', 'Angular'],
    },
  ],
  contact: {
    email: { pt: 'contato@rafaelchicovis.com.br', en: 'contato@rafaelchicovis.com.br' },
    phone: { pt: '(41) 99142-1020', en: '+55 (41) 99142-1020' },
    location: { pt: 'Curitiba, PR - Brasil', en: 'Curitiba - Brazil' },
  },
  cv: {
    pt: 'cv/cv-pt.pdf',
    en: 'cv/cv-en.pdf',
  },
};
