import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { avatarVariants, avatarMeta } from './avatar.variants';

@Component({
  selector: 'docs-avatar',
  imports: [ComponentPreview],
  template: `
    <docs-component-preview 
      [meta]="avatarMeta" 
      [variants]="avatarVariants">
    </docs-component-preview>
  `
})
export class Avatar {
  avatarMeta = avatarMeta;
  avatarVariants = avatarVariants;
}

