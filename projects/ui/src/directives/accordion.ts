import { Component, computed, input } from '@angular/core';
import { tv } from 'tailwind-variants';
import { NgpAccordion, NgpAccordionTrigger, NgpAccordionItem, NgpAccordionContent } from 'ng-primitives/accordion';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';

const accordionVariants = tv({
    slots: {
        accordion: '',
        accordionItem: 'border-b last:border-b-0 block',
        accordionTrigger: 'w-full ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all hover:underline focus-visible:ring-4 focus-visible:outline-1 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&[data-open]>[uiIcon]]:rotate-180',
        accordionContent: 'block data-[closed]:animate-accordion-up data-[closed]:fill-mode-forwards data-[open]:animate-accordion-down data-[open]:fill-mode-forwards overflow-hidden text-sm',
    }
});

const { accordion, accordionItem, accordionTrigger, accordionContent } = accordionVariants();

@Component({
    selector: 'ui-accordion',
    exportAs: 'uiAccordion',
    host: {
        '[class]': 'computedClass()'
    },
    hostDirectives: [
        {
            directive: NgpAccordion,
            inputs: [
                'ngpAccordionValue:value',
                'ngpAccordionType:type',
                'ngpAccordionCollapsible:collapsible',
                'ngpAccordionDisabled:disabled'
            ],
            outputs: [
                'ngpAccordionValueChange: valueChange'
            ],
        },
    ],
    template: `<ng-content />`
})
export class UiAccordion {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => accordion({ class: this.inputClass() }));
}


@Component({
    selector: 'ui-accordion-trigger',
    exportAs: 'uiAccordionTrigger',
    imports: [NgIcon, NgpAccordionTrigger],
    providers: [provideIcons({ lucideChevronDown })],
    template: `<button type="button" ngpAccordionTrigger [class]="computedClass()">
        <ng-content />
        <ng-icon uiIcon name="lucideChevronDown" size="16px" class="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"></ng-icon>
    </button>`
})
export class UiAccordionTrigger {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => accordionTrigger({ class: this.inputClass() }));
}

@Component({
    selector: 'ui-accordion-item',
    exportAs: 'uiAccordionItem',
    host: {
        '[class]': 'computedClass()'
    },
    hostDirectives: [
        {
            directive: NgpAccordionItem,
            inputs: ['ngpAccordionItemValue:value', 'ngpAccordionItemDisabled:disabled'],
        },
    ],
    template: `<ng-content />`
})
export class UiAccordionItem {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => accordionItem({ class: this.inputClass() }));
}


@Component({
    selector: 'ui-accordion-content',
    exportAs: 'uiAccordionContent',
    host: {
        '[class]': 'computedClass()'
    },
    hostDirectives: [NgpAccordionContent],
    template: `<div class="pt-0 pb-4"><ng-content /></div>`
})
export class UiAccordionContent {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => accordionContent({ class: this.inputClass() }));
}