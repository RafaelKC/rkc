import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '@rkc/components/footer/footer';
import { Header } from '@rkc/components/header/header';
import { SpaceBackground } from '@rkc/components/space-background/space-background';
import { ThemeToggle } from '@rkc/components/theme-toggle/theme-toggle';
import { RkcTranslationPipe } from '@rkc/pipes/rkc-translation-pipe';
import { RkcTranslationService } from '@rkc/services/rkc-translation-service';
@Component({
  selector: 'rkc-app-root',
  imports: [ThemeToggle, SpaceBackground, Header, RouterOutlet, RkcTranslationPipe, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {
  private readonly _translationService = inject(RkcTranslationService);

  public ngOnInit(): void {
    this._translationService.init();
  }
}
