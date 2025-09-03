import { Component, effect, model } from '@angular/core';
import { UiToggleGroup, UiToggleGroupItem } from 'ui';
import { IVariant, IComponentMeta } from '@components/component-preview/component-preview';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBold, lucideItalic, lucideUnderline, lucideAlignLeft, lucideAlignCenter, lucideAlignRight } from '@ng-icons/lucide';

// Toggle Group example components for dynamic rendering
@Component({
  selector: 'toggle-group-default-example',
  template: `
    <div uiToggleGroup variant="outline" type="multiple">
      <button uiToggleGroupItem value="bold" aria-label="Toggle bold">
        <ng-icon name="lucideBold" size="16" />
      </button>
      <button uiToggleGroupItem value="italic" aria-label="Toggle italic">
        <ng-icon name="lucideItalic" size="16" />
      </button>
      <button uiToggleGroupItem value="underline" aria-label="Toggle underline">
        <ng-icon name="lucideUnderline" size="16" />
      </button>
    </div>
  `,
  imports: [UiToggleGroup, UiToggleGroupItem, NgIcon],
  providers: [provideIcons({ lucideBold, lucideItalic, lucideUnderline })]
})
export class ToggleGroupDefaultExample {}

@Component({
  selector: 'toggle-group-outline-example',
  template: `
    <div uiToggleGroup type="multiple" variant="outline">
      <button uiToggleGroupItem value="bold" aria-label="Toggle bold">
        <ng-icon name="lucideBold" size="16" />
      </button>
      <button uiToggleGroupItem value="italic" aria-label="Toggle italic">
        <ng-icon name="lucideItalic" size="16" />
      </button>
      <button uiToggleGroupItem value="underline" aria-label="Toggle underline">
        <ng-icon name="lucideUnderline" size="16" />
      </button>
    </div>
  `,
  imports: [UiToggleGroup, UiToggleGroupItem, NgIcon],
  providers: [provideIcons({ lucideBold, lucideItalic, lucideUnderline })]
})
export class ToggleGroupOutlineExample {}

@Component({
  selector: 'toggle-group-single-example',
  template: `
    <div uiToggleGroup type="single">
      <button uiToggleGroupItem value="bold" aria-label="Toggle bold">
        <ng-icon name="lucideBold" size="16" />
      </button>
      <button uiToggleGroupItem value="italic" aria-label="Toggle italic">
        <ng-icon name="lucideItalic" size="16" />
      </button>
      <button uiToggleGroupItem value="underline" aria-label="Toggle underline">
        <ng-icon name="lucideUnderline" size="16" />
      </button>
    </div>
  `,
  imports: [UiToggleGroup, UiToggleGroupItem, NgIcon],
  providers: [provideIcons({ lucideBold, lucideItalic, lucideUnderline })]
})
export class ToggleGroupSingleExample {}

@Component({
  selector: 'toggle-group-small-example',
  template: `
    <div uiToggleGroup type="single" size="sm">
      <button uiToggleGroupItem value="bold" aria-label="Toggle bold">
        <ng-icon name="lucideBold" size="16" />
      </button>
      <button uiToggleGroupItem value="italic" aria-label="Toggle italic">
        <ng-icon name="lucideItalic" size="16" />
      </button>
      <button uiToggleGroupItem value="underline" aria-label="Toggle underline">
        <ng-icon name="lucideUnderline" size="16" />
      </button>
    </div>
  `,
  imports: [UiToggleGroup, UiToggleGroupItem, NgIcon],
  providers: [provideIcons({ lucideBold, lucideItalic, lucideUnderline })]
})
export class ToggleGroupSmallExample {}

@Component({
  selector: 'toggle-group-large-example',
  template: `
    <div uiToggleGroup type="multiple" size="lg">
      <button uiToggleGroupItem value="bold" aria-label="Toggle bold">
        <ng-icon name="lucideBold" size="16" />
      </button>
      <button uiToggleGroupItem value="italic" aria-label="Toggle italic">
        <ng-icon name="lucideItalic" size="16" />
      </button>
      <button uiToggleGroupItem value="underline" aria-label="Toggle underline">
        <ng-icon name="lucideUnderline" size="16" />
      </button>
    </div>
  `,
  imports: [UiToggleGroup, UiToggleGroupItem, NgIcon],
  providers: [provideIcons({ lucideBold, lucideItalic, lucideUnderline })]
})
export class ToggleGroupLargeExample {}

@Component({
  selector: 'toggle-group-disabled-example',
  template: `
    <div uiToggleGroup type="multiple" disabled>
      <button uiToggleGroupItem value="bold" aria-label="Toggle bold">
        <ng-icon name="lucideBold" size="16" />
      </button>
      <button uiToggleGroupItem value="italic" aria-label="Toggle italic">
        <ng-icon name="lucideItalic" size="16" />
      </button>
      <button uiToggleGroupItem value="underline" aria-label="Toggle underline">
        <ng-icon name="lucideUnderline" size="16" />
      </button>
    </div>
  `,
  imports: [UiToggleGroup, UiToggleGroupItem, NgIcon],
  providers: [provideIcons({ lucideBold, lucideItalic, lucideUnderline })]
})
export class ToggleGroupDisabledExample {}

@Component({
  selector: 'toggle-group-text-example',
  template: `
    <div uiToggleGroup type="single">
      <button uiToggleGroupItem value="left">
        <ng-icon name="lucideAlignLeft" size="16" />
        Left
      </button>
      <button uiToggleGroupItem value="center">
        <ng-icon name="lucideAlignCenter" size="16" />
        Center
      </button>
      <button uiToggleGroupItem value="right">
        <ng-icon name="lucideAlignRight" size="16" />
        Right
      </button>
    </div>
  `,
  imports: [UiToggleGroup, UiToggleGroupItem, NgIcon],
  providers: [provideIcons({ lucideAlignLeft, lucideAlignCenter, lucideAlignRight })]
})
export class ToggleGroupTextExample {}

export const toggleGroupMeta: IComponentMeta = {
  title: 'Toggle Group',
  description: 'A set of two-state buttons that can be toggled on or off. Uses a single tv() method with slots and variants. Toggle group items automatically inherit variant and size from their parent toggle group.',
  installation: {
    package: 'toggle-group',
    import: `import { UiToggleGroup, UiToggleGroupItem } from '@workspace/ui/directives/toggle-group';`,
    usage: `<div uiToggleGroup type="single">
  <button uiToggleGroupItem value="a">A</button>
  <button uiToggleGroupItem value="b">B</button>
  <button uiToggleGroupItem value="c">C</button>
</div>`
  },
  api: {
    props: [
      {
        name: 'variant',
        type: '"default" | "outline"',
        default: '"default"',
        description: 'The visual variant of the toggle group. Applied to both the group container and all items.'
      },
      {
        name: 'size',
        type: '"default" | "sm" | "lg"',
        default: '"default"',
        description: 'The size of the toggle group. Applied to both the group container and all items.'
      },
      {
        name: 'type',
        type: '"single" | "multiple"',
        default: '"single"',
        description: 'Whether to allow single or multiple selections.'
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the toggle group is disabled.'
      },
      {
        name: 'groupValue',
        type: 'string | string[]',
        description: 'The current value(s) of the toggle group.'
      },
      {
        name: 'value',
        type: 'string',
        description: 'The value of the toggle group item. Items inherit variant and size from parent.'
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the toggle group item is disabled.'
      },
      {
        name: 'class',
        type: 'string',
        description: 'Additional CSS classes to apply to the toggle group or item.'
      }
    ],
    outputs: [
      {
        name: 'groupValueChange',
        type: 'EventEmitter<string | string[]>',
        description: 'Event emitted when the toggle group value changes.'
      }
    ]
  }
};

export const toggleGroupVariants: IVariant[] = [
  {
    title: 'Default',
    description: 'The default toggle group with multiple selection.',
    code: `import { UiToggleGroup, UiToggleGroupItem } from '@workspace/ui/directives/toggle-group';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBold, lucideItalic, lucideUnderline } from '@ng-icons/lucide';

@Component({
  selector: 'toggle-group-default-example',
  template: \`
    <div uiToggleGroup variant="outline" type="multiple">
      <button uiToggleGroupItem value="bold" aria-label="Toggle bold">
        <ng-icon name="lucideBold" size="16" />
      </button>
      <button uiToggleGroupItem value="italic" aria-label="Toggle italic">
        <ng-icon name="lucideItalic" size="16" />
      </button>
      <button uiToggleGroupItem value="underline" aria-label="Toggle underline">
        <ng-icon name="lucideUnderline" size="16" />
      </button>
    </div>
  \`,
  imports: [UiToggleGroup, UiToggleGroupItem, NgIcon],
  providers: [provideIcons({ lucideBold, lucideItalic, lucideUnderline })]
})
export class ToggleGroupDefaultExample {}`,
    component: ToggleGroupDefaultExample
  },
  {
    title: 'Outline',
    description: 'A toggle group with an outlined appearance.',
    code: `import { UiToggleGroup, UiToggleGroupItem } from '@workspace/ui/directives/toggle-group';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBold, lucideItalic, lucideUnderline } from '@ng-icons/lucide';

@Component({
  selector: 'toggle-group-outline-example',
  template: \`
    <div uiToggleGroup type="multiple" variant="outline">
      <button uiToggleGroupItem value="bold" aria-label="Toggle bold">
        <ng-icon name="lucideBold" size="16" />
      </button>
      <button uiToggleGroupItem value="italic" aria-label="Toggle italic">
        <ng-icon name="lucideItalic" size="16" />
      </button>
      <button uiToggleGroupItem value="underline" aria-label="Toggle underline">
        <ng-icon name="lucideUnderline" size="16" />
      </button>
    </div>
  \`,
  imports: [UiToggleGroup, UiToggleGroupItem, NgIcon],
  providers: [provideIcons({ lucideBold, lucideItalic, lucideUnderline })]
})
export class ToggleGroupOutlineExample {}`,
    component: ToggleGroupOutlineExample
  },
  {
    title: 'Single Selection',
    description: 'A toggle group that allows only single selection.',
    code: `import { UiToggleGroup, UiToggleGroupItem } from '@workspace/ui/directives/toggle-group';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBold, lucideItalic, lucideUnderline } from '@ng-icons/lucide';

@Component({
  selector: 'toggle-group-single-example',
  template: \`
    <div uiToggleGroup type="single">
      <button uiToggleGroupItem value="bold" aria-label="Toggle bold">
        <ng-icon name="lucideBold" size="16" />
      </button>
      <button uiToggleGroupItem value="italic" aria-label="Toggle italic">
        <ng-icon name="lucideItalic" size="16" />
      </button>
      <button uiToggleGroupItem value="underline" aria-label="Toggle underline">
        <ng-icon name="lucideUnderline" size="16" />
      </button>
    </div>
  \`,
  imports: [UiToggleGroup, UiToggleGroupItem, NgIcon],
  providers: [provideIcons({ lucideBold, lucideItalic, lucideUnderline })]
})
export class ToggleGroupSingleExample {}`,
    component: ToggleGroupSingleExample
  },
  {
    title: 'Small Size',
    description: 'A toggle group in small size.',
    code: `import { UiToggleGroup, UiToggleGroupItem } from '@workspace/ui/directives/toggle-group';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBold, lucideItalic, lucideUnderline } from '@ng-icons/lucide';

@Component({
  selector: 'toggle-group-small-example',
  template: \`
    <div uiToggleGroup type="single" size="sm">
      <button uiToggleGroupItem value="bold" aria-label="Toggle bold">
        <ng-icon name="lucideBold" size="16" />
      </button>
      <button uiToggleGroupItem value="italic" aria-label="Toggle italic">
        <ng-icon name="lucideItalic" size="16" />
      </button>
      <button uiToggleGroupItem value="underline" aria-label="Toggle underline">
        <ng-icon name="lucideUnderline" size="16" />
      </button>
    </div>
  \`,
  imports: [UiToggleGroup, UiToggleGroupItem, NgIcon],
  providers: [provideIcons({ lucideBold, lucideItalic, lucideUnderline })]
})
export class ToggleGroupSmallExample {}`,
    component: ToggleGroupSmallExample
  },
  {
    title: 'Large Size',
    description: 'A toggle group in large size.',
    code: `import { UiToggleGroup, UiToggleGroupItem } from '@workspace/ui/directives/toggle-group';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBold, lucideItalic, lucideUnderline } from '@ng-icons/lucide';

@Component({
  selector: 'toggle-group-large-example',
  template: \`
    <div uiToggleGroup type="multiple" size="lg">
      <button uiToggleGroupItem value="bold" aria-label="Toggle bold">
        <ng-icon name="lucideBold" size="16" />
      </button>
      <button uiToggleGroupItem value="italic" aria-label="Toggle italic">
        <ng-icon name="lucideItalic" size="16" />
      </button>
      <button uiToggleGroupItem value="underline" aria-label="Toggle underline">
        <ng-icon name="lucideUnderline" size="16" />
      </button>
    </div>
  \`,
  imports: [UiToggleGroup, UiToggleGroupItem, NgIcon],
  providers: [provideIcons({ lucideBold, lucideItalic, lucideUnderline })]
})
export class ToggleGroupLargeExample {}`,
    component: ToggleGroupLargeExample
  },
  {
    title: 'Disabled',
    description: 'A disabled toggle group.',
    code: `import { UiToggleGroup, UiToggleGroupItem } from '@workspace/ui/directives/toggle-group';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBold, lucideItalic, lucideUnderline } from '@ng-icons/lucide';

@Component({
  selector: 'toggle-group-disabled-example',
  template: \`
    <div uiToggleGroup type="multiple" disabled>
      <button uiToggleGroupItem value="bold" aria-label="Toggle bold">
        <ng-icon name="lucideBold" size="16" />
      </button>
      <button uiToggleGroupItem value="italic" aria-label="Toggle italic">
        <ng-icon name="lucideItalic" size="16" />
      </button>
      <button uiToggleGroupItem value="underline" aria-label="Toggle underline">
        <ng-icon name="lucideUnderline" size="16" />
      </button>
    </div>
  \`,
  imports: [UiToggleGroup, UiToggleGroupItem, NgIcon],
  providers: [provideIcons({ lucideBold, lucideItalic, lucideUnderline })]
})
export class ToggleGroupDisabledExample {}`,
    component: ToggleGroupDisabledExample
  },
  {
    title: 'With Text',
    description: 'A toggle group with text labels.',
    code: `import { UiToggleGroup, UiToggleGroupItem } from '@workspace/ui/directives/toggle-group';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideAlignLeft, lucideAlignCenter, lucideAlignRight } from '@ng-icons/lucide';

@Component({
  selector: 'toggle-group-text-example',
  template: \`
    <div uiToggleGroup type="single">
      <button uiToggleGroupItem value="left">
        <ng-icon name="lucideAlignLeft" size="16" />
        Left
      </button>
      <button uiToggleGroupItem value="center">
        <ng-icon name="lucideAlignCenter" size="16" />
        Center
      </button>
      <button uiToggleGroupItem value="right">
        <ng-icon name="lucideAlignRight" size="16" />
        Right
      </button>
    </div>
  \`,
  imports: [UiToggleGroup, UiToggleGroupItem, NgIcon],
  providers: [provideIcons({ lucideAlignLeft, lucideAlignCenter, lucideAlignRight })]
})
export class ToggleGroupTextExample {}`,
    component: ToggleGroupTextExample
  }
];

