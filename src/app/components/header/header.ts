import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';

import { RkcTranslationPipe } from '@rkc/pipes/rkc-translation-pipe';

import { RkcTranslationService } from '@rkc/services/rkc-translation-service';

import { LucideAngularModule, Menu, X } from 'lucide-angular';

@Component({
  selector: 'rkc-header',

  imports: [LucideAngularModule, RkcTranslationPipe],

  templateUrl: './header.html',

  styleUrl: './header.scss',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  public readonly MenuIcon = Menu;

  public readonly CloseIcon = X;

  public activeSection = signal<string>('home');

  public isMenuOpen = signal<boolean>(false);

  public readonly currentLang = computed(() => this._translationService?.currentLang());

  private readonly _translationService = inject(RkcTranslationService);

  constructor() {
    afterNextRender(() => {
      this.setupIntersectionObserver();
    });
  }

  public changeLanguage(lang: string): void {
    this._translationService.changeLanguage(lang);
  }

  public scrollTo(sectionId: string) {
    this.closeMenu();

    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  public toggleMenu() {
    this.isMenuOpen.update((v) => !v);
  }

  public closeMenu() {
    this.isMenuOpen.set(false);
  }

  private setupIntersectionObserver(): void {
    const options = {
      root: null,

      rootMargin: '-50% 0px -50% 0px',

      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection.set(entry.target.id);
        }
      });
    }, options);

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
  }
}
