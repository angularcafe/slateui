import { computed, Directive, input } from "@angular/core";
import { tv } from "tailwind-variants";
import { NgpDialog, NgpDialogDescription, NgpDialogOverlay, NgpDialogTitle, NgpDialogTrigger } from "ng-primitives/dialog";

const dialogVariants = tv({
    slots: {
        dialog: 'bg-background data-[enter]:animate-in data-[exit]:animate-out data-[exit]:fade-out-0 data-[enter]:fade-in-0 data-[exit]:zoom-out-95 data-[enter]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border border-border p-6 shadow-lg sm:max-w-lg',
        dialogOverlay: 'data-[enter]:animate-in data-[exit]:animate-out data-[exit]:fade-out-0 data-[enter]:fade-in-0 fixed inset-0 z-50 bg-black/50 backdrop-blur-xs',
        dialogHeader: 'flex gap-2 justify-between items-center sm:text-left',
        dialogFooter: 'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
        dialogTitle: 'text-lg leading-none font-semibold',
        dialogDescription: 'text-muted-foreground text-sm',
        dialogTrigger: ''
    }
});

const { dialog, dialogOverlay, dialogHeader, dialogFooter, dialogTitle, dialogDescription, dialogTrigger } = dialogVariants();

@Directive({
    selector: '[uiDialog]',
    exportAs: 'uiDialog',
    host: {
        '[class]': 'computedClass()'
    },
    hostDirectives: [{ directive: NgpDialog, inputs: ['ngpDialogRole: uiDialogRole, ngpDialogModal: uiDialogModal'] }]
})
export class UiDialog {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => dialog({ class: this.inputClass() }));
}

@Directive({
    selector: '[uiDialogHeader]',
    exportAs: 'uiDialogHeader',
    host: {
        '[class]': 'computedClass()'
    },
    hostDirectives: [NgpDialogTitle]
})
export class UiDialogHeader {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => dialogHeader({ class: this.inputClass() }));
}

@Directive({
    selector: '[uiDialogTitle]',
    exportAs: 'uiDialogTitle',
    host: {
        '[class]': 'computedClass()'
    },
    hostDirectives: [NgpDialogTitle]
})
export class UiDialogTitle {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => dialogTitle({ class: this.inputClass() }));
}

@Directive({
    selector: '[uiDialogDescription]',
    exportAs: 'uiDialogDescription',
    host: {
        '[class]': 'computedClass()'
    },
    hostDirectives: [NgpDialogDescription]
})
export class UiDialogDescription {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => dialogDescription({ class: this.inputClass() }));
}

@Directive({
    selector: '[uiDialogFooter]',
    exportAs: 'uiDialogFooter',
    host: {
        '[class]': 'computedClass()'
    },
    hostDirectives: [NgpDialogTitle]
})
export class UiDialogFooter {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => dialogFooter({ class: this.inputClass() }));
}

@Directive({
    selector: '[uiDialogTrigger]',
    exportAs: 'uiDialogTrigger',
    host: {
        '[class]': 'computedClass()'
    },
    hostDirectives: [{ directive: NgpDialogTrigger, inputs: ['ngpDialogTrigger: uiDialogTrigger'] }]
})
export class UiDialogTrigger {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => dialogTrigger({ class: this.inputClass() }));
}

@Directive({
    selector: '[uiDialogOverlay]',
    exportAs: 'uiDialogOverlay',
    host: {
        '[class]': 'computedClass()'
    },
    hostDirectives: [{ directive: NgpDialogOverlay, inputs: ['ngpDialogOverlayCloseOnClick: uiDialogOverlayCloseOnClick'] }]
})
export class UiDialogOverlay {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => dialogOverlay({ class: this.inputClass() }));
}