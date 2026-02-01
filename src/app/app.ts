import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ThemeToggle } from '@rkc/components/theme-toggle/theme-toggle';
import { RkcTranslationService } from '@rkc/services/rkc-translation-service';
import { Header } from './components/header/header';
import { SpaceBackground } from './components/space-background/space-background';
import { Experience } from './pages/experience/experience';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Skills } from './pages/skills/skills';
import { RkcTranslationPipe } from './pipes/rkc-translation-pipe';

@Component({
  selector: 'rkc-app-root',
  imports: [
    ThemeToggle,
    SpaceBackground,
    Header,
    Home,
    Skills,
    RkcTranslationPipe,
    Experience,
    Projects,
  ],
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
