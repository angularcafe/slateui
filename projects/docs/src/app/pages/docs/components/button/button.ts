import { Component, signal } from '@angular/core';
import { Tab } from '@components/tab/tab';
import { Tabs } from '@components/tabs/tabs';
import { buttonVariants } from './button.variants';
import { UiButton } from 'ui';

@Component({
  selector: 'docs-button',
  imports: [Tabs, Tab, UiButton],
  templateUrl: './button.html'
})
export class Button {
  buttonVariants = signal(buttonVariants);
}
