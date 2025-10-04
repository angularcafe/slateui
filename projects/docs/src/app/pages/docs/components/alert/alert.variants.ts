import { Component } from '@angular/core';
import { UiAlert, UiAlertDescription, UiAlertTitle } from 'ui';
import { IVariant, IComponentMeta } from '@components/component-preview/component-preview';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';

// Alert example components
@Component({
  selector: 'alert-default-example',
  template: `
    <ui-alert>
      <ui-alert-title>Heads up!</ui-alert-title>
      <ui-alert-description>
        You can add components to your app using the CLI.
      </ui-alert-description>
    </ui-alert>
  `,
  imports: [UiAlert, UiAlertTitle, UiAlertDescription]
})
export class AlertDefaultExample {}

@Component({
  selector: 'alert-destructive-example',
  template: `
    <ui-alert variant="destructive">
      <ui-alert-title>Error</ui-alert-title>
      <ui-alert-description>
        Your session has expired. Please log in again.
      </ui-alert-description>
    </ui-alert>
  `,
  imports: [UiAlert, UiAlertTitle, UiAlertDescription]
})
export class AlertDestructiveExample {}

@Component({
  selector: 'alert-with-icon-example',
  template: `
    <ui-alert>
      <ng-icon uiIcon name="lucideCircleAlert"></ng-icon>
      <ui-alert-title>Well done!</ui-alert-title>
      <ui-alert-description>
        You successfully read this important alert message.
      </ui-alert-description>
    </ui-alert>
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
    import: `import { UiAlert, UiAlertTitle, UiAlertDescription } from '@workspace/ui/alert';`,
    usage: `<ui-alert>
  <ui-alert-title>Alert Title</ui-alert-title>
  <ui-alert-description>Alert description</ui-alert-description>
</ui-alert>`
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
    code: `import { UiAlert, UiAlertTitle, UiAlertDescription } from '@workspace/ui/alert';

@Component({
  selector: 'alert-default-example',
  template: \`
    <ui-alert>
      <ui-alert-title>Heads up!</ui-alert-title>
      <ui-alert-description>
        You can add components to your app using the CLI.
      </ui-alert-description>
    </ui-alert>
  \`,
  imports: [UiAlert, UiAlertTitle, UiAlertDescription]
})
export class AlertDefaultExample {}`,
    component: AlertDefaultExample
  },
  {
    title: 'Destructive',
    description: 'An alert for error messages.',
    code: `import { UiAlert, UiAlertTitle, UiAlertDescription } from '@workspace/ui/alert';

@Component({
  selector: 'alert-destructive-example',
  template: \`
    <ui-alert variant="destructive">
      <ui-alert-title>Error</ui-alert-title>
      <ui-alert-description>
        Your session has expired. Please log in again.
      </ui-alert-description>
    </ui-alert>
  \`,
  imports: [UiAlert, UiAlertTitle, UiAlertDescription]
})
export class AlertDestructiveExample {}`,
    component: AlertDestructiveExample
  },
  {
    title: 'With Icon',
    description: 'An alert with an icon.',
    code: `import { UiAlert, UiAlertTitle, UiAlertDescription } from '@workspace/ui/alert';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';

@Component({
  selector: 'alert-with-icon-example',
  template: \`
    <ui-alert>
      <ng-icon uiIcon name="lucideCircleAlert"></ng-icon>
      <ui-alert-title>Well done!</ui-alert-title>
      <ui-alert-description>
        You successfully read this important alert message.
      </ui-alert-description>
    </ui-alert>
  \`,
  providers: [provideIcons({ lucideCircleAlert })],
  imports: [UiAlert, UiAlertTitle, UiAlertDescription, NgIcon]
})
export class AlertWithIconExample {}`,
    component: AlertWithIconExample
  }
];