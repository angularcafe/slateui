import { Component } from '@angular/core';
import { UiTabs, UiTabsList, UiTabsTrigger, UiTabsContent } from 'ui';
import { IVariant, IComponentMeta } from '@components/component-preview/component-preview';

// Tabs example components for dynamic rendering
@Component({
  selector: 'tabs-default-example',
  template: `
    <div uiTabs class="w-full max-w-md">
      <div uiTabsList>
        <button uiTabsTrigger uiTabsTriggerValue="account">Account</button>
        <button uiTabsTrigger uiTabsTriggerValue="password">Password</button>
      </div>
      <div uiTabsContent uiTabsContentValue="account">
        <div class="p-4">Make changes to your account here.</div>
      </div>
      <div uiTabsContent uiTabsContentValue="password">
        <div class="p-4">Change your password here.</div>
      </div>
    </div>
  `,
  imports: [UiTabs, UiTabsList, UiTabsTrigger, UiTabsContent]
})
export class TabsDefaultExample {}

@Component({
  selector: 'tabs-with-icons-example',
  template: `
    <div uiTabs class="w-full max-w-md">
      <div uiTabsList>
        <button uiTabsTrigger uiTabsTriggerValue="account">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          Account
        </button>
        <button uiTabsTrigger uiTabsTriggerValue="password">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
          Password
        </button>
      </div>
      <div uiTabsContent uiTabsContentValue="account">
        <div class="p-4">Make changes to your account here.</div>
      </div>
      <div uiTabsContent uiTabsContentValue="password">
        <div class="p-4">Change your password here.</div>
      </div>
    </div>
  `,
  imports: [UiTabs, UiTabsList, UiTabsTrigger, UiTabsContent]
})
export class TabsWithIconsExample {}

@Component({
  selector: 'tabs-vertical-example',
  template: `
    <div uiTabs uiTabsOrientation="vertical" class="w-full max-w-md">
      <div uiTabsList class="flex-col h-auto">
        <button uiTabsTrigger uiTabsTriggerValue="account">Account</button>
        <button uiTabsTrigger uiTabsTriggerValue="password">Password</button>
        <button uiTabsTrigger uiTabsTriggerValue="notifications">Notifications</button>
      </div>
      <div uiTabsContent uiTabsContentValue="account">
        <div class="p-4">Make changes to your account here.</div>
      </div>
      <div uiTabsContent uiTabsContentValue="password">
        <div class="p-4">Change your password here.</div>
      </div>
      <div uiTabsContent uiTabsContentValue="notifications">
        <div class="p-4">Manage your notifications here.</div>
      </div>
    </div>
  `,
  imports: [UiTabs, UiTabsList, UiTabsTrigger, UiTabsContent]
})
export class TabsVerticalExample {}

@Component({
  selector: 'tabs-disabled-example',
  template: `
    <div uiTabs class="w-full max-w-md">
      <div uiTabsList>
        <button uiTabsTrigger uiTabsTriggerValue="account">Account</button>
        <button uiTabsTrigger uiTabsTriggerValue="password" uiTabsTriggerDisabled>Password</button>
        <button uiTabsTrigger uiTabsTriggerValue="notifications">Notifications</button>
      </div>
      <div uiTabsContent uiTabsContentValue="account">
        <div class="p-4">Make changes to your account here.</div>
      </div>
      <div uiTabsContent uiTabsContentValue="password">
        <div class="p-4">Change your password here.</div>
      </div>
      <div uiTabsContent uiTabsContentValue="notifications">
        <div class="p-4">Manage your notifications here.</div>
      </div>
    </div>
  `,
  imports: [UiTabs, UiTabsList, UiTabsTrigger, UiTabsContent]
})
export class TabsDisabledExample {}

export const tabsMeta: IComponentMeta = {
  title: 'Tabs',
  description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  installation: {
    package: 'tabs',
    import: `import { UiTabs, UiTabsList, UiTabsTrigger, UiTabsContent } from '@workspace/ui/directives';`,
    usage: `
<div uiTabs>
  <div uiTabsList>
    <button uiTabsTrigger uiTabsTriggerValue="tab1">Tab 1</button>
  </div>
  <div uiTabsContent uiTabsContentValue="tab1">Content</div>
</div>`
  },
  api: {
    props: [
      {
        name: 'uiTabs',
        type: 'Directive',
        description: 'The main tabs container directive.'
      },
      {
        name: 'uiTabsList',
        type: 'Directive',
        description: 'The container for tab triggers.'
      },
      {
        name: 'uiTabsTrigger',
        type: 'Directive',
        description: 'The clickable tab button.'
      },
      {
        name: 'uiTabsContent',
        type: 'Directive',
        description: 'The content panel for each tab.'
      },
      {
        name: 'uiTabsValue',
        type: 'string',
        description: 'The value of the currently selected tab.'
      },
      {
        name: 'uiTabsOrientation',
        type: '"horizontal" | "vertical"',
        default: '"horizontal"',
        description: 'The orientation of the tabs.'
      },
      {
        name: 'uiTabsTriggerValue',
        type: 'string',
        description: 'The value associated with this tab trigger.'
      },
      {
        name: 'uiTabsTriggerDisabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the tab trigger is disabled.'
      },
      {
        name: 'uiTabsContentValue',
        type: 'string',
        description: 'The value that matches this content panel to its trigger.'
      },
      {
        name: 'class',
        type: 'string',
        description: 'Additional CSS classes to apply to the element.'
      }
    ]
  }
};

export const tabsVariants: IVariant[] = [
  {
    title: 'Default',
    description: 'Basic horizontal tabs with text labels.',
    code: `import { UiTabs, UiTabsList, UiTabsTrigger, UiTabsContent } from '@workspace/ui/directives';

@Component({
  selector: 'tabs-default-example',
  template: \`
    <div uiTabs class="w-full max-w-md">
      <div uiTabsList>
        <button uiTabsTrigger uiTabsTriggerValue="account">Account</button>
        <button uiTabsTrigger uiTabsTriggerValue="password">Password</button>
      </div>
      <div uiTabsContent uiTabsContentValue="account">
        <div class="p-4">Make changes to your account here.</div>
      </div>
      <div uiTabsContent uiTabsContentValue="password">
        <div class="p-4">Change your password here.</div>
      </div>
    </div>
  \`,
  imports: [UiTabs, UiTabsList, UiTabsTrigger, UiTabsContent]
})
export class TabsDefaultExample {}`,
    component: TabsDefaultExample
  },
  {
    title: 'With Icons',
    description: 'Tabs with icons alongside text labels.',
    code: `import { UiTabs, UiTabsList, UiTabsTrigger, UiTabsContent } from '@workspace/ui/directives';

@Component({
  selector: 'tabs-with-icons-example',
  template: \`
    <div uiTabs class="w-full max-w-md">
      <div uiTabsList>
        <button uiTabsTrigger uiTabsTriggerValue="account">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          Account
        </button>
        <button uiTabsTrigger uiTabsTriggerValue="password">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
          Password
        </button>
      </div>
      <div uiTabsContent uiTabsContentValue="account">
        <div class="p-4">Make changes to your account here.</div>
      </div>
      <div uiTabsContent uiTabsContentValue="password">
        <div class="p-4">Change your password here.</div>
      </div>
    </div>
  \`,
  imports: [UiTabs, UiTabsList, UiTabsTrigger, UiTabsContent]
})
export class TabsWithIconsExample {}`,
    component: TabsWithIconsExample
  },
  {
    title: 'Vertical',
    description: 'Tabs arranged vertically instead of horizontally.',
    code: `import { UiTabs, UiTabsList, UiTabsTrigger, UiTabsContent } from '@workspace/ui/directives';

@Component({
  selector: 'tabs-vertical-example',
  template: \`
    <div uiTabs uiTabsOrientation="vertical" class="w-full max-w-md">
      <div uiTabsList class="flex-col h-auto">
        <button uiTabsTrigger uiTabsTriggerValue="account">Account</button>
        <button uiTabsTrigger uiTabsTriggerValue="password">Password</button>
        <button uiTabsTrigger uiTabsTriggerValue="notifications">Notifications</button>
      </div>
      <div uiTabsContent uiTabsContentValue="account">
        <div class="p-4">Make changes to your account here.</div>
      </div>
      <div uiTabsContent uiTabsContentValue="password">
        <div class="p-4">Change your password here.</div>
      </div>
      <div uiTabsContent uiTabsContentValue="notifications">
        <div class="p-4">Manage your notifications here.</div>
      </div>
    </div>
  \`,
  imports: [UiTabs, UiTabsList, UiTabsTrigger, UiTabsContent]
})
export class TabsVerticalExample {}`,
    component: TabsVerticalExample
  },
  {
    title: 'Disabled',
    description: 'Tabs with disabled states for certain triggers.',
    code: `import { UiTabs, UiTabsList, UiTabsTrigger, UiTabsContent } from '@workspace/ui/directives';

@Component({
  selector: 'tabs-disabled-example',
  template: \`
    <div uiTabs class="w-full max-w-md">
      <div uiTabsList>
        <button uiTabsTrigger uiTabsTriggerValue="account">Account</button>
        <button uiTabsTrigger uiTabsTriggerValue="password" uiTabsTriggerDisabled>Password</button>
        <button uiTabsTrigger uiTabsTriggerValue="notifications">Notifications</button>
      </div>
      <div uiTabsContent uiTabsContentValue="account">
        <div class="p-4">Make changes to your account here.</div>
      </div>
      <div uiTabsContent uiTabsContentValue="password">
        <div class="p-4">Change your password here.</div>
      </div>
      <div uiTabsContent uiTabsContentValue="notifications">
        <div class="p-4">Manage your notifications here.</div>
      </div>
    </div>
  \`,
  imports: [UiTabs, UiTabsList, UiTabsTrigger, UiTabsContent]
})
export class TabsDisabledExample {}`,
    component: TabsDisabledExample
  }
]; 