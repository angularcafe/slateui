import { computed, Directive, input } from "@angular/core";
import { tv } from "tailwind-variants";
import { NgpLabel } from "ng-primitives/form-field";

const labelVariants = tv({
    slots: {
        label: 'flex items-center gap-2 text-sm leading-none font-medium select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 peer-data-[disabled]:cursor-not-allowed peer-data-[disabled]:opacity-50'
    }
});

const { label } = labelVariants();

@Directive({
    selector: '[uiLabel]',
    exportAs: 'uiLabel',
    host: {
        '[class]': 'computedClass()'
    },
    hostDirectives: [NgpLabel],
})
export class UiLabel {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => label({ class: this.inputClass() }));
}