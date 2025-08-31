import { computed, Directive, input } from "@angular/core";
import { tv } from "tailwind-variants";
import { NgpCheckbox } from "ng-primitives/checkbox";

const checkboxVariants = tv({
    base: "peer border-input dark:bg-input/30 data-[checked]:bg-primary data-[checked]:text-primary-foreground dark:data-[checked]:bg-primary data-[checked]:border-primary data-[focus-visible]:border-ring data-[focus-visible]:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none data-[focus-visible]:ring-[3px] data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 flex items-center justify-center text-current transition-none"
});

@Directive({
    selector: '[uiCheckbox]',
    exportAs: 'uiCheckbox',
    host: {
        '[class]': 'computedClass()'
    },
    hostDirectives: [{
        directive: NgpCheckbox,
        inputs: [
            'ngpCheckboxChecked: uiCheckboxChecked',
            'ngpCheckboxIndeterminate: uiCheckboxIndeterminate',
            'ngpCheckboxRequired: required',
            'ngpCheckboxDisabled: disabled',
        ],
        outputs: [
            'ngpCheckboxCheckedChange: uiCheckboxCheckedChange',
            'ngpCheckboxIndeterminateChange: uiCheckboxIndeterminateChange',
        ],
    }],
})
export class UiCheckbox {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => checkboxVariants({ class: this.inputClass() }));
}

