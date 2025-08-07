import { Component, TemplateRef, ViewChild, input } from '@angular/core';
import { UiButton } from 'ui';
import { IVariant, IComponentMeta } from '@components/component-preview/component-preview';

// Button example components for dynamic rendering
@Component({
  selector: 'button-default-example',
  template: `<button uiButton>Button</button>`,
  imports: [UiButton]
})
export class ButtonDefaultExample {}

@Component({
  selector: 'button-outline-example',
  template: `<button uiButton variant="outline">Outline</button>`,
  imports: [UiButton]
})
export class ButtonOutlineExample {}

@Component({
  selector: 'button-destructive-example',
  template: `<button uiButton variant="destructive">Destructive</button>`,
  imports: [UiButton]
})
export class ButtonDestructiveExample {}

@Component({
  selector: 'button-secondary-example',
  template: `<button uiButton variant="secondary">Secondary</button>`,
  imports: [UiButton]
})
export class ButtonSecondaryExample {}

@Component({
  selector: 'button-ghost-example',
  template: `<button uiButton variant="ghost">Ghost</button>`,
  imports: [UiButton]
})
export class ButtonGhostExample {}

@Component({
  selector: 'button-link-example',
  template: `<button uiButton variant="link">Link</button>`,
  imports: [UiButton]
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
  imports: [UiButton]
})
export class ButtonSizesExample {}

@Component({
  selector: 'button-with-icon-example',
  template: `
    <div class="flex items-center gap-4">
      <button uiButton>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7,10 12,15 17,10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Download
      </button>
      <button uiButton variant="outline" size="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
          <polyline points="16,6 12,2 8,6"/>
          <line x1="12" y1="2" x2="12" y2="15"/>
        </svg>
      </button>
    </div>
  `,
  imports: [UiButton]
})
export class ButtonWithIconExample {}

@Component({
  selector: 'button-loading-example',
  template: `
    <button uiButton [disabled]="true">
      <svg class="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Loading...
    </button>
  `,
  imports: [UiButton]
})
export class ButtonLoadingExample {}

export const buttonMeta: IComponentMeta = {
  title: 'Button',
  description: 'Displays a button or a component that looks like a button.',
  installation: {
    import: `import { UiButton } from 'ui';`,
    usage: `<button uiButton>Click me</button>`
  },
  api: {
    props: [
      {
        name: 'variant',
        type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
        default: '"default"',
        description: 'The visual variant of the button.'
      },
      {
        name: 'size',
        type: '"default" | "sm" | "lg" | "icon"',
        default: '"default"',
        description: 'The size of the button.'
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the button is disabled.'
      },
      {
        name: 'class',
        type: 'string',
        description: 'Additional CSS classes to apply to the button.'
      }
    ]
  }
};

export const buttonVariants: IVariant[] = [
  {
    title: 'Default',
    description: 'The default button appearance.',
    code: `<button uiButton>Button</button>`,
    component: ButtonDefaultExample
  },
  {
    title: 'Outline',
    description: 'A button with an outlined appearance.',
    code: `<button uiButton variant="outline">Outline</button>`,
    component: ButtonOutlineExample
  },
  {
    title: 'Destructive',
    description: 'A button for destructive actions.',
    code: `<button uiButton variant="destructive">Destructive</button>`,
    component: ButtonDestructiveExample
  },
  {
    title: 'Secondary',
    description: 'A secondary button style.',
    code: `<button uiButton variant="secondary">Secondary</button>`,
    component: ButtonSecondaryExample
  },
  {
    title: 'Ghost',
    description: 'A button with a subtle appearance.',
    code: `<button uiButton variant="ghost">Ghost</button>`,
    component: ButtonGhostExample
  },
  {
    title: 'Link',
    description: 'A button that looks like a link.',
    code: `<button uiButton variant="link">Link</button>`,
    component: ButtonLinkExample
  },
  {
    title: 'Sizes',
    description: 'Buttons in different sizes.',
    code: `<div class="flex items-center gap-4">
  <button uiButton size="sm">Small</button>
  <button uiButton size="default">Default</button>
  <button uiButton size="lg">Large</button>
</div>`,
    component: ButtonSizesExample
  },
  {
    title: 'With Icon',
    description: 'Buttons with icons and icon-only buttons.',
    code: `<div class="flex items-center gap-4">
  <button uiButton>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7,10 12,15 17,10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
    Download
  </button>
  <button uiButton variant="outline" size="icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
      <polyline points="16,6 12,2 8,6"/>
      <line x1="12" y1="2" x2="12" y2="15"/>
    </svg>
  </button>
</div>`,
    component: ButtonWithIconExample
  },
  {
    title: 'Loading State',
    description: 'A button with loading indicator.',
    code: `<button uiButton [disabled]="true">
  <svg class="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  Loading...
</button>`,
    component: ButtonLoadingExample
  }
];