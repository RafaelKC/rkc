import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Contact } from '@rkc/pages/contact/contact';
import { Experience } from '@rkc/pages/experience/experience';
import { Home } from '@rkc/pages/home/home';
import { Projects } from '@rkc/pages/projects/projects';
import { Skills } from '@rkc/pages/skills/skills';

@Component({
  selector: 'rkc-main-layout',
  imports: [Skills, Experience, Home, Projects, Contact],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayout {}
