import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { tv } from 'tailwind-variants';

const badgeVariants = tv({
  slots: {
    card: 'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm',
    cardHeader:
      '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
    cardTitle: 'leading-none font-semibold',
    cardDescription: 'text-muted-foreground text-sm',
    cardAction:
      'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
    cardContent: 'px-6',
    cardFooter: 'flex items-center px-6 [.border-t]:pt-6',
  },
});

const {
  card,
  cardHeader,
  cardTitle,
  cardDescription,
  cardAction,
  cardContent,
  cardFooter,
} = badgeVariants();

@Component({
  selector: 'ui-card',
  exportAs: 'uiCard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'computedClass()',
  },
  template: `<ng-content />`,
})
export class UiCard {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => card({ class: this.inputClass() }));
}

@Component({
  selector: 'ui-card-header',
  exportAs: 'uiCardHeader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'computedClass()',
  },
  template: `<ng-content />`,
})
export class UiCardHeader {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => cardHeader({ class: this.inputClass() }));
}

@Component({
  selector: 'ui-card-title',
  exportAs: 'uiCardTitle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'computedClass()',
  },
  template: `<ng-content />`,
})
export class UiCardTitle {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => cardTitle({ class: this.inputClass() }));
}

@Component({
  selector: 'ui-card-description',
  exportAs: 'uiCardDescription',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'computedClass()',
  },
  template: `<ng-content />`,
})
export class UiCardDescription {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => cardDescription({ class: this.inputClass() }));
}

@Component({
  selector: 'ui-card-action',
  exportAs: 'uiCardAction',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'computedClass()',
  },
  template: `<ng-content />`,
})
export class UiCardAction {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => cardAction({ class: this.inputClass() }));
}

@Component({
  selector: 'ui-card-content',
  exportAs: 'uiCardContent',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'computedClass()',
  },
  template: `<ng-content />`,
})
export class UiCardContent {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => cardContent({ class: this.inputClass() }));
}

@Component({
  selector: 'ui-card-footer',
  exportAs: 'uiCardFooter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'computedClass()',
  },
  template: `<ng-content />`,
})
export class UiCardFooter {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => cardFooter({ class: this.inputClass() }));
}
