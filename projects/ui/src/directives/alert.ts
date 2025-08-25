import { computed, Directive, input } from '@angular/core';
import { tv, VariantProps } from 'tailwind-variants';

const alertVariants = tv({
    slots: {
        alert: 'relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>[uiIcon]]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>[uiIcon]]:gap-x-3 gap-y-0.5 items-start [&>[uiIcon]]:size-4 [&>[uiIcon]]:translate-y-0.5 [&>[uiIcon]]:text-current',
        alertTitle: 'col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight',
        alertDescription: 'col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed'
    },
    variants: {
        variant: {
            default: { alert: 'bg-background text-foreground' },
            destructive: { alert: 'border-destructive/50 text-destructive [&>[uiIcon]]:text-current' },
        },
    },
    defaultVariants: {
        variant: 'default'
    }
});

const { alert, alertTitle, alertDescription } = alertVariants();

type AlertVariants = VariantProps<typeof alertVariants>;

@Directive({
    selector: '[uiAlert]',
    exportAs: 'uiAlert',
    host: {
        '[class]': 'computedClass()'
    }
})
export class UiAlert {
    inputClass = input<string>('', { alias: 'class' });
    variant = input<AlertVariants['variant']>('default');
    computedClass = computed(() => alert({ variant: this.variant(), class: this.inputClass() }));
}

@Directive({
    selector: '[uiAlertTitle]',
    exportAs: 'uiAlertTitle',
    host: {
        '[class]': 'computedClass()'
    }
})
export class UiAlertTitle {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => alertTitle({ class: this.inputClass() }));
}

@Directive({
    selector: '[uiAlertDescription]',
    exportAs: 'uiAlertDescription',
    host: {
        '[class]': 'computedClass()'
    }
})
export class UiAlertDescription {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => alertDescription({ class: this.inputClass() }));
}