import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { tabsVariants, tabsMeta } from './tabs.variants';

@Component({
  selector: 'docs-tabs',
  standalone: true,
  imports: [ComponentPreview],
  template: `
    <docs-component-preview [meta]="tabsMeta" [variants]="tabsVariants">
    </docs-component-preview>
  `,
})
export class Tabs {
  tabsMeta = tabsMeta;
  tabsVariants = tabsVariants;
}
