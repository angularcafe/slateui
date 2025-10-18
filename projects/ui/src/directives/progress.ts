import { computed, Directive, input } from '@angular/core';
import { tv } from 'tailwind-variants';
import { NgpProgress, NgpProgressIndicator } from 'ng-primitives/progress';

const progressVariants = tv({
  slots: {
    progress: 'bg-primary/20 relative h-2 w-full overflow-hidden rounded-full',
    progressIndicator: 'bg-primary h-full w-full flex-1 transition-all',
  },
});

const { progress, progressIndicator } = progressVariants();

@Directive({
  selector: '[uiProgress]',
  exportAs: 'uiProgress',
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [
    {
      directive: NgpProgress,
      inputs: [
        'ngpProgressValue: uiProgressValue',
        'ngpProgressMin: uiProgressMin',
        'ngpProgressMax: uiProgressMax',
      ],
    },
  ],
})
export class UiProgress {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => progress({ class: this.inputClass() }));
}

@Directive({
  selector: '[uiProgressIndicator]',
  exportAs: 'uiProgressIndicator',
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [NgpProgressIndicator],
})
export class UiProgressIndicator {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() =>
    progressIndicator({ class: this.inputClass() }),
  );
}
