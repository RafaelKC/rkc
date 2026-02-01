import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RkcTranslationPipe } from '@rkc/pipes/rkc-translation-pipe';
import { ThemeService } from '@rkc/services/theme-service';
import { LucideAngularModule, Moon, Sun } from 'lucide-angular';

@Component({
  selector: 'rkc-theme-toggle',
  imports: [LucideAngularModule, RkcTranslationPipe],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggle {
  readonly Sun = Sun;
  readonly Moon = Moon;

  public isDark = computed(() => this._themeService.theme() === 'dark');
  private _themeService = inject(ThemeService);

  public toggleTheme(): void {
    this._themeService.toggleTheme();
  }
}
