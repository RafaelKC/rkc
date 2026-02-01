import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly _platformId: object = inject(PLATFORM_ID);
  private readonly _isBrowser: boolean = isPlatformBrowser(this._platformId);

  public setItem(key: string, value: string): void {
    if (this._isBrowser) {
      localStorage.setItem(key, value);
    }
  }

  public getItem(key: string): string | null {
    if (this._isBrowser) {
      return localStorage.getItem(key);
    }
    return null;
  }

  public removeItem(key: string): void {
    if (this._isBrowser) {
      localStorage.removeItem(key);
    }
  }

  public clear(): void {
    if (this._isBrowser) {
      localStorage.clear();
    }
  }
}
