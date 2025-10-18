import { computed, Directive, input } from '@angular/core';
import { tv } from 'tailwind-variants';
import {
  NgpTabset,
  NgpTabList,
  NgpTabButton,
  NgpTabPanel,
} from 'ng-primitives/tabs';

const tabsetVariants = tv({
  slots: {
    tabs: 'flex flex-col gap-2',
    tabsList:
      'bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]',
    tabsTrigger:
      "data-[active]:bg-background text-muted-foreground data-[active]:text-foreground dark:data-[active]:text-foreground data-[focus-visible]:border-ring data-[focus-visible]:ring-ring/50 data-[focus-visible]:outline-ring dark:data-[active]:border-input dark:data-[active]:bg-input/30 dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] data-[focus-visible]:ring-[3px] data-[focus-visible]:outline-1 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer",
    tabsContent:
      'flex-1 outline-none not-[data-active]:hidden data-[active]:block',
  },
});

const { tabs, tabsList, tabsTrigger, tabsContent } = tabsetVariants();

@Directive({
  selector: '[uiTabs]',
  exportAs: 'uiTabs',
  hostDirectives: [
    {
      directive: NgpTabset,
      inputs: [
        'ngpTabsetValue: uiTabsValue',
        'ngpTabsetOrientation: uiTabsOrientation',
        'ngpTabsetOrientation: uiTabsOrientation',
        'ngpTabsetActivateOnFocus: uiTabsActivateOnFocus',
      ],
      outputs: ['ngpTabsetValueChange: uiTabsValueChange'],
    },
  ],
  host: {
    '[class]': 'computedClass()',
  },
})
export class UiTabs {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => tabs({ class: this.inputClass() }));
}

@Directive({
  selector: '[uiTabsContent]',
  exportAs: 'uiTabsContent',
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [
    {
      directive: NgpTabPanel,
      inputs: ['ngpTabPanelValue: uiTabsContentValue'],
    },
  ],
})
export class UiTabsContent {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => tabsContent({ class: this.inputClass() }));
}

@Directive({
  selector: '[uiTabsList]',
  exportAs: 'uiTabsList',
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [NgpTabList],
})
export class UiTabsList {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => tabsList({ class: this.inputClass() }));
}

@Directive({
  selector: '[uiTabsTrigger]',
  exportAs: 'uiTabsTrigger',
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [
    {
      directive: NgpTabButton,
      inputs: [
        'ngpTabButtonValue: uiTabsTriggerValue',
        'ngpTabButtonDisabled: uiTabsTriggerDisabled',
      ],
    },
  ],
})
export class UiTabsTrigger {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => tabsTrigger({ class: this.inputClass() }));
}
