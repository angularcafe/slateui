import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { checkboxVariants, checkboxMeta } from './checkbox.variants';

@Component({
  selector: 'docs-checkbox',
  standalone: true,
  imports: [ComponentPreview],
  template: `
    <docs-component-preview [meta]="checkboxMeta" [variants]="checkboxVariants">
    </docs-component-preview>
  `,
})
export class Checkbox {
  checkboxMeta = checkboxMeta;
  checkboxVariants = checkboxVariants;
}
