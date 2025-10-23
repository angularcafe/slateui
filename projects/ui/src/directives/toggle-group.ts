import { computed, Directive, input, output, inject } from '@angular/core';
import { tv, VariantProps } from 'tailwind-variants';
import { NgpToggleGroup, NgpToggleGroupItem } from 'ng-primitives/toggle-group';

const toggleGroupVariants = tv({
    slots: {
        root: 'group/toggle-group flex w-fit items-center rounded-md data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ',
        item: "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium data-[hover]:bg-muted data-[hover]:text-muted-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[selected]:bg-accent data-[selected]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 data-[focus-visible]:border-ring data-[focus-visible]:ring-ring/50 data-[focus-visible]:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10"
    },
    variants: {
        variant: {
            default: {
                root: 'bg-transparent',
                item: 'bg-transparent'
            },
            outline: {
                root: 'shadow-xs',
                item: 'border border-input bg-transparent shadow-xs data-[hover]:bg-accent data-[hover]:text-accent-foreground border-l-0 first:border-l'
            }
        },
        size: {
            default: {
                root: 'h-9',
                item: 'h-9 px-3'
            },
            sm: {
                root: 'h-8',
                item: 'h-8 px-2.5'
            },
            lg: {
                root: 'h-10',
                item: 'h-10 px-3.5'
            }
        }
    },
    compoundVariants: [
        {
            variant: 'outline',
            size: 'sm',
            class: {
                root: 'h-8',
                item: 'h-8 px-2.5'
            }
        },
        {
            variant: 'outline',
            size: 'lg',
            class: {
                root: 'h-10',
                item: 'h-10 px-3.5'
            }
        }
    ],
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});

type ToggleGroupVariants = VariantProps<typeof toggleGroupVariants>;

@Directive({
    selector: '[uiToggleGroup]',
    exportAs: 'uiToggleGroup',
    hostDirectives: [
        {
            directive: NgpToggleGroup,
            inputs: [
                'ngpToggleGroupDisabled: disabled',
                'ngpToggleGroupType: type',
                'ngpToggleGroupValue: groupValue',
            ],
            outputs: [
                'ngpToggleGroupValueChange: groupValueChange',
            ],
        }
    ],
    host: {
        '[class]': 'computedClass()'
    }
})
export class UiToggleGroup {
    inputClass = input<string>('', { alias: 'class' });
    variant = input<ToggleGroupVariants['variant']>('default');
    size = input<ToggleGroupVariants['size']>('default');
    groupValue = input<string | string[]>();
    groupValueChange = output<string | string[]>();
    
    computedClass = computed(() => {
        const { root } = toggleGroupVariants({ 
            variant: this.variant(), 
            size: this.size()
        });
        return root({ class: this.inputClass() });
    });
}
@Directive({
    selector: '[uiToggleGroupItem]',
    exportAs: 'uiToggleGroupItem',
    hostDirectives: [
        {
            directive: NgpToggleGroupItem,
            inputs: [
                'ngpToggleGroupItemValue: value',
                'ngpToggleGroupItemDisabled: disabled',
            ],
        }
    ],
    host: {
        '[class]': 'computedClass()'
    }
})
export class UiToggleGroupItem {
    private parentToggleGroup = inject(UiToggleGroup, { optional: true, skipSelf: true });
    inputClass = input<string>('', { alias: 'class' });
    
    computedClass = computed(() => {
        if (!this.parentToggleGroup) {
            const { item } = toggleGroupVariants();
            return item({ class: this.inputClass() });
        }
        
        const { item } = toggleGroupVariants({ 
            variant: this.parentToggleGroup.variant(), 
            size: this.parentToggleGroup.size()
        });
        return item({ class: this.inputClass() });
    });
}
