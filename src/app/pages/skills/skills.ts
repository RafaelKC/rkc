import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RkcTranslationPipe } from '@rkc/pipes/rkc-translation-pipe';
import { USER_PROFILE } from '@rkc/use_profile';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'rkc-skills',
  imports: [CommonModule, RkcTranslationPipe, LucideAngularModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  protected readonly USER_PROFILE = USER_PROFILE;
}
