import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { toggleGroupVariants, toggleGroupMeta } from './toggle-group.variants';

@Component({
  selector: 'docs-toggle-group',
  imports: [ComponentPreview],
  template: `
    <docs-component-preview 
      [meta]="toggleGroupMeta" 
      [variants]="toggleGroupVariants">
    </docs-component-preview>
  `
})
export class ToggleGroup {
  toggleGroupMeta = toggleGroupMeta;
  toggleGroupVariants = toggleGroupVariants;
}

