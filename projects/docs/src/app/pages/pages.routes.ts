import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./landing/landing').then(m => m.Landing)
    },
    {
        path: 'docs',
        loadChildren: () => import('./docs/docs.routes').then(m => m.routes)
    }
];
