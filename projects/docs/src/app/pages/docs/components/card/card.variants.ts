import { Component } from '@angular/core';
import { UiCard, UiCardAction, UiCardContent, UiCardDescription, UiCardFooter, UiCardHeader, UiCardTitle, UiFormField } from 'ui';
import { UiButton } from 'ui';
import { UiInput, UiLabel } from 'ui';
import { IVariant, IComponentMeta } from '@components/component-preview/component-preview';

@Component({
  selector: 'card-default-example',
  template: `
    <div uiCard class="w-full max-w-sm">
      <div uiCardHeader>
        <div uiCardTitle>Login to your account</div>
        <div uiCardDescription>
          Enter your email below to login to your account
        </div>
        <div uiCardAction>
          <button uiButton variant="link">Sign Up</button>
        </div>
      </div>
      <div uiCardContent>
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
      </div>
      <div uiCardFooter class="flex-col gap-2">
        <button uiButton type="submit" class="w-full">
          Login
        </button>
        <button uiButton variant="outline" class="w-full">
          Login with Google
        </button>
      </div>
    </div>
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
import { UiCard, UiCardAction, UiCardContent, UiCardDescription, UiCardFooter, UiCardHeader, UiCardTitle } from '@workspace/ui/directives/card';
import { UiInput } from '@workspace/ui/directives/input';
import { UiLabel } from '@workspace/ui/directives/label';
import { UiButton } from '@workspace/ui/directives/button';
import { UiFormField } from '@workspace/ui/directives/form-field';

@Component({
  selector: 'card-default-example',
  template: \`
    <div uiCard class="w-full max-w-sm">
      <div uiCardHeader>
        <div uiCardTitle>Login to your account</div>
        <div uiCardDescription>
          Enter your email below to login to your account
        </div>
        <div uiCardAction>
          <button uiButton variant="link">Sign Up</button>
        </div>
      </div>
      <div uiCardContent>
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
      </div>
      <div uiCardFooter class="flex-col gap-2">
        <button uiButton type="submit" class="w-full">
          Login
        </button>
        <button uiButton variant="outline" class="w-full">
          Login with Google
        </button>
      </div>
    </div>
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

