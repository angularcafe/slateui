import { computed, Directive, input } from '@angular/core';
import { tv, VariantProps } from 'tailwind-variants';
import { NgpToggle } from 'ng-primitives/toggle';
import { NgpButton } from 'ng-primitives/button';

const toggleVariants = tv({
  base: "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium data-[hover]:bg-muted data-[hover]:text-muted-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[selected]:bg-accent data-[selected]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 data-[focus-visible]:border-ring data-[focus-visible]:ring-ring/50 data-[focus-visible]:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  variants: {
    variant: {
      default: 'bg-transparent',
      outline:
        'border border-input bg-transparent shadow-xs data-[hover]:bg-accent data-[hover]:text-accent-foreground',
    },
    size: {
      default: 'h-9 px-2 min-w-9',
      sm: 'h-8 px-1.5 min-w-8',
      lg: 'h-10 px-2.5 min-w-10',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type ToggleVariants = VariantProps<typeof toggleVariants>;

@Directive({
  selector: '[uiToggle]',
  exportAs: 'uiToggle',
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [
    {
      directive: NgpButton,
      inputs: ['disabled: disabled'],
    },
    {
      directive: NgpToggle,
      inputs: [
        'ngpToggleSelected: uiToggleSelected',
        'ngpToggleDisabled: uiToggleDisabled',
      ],
      outputs: ['ngpToggleSelectedChange: uiToggleSelectedChange'],
    },
  ],
})
export class UiToggle {
  variant = input<ToggleVariants['variant']>('default', { alias: 'variant' });
  size = input<ToggleVariants['size']>('default', { alias: 'size' });
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() =>
    toggleVariants({
      variant: this.variant(),
      size: this.size(),
      class: this.inputClass(),
    }),
  );
}
