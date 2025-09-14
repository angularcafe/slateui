import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { sheetVariants, sheetMeta } from './sheet.variants';

@Component({
  selector: 'docs-sheet',
  imports: [ComponentPreview],
  template: `
    <docs-component-preview 
      [meta]="sheetMeta" 
      [variants]="sheetVariants">
    </docs-component-preview>
  `
})
export class Sheet {
  sheetMeta = sheetMeta;
  sheetVariants = sheetVariants;
}
