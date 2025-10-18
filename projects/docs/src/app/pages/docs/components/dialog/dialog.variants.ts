import { Component } from '@angular/core';
import {
  UiDialog,
  UiDialogDescription,
  UiDialogFooter,
  UiDialogHeader,
  UiDialogOverlay,
  UiDialogTitle,
  UiDialogTrigger,
} from 'ui';
import { UiButton } from 'ui';
import {
  IVariant,
  IComponentMeta,
} from '@components/component-preview/component-preview';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';

@Component({
  selector: 'dialog-default-example',
  template: `
    <button uiButton variant="outline" [uiDialogTrigger]="dialog">
      Open Dialog
    </button>
    <ng-template #dialog let-close="close">
      <div uiDialogOverlay>
        <div uiDialog>
          <div uiDialogHeader>
            <h1 uiDialogTitle>Publish this article?</h1>
            <button uiButton variant="ghost" size="sm" (click)="close()">
              <ng-icon name="lucideX" size="18px"></ng-icon>
            </button>
          </div>
          <p uiDialogDescription>
            Are you sure you want to publish this article? This action is
            irreversible.
          </p>

          <div uiDialogFooter>
            <button (click)="close()" uiButton variant="secondary">
              Cancel
            </button>
            <button (click)="close()" uiButton>Confirm</button>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  providers: [provideIcons({ lucideX })],
  imports: [
    UiDialog,
    UiDialogHeader,
    UiDialogTitle,
    UiDialogDescription,
    UiDialogFooter,
    UiDialogTrigger,
    UiDialogOverlay,
    UiButton,
    NgIcon,
  ],
})
export class DialogDefaultExample {}

export const dialogMeta: IComponentMeta = {
  title: 'Dialog',
  description:
    'A window overlaid on either the primary window or another dialog window.',
  installation: {
    package: 'dialog',
    import: `import { UiDialog, UiDialogTrigger, UiDialogHeader, UiDialogTitle, UiDialogDescription, UiDialogFooter, UiDialogOverlay } from '@workspace/ui/directives/dialog';`,
    usage: `<button [uiDialogTrigger]="dialog">Open</button><ng-template #dialog let-close="close"><div uiDialogOverlay><div uiDialog>...</div></div></ng-template>`,
  },
  api: {
    props: [
      {
        name: 'uiDialogTrigger',
        type: 'TemplateRef',
        description: 'Template ref for dialog content.',
      },
      {
        name: 'uiDialogModal',
        type: 'boolean',
        description: 'Whether the dialog is modal.',
      },
      { name: 'class', type: 'string', description: 'Additional CSS classes.' },
    ],
  },
};

export const dialogVariants: IVariant[] = [
  {
    title: 'Default',
    description: 'Basic dialog with header, content, and footer.',
    code: `import { UiDialog, UiDialogTrigger, UiDialogHeader, UiDialogTitle, UiDialogDescription, UiDialogFooter, UiDialogOverlay } from '@workspace/ui/directives/dialog';
import { UiButton } from '@workspace/ui/directives/button';

@Component({
  selector: 'dialog-default-example',
  template: \`
    <button uiButton variant=\"outline\" [uiDialogTrigger]=\"dialog\">Open Dialog</button>
    <ng-template #dialog let-close=\"close\">
        <div uiDialogOverlay>
            <div uiDialog>
                <div uiDialogHeader>
                    <h1 uiDialogTitle>Publish this article?</h1>
                </div>
                <p uiDialogDescription>Are you sure you want to publish this article? This action is irreversible.</p>
                <div uiDialogFooter>
                    <button (click)=\"close()\" uiButton variant=\"secondary\">Cancel</button>
                    <button (click)=\"close()\" uiButton>Confirm</button>
                </div>
            </div>
        </div>
    </ng-template>
  \`,
  imports: [UiDialog, UiDialogHeader, UiDialogTitle, UiDialogDescription, UiDialogFooter, UiDialogTrigger, UiDialogOverlay, UiButton]
})
export class DialogDefaultExample {}`,
    component: DialogDefaultExample,
  },
];
