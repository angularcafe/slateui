import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { accordionVariants, accordionMeta } from './accordion.variants';

@Component({
  selector: 'docs-accordion',
  imports: [ComponentPreview],
  template: `
    <docs-component-preview
      [meta]="accordionMeta"
      [variants]="accordionVariants"
    >
    </docs-component-preview>
  `,
})
export class Accordion {
  accordionMeta = accordionMeta;
  accordionVariants = accordionVariants;
}
