import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnDestroy,
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
export class Header implements OnDestroy {
  public readonly MenuIcon = Menu;
  public readonly CloseIcon = X;

  public activeSection = signal<string>('home');
  public isMenuOpen = signal<boolean>(false);
  public hasScrolled = signal<boolean>(false);

  public readonly currentLang = computed(() => this._translationService?.currentLang());

  private readonly _translationService = inject(RkcTranslationService);
  private _observer: IntersectionObserver | null = null;
  private _scrollListener: (() => void) | null = null;

  constructor() {
    afterNextRender(() => {
      this.setupIntersectionObserver();
      this.setupScrollListener();
    });
  }

  public ngOnDestroy(): void {
    this._observer?.disconnect();
    if (this._scrollListener) {
      window.removeEventListener('scroll', this._scrollListener);
    }
  }

  public changeLanguage(lang: string): void {
    this._translationService.changeLanguage(lang);
  }

  public scrollTo(sectionId: string) {
    this.closeMenu();

    const element = document.getElementById(sectionId);

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  public toggleMenu() {
    this.isMenuOpen.update((v) => !v);
  }

  public closeMenu() {
    this.isMenuOpen.set(false);
  }

  private setupScrollListener(): void {
    this._scrollListener = () => {
      this.hasScrolled.set(window.scrollY > 50);
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (isAtBottom) {
        this.activeSection.set('contact');
      }
    };
    window.addEventListener('scroll', this._scrollListener);
  }

  private setupIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    this._observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const isAtBottom =
            window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
          if (!isAtBottom) {
            this.activeSection.set(entry.target.id);
          }
        }
      });
    }, options);

    document.querySelectorAll('section[id]').forEach((section) => {
      this._observer?.observe(section);
    });
  }
}
