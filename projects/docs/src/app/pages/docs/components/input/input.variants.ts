import { Component } from '@angular/core';
import { UiDescription, UiFormField, UiInput, UiButton, UiLabel } from 'ui';
import { IVariant, IComponentMeta } from '@components/component-preview/component-preview';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'input-default-example',
  template: `
    <input uiInput type="email" placeholder="Email" [(ngModel)]="email" required />
  `,
  imports: [UiInput, FormsModule],
  standalone: true,
  host: {
    'class': 'w-2/3 space-y-6 mx-auto'
  },
})
export class InputDefaultExample {
  email = '';
}

@Component({
  selector: 'input-file-example',
  template: `
    <div class="grid w-full max-w-sm items-center gap-3" uiFormField>
      <label uiLabel for="picture">Picture</label>
      <input uiInput id="picture" type="file" />
    </div>
  `,
  imports: [UiInput, UiLabel, UiFormField],
  standalone: true,
  host: {
    'class': 'w-2/3 space-y-6 mx-auto'
  },
})
export class InputFileExample {}

@Component({
  selector: 'input-disabled-example',
  template: `
    <input uiInput disabled type="email" placeholder="Email" [(ngModel)]="disabledEmail" />
  `,
  imports: [UiInput, FormsModule],
  standalone: true,
  host: {
    'class': 'w-2/3 space-y-6 mx-auto'
  },
})
export class InputDisabledExample {
  disabledEmail = 'disabled@example.com';
}

@Component({
  selector: 'input-with-label-example',
  template: `
    <div class="grid w-full max-w-sm items-center gap-3" uiFormField>
      <label uiLabel for="email">Email</label>
      <input uiInput type="email" id="email" placeholder="Email" [(ngModel)]="email" />
    </div>
  `,
  imports: [UiInput, UiLabel, UiFormField, FormsModule],
  standalone: true,
  host: {
    'class': 'w-2/3 space-y-6 mx-auto'
  }
})
export class InputWithLabelExample {
  email = '';
}

@Component({
  selector: 'input-with-button-example',
  template: `
    <div class="flex w-full max-w-sm items-center gap-2">
      <input uiInput type="email" placeholder="Email" [(ngModel)]="subscribeEmail" />
      <button uiButton type="submit" variant="outline">
        Subscribe
      </button>
    </div>
  `,
  imports: [UiInput, UiButton, FormsModule],
  standalone: true,
  host: {
    'class': 'w-2/3 space-y-6 mx-auto'
  }
})
export class InputWithButtonExample {
  subscribeEmail = '';
}

@Component({
  selector: 'input-form-example',
  template: `
    <form (ngSubmit)="onSubmit()">
      <div class="grid items-center gap-1.5" uiFormField>
        <label uiLabel>Username</label>
        <input uiInput placeholder="slateui" [(ngModel)]="username" name="username" />
        <p uiDescription>This is your public display name.</p>
      </div>
      <button uiButton type="submit">Submit</button>
    </form>
  `,
  imports: [UiInput, UiLabel, UiButton, FormsModule, UiFormField, UiDescription],
  standalone: true,
  host: {
    'class': 'w-2/3 space-y-6 mx-auto'
  },
})
export class InputFormExample {
  username = '';

  onSubmit() {
    console.log('Form submitted:', { username: this.username });
  }
}

export const inputMeta: IComponentMeta = {
  title: 'Input',
  description: 'A form input component with various types and states.',
  installation: {
    package: 'input',
    import: `import { UiInput } from '@workspace/ui/directives/input';`,
    usage: `<input uiInput type="text" placeholder="Enter text" />`
  },
  api: {
    props: [
      { name: 'uiInput', type: 'Directive', description: 'Input directive for styling and functionality.' },
      { name: 'type', type: 'string', description: 'HTML input type (text, email, password, etc.).' },
      { name: 'placeholder', type: 'string', description: 'Placeholder text for the input.' },
      { name: 'disabled', type: 'boolean', description: 'Whether the input is disabled.' },
      { name: 'class', type: 'string', description: 'Additional CSS classes.' }
    ]
  }
};

export const inputVariants: IVariant[] = [
  {
    title: 'Default',
    description: 'Basic input field.',
    code: `import { UiInput } from '@workspace/ui/directives/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'input-default-example',
  template: \`
    <input uiInput type="email" placeholder="Email" [(ngModel)]="email" />
  \`,
  imports: [UiInput, FormsModule],
  standalone: true
})
export class InputDefaultExample {
  email = '';
}`,
    component: InputDefaultExample
  },
  {
    title: 'File',
    description: 'File input for uploading documents and images.',
    code: `import { UiInput } from '@workspace/ui/directives/input';
import { UiLabel } from '@workspace/ui/directives/label';
import { UiFormField } from '@workspace/ui/directives/form-field';

@Component({
  selector: 'input-file-example',
  template: \`
    <div class="grid w-full max-w-sm items-center gap-3" uiFormField>
      <label uiLabel for="picture">Picture</label>
      <input uiInput id="picture" type="file" />
    </div>
  \`,
  imports: [UiInput, UiLabel, UiFormField],
  standalone: true
})
export class InputFileExample {}`,
    component: InputFileExample
  },
  {
    title: 'Disabled',
    description: 'Disabled input field that cannot be interacted with.',
    code: `import { UiInput } from '@workspace/ui/directives/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'input-disabled-example',
  template: \`
    <input uiInput disabled type="email" placeholder="Email" [(ngModel)]="disabledEmail" />
  \`,
  imports: [UiInput, FormsModule],
  standalone: true
})
export class InputDisabledExample {
  disabledEmail = 'disabled@example.com';
}`,
    component: InputDisabledExample
  },
  {
    title: 'With Label',
    description: 'Input field with associated label for accessibility.',
    code: `import { UiInput } from '@workspace/ui/directives/input';
import { UiLabel } from '@workspace/ui/directives/label';
import { UiFormField } from '@workspace/ui/directives/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'input-with-label-example',
  template: \`
    <div class="grid w-full max-w-sm items-center gap-3" uiFormField>
      <label uiLabel for="email">Email</label>
      <input uiInput type="email" id="email" placeholder="Email" [(ngModel)]="email" />
    </div>
  \`,
  imports: [UiInput, UiLabel, UiFormField, FormsModule],
  standalone: true
})
export class InputWithLabelExample {
  email = '';
}`,
    component: InputWithLabelExample
  },
  {
    title: 'With Button',
    description: 'Input field with a submit button.',
    code: `import { UiInput } from '@workspace/ui/directives/input';
import { UiButton } from '@workspace/ui/directives/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'input-with-button-example',
  template: \`
    <div class="flex w-full max-w-sm items-center gap-2">
      <input uiInput type="email" placeholder="Email" [(ngModel)]="subscribeEmail" />
      <button uiButton type="submit" variant="outline">
        Subscribe
      </button>
    </div>
  \`,
  imports: [UiInput, UiButton, FormsModule],
  standalone: true
})
export class InputWithButtonExample {
  subscribeEmail = '';
}`,
    component: InputWithButtonExample
  },
  {
    title: 'Form',
    description: 'Simple form with input field using ngModel and form field directives.',
    code: `import { UiInput } from '@workspace/ui/directives/input';
import { UiButton } from '@workspace/ui/directives/button';
import { UiFormField, UiDescription, UiLabel } from '@workspace/ui/directives/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'input-form-example',
  template: \`
    <form (ngSubmit)="onSubmit()">
      <div class="grid items-center gap-1.5" uiFormField>
        <label uiLabel for="username">Username</label>
        <input uiInput placeholder="slateui" [(ngModel)]="username" name="username" />
        <p uiDescription>This is your public display name.</p>
      </div>
      <button uiButton type="submit">Submit</button>
    </form>
  \`,
  imports: [UiInput, UiLabel, UiButton, UiFormField, UiDescription, FormsModule],
  standalone: true
})
export class InputFormExample {
  username = '';

  onSubmit() {
    console.log('Form submitted:', { username: this.username });
  }
}`,
    component: InputFormExample
  }
];
