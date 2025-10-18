import { computed, Directive, effect, input, TemplateRef } from '@angular/core';
import { tv } from 'tailwind-variants';
import {
  injectTooltipTriggerState,
  NgpTooltip,
  NgpTooltipArrow,
  NgpTooltipTrigger,
} from 'ng-primitives/tooltip';

const tooltipVariants = tv({
  slots: {
    tooltip:
      'absolute bg-primary text-primary-foreground data-[enter]:animate-in data-[enter]:fade-in-0 data-[enter]:zoom-in-95 data-[exit]:animate-out data-[exit]:fade-out-0 data-[exit]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--ngp-tooltip-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance',
    tooltipTrigger: '',
    tooltipArrow:
      'absoulte bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]',
  },
});

const { tooltip, tooltipTrigger, tooltipArrow } = tooltipVariants();

@Directive({
  selector: '[uiTooltip]',
  exportAs: 'uiTooltip',
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [NgpTooltip],
})
export class UiTooltip {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => tooltip({ class: this.inputClass() }));
}

@Directive({
  selector: '[uiTooltipTrigger]',
  exportAs: 'uiTooltipTrigger',
  hostDirectives: [
    {
      directive: NgpTooltipTrigger,
      inputs: [
        'ngpTooltipTriggerDisabled: uiTooltipTriggerDisabled',
        'ngpTooltipTriggerPlacement: uiTooltipTriggerPlacement',
        'ngpTooltipTriggerOffset: uiTooltipTriggerOffset',
        'ngpTooltipTriggerShowDelay: uiTooltipTriggerShowDelay',
        'ngpTooltipTriggerHideDelay: uiTooltipTriggerHideDelay',
        'ngpTooltipTriggerFlip: uiTooltipTriggerFlip',
        'ngpTooltipTriggerContainer: uiTooltipTriggerContainer',
        'ngpTooltipTriggerShowOnOverflow: uiTooltipTriggerShowOnOverflow',
        'ngpTooltipTriggerContext: uiTooltipTriggerContext',
        'ngpTooltipTriggerUseTextContent: uiTooltipTriggerUseTextContent',
      ],
    },
  ],
})
export class UiTooltipTrigger {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => tooltipTrigger({ class: this.inputClass() }));
  private readonly state = injectTooltipTriggerState();
  readonly trigger = input.required<TemplateRef<any>>({
    alias: 'uiTooltipTrigger',
  });
  constructor() {
    effect(() => this.state().tooltip.set(this.trigger()));
  }
}

@Directive({
  selector: '[uiTooltipArrow]',
  exportAs: 'uiTooltipArrow',
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [NgpTooltipArrow],
})
export class UiTooltipArrow {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => tooltipArrow({ class: this.inputClass() }));
}
