import { computed, Directive, input } from '@angular/core';
import { tv } from 'tailwind-variants';
import {
  NgpAccordion,
  NgpAccordionTrigger,
  NgpAccordionItem,
  NgpAccordionContent,
} from 'ng-primitives/accordion';

const accordionVariants = tv({
  slots: {
    accordion: '',
    accordionItem: 'border-b last:border-b-0',
    accordionTrigger:
      'ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all hover:underline focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&[data-open]>[uiIcon]]:rotate-180',
    accordionContent:
      'data-[closed]:animate-accordion-up data-[closed]:fill-mode-forwards data-[open]:animate-accordion-down data-[open]:fill-mode-forwards  overflow-hidden text-sm [&_:is(div)]:pb-4',
  },
});

const { accordion, accordionItem, accordionTrigger, accordionContent } =
  accordionVariants();

@Directive({
  selector: '[uiAccordion]',
  exportAs: 'uiAccordion',
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [
    {
      directive: NgpAccordion,
      inputs: [
        'ngpAccordionValue:uiAccordionValue',
        'ngpAccordionType:uiAccordionType',
        'ngpAccordionCollapsible:uiAccordionCollapsible',
        'ngpAccordionDisabled:uiAccordionDisabled',
      ],
      outputs: ['ngpAccordionValueChange: uiAccordionValueChange'],
    },
  ],
})
export class UiAccordion {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => accordion({ class: this.inputClass() }));
}

@Directive({
  selector: '[uiAccordionTrigger]',
  exportAs: 'uiAccordionTrigger',
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [NgpAccordionTrigger],
})
export class UiAccordionTrigger {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() =>
    accordionTrigger({ class: this.inputClass() }),
  );
}

@Directive({
  selector: '[uiAccordionItem]',
  exportAs: 'uiAccordionItem',
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [
    {
      directive: NgpAccordionItem,
      inputs: [
        'ngpAccordionItemValue:value',
        'ngpAccordionItemDisabled:disabled',
      ],
    },
  ],
})
export class UiAccordionItem {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => accordionItem({ class: this.inputClass() }));
}

@Directive({
  selector: '[uiAccordionContent]',
  exportAs: 'uiAccordionContent',
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [NgpAccordionContent],
})
export class UiAccordionContent {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() =>
    accordionContent({ class: this.inputClass() }),
  );
}
