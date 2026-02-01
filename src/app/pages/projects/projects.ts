import { ChangeDetectionStrategy, Component } from '@angular/core';
import { USER_PROFILE } from '@rkc/use_profile';
import { ArrowRight, LucideAngularModule } from 'lucide-angular';
import { RkcTranslationPipe } from '../../pipes/rkc-translation-pipe';

@Component({
  selector: 'rkc-projects',
  imports: [RkcTranslationPipe, LucideAngularModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  public readonly USER_PROFILE = USER_PROFILE;
  public readonly ArrowIcon = ArrowRight;
}
