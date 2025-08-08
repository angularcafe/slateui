import { Component } from '@angular/core';
import { UiAlert, UiAlertDescription, UiAlertTitle } from 'ui';
import { IVariant, IComponentMeta } from '@components/component-preview/component-preview';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';

// Alert example components
@Component({
  selector: 'alert-default-example',
  template: `
    <div uiAlert>
      <div uiAlertTitle>Heads up!</div>
      <div uiAlertDescription>
        You can add components to your app using the CLI.
      </div>
    </div>
  `,
  imports: [UiAlert, UiAlertTitle, UiAlertDescription]
})
export class AlertDefaultExample {}

@Component({
  selector: 'alert-destructive-example',
  template: `
    <div uiAlert variant="destructive">
      <div uiAlertTitle>Error</div>
      <div uiAlertDescription>
        Your session has expired. Please log in again.
      </div>
    </div>
  `,
  imports: [UiAlert, UiAlertTitle, UiAlertDescription]
})
export class AlertDestructiveExample {}

@Component({
  selector: 'alert-with-icon-example',
  template: `
    <div uiAlert>
      <ng-icon uiIcon name="lucideCircleAlert"></ng-icon>
      <div uiAlertTitle>Well done!</div>
      <div uiAlertDescription>
        You successfully read this important alert message.
      </div>
    </div>
  `,
  providers: [provideIcons({ lucideCircleAlert })],
  imports: [UiAlert, UiAlertTitle, UiAlertDescription, NgIcon]
})
export class AlertWithIconExample {}

export const alertMeta: IComponentMeta = {
  title: 'Alert',
  description: 'Displays a callout for user attention.',
  installation: {
    package: 'alert',
    import: `import { UiAlert, UiAlertTitle, UiAlertDescription } from '@components/ui/alert';`,
    usage: `<div uiAlert>
  <div uiAlertTitle>Alert Title</div>
  <div uiAlertDescription>Alert description</div>
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
    code: `import { UiAlert, UiAlertTitle, UiAlertDescription } from '@components/ui/alert';

@Component({
  selector: 'alert-default-example',
  template: \`
    <div uiAlert>
      <div uiAlertTitle>Heads up!</div>
      <div uiAlertDescription>
        You can add components to your app using the CLI.
      </div>
    </div>
  \`,
  imports: [UiAlert, UiAlertTitle, UiAlertDescription]
})
export class AlertDefaultExample {}`,
    component: AlertDefaultExample
  },
  {
    title: 'Destructive',
    description: 'An alert for error messages.',
    code: `import { UiAlert, UiAlertTitle, UiAlertDescription } from '@components/ui/alert';

@Component({
  selector: 'alert-destructive-example',
  template: \`
    <div uiAlert variant="destructive">
      <div uiAlertTitle>Error</div>
      <div uiAlertDescription>
        Your session has expired. Please log in again.
      </div>
    </div>
  \`,
  imports: [UiAlert, UiAlertTitle, UiAlertDescription]
})
export class AlertDestructiveExample {}`,
    component: AlertDestructiveExample
  },
  {
    title: 'With Icon',
    description: 'An alert with an icon.',
    code: `import { UiAlert, UiAlertTitle, UiAlertDescription } from '@components/ui/alert';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';

@Component({
  selector: 'alert-with-icon-example',
  template: \`
    <div uiAlert>
      <ng-icon uiIcon name="lucideCircleAlert"></ng-icon>
      <div uiAlertTitle>Well done!</div>
      <div uiAlertDescription>
        You successfully read this important alert message.
      </div>
    </div>
  \`,
  providers: [provideIcons({ lucideCircleAlert })],
  imports: [UiAlert, UiAlertTitle, UiAlertDescription, NgIcon]
})
export class AlertWithIconExample {}`,
    component: AlertWithIconExample
  }
];