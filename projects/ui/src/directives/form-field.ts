import { computed, Directive, input } from "@angular/core";
import { tv } from "tailwind-variants";
import { NgpFormField, NgpLabel, NgpDescription, NgpError } from "ng-primitives/form-field";

const formFieldVariants = tv({
    slots: {
        field: '',
        label: 'flex items-center gap-2 text-sm leading-none font-medium select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 peer-data-[disabled]:cursor-not-allowed peer-data-[disabled]:opacity-50',
        description: 'text-sm text-muted-foreground',
        error: 'text-sm font-medium text-destructive'
    }
});

const { field, label, description, error } = formFieldVariants();

@Directive({
    selector: '[uiFormField]',
    exportAs: 'uiFormField',
    host: {
        '[class]': 'computedClass()'
    },
    hostDirectives: [NgpFormField],
})
export class UiFormField {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => field({ class: this.inputClass() }));
}

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

@Directive({
    selector: '[uiDescription]',
    exportAs: 'uiDescription',
    host: {
        '[class]': 'computedClass()'
    },
    hostDirectives: [NgpDescription],
})
export class UiDescription {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => description({ class: this.inputClass() }));
}

@Directive({
    selector: '[uiError]',
    exportAs: 'uiError',
    host: {
        '[class]': 'computedClass()'
    },
    hostDirectives: [NgpError],
})
export class UiError {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => error({ class: this.inputClass() }));
}

