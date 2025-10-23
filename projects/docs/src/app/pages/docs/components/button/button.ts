import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { buttonVariants, buttonMeta } from './button.variants';

@Component({
  selector: 'docs-button',
  imports: [ComponentPreview],
  template: `
    <docs-component-preview 
      [meta]="buttonMeta" 
      [variants]="buttonVariants">
    </docs-component-preview>
  `
})
export class Button {
  buttonMeta = buttonMeta;
  buttonVariants = buttonVariants;
}
