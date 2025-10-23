import { computed, Directive, input } from '@angular/core';
import { tv } from "tailwind-variants";
import { NgpRadioGroup, NgpRadioItem, NgpRadioIndicator } from 'ng-primitives/radio';

const radioGroupVariants = tv({
    slots: {
        root: 'grid gap-3',
        item: 'flex items-center space-x-2 cursor-pointer',
        radio: 'relative border-input text-primary data-[focus-visible]:border-ring data-[focus-visible]:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none data-[focus-visible]:ring-[3px] data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
        indicator: 'size-2 rounded-full absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 data-[checked]:bg-primary'
    }
});

const { root, item, radio, indicator } = radioGroupVariants();

@Directive({
    selector: '[uiRadioGroup]',
    exportAs: 'uiRadioGroup',
    host: {
        '[class]': 'computedClass()'
    },
    hostDirectives: [
        {
            directive: NgpRadioGroup,
            inputs: [
                'ngpRadioGroupValue: defaultValue',
                'ngpRadioGroupDisabled: disabled'
            ],
            outputs: [
                'ngpRadioGroupValueChange: defaultValueChange'
            ],
        },
    ],
})
export class UiRadioGroup {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => root({ class: this.inputClass() }));
}

@Directive({
    selector: '[uiRadioItem]',
    exportAs: 'uiRadioItem',
    host: {
        '[class]': 'computedClass()'
    },
    hostDirectives: [
        {
            directive: NgpRadioItem,
            inputs: [
                'ngpRadioItemValue: value',
                'ngpRadioItemDisabled: disabled'
            ],
        },
    ],
})
export class UiRadioItem {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => item({ class: this.inputClass() }));
}

@Directive({
    selector: '[uiRadio]',
    exportAs: 'uiRadio',
    host: {
        '[class]': 'computedClass()'
    },
    hostDirectives: [NgpRadioIndicator]
})
export class UiRadio {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => radio({ class: this.inputClass() }));
}

@Directive({
    selector: '[uiRadioIndicator]',
    exportAs: 'uiRadioIndicator',
    host: {
        '[class]': 'computedClass()'
    }
})
export class UiRadioIndicator {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => indicator({ class: this.inputClass() }));
}
