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
                loadComponent: () => import('./button/button').then(m => m.ButtonComponent)
            },
            {
                path: '',
                redirectTo: 'alert',
                pathMatch: 'full'
            }
        ]
    }

];
