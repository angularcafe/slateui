import { computed, Directive, input } from '@angular/core';
import { tv } from 'tailwind-variants';
import { NgpSwitch, NgpSwitchThumb } from "ng-primitives/switch";

const switchVariants = tv({
    slots: {
        switchRoot: 'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2 data-[focus-visible]:ring-offset-background data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:bg-primary bg-input',
        switchThumb: 'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[checked]:translate-x-5 translate-x-0'
    }
});

const { switchThumb, switchRoot } = switchVariants();

@Directive({
    selector: '[uiSwitch]',
    exportAs: 'uiSwitch',
    host: {
        '[class]': 'computedClass()'
    },
    hostDirectives: [
        {
            directive: NgpSwitch,
            inputs: [
                'ngpSwitchChecked:checked',
                'ngpSwitchDisabled:disabled'
            ],
            outputs: [
                'ngpSwitchCheckedChange:checkedChange'
            ],
        },
    ],
})
export class UiSwitch {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => switchRoot({ class: this.inputClass() }));
}

@Directive({
    selector: '[uiSwitchThumb]',
    exportAs: 'uiSwitchThumb',
    host: {
        '[class]': 'computedClass()'
    },
    hostDirectives: [NgpSwitchThumb],
})
export class UiSwitchThumb {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => switchThumb({ class: this.inputClass() }));
}