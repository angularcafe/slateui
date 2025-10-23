import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { labelVariants, labelMeta } from './label.variants';

@Component({
  selector: 'docs-label',
  standalone: true,
  imports: [ComponentPreview],
  template: `
    <docs-component-preview 
      [meta]="labelMeta" 
      [variants]="labelVariants">
    </docs-component-preview>
  `
})
export class Label {
  labelMeta = labelMeta;
  labelVariants = labelVariants;
} 