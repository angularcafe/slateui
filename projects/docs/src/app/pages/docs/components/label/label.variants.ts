import { Component } from '@angular/core';
import { UiLabel, UiInput, UiFormField, UiDescription } from 'ui';
import { IVariant, IComponentMeta } from '@components/component-preview/component-preview';
import { FormsModule } from '@angular/forms';

// Label example components for dynamic rendering
@Component({
  selector: 'label-default-example',
  template: `
    <div class="grid gap-1.5" uiFormField>
      <label uiLabel>Email</label>
      <input uiInput type="email" placeholder="Enter your email" [(ngModel)]="email" />
    </div>
  `,
  imports: [UiLabel, UiInput, UiFormField, FormsModule],
  standalone: true,
  host: {
    'class': 'w-2/3 space-y-6 mx-auto'
  }
})
export class LabelDefaultExample {
  email = '';
}

@Component({
  selector: 'label-with-description-example',
  template: `
    <div class="grid gap-1.5" uiFormField>
      <label uiLabel>Username</label>
      <p uiDescription>Enter your username to sign in to your account.</p>
      <input uiInput type="text" placeholder="Enter your username" [(ngModel)]="username" />
    </div>
  `,
  imports: [UiLabel, UiInput, UiFormField, UiDescription, FormsModule],
  standalone: true,
  host: {
    'class': 'w-2/3 space-y-6 mx-auto'
  }
})
export class LabelWithDescriptionExample {
  username = '';
}

@Component({
  selector: 'label-required-example',
  template: `
    <div class="grid gap-1.5" uiFormField>
      <label uiLabel>
        Password
        <span class="text-destructive">*</span>
      </label>
      <input uiInput type="password" placeholder="Enter your password" [(ngModel)]="password" />
    </div>
  `,
  imports: [UiLabel, UiInput, UiFormField, FormsModule],
  standalone: true,
  host: {
    'class': 'w-2/3 space-y-6 mx-auto'
  }
})
export class LabelRequiredExample {
  password = '';
}

@Component({
  selector: 'label-disabled-example',
  template: `
    <div class="grid gap-1.5" uiFormField>
      <label uiLabel class="opacity-50">Disabled Input</label>
      <input uiInput type="text" placeholder="This input is disabled" [(ngModel)]="disabledValue" disabled />
    </div>
  `,
  imports: [UiLabel, UiInput, UiFormField, FormsModule],
  standalone: true,
  host: {
    'class': 'w-2/3 space-y-6 mx-auto'
  }
})
export class LabelDisabledExample {
  disabledValue = 'Disabled value';
}

export const labelMeta: IComponentMeta = {
  title: 'Label',
  description: 'Renders a label associated with a form control or other component.',
  installation: {
    package: 'label',
    import: `import { UiLabel } from '@workspace/ui/directives/label';`,
    usage: `<label uiLabel>Label Text</label>`
  },
  api: {
    props: [
      {
        name: 'uiLabel',
        type: 'Directive',
        description: 'The label directive that provides proper styling and accessibility.'
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
    code: `import { UiLabel } from '@workspace/ui/directives/label';
import { UiInput } from '@workspace/ui/directives/input';
import { UiFormField } from '@workspace/ui/directives/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'label-default-example',
  template: \`
    <div class="grid gap-1.5" uiFormField>
      <label uiLabel>Email</label>
      <input uiInput type="email" placeholder="Enter your email" [(ngModel)]="email" />
    </div>
  \`,
  imports: [UiLabel, UiInput, UiFormField, FormsModule],
  standalone: true
})
export class LabelDefaultExample {
  email = '';
}`,
    component: LabelDefaultExample
  },
  {
    title: 'With Description',
    description: 'Label with additional descriptive text below.',
    code: `import { UiLabel } from '@workspace/ui/directives/label';
import { UiInput } from '@workspace/ui/directives/input';
import { UiFormField, UiDescription } from '@workspace/ui/directives/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'label-with-description-example',
  template: \`
    <div class="grid gap-1.5" uiFormField>
      <label uiLabel>Username</label>
      <p uiDescription>Enter your username to sign in to your account.</p>
      <input uiInput type="text" placeholder="Enter your username" [(ngModel)]="username" />
    </div>
  \`,
  imports: [UiLabel, UiInput, UiFormField, UiDescription, FormsModule],
  standalone: true
})
export class LabelWithDescriptionExample {
  username = '';
}`,
    component: LabelWithDescriptionExample
  },
  {
    title: 'Required',
    description: 'Label indicating a required field.',
    code: `import { UiLabel } from '@workspace/ui/directives/label';
import { UiInput } from '@workspace/ui/directives/input';
import { UiFormField } from '@workspace/ui/directives/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'label-required-example',
  template: \`
    <div class="grid gap-1.5" uiFormField>
      <label uiLabel>
        Password
        <span class="text-destructive">*</span>
      </label>
      <input uiInput type="password" placeholder="Enter your password" [(ngModel)]="password" required />
    </div>
  \`,
  imports: [UiLabel, UiInput, UiFormField, FormsModule],
  standalone: true
})
export class LabelRequiredExample {
  password = '';
}`,
    component: LabelRequiredExample
  },
  {
    title: 'Disabled',
    description: 'Label for disabled form controls.',
    code: `import { UiLabel } from '@workspace/ui/directives/label';
import { UiInput } from '@workspace/ui/directives/input';
import { UiFormField } from '@workspace/ui/directives/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'label-disabled-example',
  template: \`
    <div class="grid gap-1.5" uiFormField>
      <label uiLabel class="opacity-50">Disabled Input</label>
      <input uiInput type="text" placeholder="This input is disabled" [(ngModel)]="disabledValue" disabled />
    </div>
  \`,
  imports: [UiLabel, UiInput, UiFormField, FormsModule],
  standalone: true
})
export class LabelDisabledExample {
  disabledValue = 'Disabled value';
}`,
    component: LabelDisabledExample
  }
]; 