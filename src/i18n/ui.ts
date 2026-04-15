export const ui = {
  pt: {
    'nav.home': 'Início',
    'nav.experience': 'Experiência',
    'nav.education': 'Educação',
    'nav.contact': 'Contato',
    'hero.greeting': 'Olá, mundo. Eu sou',
    'hero.role': 'Engenheiro de Software Pleno',
    'hero.description': 'Desenvolvedor Full Stack com 4+ anos de experiência, especializado no ecossistema .NET (C#) e Angular. Focado em soluções escaláveis, Clean Code e arquitetura de microsserviços.',
    'hero.cta.contact': 'Entrar em contato',
    'hero.cta.cv': 'Download CV',
    'exp.title': 'Experiência Profissional',
    'exp.gestran.role': 'Engenheiro de Software Pleno',
    'exp.gestran.desc': 'Atuação no ciclo completo de desenvolvimento de plataforma de gestão de frotas de alta criticidade e disponibilidade.',
    'exp.viasoft.role': 'Desenvolvedor Full Stack',
    'exp.viasoft.desc': 'Liderança técnica de squad de inovação, entregando ferramentas críticas como sistema de Assinatura Digital e módulos de IA.',
    'edu.title': 'Educação',
    'edu.puc.course': 'Bacharelado em Engenharia de Software',
    'edu.puc.date': 'Previsão de conclusão: 2026',
    'contact.title': 'Vamos conversar?',
    'contact.subtitle': 'Sinta-se à vontade para entrar em contato para oportunidades ou apenas um oi!',
    'contact.label.name': 'Nome',
    'contact.label.email': 'E-mail',
    'contact.label.message': 'Mensagem',
    'contact.button': 'Enviar Mensagem',
    'contact.success': 'Mensagem enviada com sucesso!',
    'contact.error': 'Falha ao enviar mensagem.',
    'footer.rights': 'Todos os direitos reservados.',
    'link.linkedin': 'https://www.linkedin.com/in/rafael-chicovis',
    'link.github': 'https://github.com/RafaelKC',
    'link.email': 'mailto:contato.rafael.chicovis@gmail.com',
    'link.cv': '/cv-rafael-chicovis-pt.pdf'
  },
  en: {
    'nav.home': 'Home',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'hero.greeting': 'Hello, world. I am',
    'hero.role': 'Mid-Level Software Engineer',
    'hero.description': 'Full Stack Developer with 4+ years of experience, specialized in .NET (C#) and Angular. Focused on scalable solutions, Clean Code, and microservices architecture.',
    'hero.cta.contact': 'Get in touch',
    'hero.cta.cv': 'Download Resume',
    'exp.title': 'Professional Experience',
    'exp.gestran.role': 'Mid-Level Full Stack Developer',
    'exp.gestran.desc': 'Working on the full development cycle of a high-criticality and high-availability fleet management platform.',
    'exp.viasoft.role': 'Full Stack Developer',
    'exp.viasoft.desc': 'Technical leadership for an innovation squad, delivering critical tools like Digital Signature systems and AI modules.',
    'edu.title': 'Education',
    'edu.puc.course': 'Bachelor of Software Engineering',
    'edu.puc.date': 'Expected graduation: 2026',
    'contact.title': 'Let\'s talk?',
    'contact.subtitle': 'Feel free to reach out for opportunities or just to say hi!',
    'contact.label.name': 'Name',
    'contact.label.email': 'Email',
    'contact.label.message': 'Message',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Failed to send message.',
    'contact.button': 'Send Message',
    'footer.rights': 'All rights reserved.',
    'link.linkedin': 'https://www.linkedin.com/in/rafael-chicovis/?locale=en_US',
    'link.github': 'https://github.com/RafaelKC',
    'link.email': 'mailto:contato.rafael.chicovis@gmail.com',
    'link.cv': '/resume-rafael-chicovis-en.pdf'
  },
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export const defaultLang = 'en';