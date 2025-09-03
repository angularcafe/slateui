import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { skeletonVariants, skeletonMeta } from './skeleton.variants';

@Component({
  selector: 'docs-skeleton',
  imports: [ComponentPreview],
  template: `
    <docs-component-preview 
      [meta]="skeletonMeta" 
      [variants]="skeletonVariants">
    </docs-component-preview>
  `
})
export class Skeleton {
  skeletonMeta = skeletonMeta;
  skeletonVariants = skeletonVariants;
}
