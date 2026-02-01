import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { USER_PROFILE } from '@rkc/use_profile';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'rkc-links',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './links.html',
  styleUrl: './links.scss',
})
export class Links {
  public readonly links = signal(USER_PROFILE.socialLinks.filter((l) => l.useOnLinks));
}
