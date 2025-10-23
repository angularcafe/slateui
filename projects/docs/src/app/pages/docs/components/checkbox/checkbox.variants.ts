import { Component, signal } from '@angular/core';
import { IVariant, IComponentMeta } from '@components/component-preview/component-preview';
import { UiCheckbox, UiLabel, UiButton, UiFormField, UiDescription } from 'ui';

// Default checkbox example
@Component({
  selector: 'checkbox-default-example',
  template: `
    <div class="flex flex-col gap-6">
        <div class="flex items-center gap-3" uiFormField>
            <ui-checkbox [(checked)]="termsChecked" />
            <label uiLabel>Accept terms and conditions</label>
        </div>
        <div class="flex items-start gap-3" uiFormField>
            <ui-checkbox [(checked)]="termsWithDescChecked"></ui-checkbox>
            <div class="grid gap-2">
            <label uiLabel>Accept terms and conditions</label>
                <p uiDescription>
                    By clicking this checkbox, you agree to the terms and conditions.
                </p>
            </div>
        </div>
        <div class="flex items-center gap-3" uiFormField>
            <ui-checkbox [(checked)]="disabledChecked" disabled />
            <label uiLabel>Accept terms and conditions</label>
        </div>
        <div class="grid w-full max-w-md items-start gap-3" uiLabel uiFormField>
            <div class="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
            <ui-checkbox [(checked)]="notificationsChecked"
            class="data-[checked]:border-blue-600 data-[checked]:bg-blue-600 data-[checked]:text-white dark:data-[checked]:border-blue-700 dark:data-[checked]:bg-blue-600"></ui-checkbox>
                <div class="grid gap-1.5 font-normal">
                <p uiLabel>
                    Enable notifications
                </p>
                <p uiDescription>
                    You can enable or disable notifications at any time.
                </p>
                </div>
            </div>
        </div>
    </div>
  `,
  standalone: true,
  imports: [UiCheckbox, UiLabel, UiFormField, UiDescription],
  host: {
    'class': 'w-2/3 space-y-6 mx-auto'
  }
})
export class CheckboxDefaultExample {
    termsChecked = signal(false);
    termsWithDescChecked = signal(true);
    disabledChecked = signal(false);
    notificationsChecked = signal(true);
    termsCheckedChange(event: boolean) {
        console.log('termsCheckedChange', event);
    }
}

// Checkbox with label example
@Component({
    selector: 'checkbox-with-label-example',
    template: `
      <div class="flex items-center gap-3" uiFormField>
        <ui-checkbox [(checked)]="checked" />
        <label uiLabel>Accept terms and conditions</label>
    </div>
    `,
    standalone: true,
    imports: [UiCheckbox, UiLabel, UiFormField]
  })
  export class CheckboxWithLabelExample {
    checked = signal(true);
  }

// Checkbox with description example
@Component({
  selector: 'checkbox-with-description-example',
  template: `
    <div class="grid w-full max-w-sm items-start gap-3" uiFormField>
      <div class="flex items-start gap-3">
        <ui-checkbox [(checked)]="checked" />
        <div class="grid gap-2">
          <label uiLabel>Accept terms and conditions</label>
          <p uiDescription>
            By clicking this checkbox, you agree to the terms and conditions.
          </p>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [UiCheckbox, UiLabel, UiFormField, UiDescription]
})
export class CheckboxWithDescriptionExample {
  checked = signal(true);
}

// Disabled checkbox example
@Component({
  selector: 'checkbox-disabled-example',
  template: `
    <div class="w-2/3 space-y-6 mx-auto">
      <div class="flex items-start gap-3" uiFormField>
        <ui-checkbox [(checked)]="checked" disabled />
        <label uiLabel>Enable notifications</label>
      </div>
    </div>
  `,
  standalone: true,
  imports: [UiCheckbox, UiLabel, UiFormField],
  host: {
    'class': 'w-2/3 space-y-6 mx-auto'
  }
})
export class CheckboxDisabledExample {
  checked = signal(false);
}

// Checkbox with custom styling example
@Component({
  selector: 'checkbox-custom-styling-example',
  template: `
    <div class="grid w-full max-w-md items-start gap-3" uiLabel uiFormField>
      <div class="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
        <ui-checkbox [(checked)]="checked" 
        class="data-[checked]:border-blue-600 data-[checked]:bg-blue-600 data-[checked]:text-white dark:data-[checked]:border-blue-700 dark:data-[checked]:bg-blue-600">
        </ui-checkbox>
        <div class="grid gap-1.5 font-normal">
            <p uiLabel>
                Enable notifications
            </p>
            <p uiDescription>
                You can enable or disable notifications at any time.
            </p>
            </div>
        </div>
    </div>
  `,
  standalone: true,
  imports: [UiCheckbox, UiFormField, UiDescription, UiLabel]
})
export class CheckboxCustomStylingExample {
  checked = signal(true);
}

// Form with multiple checkboxes example
@Component({
  selector: 'checkbox-form-example',
  template: `
    <div class="w-2/3 space-y-6 mx-auto">
      <div class="space-y-6">
        <div>
          <h3 class="text-base font-medium">Sidebar</h3>
          <p class="text-sm text-muted-foreground">
            Select the items you want to display in the sidebar.
          </p>
        </div>
        
        <div class="space-y-3">
          <div class="grid w-full max-w-sm items-center gap-3" uiFormField>
            <div class="flex items-center gap-2">
              <ui-checkbox [(checked)]="recents" />
              <label uiLabel class="text-sm font-normal">Recents</label>
            </div>
          </div>
          
          <div class="grid w-full max-w-sm items-center gap-3" uiFormField>
            <div class="flex items-center gap-2">
              <ui-checkbox [(checked)]="home" />
              <label uiLabel class="text-sm font-normal">Home</label>
            </div>
          </div>
          
          <div class="grid w-full max-w-sm items-center gap-3" uiFormField>
            <div class="flex items-center gap-2">
              <ui-checkbox [(checked)]="applications" />
              <label uiLabel class="text-sm font-normal">Applications</label>
            </div>
          </div>
          
          <div class="grid w-full max-w-sm items-center gap-3" uiFormField>
            <div class="flex items-center gap-2">
              <ui-checkbox [(checked)]="desktop" />
              <label uiLabel class="text-sm font-normal">Desktop</label>
            </div>
          </div>
          
          <div class="grid w-full max-w-sm items-center gap-3" uiFormField>
            <div class="flex items-center gap-2">
              <ui-checkbox [(checked)]="downloads" />
              <label uiLabel class="text-sm font-normal">Downloads</label>
            </div>
          </div>
          
          <div class="grid w-full max-w-sm items-center gap-3" uiFormField>
            <div class="flex items-center gap-2">
              <ui-checkbox [(checked)]="documents" />
              <label uiLabel class="text-sm font-normal">Documents</label>
            </div>
          </div>
        </div>
        
        <button 
          uiButton 
          (click)="submitForm()"
          [disabled]="selectedItems.length === 0"
          class="w-full">
          Submit
        </button>
        
        @if (selectedItems.length > 0) {
          <div class="text-sm text-muted-foreground">
            Selected: {{ selectedItems.join(', ') }}
          </div>
        }
      </div>
    </div>
  `,
  standalone: true,
  imports: [UiCheckbox, UiLabel, UiButton, UiFormField],
  host: {
    'class': 'w-2/3 space-y-6 mx-auto'
  }
})
export class CheckboxFormExample {
  recents = signal(true);
  home = signal(true);
  applications = signal(false);
  desktop = signal(false);
  downloads = signal(false);
  documents = signal(false);

  get selectedItems(): string[] {
    const items = [
      { key: 'recents', checked: this.recents },
      { key: 'home', checked: this.home },
      { key: 'applications', checked: this.applications },
      { key: 'desktop', checked: this.desktop },
      { key: 'downloads', checked: this.downloads },
      { key: 'documents', checked: this.documents }
    ];
    
    return items
      .filter(item => item.checked())
      .map(item => item.key);
  }

  submitForm(): void {
    console.log('Selected items:', this.selectedItems);
    // In a real app, you would submit this data
  }
}

export const checkboxMeta: IComponentMeta = {
  title: 'Checkbox',
  description: 'A control that allows the user to toggle between checked and not checked.',
  installation: {
    import: `import { UiCheckbox } from '@workspace/ui/checkbox';`,
    usage: `<ui-checkbox [(checked)]="checked" />`
  },
  api: {
    props: [
      {
        name: 'checked',
        type: 'boolean',
        default: 'false',
        description: 'Whether the checkbox is checked.',
        required: false
      },
      {
        name: 'indeterminate',
        type: 'boolean',
        default: 'false',
        description: 'Whether the checkbox is in an indeterminate state.',
        required: false
      },
      {
        name: 'required',
        type: 'boolean',
        default: 'false',
        description: 'Whether the checkbox is required.',
        required: false
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the checkbox is disabled.',
        required: false
      },
      {
        name: 'class',
        type: 'string',
        default: '""',
        description: 'Additional CSS classes to apply to the checkbox.',
        required: false
      }
    ],
    outputs: [
      {
        name: 'checkedChange',
        type: 'boolean',
        description: 'Emitted when the checked state changes.'
      },
      {
        name: 'indeterminateChange',
        type: 'boolean',
        description: 'Emitted when the indeterminate state changes.'
      }
    ]
  }
};

export const checkboxVariants: IVariant[] = [
  {
    title: 'Default',
    description: 'A basic checkbox control.',
    code: `import { Component, signal } from '@angular/core';
import { UiCheckbox, UiLabel, UiFormField, UiDescription } from '@workspace/ui/checkbox';

@Component({
  selector: 'checkbox-default-example',
  template: \`
    <div class="flex flex-col gap-6">
        <div class="flex items-center gap-3" uiFormField>
            <ui-checkbox [(checked)]="termsChecked" />
            <label uiLabel>Accept terms and conditions</label>
        </div>
        <div class="flex items-start gap-3" uiFormField>
            <ui-checkbox [(checked)]="termsWithDescChecked"></ui-checkbox>
            <div class="grid gap-2">
            <label uiLabel>Accept terms and conditions</label>
                <p uiDescription>
                    By clicking this checkbox, you agree to the terms and conditions.
                </p>
            </div>
        </div>
        <div class="flex items-center gap-3" uiFormField>
            <ui-checkbox [(checked)]="disabledChecked" disabled />
            <label uiLabel>Accept terms and conditions</label>
        </div>
        <div class="grid w-full max-w-md items-start gap-3" uiLabel uiFormField>
            <div class="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
            <ui-checkbox [(checked)]="notificationsChecked"
            class="data-[checked]:border-blue-600 data-[checked]:bg-blue-600 data-[checked]:text-white dark:data-[checked]:border-blue-700 dark:data-[checked]:bg-blue-600"></ui-checkbox>
                <div class="grid gap-1.5 font-normal">
                <p uiLabel>
                    Enable notifications
                </p>
                <p uiDescription>
                    You can enable or disable notifications at any time.
                </p>
                </div>
            </div>
        </div>
    </div>
  \`,
  standalone: true,
  imports: [UiCheckbox, UiLabel, UiFormField, UiDescription],
  host: {
    'class': 'w-2/3 space-y-6 mx-auto'
  }
})
export class CheckboxDefaultExample {
    termsChecked = signal(false);
    termsWithDescChecked = signal(true);
    disabledChecked = signal(false);
    notificationsChecked = signal(true);
    termsCheckedChange(event: boolean) {
        console.log('termsCheckedChange', event);
    }
}`,
    component: CheckboxDefaultExample
  },
  {
    title: 'With Label',
    description: 'A checkbox with a label.',
    code: `import { Component, signal } from '@angular/core';
import { UiCheckbox, UiLabel, UiFormField } from '@workspace/ui/checkbox';

@Component({
    selector: 'checkbox-with-label-example',
    template: \`
      <div class="flex items-center gap-3" uiFormField>
        <ui-checkbox [(checked)]="checked" />
        <label uiLabel>Accept terms and conditions</label>
    </div>
    \`,
    standalone: true,
    imports: [UiCheckbox, UiLabel, UiFormField]
  })
  export class CheckboxWithLabelExample {
    checked = signal(true);
  }`,
    component: CheckboxWithLabelExample
  },
  {
    title: 'With Description',
    description: 'A checkbox with additional descriptive text.',
    code: `import { Component, signal } from '@angular/core';
import { UiCheckbox, UiLabel, UiFormField, UiDescription } from '@workspace/ui/checkbox';

@Component({
  selector: 'checkbox-with-description-example',
  template: \`
    <div class="grid w-full max-w-sm items-start gap-3" uiFormField>
      <div class="flex items-start gap-3">
        <ui-checkbox [(checked)]="checked" />
        <div class="grid gap-2">
          <label uiLabel>Accept terms and conditions</label>
          <p uiDescription>
            By clicking this checkbox, you agree to the terms and conditions.
          </p>
        </div>
      </div>
    </div>
  \`,
  standalone: true,
  imports: [UiCheckbox, UiLabel, UiFormField, UiDescription]
})
export class CheckboxWithDescriptionExample {
  checked = signal(true);
}`,
    component: CheckboxWithDescriptionExample
  },
  {
    title: 'Disabled',
    description: 'A disabled checkbox that cannot be interacted with.',
    code: `import { Component, signal } from '@angular/core';
import { UiCheckbox, UiLabel, UiFormField } from '@workspace/ui/checkbox';

@Component({
  selector: 'checkbox-disabled-example',
  template: \`
    <div class="w-2/3 space-y-6 mx-auto">
      <div class="flex items-start gap-3" uiFormField>
        <ui-checkbox [(checked)]="checked" disabled />
        <label uiLabel>Enable notifications</label>
      </div>
    </div>
  \`,
  standalone: true,
  imports: [UiCheckbox, UiLabel, UiFormField],
  host: {
    'class': 'w-2/3 space-y-6 mx-auto'
  }
})
export class CheckboxDisabledExample {
  checked = signal(false);
}`,
    component: CheckboxDisabledExample
  },
  {
    title: 'Custom Styling',
    description: 'A checkbox with custom colors and hover effects.',
    code: `import { Component, signal } from '@angular/core';
import { UiCheckbox, UiFormField, UiDescription, UiLabel } from '@workspace/ui/checkbox';

@Component({
  selector: 'checkbox-custom-styling-example',
  template: \`
    <div class="grid w-full max-w-md items-start gap-3" uiLabel uiFormField>
      <div class="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
        <ui-checkbox [(checked)]="checked" 
        class="data-[checked]:border-blue-600 data-[checked]:bg-blue-600 data-[checked]:text-white dark:data-[checked]:border-blue-700 dark:data-[checked]:bg-blue-600">
        </ui-checkbox>
        <div class="grid gap-1.5 font-normal">
            <p uiLabel>
                Enable notifications
            </p>
            <p uiDescription>
                You can enable or disable notifications at any time.
            </p>
            </div>
        </div>
    </div>
  \`,
  standalone: true,
  imports: [UiCheckbox, UiFormField, UiDescription, UiLabel]
})
export class CheckboxCustomStylingExample {
  checked = signal(true);
}`,
    component: CheckboxCustomStylingExample
  },
  {
    title: 'Form with Multiple Checkboxes',
    description: 'Multiple checkboxes in a form with state management.',
    code: `import { Component, signal } from '@angular/core';
import { UiCheckbox, UiLabel, UiButton, UiFormField } from '@workspace/ui/checkbox';

@Component({
  selector: 'checkbox-form-example',
  template: \`
    <div class="w-2/3 space-y-6 mx-auto">
      <div class="space-y-6">
        <div>
          <h3 class="text-base font-medium">Sidebar</h3>
          <p class="text-sm text-muted-foreground">
            Select the items you want to display in the sidebar.
          </p>
        </div>
        
        <div class="space-y-3">
          <div class="grid w-full max-w-sm items-center gap-3" uiFormField>
            <div class="flex items-center gap-2">
              <ui-checkbox [(checked)]="recents" />
              <label uiLabel class="text-sm font-normal">Recents</label>
            </div>
          </div>
          
          <div class="grid w-full max-w-sm items-center gap-3" uiFormField>
            <div class="flex items-center gap-2">
              <ui-checkbox [(checked)]="home" />
              <label uiLabel class="text-sm font-normal">Home</label>
            </div>
          </div>
          
          <div class="grid w-full max-w-sm items-center gap-3" uiFormField>
            <div class="flex items-center gap-2">
              <ui-checkbox [(checked)]="applications" />
              <label uiLabel class="text-sm font-normal">Applications</label>
            </div>
          </div>
          
          <div class="grid w-full max-w-sm items-center gap-3" uiFormField>
            <div class="flex items-center gap-2">
              <ui-checkbox [(checked)]="desktop" />
              <label uiLabel class="text-sm font-normal">Desktop</label>
            </div>
          </div>
          
          <div class="grid w-full max-w-sm items-center gap-3" uiFormField>
            <div class="flex items-center gap-2">
              <ui-checkbox [(checked)]="downloads" />
              <label uiLabel class="text-sm font-normal">Downloads</label>
            </div>
          </div>
          
          <div class="grid w-full max-w-sm items-center gap-3" uiFormField>
            <div class="flex items-center gap-2">
              <ui-checkbox [(checked)]="documents" />
              <label uiLabel class="text-sm font-normal">Documents</label>
            </div>
          </div>
        </div>
        
        <button 
          uiButton 
          (click)="submitForm()"
          [disabled]="selectedItems.length === 0"
          class="w-full">
          Submit
        </button>
        
        @if (selectedItems.length > 0) {
          <div class="text-sm text-muted-foreground">
            Selected: {{ selectedItems.join(', ') }}
          </div>
        }
      </div>
    </div>
  \`,
  standalone: true,
  imports: [UiCheckbox, UiLabel, UiButton, UiFormField],
  host: {
    'class': 'w-2/3 space-y-6 mx-auto'
  }
})
export class CheckboxFormExample {
  recents = signal(true);
  home = signal(true);
  applications = signal(false);
  desktop = signal(false);
  downloads = signal(false);
  documents = signal(false);

  get selectedItems(): string[] {
    const items = [
      { key: 'recents', checked: this.recents },
      { key: 'home', checked: this.home },
      { key: 'applications', checked: this.applications },
      { key: 'desktop', checked: this.desktop },
      { key: 'downloads', checked: this.downloads },
      { key: 'documents', checked: this.documents }
    ];
    
    return items
      .filter(item => item.checked())
      .map(item => item.key);
  }

  submitForm(): void {
    console.log('Selected items:', this.selectedItems);
    // In a real app, you would submit this data
  }
}`,
    component: CheckboxFormExample
  }
];
