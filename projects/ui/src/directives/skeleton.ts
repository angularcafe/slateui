import { computed, Directive, input } from "@angular/core";
import { tv } from "tailwind-variants";

const skeletonVariants = tv({
    slots: {
        skeleton: 'bg-accent animate-pulse rounded-md'
    }
});

const { skeleton } = skeletonVariants();

@Directive({
    selector: '[uiSkeleton]',
    exportAs: 'uiSkeleton',
    host: {
        '[class]': 'computedClass()'
    }
})
export class UiSkeleton {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => skeleton({ class: this.inputClass() }));
}