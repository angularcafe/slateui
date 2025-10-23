import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { progressVariants, progressMeta } from './progress.variants';

@Component({
  selector: 'docs-progress',
  standalone: true,
  imports: [ComponentPreview],
  template: `
    <docs-component-preview 
      [meta]="progressMeta" 
      [variants]="progressVariants">
    </docs-component-preview>
  `
})
export class Progress {
  progressMeta = progressMeta;
  progressVariants = progressVariants;
} 