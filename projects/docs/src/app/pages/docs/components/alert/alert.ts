import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { alertVariants } from './alert.variants';

@Component({
  selector: 'docs-alert',
  imports: [ComponentPreview],
  templateUrl: './alert.html'
})
export class Alert {
  alertVariants = alertVariants;

}
