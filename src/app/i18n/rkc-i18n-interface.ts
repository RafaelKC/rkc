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
    CONTACT: string;
    MENU_LABEL: string;
    LOGO_ALT: string;
    CHANGE_TO_PORTUGUESE: string;
    CHANGE_TO_ENGLISH: string;
    BRAZILIAN_FLAG_ALT: string;
    US_FLAG_ALT: string;
    DOWNLOAD_CV: string;
    LINKS: string;
  };
  HERO: {
    ROLE: string;
    DESC: string;
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
    TECH_LIST: string;
  };
  EXPERIENCE: {
    SUBTITLE: string;
    TITLE: string;
    ACHIEVEMENTS: string;
  };
  PROJECTS: {
    SUBTITLE: string;
    TITLE: string;
    EXPLORE: string;
    OPEN_IN_NEW_TAB: string;
    TECH_USED: string;
    INTERFACE_PROJECTS: string;
  };
  CONTACT: {
    SUBTITLE: string;
    TITLE: string;
    LABEL: string;
    TEXT: string;
    NAME: string;
    EMAIL: string;
    MESSAGE: string;
    BUTTON: string;
    PHONE_LABEL: string;
    LOCATION_LABEL: string;
    ARIA_LIST: string;
    SOCIAL_OPEN: string;
    FORM_LABEL: string;
    BUTTON_ARIA: string;
  };
  FOOTER: {
    TEXT: string;
    CODE: string;
    COFFEE: string;
  };
}
