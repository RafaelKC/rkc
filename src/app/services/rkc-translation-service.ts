import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EN_RKC_I18N } from '@rkc/i18n/en-rkc-i18n-interface';
import { PT_RKC_I18N } from '@rkc/i18n/pt-rkc-i18n-interface';
import { StorageService } from '@rkc/services/storage-service';

const STORAGE_KEY = 'rkc-lang';

@Injectable({
  providedIn: 'root',
})
export class RkcTranslationService {
  private readonly _translate = inject(TranslateService);
  private readonly _localStorage = inject(StorageService);
  private readonly _platformId = inject(PLATFORM_ID);
  private readonly _document = inject(DOCUMENT);

  public currentLang = signal<string>('pt');

  public init(): void {
    this._translate.setTranslation('pt', PT_RKC_I18N);
    this._translate.setTranslation('en', EN_RKC_I18N);

    const savedLang = this._localStorage.getItem(STORAGE_KEY);

    if (savedLang) {
      this.changeLanguage(savedLang);
    } else {
      let defaultLang = 'pt';

      if (isPlatformBrowser(this._platformId)) {
        const browserLang = this._translate.getBrowserLang();
        defaultLang = browserLang?.match(/en|pt/) ? browserLang : 'pt';
      }

      this.changeLanguage(defaultLang);
    }
  }

  public changeLanguage(lang: string): void {
    this._translate.use(lang);
    this.currentLang.set(lang);
    this._localStorage.setItem(STORAGE_KEY, lang);

    if (isPlatformBrowser(this._platformId)) {
      this._document.documentElement.lang = lang;
    }
  }
}
