import { Component } from '@angular/core';
import { UiCard, UiCardAction, UiCardContent, UiCardDescription, UiCardFooter, UiCardHeader, UiCardTitle, UiFormField } from 'ui';
import { UiButton } from 'ui';
import { UiInput, UiLabel } from 'ui';
import { IVariant, IComponentMeta } from '@components/component-preview/component-preview';

@Component({
  selector: 'card-default-example',
  template: `
    <ui-card class="w-full max-w-sm">
      <ui-card-header>
        <ui-card-title>Login to your account</ui-card-title>
        <ui-card-description>
          Enter your email below to login to your account
        </ui-card-description>
        <ui-card-action>
          <button uiButton variant="link">Sign Up</button>
        </ui-card-action>
      </ui-card-header>
      <ui-card-content>
        <form>
          <div class="flex flex-col gap-6">
            <div class="grid gap-2" uiFormField>
              <label uiLabel>Email</label>
              <input uiInput type="email" placeholder="m@example.com" required />
            </div>
            <div class="grid gap-2" uiFormField>
              <div class="flex items-center">
                <label uiLabel>Password</label>
                <a href="#" uiButton variant="link" class="ml-auto" >
                  Forgot your password?
                </a>
              </div>
              <input uiInput type="password" required />
            </div>
          </div>
        </form>
      </ui-card-content>
      <ui-card-footer class="flex-col gap-2">
        <button uiButton type="submit" class="w-full">
          Login
        </button>
        <button uiButton variant="outline" class="w-full">
          Login with Google
        </button>
      </ui-card-footer>
    </ui-card>
  `,
  imports: [UiCard, UiCardHeader, UiCardTitle, UiCardDescription, UiCardAction, UiCardContent, UiCardFooter, UiLabel, UiInput, UiButton, UiFormField],
  host: {
    class: 'w-2/3 mx-auto'
  }
})
export class CardDefaultExample {}

export const cardMeta: IComponentMeta = {
  title: 'Card',
  description: 'Displays a card with header, content, and footer.',
  installation: {
    package: 'card',
    import: `import { UiCard, UiCardHeader, UiCardTitle, UiCardDescription, UiCardAction, UiCardContent, UiCardFooter } from '@workspace/ui/directives/card';`,
    usage: `<div uiCard>
  <div uiCardHeader>
    <div uiCardTitle>Title</div>
    <div uiCardDescription>Description</div>
    <div uiCardAction>Action</div>
  </div>
  <div uiCardContent>Content</div>
  <div uiCardFooter>Footer</div>
</div>`
  },
  api: {
    props: [
      { name: 'class', type: 'string', description: 'Additional CSS classes for card container.' }
    ]
  }
};

export const cardVariants: IVariant[] = [
  {
    title: 'Default',
    description: 'Login to your account',
    code: `import { Component } from '@angular/core';
import { UiCard, UiCardAction, UiCardContent, UiCardDescription, UiCardFooter, UiCardHeader, UiCardTitle } from '@workspace/ui/card';
import { UiInput } from '@workspace/ui/input';
import { UiLabel } from '@workspace/ui/label';
import { UiButton } from '@workspace/ui/button';
import { UiFormField } from '@workspace/ui/form-field';

@Component({
  selector: 'card-default-example',
  template: \`
    <ui-card class="w-full max-w-sm">
      <ui-card-header>
        <ui-card-title>Login to your account</ui-card-title>
        <ui-card-description>
          Enter your email below to login to your account
        </ui-card-description>
        <ui-card-action>
          <button uiButton variant="link">Sign Up</button>
        </ui-card-action>
      </ui-card-header>
      <ui-card-content>
        <form>
          <div class="flex flex-col gap-6">
            <div class="grid gap-2" uiFormField>
              <label uiLabel>Email</label>
              <input uiInput type="email" placeholder="m@example.com" required />
            </div>
            <div class="grid gap-2" uiFormField>
              <div class="flex items-center">
                <label uiLabel>Password</label>
                <a href="#" uiButton variant="link" class="ml-auto" >
                  Forgot your password?
                </a>
              </div>
              <input uiInput type="password" required />
            </div>
          </div>
        </form>
      </ui-card-content>
      <ui-card-footer class="flex-col gap-2">
        <button uiButton type="submit" class="w-full">
          Login
        </button>
        <button uiButton variant="outline" class="w-full">
          Login with Google
        </button>
      </ui-card-footer>
    </ui-card>
  \`,
  imports: [UiCard, UiCardHeader, UiCardTitle, UiCardDescription, UiCardAction, UiCardContent, UiCardFooter, UiLabel, UiInput, UiButton, UiFormField],
  host: {
    class: 'w-2/3 mx-auto'
  }
})
export class CardDefaultExample {}`,
    component: CardDefaultExample
  }
];

