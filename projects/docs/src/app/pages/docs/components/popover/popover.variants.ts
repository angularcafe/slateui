import { Component, TemplateRef } from '@angular/core';
import { UiPopover, UiPopoverTrigger, UiButton } from 'ui';
import {
  IVariant,
  IComponentMeta,
} from '@components/component-preview/component-preview';

@Component({
  selector: 'popover-default-example',
  template: `
    <button uiButton variant="outline" [uiPopoverTrigger]="popover">
      Open
    </button>
    <ng-template #popover>
      <div uiPopover>
        <div class="text-sm">
          This is a popover content block with arbitrary content.
        </div>
      </div>
    </ng-template>
  `,
  imports: [UiPopover, UiPopoverTrigger, UiButton],
})
export class PopoverDefaultExample {}

export const popoverMeta: IComponentMeta = {
  title: 'Popover',
  description: 'Displays content in a popover anchored to a trigger.',
  installation: {
    package: 'popover',
    import: `import { UiPopover, UiPopoverTrigger } from '@workspace/ui/directives/popover';`,
    usage: `<button [uiPopoverTrigger]="popover">Open</button><ng-template #popover><div uiPopover>Content</div></ng-template>`,
  },
  api: {
    props: [
      {
        name: 'uiPopoverTrigger',
        type: 'TemplateRef',
        description: 'Template ref for popover content.',
      },
      {
        name: 'uiPopoverTriggerPlacement',
        type: 'Placement',
        description: 'Popover placement.',
      },
      { name: 'class', type: 'string', description: 'Additional CSS classes.' },
    ],
  },
};

export const popoverVariants: IVariant[] = [
  {
    title: 'Default',
    description: 'Basic popover with a trigger.',
    code: `import { UiPopover, UiPopoverTrigger } from '@workspace/ui/directives/popover';
import { UiButton } from '@workspace/ui/directives/button';

@Component({
  selector: 'popover-default-example',
  template: \`
    <button uiButton variant=\"outline\" [uiPopoverTrigger]=\"popover\">Open</button>
    <ng-template #popover>
      <div uiPopover>
        <div class=\"text-sm\">This is a popover content block with arbitrary content.</div>
      </div>
    </ng-template>
  \`,
  imports: [UiPopover, UiPopoverTrigger, UiButton]
})
export class PopoverDefaultExample {}`,
    component: PopoverDefaultExample,
  },
];
