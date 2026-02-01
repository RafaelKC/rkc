import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { USER_PROFILE } from '@rkc/use_profile';
import { ArrowRight, Code, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'rkc-home',
  imports: [CommonModule, LucideAngularModule, TranslateModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  public readonly ArrowRight = ArrowRight;
  public readonly CodeIcon = Code;
  public readonly USER_PROFILE = USER_PROFILE;

  public readonly isAvailable = signal<boolean>(false);

  public readonly yearsOfExperience = computed(() => {
    const startDate = this.USER_PROFILE.careerStart;
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();
    const m = currentDate.getMonth() - startDate.getMonth();

    if (m < 0 || (m === 0 && currentDate.getDate() < startDate.getDate())) {
      years--;
    }

    return years;
  });

  public scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
