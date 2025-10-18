import { Routes } from '@angular/router';
import { Docs } from './docs';

export const routes: Routes = [
  {
    path: '',
    component: Docs,
    children: [
      {
        path: 'introduction',
        loadComponent: () =>
          import('./introduction/introduction').then((m) => m.Introduction),
      },
      {
        path: 'installation',
        loadComponent: () =>
          import('./installation/installation').then((m) => m.Installation),
      },
      {
        path: 'theming',
        loadComponent: () => import('./theming/theming').then((m) => m.Theming),
      },
      {
        path: 'dark-mode',
        loadComponent: () =>
          import('./dark-mode/dark-mode').then((m) => m.DarkMode),
      },
      {
        path: 'cli',
        loadComponent: () => import('./cli/cli').then((m) => m.Cli),
      },
      {
        path: 'components',
        loadChildren: () =>
          import('./components/components.routes').then((m) => m.routes),
      },
      {
        path: '',
        redirectTo: 'introduction',
        pathMatch: 'full',
      },
    ],
  },
];
