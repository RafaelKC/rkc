import { Routes } from '@angular/router';
import { Links } from '@rkc/pages/links/links';
import { MainLayout } from '@rkc/pages/main-layout/main-layout';

export const routes: Routes = [
  { path: '', component: MainLayout },
  { path: 'links', component: Links },
];
