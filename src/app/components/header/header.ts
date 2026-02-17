import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RkcTranslationService } from '@rkc/services/rkc-translation-service';
import { USER_PROFILE } from '@rkc/use_profile';
import { LucideAngularModule, Menu } from 'lucide-angular';
import { RkcTranslationPipe } from '../../pipes/rkc-translation-pipe';

@Component({
  selector: 'rkc-header',
  imports: [LucideAngularModule, CommonModule, RouterModule, RkcTranslationPipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  public menuOpen = signal(false);
  public menu = Menu;

  public readonly currentLang = computed(() => this._translationService?.currentLang());

  public readonly cvUrl = computed(() => {
    const lang = this.currentLang() as 'pt' | 'en';
    return USER_PROFILE.cv[lang];
  });

  private readonly _translationService = inject(RkcTranslationService);

  public changeLanguage(lang: string): void {
    this._translationService.changeLanguage(lang);
  }

  public toggleMenu(): void {
    this.menuOpen.update((val) => !val);
  }
}
