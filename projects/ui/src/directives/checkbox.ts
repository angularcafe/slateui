import {
  computed,
  Component,
  input,
  ChangeDetectionStrategy,
  model,
  booleanAttribute,
  output,
} from '@angular/core';
import { tv } from 'tailwind-variants';
import { NgpCheckbox } from 'ng-primitives/checkbox';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck } from '@ng-icons/lucide';
import { BooleanInput } from '@angular/cdk/coercion';

const checkboxVariants = tv({
  base: 'peer border-input dark:bg-input/30 data-[checked]:bg-primary data-[checked]:text-primary-foreground dark:data-[checked]:bg-primary data-[checked]:border-primary data-[focus-visible]:border-ring data-[focus-visible]:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none data-[focus-visible]:ring-[3px] data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 flex items-center justify-center text-current transition-none',
});

@Component({
  selector: 'ui-checkbox',
  exportAs: 'uiCheckbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'peer',
    '[attr.data-disabled]': 'this.disabled() || null',
  },
  template: `<button
    ngpCheckbox
    [(ngpCheckboxChecked)]="checked"
    [class]="computedClass()"
    [ngpCheckboxDisabled]="disabled()"
    [ngpCheckboxRequired]="required()"
    [ngpCheckboxIndeterminate]="indeterminate()"
  >
    @if (checked()) {
      <ng-icon name="lucideCheck" aria-hidden="true" />
    }
  </button>`,
  imports: [NgIcon, NgpCheckbox],
  providers: [provideIcons({ lucideCheck })],
})
export class UiCheckbox {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() =>
    checkboxVariants({ class: this.inputClass() }),
  );
  readonly checked = model<boolean>(false);
  readonly required = input<boolean, BooleanInput>(false, {
    transform: booleanAttribute,
  });
  readonly disabled = input<boolean, BooleanInput>(false, {
    transform: booleanAttribute,
  });
  readonly indeterminate = input<boolean, BooleanInput>(false, {
    transform: booleanAttribute,
  });
}
