import { computed, Directive, input } from "@angular/core";
import { tv } from "tailwind-variants";
import { NgpInput } from "ng-primitives/input";

const textareaVariants = tv({
    base: 'border-input placeholder:text-muted-foreground data-[focus]:border-ring data-[focus]:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none data-[focus]:ring-[3px] data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 md:text-sm [&[data-touched][data-invalid]]:ring-destructive/20 [&[data-touched][data-invalid]]:border-destructive'
});


@Directive({
    selector: 'textarea[uiTextarea]',
    exportAs: 'uiTextarea',
    host: {
        '[class]': 'computedClass()'
    },
    hostDirectives: [NgpInput],
})
export class UiTextarea {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => textareaVariants({ class: this.inputClass() }));
}

