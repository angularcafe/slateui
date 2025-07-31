import { computed, Directive, input } from '@angular/core';
import { VariantProps } from 'tailwind-variants';
import { NgpButton } from "ng-primitives/button";
import { tv } from 'tailwind-variants';

const buttonVariants = tv({
    base: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 data-[focus-visible]:ring-4 data-[focus-visible]:outline-1 aria-invalid:focus-visible:ring-0 cursor-pointer",
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-sm data-[hover]:bg-primary/90 data-[press]:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-xs data-[hover]:bg-destructive/90 data-[press]:bg-destructive/90",
            outline: "border border-input bg-background shadow-xs data-[hover]:bg-accent data-[press]:bg-accent data-[hover]:text-accent-foreground data-[press]:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-xs data-[hover]:bg-secondary/80 data-[press]:bg-secondary/80",
            ghost: "data-[hover]:bg-accent data-[press]:bg-accent  data-[hover]:text-accent-foreground data-[press]:text-accent-foreground",
            link: "text-primary underline-offset-4 data-[hover]:underline data-[press]:underline",
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "h-10 w-10",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});

type ButtonVariants = VariantProps<typeof buttonVariants>;

@Directive({
    selector: '[uiButton]',
    exportAs: 'uiButton',
    hostDirectives: [
        {
            directive: NgpButton,
            inputs: ['disabled'],
        }
    ],
    host: {
        '[class]': 'computedClass()'
    }
})
export class UiButton {
    inputClass = input<string>('', { alias: 'class' });
    variant = input<ButtonVariants['variant']>('default');
    size = input<ButtonVariants['size']>('default');
    computedClass = computed(() => buttonVariants({ variant: this.variant(), size: this.size(), class: this.inputClass(), }));
}
