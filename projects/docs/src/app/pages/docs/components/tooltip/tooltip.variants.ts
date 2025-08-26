import { Component, TemplateRef } from '@angular/core';
import { UiTooltip, UiTooltipTrigger, UiButton, UiTooltipArrow } from 'ui';
import { IVariant, IComponentMeta } from '@components/component-preview/component-preview';

@Component({
  selector: 'tooltip-default-example',
  template: `
    <button uiButton variant="outline" [uiTooltipTrigger]="tooltip">Hover</button>
    <ng-template #tooltip>
      <div uiTooltip>Add to library</div>
      <div uiTooltipArrow></div>
    </ng-template>
  `,
  imports: [UiTooltip, UiTooltipTrigger, UiTooltipArrow, UiButton]
})
export class TooltipDefaultExample {}

export const tooltipMeta: IComponentMeta = {
  title: 'Tooltip',
  description: 'A popup that displays contextual information.',
  installation: {
    package: 'tooltip',
    import: `import { UiTooltip, UiTooltipTrigger } from '@workspace/ui/directives/tooltip';`,
    usage: `<button [uiTooltipTrigger]="tooltip">Hover</button><ng-template #tooltip><div uiTooltip>Add to library</div><div uiTooltipArrow></div></ng-template>`
  },
  api: {
    props: [
      { name: 'uiTooltipTrigger', type: 'TemplateRef', description: 'Template ref for tooltip content.' },
      { name: 'uiTooltipTriggerPlacement', type: 'Placement', description: 'Tooltip placement.' },
      { name: 'class', type: 'string', description: 'Additional CSS classes.' }
    ]
  }
};

export const tooltipVariants: IVariant[] = [
  {
    title: 'Default',
    description: 'Basic tooltip with a trigger.',
    code: `import { UiTooltip, UiTooltipTrigger } from '@workspace/ui/directives/tooltip';
import { UiButton } from '@workspace/ui/directives/button';

@Component({
  selector: 'tooltip-default-example',
  template: \`
    <button uiButton variant="outline" [uiTooltipTrigger]="tooltip">Hover</button>
    <ng-template #tooltip>
      <div uiTooltip>Add to library</div>
    </ng-template>
  \`,
  imports: [UiTooltip, UiTooltipTrigger, UiButton]
})
export class TooltipDefaultExample {}`,
    component: TooltipDefaultExample
  }
];

