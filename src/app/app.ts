import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeToggle } from '@rkc/components/theme-toggle/theme-toggle';
import { RkcTranslationPipe } from '@rkc/pipes/rkc-translation-pipe';
import { RkcTranslationService } from '@rkc/services/rkc-translation-service';
import { Header } from './components/header/header';
import { SpaceBackground } from './components/space-background/space-background';
import { Footer } from './pages/footer/footer';

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
