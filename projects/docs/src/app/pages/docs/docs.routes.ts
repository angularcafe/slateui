import { Routes } from '@angular/router';
import { Docs } from './docs';

export const routes: Routes = [
    {
        path: '',
        component: Docs,
        children: [
            {
                path: 'introduction',
                loadComponent: () => import('./introduction/introduction').then(m => m.Introduction)
            },
            {
                path: 'installation',
                loadComponent: () => import('./installation/installation').then(m => m.Installation)
            },
            {
                path: 'components',
                loadChildren: () => import('./components/components.routes').then(m => m.routes)
            },
            {
                path: '',
                redirectTo: 'introduction',
                pathMatch: 'full'
            }
        ]
    }

];
