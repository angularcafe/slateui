import { Component, model } from '@angular/core';
import { UiFormField, UiLabel, UiSwitch, UiSwitchThumb } from 'ui';
import {
  IVariant,
  IComponentMeta,
} from '@components/component-preview/component-preview';

// Switch example components for dynamic rendering
@Component({
  selector: 'switch-default-example',
  template: `
    <div class="flex items-center space-x-2" uiFormField>
      <button uiSwitch [(checked)]="checked">
        <span uiSwitchThumb></span>
      </button>
      <label uiLabel>Airplane Mode</label>
    </div>
  `,
  imports: [UiSwitch, UiSwitchThumb, UiFormField, UiLabel],
})
export class SwitchDefaultExample {
  checked = model(false);
}

@Component({
  selector: 'switch-disabled-example',
  template: `
    <div class="flex items-center space-x-2" uiFormField>
      <button uiSwitch disabled [(checked)]="checked">
        <span uiSwitchThumb></span>
      </button>
      <label uiLabel>Disabled Switch</label>
    </div>
  `,
  imports: [UiSwitch, UiSwitchThumb, UiFormField, UiLabel],
})
export class SwitchDisabledExample {
  checked = model(false);
}

@Component({
  selector: 'switch-checked-example',
  template: `
    <div class="flex items-center space-x-2" uiFormField>
      <button uiSwitch checked [(checked)]="checked">
        <span uiSwitchThumb></span>
      </button>
      <label uiLabel> WiFi </label>
    </div>
  `,
  imports: [UiSwitch, UiSwitchThumb, UiFormField, UiLabel],
})
export class SwitchCheckedExample {
  checked = model(true);
}

@Component({
  selector: 'switch-form-example',
  template: `
    <div class="w-full space-y-6">
      <div uiFormField class="space-y-4">
        <h3 class="mb-4 text-lg font-medium">Email Notifications</h3>
        <div class="space-y-4">
          <div
            class="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm"
          >
            <div class="space-y-0.5">
              <label uiLabel>Marketing emails</label>
              <p class="text-sm text-muted-foreground">
                Receive emails about new products, features, and more.
              </p>
            </div>
            <button uiSwitch [(checked)]="marketingEmails">
              <span uiSwitchThumb></span>
            </button>
          </div>
          <div
            class="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm"
          >
            <div class="space-y-0.5">
              <label uiLabel>Security emails</label>
              <p class="text-sm text-muted-foreground">
                Receive emails about your account security.
              </p>
            </div>
            <button uiSwitch [(checked)]="securityEmails" disabled>
              <span uiSwitchThumb></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  imports: [UiSwitch, UiSwitchThumb, UiFormField, UiLabel],
})
export class SwitchFormExample {
  marketingEmails = model(false);
  securityEmails = model(true);
}

// Component metadata for documentation
export const switchMeta: IComponentMeta = {
  title: 'Switch',
  description:
    'A control that allows the user to toggle between checked and not checked.',
  installation: {
    package: `switch';`,
    import: `import { UiSwitch, UiSwitchThumb } from '@workspace/ui/directives/switch';
import { UiFormField } from '@workspace/ui/directives/form-field';
import { UiLabel } from '@workspace/ui/directives/label';`,
    usage: `<div uiFormField>
  <button uiSwitch [(checked)]="isChecked">
    <span uiSwitchThumb></span>
  </button>
  <label uiLabel>Switch Label</label>
</div>`,
  },
  api: {
    props: [
      {
        name: 'checked',
        type: 'boolean',
        default: 'false',
        description: 'Whether the switch is checked.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the switch is disabled.',
      },
      {
        name: 'class',
        type: 'string',
        description: 'Additional CSS classes to apply to the switch.',
      },
    ],
    outputs: [
      {
        name: 'checkedChange',
        type: 'boolean',
        description: 'Emitted when the checked state changes.',
      },
    ],
  },
};

export const switchVariants: IVariant[] = [
  {
    title: 'Default',
    description: 'A basic switch component.',
    code: `import { Component, model } from '@angular/core';
import { UiSwitch, UiSwitchThumb } from '@workspace/ui/directives/switch';
import { UiFormField } from '@workspace/ui/directives/form-field';
import { UiLabel } from '@workspace/ui/directives/label';

@Component({
  selector: 'switch-default-example',
  template: \`
    <div class="flex items-center space-x-2" uiFormField>
        <button uiSwitch [(checked)]="checked">
            <span uiSwitchThumb></span>
        </button>
        <label uiLabel>Airplane Mode</label>
    </div>
  \`,
  imports: [UiSwitch, UiSwitchThumb, UiFormField, UiLabel]
})
export class SwitchDefaultExample {
  checked = model(false);
}`,
    component: SwitchDefaultExample,
  },
  {
    title: 'Disabled',
    description: 'A switch in the disabled state.',
    code: `import { Component, model } from '@angular/core';
import { UiSwitch, UiSwitchThumb } from '@workspace/ui/directives/switch';
import { UiFormField } from '@workspace/ui/directives/form-field';
import { UiLabel } from '@workspace/ui/directives/label';

@Component({
  selector: 'switch-disabled-example',
  template: \`
    <div class="flex items-center space-x-2" uiFormField>
        <button uiSwitch disabled [(checked)]="checked">
            <span uiSwitchThumb></span>
        </button>
        <label uiLabel>Disabled Switch</label>
    </div>
  \`,
  imports: [UiSwitch, UiSwitchThumb, UiFormField, UiLabel]
})
export class SwitchDisabledExample {
  checked = model(false);
}`,
    component: SwitchDisabledExample,
  },
  {
    title: 'Checked',
    description: 'A switch in the checked state.',
    code: `import { Component, model } from '@angular/core';
import { UiSwitch, UiSwitchThumb } from '@workspace/ui/directives/switch';
import { UiFormField } from '@workspace/ui/directives/form-field';
import { UiLabel } from '@workspace/ui/directives/label';

@Component({
  selector: 'switch-checked-example',
  template: \`
    <div class="flex items-center space-x-2" uiFormField>
      <button uiSwitch checked [(checked)]="checked">
        <span uiSwitchThumb></span>
      </button>
      <label uiLabel>
        WiFi
      </label>
    </div>
  \`,
  imports: [UiSwitch, UiSwitchThumb, UiFormField, UiLabel]
})
export class SwitchCheckedExample {
  checked = model(true);
}`,
    component: SwitchCheckedExample,
  },
  {
    title: 'Form',
    description:
      'A switch used in a form context with labels and descriptions.',
    code: `import { Component, model } from '@angular/core';
import { UiSwitch, UiSwitchThumb } from '@workspace/ui/directives/switch';
import { UiFormField } from '@workspace/ui/directives/form-field';
import { UiLabel } from '@workspace/ui/directives/label';

@Component({
  selector: 'switch-form-example',
  template: \`
    <div class="w-full space-y-6">
      <div uiFormField class="space-y-4">
        <h3 class="mb-4 text-lg font-medium">Email Notifications</h3>
        <div class="space-y-4">
          <div class="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
            <div class="space-y-0.5">
              <label uiLabel>Marketing emails</label>
              <p class="text-sm text-muted-foreground">
                Receive emails about new products, features, and more.
              </p>
            </div>
            <button uiSwitch [(checked)]="marketingEmails">
              <span uiSwitchThumb></span>
            </button>
          </div>
          <div class="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
            <div class="space-y-0.5">
              <label uiLabel>Security emails</label>
              <p class="text-sm text-muted-foreground">
                Receive emails about your account security.
              </p>
            </div>
            <button uiSwitch [(checked)]="securityEmails" disabled>
              <span uiSwitchThumb></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  \`,
  imports: [UiSwitch, UiSwitchThumb, UiFormField, UiLabel]
})
export class SwitchFormExample {
  marketingEmails = model(false);
  securityEmails = model(true);
}`,
    component: SwitchFormExample,
  },
];
