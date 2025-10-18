import { Component } from '@angular/core';
import { UiSkeleton } from 'ui';
import {
  IVariant,
  IComponentMeta,
} from '@components/component-preview/component-preview';

@Component({
  selector: 'skeleton-default-example',
  template: `
    <div class="flex items-center space-x-4">
      <div uiSkeleton class="h-12 w-12 rounded-full"></div>
      <div class="space-y-2">
        <div uiSkeleton class="h-4 w-[250px]"></div>
        <div uiSkeleton class="h-4 w-[200px]"></div>
      </div>
    </div>
  `,
  imports: [UiSkeleton],
})
export class SkeletonDefaultExample {}

@Component({
  selector: 'skeleton-card-example',
  template: `
    <div class="flex flex-col space-y-3">
      <div uiSkeleton class="h-[125px] w-[250px] rounded-xl"></div>
      <div class="space-y-2">
        <div uiSkeleton class="h-4 w-[250px]"></div>
        <div uiSkeleton class="h-4 w-[200px]"></div>
      </div>
    </div>
  `,
  imports: [UiSkeleton],
})
export class SkeletonCardExample {}

@Component({
  selector: 'skeleton-list-example',
  template: `
    <div class="space-y-3">
      <div class="flex items-center space-x-4">
        <div uiSkeleton class="h-12 w-12 rounded-full"></div>
        <div class="space-y-2">
          <div uiSkeleton class="h-4 w-[250px]"></div>
          <div uiSkeleton class="h-4 w-[200px]"></div>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <div uiSkeleton class="h-12 w-12 rounded-full"></div>
        <div class="space-y-2">
          <div uiSkeleton class="h-4 w-[250px]"></div>
          <div uiSkeleton class="h-4 w-[200px]"></div>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <div uiSkeleton class="h-12 w-12 rounded-full"></div>
        <div class="space-y-2">
          <div uiSkeleton class="h-4 w-[250px]"></div>
          <div uiSkeleton class="h-4 w-[200px]"></div>
        </div>
      </div>
    </div>
  `,
  imports: [UiSkeleton],
})
export class SkeletonListExample {}

export const skeletonMeta: IComponentMeta = {
  title: 'Skeleton',
  description: 'Use to show a placeholder while content is loading.',
  installation: {
    package: 'skeleton',
    import: `import { UiSkeleton } from '@workspace/ui/directives/skeleton';`,
    usage: `<div uiSkeleton class="h-4 w-[250px]"></div>`,
  },
  api: {
    props: [
      {
        name: 'class',
        type: 'string',
        description: 'Additional CSS classes to apply to the skeleton element.',
      },
    ],
  },
};

export const skeletonVariants: IVariant[] = [
  {
    title: 'Default',
    description: 'A basic skeleton with avatar and text placeholders.',
    code: `import { UiSkeleton } from '@workspace/ui/directives/skeleton';

@Component({
  selector: 'skeleton-default-example',
  template: \`
    <div class="flex items-center space-x-4">
      <div uiSkeleton class="h-12 w-12 rounded-full"></div>
      <div class="space-y-2">
        <div uiSkeleton class="h-4 w-[250px]"></div>
        <div uiSkeleton class="h-4 w-[200px]"></div>
      </div>
    </div>
  \`,
  imports: [UiSkeleton]
})
export class SkeletonDefaultExample {}`,
    component: SkeletonDefaultExample,
  },
  {
    title: 'Card',
    description:
      'A skeleton for card layouts with image and text placeholders.',
    code: `import { UiSkeleton } from '@workspace/ui/directives/skeleton';

@Component({
  selector: 'skeleton-card-example',
  template: \`
    <div class="flex flex-col space-y-3">
      <div uiSkeleton class="h-[125px] w-[250px] rounded-xl"></div>
      <div class="space-y-2">
        <div uiSkeleton class="h-4 w-[250px]"></div>
        <div uiSkeleton class="h-4 w-[200px]"></div>
      </div>
    </div>
  \`,
  imports: [UiSkeleton]
})
export class SkeletonCardExample {}`,
    component: SkeletonCardExample,
  },
  {
    title: 'List',
    description: 'A skeleton for list layouts with multiple items.',
    code: `import { UiSkeleton } from '@workspace/ui/directives/skeleton';

@Component({
  selector: 'skeleton-list-example',
  template: \`
    <div class="space-y-3">
      <div class="flex items-center space-x-4">
        <div uiSkeleton class="h-12 w-12 rounded-full"></div>
        <div class="space-y-2">
          <div uiSkeleton class="h-4 w-[250px]"></div>
          <div uiSkeleton class="h-4 w-[200px]"></div>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <div uiSkeleton class="h-12 w-12 rounded-full"></div>
        <div class="space-y-2">
          <div uiSkeleton class="h-4 w-[250px]"></div>
          <div uiSkeleton class="h-4 w-[200px]"></div>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <div uiSkeleton class="h-12 w-12 rounded-full"></div>
        <div class="space-y-2">
          <div uiSkeleton class="h-4 w-[250px]"></div>
          <div uiSkeleton class="h-4 w-[200px]"></div>
        </div>
      </div>
    </div>
  \`,
  imports: [UiSkeleton]
})
export class SkeletonListExample {}`,
    component: SkeletonListExample,
  },
];
