import { computed, Directive, input } from "@angular/core";
import { tv } from "tailwind-variants";
import { NgpSeparator } from "ng-primitives/separator";

const separatorVariants = tv({
    slots: {
        separator: 'bg-border shrink-0 data-[orientation="horizontal"]:h-px data-[orientation="horizontal"]:w-full data-[orientation="vertical"]:h-full data-[orientation="vertical"]:w-px'
    }
});

const { separator } = separatorVariants();

@Directive({
    selector: '[uiSeparator]',
    exportAs: 'uiSeparator',
    host: {
        '[class]': 'computedClass()'
    },
    hostDirectives: [{ 
        directive: NgpSeparator,
        inputs: ['ngpSeparatorOrientation: uiSeparatorOrientation'] 
    }],
})
export class UiSeparator {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => separator({ class: this.inputClass() }));
}