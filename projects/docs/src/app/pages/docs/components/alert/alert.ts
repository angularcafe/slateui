import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { alertVariants, alertMeta } from './alert.variants';

@Component({
  selector: 'docs-alert',
  imports: [ComponentPreview],
  template: `
    <docs-component-preview [meta]="alertMeta" [variants]="alertVariants">
    </docs-component-preview>
  `,
})
export class Alert {
  alertMeta = alertMeta;
  alertVariants = alertVariants;
}
