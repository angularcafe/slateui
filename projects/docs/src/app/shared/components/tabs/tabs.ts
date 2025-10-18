import { NgTemplateOutlet } from '@angular/common';
import { Component, contentChildren, model } from '@angular/core';
import { Tab } from '@components/tab/tab';
import {
  NgpTabButton,
  NgpTabList,
  NgpTabPanel,
  NgpTabset,
} from 'ng-primitives/tabs';
@Component({
  selector: 'docs-tabs',
  imports: [NgpTabset, NgpTabButton, NgpTabList, NgpTabPanel, NgTemplateOutlet],
  templateUrl: './tabs.html',
})
export class Tabs {
  /**
   * The value of the selected tab.
   */
  readonly value = model<string>();

  /**
   * The tabs in the group.
   */
  readonly tabs = contentChildren(Tab);
}
