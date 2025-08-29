import { Component } from '@angular/core';
import { UiDescription, UiFormField, UiTextarea, UiButton, UiLabel } from 'ui';
import { IVariant, IComponentMeta } from '@components/component-preview/component-preview';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'textarea-default-example',
  template: `
    <textarea uiTextarea placeholder="Type your message here." [(ngModel)]="message"></textarea>
  `,
  imports: [UiTextarea, FormsModule],
  standalone: true,
  host: {
    'class': 'w-2/3 space-y-6 mx-auto'
  },
})
export class TextareaDefaultExample {
  message = '';
}

@Component({
  selector: 'textarea-disabled-example',
  template: `
    <textarea uiTextarea placeholder="Type your message here." [(ngModel)]="disabledMessage" disabled></textarea>
  `,
  imports: [UiTextarea, FormsModule],
  standalone: true,
  host: {
    'class': 'w-2/3 space-y-6 mx-auto'
  },
})
export class TextareaDisabledExample {
  disabledMessage = 'This textarea is disabled';
}

@Component({
  selector: 'textarea-with-label-example',
  template: `
    <div class="grid w-full gap-3" uiFormField>
      <label uiLabel for="message">Your message</label>
      <textarea uiTextarea placeholder="Type your message here." id="message" [(ngModel)]="message"></textarea>
    </div>
  `,
  imports: [UiTextarea, UiLabel, UiFormField, FormsModule],
  standalone: true,
  host: {
    'class': 'w-2/3 space-y-6 mx-auto'
  }
})
export class TextareaWithLabelExample {
  message = '';
}

@Component({
  selector: 'textarea-with-text-example',
  template: `
    <div class="grid w-full gap-3" uiFormField>
      <label uiLabel for="message-2">Your Message</label>
      <textarea uiTextarea placeholder="Type your message here." id="message-2" [(ngModel)]="message"></textarea>
      <p class="text-muted-foreground text-sm">
        Your message will be copied to the support team.
      </p>
    </div>
  `,
  imports: [UiTextarea, UiLabel, UiFormField, FormsModule],
  standalone: true,
  host: {
    'class': 'w-2/3 space-y-6 mx-auto'
  }
})
export class TextareaWithTextExample {
  message = '';
}

@Component({
  selector: 'textarea-with-button-example',
  template: `
    <div class="grid w-full gap-2">
      <textarea uiTextarea placeholder="Type your message here." [(ngModel)]="message"></textarea>
      <button uiButton>Send message</button>
    </div>
  `,
  imports: [UiTextarea, UiButton, FormsModule],
  standalone: true,
  host: {
    'class': 'w-2/3 space-y-6 mx-auto'
  }
})
export class TextareaWithButtonExample {
  message = '';
}

@Component({
  selector: 'textarea-form-example',
  template: `
    <form (ngSubmit)="onSubmit()">
      <div class="grid items-center gap-1.5" uiFormField>
        <label uiLabel>Bio</label>
        <textarea name="bio" uiTextarea placeholder="Type your message here." [(ngModel)]="bio" required></textarea>
        <p uiDescription>
        Tell us a little bit about yourself
        </p>
      </div>
      <button uiButton type="submit">Submit</button>
    </form>
  `,
  imports: [UiTextarea, UiLabel, UiButton, FormsModule, UiFormField, UiDescription],
  standalone: true,
  host: {
    'class': 'w-2/3 space-y-6 mx-auto'
  },
})
export class TextareaFormExample {
  bio = '';

  onSubmit() {
    console.log('Form submitted:', { bio: this.bio });
  }
}

export const textareaMeta: IComponentMeta = {
  title: 'Textarea',
  description: 'A form textarea component for multi-line text input with various states and configurations.',
  installation: {
    package: 'textarea',
    import: `import { UiTextarea } from '@workspace/ui/directives/textarea';`,
    usage: `<textarea uiTextarea placeholder="Enter your message"></textarea>`
  },
  api: {
    props: [
      { name: 'uiTextarea', type: 'Directive', description: 'Textarea directive for styling and functionality.' },
      { name: 'placeholder', type: 'string', description: 'Placeholder text for the textarea.' },
      { name: 'disabled', type: 'boolean', description: 'Whether the textarea is disabled.' },
      { name: 'rows', type: 'number', description: 'Number of visible text lines.' },
      { name: 'cols', type: 'number', description: 'Number of visible text columns.' },
      { name: 'class', type: 'string', description: 'Additional CSS classes.' }
    ]
  }
};

export const textareaVariants: IVariant[] = [
  {
    title: 'Default',
    description: 'Basic textarea field for multi-line text input.',
    code: `import { UiTextarea } from '@workspace/ui/directives/textarea';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'textarea-default-example',
  template: \`
    <textarea uiTextarea placeholder="Type your message here." [(ngModel)]="message"></textarea>
  \`,
  imports: [UiTextarea, FormsModule],
  standalone: true
})
export class TextareaDefaultExample {
  message = '';
}`,
    component: TextareaDefaultExample
  },
  {
    title: 'Disabled',
    description: 'Disabled textarea that cannot be interacted with.',
    code: `import { UiTextarea } from '@workspace/ui/directives/textarea';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'textarea-disabled-example',
  template: \`
    <textarea uiTextarea placeholder="Type your message here." disabled [(ngModel)]="disabledMessage"></textarea>
  \`,
  imports: [UiTextarea, FormsModule],
  standalone: true
})
export class TextareaDisabledExample {
  disabledMessage = 'This textarea is disabled';
}`,
    component: TextareaDisabledExample
  },
  {
    title: 'With Label',
    description: 'Textarea field with associated label for accessibility.',
    code: `import { UiTextarea } from '@workspace/ui/directives/textarea';
import { UiLabel } from '@workspace/ui/directives/label';
import { UiFormField } from '@workspace/ui/directives/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'textarea-with-label-example',
  template: \`
    <div class="grid w-full gap-3" uiFormField>
      <label uiLabel for="message">Your message</label>
      <textarea uiTextarea placeholder="Type your message here." id="message" [(ngModel)]="message"></textarea>
    </div>
  \`,
  imports: [UiTextarea, UiLabel, UiFormField, FormsModule],
  standalone: true
})
export class TextareaWithLabelExample {
  message = '';
}`,
    component: TextareaWithLabelExample
  },
  {
    title: 'With Text',
    description: 'Textarea with descriptive text below the input.',
    code: `import { UiTextarea } from '@workspace/ui/directives/textarea';
import { UiLabel } from '@workspace/ui/directives/label';
import { UiFormField } from '@workspace/ui/directives/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'textarea-with-text-example',
  template: \`
    <div class="grid w-full gap-3" uiFormField>
      <label uiLabel for="message-2">Your Message</label>
      <textarea uiTextarea placeholder="Type your message here." id="message-2" [(ngModel)]="message"></textarea>
      <p class="text-muted-foreground text-sm">
        Your message will be copied to the support team.
      </p>
    </div>
  \`,
  imports: [UiTextarea, UiLabel, UiFormField, FormsModule],
  standalone: true
})
export class TextareaWithTextExample {
  message = '';
}`,
    component: TextareaWithTextExample
  },
  {
    title: 'With Button',
    description: 'Textarea field with a submit button.',
    code: `import { UiTextarea } from '@workspace/ui/directives/textarea';
import { UiButton } from '@workspace/ui/directives/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'textarea-with-button-example',
  template: \`
    <div class="grid w-full gap-2">
      <textarea uiTextarea placeholder="Type your message here." [(ngModel)]="message"></textarea>
      <button uiButton>Send message</button>
    </div>
  \`,
  imports: [UiTextarea, UiButton, FormsModule],
  standalone: true
})
export class TextareaWithButtonExample {
  message = '';
}`,
    component: TextareaWithButtonExample
  },
  {
    title: 'Form',
    description: 'Complete form with textarea using ngModel and form field directives.',
    code: `import { UiTextarea } from '@workspace/ui/directives/textarea';
import { UiButton } from '@workspace/ui/directives/button';
import { UiFormField, UiDescription, UiLabel } from '@workspace/ui/directives/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'textarea-form-example',
  template: \`
    <form (ngSubmit)="onSubmit()">
      <div class="grid items-center gap-1.5" uiFormField>
        <label uiLabel>Bio</label>
        <textarea 
          uiTextarea 
          placeholder="Tell us a little bit about yourself"
          [(ngModel)]="bio" 
          name="bio" required>
        </textarea>
        <p uiDescription>
          You can <span>@mention</span> other users and organizations.
        </p>
      </div>
      <button uiButton type="submit">Submit</button>
    </form>
  \`,
  imports: [UiTextarea, UiLabel, UiButton, UiFormField, UiDescription, FormsModule],
  standalone: true
})
export class TextareaFormExample {
  bio = '';

  onSubmit() {
    console.log('Form submitted:', { bio: this.bio });
  }
}`,
    component: TextareaFormExample
  }
];
