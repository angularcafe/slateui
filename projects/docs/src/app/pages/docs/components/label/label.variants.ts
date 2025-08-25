import { Component } from '@angular/core';
import { UiLabel } from 'ui';
import { IVariant, IComponentMeta } from '@components/component-preview/component-preview';

// Label example components for dynamic rendering
@Component({
  selector: 'label-default-example',
  template: `
    <div class="grid w-full max-w-sm items-center gap-1.5">
      <label uiLabel for="email">Email</label>
      <input type="email" id="email" placeholder="Enter your email" class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" />
    </div>
  `,
  imports: [UiLabel]
})
export class LabelDefaultExample {}

@Component({
  selector: 'label-with-description-example',
  template: `
    <div class="grid w-full max-w-sm items-center gap-1.5">
      <label uiLabel for="username">Username</label>
      <p class="text-sm text-muted-foreground">Enter your username to sign in to your account.</p>
      <input type="text" id="username" placeholder="Enter your username" class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" />
    </div>
  `,
  imports: [UiLabel]
})
export class LabelWithDescriptionExample {}

@Component({
  selector: 'label-required-example',
  template: `
    <div class="grid w-full max-w-sm items-center gap-1.5">
      <label uiLabel for="password">
        Password
        <span class="text-destructive">*</span>
      </label>
      <input type="password" id="password" placeholder="Enter your password" class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" />
    </div>
  `,
  imports: [UiLabel]
})
export class LabelRequiredExample {}

@Component({
  selector: 'label-disabled-example',
  template: `
    <div class="grid w-full max-w-sm items-center gap-1.5">
      <label uiLabel for="disabled-input" class="opacity-50">Disabled Input</label>
      <input type="text" id="disabled-input" placeholder="This input is disabled" disabled class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" />
    </div>
  `,
  imports: [UiLabel]
})
export class LabelDisabledExample {}

export const labelMeta: IComponentMeta = {
  title: 'Label',
  description: 'Renders a label associated with a form control or other component.',
  installation: {
    package: 'label',
    import: `import { UiLabel } from 'ui';`,
    usage: `<label uiLabel for="input-id">Label Text</label>`
  },
  api: {
    props: [
      {
        name: 'uiLabel',
        type: 'Directive',
        description: 'The label directive that provides proper styling and accessibility.'
      },
      {
        name: 'for',
        type: 'string',
        description: 'The ID of the form control this label is associated with.'
      },
      {
        name: 'class',
        type: 'string',
        description: 'Additional CSS classes to apply to the label.'
      }
    ]
  }
};

export const labelVariants: IVariant[] = [
  {
    title: 'Default',
    description: 'Basic label for form inputs.',
    code: `import { UiLabel } from 'ui';

@Component({
  selector: 'label-default-example',
  template: \`
    <div class="grid w-full max-w-sm items-center gap-1.5">
      <label uiLabel for="email">Email</label>
      <input type="email" id="email" placeholder="Enter your email" />
    </div>
  \`,
  imports: [UiLabel]
})
export class LabelDefaultExample {}`,
    component: LabelDefaultExample
  },
  {
    title: 'With Description',
    description: 'Label with additional descriptive text below.',
    code: `import { UiLabel } from 'ui';

@Component({
  selector: 'label-with-description-example',
  template: \`
    <div class="grid w-full max-w-sm items-center gap-1.5">
      <label uiLabel for="username">Username</label>
      <p class="text-sm text-muted-foreground">Enter your username to sign in to your account.</p>
      <input type="text" id="username" placeholder="Enter your username" />
    </div>
  \`,
  imports: [UiLabel]
})
export class LabelWithDescriptionExample {}`,
    component: LabelWithDescriptionExample
  },
  {
    title: 'Required',
    description: 'Label indicating a required field.',
    code: `import { UiLabel } from 'ui';

@Component({
  selector: 'label-required-example',
  template: \`
    <div class="grid w-full max-w-sm items-center gap-1.5">
      <label uiLabel for="password">
        Password
        <span class="text-destructive">*</span>
      </label>
      <input type="password" id="password" placeholder="Enter your password" />
    </div>
  \`,
  imports: [UiLabel]
})
export class LabelRequiredExample {}`,
    component: LabelRequiredExample
  },
  {
    title: 'Disabled',
    description: 'Label for disabled form controls.',
    code: `import { UiLabel } from 'ui';

@Component({
  selector: 'label-disabled-example',
  template: \`
    <div class="grid w-full max-w-sm items-center gap-1.5">
      <label uiLabel for="disabled-input" class="opacity-50">Disabled Input</label>
      <input type="text" id="disabled-input" placeholder="This input is disabled" disabled />
    </div>
  \`,
  imports: [UiLabel]
})
export class LabelDisabledExample {}`,
    component: LabelDisabledExample
  }
]; 