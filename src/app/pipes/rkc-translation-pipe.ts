import { ChangeDetectorRef, inject, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalizedText } from '@rkc/use_profile-type';
import { Subscription } from 'rxjs';
import { RkcTranslationService } from '../services/rkc-translation-service';

@Pipe({
  name: 'rkcTranslation',
  standalone: true,
  pure: false,
})
export class RkcTranslationPipe implements PipeTransform, OnDestroy {
  private readonly _rkcTranslation = inject(RkcTranslationService);
  private readonly _ngxTranslate = inject(TranslateService);
  private readonly _cdr = inject(ChangeDetectorRef);

  private _onLangChange: Subscription;
  private _lastKey: string | LocalizedText | null = null;
  private _lastValue: string = '';

  constructor() {
    this._onLangChange = this._ngxTranslate.onLangChange.subscribe(() => {
      this._lastKey = null;
      this._cdr.markForCheck();
    });
  }

  public transform(value: string | LocalizedText | null | undefined, params?: any): string {
    if (!value) return '';

    if (value === this._lastKey) {
      return this._lastValue;
    }

    this._lastKey = value;

    if (this.isLocalizedText(value)) {
      const currentLang = this._rkcTranslation.currentLang();
      this._lastValue = value[currentLang as keyof LocalizedText] || value.pt;
      return this._lastValue;
    }

    if (typeof value === 'string') {
      this._lastValue = this._ngxTranslate.instant(value, params);
      return this._lastValue;
    }

    return String(value);
  }

  private isLocalizedText(obj: any): obj is LocalizedText {
    return obj && typeof obj === 'object' && 'pt' in obj && 'en' in obj;
  }

  public ngOnDestroy(): void {
    if (this._onLangChange) {
      this._onLangChange.unsubscribe();
    }
  }
}
