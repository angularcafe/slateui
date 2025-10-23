import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { dialogVariants, dialogMeta } from './dialog.variants';

@Component({
  selector: 'docs-dialog',
  imports: [ComponentPreview],
  template: `
    <docs-component-preview 
      [meta]="dialogMeta" 
      [variants]="dialogVariants">
    </docs-component-preview>
  `
})
export class Dialog {
  dialogMeta = dialogMeta;
  dialogVariants = dialogVariants;
}

