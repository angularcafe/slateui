/**
 * TEMPLATE: Component Documentation Setup
 *
 * This template provides a standardized way to create documentation for UI components.
 * Copy this template and modify it for your component.
 *
 * Steps to use this template:
 * 1. Copy this file to your component docs folder
 * 2. Replace all instances of "COMPONENT_NAME" with your component name
 * 3. Replace all instances of "ComponentName" with your component class name
 * 4. Update the imports to match your component
 * 5. Define your component metadata and variants
 * 6. Create example components for each variant
 *
 * Example: For a Badge component, you would:
 * - Replace COMPONENT_NAME with "badge"
 * - Replace ComponentName with "Badge"
 * - Import UiBadge instead of UiCOMPONENT_NAME
 */

import { Component } from '@angular/core';
import {
  IVariant,
  IComponentMeta,
} from '@components/component-preview/component-preview';
// TODO: Replace with your actual component imports
// import { UiCOMPONENT_NAME } from 'ui';

// Example components for dynamic rendering
@Component({
  selector: 'COMPONENT_NAME-default-example',
  template: `
    <!-- TODO: Replace with your component's default usage -->
    <div uiCOMPONENT_NAME>Default Example</div>
  `,
  imports: [
    /* TODO: Add your component imports */
  ],
})
export class ComponentNameDefaultExample {}

@Component({
  selector: 'COMPONENT_NAME-variant-example',
  template: `
    <!-- TODO: Replace with your component's variant usage -->
    <div uiCOMPONENT_NAME variant="secondary">Variant Example</div>
  `,
  imports: [
    /* TODO: Add your component imports */
  ],
})
export class ComponentNameVariantExample {}

// TODO: Add more example components as needed

export const COMPONENT_NAMEMeta: IComponentMeta = {
  title: 'ComponentName', // TODO: Replace with your component's display name
  description: 'Brief description of what the component does.', // TODO: Add your description
  installation: {
    // package: '@your-org/ui', // TODO: Uncomment and modify if external package
    import: `import { UiCOMPONENT_NAME } from 'ui';`, // TODO: Replace with actual import
    usage: `<div uiCOMPONENT_NAME>Content</div>`, // TODO: Replace with basic usage
  },
  api: {
    props: [
      // TODO: Define your component's props
      {
        name: 'variant',
        type: '"default" | "secondary"',
        default: '"default"',
        description: 'The visual variant of the component.',
        required: false,
      },
      {
        name: 'size',
        type: '"sm" | "md" | "lg"',
        default: '"md"',
        description: 'The size of the component.',
        required: false,
      },
      // Add more props as needed
    ],
  },
};

export const COMPONENT_NAMEVariants: IVariant[] = [
  {
    title: 'Default',
    description: 'The default component appearance.',
    code: `<div uiCOMPONENT_NAME>Default</div>`, // TODO: Replace with actual code
    component: ComponentNameDefaultExample,
  },
  {
    title: 'Variant',
    description: 'A variant of the component.',
    code: `<div uiCOMPONENT_NAME variant="secondary">Variant</div>`, // TODO: Replace with actual code
    component: ComponentNameVariantExample,
  },
  // TODO: Add more variants as needed
];

// Component class template
/*
import { Component } from '@angular/core';
import { ComponentPreview } from '@components/component-preview/component-preview';
import { COMPONENT_NAMEVariants, COMPONENT_NAMEMeta } from './COMPONENT_NAME.variants';

@Component({
  selector: 'docs-COMPONENT_NAME',
  imports: [ComponentPreview],
  template: `
    <docs-component-preview 
      [meta]="COMPONENT_NAMEMeta" 
      [variants]="COMPONENT_NAMEVariants">
    </docs-component-preview>
  `
})
export class ComponentName {
  COMPONENT_NAMEMeta = COMPONENT_NAMEMeta;
  COMPONENT_NAMEVariants = COMPONENT_NAMEVariants;
}
*/
