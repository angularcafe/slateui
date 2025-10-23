import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { separatorVariants, separatorMeta } from './separator.variants';

@Component({
  selector: 'docs-separator',
  imports: [ComponentPreview],
  template: `
    <docs-component-preview 
      [meta]="separatorMeta" 
      [variants]="separatorVariants">
    </docs-component-preview>
  `
})
export class Separator {
  separatorMeta = separatorMeta;
  separatorVariants = separatorVariants;
}

