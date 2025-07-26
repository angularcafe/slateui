import { Component, model } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideGithub, lucideMenu, lucideSun, lucideTwitter } from '@ng-icons/lucide';
import { SlButton } from 'ui';
@Component({
  selector: 'docs-header',
  imports: [NgIcon, SlButton, RouterLink],
  viewProviders: [provideIcons({ lucideGithub, lucideTwitter, lucideMenu, lucideSun })],
  templateUrl: './header.html'
})
export class Header {
  /**
   * Whether the mobile menu is open.
   */
  readonly menuOpen = model(false);

  toggle(): void {
    this.menuOpen.update(open => !open);
  }
}
