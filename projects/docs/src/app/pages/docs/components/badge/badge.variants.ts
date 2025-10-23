import { Component } from '@angular/core';
import { UiBadge } from 'ui';
import {
  IVariant,
  IComponentMeta,
} from '@components/component-preview/component-preview';

@Component({
  selector: 'badge-default-example',
  template: `<ui-badge>Default</ui-badge>`,
  imports: [UiBadge],
})
export class BadgeDefaultExample {}

@Component({
  selector: 'badge-secondary-example',
  template: `<ui-badge variant="secondary">Secondary</ui-badge>`,
  imports: [UiBadge],
})
export class BadgeSecondaryExample {}

@Component({
  selector: 'badge-destructive-example',
  template: `<ui-badge variant="destructive">Destructive</ui-badge>`,
  imports: [UiBadge],
})
export class BadgeDestructiveExample {}

@Component({
  selector: 'badge-outline-example',
  template: `<ui-badge variant="outline">Outline</ui-badge>`,
  imports: [UiBadge],
})
export class BadgeOutlineExample {}

export const badgeMeta: IComponentMeta = {
  title: 'Badge',
  description: 'Displays a badge for labelling content.',
  installation: {
    package: 'badge',
    import: `import { UiBadge } from '@workspace/ui/badge';`,
    usage: `<ui-badge>Badge</ui-badge>`,
  },
  api: {
    props: [
      {
        name: 'variant',
        type: '"default" | "secondary" | "destructive" | "outline"',
        default: '"default"',
        description: 'Visual variant of the badge.',
      },
      { name: 'class', type: 'string', description: 'Additional CSS classes.' },
    ],
  },
};

export const badgeVariants: IVariant[] = [
  {
    title: 'Default',
    code: `import { UiBadge } from '@workspace/ui/badge';

@Component({
  selector: 'badge-default-example',
  template: \`<ui-badge>Default</ui-badge>\`,
  imports: [UiBadge]
})
export class BadgeDefaultExample {}`,
    component: BadgeDefaultExample,
  },
  {
    title: 'Secondary',
    code: `import { UiBadge } from '@workspace/ui/badge';

@Component({
  selector: 'badge-secondary-example',
  template: \`<ui-badge variant="secondary">Secondary</ui-badge>\`,
  imports: [UiBadge]
})
export class BadgeSecondaryExample {}`,
    component: BadgeSecondaryExample,
  },
  {
    title: 'Destructive',
    code: `import { UiBadge } from '@workspace/ui/badge';

@Component({
  selector: 'badge-destructive-example',
  template: \`<ui-badge variant="destructive">Destructive</ui-badge>\`,
  imports: [UiBadge]
})
export class BadgeDestructiveExample {}`,
    component: BadgeDestructiveExample,
  },
  {
    title: 'Outline',
    code: `import { UiBadge } from '@workspace/ui/badge';

@Component({
  selector: 'badge-outline-example',
  template: \`<ui-badge variant="outline">Outline</ui-badge>\`,
  imports: [UiBadge]
})
export class BadgeOutlineExample {}`,
    component: BadgeOutlineExample,
  },
];
