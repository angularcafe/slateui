import { Component } from '@angular/core';
import { UiBreadcrumb, UiBreadcrumbItem, UiBreadcrumbLink, UiBreadcrumbPage, UiBreadcrumbSeparator, UiBreadcrumbList, UiBreadcrumbEllipsis, UiDropdownMenu, UiDropdownMenuTrigger, UiDropdownMenuItem } from 'ui';
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
          <span uiBreadcrumbEllipsis [uiDropdownMenuTrigger]="menu">
            <ng-icon name="lucideEllipsis" size="16" />
          </span>
          <ng-template #menu>
            <div uiDropdownMenu class="w-56">
              <button uiDropdownMenuItem>Documentation </button>
              <button uiDropdownMenuItem>API</button>
              <button uiDropdownMenuItem>Examples</button>
            </div>
          </ng-template>
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
  imports: [UiBreadcrumb, UiBreadcrumbList, UiBreadcrumbItem, UiBreadcrumbLink, UiBreadcrumbPage, UiBreadcrumbSeparator, UiBreadcrumbEllipsis, NgIcon, UiDropdownMenu, UiDropdownMenuTrigger, UiDropdownMenuItem],
  providers: [provideIcons({ lucideChevronRight, lucideEllipsis })]
})
export class BreadcrumbCollapsedExample {}

export const breadcrumbVariants: IVariant[] = [
  {
    title: 'Default',
    description: 'A basic breadcrumb navigation showing the current page hierarchy.',
    code: `import { 
  UiBreadcrumb, 
  UiBreadcrumbList, 
  UiBreadcrumbItem, 
  UiBreadcrumbLink, 
  UiBreadcrumbPage, 
  UiBreadcrumbSeparator
} from '@workspace/ui/directives/breadcrumb';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronRight } from '@ng-icons/lucide';

@Component({
  selector: 'breadcrumb-default-example',
  template: \`
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
  \`,
  imports: [UiBreadcrumb, UiBreadcrumbList, UiBreadcrumbItem, UiBreadcrumbLink, UiBreadcrumbPage, UiBreadcrumbSeparator, NgIcon],
  providers: [provideIcons({ lucideChevronRight })]
})
export class BreadcrumbDefaultExample {}`,
    component: BreadcrumbDefaultExample
  },
  {
    title: 'With Icons',
    description: 'Breadcrumb navigation with icons for each navigation level.',
    code: `import { 
  UiBreadcrumb, 
  UiBreadcrumbList, 
  UiBreadcrumbItem, 
  UiBreadcrumbLink, 
  UiBreadcrumbPage, 
  UiBreadcrumbSeparator
} from '@workspace/ui/directives/breadcrumb';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronRight, lucideHouse, lucideFileText, lucideSettings } from '@ng-icons/lucide';

@Component({
  selector: 'breadcrumb-with-icons-example',
  template: \`
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
  \`,
  imports: [UiBreadcrumb, UiBreadcrumbList, UiBreadcrumbItem, UiBreadcrumbLink, UiBreadcrumbPage, UiBreadcrumbSeparator, NgIcon],
  providers: [provideIcons({ lucideChevronRight, lucideHouse, lucideFileText, lucideSettings })]
})
export class BreadcrumbWithIconsExample {}`,
    component: BreadcrumbWithIconsExample
  },
  {
    title: 'Collapsed',
    description: 'Breadcrumb with collapsed items shown in a dropdown menu for better space management.',
    code: `import { 
  UiBreadcrumb, 
  UiBreadcrumbList, 
  UiBreadcrumbItem, 
  UiBreadcrumbLink, 
  UiBreadcrumbPage, 
  UiBreadcrumbSeparator, 
  UiBreadcrumbEllipsis
} from '@workspace/ui/directives/breadcrumb';
import { UiDropdownMenu, UiDropdownMenuTrigger, UiDropdownMenuItem } from '@workspace/ui/directives/dropdown-menu';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronRight, lucideEllipsis } from '@ng-icons/lucide';

@Component({
  selector: 'breadcrumb-collapsed-example',
  template: \`
    <nav uiBreadcrumb>
      <ol uiBreadcrumbList>
        <li uiBreadcrumbItem>
          <a uiBreadcrumbLink href="#">Home</a>
        </li>
        <li uiBreadcrumbSeparator>
          <ng-icon name="lucideChevronRight" size="16" />
        </li>
        <li uiBreadcrumbItem>
          <span uiBreadcrumbEllipsis [uiDropdownMenuTrigger]="menu">
            <ng-icon name="lucideEllipsis" size="16" />
          </span>
          <ng-template #menu>
            <div uiDropdownMenu class="w-56">
              <button uiDropdownMenuItem>Documentation</button>
              <button uiDropdownMenuItem>API</button>
              <button uiDropdownMenuItem>Examples</button>
            </div>
          </ng-template>
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
  \`,
  imports: [UiBreadcrumb, UiBreadcrumbList, UiBreadcrumbItem, UiBreadcrumbLink, UiBreadcrumbPage, UiBreadcrumbSeparator, UiBreadcrumbEllipsis, NgIcon, UiDropdownMenu, UiDropdownMenuTrigger, UiDropdownMenuItem],
  providers: [provideIcons({ lucideChevronRight, lucideEllipsis })]
})
export class BreadcrumbCollapsedExample {}`,
    component: BreadcrumbCollapsedExample
  }
];

export const breadcrumbMeta: IComponentMeta = {
  title: 'Breadcrumb',
  description: 'A navigation component that shows the current page location within a hierarchy.',
  installation: {
    package: 'breadcrumb',
    import: `import { UiBreadcrumb, UiBreadcrumbList, UiBreadcrumbItem, UiBreadcrumbLink, UiBreadcrumbPage, UiBreadcrumbSeparator, UiBreadcrumbEllipsis } from '@workspace/ui/directives/breadcrumb';
import { UiDropdownMenu, UiDropdownMenuTrigger, UiDropdownMenuItem } from '@workspace/ui/directives/dropdown-menu';`,
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
