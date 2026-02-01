import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RkcTranslationPipe } from '@rkc/pipes/rkc-translation-pipe';
import { USER_PROFILE } from '@rkc/use_profile';
import { Briefcase, ChevronRight, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'rkc-experience',
  imports: [RkcTranslationPipe, LucideAngularModule, CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  public readonly timelineIcon = Briefcase;
  public readonly bulletIcon = ChevronRight;

  public USER_PROFILE = USER_PROFILE;
}
