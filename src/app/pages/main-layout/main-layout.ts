import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Contact } from '../contact/contact';
import { Experience } from '../experience/experience';
import { Home } from '../home/home';
import { Projects } from '../projects/projects';
import { Skills } from '../skills/skills';

@Component({
  selector: 'rkc-main-layout',
  imports: [Skills, Experience, Home, Projects, Contact],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayout {}
