import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { buttonVariants } from './button.variants';

@Component({
  selector: 'docs-button',
  imports: [ComponentPreview],
  templateUrl: './button.html'
})
export class Button {
  buttonVariants = buttonVariants;

}
