import { computed, Directive, input } from '@angular/core';
import { tv } from 'tailwind-variants';
import {
  NgpMenu,
  NgpMenuItem,
  NgpMenuTrigger,
  NgpSubmenuTrigger,
} from 'ng-primitives/menu';
import { NgpSeparator } from 'ng-primitives/separator';

const menuVariants = tv({
  slots: {
    dropdownMenu:
      'absolute bg-popover text-popover-foreground data-[enter]:animate-in data-[exit]:animate-out data-[exit]:fade-out-0 data-[enter]:fade-in-0 data-[exit]:zoom-out-95 data-[enter]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--ngp-menu-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md',
    dropdownMenuItem:
      "w-full data-[focus-visible]:bg-accent data-[focus-visible]:text-accent-foreground data-[hover]:bg-accent data-[hover]:text-accent-foreground data-[open]:bg-accent data-[open]:text-accent-foreground relative flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    dropdowMenuShortcut:
      'text-muted-foreground ml-auto text-xs tracking-widest',
    dropdownMenuSeparator: 'bg-border -mx-1 my-1 h-px',
    dropdownMenuLabel: 'px-2 py-1.5 text-sm font-medium data-[inset]:pl-8',
  },
});

const {
  dropdownMenu,
  dropdownMenuItem,
  dropdowMenuShortcut,
  dropdownMenuSeparator,
  dropdownMenuLabel,
} = menuVariants();

@Directive({
  selector: '[uiDropdownMenu]',
  exportAs: 'uiDropdownMenu',
  hostDirectives: [NgpMenu],
  host: {
    '[class]': 'computedClass()',
  },
})
export class UiDropdownMenu {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => dropdownMenu({ class: this.inputClass() }));
}

@Directive({
  selector: '[uiDropdownMenuTrigger]',
  exportAs: 'uiDropdownMenuTrigger',
  hostDirectives: [
    {
      directive: NgpMenuTrigger,
      inputs: [
        'ngpMenuTrigger: uiDropdownMenuTrigger',
        'ngpMenuTriggerDisabled: uiDropdownMenuTriggerDisabled',
        'ngpMenuTriggerPlacement: uiDropdownMenuTriggerPlacement',
        'ngpMenuTriggerOffset: uiDropdownMenuTriggerOffset',
        'ngpMenuTriggerFlip: uiDropdownMenuTriggerFlip',
        'ngpMenuTriggerContainer: uiDropdownMenuTriggerContainer',
        'ngpMenuTriggerScrollBehavior: uiDropdownMenuTriggerScrollBehavior',
        'ngpMenuTriggerContext: uiDropdownMenuTriggerContext',
      ],
    },
  ],
})
export class UiDropdownMenuTrigger {}

@Directive({
  selector: '[uiDropdownMenuItem]',
  exportAs: 'uiDropdownMenuItem]',
  hostDirectives: [
    {
      directive: NgpMenuItem,
    },
  ],
  host: {
    '[class]': 'computedClass()',
  },
})
export class UiDropdownMenuItem {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() =>
    dropdownMenuItem({ class: this.inputClass() }),
  );
}

@Directive({
  selector: '[uiDropdownMenuShortcut]',
  exportAs: 'uiDropdownMenuShortcut',
  host: {
    '[class]': 'computedClass()',
  },
})
export class UiDropdownMenuShortcut {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() =>
    dropdowMenuShortcut({ class: this.inputClass() }),
  );
}

@Directive({
  selector: '[uiDropdownMenuSeparator]',
  exportAs: 'uiDropdownMenuSeparator',
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [NgpSeparator],
})
export class UiDropdownMenuSeparator {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() =>
    dropdownMenuSeparator({ class: this.inputClass() }),
  );
}

@Directive({
  selector: '[uiDropdownMenuLabel]',
  exportAs: 'uiDropdownMenuLabel]',
  host: {
    '[class]': 'computedClass()',
  },
})
export class UiDropdownMenuLabel {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() =>
    dropdownMenuLabel({ class: this.inputClass() }),
  );
}

@Directive({
  selector: '[uiDropdownSubmenuTrigger]',
  exportAs: 'uiDropdownSubmenuTrigger',
  hostDirectives: [
    {
      directive: NgpSubmenuTrigger,
      inputs: [
        'ngpSubmenuTrigger: uiDropdownSubmenuTrigger',
        'ngpSubmenuTriggerDisabled: uiDropdownSubmenuTriggerDisabled',
        'ngpSubmenuTriggerPlacement: uiDropdownSubmenuTriggerPlacement',
        'ngpSubmenuTriggerOffset: uiDropdownSubmenuTriggerOffset',
        'ngpSubmenuTriggerFlip: uiDropdownSubmenuTriggerFlip',
      ],
    },
  ],
})
export class UiDropdownSubmenuTrigger {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() =>
    dropdownMenuItem({ class: this.inputClass() }),
  );
}
