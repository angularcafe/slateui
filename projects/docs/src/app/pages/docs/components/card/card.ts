import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { cardVariants, cardMeta } from './card.variants';

@Component({
  selector: 'docs-card',
  imports: [ComponentPreview],
  template: `
    <docs-component-preview [meta]="cardMeta" [variants]="cardVariants">
    </docs-component-preview>
  `,
})
export class Card {
  cardMeta = cardMeta;
  cardVariants = cardVariants;
}
