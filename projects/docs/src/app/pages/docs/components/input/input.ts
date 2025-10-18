import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { inputVariants, inputMeta } from './input.variants';

@Component({
  selector: 'docs-input',
  imports: [ComponentPreview],
  template: `
    <docs-component-preview [meta]="inputMeta" [variants]="inputVariants">
    </docs-component-preview>
  `,
})
export class Input {
  inputMeta = inputMeta;
  inputVariants = inputVariants;
}
