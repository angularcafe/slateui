import { Component, input, computed, untracked, effect } from '@angular/core';
import { Tab } from '@components/tab/tab';
import { Tabs } from '@components/tabs/tabs';
import { SafeHtmlPipe } from '../../pipes/safe-html-pipe';
import { DynamicRenderer, DynamicRendererConfig } from './dynamic-renderer';

export interface ComponentVariant {
  title: string;
  code: string;
  imports?: any[];
}

@Component({
  selector: 'docs-component-preview',
  imports: [Tabs, Tab, SafeHtmlPipe, DynamicRenderer],
  templateUrl: './component-preview.html'
})
export class ComponentPreview {
  title = input<string>();
  description = input<string>();
  variants = input<Array<ComponentVariant>>([]);

  shouldRenderDynamically(variant: ComponentVariant): boolean {
    return !!(variant.imports && variant.imports.length > 0);
  }

  getDynamicRendererConfig(variant: ComponentVariant): DynamicRendererConfig {
    return {
      template: variant.code,
      imports: variant.imports || []
    };
  }
}
