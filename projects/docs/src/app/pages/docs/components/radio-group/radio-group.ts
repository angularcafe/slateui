import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { radioGroupVariants, radioGroupMeta } from './radio-group.variants';

@Component({
  selector: 'docs-radio-group',
  standalone: true,
  imports: [ComponentPreview],
  template: `
    <docs-component-preview 
      [meta]="radioGroupMeta" 
      [variants]="radioGroupVariants">
    </docs-component-preview>
  `
})
export class RadioGroup {
  radioGroupMeta = radioGroupMeta;
  radioGroupVariants = radioGroupVariants;
}
