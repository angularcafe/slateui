import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { textareaVariants, textareaMeta } from './textarea.variants';

@Component({
  selector: 'docs-textarea',
  standalone: true,
  imports: [ComponentPreview],
  template: `
    <docs-component-preview [meta]="textareaMeta" [variants]="textareaVariants">
    </docs-component-preview>
  `,
})
export class Textarea {
  textareaMeta = textareaMeta;
  textareaVariants = textareaVariants;
}
