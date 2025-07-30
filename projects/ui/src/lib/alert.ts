import { computed, Directive, input } from '@angular/core';
import { tv, VariantProps } from 'tailwind-variants';

const alertVariants = tv({
    slots: {
        alert: 'relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>[uiAlertIcon]]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>[uiAlertIcon]]:gap-x-3 gap-y-0.5 items-start [&>[uiAlertIcon]]:size-4 [&>[uiAlertIcon]]:translate-y-0.5 [&>[uiAlertIcon]]:text-current',
        alertTitle: 'col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight',
        alertDescription: 'col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed'
    },
    variants: {
        variant: {
            default: "bg-background text-foreground border-border",
            destructive: "border-destructive/50 text-destructive  [&>[uiAlertIcon]]:text-current",
        },
    },
    defaultVariants: {
        variant: 'default'
    }
});

const { alert, alertTitle, alertDescription } = alertVariants();

type AlertVariants = VariantProps<typeof alertVariants>;

@Directive({
    selector: '[alert]',
    exportAs: 'alert',
    host: {
        '[class]': 'computedClass()'
    }
})
export class Alert {
    inputClass = input<string>('', { alias: 'class' });
    variant = input<AlertVariants['variant']>('default');
    computedClass = computed(() => alert({ variant: this.variant(), class: this.inputClass() }));
}

@Directive({
    selector: '[alertTitle]',
    exportAs: 'alertTitle',
    host: {
        '[class]': 'computedClass()'
    }
})
export class AlertTitle {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => alertTitle({ class: this.inputClass() }));
}

@Directive({
    selector: '[alertDescription]',
    exportAs: 'alertDescription',
    host: {
        '[class]': 'computedClass()'
    }
})
export class AlertDescription {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => alertDescription({ class: this.inputClass() }));
}