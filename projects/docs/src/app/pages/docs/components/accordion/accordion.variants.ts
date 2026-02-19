import { Component } from '@angular/core';
import { UiAccordion, UiAccordionContent, UiAccordionItem, UiAccordionTrigger } from 'ui';
import { IVariant, IComponentMeta } from '@components/component-preview/component-preview';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';

@Component({
  selector: 'accordion-default-example',
  template: `
    <ui-accordion type="multiple" collapsible>
      <ui-accordion-item value="item-1">
        <ui-accordion-trigger>
          Is it accessible?
        </ui-accordion-trigger>
        <ui-accordion-content>
          Yes. It adheres to the WAI-ARIA design pattern.
        </ui-accordion-content>
      </ui-accordion-item>
      <ui-accordion-item value="item-2">
        <ui-accordion-trigger>
          Is it unstyled?
        </ui-accordion-trigger>
        <ui-accordion-content>
          Yes. It's unstyled by default, giving you freedom over the look and feel.
        </ui-accordion-content>
      </ui-accordion-item>
    </ui-accordion>
  `,
  imports: [UiAccordion, UiAccordionItem, UiAccordionTrigger, UiAccordionContent],
  host: {
    class: 'w-2/3 space-y-6 mx-auto'
  }
})
export class AccordionDefaultExample {
  onValueChange(value: any) {
    console.log(value);
  }
}

export const accordionMeta: IComponentMeta = {
  title: 'Accordion',
  description: 'A vertically stacked set of expandable content sections.',
  installation: {
    package: 'accordion',
    import: `import { UiAccordion, UiAccordionItem, UiAccordionTrigger, UiAccordionContent } from '@workspace/ui/directives/accordion';`,
    usage: `<ui-accordion type="single" collapsible>
  <ui-accordion-item value="item-1">
    <ui-accordion-trigger>Header</ui-accordion-trigger>
    <ui-accordion-content>Content</ui-accordion-content>
  </ui-accordion-item>
</ui-accordion>`
  },
  api: {
    props: [
      { name: 'type', type: '"single" | "multiple"', description: 'Accordion behavior type.' },
      { name: 'collapsible', type: 'boolean', description: 'Allow closing the active item.' },
      { name: 'value', type: 'string', description: 'Accordion value (for controlled state).' },
      { name: 'disabled', type: 'boolean', description: 'Whether the accordion is disabled.' },
      { name: 'class', type: 'string', description: 'Additional CSS classes.' }
    ],
    outputs: [
      { name: 'valueChange', type: 'EventEmitter<any>', description: 'Emitted when the accordion value changes.' }
    ]
  }
};

export const accordionVariants: IVariant[] = [
  {
    title: 'Default',
    description: 'Single collapsible accordion.',
    code: `import { UiAccordion, UiAccordionItem, UiAccordionTrigger, UiAccordionContent } from '@workspace/ui/directives/accordion';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'accordion-default-example',
  template: \`
    <ui-accordion type="multiple" collapsible>
      <ui-accordion-item value="item-1">
        <ui-accordion-trigger>
          Is it accessible?
        </ui-accordion-trigger>
        <ui-accordion-content>
          Yes. It adheres to the WAI-ARIA design pattern.
        </ui-accordion-content>
      </ui-accordion-item>
      <ui-accordion-item value="item-2">
        <ui-accordion-trigger>
          Is it unstyled?
        </ui-accordion-trigger>
        <ui-accordion-content>
          Yes. It's unstyled by default, giving you freedom over the look and feel.
        </ui-accordion-content>
      </ui-accordion-item>
    </ui-accordion>
  \`,
  imports: [UiAccordion, UiAccordionItem, UiAccordionTrigger, UiAccordionContent]
})
export class AccordionDefaultExample {
  onValueChange(value: any) {
    console.log(value);
  }
}`,
    component: AccordionDefaultExample
  }
];

