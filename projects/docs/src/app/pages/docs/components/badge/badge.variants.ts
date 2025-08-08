import { Component } from '@angular/core';
import { UiBadge } from 'ui';
import { IVariant, IComponentMeta } from '@components/component-preview/component-preview';

@Component({
  selector: 'badge-default-example',
  template: `<span uiBadge>Default</span>`,
  imports: [UiBadge]
})
export class BadgeDefaultExample {}

@Component({
  selector: 'badge-secondary-example',
  template: `<span uiBadge variant="secondary">Secondary</span>`,
  imports: [UiBadge]
})
export class BadgeSecondaryExample {}

@Component({
  selector: 'badge-destructive-example',
  template: `<span uiBadge variant="destructive">Destructive</span>`,
  imports: [UiBadge]
})
export class BadgeDestructiveExample {}

@Component({
  selector: 'badge-outline-example',
  template: `<span uiBadge variant="outline">Outline</span>`,
  imports: [UiBadge]
})
export class BadgeOutlineExample {}

export const badgeMeta: IComponentMeta = {
  title: 'Badge',
  description: 'Displays a badge for labelling content.',
  installation: {
    package: 'badge',
    import: `import { UiBadge } from '@components/ui/badge';`,
    usage: `<span uiBadge>Badge</span>`
  },
  api: {
    props: [
      { name: 'variant', type: '"default" | "secondary" | "destructive" | "outline"', default: '"default"', description: 'Visual variant of the badge.' },
      { name: 'class', type: 'string', description: 'Additional CSS classes.' }
    ]
  }
};

export const badgeVariants: IVariant[] = [
  {
    title: 'Default',
    code: `import { UiBadge } from '@components/ui/badge';

@Component({
  selector: 'badge-default-example',
  template: \`<span uiBadge>Default</span>\`,
  imports: [UiBadge]
})
export class BadgeDefaultExample {}`,
    component: BadgeDefaultExample
  },
  {
    title: 'Secondary',
    code: `import { UiBadge } from '@components/ui/badge';

@Component({
  selector: 'badge-secondary-example',
  template: \`<span uiBadge variant="secondary">Secondary</span>\`,
  imports: [UiBadge]
})
export class BadgeSecondaryExample {}`,
    component: BadgeSecondaryExample
  },
  {
    title: 'Destructive',
    code: `import { UiBadge } from '@components/ui/badge';

@Component({
  selector: 'badge-destructive-example',
  template: \`<span uiBadge variant="destructive">Destructive</span>\`,
  imports: [UiBadge]
})
export class BadgeDestructiveExample {}`,
    component: BadgeDestructiveExample
  },
  {
    title: 'Outline',
    code: `import { UiBadge } from '@components/ui/badge';

@Component({
  selector: 'badge-outline-example',
  template: \`<span uiBadge variant="outline">Outline</span>\`,
  imports: [UiBadge]
})
export class BadgeOutlineExample {}`,
    component: BadgeOutlineExample
  }
];

