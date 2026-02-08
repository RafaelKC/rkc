import { Routes } from '@angular/router';
import { MainLayout } from '@rkc/components/main-layout/main-layout';
import { Links } from '@rkc/pages/links/links';

export const routes: Routes = [
  { path: '', component: MainLayout },
  { path: 'links', component: Links },
  { path: '**', redirectTo: '' },
];
