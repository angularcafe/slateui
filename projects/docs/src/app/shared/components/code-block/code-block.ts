import { Component, input, signal } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCopy, lucideCheck } from '@ng-icons/lucide';

@Component({
  selector: 'docs-code-block',
  imports: [HighlightModule, NgIcon],
  viewProviders: [provideIcons({ lucideCopy, lucideCheck })],
  template: `
    <div class="relative group">
    <div class="rounded-xl bg-zinc-900">
      <button 
              class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-8 w-8 text-zinc-400 hover:text-white hover:bg-zinc-800 absolute top-2 right-2"
              [class.text-green-400]="copied()"
              (click)="copyCode()"
              [title]="copied() ? 'Copied!' : 'Copy code'"
            >
              <ng-icon [name]="copied() ? 'lucideCheck' : 'lucideCopy'" size="16"></ng-icon>
            </button>
      <pre class="overflow-x-auto whitespace-nowrap">
          <code class="whitespace-pre language-typescript" [class]="'language-' + language()" [highlight]="code()" [language]="language()"></code>
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