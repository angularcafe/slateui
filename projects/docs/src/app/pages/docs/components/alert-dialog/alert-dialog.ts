import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { alertDialogVariants, alertDialogMeta } from './alert-dialog.variants';

@Component({
  selector: 'docs-alert-dialog',
  imports: [ComponentPreview],
  template: `
    <docs-component-preview
      [meta]="alertDialogMeta"
      [variants]="alertDialogVariants"
    >
    </docs-component-preview>
  `,
})
export class AlertDialog {
  alertDialogMeta = alertDialogMeta;
  alertDialogVariants = alertDialogVariants;
}
