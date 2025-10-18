import { Component } from "@angular/core";
import {
  UiAccordion,
  UiAccordionContent,
  UiAccordionItem,
  UiAccordionTrigger,
} from "ui";
import {
  IVariant,
  IComponentMeta,
} from "@components/component-preview/component-preview";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { lucideChevronDown } from "@ng-icons/lucide";

@Component({
  selector: "accordion-default-example",
  template: `
    <div uiAccordion uiAccordionType="single" uiAccordionCollapsible>
      <div uiAccordionItem value="item-1">
        <button uiAccordionTrigger>
          Is it accessible?
          <ng-icon uiIcon name="lucideChevronDown" size="16px"></ng-icon>
        </button>
        <div uiAccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </div>
      </div>
      <div uiAccordionItem value="item-2">
        <button uiAccordionTrigger>
          Is it unstyled?
          <ng-icon uiIcon name="lucideChevronDown" size="16px"></ng-icon>
        </button>
        <div uiAccordionContent>
          Yes. It's unstyled by default, giving you freedom over the look and
          feel.
        </div>
      </div>
    </div>
  `,
  providers: [provideIcons({ lucideChevronDown })],
  imports: [
    UiAccordion,
    UiAccordionItem,
    UiAccordionTrigger,
    UiAccordionContent,
    NgIcon,
  ],
  host: {
    class: "w-2/3 space-y-6 mx-auto",
  },
})
export class AccordionDefaultExample {
  onValueChange(value: any) {
    console.log(value);
  }
}

export const accordionMeta: IComponentMeta = {
  title: "Accordion",
  description: "A vertically stacked set of expandable content sections.",
  installation: {
    package: "accordion",
    import: `import { UiAccordion, UiAccordionItem, UiAccordionTrigger, UiAccordionContent } from '@workspace/ui/directives/accordion';`,
    usage: `<div uiAccordion uiAccordionType="single"><div uiAccordionItem value="item-1"><div uiAccordionTrigger>Header</div><div uiAccordionContent>Content</div></div></div>`,
  },
  api: {
    props: [
      {
        name: "uiAccordionType",
        type: '"single" | "multiple"',
        description: "Accordion behavior type.",
      },
      {
        name: "uiAccordionCollapsible",
        type: "boolean",
        description: "Allow closing the active item.",
      },
      {
        name: "uiAccordionValue",
        type: "string",
        description: "Accordion value (for controlled state).",
      },
      {
        name: "uiAccordionDisabled",
        type: "boolean",
        description: "Whether the accordion is disabled.",
      },
      { name: "class", type: "string", description: "Additional CSS classes." },
    ],
    outputs: [
      {
        name: "uiAccordionValueChange",
        type: "EventEmitter<any>",
        description: "Emitted when the accordion value changes.",
      },
    ],
  },
};

export const accordionVariants: IVariant[] = [
  {
    title: "Default",
    description: "Single collapsible accordion.",
    code: `import { UiAccordion, UiAccordionItem, UiAccordionTrigger, UiAccordionContent } from '@workspace/ui/directives/accordion';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';

@Component({
  selector: 'accordion-default-example',
  template: \`
    <div uiAccordion uiAccordionType=\"single\" uiAccordionCollapsible>
      <div uiAccordionItem value=\"item-1\">
        <div uiAccordionTrigger>
          Is it accessible?
          <ng-icon uiIcon name=\"lucideChevronDown\" size=\"16px\"></ng-icon>
        </div>
        <div uiAccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </div>
      </div>
      <div uiAccordionItem value=\"item-2\">
        <div uiAccordionTrigger>
          Is it unstyled?
          <ng-icon uiIcon name=\"lucideChevronDown\" size=\"16px\"></ng-icon>
        </div>
        <div uiAccordionContent>
          Yes. It's unstyled by default, giving you freedom over the look and feel.
        </div>
      </div>
    </div>
  \`,
  providers: [provideIcons({ lucideChevronDown })],
  imports: [UiAccordion, UiAccordionItem, UiAccordionTrigger, UiAccordionContent, NgIcon]
})
export class AccordionDefaultExample {}`,
    component: AccordionDefaultExample,
  },
];
