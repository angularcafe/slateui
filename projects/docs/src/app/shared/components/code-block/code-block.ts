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
      <div class="rounded-lg border bg-zinc-950 dark:bg-zinc-900">
        <div class="flex h-12 items-center justify-between px-4 border-b border-zinc-800">
          <div class="flex items-center space-x-2">
            <div class="h-3 w-3 rounded-full bg-red-500"></div>
            <div class="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div class="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <button 
            class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-8 w-8 text-zinc-400 hover:text-white hover:bg-zinc-800"
            [class.text-green-400]="copied()"
            (click)="copyCode()"
            [title]="copied() ? 'Copied!' : 'Copy code'"
          >
            <ng-icon [name]="copied() ? 'lucideCheck' : 'lucideCopy'" size="16"></ng-icon>
          </button>
        </div>
        <div class="overflow-auto">
          <pre class="p-4 text-sm leading-relaxed"><code class="whitespace-pre text-zinc-50" [class]="'language-' + language()" [highlight]="code()" [language]="language()"></code></pre>
        </div>
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