import { computed, Directive, input } from "@angular/core";
import { tv } from "tailwind-variants";
import { NgpInput } from "ng-primitives/input";

const inputVariants = tv({
    base: ["file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 md:text-sm",
        "data-[focus]:border-ring data-[focus]:ring-ring/50 data-[focus]:ring-[3px]",
        "aria-invalid:ring-destructive/20 [&.ng-invalid.ng-touched]:ring-destructive/20 [&.ng-invalid.ng-touched]:border-destructive dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"].join(' ')
});

@Directive({
    selector: 'input[uiInput]',
    exportAs: 'uiInput',
    host: {
        '[class]': 'computedClass()'
    },
    hostDirectives: [NgpInput],
})
export class UiInput {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => inputVariants({ class: this.inputClass() }));
}

