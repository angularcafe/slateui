import { NumberInput } from '@angular/cdk/coercion';
import { computed, Directive, input, numberAttribute } from '@angular/core';
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

@Directive({
    selector: '[uiAvatar]',
    exportAs: 'uiAvatar',
    hostDirectives: [NgpAvatar],
    host: {
        '[class]': 'computedClass()'
    }
})
export class UiAvatar {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => avatar({ class: this.inputClass() }));
}

@Directive({
    selector: '[uiAvatarImage]',
    exportAs: 'uiAvatarImage',
    hostDirectives: [NgpAvatarImage],
    host: {
        '[class]': 'computedClass()'
    }
})
export class UiAvatarImage {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => avatarImage({ class: this.inputClass() }));
}

@Directive({
    selector: '[uiAvatarFallback]',
    exportAs: 'uiAvatarFallback',
    hostDirectives: [{
        directive: NgpAvatarFallback,
        inputs: ['ngpAvatarFallbackDelay: delay()'],
    }],
    host: {
        '[class]': 'computedClass()'
    }
})
export class UiAvatarFallback {
    inputClass = input<string>('', { alias: 'class' });
    computedClass = computed(() => avatarFallback({ class: this.inputClass() }));
    readonly delay = input<number, NumberInput>(0, {
        alias: 'uiAvatarFallbackDelay',
        transform: numberAttribute,
    });
}