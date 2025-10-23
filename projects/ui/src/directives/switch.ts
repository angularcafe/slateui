import { computed, Directive, input } from '@angular/core';
import { tv } from 'tailwind-variants';
import { NgpSwitch, NgpSwitchThumb } from 'ng-primitives/switch';

const switchVariants = tv({
  slots: {
    switchRoot:
      'peer data-[checked]:bg-primary bg-input data-[focus-visible]:border-ring data-[focus-visible]:ring-ring/50 dark:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none data-[focus-visible]:ring-[3px] data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
    switchThumb:
      'bg-background dark:bg-foreground dark:data-[checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[checked]:translate-x-[calc(100%-2px)] translate-x-0',
  },
});

const { switchThumb, switchRoot } = switchVariants();

@Directive({
  selector: '[uiSwitch]',
  exportAs: 'uiSwitch',
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [
    {
      directive: NgpSwitch,
      inputs: ['ngpSwitchChecked:checked', 'ngpSwitchDisabled:disabled'],
      outputs: ['ngpSwitchCheckedChange:checkedChange'],
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
    '[class]': 'computedClass()',
  },
  hostDirectives: [NgpSwitchThumb],
})
export class UiSwitchThumb {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => switchThumb({ class: this.inputClass() }));
}
