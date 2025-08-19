import { computed, Directive, input } from '@angular/core';
import { tv } from 'tailwind-variants';

const badgeVariants = tv({
    slots: {
        card: 'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-border py-6 shadow-sm',
        cardHeader: '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        cardTitle: 'leading-none font-semibold',
        cardDescription: 'text-muted-foreground text-sm',
        cardAction: 'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        cardContent: 'px-6',
        cardFooter: 'flex items-center px-6 [.border-t]:pt-6'
    }
});

const { card, cardHeader, cardTitle, cardDescription, cardAction, cardContent, cardFooter } = badgeVariants();

@Directive({
    selector: '[uiCard]',
    exportAs: 'uiCard',
    host: {
        '[class]': 'computedClass()'
    }
})
export class UiCard {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => card({ class: this.inputClass() }));
}

@Directive({
    selector: '[uiCardHeader]',
    exportAs: 'uiCardHeader',
    host: {
        '[class]': 'computedClass()'
    }
})
export class UiCardHeader {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => cardHeader({ class: this.inputClass() }));
}

@Directive({
    selector: '[uiCardTitle]',
    exportAs: 'uiCardTitle',
    host: {
        '[class]': 'computedClass()'
    }
})
export class UiCardTitle {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => cardTitle({ class: this.inputClass() }));
}

@Directive({
    selector: '[uiCardDescription]',
    exportAs: 'uiCardDescription',
    host: {
        '[class]': 'computedClass()'
    }
})
export class UiCardDescription {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => cardDescription({ class: this.inputClass() }));
}

@Directive({
    selector: '[uiCardAction]',
    exportAs: 'uiCardAction',
    host: {
        '[class]': 'computedClass()'
    }
})
export class UiCardAction {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => cardAction({ class: this.inputClass() }));
}

@Directive({
    selector: '[uiCardContent]',
    exportAs: 'uiCardContent',
    host: {
        '[class]': 'computedClass()'
    }
})
export class UiCardContent {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => cardContent({ class: this.inputClass() }));
}

@Directive({
    selector: '[uiCardFooter]',
    exportAs: 'uiCardFooter',
    host: {
        '[class]': 'computedClass()'
    }
})
export class UiCardFooter {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => cardFooter({ class: this.inputClass() }));
}