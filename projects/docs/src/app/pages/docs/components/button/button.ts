import { afterNextRender, Component, TemplateRef, viewChild, ViewContainerRef } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { buttonVariants } from './button.variants';
import { Button } from 'ui';

@Component({
  selector: 'docs-button',
  imports: [ComponentPreview, Button],
  templateUrl: './button.html'
})
export class ButtonComponent {
  defaultTemplate = viewChild<TemplateRef<unknown>>('defaultTemplate');
  secondaryTemplate = viewChild<TemplateRef<unknown>>('secondaryTemplate');
  destructiveTemplate = viewChild<TemplateRef<unknown>>('destructiveTemplate');

  // defaultTemplate = viewChild('defaultTemplate', { read: ViewContainerRef });
  // secondaryTemplate = viewChild('secondaryTemplate', { read: ViewContainerRef });
  // destructiveTemplate = viewChild('destructiveTemplate', { read: ViewContainerRef });

  buttonVariants: any[] = [
    {
      title: 'Default',
      code: `<button button>Button</button>`,
      template: ''
    },
    {
      title: 'Outline',
      code: `<button button variant="outline">Outline</button>`,
      template: ''
    },
    {
      title: 'Destructive',
      code: `<button button variant="destructive">Delete</button>`,
      template: ''
    },
  ];

  constructor() {
    afterNextRender(() => {
      this.buttonVariants.forEach(variant => {
        // const template: any = this[variant.template];
        const defaultTemplate = this.defaultTemplate();
        const secondaryTemplate = this.secondaryTemplate();
        const destructiveTemplate = this.destructiveTemplate();
        switch (variant.title) {
          case 'Default':
            variant.template = defaultTemplate || null;
            break;
          case 'Outline':
            variant.template = secondaryTemplate || null;
            break;
          case 'Destructive':
            variant.template = destructiveTemplate || null;
            break;
        }
      })
    })
  }

}
