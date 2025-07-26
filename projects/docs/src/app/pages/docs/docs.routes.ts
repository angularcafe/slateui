import { Routes } from '@angular/router';
import { DocsLayout } from '../../shared/layout/docs-layout/docs-layout';

export const routes: Routes = [
    {
        path: '',
        component: DocsLayout,
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
            }
        ]
    }

];
