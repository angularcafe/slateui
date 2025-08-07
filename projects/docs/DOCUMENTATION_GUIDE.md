# Component Documentation Guide

This guide explains how to create comprehensive, interactive documentation for UI components using our enhanced documentation system.

## Overview

The enhanced documentation system provides:

- **Dynamic Component Preview**: Live examples that render actual components
- **Syntax Highlighting**: Beautiful code highlighting using ngx-highlightjs
- **Copy-to-Clipboard**: One-click code copying with visual feedback
- **Enhanced API Documentation**: Professional prop tables with color-coded types
- **Installation Instructions**: Step-by-step setup with highlighted code blocks
- **Multiple Variants**: Showcase different component configurations
- **Responsive Design**: Optimized for all screen sizes
- **Consistent Styling**: Professional documentation layout

## Quick Start

### 1. Use the Template

Copy the template from `projects/docs/src/app/shared/templates/component-docs.template.ts` and modify it for your component:

```bash
cp projects/docs/src/app/shared/templates/component-docs.template.ts \
   projects/docs/src/app/pages/docs/components/your-component/your-component.variants.ts
```

### 2. Replace Placeholders

In your new file, replace:
- `COMPONENT_NAME` with your component name (e.g., `badge`)
- `ComponentName` with your component class name (e.g., `Badge`)
- `UiCOMPONENT_NAME` with your actual component (e.g., `UiBadge`)

### 3. Define Component Metadata

```typescript
export const badgeMeta: IComponentMeta = {
  title: 'Badge',
  description: 'Displays a badge for labels, status, or counts.',
  installation: {
    import: `import { UiBadge } from 'ui';`,
    usage: `<span uiBadge>Badge</span>`
  },
  api: {
    props: [
      {
        name: 'variant',
        type: '"default" | "secondary" | "destructive" | "outline"',
        default: '"default"',
        description: 'The visual variant of the badge.'
      }
    ]
  }
};
```

### 4. Create Example Components

```typescript
@Component({
  selector: 'badge-default-example',
  template: `<span uiBadge>Badge</span>`,
  imports: [UiBadge]
})
export class BadgeDefaultExample {}
```

### 5. Define Variants

```typescript
export const badgeVariants: IVariant[] = [
  {
    title: 'Default',
    description: 'The default badge appearance.',
    code: `<span uiBadge>Badge</span>`,
    component: BadgeDefaultExample
  }
];
```

### 6. Create the Component

```typescript
import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { badgeVariants, badgeMeta } from './badge.variants';

@Component({
  selector: 'docs-badge',
  imports: [ComponentPreview],
  template: `
    <docs-component-preview 
      [meta]="badgeMeta" 
      [variants]="badgeVariants">
    </docs-component-preview>
  `
})
export class Badge {
  badgeMeta = badgeMeta;
  badgeVariants = badgeVariants;
}
```

## Advanced Features

### Interactive Examples

For complex examples, you can create interactive components:

```typescript
@Component({
  selector: 'button-interactive-example',
  template: `
    <div class="space-y-4">
      <div class="flex gap-2">
        <button uiButton [variant]="selectedVariant" (click)="handleClick()">
          {{ buttonText }}
        </button>
      </div>
      <div class="flex gap-2">
        <label>
          <input type="radio" [value]="'default'" [(ngModel)]="selectedVariant"> Default
        </label>
        <label>
          <input type="radio" [value]="'outline'" [(ngModel)]="selectedVariant"> Outline
        </label>
      </div>
    </div>
  `,
  imports: [UiButton, FormsModule]
})
export class ButtonInteractiveExample {
  selectedVariant: 'default' | 'outline' = 'default';
  buttonText = 'Click me';
  
  handleClick() {
    this.buttonText = 'Clicked!';
    setTimeout(() => this.buttonText = 'Click me', 1000);
  }
}
```

### Multiple Examples in One Variant

```typescript
{
  title: 'Sizes',
  description: 'Buttons in different sizes.',
  code: `<div class="flex items-center gap-4">
  <button uiButton size="sm">Small</button>
  <button uiButton size="default">Default</button>
  <button uiButton size="lg">Large</button>
</div>`,
  component: ButtonSizesExample
}
```

### Complex API Documentation

```typescript
api: {
  props: [
    {
      name: 'variant',
      type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
      default: '"default"',
      description: 'The visual variant of the button.',
      required: false
    },
    {
      name: 'size',
      type: '"default" | "sm" | "lg" | "icon"',
      default: '"default"',
      description: 'The size of the button.',
      required: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Whether the button is disabled.',
      required: false
    }
  ]
}
```

## Best Practices

### 1. **Comprehensive Examples**
- Show all variants and use cases
- Include edge cases and real-world scenarios
- Provide both simple and complex examples

### 2. **Clear Code Examples**
- Format code properly with correct indentation
- Use realistic content and data
- Include necessary imports and setup

### 3. **Detailed API Documentation**
- Document all props with accurate types
- Include default values where applicable
- Provide helpful descriptions
- Mark required props clearly

### 4. **Consistent Naming**
- Use descriptive names for example components
- Follow the pattern: `ComponentVariantExample`
- Use kebab-case for selectors

### 5. **Good Descriptions**
- Write clear, concise descriptions
- Explain when to use each variant
- Provide context for complex examples

## File Structure

```
your-component/
├── your-component.ts           # Main component class
├── your-component.variants.ts  # Variants and metadata
└── your-component.spec.ts      # Tests
```

## Interfaces Reference

### IComponentMeta
```typescript
interface IComponentMeta {
  title: string;
  description: string;
  installation?: {
    package?: string;    // NPM package name
    import: string;      // Import statement
    usage: string;       // Basic usage example
  };
  api?: {
    props?: Array<{
      name: string;
      type: string;
      default?: string;
      description: string;
      required?: boolean;
    }>;
  };
}
```

### IVariant
```typescript
interface IVariant {
  title: string;
  description?: string;
  code: string;
  template?: TemplateRef<unknown> | null;
  component?: Type<any>;
  props?: Record<string, any>;
  children?: string;
}
```

## Migration from Old System

If you have existing documentation using the old system:

1. **Remove hard-coded switch statements** from templates
2. **Create example components** for each variant
3. **Add component metadata** with API documentation
4. **Update imports** to use the new ComponentPreview
5. **Delete old HTML template files**

## Examples

See the enhanced Button and Alert components for complete examples:
- `projects/docs/src/app/pages/docs/components/button/`
- `projects/docs/src/app/pages/docs/components/alert/`

These demonstrate all the features and best practices outlined in this guide.