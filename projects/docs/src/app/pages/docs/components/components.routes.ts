import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'alert',
        loadComponent: () => import('./alert/alert').then((m) => m.Alert),
      },
      {
        path: 'button',
        loadComponent: () => import('./button/button').then((m) => m.Button),
      },
      {
        path: 'avatar',
        loadComponent: () => import('./avatar/avatar').then((m) => m.Avatar),
      },
      {
        path: 'badge',
        loadComponent: () => import('./badge/badge').then((m) => m.Badge),
      },
      {
        path: 'breadcrumb',
        loadComponent: () =>
          import('./breadcrumb/breadcrumb').then((m) => m.Breadcrumb),
      },
      {
        path: 'card',
        loadComponent: () => import('./card/card').then((m) => m.Card),
      },
      {
        path: 'checkbox',
        loadComponent: () =>
          import('./checkbox/checkbox').then((m) => m.Checkbox),
      },
      {
        path: 'accordion',
        loadComponent: () =>
          import('./accordion/accordion').then((m) => m.Accordion),
      },
      {
        path: 'dialog',
        loadComponent: () => import('./dialog/dialog').then((m) => m.Dialog),
      },
      {
        path: 'sheet',
        loadComponent: () => import('./sheet/sheet').then((m) => m.Sheet),
      },
      {
        path: 'alert-dialog',
        loadComponent: () =>
          import('./alert-dialog/alert-dialog').then((m) => m.AlertDialog),
      },
      {
        path: 'tooltip',
        loadComponent: () => import('./tooltip/tooltip').then((m) => m.Tooltip),
      },
      {
        path: 'popover',
        loadComponent: () => import('./popover/popover').then((m) => m.Popover),
      },
      {
        path: 'separator',
        loadComponent: () =>
          import('./separator/separator').then((m) => m.Separator),
      },
      {
        path: 'tabs',
        loadComponent: () => import('./tabs/tabs').then((m) => m.Tabs),
      },
      {
        path: 'progress',
        loadComponent: () =>
          import('./progress/progress').then((m) => m.Progress),
      },
      {
        path: 'label',
        loadComponent: () => import('./label/label').then((m) => m.Label),
      },
      {
        path: 'input',
        loadComponent: () => import('./input/input').then((m) => m.Input),
      },
      {
        path: 'textarea',
        loadComponent: () =>
          import('./textarea/textarea').then((m) => m.Textarea),
      },
      {
        path: 'table',
        loadComponent: () => import('./table/table').then((m) => m.Table),
      },
      {
        path: 'dropdown-menu',
        loadComponent: () =>
          import('./dropdown-menu/dropdown-menu').then((m) => m.DropdownMenu),
      },
      {
        path: 'toggle',
        loadComponent: () => import('./toggle/toggle').then((m) => m.Toggle),
      },
      {
        path: 'toggle-group',
        loadComponent: () =>
          import('./toggle-group/toggle-group').then((m) => m.ToggleGroup),
      },
      {
        path: 'skeleton',
        loadComponent: () =>
          import('./skeleton/skeleton').then((m) => m.Skeleton),
      },
      {
        path: 'switch',
        loadComponent: () => import('./switch/switch').then((m) => m.Switch),
      },
      {
        path: 'radio-group',
        loadComponent: () =>
          import('./radio-group/radio-group').then((m) => m.RadioGroup),
      },
      {
        path: '',
        redirectTo: 'alert',
        pathMatch: 'full',
      },
    ],
  },
];
