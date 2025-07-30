import { NgTemplateOutlet } from '@angular/common';
import { Component, input, TemplateRef } from '@angular/core';
import { Tab } from '@components/tab/tab';
import { Tabs } from '@components/tabs/tabs';

export interface IVariant {
  title: string;
  code: string;
  template?: TemplateRef<unknown> | null;
}

@Component({
  selector: 'docs-component-preview',
  imports: [Tabs, Tab, NgTemplateOutlet],
  templateUrl: './component-preview.html'
})
export class ComponentPreview {
  title = input<string>();
  description = input<string>();
  variants = input<Array<IVariant>>();
}
