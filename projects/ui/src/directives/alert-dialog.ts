import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { tv } from 'tailwind-variants';
import {
  NgpDialog,
  NgpDialogDescription,
  NgpDialogOverlay,
  NgpDialogTitle,
  NgpDialogTrigger,
  provideDialogConfig,
} from 'ng-primitives/dialog';

const alertDialogVariants = tv({
  slots: {
    alertDialog:
      'bg-background data-[enter]:animate-in data-[exit]:animate-out data-[exit]:fade-out-0 data-[enter]:fade-in-0 data-[exit]:zoom-out-95 data-[enter]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg sm:max-w-lg',
    alertDialogOverlay:
      'data-[enter]:animate-in data-[exit]:animate-out data-[exit]:fade-out-0 data-[enter]:fade-in-0 fixed inset-0 z-50 bg-black/50',
    alertDialogHeader: 'flex flex-col space-y-1.5 text-center sm:text-left',
    alertDialogFooter:
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
    alertDialogTitle: 'text-lg font-semibold',
    alertDialogDescription: 'text-sm text-muted-foreground',
    alertDialogTrigger: '',
    alertDialogCancel: 'mt-2 sm:mt-0',
    alertDialogAction: 'mt-2 sm:mt-0',
  },
});

const {
  alertDialog,
  alertDialogOverlay,
  alertDialogHeader,
  alertDialogFooter,
  alertDialogTitle,
  alertDialogDescription,
  alertDialogTrigger,
  alertDialogCancel,
  alertDialogAction,
} = alertDialogVariants();

@Component({
  selector: 'ui-alert-dialog',
  exportAs: 'uiAlertDialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [NgpDialog],
  template: `<ng-content />`,
})
export class UiAlertDialog {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => alertDialog({ class: this.inputClass() }));
}

@Component({
  selector: 'ui-alert-dialog-header',
  exportAs: 'uiAlertDialogHeader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [],
  template: `<ng-content />`,
})
export class UiAlertDialogHeader {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() =>
    alertDialogHeader({ class: this.inputClass() }),
  );
}

@Component({
  selector: 'ui-alert-dialog-title',
  exportAs: 'uiAlertDialogTitle',
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [NgpDialogTitle],
  template: `<ng-content />`,
})
export class UiAlertDialogTitle {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() =>
    alertDialogTitle({ class: this.inputClass() }),
  );
}

@Component({
  selector: 'ui-alert-dialog-description',
  exportAs: 'uiAlertDialogDescription',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [NgpDialogDescription],
  template: `<ng-content />`,
})
export class UiAlertDialogDescription {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() =>
    alertDialogDescription({ class: this.inputClass() }),
  );
}

@Component({
  selector: 'ui-alert-dialog-footer',
  exportAs: 'uiAlertDialogFooter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [],
  template: `<ng-content />`,
})
export class UiAlertDialogFooter {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() =>
    alertDialogFooter({ class: this.inputClass() }),
  );
}

@Component({
  selector: '[uiAlertDialogTrigger]',
  exportAs: 'uiAlertDialogTrigger',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [
    {
      directive: NgpDialogTrigger,
      inputs: ['ngpDialogTrigger: uiAlertDialogTrigger'],
    },
  ],
  providers: [provideDialogConfig({ closeOnEscape: false })],
  template: `<ng-content />`,
})
export class UiAlertDialogTrigger {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() =>
    alertDialogTrigger({ class: this.inputClass() }),
  );
}

@Component({
  selector: 'ui-alert-dialog-overlay',
  exportAs: 'uiAlertDialogOverlay',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [NgpDialogOverlay],
  providers: [provideDialogConfig({ closeOnClick: false })],
  template: `<ng-content />`,
})
export class UiAlertDialogOverlay {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() =>
    alertDialogOverlay({ class: this.inputClass() }),
  );
}

@Component({
  selector: 'ui-alert-dialog-cancel',
  exportAs: 'uiAlertDialogCancel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [],
  template: `<ng-content />`,
})
export class UiAlertDialogCancel {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() =>
    alertDialogCancel({ class: this.inputClass() }),
  );
}

@Component({
  selector: 'ui-alert-dialog-action',
  exportAs: 'uiAlertDialogAction',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [],
  template: `<ng-content />`,
})
export class UiAlertDialogAction {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() =>
    alertDialogAction({ class: this.inputClass() }),
  );
}
