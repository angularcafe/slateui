import { Component, model } from '@angular/core';
import { UiRadioGroup, UiRadioItem, UiRadio, UiRadioIndicator, UiLabel } from 'ui';
import { IVariant, IComponentMeta } from '@components/component-preview/component-preview';

// Radio Group example components for dynamic rendering
@Component({
  selector: 'radio-group-default-example',
  template: `
    <div uiRadioGroup [(defaultValue)]="selectedValue">
      <div uiRadioItem value="default">
        <div uiRadio>
          <div uiRadioIndicator></div>
        </div>
        <label uiLabel>Default</label>
      </div>
      <div uiRadioItem value="comfortable">
        <div uiRadio>
          <div uiRadioIndicator></div>
        </div>
        <label uiLabel>Comfortable</label>
      </div>
      <div uiRadioItem value="compact">
        <div uiRadio>
          <div uiRadioIndicator></div>
        </div>
        <label uiLabel>Compact</label>
      </div>
    </div>
  `,
  imports: [UiRadioGroup, UiRadioItem, UiRadio, UiRadioIndicator, UiLabel]
})
export class RadioGroupDefaultExample {
  selectedValue = model('comfortable');
}

@Component({
  selector: 'radio-group-disabled-example',
  template: `
    <div uiRadioGroup [(defaultValue)]="selectedValue" disabled>
      <div uiRadioItem value="option1" disabled>
        <div uiRadio>
          <div uiRadioIndicator></div>
        </div>
        <label uiLabel>Option 1</label>
      </div>
      <div uiRadioItem value="option2">
        <div uiRadio>
          <div uiRadioIndicator></div>
        </div>
        <label uiLabel>Option 2</label>
      </div>
    </div>
  `,
  imports: [UiRadioGroup, UiRadioItem, UiRadio, UiRadioIndicator, UiLabel]
})
export class RadioGroupDisabledExample {
  selectedValue = model('option1');
}

@Component({
  selector: 'radio-group-horizontal-example',
  template: `
    <div uiRadioGroup [(defaultValue)]="selectedValue" orientation="horizontal">
      <div uiRadioItem value="yes">
        <div uiRadio>
          <div uiRadioIndicator></div>
        </div>
        <label uiLabel>Yes</label>
      </div>
      <div uiRadioItem value="no">
        <div uiRadio>
          <div uiRadioIndicator></div>
        </div>
        <label uiLabel>No</label>
      </div>
      <div uiRadioItem value="maybe">
        <div uiRadio>
          <div uiRadioIndicator></div>
        </div>
        <label uiLabel>Maybe</label>
      </div>
    </div>
  `,
  imports: [UiRadioGroup, UiRadioItem, UiRadio, UiRadioIndicator, UiLabel]
})
export class RadioGroupHorizontalExample {
  selectedValue = model('yes');
}

@Component({
  selector: 'radio-group-form-example',
  template: `
    <form (ngSubmit)="onSubmit()" class="w-2/3 space-y-6">
      <div class="space-y-3">
        <label class="text-sm font-medium leading-none">Notify me about...</label>
        <div uiRadioGroup [(defaultValue)]="notificationType">
          <div uiRadioItem value="all">
            <div uiRadio>
              <div uiRadioIndicator></div>
            </div>
            <label uiLabel class="font-normal">All new messages</label>
          </div>
          <div uiRadioItem value="mentions">
            <div uiRadio>
              <div uiRadioIndicator></div>
            </div>
            <label uiLabel class="font-normal">Direct messages and mentions</label>
          </div>
          <div uiRadioItem value="none">
            <div uiRadio>
              <div uiRadioIndicator></div>
            </div>
            <label uiLabel class="font-normal">Nothing</label>
          </div>
        </div>
      </div>
      <button type="submit" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
        Submit
      </button>
    </form>
  `,
  imports: [UiRadioGroup, UiRadioItem, UiRadio, UiRadioIndicator, UiLabel]
})
export class RadioGroupFormExample {
  notificationType = model('all');
  
  onSubmit() {
    console.log('Selected:', this.notificationType());
  }
}

export const radioGroupMeta: IComponentMeta = {
  title: 'Radio Group',
  description: 'A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.',
  installation: {
    package: 'radio-group',
    import: `import { UiRadioGroup, UiRadioItem, UiRadio, UiRadioIndicator, UiLabel } from '@workspace/ui/directives/radio-group';`,
    usage: `<div uiRadioGroup [(defaultValue)]="selectedValue">
  <div uiRadioItem value="option-one">
    <div uiRadio>
      <div uiRadioIndicator></div>
    </div>
    <label uiLabel>Option One</label>
  </div>
  <div uiRadioItem value="option-two">
    <div uiRadio>
      <div uiRadioIndicator></div>
    </div>
    <label uiLabel>Option Two</label>
  </div>
</div>`
  },
  api: {
    props: [
      {
        name: 'defaultValue',
        type: 'string',
        default: 'undefined',
        description: 'The value of the selected radio button.'
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the radio group is disabled.'
      },
      {
        name: 'orientation',
        type: '"vertical" | "horizontal"',
        default: '"vertical"',
        description: 'The orientation of the radio group.'
      },
      {
        name: 'class',
        type: 'string',
        description: 'Additional CSS classes to apply to the radio group.'
      }
    ],
    outputs: [
      {
        name: 'defaultValueChange',
        type: 'string',
        description: 'Emitted when the selected value changes.'
      }
    ]
  }
};

export const radioGroupVariants: IVariant[] = [
  {
    title: 'Default',
    description: 'A basic radio group with multiple options.',
    code: `import { Component, model } from '@angular/core';
import { UiRadioGroup, UiRadioItem, UiRadio, UiRadioIndicator, UiLabel } from '@workspace/ui/directives/radio-group';

@Component({
  selector: 'radio-group-default-example',
  template: \`
    <div uiRadioGroup [(defaultValue)]="selectedValue">
      <div uiRadioItem value="default">
        <div uiRadio>
          <div uiRadioIndicator></div>
        </div>
        <label uiLabel>Default</label>
      </div>
      <div uiRadioItem value="comfortable">
        <div uiRadio>
          <div uiRadioIndicator></div>
        </div>
        <label uiLabel>Comfortable</label>
      </div>
      <div uiRadioItem value="compact">
        <div uiRadio>
          <div uiRadioIndicator></div>
        </div>
        <label uiLabel>Compact</label>
      </div>
    </div>
  \`,
  imports: [UiRadioGroup, UiRadioItem, UiRadio, UiRadioIndicator, UiLabel]
})
export class RadioGroupDefaultExample {
  selectedValue = model('comfortable');
}`,
    component: RadioGroupDefaultExample
  },
  {
    title: 'Disabled',
    description: 'A disabled radio group where all options are non-interactive.',
    code: `import { Component, model } from '@angular/core';
import { UiRadioGroup, UiRadioItem, UiRadio, UiRadioIndicator, UiLabel } from '@workspace/ui/directives/radio-group';

@Component({
  selector: 'radio-group-disabled-example',
  template: \`
    <div uiRadioGroup [(defaultValue)]="selectedValue" disabled>
      <div uiRadioItem value="option1">
        <div uiRadio>
          <div uiRadioIndicator></div>
        </div>
        <label uiLabel>Option 1</label>
      </div>
      <div uiRadioItem value="option2">
        <div uiRadio>
          <div uiRadioIndicator></div>
        </div>
        <label uiLabel>Option 2</label>
      </div>
    </div>
  \`,
  imports: [UiRadioGroup, UiRadioItem, UiRadio, UiRadioIndicator, UiLabel]
})
export class RadioGroupDisabledExample {
  selectedValue = model('option1');
}`,
    component: RadioGroupDisabledExample
  },
  {
    title: 'Horizontal',
    description: 'A radio group with horizontal orientation.',
    code: `import { Component, model } from '@angular/core';
import { UiRadioGroup, UiRadioItem, UiRadio, UiRadioIndicator, UiLabel } from '@workspace/ui/directives/radio-group';

@Component({
  selector: 'radio-group-horizontal-example',
  template: \`
    <div uiRadioGroup [(defaultValue)]="selectedValue" orientation="horizontal">
      <div uiRadioItem value="yes">
        <div uiRadio>
          <div uiRadioIndicator></div>
        </div>
        <label uiLabel>Yes</label>
      </div>
      <div uiRadioItem value="no">
        <div uiRadio>
          <div uiRadioIndicator></div>
        </div>
        <label uiLabel>No</label>
      </div>
      <div uiRadioItem value="maybe">
        <div uiRadio>
          <div uiRadioIndicator></div>
        </div>
        <label uiLabel>Maybe</label>
      </div>
    </div>
  \`,
  imports: [UiRadioGroup, UiRadioItem, UiRadio, UiRadioIndicator, UiLabel]
})
export class RadioGroupHorizontalExample {
  selectedValue = model('yes');
}`,
    component: RadioGroupHorizontalExample
  },
  {
    title: 'Form',
    description: 'A radio group used in a form context with proper form integration.',
    code: `import { Component, model } from '@angular/core';
import { UiRadioGroup, UiRadioItem, UiRadio, UiRadioIndicator, UiLabel } from '@workspace/ui/directives/radio-group';

@Component({
  selector: 'radio-group-form-example',
  template: \`
    <form (ngSubmit)="onSubmit()" class="w-2/3 space-y-6">
      <div class="space-y-3">
        <label class="text-sm font-medium leading-none">Notify me about...</label>
        <div uiRadioGroup [(defaultValue)]="notificationType">
          <div uiRadioItem value="all">
            <div uiRadio>
              <div uiRadioIndicator></div>
            </div>
            <label uiLabel class="font-normal">All new messages</label>
          </div>
          <div uiRadioItem value="mentions">
            <div uiRadio>
              <div uiRadioIndicator></div>
            </div>
            <label uiLabel class="font-normal">Direct messages and mentions</label>
          </div>
          <div uiRadioItem value="none">
            <div uiRadio>
              <div uiRadioIndicator></div>
            </div>
            <label uiLabel class="font-normal">Nothing</label>
          </div>
        </div>
      </div>
      <button type="submit" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
        Submit
      </button>
    </form>
  \`,
  imports: [UiRadioGroup, UiRadioItem, UiRadio, UiRadioIndicator, UiLabel]
})
export class RadioGroupFormExample {
  notificationType = model('all');
  
  onSubmit() {
    console.log('Selected:', this.notificationType());
  }
}`,
    component: RadioGroupFormExample
  }
];
