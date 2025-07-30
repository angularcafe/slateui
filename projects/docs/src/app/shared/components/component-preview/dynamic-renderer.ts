import { Component, input, OnDestroy, inject, createComponent, effect, Injector, EnvironmentInjector, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ElementRef } from '@angular/core';

export interface DynamicRendererConfig {
  template: string;
  imports: any[];
}

@Component({
  selector: 'docs-dynamic-renderer',
  template: `<div #container ngSkipHydration></div>`,
  standalone: true,
  imports: [CommonModule]
})
export class DynamicRenderer implements OnDestroy {
  config = input<DynamicRendererConfig>();

  private container: HTMLElement = inject(ElementRef).nativeElement;
  private environmentInjector: EnvironmentInjector = inject(EnvironmentInjector);
  private injector: Injector = inject(Injector);
  private platformId: Object = inject(PLATFORM_ID);
  private componentRef: any = null;

  constructor() {
    effect(() => {
      const config = this.config();
      if (config && isPlatformBrowser(this.platformId)) {
        // Use setTimeout to ensure proper client-side rendering
        setTimeout(() => {
          this.renderTemplate(config);
        }, 0);
      }
    });
  }

  private renderTemplate(config: DynamicRendererConfig) {
    this.clearComponent();

    try {
      // Create dynamic component with the provided template and imports
      @Component({
        template: config.template,
        standalone: true,
        imports: [CommonModule, ...config.imports]
      })
      class DynamicComponent {}

      // Create component instance using stored injectors
      this.componentRef = createComponent(DynamicComponent, {
        environmentInjector: this.environmentInjector,
        elementInjector: this.injector
      });

      // Append to container
      this.container.appendChild(this.componentRef.location.nativeElement);
      this.componentRef.changeDetectorRef.detectChanges();

    } catch (error) {
      console.error('Error rendering dynamic template:', error);
      // Fallback to HTML rendering if component creation fails
      this.container.innerHTML = config.template;
    }
  }

  private clearComponent() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
    this.container.innerHTML = '';
  }

  ngOnDestroy() {
    this.clearComponent();
  }
} 