import { Component } from '@angular/core';
import { Alert, AlertDescription, AlertTitle } from 'ui';
import { IVariant, IComponentMeta } from '@components/component-preview/component-preview';

// Alert example components
@Component({
  selector: 'alert-default-example',
  template: `
    <div alert>
      <div alertTitle>Heads up!</div>
      <div alertDescription>
        You can add components to your app using the CLI.
      </div>
    </div>
  `,
  imports: [Alert, AlertTitle, AlertDescription]
})
export class AlertDefaultExample {}

@Component({
  selector: 'alert-destructive-example',
  template: `
    <div alert variant="destructive">
      <div alertTitle>Error</div>
      <div alertDescription>
        Your session has expired. Please log in again.
      </div>
    </div>
  `,
  imports: [Alert, AlertTitle, AlertDescription]
})
export class AlertDestructiveExample {}

@Component({
  selector: 'alert-with-icon-example',
  template: `
    <div alert>
      <svg uiAlertIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
      <div alertTitle>Well done!</div>
      <div alertDescription>
        You successfully read this important alert message.
      </div>
    </div>
  `,
  imports: [Alert, AlertTitle, AlertDescription]
})
export class AlertWithIconExample {}

export const alertMeta: IComponentMeta = {
  title: 'Alert',
  description: 'Displays a callout for user attention.',
  installation: {
    import: `import { Alert, AlertTitle, AlertDescription } from 'ui';`,
    usage: `<div alert>
  <div alertTitle>Alert Title</div>
  <div alertDescription>Alert description</div>
</div>`
  },
  api: {
    props: [
      {
        name: 'variant',
        type: '"default" | "destructive"',
        default: '"default"',
        description: 'The visual variant of the alert.'
      },
      {
        name: 'class',
        type: 'string',
        description: 'Additional CSS classes to apply to the alert.'
      }
    ]
  }
};

export const alertVariants: IVariant[] = [
  {
    title: 'Default',
    description: 'The default alert appearance.',
    code: `<div alert>
  <div alertTitle>Heads up!</div>
  <div alertDescription>
    You can add components to your app using the CLI.
  </div>
</div>`,
    component: AlertDefaultExample
  },
  {
    title: 'Destructive',
    description: 'An alert for error messages.',
    code: `<div alert variant="destructive">
  <div alertTitle>Error</div>
  <div alertDescription>
    Your session has expired. Please log in again.
  </div>
</div>`,
    component: AlertDestructiveExample
  },
  {
    title: 'With Icon',
    description: 'An alert with an icon.',
    code: `<div alert>
  <svg uiAlertIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
  <div alertTitle>Well done!</div>
  <div alertDescription>
    You successfully read this important alert message.
  </div>
</div>`,
    component: AlertWithIconExample
  }
];