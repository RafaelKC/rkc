import { DOCUMENT } from '@angular/common';
import { inject, Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { USER_PROFILE } from '@rkc/use_profile';
import { LocalizedText } from '@rkc/use_profile-type';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly _title = inject(Title);
  private readonly _meta = inject(Meta);
  private readonly _translate = inject(TranslateService);
  private readonly _router = inject(Router);

  private readonly _baseUrl = 'https://rafaelchicovis.dev';

  constructor(@Inject(DOCUMENT) private _document: Document) {}

  public init(): void {
    this._translate.onLangChange.subscribe(() => {
      this.updateMetaTags();
      this.updateStructuredData();
    });

    this._router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.updateMetaTags();
    });

    this.updateMetaTags();
    this.updateStructuredData();
  }

  private updateMetaTags(): void {
    const fullName = `${USER_PROFILE.firstName} ${USER_PROFILE.lastName}`;

    const currentRole = this.getText(USER_PROFILE.experience[0].title);

    const title = `${fullName} | ${currentRole}`;
    const years = new Date().getFullYear() - USER_PROFILE.careerStart.getFullYear();
    const description = this._translate.instant('HERO.DESCRIPTION', { years });
    const imageUrl = `${this._baseUrl}/assets/og-image.jpg`;

    const uniqueKeywords = [...new Set(USER_PROFILE.skills.flatMap((s) => s.techs))];
    const keywords = uniqueKeywords.join(', ');

    this._title.setTitle(title);

    // Basic
    this._meta.updateTag({ name: 'description', content: description });
    this._meta.updateTag({ name: 'author', content: fullName });
    this._meta.updateTag({ name: 'keywords', content: keywords });

    // Open Graph
    this._meta.updateTag({ property: 'og:title', content: title });
    this._meta.updateTag({ property: 'og:description', content: description });
    this._meta.updateTag({ property: 'og:image', content: imageUrl });
    this._meta.updateTag({ property: 'og:url', content: this._baseUrl + this._router.url });
    this._meta.updateTag({ property: 'og:type', content: 'website' });
    this._meta.updateTag({ property: 'og:site_name', content: `${fullName} Portfolio` });

    // Twitter
    this._meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this._meta.updateTag({ name: 'twitter:title', content: title });
    this._meta.updateTag({ name: 'twitter:description', content: description });
    this._meta.updateTag({ name: 'twitter:image', content: imageUrl });
  }

  private updateStructuredData(): void {
    const oldScript = this._document.getElementById('app-ld-json');
    if (oldScript) {
      oldScript.remove();
    }

    const fullName = `${USER_PROFILE.firstName} ${USER_PROFILE.lastName}`;
    const currentRole = this.getText(USER_PROFILE.experience[0].title);

    const knowsAbout = [...new Set(USER_PROFILE.skills.flatMap((s) => s.techs))];

    const socialUrls = USER_PROFILE.socialLinks
      .filter((link) => link.useOnSeo)
      .map((link) => link.url);

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: fullName,
      jobTitle: currentRole,
      url: this._baseUrl,
      image: `${this._baseUrl}/assets/og-image.jpg`,
      sameAs: socialUrls,
      knowsAbout: knowsAbout,
      alumniOf: {
        '@type': 'Organization',
        name: this.getText(USER_PROFILE.experience[0].company),
      },
    };

    const script = this._document.createElement('script');
    script.id = 'app-ld-json';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    this._document.head.appendChild(script);
  }

  private getText(content: LocalizedText): string {
    const lang = this._translate.getCurrentLang() as keyof LocalizedText;
    return content[lang] || content.pt;
  }
}
