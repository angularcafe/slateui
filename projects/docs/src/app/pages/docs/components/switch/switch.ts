import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { switchVariants, switchMeta } from './switch.variants';

@Component({
  selector: 'docs-switch',
  imports: [ComponentPreview],
  template: `
    <docs-component-preview [meta]="switchMeta" [variants]="switchVariants">
    </docs-component-preview>
  `,
})
export class Switch {
  switchMeta = switchMeta;
  switchVariants = switchVariants;
}
