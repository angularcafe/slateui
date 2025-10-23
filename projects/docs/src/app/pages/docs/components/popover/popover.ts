import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { popoverVariants, popoverMeta } from './popover.variants';

@Component({
  selector: 'docs-popover',
  imports: [ComponentPreview],
  template: `
    <docs-component-preview 
      [meta]="popoverMeta" 
      [variants]="popoverVariants">
    </docs-component-preview>
  `
})
export class Popover {
  popoverMeta = popoverMeta;
  popoverVariants = popoverVariants;
}

