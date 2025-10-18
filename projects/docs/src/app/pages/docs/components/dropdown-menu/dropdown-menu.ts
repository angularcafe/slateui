import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import {
  dropdownMenuVariants,
  dropdownMenuMeta,
} from './dropdown-menu.variants';

@Component({
  selector: 'docs-dropdown-menu',
  imports: [ComponentPreview],
  template: `
    <docs-component-preview
      [meta]="dropdownMenuMeta"
      [variants]="dropdownMenuVariants"
    >
    </docs-component-preview>
  `,
})
export class DropdownMenu {
  dropdownMenuMeta = dropdownMenuMeta;
  dropdownMenuVariants = dropdownMenuVariants;
}
