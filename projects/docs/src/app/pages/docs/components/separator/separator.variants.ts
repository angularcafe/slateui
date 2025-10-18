import { Component } from '@angular/core';
import { UiSeparator } from 'ui';
import {
  IVariant,
  IComponentMeta,
} from '@components/component-preview/component-preview';

@Component({
  selector: 'separator-default-example',
  template: `
    <div class="space-y-2">
      <div>Section 1</div>
      <div uiSeparator></div>
      <div>Section 2</div>
    </div>
  `,
  imports: [UiSeparator],
})
export class SeparatorDefaultExample {}

export const separatorMeta: IComponentMeta = {
  title: 'Separator',
  description: 'Visually separates content.',
  installation: {
    package: 'separator',
    import: `import { UiSeparator } from '@workspace/ui/directives/separator';`,
    usage: `<div uiSeparator></div>`,
  },
  api: {
    props: [
      {
        name: 'uiSeparatorOrientation',
        type: '"horizontal" | "vertical"',
        default: '"horizontal"',
        description: 'Orientation of the separator.',
      },
      { name: 'class', type: 'string', description: 'Additional CSS classes.' },
    ],
  },
};

export const separatorVariants: IVariant[] = [
  {
    title: 'Default',
    description: 'Horizontal separator between blocks.',
    code: `import { UiSeparator } from '@workspace/ui/directives/separator';

@Component({
  selector: 'separator-default-example',
  template: \`
    <div class=\"space-y-2\">
      <div>Section 1</div>
      <div uiSeparator></div>
      <div>Section 2</div>
    </div>
  \`,
  imports: [UiSeparator]
})
export class SeparatorDefaultExample {}`,
    component: SeparatorDefaultExample,
  },
];
