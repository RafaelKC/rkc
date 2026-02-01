import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RkcTranslationPipe } from '@rkc/pipes/rkc-translation-pipe';

@Component({
  selector: 'rkc-footer',
  imports: [RkcTranslationPipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  public readonly currentYear = new Date().getFullYear();
}
