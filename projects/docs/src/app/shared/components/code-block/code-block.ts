import { Component, input, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCopy, lucideCheck } from '@ng-icons/lucide';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { UiButton } from 'ui';

@Component({
  selector: 'docs-code-block',
  imports: [Highlight, NgIcon, HighlightLineNumbers, UiButton],
  viewProviders: [provideIcons({ lucideCopy, lucideCheck })],
  template: `
    <div class="relative group">
    <div class="rounded-xl max-h-[400px] overflow-y-auto bg-muted">
      <button uiButton variant="outline" size="icon"
              class="absolute top-2 right-2"
              (click)="copyCode()"
              [title]="copied() ? 'Copied!' : 'Copy code'">
              <ng-icon [name]="copied() ? 'lucideCheck' : 'lucideCopy'" size="16"></ng-icon>
            </button>
      <pre class="overflow-x-auto whitespace-nowrap">
          <code class="whitespace-pre language-typescript" [class]="'language-' + language()" [highlight]="code()" [language]="language()" lineNumbers></code>
      </pre>
    </div>
      
    </div>
  `
})
export class CodeBlock {
  code = input.required<string>();
  language = input<string>('html');
  copied = signal(false);

  async copyCode() {
    try {
      await navigator.clipboard.writeText(this.code());
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  }
}