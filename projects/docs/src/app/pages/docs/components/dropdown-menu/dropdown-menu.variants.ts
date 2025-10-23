import { Component } from '@angular/core';
import { 
  UiDropdownMenu, 
  UiDropdownMenuTrigger, 
  UiDropdownMenuItem, 
  UiDropdownMenuShortcut, 
  UiDropdownMenuSeparator, 
  UiDropdownMenuLabel,
  UiDropdownSubmenuTrigger,
  UiButton
} from 'ui';
import { IVariant, IComponentMeta } from '@components/component-preview/component-preview';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { 
  lucideChevronRight, 
  lucideSettings,
  lucideUser,
  lucideLogOut
} from '@ng-icons/lucide';

// Basic dropdown menu example
@Component({
  selector: 'dropdown-menu-basic-example',
  template: `
    <div class="relative">
      <button uiButton variant="outline" [uiDropdownMenuTrigger]="menu">
        Open Menu
      </button>
      <ng-template #menu>
        <div uiDropdownMenu class="w-56">
          <button uiDropdownMenuItem>
            <ng-icon name="lucideUser" size="16" />
            Profile
          </button>
          <button uiDropdownMenuItem>
            <ng-icon name="lucideSettings" size="16" />
            Settings
          </button>
          <div uiDropdownMenuSeparator></div>
          <button uiDropdownMenuItem>
            <ng-icon name="lucideLogOut" size="16" />
            Logout
          </button>
        </div>
      </ng-template>
    </div>
  `,
  imports: [UiButton, UiDropdownMenu, UiDropdownMenuTrigger, UiDropdownMenuItem, UiDropdownMenuSeparator, NgIcon],
  providers: [provideIcons({ lucideUser, lucideSettings, lucideLogOut })]
})
export class DropdownMenuBasicExample {}

// Dropdown menu with shortcuts
@Component({
  selector: 'dropdown-menu-shortcuts-example',
  template: `
    <div class="relative">
      <button uiButton variant="outline" [uiDropdownMenuTrigger]="menu">
        Actions
      </button>
      <ng-template #menu>
        <div uiDropdownMenu class="w-56">
          <button uiDropdownMenuItem>
            Copy
            <div uiDropdownMenuShortcut>⌘C</div>
          </button>
          <button uiDropdownMenuItem>
            Edit
            <div uiDropdownMenuShortcut>⌘E</div>
          </button>
        </div>
      </ng-template>
    </div>
  `,
  imports: [UiButton, UiDropdownMenu, UiDropdownMenuTrigger, UiDropdownMenuItem, UiDropdownMenuShortcut]
})
export class DropdownMenuShortcutsExample {}

// Dropdown menu with labels
@Component({
  selector: 'dropdown-menu-labels-example',
  template: `
    <div class="relative">
      <button uiButton variant="outline" [uiDropdownMenuTrigger]="menu">
        More Options
      </button>
      <ng-template #menu>
        <div uiDropdownMenu class="w-56">
          <div uiDropdownMenuLabel>File Operations</div>
          <button uiDropdownMenuItem>Copy</button>
          <button uiDropdownMenuItem>Edit</button>
          <div uiDropdownMenuSeparator></div>
          <div uiDropdownMenuLabel>Danger Zone</div>
          <button uiDropdownMenuItem>Delete</button>
        </div>
      </ng-template>
    </div>
  `,
  imports: [UiButton, UiDropdownMenu, UiDropdownMenuTrigger, UiDropdownMenuItem, UiDropdownMenuLabel, UiDropdownMenuSeparator]
})
export class DropdownMenuLabelsExample {}

// Dropdown menu with submenu
@Component({
  selector: 'dropdown-menu-submenu-example',
  template: `
    <div class="relative">
    <button uiButton variant="outline" [uiDropdownMenuTrigger]="menu1">Open</button>
        <ng-template #menu1>
            <div uiDropdownMenu class="w-56">
                <div uiDropdownMenuLabel>My Account</div>
                <div uiDropdownMenuSeparator></div>
                <button uiDropdownMenuItem>Profile <div uiDropdownMenuShortcut>⌘P</div></button>
                <button uiDropdownMenuItem>Billing <div uiDropdownMenuShortcut>⌘B</div></button>
                <button uiDropdownMenuItem>Settings <div uiDropdownMenuShortcut>⌘S</div></button>
                <button uiDropdownMenuItem>Keyboard shortcuts <div uiDropdownMenuShortcut>⌘K</div></button>
                <div uiDropdownMenuSeparator></div>
                <button uiDropdownMenuItem>Github</button>
                <button uiDropdownMenuItem>Support</button>
                <button uiDropdownMenuItem [uiDropdownSubmenuTrigger]="submenu">Invite User
                    <div uiDropdownMenuShortcut><ng-icon name="lucideChevronRight" /></div>
                </button>
                <div uiDropdownMenuSeparator></div>
                <button uiDropdownMenuItem>Logout <div uiDropdownMenuShortcut>⌘Q</div></button>
            </div>
        </ng-template>
        <ng-template #submenu>
            <div uiDropdownMenu>
                <button uiDropdownMenuItem>Email</button>
                <button uiDropdownMenuItem>Message</button>
                <div uiDropdownMenuSeparator></div>
                <button uiDropdownMenuItem>More..</button>
            </div>
        </ng-template>
    </div>
  `,
  imports: [UiButton, UiDropdownMenu, UiDropdownMenuTrigger, UiDropdownMenuItem, UiDropdownMenuShortcut, UiDropdownSubmenuTrigger, UiDropdownMenuSeparator, UiDropdownMenuLabel, NgIcon],
  providers: [provideIcons({ lucideChevronRight })]
})
export class DropdownMenuSubmenuExample {}

export const dropdownMenuMeta: IComponentMeta = {
  title: 'Dropdown Menu',
  description: 'A dropdown menu component that displays a list of actions or options in a floating panel.',
  installation: {
    package: 'dropdown-menu',
    import: `import { 
  UiDropdownMenu, 
  UiDropdownMenuTrigger, 
  UiDropdownMenuItem, 
  UiDropdownMenuShortcut, 
  UiDropdownMenuSeparator, 
  UiDropdownMenuLabel,
  UiDropdownSubmenuTrigger
} from '@workspace/ui/directives/dropdown-menu';
import { UiButton } from '@workspace/ui/directives/button';`,
    usage: `<button uiButton [uiDropdownMenuTrigger]="menu">Open Menu</button>
<ng-template #menu>
  <div uiDropdownMenu>
    <button uiDropdownMenuItem>Menu Item</button>
  </div>
</ng-template>`
  },
  api: {
    props: [
      {
        name: 'class',
        type: 'string',
        description: 'Additional CSS classes to apply to the dropdown menu components.'
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: 'Whether the dropdown menu item is disabled (for UiDropdownMenuItem).'
      },
      {
        name: 'uiDropdownMenuTrigger',
        type: 'string',
        description: 'Reference to the dropdown menu to trigger.'
      },
      {
        name: 'uiDropdownMenuTriggerDisabled',
        type: 'boolean',
        description: 'Whether the trigger is disabled.'
      },
      {
        name: 'uiDropdownMenuTriggerPlacement',
        type: '"top" | "bottom" | "left" | "right"',
        description: 'Preferred placement of the dropdown menu.'
      },
      {
        name: 'uiDropdownMenuTriggerOffset',
        type: 'number',
        description: 'Offset distance from the trigger.'
      },
      {
        name: 'uiDropdownMenuTriggerFlip',
        type: 'boolean',
        description: 'Whether to flip the menu when it overflows.'
      },
      {
        name: 'uiDropdownSubmenuTrigger',
        type: 'string',
        description: 'Reference to the submenu to trigger.'
      },
      {
        name: 'uiDropdownSubmenuTriggerDisabled',
        type: 'boolean',
        description: 'Whether the submenu trigger is disabled.'
      },
      {
        name: 'uiDropdownSubmenuTriggerPlacement',
        type: '"top" | "bottom" | "left" | "right"',
        description: 'Preferred placement of the submenu.'
      },
      {
        name: 'uiDropdownSubmenuTriggerOffset',
        type: 'number',
        description: 'Offset distance from the submenu trigger.'
      },
      {
        name: 'uiDropdownSubmenuTriggerFlip',
        type: 'boolean',
        description: 'Whether to flip the submenu when it overflows.'
      }
    ]
  }
};

export const dropdownMenuVariants: IVariant[] = [
  {
    title: 'Basic',
    description: 'A simple dropdown menu with basic menu items.',
    code: `import { 
  UiDropdownMenu, 
  UiDropdownMenuTrigger, 
  UiDropdownMenuItem, 
  UiDropdownMenuSeparator
} from '@workspace/ui/directives/dropdown-menu';
import { UiButton } from '@workspace/ui/directives/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideUser, lucideSettings, lucideLogOut } from '@ng-icons/lucide';

@Component({
  selector: 'dropdown-menu-basic-example',
  template: \`
    <div class="relative">
      <button uiButton variant="outline" [uiDropdownMenuTrigger]="menu">
        Open Menu
      </button>
      <ng-template #menu>
        <div uiDropdownMenu class="w-56">
          <button uiDropdownMenuItem>
            <ng-icon name="lucideUser" size="16" />
            Profile
          </button>
          <button uiDropdownMenuItem>
            <ng-icon name="lucideSettings" size="16" />
            Settings
          </button>
          <div uiDropdownMenuSeparator></div>
          <button uiDropdownMenuItem>
            <ng-icon name="lucideLogOut" size="16" />
            Logout
          </button>
        </div>
      </ng-template>
    </div>
  \`,
  imports: [UiButton, UiDropdownMenu, UiDropdownMenuTrigger, UiDropdownMenuItem, UiDropdownMenuSeparator, NgIcon],
  providers: [provideIcons({ lucideUser, lucideSettings, lucideLogOut })]
})
export class DropdownMenuBasicExample {}`,
    component: DropdownMenuBasicExample
  },
  {
    title: 'With Shortcuts',
    description: 'Dropdown menu items with keyboard shortcut indicators.',
    code: `import { 
  UiDropdownMenu, 
  UiDropdownMenuTrigger, 
  UiDropdownMenuItem, 
  UiDropdownMenuShortcut
} from '@workspace/ui/directives/dropdown-menu';
import { UiButton } from '@workspace/ui/directives/button';

@Component({
  selector: 'dropdown-menu-shortcuts-example',
  template: \`
    <div class="relative">
      <button uiButton variant="outline" [uiDropdownMenuTrigger]="menu">
        Actions
      </button>
      <ng-template #menu>
        <div uiDropdownMenu class="w-56">
          <button uiDropdownMenuItem>
            Copy
            <div uiDropdownMenuShortcut>⌘C</div>
          </button>
          <button uiDropdownMenuItem>
            Edit
            <div uiDropdownMenuShortcut>⌘E</div>
          </button>
        </div>
      </ng-template>
    </div>
  \`,
  imports: [UiButton, UiDropdownMenu, UiDropdownMenuTrigger, UiDropdownMenuItem, UiDropdownMenuShortcut]
})
export class DropdownMenuShortcutsExample {}`,
    component: DropdownMenuShortcutsExample
  },
  {
    title: 'With Labels',
    description: 'Dropdown menu with grouped items using labels and separators.',
    code: `import { 
  UiDropdownMenu, 
  UiDropdownMenuTrigger, 
  UiDropdownMenuItem, 
  UiDropdownMenuLabel, 
  UiDropdownMenuSeparator
} from '@workspace/ui/directives/dropdown-menu';
import { UiButton } from '@workspace/ui/directives/button';

@Component({
  selector: 'dropdown-menu-labels-example',
  template: \`
    <div class="relative">
      <button uiButton variant="outline" [uiDropdownMenuTrigger]="menu">
        More Options
      </button>
      <ng-template #menu>
        <div uiDropdownMenu class="w-56">
          <div uiDropdownMenuLabel>File Operations</div>
          <button uiDropdownMenuItem>Copy</button>
          <button uiDropdownMenuItem>Edit</button>
          <div uiDropdownMenuSeparator></div>
          <div uiDropdownMenuLabel>Danger Zone</div>
          <button uiDropdownMenuItem>Delete</button>
        </div>
      </ng-template>
    </div>
  \`,
  imports: [UiButton, UiDropdownMenu, UiDropdownMenuTrigger, UiDropdownMenuItem, UiDropdownMenuLabel, UiDropdownMenuSeparator]
})
export class DropdownMenuLabelsExample {}`,
    component: DropdownMenuLabelsExample
  },
  {
    title: 'With Submenu',
    description: 'Dropdown menu with nested submenu support.',
    code: `import { 
  UiDropdownMenu, 
  UiDropdownMenuTrigger, 
  UiDropdownMenuItem, 
  UiDropdownSubmenuTrigger, 
  UiDropdownMenuSeparator,
  UiDropdownMenuLabel,
  UiDropdownMenuShortcut
} from '@workspace/ui/directives/dropdown-menu';
import { UiButton } from '@workspace/ui/directives/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronRight } from '@ng-icons/lucide';

@Component({
  selector: 'dropdown-menu-submenu-example',
  template: \`
    <div class="relative">
      <button uiButton variant="outline" [uiDropdownMenuTrigger]="menu1">Open</button>
      <ng-template #menu1>
        <div uiDropdownMenu class="w-56">
          <div uiDropdownMenuLabel>My Account</div>
          <div uiDropdownMenuSeparator></div>
          <button uiDropdownMenuItem>Profile <div uiDropdownMenuShortcut>⌘P</div></button>
          <button uiDropdownMenuItem>Billing <div uiDropdownMenuShortcut>⌘B</div></button>
          <button uiDropdownMenuItem>Settings <div uiDropdownMenuShortcut>⌘S</div></button>
          <button uiDropdownMenuItem>Keyboard shortcuts <div uiDropdownMenuShortcut>⌘K</div></button>
          <div uiDropdownMenuSeparator></div>
          <button uiDropdownMenuItem>Github</button>
          <button uiDropdownMenuItem>Support</button>
          <button uiDropdownMenuItem [uiDropdownSubmenuTrigger]="submenu">Invite User
            <div uiDropdownMenuShortcut><ng-icon name="lucideChevronRight" /></div>
          </button>
          <div uiDropdownMenuSeparator></div>
          <button uiDropdownMenuItem>Logout <div uiDropdownMenuShortcut>⌘Q</div></button>
        </div>
      </ng-template>
      <ng-template #submenu>
        <div uiDropdownMenu>
          <button uiDropdownMenuItem>Email</button>
          <button uiDropdownMenuItem>Message</button>
          <div uiDropdownMenuSeparator></div>
          <button uiDropdownMenuItem>More..</button>
        </div>
      </ng-template>
    </div>
  \`,
  imports: [UiButton, UiDropdownMenu, UiDropdownMenuTrigger, UiDropdownMenuItem, UiDropdownSubmenuTrigger, UiDropdownMenuSeparator, UiDropdownMenuLabel, UiDropdownMenuShortcut, NgIcon],
  providers: [provideIcons({ lucideChevronRight })]
})
export class DropdownMenuSubmenuExample {}`,
    component: DropdownMenuSubmenuExample
  }
];
