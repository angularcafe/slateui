import { computed, Directive, input } from '@angular/core';
import { tv, VariantProps } from 'tailwind-variants';
import {
  NgpDialog,
  NgpDialogDescription,
  NgpDialogOverlay,
  NgpDialogTitle,
  NgpDialogTrigger,
} from 'ng-primitives/dialog';

const sheetVariants = tv({
  slots: {
    sheet:
      'bg-background data-[enter]:animate-in data-[exit]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[enter]:duration-500',
    sheetOverlay:
      'data-[enter]:animate-in data-[exit]:animate-out data-[exit]:fade-out-0 data-[enter]:fade-in-0 fixed inset-0 z-50 bg-black/50',
    sheetHeader: 'flex flex-col gap-1.5 p-4',
    sheetFooter: 'mt-auto flex flex-col gap-2 p-4',
    sheetTitle: 'text-foreground font-semibold',
    sheetDescription: 'text-muted-foreground text-sm',
    sheetTrigger: '',
  },
  variants: {
    side: {
      right: {
        sheet:
          'data-[exit]:slide-out-to-right data-[enter]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
      },
      left: {
        sheet:
          'data-[exit]:slide-out-to-left data-[enter]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
      },
      top: {
        sheet:
          'data-[exit]:slide-out-to-top data-[enter]:slide-in-from-top inset-x-0 top-0 h-auto border-b',
      },
      bottom: {
        sheet:
          'data-[exit]:slide-out-to-bottom data-[enter]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t',
      },
    },
  },
  defaultVariants: {
    side: 'right',
  },
});

const {
  sheet,
  sheetOverlay,
  sheetHeader,
  sheetFooter,
  sheetTitle,
  sheetDescription,
  sheetTrigger,
} = sheetVariants();

type SheetVariants = VariantProps<typeof sheetVariants>;

@Directive({
  selector: '[uiSheet]',
  exportAs: 'uiSheet',
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [
    {
      directive: NgpDialog,
      inputs: ['ngpDialogRole: uiSheetRole', 'ngpDialogModal: uiSheetModal'],
    },
  ],
})
export class UiSheet {
  inputClass = input<string>('', { alias: 'class' });
  side = input<SheetVariants['side']>('right');
  computedClass = computed(() =>
    sheet({
      side: this.side(),
      class: this.inputClass(),
    }),
  );
}

@Directive({
  selector: '[uiSheetHeader]',
  exportAs: 'uiSheetHeader',
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [],
})
export class UiSheetHeader {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => sheetHeader({ class: this.inputClass() }));
}

@Directive({
  selector: '[uiSheetTitle]',
  exportAs: 'uiSheetTitle',
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [NgpDialogTitle],
})
export class UiSheetTitle {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => sheetTitle({ class: this.inputClass() }));
}

@Directive({
  selector: '[uiSheetDescription]',
  exportAs: 'uiSheetDescription',
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [NgpDialogDescription],
})
export class UiSheetDescription {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() =>
    sheetDescription({ class: this.inputClass() }),
  );
}

@Directive({
  selector: '[uiSheetFooter]',
  exportAs: 'uiSheetFooter',
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [],
})
export class UiSheetFooter {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => sheetFooter({ class: this.inputClass() }));
}

@Directive({
  selector: '[uiSheetTrigger]',
  exportAs: 'uiSheetTrigger',
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [
    {
      directive: NgpDialogTrigger,
      inputs: [
        'ngpDialogTrigger: uiSheetTrigger',
        'ngpDialogTriggerCloseOnEscape: uiSheetTriggerCloseOnEscape',
      ],
    },
  ],
})
export class UiSheetTrigger {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => sheetTrigger({ class: this.inputClass() }));
}

@Directive({
  selector: '[uiSheetOverlay]',
  exportAs: 'uiSheetOverlay',
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [
    {
      directive: NgpDialogOverlay,
      inputs: ['ngpDialogOverlayCloseOnClick: uiSheetOverlayCloseOnClick'],
    },
  ],
})
export class UiSheetOverlay {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => sheetOverlay({ class: this.inputClass() }));
}
