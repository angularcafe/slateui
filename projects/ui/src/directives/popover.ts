import { computed, Directive, effect, input, TemplateRef } from "@angular/core";
import { tv } from "tailwind-variants";
import { injectPopoverTriggerState, NgpPopover, NgpPopoverTrigger } from "ng-primitives/popover";

const popoverVariants = tv({
    base: 'absolute bg-popover text-popover-foreground data-[enter]:animate-in data-[exit]:animate-out data-[exit]:fade-out-0 data-[enter]:fade-in-0 data-[exit]:zoom-out-95 data-[enter]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--ngp-popover-transform-origin) rounded-md border p-4 shadow-md outline-hidden'
});

@Directive({
    selector: '[uiPopover]',
    exportAs: 'uiPopover',
    host: {
        '[class]': 'computedClass()'
    },
    hostDirectives: [NgpPopover],
})
export class UiPopover {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => popoverVariants({ class: this.inputClass() }));
}

@Directive({
    selector: '[uiPopoverTrigger]',
    exportAs: 'uiPopoverTrigger',
    hostDirectives: [{
        directive: NgpPopoverTrigger,
        inputs: [
            'ngpPopoverTriggerDisabled: uiPopoverTriggerDisabled',
            'ngpPopoverTriggerPlacement: uiPopoverTriggerPlacement',
            'ngpPopoverTriggerOffset: uiPopoverTriggerOffset',
            'ngpPopoverTriggerShowDelay: uiPopoverTriggerShowDelay',
            'ngpPopoverTriggerHideDelay: uiPopoverTriggerHideDelay',
            'ngpPopoverTriggerFlip: uiPopoverTriggerFlip',
            'ngpPopoverTriggerContainer: uiPopoverTriggerContainer',
            'ngpPopoverTriggerCloseOnOutsideClick: uiPopoverTriggerCloseOnOutsideClick',
            'ngpPopoverTriggerCloseOnEscape: uiPopoverTriggerCloseOnEscape',
            'ngpPopoverTriggerScrollBehavior: uiPopoverTriggerScrollBehavior',
            'ngpPopoverTriggerContext: uiPopoverTriggerContext'
        ],
        outputs: [
            'ngpPopoverTriggerOpenChange: uiPopoverTriggerOpenChange'
        ]
    }],
})
export class UiPopoverTrigger {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => popoverVariants({ class: this.inputClass() }));
    private readonly state = injectPopoverTriggerState();
    readonly trigger = input.required<TemplateRef<any>>({
        alias: 'uiPopoverTrigger',
    });
    constructor() {
        effect(() => this.state().popover.set(this.trigger()));
    }
}