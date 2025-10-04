import { Component } from '@angular/core';
import { UiAvatar, UiAvatarFallback, UiAvatarImage } from 'ui';
import { IVariant, IComponentMeta } from '@components/component-preview/component-preview';

@Component({
  selector: 'avatar-default-example',
  template: `
    <ui-avatar>
      <ui-avatar-image src="assets/avatar.png" alt="Avatar" />
      <ui-avatar-fallback>AB</ui-avatar-fallback>
    </ui-avatar>
  `,
  imports: [UiAvatar, UiAvatarImage, UiAvatarFallback]
})
export class AvatarDefaultExample {}

@Component({
  selector: 'avatar-fallback-delay-example',
  template: `
    <ui-avatar>
      <ui-avatar-image src="assets/avatar.png" alt="Broken" />
      <ui-avatar-fallback delay="500">AB</ui-avatar-fallback>
    </ui-avatar>
  `,
  imports: [UiAvatar, UiAvatarImage, UiAvatarFallback]
})
export class AvatarFallbackDelayExample {}

export const avatarMeta: IComponentMeta = {
  title: 'Avatar',
  description: 'An image representation of a user or entity with a fallback.',
  installation: {
    package: 'avatar',
    import: `import { UiAvatar, UiAvatarImage, UiAvatarFallback } from '@workspace/ui/avatar';`,
    usage: `<ui-avatar>
  <ui-avatar-image src="assets/avatar.png" alt="" />
  <ui-avatar-fallback>AB</ui-avatar-fallback>
</ui-avatar>`
  },
  api: {
    props: [
      { name: 'class', type: 'string', description: 'Additional CSS classes for the avatar container.' },
      { name: 'delay', type: 'number', default: '0', description: 'Delay in ms before showing fallback.' }
    ]
  }
};

export const avatarVariants: IVariant[] = [
  {
    title: 'Default',
    description: 'Avatar with image and fallback content.',
    code: `import { UiAvatar, UiAvatarImage, UiAvatarFallback } from '@workspace/ui/avatar';

@Component({
  selector: 'avatar-default-example',
  template: \`
    <ui-avatar>
      <ui-avatar-image src="assets/avatar.png" alt="Avatar" />
      <ui-avatar-fallback>AB</ui-avatar-fallback>
    </ui-avatar>
  \`,
  imports: [UiAvatar, UiAvatarImage, UiAvatarFallback]
})
export class AvatarDefaultExample {}`,
    component: AvatarDefaultExample
  },
  {
    title: 'Fallback delay',
    description: 'Show fallback after a delay when image fails to load.',
    code: `import { UiAvatar, UiAvatarImage, UiAvatarFallback } from '@workspace/ui/avatar';

@Component({
  selector: 'avatar-fallback-delay-example',
  template: \`
    <ui-avatar>
      <ui-avatar-image src="assets/avatar.png" alt="Broken" />
      <ui-avatar-fallback delay="500">AB</ui-avatar-fallback>
    </ui-avatar>
  \`,
  imports: [UiAvatar, UiAvatarImage, UiAvatarFallback]
})
export class AvatarFallbackDelayExample {}`,
    component: AvatarFallbackDelayExample
  }
];

