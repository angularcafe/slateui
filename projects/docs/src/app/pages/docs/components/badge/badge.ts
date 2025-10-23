import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { badgeVariants, badgeMeta } from './badge.variants';

@Component({
  selector: 'docs-badge',
  imports: [ComponentPreview],
  template: `
    <docs-component-preview 
      [meta]="badgeMeta" 
      [variants]="badgeVariants">
    </docs-component-preview>
  `
})
export class Badge {
  badgeMeta = badgeMeta;
  badgeVariants = badgeVariants;
}

