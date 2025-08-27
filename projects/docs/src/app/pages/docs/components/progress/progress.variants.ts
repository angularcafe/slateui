import { Component, signal } from '@angular/core';
import { UiProgress, UiProgressIndicator } from 'ui';
import { IVariant, IComponentMeta } from '@components/component-preview/component-preview';

// Progress example components for dynamic rendering
@Component({
  selector: 'progress-default-example',
  template: `
    <div uiProgress [uiProgressValue]="value()" class="w-full">
      <div uiProgressIndicator></div>
    </div>
  `,
  imports: [UiProgress, UiProgressIndicator],
  host: {
    class: 'w-full'
  }
})
export class ProgressDefaultExample {
  readonly value = signal(33);
}


export const progressMeta: IComponentMeta = {
  title: 'Progress',
  description: 'Displays an indicator showing the completion progress of a task.',
  installation: {
    package: 'progress',
    import: `import { UiProgress, UiProgressIndicator } from '@workspace/ui/directives/progress';`,
    usage: `
<div uiProgress [uiProgressValue]="value()">
  <div uiProgressIndicator></div>
</div>`
  },
  api: {
    props: [
      {
        name: 'uiProgress',
        type: 'Directive',
        description: 'The main progress container directive.'
      },
      {
        name: 'uiProgressIndicator',
        type: 'Directive',
        description: 'The progress bar indicator that shows the current progress.'
      },
      {
        name: 'uiProgressValue',
        type: 'number',
        description: 'The current progress value.'
      },
      {
        name: 'uiProgressMin',
        type: 'number',
        default: '0',
        description: 'The minimum progress value.'
      },
      {
        name: 'uiProgressMax',
        type: 'number',
        default: '100',
        description: 'The maximum progress value.'
      },
      {
        name: 'class',
        type: 'string',
        description: 'Additional CSS classes to apply to the element.'
      }
    ]
  }
};

export const progressVariants: IVariant[] = [
  {
    title: 'Default',
    description: 'Basic progress bar with default styling.',
    code: `import { UiProgress, UiProgressIndicator } from '@workspace/ui/directives/progress';

@Component({
  selector: 'progress-default-example',
  template: \`
    <div uiProgress [uiProgressValue]="value()" class="w-full">
      <div uiProgressIndicator></div>
    </div>
  \`,
  imports: [UiProgress, UiProgressIndicator]
})
export class ProgressDefaultExample {
  readonly value = signal(33);
}`,
    component: ProgressDefaultExample
  }
]; 