import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { tooltipVariants, tooltipMeta } from './tooltip.variants';

@Component({
  selector: 'docs-tooltip',
  imports: [ComponentPreview],
  template: `
    <docs-component-preview [meta]="tooltipMeta" [variants]="tooltipVariants">
    </docs-component-preview>
  `,
})
export class Tooltip {
  tooltipMeta = tooltipMeta;
  tooltipVariants = tooltipVariants;
}
