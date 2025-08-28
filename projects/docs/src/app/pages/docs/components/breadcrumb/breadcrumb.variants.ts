import { Component } from '@angular/core';
import { UiBreadcrumb, UiBreadcrumbItem, UiBreadcrumbLink, UiBreadcrumbPage, UiBreadcrumbSeparator, UiBreadcrumbList, UiBreadcrumbEllipsis } from 'ui';
import { IVariant, IComponentMeta } from '@components/component-preview/component-preview';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronRight, lucideHouse, lucideFileText, lucideSettings, lucideEllipsis } from '@ng-icons/lucide';

// Breadcrumb example components for dynamic rendering
@Component({
  selector: 'breadcrumb-default-example',
  standalone: true,
  template: `
    <nav uiBreadcrumb>
      <ol uiBreadcrumbList>
        <li uiBreadcrumbItem>
          <a uiBreadcrumbLink href="#">Home</a>
        </li>
        <li uiBreadcrumbSeparator>
          <ng-icon name="lucideChevronRight" size="16" />
        </li>
        <li uiBreadcrumbItem>
          <a uiBreadcrumbLink href="#">Components</a>
        </li>
        <li uiBreadcrumbSeparator>
          <ng-icon name="lucideChevronRight" size="16" />
        </li>
        <li uiBreadcrumbItem>
          <span uiBreadcrumbPage>Breadcrumb</span>
        </li>
      </ol>
    </nav>
  `,
  imports: [UiBreadcrumb, UiBreadcrumbList, UiBreadcrumbItem, UiBreadcrumbLink, UiBreadcrumbPage, UiBreadcrumbSeparator, NgIcon],
  providers: [provideIcons({ lucideChevronRight })]
})
export class BreadcrumbDefaultExample {}

@Component({
  selector: 'breadcrumb-with-icons-example',
  standalone: true,
  template: `
    <nav uiBreadcrumb>
      <ol uiBreadcrumbList>
        <li uiBreadcrumbItem>
          <a uiBreadcrumbLink href="#" class="flex items-center gap-1">
            <ng-icon name="lucideHouse" size="16" />
            Home
          </a>
        </li>
        <li uiBreadcrumbSeparator>
          <ng-icon name="lucideChevronRight" size="16" />
        </li>
        <li uiBreadcrumbItem>
          <a uiBreadcrumbLink href="#" class="flex items-center gap-1">
            <ng-icon name="lucideFileText" size="16" />
            Documents
          </a>
        </li>
        <li uiBreadcrumbSeparator>
          <ng-icon name="lucideChevronRight" size="16" />
        </li>
        <li uiBreadcrumbItem>
          <span uiBreadcrumbPage class="flex items-center gap-1">
            <ng-icon name="lucideSettings" size="16" />
            Settings
          </span>
        </li>
      </ol>
    </nav>
  `,
  imports: [UiBreadcrumb, UiBreadcrumbList, UiBreadcrumbItem, UiBreadcrumbLink, UiBreadcrumbPage, UiBreadcrumbSeparator, NgIcon],
  providers: [provideIcons({ lucideChevronRight, lucideHouse, lucideFileText, lucideSettings })]
})
export class BreadcrumbWithIconsExample {}

@Component({
  selector: 'breadcrumb-collapsed-example',
  standalone: true,
  template: `
    <nav uiBreadcrumb>
      <ol uiBreadcrumbList>
        <li uiBreadcrumbItem>
          <a uiBreadcrumbLink href="#">Home</a>
        </li>
        <li uiBreadcrumbSeparator>
          <ng-icon name="lucideChevronRight" size="16" />
        </li>
        <li uiBreadcrumbItem>
          <span uiBreadcrumbEllipsis>
            <ng-icon name="lucideEllipsis" size="16" />
          </span>
        </li>
        <li uiBreadcrumbSeparator>
          <ng-icon name="lucideChevronRight" size="16" />
        </li>
        <li uiBreadcrumbItem>
          <a uiBreadcrumbLink href="#">Components</a>
        </li>
        <li uiBreadcrumbSeparator>
          <ng-icon name="lucideChevronRight" size="16" />
        </li>
        <li uiBreadcrumbItem>
          <span uiBreadcrumbPage>Breadcrumb</span>
        </li>
      </ol>
    </nav>
  `,
  imports: [UiBreadcrumb, UiBreadcrumbList, UiBreadcrumbItem, UiBreadcrumbLink, UiBreadcrumbPage, UiBreadcrumbSeparator, UiBreadcrumbEllipsis, NgIcon],
  providers: [provideIcons({ lucideChevronRight, lucideEllipsis })]
})
export class BreadcrumbCollapsedExample {}

export const breadcrumbVariants: IVariant[] = [
  {
    title: 'Default',
    component: BreadcrumbDefaultExample,
    code: `<nav uiBreadcrumb>
  <ol uiBreadcrumbList>
    <li uiBreadcrumbItem>
      <a uiBreadcrumbLink href="#">Home</a>
    </li>
    <li uiBreadcrumbSeparator>
      <ng-icon name="lucideChevronRight" size="16" />
    </li>
    <li uiBreadcrumbItem>
      <a uiBreadcrumbLink href="#">Components</a>
    </li>
    <li uiBreadcrumbSeparator>
      <ng-icon name="lucideChevronRight" size="16" />
    </li>
    <li uiBreadcrumbItem>
      <span uiBreadcrumbPage>Breadcrumb</span>
    </li>
  </ol>
</nav>`
  },
  {
    title: 'With Icons',
    component: BreadcrumbWithIconsExample,
    code: `<nav uiBreadcrumb>
  <ol uiBreadcrumbList>
    <li uiBreadcrumbItem>
      <a uiBreadcrumbLink href="#" class="flex items-center gap-1">
        <ng-icon name="lucideHouse" size="16" />
        Home
      </a>
    </li>
    <li uiBreadcrumbSeparator>
      <ng-icon name="lucideChevronRight" size="16" />
    </li>
    <li uiBreadcrumbItem>
      <a uiBreadcrumbLink href="#" class="flex items-center gap-1">
        <ng-icon name="lucideFileText" size="16" />
        Documents
      </a>
    </li>
    <li uiBreadcrumbSeparator>
      <ng-icon name="lucideChevronRight" size="16" />
    </li>
    <li uiBreadcrumbItem>
      <span uiBreadcrumbPage class="flex items-center gap-1">
        <ng-icon name="lucideSettings" size="16" />
        Settings
      </span>
    </li>
  </ol>
</nav>`
  },
  {
    title: 'Collapsed',
    component: BreadcrumbCollapsedExample,
    code: `<nav uiBreadcrumb>
  <ol uiBreadcrumbList>
    <li uiBreadcrumbItem>
      <a uiBreadcrumbLink href="#">Home</a>
    </li>
    <li uiBreadcrumbSeparator>
      <ng-icon name="lucideChevronRight" size="16" />
    </li>
    <li uiBreadcrumbItem>
      <span uiBreadcrumbEllipsis>
        <ng-icon name="lucideEllipsis" size="16" />
      </span>
    </li>
    <li uiBreadcrumbSeparator>
      <ng-icon name="lucideChevronRight" size="16" />
    </li>
    <li uiBreadcrumbItem>
      <a uiBreadcrumbLink href="#">Components</a>
    </li>
    <li uiBreadcrumbSeparator>
      <ng-icon name="lucideChevronRight" size="16" />
    </li>
    <li uiBreadcrumbItem>
      <span uiBreadcrumbPage>Breadcrumb</span>
    </li>
  </ol>
</nav>`
  }
];

export const breadcrumbMeta: IComponentMeta = {
  title: 'Breadcrumb',
  description: 'A navigation component that shows the current page location within a hierarchy.',
  installation: {
    package: 'breadcrumb',
    import: `import { UiBreadcrumb, UiBreadcrumbList, UiBreadcrumbItem, UiBreadcrumbLink, UiBreadcrumbPage, UiBreadcrumbSeparator, UiBreadcrumbEllipsis } from '@workspace/ui';`,
    usage: `<nav uiBreadcrumb>
  <ol uiBreadcrumbList>
    <li uiBreadcrumbItem>
      <a uiBreadcrumbLink href="#">Home</a>
    </li>
    <li uiBreadcrumbSeparator>
      <ng-icon name=\"lucideChevronRight\" size=\"16\" />
    </li>
    <li uiBreadcrumbItem>
      <span uiBreadcrumbPage>Current</span>
    </li>
  </ol>
</nav>`
  },
  api: {
    props: [
      { name: 'uiBreadcrumb', description: 'Main breadcrumb navigation container', type: 'Directive' },
      { name: 'uiBreadcrumbList', description: 'Breadcrumb list wrapper (ol/ul)', type: 'Directive' },
      { name: 'uiBreadcrumbItem', description: 'Individual breadcrumb item', type: 'Directive' },
      { name: 'uiBreadcrumbLink', description: 'Clickable breadcrumb link', type: 'Directive' },
      { name: 'uiBreadcrumbPage', description: 'Current page indicator (non-clickable)', type: 'Directive' },
      { name: 'uiBreadcrumbSeparator', description: 'Separator between breadcrumb items', type: 'Directive' },
      { name: 'uiBreadcrumbEllipsis', description: 'Collapsed items indicator', type: 'Directive' }
    ]
  }
};
