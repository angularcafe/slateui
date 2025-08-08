import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'alert',
                loadComponent: () => import('./alert/alert').then(m => m.Alert)
            },
            {
                path: 'button',
                loadComponent: () => import('./button/button').then(m => m.Button)
            },
            {
                path: 'avatar',
                loadComponent: () => import('./avatar/avatar').then(m => m.Avatar)
            },
            {
                path: 'badge',
                loadComponent: () => import('./badge/badge').then(m => m.Badge)
            },
            {
                path: 'card',
                loadComponent: () => import('./card/card').then(m => m.Card)
            },
            {
                path: '',
                redirectTo: 'alert',
                pathMatch: 'full'
            }
        ]
    }

];
