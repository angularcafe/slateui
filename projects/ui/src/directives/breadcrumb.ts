import { computed, Directive, input } from '@angular/core';
import { tv } from 'tailwind-variants';

const breadcrumbVariants = tv({
    slots: {
        breadcrumb: 'flex flex-wrap items-center gap-1 break-words text-sm text-muted-foreground',
        breadcrumbList: 'text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5',
        breadcrumbItem: 'inline-flex items-center gap-1.5',
        breadcrumbLink: 'hover:text-foreground transition-colors',
        breadcrumbPage: 'text-foreground font-normal',
        breadcrumbSeparator: 'size-3.5',
        breadcrumbEllipsis: 'flex size-9 items-center justify-center'
    }
});

const { breadcrumb, breadcrumbList, breadcrumbItem, breadcrumbLink, breadcrumbPage, breadcrumbSeparator, breadcrumbEllipsis } = breadcrumbVariants();

@Directive({
    selector: '[uiBreadcrumb]',
    exportAs: 'uiBreadcrumb',
    host: {
        '[class]': 'computedClass()'
    }
})
export class UiBreadcrumb {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => breadcrumb({ class: this.inputClass() }));
}

@Directive({
    selector: '[uiBreadcrumbList]',
    exportAs: 'uiBreadcrumbList',
    host: {
        '[class]': 'computedClass()'
    }
})
export class UiBreadcrumbList {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => breadcrumbList({ class: this.inputClass() }));
}

@Directive({
    selector: '[uiBreadcrumbItem]',
    exportAs: 'uiBreadcrumbItem',
    host: {
        '[class]': 'computedClass()'
    }
})
export class UiBreadcrumbItem {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => breadcrumbItem({ class: this.inputClass() }));
}

@Directive({
    selector: '[uiBreadcrumbLink]',
    exportAs: 'uiBreadcrumbLink',
    host: {
        '[class]': 'computedClass()'
    }
})
export class UiBreadcrumbLink {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => breadcrumbLink({ class: this.inputClass() }));
}

@Directive({
    selector: '[uiBreadcrumbPage]',
    exportAs: 'uiBreadcrumbPage',
    host: {
        '[class]': 'computedClass()'
    }
})
export class UiBreadcrumbPage {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => breadcrumbPage({ class: this.inputClass() }));
}

@Directive({
    selector: '[uiBreadcrumbSeparator]',
    exportAs: 'uiBreadcrumbSeparator',
    host: {
        '[class]': 'computedClass()'
    }
})
export class UiBreadcrumbSeparator {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => breadcrumbSeparator({ class: this.inputClass() }));
}

@Directive({
    selector: '[uiBreadcrumbEllipsis]',
    exportAs: 'uiBreadcrumbEllipsis',
    host: {
        '[class]': 'computedClass()'
    }
})
export class UiBreadcrumbEllipsis {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => breadcrumbEllipsis({ class: this.inputClass() }));
}
