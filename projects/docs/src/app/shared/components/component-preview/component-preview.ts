import { NgComponentOutlet, NgTemplateOutlet } from '@angular/common';
import { Component, inject, Injector, input, signal, computed, TemplateRef, Type, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Tab } from '@components/tab/tab';
import { Tabs } from '@components/tabs/tabs';
import { CodeBlock } from '@components/code-block/code-block';

export interface IVariant {
  title: string;
  description?: string;
  code: string;
  template?: TemplateRef<unknown> | null;
  component?: Type<any>;
  props?: Record<string, any>;
  children?: string;
}

export interface IComponentMeta {
  title: string;
  description: string;
  installation?: {
    package?: string;
    import: string;
    usage: string;
  };
  api?: {
    props: Array<{
      name: string;
      type: string;
      default?: string;
      description: string;
      required?: boolean;
    }>;
    examples?: string[];
  };
}

// Angular 20 standalone component with modern features
@Component({
  selector: 'docs-component-preview',
  standalone: true,
  imports: [Tabs, Tab, NgTemplateOutlet, NgComponentOutlet, CodeBlock],
  templateUrl: './component-preview.html',
  host: {
    class: 'block',
  }
})
export class ComponentPreview {
  // Angular 20 signal-based inputs
  meta = input<IComponentMeta>();
  variants = input<IVariant[]>([]);
  
  // Injected dependencies using Angular 20 inject function
  private readonly injector = inject(Injector);
  private readonly platform = inject(PLATFORM_ID);
  
  // Computed signals for derived state
  protected readonly apiProps = computed(() => this.meta()?.api?.props || []);
  protected readonly hasVariants = computed(() => this.variants().length > 0);
  protected readonly hasInstallation = computed(() => Boolean(this.meta()?.installation));
  
  // State management with signals
  private readonly _clipboardSupported = signal<boolean>(false);
  
  constructor() {
    // Check clipboard support only in browser
    if (isPlatformBrowser(this.platform)) {
      this._clipboardSupported.set(Boolean(navigator.clipboard));
    }
  }

  createInjector(): Injector {
    return this.injector;
  }

  generateSlug(title: string): string {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  }

  // Enhanced copy functionality using modern Clipboard API
  async copyToClipboard(code: string): Promise<void> {
    if (!isPlatformBrowser(this.platform) || !this._clipboardSupported()) {
      return;
    }

    try {
      await navigator.clipboard.writeText(code);
      // Could emit a toast notification here
    } catch (error) {
      console.warn('Failed to copy to clipboard:', error);
      // Fallback to older method if needed
      this.fallbackCopyToClipboard(code);
    }
  }

  private fallbackCopyToClipboard(text: string): void {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
    } catch (error) {
      console.warn('Fallback copy failed:', error);
    }
    
    document.body.removeChild(textArea);
  }

  // Track component interactions for analytics (if needed)
  trackVariantView(variantTitle: string): void {
    // Could integrate with analytics service here
    console.debug('Variant viewed:', variantTitle);
  }
}
