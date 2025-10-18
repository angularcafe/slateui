import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { tv } from 'tailwind-variants';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideEllipsis } from '@ng-icons/lucide';

const breadcrumbVariants = tv({
  slots: {
    breadcrumb:
      'flex flex-wrap items-center gap-1 break-words text-sm text-muted-foreground',
    breadcrumbList:
      'text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5',
    breadcrumbItem: 'inline-flex items-center gap-1.5',
    breadcrumbLink: 'hover:text-foreground transition-colors',
    breadcrumbPage: 'text-foreground font-normal',
    breadcrumbSeparator: 'size-3.5',
    breadcrumbEllipsis: 'flex size-9 items-center justify-center',
  },
});

const {
  breadcrumb,
  breadcrumbList,
  breadcrumbItem,
  breadcrumbLink,
  breadcrumbPage,
  breadcrumbSeparator,
  breadcrumbEllipsis,
} = breadcrumbVariants();

@Component({
  selector: 'ui-breadcrumb',
  exportAs: 'uiBreadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<nav [class]="computedClass()"><ng-content /></nav>`,
})
export class UiBreadcrumb {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => breadcrumb({ class: this.inputClass() }));
}

@Component({
  selector: 'ui-breadcrumb-list',
  exportAs: 'uiBreadcrumbList',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ol [class]="computedClass()">
    <ng-content />
  </ol>`,
})
export class UiBreadcrumbList {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => breadcrumbList({ class: this.inputClass() }));
}

@Component({
  selector: 'ui-breadcrumb-item',
  exportAs: 'uiBreadcrumbItem',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<li [class]="computedClass()"><ng-content /></li>`,
})
export class UiBreadcrumbItem {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => breadcrumbItem({ class: this.inputClass() }));
}

@Component({
  selector: 'ui-breadcrumb-link',
  exportAs: 'uiBreadcrumbLink',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'computedClass()',
  },
  template: `<ng-content />`,
})
export class UiBreadcrumbLink {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => breadcrumbLink({ class: this.inputClass() }));
}

@Component({
  selector: 'ui-breadcrumb-page',
  exportAs: 'uiBreadcrumbPage',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'computedClass()',
  },
  template: `<ng-content />`,
})
export class UiBreadcrumbPage {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => breadcrumbPage({ class: this.inputClass() }));
}

@Component({
  selector: 'ui-breadcrumb-separator',
  exportAs: 'uiBreadcrumbSeparator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'computedClass()',
  },
  template: `<ng-content />`,
})
export class UiBreadcrumbSeparator {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() =>
    breadcrumbSeparator({ class: this.inputClass() }),
  );
}

@Component({
  selector: 'ui-breadcrumb-ellipsis',
  exportAs: 'uiBreadcrumbEllipsis',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'computedClass()',
  },
  template: `<ng-icon name="lucideEllipsis" size="16" />`,
  imports: [NgIcon],
  providers: [provideIcons({ lucideEllipsis })],
})
export class UiBreadcrumbEllipsis {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() =>
    breadcrumbEllipsis({ class: this.inputClass() }),
  );
}
