import { Component } from '@angular/core';
import { UiCard, UiCardAction, UiCardContent, UiCardDescription, UiCardFooter, UiCardHeader, UiCardTitle } from 'ui';
import { UiButton } from 'ui';
import { IVariant, IComponentMeta } from '@components/component-preview/component-preview';

@Component({
  selector: 'card-default-example',
  template: `
    <div uiCard>
      <div uiCardHeader>
        <div uiCardTitle>Card title</div>
        <div uiCardDescription>Card description</div>
        <div uiCardAction>
          <button uiButton size="sm">Action</button>
        </div>
      </div>
      <div uiCardContent>
        This is the card content area.
      </div>
      <div uiCardFooter>
        <button uiButton variant="secondary" size="sm">Cancel</button>
        <button uiButton size="sm">Save</button>
      </div>
    </div>
  `,
  imports: [UiCard, UiCardHeader, UiCardTitle, UiCardDescription, UiCardAction, UiCardContent, UiCardFooter, UiButton]
})
export class CardDefaultExample {}

export const cardMeta: IComponentMeta = {
  title: 'Card',
  description: 'Displays content within a container with header, content and footer slots.',
  installation: {
    package: 'card',
    import: `import { UiCard, UiCardHeader, UiCardTitle, UiCardDescription, UiCardAction, UiCardContent, UiCardFooter } from '@components/ui/card';`,
    usage: `<div uiCard>
  <div uiCardHeader>
    <div uiCardTitle>Title</div>
    <div uiCardDescription>Description</div>
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
    description: 'Card with header, content and footer.',
    code: `import { UiCard, UiCardAction, UiCardContent, UiCardDescription, UiCardFooter, UiCardHeader, UiCardTitle } from '@components/ui/card';
import { UiButton } from '@components/ui/button';

@Component({
  selector: 'card-default-example',
  template: \`
    <div uiCard>
      <div uiCardHeader>
        <div uiCardTitle>Card title</div>
        <div uiCardDescription>Card description</div>
        <div uiCardAction>
          <button uiButton size=\"sm\">Action</button>
        </div>
      </div>
      <div uiCardContent>
        This is the card content area.
      </div>
      <div uiCardFooter>
        <button uiButton variant=\"secondary\" size=\"sm\">Cancel</button>
        <button uiButton size=\"sm\">Save</button>
      </div>
    </div>
  \`,
  imports: [UiCard, UiCardHeader, UiCardTitle, UiCardDescription, UiCardAction, UiCardContent, UiCardFooter, UiButton]
})
export class CardDefaultExample {}`,
    component: CardDefaultExample
  }
];

