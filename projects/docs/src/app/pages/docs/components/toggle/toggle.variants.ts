import { Component, model } from '@angular/core';
import { UiToggle } from 'ui';
import { IVariant, IComponentMeta } from '@components/component-preview/component-preview';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBold, lucideItalic, lucideUnderline } from '@ng-icons/lucide';

// Toggle example components for dynamic rendering
@Component({
  selector: 'toggle-default-example',
  template: `
  <button uiToggle [(uiToggleSelected)]="selected">
    <ng-icon name="lucideBold" size="16" />
  </button>`,
  imports: [UiToggle, NgIcon],
  providers: [provideIcons({ lucideBold })],

})
export class ToggleDefaultExample {
    selected = model(false);
}

@Component({
  selector: 'toggle-outline-example',
  template: `<button uiToggle [(uiToggleSelected)]="selected" variant="outline">
    <ng-icon name="lucideItalic" size="16" />
  </button>`,
  imports: [UiToggle, NgIcon],
  providers: [provideIcons({ lucideItalic })],

})
export class ToggleOutlineExample {
    selected = model(false);
}

@Component({
  selector: 'toggle-with-text-example',
  template: `<button uiToggle [(uiToggleSelected)]="selected">
    <ng-icon name="lucideItalic" size="16" />
    Italic
  </button>`,
  imports: [UiToggle, NgIcon],
  providers: [provideIcons({ lucideItalic })],

})
export class ToggleWithTextExample {
    selected = model(false);
}

@Component({
  selector: 'toggle-sizes-example',
  template: `
    <div class="flex items-center gap-4">
      <button uiToggle [(uiToggleSelected)]="selectedSm" size="sm">
        <ng-icon name="lucideBold" size="14" />
      </button>
      <button uiToggle [(uiToggleSelected)]="selectedDefault" size="default">
        <ng-icon name="lucideBold" size="16" />
      </button>
      <button uiToggle [(uiToggleSelected)]="selectedLg" size="lg">
        <ng-icon name="lucideBold" size="18" />
      </button>
    </div>
  `,
  imports: [UiToggle, NgIcon],
  providers: [provideIcons({ lucideBold })],

})
export class ToggleSizesExample {
    selectedSm = model(false);
    selectedDefault = model(false);
    selectedLg = model(false);
}

@Component({
  selector: 'toggle-disabled-example',
  template: `<button uiToggle [(uiToggleSelected)]="selected" disabled>
    <ng-icon name="lucideUnderline" size="16" />
  </button>`,
  imports: [UiToggle, NgIcon],
  providers: [provideIcons({ lucideUnderline })],

})
export class ToggleDisabledExample {
    selected = model(false);
}



export const toggleMeta: IComponentMeta = {
  title: 'Toggle',
  description: 'A two-state button that can be either on or off.',
  installation: {
    package: 'toggle',
    import: `import { UiToggle } from '@workspace/ui/directives/toggle';`,
    usage: `<button uiToggle [(uiToggleSelected)]="selected">Toggle</button>`
  },
  api: {
    props: [
      {
        name: 'variant',
        type: '"default" | "outline"',
        default: '"default"',
        description: 'The visual variant of the toggle.'
      },
      {
        name: 'size',
        type: '"default" | "sm" | "lg"',
        default: '"default"',
        description: 'The size of the toggle.'
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the toggle is disabled.'
      },
      {
        name: 'uiToggleSelected',
        type: 'boolean',
        default: 'false',
        description: 'Two-way binding for the toggle state.'
      },
      {
        name: 'class',
        type: 'string',
        description: 'Additional CSS classes to apply to the toggle.'
      }
    ]
  }
};

export const toggleVariants: IVariant[] = [
  {
    title: 'Default',
    description: 'The default toggle appearance.',
    code: `import { Component, model } from '@angular/core';
import { UiToggle } from '@workspace/ui/directives/toggle';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBold } from '@ng-icons/lucide';

@Component({
  selector: 'toggle-default-example',
  template: \`<button uiToggle [(uiToggleSelected)]="selected">
    <ng-icon name="lucideBold" size="16" />
  </button>\`,
  imports: [UiToggle, NgIcon],
  providers: [provideIcons({ lucideBold })]
})
export class ToggleDefaultExample {
    selected = model(false);
}`,
    component: ToggleDefaultExample
  },
  {
    title: 'Outline',
    description: 'A toggle with an outlined appearance.',
    code: `import { Component, model } from '@angular/core';
import { UiToggle } from '@workspace/ui/directives/toggle';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideItalic } from '@ng-icons/lucide';

@Component({
  selector: 'toggle-outline-example',
  template: \`<button uiToggle [(uiToggleSelected)]="selected" variant="outline">
    <ng-icon name="lucideItalic" size="16" />
  </button>\`,
  imports: [UiToggle, NgIcon],
  providers: [provideIcons({ lucideItalic })]
})
export class ToggleOutlineExample {
    selected = model(false);
}`,
    component: ToggleOutlineExample
  },
  {
    title: 'With Text',
    description: 'A toggle with text and icon.',
    code: `import { Component, model } from '@angular/core';
import { UiToggle } from '@workspace/ui/directives/toggle';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideItalic } from '@ng-icons/lucide';

@Component({
  selector: 'toggle-with-text-example',
  template: \`<button uiToggle [(uiToggleSelected)]="selected">
    <ng-icon name="lucideItalic" size="16" />
    Italic
  </button>\`,
  imports: [UiToggle, NgIcon],
  providers: [provideIcons({ lucideItalic })]
})
export class ToggleWithTextExample {
    selected = model(false);
}`,
    component: ToggleWithTextExample
  },
  {
    title: 'Sizes',
    description: 'Toggles in different sizes.',
    code: `import { Component, model } from '@angular/core';
import { UiToggle } from '@workspace/ui/directives/toggle';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBold } from '@ng-icons/lucide';

@Component({
  selector: 'toggle-sizes-example',
  template: \`
    <div class="flex items-center gap-4">
      <button uiToggle [(uiToggleSelected)]="selectedSm" size="sm">
        <ng-icon name="lucideBold" size="14" />
      </button>
      <button uiToggle [(uiToggleSelected)]="selectedDefault" size="default">
        <ng-icon name="lucideBold" size="16" />
      </button>
      <button uiToggle [(uiToggleSelected)]="selectedLg" size="lg">
        <ng-icon name="lucideBold" size="18" />
      </button>
    </div>
  \`,
  imports: [UiToggle, NgIcon],
  providers: [provideIcons({ lucideBold })]
})
export class ToggleSizesExample {
    selectedSm = model(false);
    selectedDefault = model(false);
    selectedLg = model(false);
}`,
    component: ToggleSizesExample
  },
  {
    title: 'Disabled',
    description: 'A disabled toggle.',
    code: `import { Component, model } from '@angular/core';
import { UiToggle } from '@workspace/ui/directives/toggle';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideUnderline } from '@ng-icons/lucide';

@Component({
  selector: 'toggle-disabled-example',
  template: \`<button uiToggle [(uiToggleSelected)]="selected" disabled>
    <ng-icon name="lucideUnderline" size="16" />
  </button>\`,
  imports: [UiToggle, NgIcon],
  providers: [provideIcons({ lucideUnderline })]
})
export class ToggleDisabledExample {
    selected = model(false);
}`,
    component: ToggleDisabledExample
  }
];
