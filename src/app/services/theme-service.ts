import { isPlatformBrowser } from '@angular/common';
import { afterNextRender, inject, Injectable, PLATFORM_ID, Signal, signal } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { StorageService } from '@rkc/services/storage-service';

type Theme = 'light' | 'dark';
const THEME_STORAGE_KEY = 'theme';
const DEFAULT_THEME: Theme = 'dark';
const DARK_BG_COLOR = '#020617';
const LIGHT_BG_COLOR = '#f0f9ff';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly _theme = signal<Theme>(DEFAULT_THEME);

  private readonly _storageService = inject(StorageService);
  private readonly _platformId: object = inject(PLATFORM_ID);
  private readonly _isBrowser: boolean = isPlatformBrowser(this._platformId);
  private readonly _meta = inject(Meta);

  constructor() {
    afterNextRender((): void => {
      this.setTheme(this.getTheme());

      matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
          this.setTheme(e.matches ? 'dark' : 'light');
        }
      });
    });
  }

  public setTheme(theme: Theme): void {
    this._storageService.setItem(THEME_STORAGE_KEY, theme);
    this._theme.set(theme);
    this.updateThemeColor(theme === 'dark' ? DARK_BG_COLOR : LIGHT_BG_COLOR);
    if (this._isBrowser) document.documentElement.setAttribute('data-theme', theme);
  }

  public toggleTheme(): void {
    const current = this.getTheme();
    this.setTheme(current === 'dark' ? 'light' : 'dark');
  }

  public getTheme(): Theme {
    return (this._storageService.getItem(THEME_STORAGE_KEY) as Theme) || DEFAULT_THEME;
  }

  public get theme(): Signal<Theme> {
    return this._theme.asReadonly();
  }

  public updateThemeColor(color: string): void {
    this._meta.updateTag({
      name: 'theme-color',
      content: color,
    });
  }
}
