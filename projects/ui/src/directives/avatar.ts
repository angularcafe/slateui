import { Component, computed, input } from '@angular/core';
import { NgpAvatar, NgpAvatarFallback, NgpAvatarImage } from "ng-primitives/avatar";
import { tv } from "tailwind-variants";

const avatarVariants = tv({
    slots: {
        avatar: 'relative flex w-12 h-12 shrink-0 overflow-hidden rounded-full',
        avatarImage: 'aspect-square size-full',
        avatarFallback: 'bg-muted flex size-full items-center justify-center rounded-full'
    }
});

const { avatar, avatarImage, avatarFallback } = avatarVariants();

@Component({
    selector: 'ui-avatar',
    exportAs: 'uiAvatar',
    hostDirectives: [NgpAvatar],
    host: {
        '[class]': 'computedClass()'
    },
    template: `<ng-content />`
})
export class UiAvatar {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => avatar({ class: this.inputClass() }));
}

@Component({
    selector: 'ui-avatar-image',
    exportAs: 'uiAvatarImage',
    template: `<img [src]="src()" [alt]="alt()" [class]="computedClass()" ngpAvatarImage />`,
    imports: [NgpAvatarImage]
})
export class UiAvatarImage {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => avatarImage({ class: this.inputClass() }));
    src = input<string>('', { alias: 'src' });
    alt = input<string>('', { alias: 'alt' });
}

@Component({
    selector: 'ui-avatar-fallback',
    exportAs: 'uiAvatarFallback',
    hostDirectives: [NgpAvatarFallback],
    host: {
        '[class]': 'computedClass()'
    },
    template: `<ng-content />`,
})
export class UiAvatarFallback {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => avatarFallback({ class: this.inputClass() }));
}