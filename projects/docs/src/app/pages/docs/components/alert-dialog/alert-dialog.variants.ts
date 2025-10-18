import { Component } from '@angular/core';
import {
  UiAlertDialog,
  UiAlertDialogDescription,
  UiAlertDialogFooter,
  UiAlertDialogHeader,
  UiAlertDialogOverlay,
  UiAlertDialogTitle,
  UiAlertDialogTrigger,
  UiAlertDialogCancel,
  UiAlertDialogAction,
} from 'ui';
import { UiButton } from 'ui';
import {
  IVariant,
  IComponentMeta,
} from '@components/component-preview/component-preview';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideTriangleAlert } from '@ng-icons/lucide';

@Component({
  selector: 'alert-dialog-default-example',
  template: `
    <button uiButton variant="outline" [uiAlertDialogTrigger]="alertDialog">
      Open Alert Dialog
    </button>
    <ng-template #alertDialog let-close="close">
      <ui-alert-dialog-overlay>
        <ui-alert-dialog>
          <ui-alert-dialog-header>
            <ui-alert-dialog-title
              >Are you absolutely sure?</ui-alert-dialog-title
            >
            <ui-alert-dialog-description>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </ui-alert-dialog-description>
          </ui-alert-dialog-header>
          <ui-alert-dialog-footer>
            <ui-alert-dialog-cancel>
              <button (click)="close()" uiButton variant="outline">
                Cancel
              </button>
            </ui-alert-dialog-cancel>
            <ui-alert-dialog-action>
              <button (click)="close()" uiButton>Delete Account</button>
            </ui-alert-dialog-action>
          </ui-alert-dialog-footer>
        </ui-alert-dialog>
      </ui-alert-dialog-overlay>
    </ng-template>
  `,
  imports: [
    UiAlertDialog,
    UiAlertDialogHeader,
    UiAlertDialogTitle,
    UiAlertDialogDescription,
    UiAlertDialogFooter,
    UiAlertDialogTrigger,
    UiAlertDialogOverlay,
    UiAlertDialogCancel,
    UiAlertDialogAction,
    UiButton,
  ],
})
export class AlertDialogDefaultExample {}

@Component({
  selector: 'alert-dialog-destructive-example',
  template: `
    <button uiButton variant="destructive" [uiAlertDialogTrigger]="alertDialog">
      Delete Account
    </button>
    <ng-template #alertDialog let-close="close">
      <ui-alert-dialog-overlay>
        <ui-alert-dialog>
          <ui-alert-dialog-header>
            <div class="flex items-center gap-2">
              <span class="text-destructive">
                <ng-icon name="lucideTriangleAlert" size="20" />
              </span>
              <ui-alert-dialog-title>Delete Account</ui-alert-dialog-title>
            </div>
            <ui-alert-dialog-description>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </ui-alert-dialog-description>
          </ui-alert-dialog-header>
          <ui-alert-dialog-footer>
            <ui-alert-dialog-cancel>
              <button (click)="close()" uiButton variant="outline">
                Cancel
              </button>
            </ui-alert-dialog-cancel>
            <ui-alert-dialog-action>
              <button (click)="close()" uiButton variant="destructive">
                Delete Account
              </button>
            </ui-alert-dialog-action>
          </ui-alert-dialog-footer>
        </ui-alert-dialog>
      </ui-alert-dialog-overlay>
    </ng-template>
  `,
  providers: [provideIcons({ lucideTriangleAlert })],
  imports: [
    UiAlertDialog,
    UiAlertDialogHeader,
    UiAlertDialogTitle,
    UiAlertDialogDescription,
    UiAlertDialogFooter,
    UiAlertDialogTrigger,
    UiAlertDialogOverlay,
    UiAlertDialogCancel,
    UiAlertDialogAction,
    UiButton,
    NgIcon,
  ],
})
export class AlertDialogDestructiveExample {}

export const alertDialogMeta: IComponentMeta = {
  title: 'Alert Dialog',
  description:
    'A modal dialog that interrupts the user with important content and expects a response.',
  installation: {
    package: 'alert-dialog',
    import: `import { UiAlertDialog, UiAlertDialogTrigger, UiAlertDialogHeader, UiAlertDialogTitle, UiAlertDialogDescription, UiAlertDialogFooter, UiAlertDialogOverlay, UiAlertDialogCancel, UiAlertDialogAction } from '@workspace/ui/alert-dialog';`,
    usage: `<button [uiAlertDialogTrigger]="alertDialog">Open</button><ng-template #alertDialog let-close="close"><div uiAlertDialogOverlay><div uiAlertDialog>...</div></div></ng-template>`,
  },
  api: {
    props: [
      {
        name: 'uiAlertDialogTrigger',
        type: 'TemplateRef',
        description: 'Template ref for alert dialog content.',
      },
      {
        name: 'uiAlertDialogModal',
        type: 'boolean',
        description: 'Whether the alert dialog is modal.',
      },
      {
        name: 'uiAlertDialogCancel',
        type: 'Directive',
        description: 'Cancel button directive for the alert dialog.',
      },
      {
        name: 'uiAlertDialogAction',
        type: 'Directive',
        description: 'Action button directive for the alert dialog.',
      },
      { name: 'class', type: 'string', description: 'Additional CSS classes.' },
    ],
  },
};

export const alertDialogVariants: IVariant[] = [
  {
    title: 'Default',
    description:
      'Basic alert dialog with header, description, and action buttons.',
    code: `import { UiAlertDialog, UiAlertDialogTrigger, UiAlertDialogHeader, UiAlertDialogTitle, UiAlertDialogDescription, UiAlertDialogFooter, UiAlertDialogOverlay, UiAlertDialogCancel, UiAlertDialogAction } from '@workspace/ui/alert-dialog';
import { UiButton } from '@workspace/ui/button';

@Component({
  selector: 'alert-dialog-default-example',
  template: \`
    <button uiButton variant="outline" [uiAlertDialogTrigger]="alertDialog">Open Alert Dialog</button>
    <ng-template #alertDialog let-close="close">
        <ui-alert-dialog-overlay>
            <ui-alert-dialog>
                <ui-alert-dialog-header>
                    <ui-alert-dialog-title>Are you absolutely sure?</ui-alert-dialog-title>
                    <ui-alert-dialog-description>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </ui-alert-dialog-description>
                </ui-alert-dialog-header>
                <ui-alert-dialog-footer>
                    <ui-alert-dialog-cancel>
                      <button (click)="close()" uiButton variant="outline">Cancel</button>
                    </ui-alert-dialog-cancel>
                    <ui-alert-dialog-action>
                      <button (click)="close()" uiButton>Delete Account</button>
                    </ui-alert-dialog-action>
                </ui-alert-dialog-footer>
            </ui-alert-dialog>
        </ui-alert-dialog-overlay>
    </ng-template>
  \`,
  imports: [UiAlertDialog, UiAlertDialogHeader, UiAlertDialogTitle, UiAlertDialogDescription, UiAlertDialogFooter, UiAlertDialogTrigger, UiAlertDialogOverlay, UiAlertDialogCancel, UiAlertDialogAction, UiButton]
})
export class AlertDialogDefaultExample {}`,
    component: AlertDialogDefaultExample,
  },
  {
    title: 'Destructive',
    description:
      'Alert dialog with destructive action styling and warning icon.',
    code: `import { UiAlertDialog, UiAlertDialogTrigger, UiAlertDialogHeader, UiAlertDialogTitle, UiAlertDialogDescription, UiAlertDialogFooter, UiAlertDialogOverlay, UiAlertDialogCancel, UiAlertDialogAction } from '@workspace/ui/alert-dialog';
import { UiButton } from '@workspace/ui/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideTriangle } from '@ng-icons/lucide';

@Component({
  selector: 'alert-dialog-destructive-example',
  template: \`
    <button uiButton variant="destructive" [uiAlertDialogTrigger]="alertDialog">Delete Account</button>
    <ng-template #alertDialog let-close="close">
        <ui-alert-dialog-overlay>
            <ui-alert-dialog>
                <ui-alert-dialog-header>
                    <div class="flex items-center gap-2">
                      <span class="text-destructive">
                          <ng-icon name="lucideTriangleAlert" size="20" />
                      </span>
                      <ui-alert-dialog-title>Delete Account</ui-alert-dialog-title>
                    </div>
                    <ui-alert-dialog-description>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </ui-alert-dialog-description>
                </ui-alert-dialog-header>
                <ui-alert-dialog-footer>
                      <ui-alert-dialog-cancel>
                      <button (click)="close()" uiButton variant="outline">Cancel</button>
                    </ui-alert-dialog-cancel>
                    <ui-alert-dialog-action>
                      <button (click)="close()" uiButton variant="destructive">Delete Account</button>
                    </ui-alert-dialog-action>
                </ui-alert-dialog-footer>
            </ui-alert-dialog>
        </ui-alert-dialog-overlay>
    </ng-template>
  \`,
  providers: [provideIcons({ lucideTriangle })],
  imports: [UiAlertDialog, UiAlertDialogHeader, UiAlertDialogTitle, UiAlertDialogDescription, UiAlertDialogFooter, UiAlertDialogTrigger, UiAlertDialogOverlay, UiAlertDialogCancel, UiAlertDialogAction, UiButton, NgIcon]
})
export class AlertDialogDestructiveExample {}`,
    component: AlertDialogDestructiveExample,
  },
];
