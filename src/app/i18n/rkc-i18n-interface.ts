import { TranslationObject } from '@ngx-translate/core';

export interface RkcI18n extends TranslationObject {
  ARIA: {
    SKIP_TO_CONTENT: string;
  };
  HEADER: {
    HOME: string;
    SKILLS: string;
    EXPERIENCE: string;
    PROJECTS: string;
    BLOG: string;
    CONTACT: string;
    MENU_LABEL: string;
    LOGO_ALT: string;
  };
  HERO: {
    ROLE: string;
    DESC_START: string;
    YEARS_TEXT: string;
    DESC_END: string;
    AVAILABLE_BADGE: string;
    BTN_CONTACT: string;
    BTN_PROJECTS: string;
  };
  THEME: {
    TO_LIGHT: string;
    TO_DARK: string;
  };
  SKILLS: {
    SUBTITLE: string;
    TITLE: string;
  };
  EXPERIENCE: {
    SUBTITLE: string;
    TITLE: string;
  };
  PROJECTS: {
    SUBTITLE: string;
    TITLE: string;
    EXPLORE: string;
  };
}
