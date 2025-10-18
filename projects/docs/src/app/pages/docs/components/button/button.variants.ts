import { Component } from '@angular/core';
import { UiButton } from 'ui';
import {
  IVariant,
  IComponentMeta,
} from '@components/component-preview/component-preview';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideDownload,
  lucideLoaderCircle,
  lucideUpload,
} from '@ng-icons/lucide';

// Button example components for dynamic rendering
@Component({
  selector: 'button-default-example',
  template: `<button uiButton>Button</button>`,
  imports: [UiButton],
})
export class ButtonDefaultExample {}

@Component({
  selector: 'button-outline-example',
  template: `<button uiButton variant="outline">Outline</button>`,
  imports: [UiButton],
})
export class ButtonOutlineExample {}

@Component({
  selector: 'button-destructive-example',
  template: `<button uiButton variant="destructive">Destructive</button>`,
  imports: [UiButton],
})
export class ButtonDestructiveExample {}

@Component({
  selector: 'button-secondary-example',
  template: `<button uiButton variant="secondary">Secondary</button>`,
  imports: [UiButton],
})
export class ButtonSecondaryExample {}

@Component({
  selector: 'button-ghost-example',
  template: `<button uiButton variant="ghost">Ghost</button>`,
  imports: [UiButton],
})
export class ButtonGhostExample {}

@Component({
  selector: 'button-link-example',
  template: `<button uiButton variant="link">Link</button>`,
  imports: [UiButton],
})
export class ButtonLinkExample {}

@Component({
  selector: 'button-sizes-example',
  template: `
    <div class="flex items-center gap-4">
      <button uiButton size="sm">Small</button>
      <button uiButton size="default">Default</button>
      <button uiButton size="lg">Large</button>
    </div>
  `,
  imports: [UiButton],
})
export class ButtonSizesExample {}

@Component({
  selector: 'button-with-icon-example',
  template: `
    <div class="flex items-center gap-4">
      <button uiButton>
        <ng-icon name="lucideDownload" size="16" />
        Download
      </button>
      <button uiButton variant="outline" size="icon">
        <ng-icon name="lucideUpload" size="16" />
      </button>
    </div>
  `,
  imports: [UiButton, NgIcon],
  providers: [provideIcons({ lucideDownload, lucideUpload })],
})
export class ButtonWithIconExample {}

@Component({
  selector: 'button-loading-example',
  imports: [UiButton, NgIcon],
  providers: [provideIcons({ lucideLoaderCircle })],
  template: `
    <button uiButton disabled>
      <ng-icon
        class="animate-spin -ml-1 mr-2 h-4 w-4"
        name="lucideLoaderCircle"
        size="16"
      />
      Loading...
    </button>
  `,
})
export class ButtonLoadingExample {}

export const buttonMeta: IComponentMeta = {
  title: 'Button',
  description: 'Displays a button or a component that looks like a button.',
  installation: {
    package: 'button',
    import: `import { UiButton } from '@workspace/ui/directives/button';`,
    usage: `<button uiButton>Button</button>`,
  },
  api: {
    props: [
      {
        name: 'variant',
        type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
        default: '"default"',
        description: 'The visual variant of the button.',
      },
      {
        name: 'size',
        type: '"default" | "sm" | "lg" | "icon"',
        default: '"default"',
        description: 'The size of the button.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the button is disabled.',
      },
      {
        name: 'class',
        type: 'string',
        description: 'Additional CSS classes to apply to the button.',
      },
    ],
  },
};

export const buttonVariants: IVariant[] = [
  {
    title: 'Default',
    description: 'The default button appearance.',
    code: `import { UiButton } from '@workspace/ui/directives/button';

@Component({
  selector: 'button-default-example',
  template: \`<button uiButton>Button</button>\`,
  imports: [UiButton]
})
export class ButtonDefaultExample {}`,
    component: ButtonDefaultExample,
  },
  {
    title: 'Outline',
    description: 'A button with an outlined appearance.',
    code: `import { UiButton } from '@workspace/ui/directives/button';

@Component({
  selector: 'button-outline-example',
  template: \`<button uiButton variant="outline">Outline</button>\`,
  imports: [UiButton]
})
export class ButtonOutlineExample {}`,
    component: ButtonOutlineExample,
  },
  {
    title: 'Destructive',
    description: 'A button for destructive actions.',
    code: `import { UiButton } from '@workspace/ui/directives/button';

@Component({
  selector: 'button-destructive-example',
  template: \`<button uiButton variant="destructive">Destructive</button>\`,
  imports: [UiButton]
})
export class ButtonDestructiveExample {}`,
    component: ButtonDestructiveExample,
  },
  {
    title: 'Secondary',
    description: 'A secondary button style.',
    code: `import { UiButton } from '@workspace/ui/directives/button';

@Component({
  selector: 'button-secondary-example',
  template: \`<button uiButton variant="secondary">Secondary</button>\`,
  imports: [UiButton]
})
export class ButtonSecondaryExample {}`,
    component: ButtonSecondaryExample,
  },
  {
    title: 'Ghost',
    description: 'A button with a subtle appearance.',
    code: `import { UiButton } from '@workspace/ui/directives/button';

@Component({
  selector: 'button-ghost-example',
  template: \`<button uiButton variant="ghost">Ghost</button>\`,
  imports: [UiButton]
})
export class ButtonGhostExample {}`,
    component: ButtonGhostExample,
  },
  {
    title: 'Link',
    description: 'A button that looks like a link.',
    code: `import { UiButton } from '@workspace/ui/directives/button';

@Component({
  selector: 'button-link-example',
  template: \`<button uiButton variant="link">Link</button>\`,
  imports: [UiButton]
})
export class ButtonLinkExample {}`,
    component: ButtonLinkExample,
  },
  {
    title: 'Sizes',
    description: 'Buttons in different sizes.',
    code: `import { UiButton } from '@workspace/ui/directives/button';

@Component({
  selector: 'button-sizes-example',
  template: \`
    <div class="flex items-center gap-4">
      <button uiButton size="sm">Small</button>
      <button uiButton size="default">Default</button>
      <button uiButton size="lg">Large</button>
    </div>
  \`,
  imports: [UiButton]
})
export class ButtonSizesExample {}`,
    component: ButtonSizesExample,
  },
  {
    title: 'With Icon',
    description: 'Buttons with icons and icon-only buttons.',
    code: `import { UiButton } from '@workspace/ui/directives/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideDownload, lucideUpload } from '@ng-icons/lucide';

@Component({
  selector: 'button-with-icon-example',
  template: \`
    <div class="flex items-center gap-4">
      <button uiButton>
        <ng-icon name="lucideDownload" size="16" />
        Download
      </button>
      <button uiButton variant="outline" size="icon">
        <ng-icon name="lucideUpload" size="16" />
      </button>
    </div>
  \`,
  imports: [UiButton, NgIcon],
  providers: [provideIcons({ lucideDownload, lucideUpload })]
})
export class ButtonWithIconExample {}`,
    component: ButtonWithIconExample,
  },
  {
    title: 'Loading State',
    description: 'A button with loading indicator.',
    code: `import { UiButton } from '@workspace/ui/directives/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideLoaderCircle } from '@ng-icons/lucide';

@Component({
  selector: 'button-loading-example',
  imports: [UiButton, NgIcon],
  providers: [provideIcons({ lucideLoaderCircle })],
  template: \`
    <button uiButton disabled>
      <ng-icon class="animate-spin -ml-1 mr-2 h-4 w-4" name="lucideLoaderCircle" size="16" />
      Loading...
    </button>
  \`
})
export class ButtonLoadingExample {}`,
    component: ButtonLoadingExample,
  },
];
