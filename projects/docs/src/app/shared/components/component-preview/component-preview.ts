import { NgComponentOutlet, NgTemplateOutlet } from '@angular/common';
import { Component, inject, Injector, Input, input, signal, TemplateRef } from '@angular/core';
import { Tab } from '@components/tab/tab';
import { Tabs } from '@components/tabs/tabs';

export interface IVariant {
  title: string;
  code: string;
  template?: TemplateRef<unknown> | null;
}

@Component({
  selector: 'docs-component-preview',
  imports: [Tabs, Tab],
  templateUrl: './component-preview.html'
})
export class ComponentPreview {
  title = input<string>();
  description = input<string>();
  // variants = input<Array<IVariant>>();
  private _variants = signal<IVariant[]>([]);
  injector = inject(Injector);

  @Input()
  set variants(value: IVariant[]) {
    this._variants.set(value);
  }

  get variants() {
    return this._variants();
  }

  createInjector(): Injector {
    return this.injector;
  }
}
