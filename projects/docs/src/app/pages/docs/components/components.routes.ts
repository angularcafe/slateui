import { Routes } from '@angular/router';
import { DocsLayout } from '../../../shared/layout/docs-layout/docs-layout';

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
            }
        ]
    }

];
