import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { breadcrumbVariants, breadcrumbMeta } from './breadcrumb.variants';

@Component({
  selector: 'docs-breadcrumb',
  standalone: true,
  imports: [ComponentPreview],
  template: `
    <docs-component-preview
      [meta]="breadcrumbMeta"
      [variants]="breadcrumbVariants"
    >
    </docs-component-preview>
  `,
})
export class Breadcrumb {
  breadcrumbMeta = breadcrumbMeta;
  breadcrumbVariants = breadcrumbVariants;
}
