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
                path: 'breadcrumb',
                loadComponent: () => import('./breadcrumb/breadcrumb').then(m => m.Breadcrumb)
            },
            {
                path: 'card',
                loadComponent: () => import('./card/card').then(m => m.Card)
            },
            {
                path: 'accordion',
                loadComponent: () => import('./accordion/accordion').then(m => m.Accordion)
            },
            {
                path: 'dialog',
                loadComponent: () => import('./dialog/dialog').then(m => m.Dialog)
            },
            {
                path: 'tooltip',
                loadComponent: () => import('./tooltip/tooltip').then(m => m.Tooltip)
            },
            {
                path: 'popover',
                loadComponent: () => import('./popover/popover').then(m => m.Popover)
            },
            {
                path: 'separator',
                loadComponent: () => import('./separator/separator').then(m => m.Separator)
            },
            {
                path: 'tabs',
                loadComponent: () => import('./tabs/tabs').then(m => m.Tabs)
            },
            {
                path: 'progress',
                loadComponent: () => import('./progress/progress').then(m => m.Progress)
            },
            {
                path: 'label',
                loadComponent: () => import('./label/label').then(m => m.Label)
            },
            {
                path: 'table',
                loadComponent: () => import('./table/table').then(m => m.Table)
            },
            {
                path: 'dropdown-menu',
                loadComponent: () => import('./dropdown-menu/dropdown-menu').then(m => m.DropdownMenu)
            },
            {
                path: '',
                redirectTo: 'alert',
                pathMatch: 'full'
            }
        ]
    }

];
