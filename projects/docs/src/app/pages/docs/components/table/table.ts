import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { tableVariants, tableMeta } from './table.variants';

@Component({
  selector: 'docs-table',
  standalone: true,
  imports: [ComponentPreview],
  template: `
    <docs-component-preview [meta]="tableMeta" [variants]="tableVariants">
    </docs-component-preview>
  `,
})
export class Table {
  tableMeta = tableMeta;
  tableVariants = tableVariants;
}
