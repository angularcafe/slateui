import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { toggleVariants, toggleMeta } from './toggle.variants';

@Component({
  selector: 'docs-toggle',
  imports: [ComponentPreview],
  template: `
    <docs-component-preview [meta]="toggleMeta" [variants]="toggleVariants">
    </docs-component-preview>
  `,
})
export class Toggle {
  toggleMeta = toggleMeta;
  toggleVariants = toggleVariants;
}
